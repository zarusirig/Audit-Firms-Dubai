/**
 * Calculator Form Validation Schemas
 * Using Zod for type-safe form validation
 */

import { z } from 'zod'

// Step 1: Company Basics
export const step1Schema = z.object({
  companyType: z.enum([
    'llc',
    'free-zone',
    'branch',
    'holding',
    'partnership',
    'sole-proprietorship',
  ], {
    message: 'Please select your company type',
  }),
  industrySector: z.enum([
    'real-estate',
    'trading',
    'manufacturing',
    'financial-services',
    'healthcare',
    'hospitality',
    'technology',
    'construction',
    'retail',
    'ecommerce',
    'education',
    'other',
  ], {
    message: 'Please select your industry',
  }),
})

// Step 2: Financial Details
export const step2Schema = z.object({
  annualRevenue: z.enum([
    'under-1m',
    '1m-5m',
    '5m-10m',
    '10m-25m',
    '25m-50m',
    '50m-100m',
    '100m-250m',
    'over-250m',
  ], {
    message: 'Please select your annual revenue range',
  }),
  numberOfEmployees: z.enum([
    'under-10',
    '10-25',
    '26-50',
    '51-100',
    '101-250',
    'over-250',
  ], {
    message: 'Please select number of employees',
  }),
  numberOfLocations: z.number().min(1, 'Must have at least 1 location').max(100, 'Maximum 100 locations'),
})

// Step 3: Audit Details
export const step3Schema = z.object({
  previousAuditStatus: z.enum(['first-time', 'regular', 'changed-auditor'], {
    message: 'Please select your audit status',
  }),
  complexityFactors: z.object({
    multipleCurrencies: z.boolean(),
    inventoryHeavy: z.boolean(),
    relatedPartyTransactions: z.boolean(),
    internationalOperations: z.boolean(),
    complexGroupStructure: z.boolean(),
    subsidiaries: z.boolean(),
    consolidatedFinancials: z.boolean(),
    regulatedIndustry: z.boolean(),
  }),
  urgency: z.enum(['standard', 'express', 'urgent'], {
    message: 'Please select service urgency',
  }),
})

// Combined schema for all steps
export const calculatorSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
})

// Contact form for detailed quote (optional)
export const detailedQuoteSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  companyName: z.string().min(2, 'Company name is required'),
  preferredContact: z.enum(['phone', 'email', 'whatsapp']).optional(),
  message: z.string().optional(),
})

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type CalculatorFormData = z.infer<typeof calculatorSchema>
export type DetailedQuoteFormData = z.infer<typeof detailedQuoteSchema>
