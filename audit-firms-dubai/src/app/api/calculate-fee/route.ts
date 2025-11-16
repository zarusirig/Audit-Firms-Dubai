/**
 * Audit Fee Calculation API Endpoint
 * POST /api/calculate-fee
 */

import { NextResponse } from 'next/server'
import { calculatorSchema } from '@/components/calculator/validation'
import { calculateAuditFee } from '@/components/calculator/CalculatorLogic'
import type { CalculatorInputs } from '@/components/calculator/types'

// Rate limiting (simple implementation)
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const userRequests = rateLimitMap.get(identifier) || []

  // Filter out requests outside the window
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(identifier, recentRequests)

  // Cleanup old entries every 100 requests
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

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Please wait a moment before calculating again',
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate input data
    const validationResult = calculatorSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.issues,
        },
        { status: 400 }
      )
    }

    // Calculate audit fee
    const inputs = validationResult.data as CalculatorInputs
    const result = calculateAuditFee(inputs)

    // Optional: Log calculation for analytics (implement your logging here)
    // await logCalculation(inputs, result)

    // Return result
    return NextResponse.json({
      success: true,
      result,
      calculatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Calculation error:', error)

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to calculate audit fee. Please try again.',
      },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Audit Fee Calculator API',
    version: '1.0.0',
  })
}
