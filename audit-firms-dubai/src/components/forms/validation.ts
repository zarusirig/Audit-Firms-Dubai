/**
 * Form Validation Schemas
 * Comprehensive Zod validation for all forms
 */

import { z } from 'zod'

// UAE phone number validation regex (supports multiple formats)
const UAE_PHONE_REGEX = /^(\+971|00971|0)?[0-9]{9}$/

// Email validation (stricter than default)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Website URL validation
const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

/**
 * Quick Contact Form Schema
 */
export const quickContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  phone: z.string().regex(UAE_PHONE_REGEX, 'Please enter a valid UAE phone number'),
  service: z.enum([
    'external-audit',
    'internal-audit',
    'due-diligence',
    'forensic-audit',
    'rera-audit',
    'vat-audit',
    'tax-services',
    'advisory',
    'other',
  ], { message: 'Please select a service' }),
  message: z.string().max(500, 'Message is too long').optional(),
})

/**
 * Multi-Step Quote Form Schema
 */

// Step 1: Service Selection
export const quoteStep1Schema = z.object({
  services: z
    .array(
      z.enum([
        'external-audit',
        'internal-audit',
        'due-diligence',
        'forensic-audit',
        'rera-audit',
        'vat-audit',
        'tax-services',
        'advisory',
        'other',
      ])
    )
    .min(1, 'Please select at least one service'),
  otherServiceDetails: z.string().max(200).optional(),
})

// Step 2: Company Information
export const quoteStep2Schema = z.object({
  companyName: z.string().min(2, 'Company name is required').max(200),
  industry: z.string().min(2, 'Please select your industry').max(100),
  companySize: z.enum(['startup', 'small', 'medium', 'large', 'enterprise'], {
    message: 'Please select company size',
  }),
  annualRevenue: z.string().max(50).optional(),
  website: z.string().regex(URL_REGEX, 'Please enter a valid website URL').optional().or(z.literal('')),
})

// Step 3: Contact Details
export const quoteStep3Schema = z.object({
  contactName: z.string().min(2, 'Contact name is required').max(100),
  jobTitle: z.string().max(100).optional(),
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  phone: z.string().regex(UAE_PHONE_REGEX, 'Please enter a valid UAE phone number'),
  preferredContact: z.enum(['phone', 'email', 'whatsapp'], {
    message: 'Please select preferred contact method',
  }),
  urgency: z.enum(['flexible', 'within-month', 'within-week', 'urgent-72hrs'], {
    message: 'Please select urgency level',
  }),
})

// Step 4: Additional Details
export const quoteStep4Schema = z.object({
  currentAuditor: z.string().max(200).optional(),
  specificRequirements: z.string().max(1000).optional(),
  budget: z.string().max(100).optional(),
  timeline: z.string().max(200).optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
  marketingConsent: z.boolean(),
})

// Combined Quote Form Schema
export const quoteFormSchema = z.object({
  ...quoteStep1Schema.shape,
  ...quoteStep2Schema.shape,
  ...quoteStep3Schema.shape,
  ...quoteStep4Schema.shape,
})

/**
 * Newsletter Signup Schema
 */
export const newsletterSchema = z.object({
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  firstName: z.string().min(2).max(50).optional(),
  interests: z.array(z.string()).optional(),
  source: z.string().max(100).optional(),
})

/**
 * General Contact Form Schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  phone: z.string().regex(UAE_PHONE_REGEX, 'Please enter a valid UAE phone number').optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  company: z.string().max(200).optional(),
  preferredContact: z.enum(['phone', 'email', 'whatsapp']).optional(),
})

/**
 * Honeypot Schema (spam protection)
 */
export const honeypotSchema = z.object({
  website: z.string().length(0, 'Invalid submission'), // Should be empty
  url: z.string().length(0, 'Invalid submission'), // Should be empty
})

/**
 * Type inference from schemas
 */
export type QuickContactFormData = z.infer<typeof quickContactSchema>
export type QuoteStep1Data = z.infer<typeof quoteStep1Schema>
export type QuoteStep2Data = z.infer<typeof quoteStep2Schema>
export type QuoteStep3Data = z.infer<typeof quoteStep3Schema>
export type QuoteStep4Data = z.infer<typeof quoteStep4Schema>
export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Sanitization helpers
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[^\w\s@.,!?()-]/gi, '') // Remove special characters except common punctuation
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

export function sanitizePhone(phone: string): string {
  // Normalize UAE phone numbers to +971 format
  let cleaned = phone.replace(/\s/g, '').replace(/-/g, '')

  if (cleaned.startsWith('00971')) {
    cleaned = '+971' + cleaned.slice(5)
  } else if (cleaned.startsWith('0')) {
    cleaned = '+971' + cleaned.slice(1)
  } else if (!cleaned.startsWith('+971')) {
    cleaned = '+971' + cleaned
  }

  return cleaned
}

/**
 * Validation error formatter
 */
export function formatZodErrors(errors: z.ZodError): Record<string, string[]> {
  const formatted: Record<string, string[]> = {}

  errors.issues.forEach((error) => {
    const field = error.path.join('.')
    if (!formatted[field]) {
      formatted[field] = []
    }
    formatted[field].push(error.message)
  })

  return formatted
}
