/**
 * Audit Fee Calculator - Pricing Logic Engine
 * Sophisticated pricing algorithm based on multiple factors
 */

import type {
  CalculatorInputs,
  CalculatorResult,
  PriceBreakdown,
  RevenueRange,
  IndustrySector,
  CompanyType,
  EmployeeRange,
  ComplexityFactors,
  ServiceUrgency,
  AuditStatus,
} from './types'

// Base pricing structure by revenue
const BASE_PRICING: Record<RevenueRange, { min: number; max: number }> = {
  'under-1m': { min: 8000, max: 12000 },
  '1m-5m': { min: 12000, max: 18000 },
  '5m-10m': { min: 18000, max: 25000 },
  '10m-25m': { min: 25000, max: 35000 },
  '25m-50m': { min: 35000, max: 50000 },
  '50m-100m': { min: 50000, max: 75000 },
  '100m-250m': { min: 75000, max: 120000 },
  'over-250m': { min: 120000, max: 200000 },
}

// Industry complexity multipliers
const INDUSTRY_MULTIPLIERS: Record<IndustrySector, number> = {
  'real-estate': 1.2, // RERA compliance, escrow accounts
  'trading': 1.0, // Standard complexity
  'manufacturing': 1.15, // Inventory complexity
  'financial-services': 1.4, // Highly regulated
  'healthcare': 1.25, // Regulatory requirements
  'hospitality': 1.1, // Multiple revenue streams
  'technology': 1.05, // Relatively straightforward
  'construction': 1.2, // Project accounting
  'retail': 1.0, // Standard
  'ecommerce': 1.05, // Digital transactions
  'education': 1.0, // Standard
  'other': 1.0, // Default
}

// Company type adjustments
const COMPANY_TYPE_ADJUSTMENTS: Record<CompanyType, number> = {
  'llc': 0, // Base
  'free-zone': 500, // Additional free zone requirements
  'branch': 1500, // Branch-specific reporting
  'holding': 2000, // Group considerations
  'partnership': -500, // Simpler structure
  'sole-proprietorship': -1000, // Simplest structure
}

// Employee range impact (operational complexity)
const EMPLOYEE_RANGE_FEES: Record<EmployeeRange, number> = {
  'under-10': 0,
  '10-25': 1000,
  '26-50': 2000,
  '51-100': 3500,
  '101-250': 5000,
  'over-250': 7500,
}

// Location fees (per additional location beyond first)
const LOCATION_FEE_PER_BRANCH = 3500

// First-time audit premiums
const FIRST_TIME_AUDIT_PREMIUMS: Record<AuditStatus, number> = {
  'first-time': 0.25, // 25% premium for first-time audits
  'regular': 0, // No premium
  'changed-auditor': 0.15, // 15% premium for handover work
}

// Complexity factor fees
const COMPLEXITY_FACTOR_FEES: Record<keyof ComplexityFactors, number> = {
  multipleCurrencies: 2500,
  inventoryHeavy: 3000,
  relatedPartyTransactions: 2000,
  internationalOperations: 4000,
  complexGroupStructure: 5000,
  subsidiaries: 3500,
  consolidatedFinancials: 6000,
  regulatedIndustry: 4500,
}

// Urgency premiums
const URGENCY_PREMIUMS: Record<ServiceUrgency, number> = {
  'standard': 0, // No premium
  'express': 0.4, // 40% premium
  'urgent': 0.7, // 70% premium
}

// Timeline estimates (in weeks)
const TIMELINE_BY_REVENUE: Record<RevenueRange, number> = {
  'under-1m': 2,
  '1m-5m': 3,
  '5m-10m': 4,
  '10m-25m': 5,
  '25m-50m': 6,
  '50m-100m': 8,
  '100m-250m': 10,
  'over-250m': 12,
}

/**
 * Calculate audit fee based on all input factors
 */
