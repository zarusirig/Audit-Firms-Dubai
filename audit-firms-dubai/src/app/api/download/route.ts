/**
 * Download Tracking API Endpoint
 * POST /api/download
 * Handles gated downloads with email capture and tracking
 */

import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getResourceById } from '@/lib/resources/catalog'
import { downloadDb, newsletterDb } from '@/lib/database'
import { sendEmailNotification } from '@/lib/email/service'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Validation schema
const downloadRequestSchema = z.object({
  resourceId: z.string().min(1, 'Resource ID is required'),
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().max(200).optional(),
  jobTitle: z.string().max(100).optional(),
  marketingConsent: z.boolean(),
  timestamp: z.string().optional(),
})

// Rate limiting
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 10 // Max 10 downloads per hour

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const userRequests = rateLimitMap.get(identifier) || []

  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  )

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(identifier, recentRequests)

  // Cleanup
  if (rateLimitMap.size > 500) {
    const cutoff = now - RATE_LIMIT_WINDOW
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const recent = timestamps.filter((t) => t > cutoff)
      if (recent.length === 0) {
        rateLimitMap.delete(key)
      } else {
        rateLimitMap.set(key, recent)
      }
    }
  }

  return true
}

// Sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
}

function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

// Disposable email detection
function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    'tempmail.com',
    'guerrillamail.com',
    '10minutemail.com',
    'mailinator.com',
    'throwaway.email',
    'temp-mail.org',
  ]

  const domain = email.split('@')[1]?.toLowerCase()
  return disposableDomains.includes(domain)
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many download requests. Please wait before downloading more resources.',
        },
        { status: 429 }
      )
    }

    // Parse and validate request
    const body = await request.json()
    const validationResult = downloadRequestSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
          })),
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Check for disposable email
    if (isDisposableEmail(data.email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please use a valid business or personal email address.',
        },
        { status: 400 }
      )
    }

    // Get resource details
    const resource = getResourceById(data.resourceId)
    if (!resource) {
      return NextResponse.json(
        {
          success: false,
          message: 'Resource not found',
        },
        { status: 404 }
      )
    }

    // Sanitize data
    const sanitizedData = {
      resourceId: data.resourceId,
      resourceTitle: resource.title,
      resourceCategory: resource.category,
      resourceFormat: resource.format,
      email: sanitizeEmail(data.email),
      name: sanitizeInput(data.name),
      company: data.company ? sanitizeInput(data.company) : undefined,
      jobTitle: data.jobTitle ? sanitizeInput(data.jobTitle) : undefined,
      marketingConsent: data.marketingConsent,
    }

    // Generate download tracking ID
    const downloadId = `download-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Save to database
    try {
      await downloadDb.create({
        ...sanitizedData,
        ip,
        userAgent: request.headers.get('user-agent') || undefined,
        status: 'completed',
      })
    } catch (dbError) {
      console.error('Database save error:', dbError)
      // Continue with email sending even if database fails
    }

    // Send download confirmation email with link
    try {
      await sendEmailNotification({
        to: [sanitizedData.email],
        subject: `Your Download: ${resource.title}`,
        template: 'downloadConfirmation',
        data: {
          name: sanitizedData.name,
          resourceTitle: resource.title,
          downloadUrl: resource.fileUrl,
          downloadId,
        },
      })
    } catch (emailError) {
      console.error('Download confirmation email failed:', emailError)
    }

    // If marketing consent, add to newsletter
    if (sanitizedData.marketingConsent) {
      try {
        // Check if email is already subscribed
        const existing = await newsletterDb.findByEmail(sanitizedData.email)
        if (existing.length === 0) {
          await newsletterDb.create({
            email: sanitizedData.email,
            firstName: sanitizedData.name.split(' ')[0],
            interests: [resource.category],
            source: 'resource-download',
            ip,
            userAgent: request.headers.get('user-agent') || undefined,
            status: 'confirmed', // Direct opt-in from download form
          })
        }
      } catch (newsletterError) {
        console.error('Newsletter subscription error:', newsletterError)
      }
    }

    // Send internal notification to sales team for high-value leads
    if (resource.category === 'audit-checklists' || resource.featured) {
      try {
        await sendEmailNotification({
          to: [process.env.SALES_EMAIL || 'info@farahatco.com'],
          subject: `High-Value Lead: Resource Download - ${resource.title}`,
          template: 'quoteNotification', // Using quote notification as template
          data: {
            submissionId: downloadId,
            companyName: sanitizedData.company || 'N/A',
            contactName: sanitizedData.name,
            email: sanitizedData.email,
            phone: 'N/A',
            services: [`Resource Download: ${resource.title}`],
            urgency: 'normal',
            priority: 'normal',
          },
          replyTo: sanitizedData.email,
        })
      } catch (salesEmailError) {
        console.error('Sales team notification failed:', salesEmailError)
      }
    }

    // Log download
    console.log('Download Tracked:', {
      downloadId,
      resource: resource.title,
      lead: sanitizedData,
      metadata: {
        ip,
        timestamp: new Date().toISOString(),
      },
    })

    // Return download URL
    return NextResponse.json({
      success: true,
      message: 'Download ready',
      downloadId,
      downloadUrl: resource.fileUrl,
      resourceTitle: resource.title,
    })
  } catch (error) {
    console.error('Download tracking error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your download. Please try again.',
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Download Tracking API',
    version: '1.0.0',
  })
}
