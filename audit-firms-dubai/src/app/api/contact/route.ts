/**
 * Contact Form API Endpoint
 * POST /api/contact
 * Handles all contact form submissions with spam protection and validation
 */

import { NextResponse } from 'next/server'
import { quickContactSchema, contactFormSchema, formatZodErrors } from '@/components/forms/validation'
import { sanitizeInput, sanitizeEmail, sanitizePhone } from '@/components/forms/validation'
import { ContactApiRequest } from '../types'

// Rate limiting
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3 // Max 3 contact submissions per minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const userRequests = rateLimitMap.get(identifier) || []

  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(identifier, recentRequests)

  // Cleanup
  if (rateLimitMap.size > 200) {
    const cutoff = now - RATE_LIMIT_WINDOW
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const recent = timestamps.filter(t => t > cutoff)
      if (recent.length === 0) {
        rateLimitMap.delete(key)
      } else {
        rateLimitMap.set(key, recent)
      }
    }
  }

  return true
}

// Honeypot spam detection
function detectSpam(body: ContactApiRequest): boolean {
  // Check honeypot fields
  if (body.website || body.url || body.honeypot) {
    return true
  }

  // Check for suspicious patterns
  if (body.message && typeof body.message === 'string') {
    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/gi, // Multiple URLs
      /\b(viagra|cialis|casino|poker)\b/gi, // Spam keywords
      /<script/gi, // Script injection
    ]

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(body.message)) {
        return true
      }
    }
  }

  // Check submission speed (too fast = bot)
  if (body.timestamp) {
    const submissionTime = new Date(body.timestamp).getTime()
    const now = Date.now()
    const timeDiff = now - submissionTime

    // If submitted in less than 2 seconds, likely a bot
    if (timeDiff < 2000) {
      return true
    }
  }

  return false
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
          message: 'Too many requests. Please wait a moment before submitting again.',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Spam detection
    if (detectSpam(body)) {
      console.warn('Spam detected:', { ip, timestamp: new Date().toISOString() })

      // Return success to fool spammers
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message',
        submissionId: 'spam-' + Date.now(),
      })
    }

    // Determine form type and validate accordingly
    const formType = body.formType || 'general'
    let validationResult

    if (formType === 'quick-contact') {
      validationResult = quickContactSchema.safeParse(body)
    } else {
      validationResult = contactFormSchema.safeParse(body)
    }

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: formatZodErrors(validationResult.error),
        },
        { status: 400 }
      )
    }

    // Sanitize data - handle both form types
    const sanitizedData: any = {
      ...validationResult.data,
      name: sanitizeInput(validationResult.data.name),
      email: sanitizeEmail(validationResult.data.email),
      phone: 'phone' in validationResult.data && validationResult.data.phone ? sanitizePhone(validationResult.data.phone) : undefined,
      message: validationResult.data.message ? sanitizeInput(validationResult.data.message) : undefined,
    }

    // Add fields specific to general contact form
    if (formType !== 'quick-contact' && 'subject' in validationResult.data) {
      sanitizedData.subject = validationResult.data.subject ? sanitizeInput(validationResult.data.subject) : undefined
      sanitizedData.company = validationResult.data.company ? sanitizeInput(validationResult.data.company) : undefined
      sanitizedData.preferredContact = validationResult.data.preferredContact
    } else if ('service' in validationResult.data) {
      sanitizedData.service = validationResult.data.service
    }

    // Generate submission ID
    const submissionId = `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // TODO: Save to database
    // await saveContactSubmission(submissionId, sanitizedData, {
    //   ip,
    //   userAgent: request.headers.get('user-agent'),
    //   source: body.source,
    //   timestamp: new Date().toISOString(),
    // })

    // TODO: Send email notification
    // await sendEmailNotification({
    //   to: ['info@farahatco.com'],
    //   subject: `New Contact Form Submission: ${sanitizedData.subject || 'Quick Contact'}`,
    //   template: 'contact',
    //   data: sanitizedData,
    //   replyTo: sanitizedData.email,
    // })

    // TODO: Send auto-responder to user
    // await sendEmailNotification({
    //   to: [sanitizedData.email],
    //   subject: 'Thank you for contacting Farahat & Co',
    //   template: 'thank-you',
    //   data: sanitizedData,
    // })

    // Log for now (temporary until database is set up)
    console.log('Contact Form Submission:', {
      submissionId,
      formType,
      data: sanitizedData,
      metadata: {
        ip,
        source: body.source,
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
      submissionId,
    })
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Contact Form API',
    version: '1.0.0',
  })
}