export function calculateAuditFee(inputs: CalculatorInputs): CalculatorResult {
  // Step 1: Get base price from revenue
  const basePrice = getBasePrice(inputs.annualRevenue)

  // Step 2: Apply industry multiplier
  const industryMultiplier = INDUSTRY_MULTIPLIERS[inputs.industrySector]
  const priceAfterIndustry = basePrice * industryMultiplier

  // Step 3: Add company type adjustment
  const companyTypeAdjustment = COMPANY_TYPE_ADJUSTMENTS[inputs.companyType]

  // Step 4: Add employee range fee
  const employeeFee = EMPLOYEE_RANGE_FEES[inputs.numberOfEmployees]

  // Step 5: Calculate location fees (first location included)
  const additionalLocations = Math.max(0, inputs.numberOfLocations - 1)
  const locationFees = additionalLocations * LOCATION_FEE_PER_BRANCH

  // Step 6: Calculate subtotal before premiums
  let subtotal = priceAfterIndustry + companyTypeAdjustment + employeeFee + locationFees

  // Step 7: Apply first-time audit premium
  const firstTimeMultiplier = FIRST_TIME_AUDIT_PREMIUMS[inputs.previousAuditStatus]
  const firstTimeAuditFee = subtotal * firstTimeMultiplier

  // Step 8: Add complexity factor fees
  const complexityFees = calculateComplexityFees(inputs.complexityFactors)

  // Update subtotal with first-time and complexity fees
  subtotal = subtotal + firstTimeAuditFee + complexityFees

  // Step 9: Apply urgency premium
  const urgencyMultiplier = URGENCY_PREMIUMS[inputs.urgency]
  const urgencyFee = subtotal * urgencyMultiplier

  // Step 10: Calculate final total before VAT
  const totalBeforeVAT = subtotal + urgencyFee

  // Step 11: Add 5% VAT (UAE standard rate)
  const vatAmount = totalBeforeVAT * 0.05

  // Step 12: Final total estimate
  const totalEstimate = totalBeforeVAT + vatAmount

  // Step 13: Calculate price range (±15% for estimation buffer)
  const rangeBuffer = 0.15
  const priceRange = {
    min: Math.round(totalEstimate * (1 - rangeBuffer)),
    max: Math.round(totalEstimate * (1 + rangeBuffer)),
    currency: 'AED' as const,
  }

  // Step 14: Create detailed breakdown
  const breakdown: PriceBreakdown = {
    basePrice: Math.round(priceAfterIndustry + companyTypeAdjustment + employeeFee),
    industryMultiplier,
    locationFees,
    firstTimeAuditFee: Math.round(firstTimeAuditFee),
    complexityFees,
    urgencyFee: Math.round(urgencyFee),
    subtotal: Math.round(totalBeforeVAT),
    vatAmount: Math.round(vatAmount),
    totalEstimate: Math.round(totalEstimate),
  }

  // Step 15: Calculate timeline estimate
  const timelineEstimate = calculateTimeline(inputs)

  // Step 16: Determine what's included
  const whatsIncluded = getWhatsIncluded(inputs)

  // Step 17: Generate recommendations
  const recommendations = generateRecommendations(inputs)

  // Step 18: Determine confidence level
  const confidenceLevel = determineConfidenceLevel(inputs)

  return {
    priceRange,
    breakdown,
    timelineEstimate,
    whatsIncluded,
    confidenceLevel,
    recommendations,
  }
}

/**
 * Get base price from revenue range
 */
function getBasePrice(revenue: RevenueRange): number {
  const range = BASE_PRICING[revenue]
  // Return midpoint of range as base
  return (range.min + range.max) / 2
}

/**
 * Calculate total complexity fees
 */
function calculateComplexityFees(factors: ComplexityFactors): number {
  let total = 0
  const factorKeys = Object.keys(factors) as Array<keyof ComplexityFactors>

  for (const key of factorKeys) {
    if (factors[key]) {
      total += COMPLEXITY_FACTOR_FEES[key]
    }
  }

  return total
}

/**
 * Calculate timeline estimate
 */
function calculateTimeline(inputs: CalculatorInputs) {
  let baseWeeks = TIMELINE_BY_REVENUE[inputs.annualRevenue]

  // Add time for complexity factors
  const complexityCount = Object.values(inputs.complexityFactors).filter(Boolean).length
  const complexityWeeks = Math.ceil(complexityCount / 2) // 1 week per 2 factors

  // Add time for multiple locations
  const locationWeeks = Math.ceil((inputs.numberOfLocations - 1) / 3) // 1 week per 3 additional locations

  let totalWeeks = baseWeeks + complexityWeeks + locationWeeks

  // Adjust for urgency
  if (inputs.urgency === 'express') {
    totalWeeks = Math.ceil(totalWeeks * 0.6) // 40% faster
  } else if (inputs.urgency === 'urgent') {
    totalWeeks = Math.ceil(totalWeeks * 0.4) // 60% faster
  }

  // Minimum 1 week
  totalWeeks = Math.max(1, totalWeeks)

  return {
    weeks: totalWeeks,
    description: getTimelineDescription(totalWeeks, inputs.urgency),
  }
}

/**
 * Get timeline description
 */
function getTimelineDescription(weeks: number, urgency: ServiceUrgency): string {
  if (urgency === 'urgent') {
    return `Fast-track completion in ${weeks} ${weeks === 1 ? 'week' : 'weeks'} with dedicated team`
  } else if (urgency === 'express') {
    return `Expedited delivery in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`
  } else {
    return `Standard completion in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`
  }
}

/**
 * Get what's included in the audit
 */
