/**
 * Form Types & Interfaces
 * Type definitions for all contact and lead capture forms
 */

// Contact method preferences
export type ContactMethod = 'phone' | 'email' | 'whatsapp'

// Service types for quote requests
export type ServiceType =
  | 'external-audit'
  | 'internal-audit'
  | 'due-diligence'
  | 'forensic-audit'
  | 'rera-audit'
  | 'vat-audit'
  | 'tax-services'
  | 'advisory'
  | 'other'

// Company size options
export type CompanySize = 'startup' | 'small' | 'medium' | 'large' | 'enterprise'

// Urgency levels
export type UrgencyLevel = 'flexible' | 'within-month' | 'within-week' | 'urgent-72hrs'

// Form submission status
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

// Quick Contact Form Data
export interface QuickContactFormData {
  name: string
  email: string
  phone: string
  service: ServiceType
  message?: string
}

// Multi-Step Quote Form Data
export interface QuoteFormData {
  // Step 1: Service Selection
  services: ServiceType[]
  otherServiceDetails?: string

  // Step 2: Company Information
  companyName: string
  industry: string
  companySize: CompanySize
  annualRevenue?: string
  website?: string

  // Step 3: Contact Details
  contactName: string
  jobTitle?: string
  email: string
  phone: string
  preferredContact: ContactMethod
  urgency: UrgencyLevel

  // Step 4: Additional Details
  currentAuditor?: string
  specificRequirements?: string
  budget?: string
  timeline?: string

  // Consent & Marketing
  agreeToTerms: boolean
  marketingConsent: boolean
}

// Newsletter Signup Data
export interface NewsletterFormData {
  email: string
  firstName?: string
  interests?: string[]
  source?: string
}

// Generic Contact Form Data
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  company?: string
  preferredContact?: ContactMethod
}

// API Response Types
export interface FormSubmissionResponse {
  success: boolean
  message: string
  submissionId?: string
  errors?: Record<string, string[]>
}

export interface EmailNotificationData {
  to: string[]
  subject: string
  template: 'contact' | 'quote' | 'newsletter' | 'thank-you'
  data: Record<string, any>
  replyTo?: string
}

// Service labels for display
export const SERVICE_LABELS: Record<ServiceType, string> = {
  'external-audit': 'External Audit',
  'internal-audit': 'Internal Audit',
  'due-diligence': 'Due Diligence',
  'forensic-audit': 'Forensic Audit',
  'rera-audit': 'RERA Audit',
  'vat-audit': 'VAT Audit',
  'tax-services': 'Tax Services',
  'advisory': 'Advisory Services',
  'other': 'Other Services',
}

// Company size labels
export const COMPANY_SIZE_LABELS: Record<CompanySize, string> = {
  'startup': 'Startup (1-10 employees)',
  'small': 'Small Business (11-50 employees)',
  'medium': 'Medium Business (51-250 employees)',
  'large': 'Large Corporation (251-1000 employees)',
  'enterprise': 'Enterprise (1000+ employees)',
}

// Urgency labels
export const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  'flexible': 'Flexible - No rush',
  'within-month': 'Within a month',
  'within-week': 'Within a week',
  'urgent-72hrs': 'Urgent - Within 72 hours',
}

// Contact method labels
export const CONTACT_METHOD_LABELS: Record<ContactMethod, string> = {
  'phone': 'Phone Call',
  'email': 'Email',
  'whatsapp': 'WhatsApp',
}

// Form field configurations
export interface FormFieldConfig {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'multi-select'
  placeholder?: string
  required: boolean
  options?: Array<{ value: string; label: string }>
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: RegExp
  }
  helpText?: string
}

// Form state management
export interface FormState<T> {
  data: Partial<T>
  errors: Record<string, string>
  touched: Record<string, boolean>
  status: SubmissionStatus
  submissionId?: string
}

// Honeypot field (spam protection)
export interface HoneypotField {
  name: string
  value: string
  shouldBeEmpty: boolean
}

// Rate limiting
export interface RateLimitInfo {
  identifier: string
  requestCount: number
  windowStart: number
  isLimited: boolean
}

// Form analytics tracking
export interface FormAnalytics {
  formId: string
  formName: string
  stepCompleted?: number
  totalSteps?: number
  fieldsFilled: string[]
  timeSpent: number
  abandonedAt?: string
  completedAt?: string
  source?: string
  device?: 'mobile' | 'tablet' | 'desktop'
}
