/**
 * Newsletter Subscription API Endpoint
 * POST /api/newsletter
 * Handles newsletter signups
 */

import { NextResponse } from 'next/server'
import { newsletterSchema, formatZodErrors } from '@/components/forms/validation'
import { sanitizeEmail, sanitizeInput } from '@/components/forms/validation'

// Rate limiting
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5 // Max 5 newsletter signups per hour

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

// Email validation (additional check for disposable emails)
function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    'tempmail.com',
    'guerrillamail.com',
    '10minutemail.com',
    'mailinator.com',
    'throwaway.email',
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
          message: 'Too many subscription attempts. Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Honeypot spam check
    if (body.website || body.url || body.honeypot) {
      console.warn('Spam detected in newsletter:', { ip, timestamp: new Date().toISOString() })

      // Return success to fool spammers
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing',
      })
    }

    // Validate input data
    const validationResult = newsletterSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email address',
          errors: formatZodErrors(validationResult.error),
        },
        { status: 400 }
      )
    }

    // Sanitize data
    const sanitizedEmail = sanitizeEmail(validationResult.data.email)
    const firstName = validationResult.data.firstName ? sanitizeInput(validationResult.data.firstName) : undefined

    // Check for disposable email
    if (isDisposableEmail(sanitizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Disposable email addresses are not allowed',
        },
        { status: 400 }
      )
    }

    // Generate subscriber ID
    const subscriberId = `sub-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // TODO: Save to newsletter database/mailing list
    // await saveNewsletterSubscription({
    //   id: subscriberId,
    //   email: sanitizedEmail,
    //   firstName,
    //   source: body.source,
    //   interests: body.interests,
    //   ip,
    //   subscribedAt: new Date().toISOString(),
    //   status: 'pending', // Require double opt-in
    // })

    // TODO: Send confirmation email with double opt-in link
    // await sendEmailNotification({
    //   to: [sanitizedEmail],
    //   subject: 'Confirm your subscription - Farahat & Co Newsletter',
    //   template: 'newsletter-confirm',
    //   data: {
    //     firstName,
    //     confirmationLink: `${process.env.NEXT_PUBLIC_SITE_URL}/newsletter/confirm?token=${subscriberId}`,
    //   },
    // })

    // TODO: Add to mailing list service (e.g., Mailchimp, SendGrid, etc.)
    // await addToMailingList({
    //   email: sanitizedEmail,
    //   firstName,
    //   tags: body.interests || [],
    //   source: body.source,
    // })

    // Log for now (temporary)
    console.log('Newsletter Subscription:', {
      subscriberId,
      email: sanitizedEmail,
      firstName,
      metadata: {
        ip,
        source: body.source,
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! Please check your email to confirm your subscription.',
      subscriberId,
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again.',
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Newsletter API',
    version: '1.0.0',
  })
}