function getWhatsIncluded(inputs: CalculatorInputs): string[] {
  const included = [
    'Complete financial statement audit',
    'Independent auditor\'s report',
    'Management letter with recommendations',
    'Audit planning and risk assessment',
    'Detailed testing of account balances',
    'Internal control evaluation',
    'IFRS compliance review',
    'Ministry-approved audit report format',
  ]

  // Add industry-specific items
  if (inputs.industrySector === 'real-estate') {
    included.push('RERA compliance verification', 'Escrow account audit')
  }

  if (inputs.industrySector === 'financial-services') {
    included.push('Regulatory compliance review', 'Capital adequacy verification')
  }

  if (inputs.industrySector === 'healthcare') {
    included.push('DHA/DOH regulatory compliance', 'Medical inventory verification')
  }

  // Add complexity-specific items
  if (inputs.complexityFactors.consolidatedFinancials) {
    included.push('Consolidated financial statements', 'Inter-company eliminations')
  }

  if (inputs.complexityFactors.internationalOperations) {
    included.push('Multi-jurisdiction compliance review', 'Transfer pricing documentation review')
  }

  if (inputs.previousAuditStatus === 'first-time') {
    included.push('Opening balance verification', 'Prior period adjustments review')
  }

  return included
}

/**
 * Generate personalized recommendations
 */
function generateRecommendations(inputs: CalculatorInputs): string[] {
  const recommendations: string[] = []

  if (inputs.previousAuditStatus === 'first-time') {
    recommendations.push(
      'Start document preparation early - first-time audits require thorough opening balance verification'
    )
  }

  if (inputs.urgency === 'urgent' || inputs.urgency === 'express') {
    recommendations.push(
      'Ensure all documents are ready before engagement starts to meet accelerated timeline'
    )
  }

  const complexityCount = Object.values(inputs.complexityFactors).filter(Boolean).length
  if (complexityCount >= 4) {
    recommendations.push(
      'Consider quarterly interim reviews to reduce year-end audit complexity and costs'
    )
  }

  if (inputs.numberOfLocations > 3) {
    recommendations.push('Multi-location coordination will require advance scheduling at each site')
  }

  if (inputs.industrySector === 'real-estate') {
    recommendations.push('RERA audit deadlines are strict - plan submission 2 weeks before deadline')
  }

  if (inputs.annualRevenue === 'over-250m' || inputs.annualRevenue === '100m-250m') {
    recommendations.push(
      'Large revenue companies benefit from continuous audit approach - discuss our quarterly service option'
    )
  }

  return recommendations
}

/**
 * Determine confidence level of estimate
 */
function determineConfidenceLevel(
  inputs: CalculatorInputs
): 'estimate' | 'accurate' | 'exact' {
  const complexityCount = Object.values(inputs.complexityFactors).filter(Boolean).length

  // High complexity = lower confidence
  if (
    complexityCount >= 5 ||
    inputs.numberOfLocations > 5 ||
    inputs.industrySector === 'financial-services'
  ) {
    return 'estimate'
  }

  // Medium complexity = accurate
  if (complexityCount >= 2 || inputs.numberOfLocations > 2) {
    return 'accurate'
  }

  // Low complexity = exact
  return 'exact'
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: 'AED' | 'USD' = 'AED'): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Generate shareable URL parameters
 */
export function generateShareParams(inputs: CalculatorInputs): URLSearchParams {
  const params = new URLSearchParams()

  params.set('companyType', inputs.companyType)
  params.set('industry', inputs.industrySector)
  params.set('revenue', inputs.annualRevenue)
  params.set('employees', inputs.numberOfEmployees)
  params.set('locations', inputs.numberOfLocations.toString())
  params.set('auditStatus', inputs.previousAuditStatus)
  params.set('urgency', inputs.urgency)

  // Add complexity factors as comma-separated
  const activeFactors = (Object.keys(inputs.complexityFactors) as Array<keyof ComplexityFactors>)
    .filter((key) => inputs.complexityFactors[key])
  if (activeFactors.length > 0) {
    params.set('complexity', activeFactors.join(','))
  }

  return params
}

/**
 * Parse inputs from URL parameters
 */
export function parseShareParams(params: URLSearchParams): Partial<CalculatorInputs> | null {
  try {
    const complexityString = params.get('complexity')
    const complexityFactors: ComplexityFactors = {
      multipleCurrencies: false,
      inventoryHeavy: false,
      relatedPartyTransactions: false,
      internationalOperations: false,
      complexGroupStructure: false,
      subsidiaries: false,
      consolidatedFinancials: false,
      regulatedIndustry: false,
    }

    if (complexityString) {
      const factors = complexityString.split(',') as Array<keyof ComplexityFactors>
      factors.forEach((factor) => {
        if (factor in complexityFactors) {
          complexityFactors[factor] = true
        }
      })
    }

    return {
      companyType: params.get('companyType') as any,
      industrySector: params.get('industry') as any,
      annualRevenue: params.get('revenue') as any,
      numberOfEmployees: params.get('employees') as any,
      numberOfLocations: parseInt(params.get('locations') || '1'),
      previousAuditStatus: params.get('auditStatus') as any,
      urgency: params.get('urgency') as any,
      complexityFactors,
    }
  } catch {
    return null
  }
}
