/**
 * Email Service
 * Handles sending emails via Resend
 * Provides a simple interface for transactional emails
 */

import { Resend } from 'resend'

// Initialize Resend (will be undefined if API key not provided)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface EmailData {
  to: string | string[]
  subject: string
  html: string
  from?: string
  replyTo?: string
}

/**
 * Send an email using Resend
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string; emailId?: string }> {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend not configured - email not sent:', data.subject)
      return {
        success: false,
        error: 'Email service not configured'
      }
    }

    const fromEmail = data.from || process.env.FROM_EMAIL || 'noreply@auditfirmsdubai.ae'
    const fromName = process.env.FROM_NAME || 'Farahat & Co'

    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: data.to,
      subject: data.subject,
      html: data.html,
      replyTo: data.replyTo,
    })

    console.log('Email sent successfully:', {
      to: data.to,
      subject: data.subject,
      emailId: result.data?.id,
    })

    return {
      success: true,
      emailId: result.data?.id,
    }
  } catch (error) {
    console.error('Email sending failed:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Send email notification using template
 */
export async function sendEmailNotification(options: {
  to: string | string[]
  subject: string
  template: string
  data: Record<string, any>
  replyTo?: string
}): Promise<{ success: boolean; error?: string }> {
  try {
    // Import template functions dynamically
    const templates = await import('./templates')

    // Get the appropriate template function
    const templateFunction = templates[options.template as keyof typeof templates] as any

    if (!templateFunction) {
      throw new Error(`Template '${options.template}' not found`)
    }

    // Generate email content
    const emailContent = templateFunction(options.data)

    // Send email
    const result = await sendEmail({
      to: options.to,
      subject: emailContent.subject,
      html: emailContent.html,
      replyTo: options.replyTo,
    })

    return result
  } catch (error) {
    console.error('Email notification failed:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Check if email service is properly configured
 */
export function isEmailServiceConfigured(): boolean {
  return !!resend && !!process.env.RESEND_API_KEY
}

/**
 * Get email service status for health checks
 */
export function getEmailServiceStatus() {
  return {
    configured: isEmailServiceConfigured(),
    provider: 'Resend',
    fromEmail: process.env.FROM_EMAIL || 'noreply@auditfirmsdubai.ae',
  }
}
