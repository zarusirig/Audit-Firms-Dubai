/**
 * Audit Fee Calculator Types
 * Complete type definitions for the calculator feature
 */

export type CompanyType = 'llc' | 'free-zone' | 'branch' | 'holding' | 'partnership' | 'sole-proprietorship'

export type IndustrySector =
  | 'real-estate'
  | 'trading'
  | 'manufacturing'
  | 'financial-services'
  | 'healthcare'
  | 'hospitality'
  | 'technology'
  | 'construction'
  | 'retail'
  | 'ecommerce'
  | 'education'
  | 'other'

export type RevenueRange =
  | 'under-1m'
  | '1m-5m'
  | '5m-10m'
  | '10m-25m'
  | '25m-50m'
  | '50m-100m'
  | '100m-250m'
  | 'over-250m'

export type EmployeeRange = 'under-10' | '10-25' | '26-50' | '51-100' | '101-250' | 'over-250'

export type AuditStatus = 'first-time' | 'regular' | 'changed-auditor'

export type ServiceUrgency = 'standard' | 'express' | 'urgent'

export interface ComplexityFactors {
  multipleCurrencies: boolean
  inventoryHeavy: boolean
  relatedPartyTransactions: boolean
  internationalOperations: boolean
  complexGroupStructure: boolean
  subsidiaries: boolean
  consolidatedFinancials: boolean
  regulatedIndustry: boolean
}

export interface CalculatorInputs {
  // Step 1: Company Basics
  companyType: CompanyType
  industrySector: IndustrySector

  // Step 2: Financial Details
  annualRevenue: RevenueRange
  numberOfEmployees: EmployeeRange
  numberOfLocations: number

  // Step 3: Audit Details
  previousAuditStatus: AuditStatus
  complexityFactors: ComplexityFactors
  urgency: ServiceUrgency

  // Optional: Contact for quote
  requiresDetailed?: boolean
}

export interface PriceBreakdown {
  basePrice: number
  industryMultiplier: number
  locationFees: number
  firstTimeAuditFee: number
  complexityFees: number
  urgencyFee: number
  subtotal: number
  vatAmount: number
  totalEstimate: number
}

export interface CalculatorResult {
  priceRange: {
    min: number
    max: number
    currency: 'AED'
  }
  breakdown: PriceBreakdown
  timelineEstimate: {
    weeks: number
    description: string
  }
  whatsIncluded: string[]
  confidenceLevel: 'estimate' | 'accurate' | 'exact'
  recommendations: string[]
}

export interface SavedCalculation {
  id: string
  timestamp: number
  inputs: CalculatorInputs
  result: CalculatorResult
  shareUrl?: string
}

// Display labels for dropdown options
export const COMPANY_TYPE_LABELS: Record<CompanyType, string> = {
  'llc': 'Limited Liability Company (LLC)',
  'free-zone': 'Free Zone Company (FZE/FZCO)',
  'branch': 'Branch of Foreign Company',
  'holding': 'Holding Company',
  'partnership': 'Partnership',
  'sole-proprietorship': 'Sole Proprietorship',
}

export const INDUSTRY_LABELS: Record<IndustrySector, string> = {
  'real-estate': 'Real Estate & Property Development',
  'trading': 'Trading & Distribution',
  'manufacturing': 'Manufacturing & Production',
  'financial-services': 'Financial Services & Banking',
  'healthcare': 'Healthcare & Medical Services',
  'hospitality': 'Hospitality & Tourism',
  'technology': 'Technology & Software',
  'construction': 'Construction & Engineering',
  'retail': 'Retail & Consumer Goods',
  'ecommerce': 'E-commerce & Digital Business',
  'education': 'Education & Training',
  'other': 'Other Services',
}

export const REVENUE_LABELS: Record<RevenueRange, string> = {
  'under-1m': 'Under AED 1 Million',
  '1m-5m': 'AED 1M - 5M',
  '5m-10m': 'AED 5M - 10M',
  '10m-25m': 'AED 10M - 25M',
  '25m-50m': 'AED 25M - 50M',
  '50m-100m': 'AED 50M - 100M',
  '100m-250m': 'AED 100M - 250M',
  'over-250m': 'Over AED 250 Million',
}

export const EMPLOYEE_LABELS: Record<EmployeeRange, string> = {
  'under-10': 'Under 10 employees',
  '10-25': '10 - 25 employees',
  '26-50': '26 - 50 employees',
  '51-100': '51 - 100 employees',
  '101-250': '101 - 250 employees',
  'over-250': 'Over 250 employees',
}

export const AUDIT_STATUS_LABELS: Record<AuditStatus, string> = {
  'first-time': 'First Time Audit (Never audited before)',
  'regular': 'Regular Client (Continuing)',
  'changed-auditor': 'Changing Auditor (Previously audited)',
}

export const URGENCY_LABELS: Record<ServiceUrgency, string> = {
  'standard': 'Standard (4-6 weeks)',
  'express': 'Express (2-3 weeks)',
  'urgent': 'Urgent (Under 2 weeks)',
}

export const COMPLEXITY_FACTOR_LABELS: Record<keyof ComplexityFactors, string> = {
  multipleCurrencies: 'Multiple Currencies',
  inventoryHeavy: 'Inventory-Heavy Business',
  relatedPartyTransactions: 'Related Party Transactions',
  internationalOperations: 'International Operations',
  complexGroupStructure: 'Complex Group Structure',
  subsidiaries: 'Multiple Subsidiaries',
  consolidatedFinancials: 'Consolidated Financial Statements',
  regulatedIndustry: 'Regulated Industry (Banking, Insurance, etc.)',
}

export const COMPLEXITY_FACTOR_DESCRIPTIONS: Record<keyof ComplexityFactors, string> = {
  multipleCurrencies: 'Transactions in multiple currencies requiring conversion and reconciliation',
  inventoryHeavy: 'Significant inventory requiring physical counts and valuation',
  relatedPartyTransactions: 'Transactions with related parties requiring special disclosure',
  internationalOperations: 'Operations across multiple countries with different regulations',
  complexGroupStructure: 'Multiple entities with inter-company transactions',
  subsidiaries: 'Parent company with one or more subsidiary companies',
  consolidatedFinancials: 'Required to prepare consolidated financial statements',
  regulatedIndustry: 'Industry subject to specific regulatory audit requirements',
}
