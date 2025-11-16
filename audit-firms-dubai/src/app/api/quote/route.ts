/**
 * Quote Request API Endpoint
 * POST /api/quote
 * Handles multi-step quote form submissions
 */

import { NextResponse } from 'next/server'
import { quoteFormSchema, formatZodErrors } from '@/components/forms/validation'
import { sanitizeInput, sanitizeEmail, sanitizePhone } from '@/components/forms/validation'
import { QuoteApiRequest } from '../types'

// Rate limiting
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 2 // Max 2 quote requests per hour

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
  if (rateLimitMap.size > 100) {
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

import { QuoteApiRequest, SpamDetectionResult } from '../types';

// Spam detection
function detectSpam(body: QuoteApiRequest): boolean {
  // Honeypot fields
  if (body.website || body.url || body.honeypot) {
    return true
  }

  // Check for suspicious patterns in requirements field
  if (body.specificRequirements && typeof body.specificRequirements === 'string') {
    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/gi,
      /\b(viagra|cialis|casino|poker)\b/gi,
      /<script/gi,
    ]

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(body.specificRequirements)) {
        return true
      }
    }
  }

  // Must agree to terms
  if (body.agreeToTerms !== true) {
    return true
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
          message: 'You have submitted too many quote requests recently. Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Spam detection
    if (detectSpam(body)) {
      console.warn('Spam detected in quote submission:', { ip, timestamp: new Date().toISOString() })

      // Return success to fool spammers
      return NextResponse.json({
        success: true,
        message: 'Thank you for your quote request',
        submissionId: 'spam-' + Date.now(),
      })
    }

    // Validate input data
    const validationResult = quoteFormSchema.safeParse(body)

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

    // Sanitize data
    const sanitizedData = {
      ...validationResult.data,
      companyName: sanitizeInput(validationResult.data.companyName),
      industry: sanitizeInput(validationResult.data.industry),
      contactName: sanitizeInput(validationResult.data.contactName),
      jobTitle: validationResult.data.jobTitle ? sanitizeInput(validationResult.data.jobTitle) : undefined,
      email: sanitizeEmail(validationResult.data.email),
      phone: sanitizePhone(validationResult.data.phone),
      currentAuditor: validationResult.data.currentAuditor ? sanitizeInput(validationResult.data.currentAuditor) : undefined,
      specificRequirements: validationResult.data.specificRequirements ? sanitizeInput(validationResult.data.specificRequirements) : undefined,
      budget: validationResult.data.budget ? sanitizeInput(validationResult.data.budget) : undefined,
      timeline: validationResult.data.timeline ? sanitizeInput(validationResult.data.timeline) : undefined,
      otherServiceDetails: validationResult.data.otherServiceDetails ? sanitizeInput(validationResult.data.otherServiceDetails) : undefined,
      website: validationResult.data.website || undefined,
      annualRevenue: validationResult.data.annualRevenue || undefined,
    }

    // Generate submission ID
    const submissionId = `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Calculate priority based on urgency and company size
    const priority =
      sanitizedData.urgency === 'urgent-72hrs' ? 'high' :
      sanitizedData.urgency === 'within-week' ? 'medium' :
      'normal'

    // TODO: Save to database
    // await saveQuoteSubmission(submissionId, sanitizedData, {
    //   ip,
    //   userAgent: request.headers.get('user-agent'),
    //   source: body.source,
    //   priority,
    //   timestamp: new Date().toISOString(),
    // })

    // TODO: Send email notification to sales team
    // await sendEmailNotification({
    //   to: ['sales@farahatco.com', 'info@farahatco.com'],
    //   subject: `New Quote Request [${priority.toUpperCase()}]: ${sanitizedData.companyName}`,
    //   template: 'quote',
    //   data: {
    //     ...sanitizedData,
    //     submissionId,
    //     priority,
    //   },
    //   replyTo: sanitizedData.email,
    // })

    // TODO: Send auto-responder to user
    // await sendEmailNotification({
    //   to: [sanitizedData.email],
    //   subject: 'Quote Request Received - Farahat & Co',
    //   template: 'quote-confirmation',
    //   data: {
    //     ...sanitizedData,
    //     submissionId,
    //   },
    // })

    // Log for now (temporary)
    console.log('Quote Form Submission:', {
      submissionId,
      priority,
      data: {
        ...sanitizedData,
        services: sanitizedData.services,
        companySize: sanitizedData.companySize,
        urgency: sanitizedData.urgency,
      },
      metadata: {
        ip,
        source: body.source,
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your quote request. Our team will contact you within 24 hours.',
      submissionId,
      priority,
    })
  } catch (error) {
    console.error('Quote form error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your quote request. Please try again.',
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Quote Request API',
    version: '1.0.0',
  })
}
