/**
 * Site-wide constants for Elite Audit Dubai
 */

// Site Configuration
export const SITE_CONFIG = {
  name: 'Elite Audit Dubai',
  tagline: 'Dubai\'s Most Trusted Audit Firm',
  description: 'Leading audit firm in Dubai offering external audit, internal audit, and advisory services. Ministry of Economy approved. IFRS experts.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsdubai.com',
  email: 'info@auditfirmsdubai.com',
  phone: '+971-4-XXX-XXXX',
  address: 'Business Bay, Bay Square Building 1, Dubai, UAE',
  foundedYear: 1985,
  parentCompany: 'Farahat & Co',
} as const;

// Company Statistics
export const COMPANY_STATS = {
  clientsServed: 28058,
  yearsExperience: 37,
  countriesServed: 140,
  awardsReceived: 112,
  annualAudits: 500,
  satisfactionRate: 98,
} as const;

// Navigation Menu Structure
export const MAIN_NAVIGATION = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'External Audit', href: '/services/external-audit' },
      { label: 'Internal Audit', href: '/services/internal-audit' },
      { label: 'Due Diligence', href: '/services/due-diligence' },
      { label: 'Forensic Audit', href: '/services/forensic-audit' },
      { label: 'RERA Audit', href: '/services/rera-audit' },
      { label: 'VAT Audit', href: '/services/vat-audit' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Trading', href: '/industries/trading' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Healthcare', href: '/industries/healthcare' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Tools', href: '/resources/tools' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

// Services List
export const SERVICES = [
  {
    id: 'external-audit',
    name: 'External Audit',
    slug: 'external-audit',
    description: 'Statutory audit services for UAE businesses',
    icon: 'FileCheck',
  },
  {
    id: 'internal-audit',
    name: 'Internal Audit',
    slug: 'internal-audit',
    description: 'Risk assessment and internal control review',
    icon: 'Shield',
  },
  {
    id: 'due-diligence',
    name: 'Due Diligence',
    slug: 'due-diligence',
    description: 'Financial and commercial due diligence',
    icon: 'Search',
  },
  {
    id: 'forensic-audit',
    name: 'Forensic Audit',
    slug: 'forensic-audit',
    description: 'Fraud investigation and detection',
    icon: 'AlertTriangle',
  },
  {
    id: 'rera-audit',
    name: 'RERA Audit',
    slug: 'rera-audit',
    description: 'Real estate regulatory compliance audit',
    icon: 'Building2',
  },
  {
    id: 'vat-audit',
    name: 'VAT Audit',
    slug: 'vat-audit',
    description: 'VAT compliance and advisory',
    icon: 'Receipt',
  },
] as const;

// Industries
export const INDUSTRIES = [
  { id: 'real-estate', name: 'Real Estate', slug: 'real-estate', icon: 'Building2' },
  { id: 'trading', name: 'Trading', slug: 'trading', icon: 'TrendingUp' },
  { id: 'manufacturing', name: 'Manufacturing', slug: 'manufacturing', icon: 'Factory' },
  { id: 'financial-services', name: 'Financial Services', slug: 'financial-services', icon: 'Landmark' },
  { id: 'healthcare', name: 'Healthcare', slug: 'healthcare', icon: 'Heart' },
  { id: 'hospitality', name: 'Hospitality', slug: 'hospitality', icon: 'Hotel' },
  { id: 'technology', name: 'Technology', slug: 'technology', icon: 'Laptop' },
  { id: 'ecommerce', name: 'E-commerce', slug: 'ecommerce', icon: 'ShoppingCart' },
] as const;

// Locations
export const LOCATIONS = [
  {
    id: 'difc',
    name: 'DIFC',
    slug: 'difc',
    city: 'Dubai',
    address: 'Dubai International Financial Centre',
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    slug: 'business-bay',
    city: 'Dubai',
    address: 'Bay Square Building 1, Business Bay',
  },
  {
    id: 'dubai-marina',
    name: 'Dubai Marina',
    slug: 'dubai-marina',
    city: 'Dubai',
    address: 'Dubai Marina',
  },
] as const;

// Company Types
export const COMPANY_TYPES = [
  { value: 'llc', label: 'Limited Liability Company (LLC)' },
  { value: 'free-zone', label: 'Free Zone Company' },
  { value: 'branch', label: 'Branch of Foreign Company' },
  { value: 'holding', label: 'Holding Company' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'sole-proprietorship', label: 'Sole Proprietorship' },
] as const;

// Revenue Ranges
export const REVENUE_RANGES = [
  { value: '0-10m', label: 'Under AED 10 Million' },
  { value: '10m-50m', label: 'AED 10M - 50M' },
  { value: '50m-100m', label: 'AED 50M - 100M' },
  { value: '100m-500m', label: 'AED 100M - 500M' },
  { value: '500m+', label: 'Above AED 500M' },
] as const;

// Employee Ranges
export const EMPLOYEE_RANGES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  'Ministry of Economy Approved',
  'DFSA Registered',
  'ADGM Registered',
  'IFRS Certified',
  'ISO 9001:2015',
  'Member of ICAI',
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/elite-audit-dubai',
  twitter: 'https://twitter.com/eliteauditdubai',
  facebook: 'https://facebook.com/eliteauditdubai',
  instagram: 'https://instagram.com/eliteauditdubai',
} as const;

// Professional Certifications
export const CERTIFICATIONS = [
  'Chartered Accountant (CA)',
  'Certified Public Accountant (CPA)',
  'Association of Chartered Certified Accountants (ACCA)',
  'Certified Internal Auditor (CIA)',
  'Certified Fraud Examiner (CFE)',
  'Certified Information Systems Auditor (CISA)',
] as const;

// Keywords (for SEO)
export const PRIMARY_KEYWORDS = [
  'audit firms in uae',
  'audit firm in dubai',
  'best audit firm in dubai',
  'audit services uae',
  'statutory audit dubai',
  'external audit dubai',
  'internal audit dubai',
] as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: { open: '09:00', close: '18:00' },
  thursday: { open: '09:00', close: '18:00' },
  sunday: { open: '09:00', close: '17:00' },
  friday: { closed: true },
  saturday: { closed: true },
} as const;

// Pricing Base Rates (in AED)
export const BASE_AUDIT_FEES = {
  'under-10m': 15000,
  '10m-50m': 25000,
  '50m-100m': 40000,
  '100m-500m': 60000,
  '500m+': 100000,
} as const;

// Complexity Multipliers
export const COMPLEXITY_FACTORS = {
  'first-time-audit': 1.2,
  'multi-currency': 1.1,
  'inventory-heavy': 1.15,
  'related-party': 1.1,
  'international-ops': 1.2,
  'complex-structure': 1.3,
  'express-service': 1.4,
} as const;

// FAQ Categories
export const FAQ_CATEGORIES = [
  'General',
  'External Audit',
  'Internal Audit',
  'Pricing',
  'Process',
  'Compliance',
  'Industry-Specific',
] as const;

// Common Form Options
export const PREFERRED_CONTACT_METHODS = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
] as const;

// Urgency Options
export const URGENCY_OPTIONS = [
  { value: 'standard', label: 'Standard (7-10 days)' },
  { value: 'express', label: 'Express (3-5 days)' },
  { value: 'emergency', label: 'Emergency (72 hours)' },
] as const;
