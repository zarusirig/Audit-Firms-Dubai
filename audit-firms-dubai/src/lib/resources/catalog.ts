/**
 * Resource Catalog
 * Complete catalog of downloadable resources
 */

import { Resource, ResourceCategory } from './types'

export const RESOURCE_CATALOG: Resource[] = [
  // Audit Checklists
  {
    id: 'external-audit-checklist',
    slug: 'external-audit-checklist',
    title: 'External Audit Preparation Checklist',
    description:
      'Comprehensive checklist to prepare your business for an external audit in the UAE',
    longDescription:
      'This detailed checklist covers all essential documents and procedures needed to prepare for an external audit. Includes sections for financial statements, supporting documentation, internal controls verification, and compliance requirements specific to UAE regulations.',
    category: 'audit-checklists',
    format: 'pdf',
    fileSize: '1.8 MB',
    pageCount: 12,
    lastUpdated: '2025-01-15',
    downloadCount: 347,
    access: 'gated',
    fileUrl: '/downloads/external-audit-checklist.pdf',
    tags: ['audit', 'preparation', 'compliance', 'uae', 'external-audit'],
    featured: true,
    relatedResources: ['internal-controls-guide', 'financial-statement-template'],
  },
  {
    id: 'internal-audit-framework',
    slug: 'internal-audit-framework',
    title: 'Internal Audit Framework Template',
    description: 'Complete framework for establishing an internal audit function',
    longDescription:
      'Step-by-step guide and template for setting up an internal audit department. Includes risk assessment matrices, audit planning schedules, testing procedures, and reporting templates.',
    category: 'audit-checklists',
    format: 'pdf',
    fileSize: '2.3 MB',
    pageCount: 18,
    lastUpdated: '2025-01-10',
    downloadCount: 289,
    access: 'gated',
    fileUrl: '/downloads/internal-audit-framework.pdf',
    tags: ['internal-audit', 'framework', 'risk-management', 'governance'],
    featured: true,
    relatedResources: ['risk-assessment-matrix'],
  },
  {
    id: 'rera-audit-guide',
    slug: 'rera-audit-guide',
    title: 'RERA Audit Compliance Guide',
    description: 'Essential guide for RERA escrow account audit requirements',
    longDescription:
      'Comprehensive guide covering all RERA audit requirements for real estate developers in Dubai. Includes escrow account management, reporting requirements, and common compliance issues.',
    category: 'audit-checklists',
    format: 'pdf',
    fileSize: '1.5 MB',
    pageCount: 10,
    lastUpdated: '2025-01-08',
    downloadCount: 156,
    access: 'free',
    fileUrl: '/downloads/rera-audit-guide.pdf',
    tags: ['rera', 'real-estate', 'escrow', 'dubai', 'compliance'],
    relatedResources: ['real-estate-compliance'],
  },

  // Compliance Guides
  {
    id: 'uae-corporate-governance',
    slug: 'uae-corporate-governance',
    title: 'UAE Corporate Governance Best Practices',
    description: 'Complete guide to corporate governance requirements in the UAE',
    longDescription:
      'Detailed overview of corporate governance principles and requirements for UAE companies. Covers board composition, audit committees, internal controls, risk management, and disclosure requirements.',
    category: 'compliance-guides',
    format: 'pdf',
    fileSize: '3.1 MB',
    pageCount: 24,
    lastUpdated: '2025-01-12',
    downloadCount: 412,
    access: 'gated',
    fileUrl: '/downloads/uae-corporate-governance.pdf',
    tags: ['governance', 'compliance', 'board', 'risk-management', 'uae'],
    featured: true,
  },
  {
    id: 'aml-compliance-checklist',
    slug: 'aml-compliance-checklist',
    title: 'Anti-Money Laundering Compliance Checklist',
    description: 'AML/CFT compliance checklist for UAE businesses',
    longDescription:
      'Essential checklist for maintaining AML/CFT compliance in the UAE. Includes customer due diligence procedures, suspicious activity reporting, record-keeping requirements, and training protocols.',
    category: 'compliance-guides',
    format: 'pdf',
    fileSize: '1.9 MB',
    pageCount: 14,
    lastUpdated: '2025-01-05',
    downloadCount: 298,
    access: 'gated',
    fileUrl: '/downloads/aml-compliance-checklist.pdf',
    tags: ['aml', 'compliance', 'due-diligence', 'regulations', 'financial-crime'],
  },
  {
    id: 'data-protection-guide',
    slug: 'data-protection-guide',
    title: 'UAE Data Protection Compliance Guide',
    description: 'Guide to UAE data protection laws and GDPR compliance',
    longDescription:
      'Comprehensive guide covering UAE data protection regulations, including Dubai DIFC Data Protection Law and Abu Dhabi GDPR. Includes practical implementation steps and compliance checklists.',
    category: 'compliance-guides',
    format: 'pdf',
    fileSize: '2.7 MB',
    pageCount: 20,
    lastUpdated: '2024-12-28',
    downloadCount: 223,
    access: 'free',
    fileUrl: '/downloads/data-protection-guide.pdf',
    tags: ['data-protection', 'gdpr', 'privacy', 'difc', 'compliance'],
  },

  // Tax Templates
  {
    id: 'vat-compliance-template',
    slug: 'vat-compliance-template',
    title: 'VAT Compliance Template & Calculator',
    description: 'Excel template for VAT calculations and compliance tracking',
    longDescription:
      'Complete Excel workbook with automated VAT calculations, return preparation templates, and compliance tracking sheets. Includes formulas for standard rate, zero-rated, and exempt supplies.',
    category: 'tax-templates',
    format: 'excel',
    fileSize: '856 KB',
    lastUpdated: '2025-01-14',
    downloadCount: 567,
    access: 'gated',
    fileUrl: '/downloads/vat-compliance-template.xlsx',
    tags: ['vat', 'tax', 'excel', 'calculator', 'compliance'],
    featured: true,
  },
  {
    id: 'transfer-pricing-documentation',
    slug: 'transfer-pricing-documentation',
    title: 'Transfer Pricing Documentation Template',
    description: 'Template for UAE transfer pricing compliance documentation',
    longDescription:
      'Comprehensive Word template for preparing transfer pricing documentation in accordance with UAE Cabinet Decision No. 44 of 2020. Includes master file and local file structures.',
    category: 'tax-templates',
    format: 'word',
    fileSize: '1.2 MB',
    lastUpdated: '2025-01-11',
    downloadCount: 189,
    access: 'gated',
    fileUrl: '/downloads/transfer-pricing-documentation.docx',
    tags: ['transfer-pricing', 'tax', 'documentation', 'compliance', 'multinational'],
  },
  {
    id: 'corporate-tax-readiness',
    slug: 'corporate-tax-readiness',
    title: 'UAE Corporate Tax Readiness Checklist',
    description: 'Prepare your business for UAE Corporate Tax implementation',
    longDescription:
      'Step-by-step checklist to ensure your business is ready for UAE Corporate Tax. Covers registration requirements, tax accounting setup, documentation needs, and compliance deadlines.',
    category: 'tax-templates',
    format: 'pdf',
    fileSize: '2.1 MB',
    pageCount: 16,
    lastUpdated: '2025-01-09',
    downloadCount: 634,
    access: 'free',
    fileUrl: '/downloads/corporate-tax-readiness.pdf',
    tags: ['corporate-tax', 'tax-compliance', 'uae', 'preparation', 'business'],
    featured: true,
  },

  // Financial Templates
  {
    id: 'financial-statement-template',
    slug: 'financial-statement-template',
    title: 'IFRS Financial Statement Template',
    description: 'Complete IFRS-compliant financial statement template',
    longDescription:
      'Professional Excel template for preparing IFRS-compliant financial statements. Includes balance sheet, income statement, cash flow statement, statement of changes in equity, and comprehensive notes template.',
    category: 'financial-templates',
    format: 'excel',
    fileSize: '1.4 MB',
    lastUpdated: '2025-01-13',
    downloadCount: 445,
    access: 'gated',
    fileUrl: '/downloads/financial-statement-template.xlsx',
    tags: ['ifrs', 'financial-statements', 'excel', 'accounting', 'reporting'],
    featured: true,
  },
  {
    id: 'cash-flow-forecast',
    slug: 'cash-flow-forecast',
    title: '12-Month Cash Flow Forecast Template',
    description: 'Advanced cash flow forecasting and analysis template',
    longDescription:
      'Sophisticated Excel template for 12-month cash flow forecasting. Includes scenario planning, variance analysis, and visual dashboards. Perfect for financial planning and investor presentations.',
    category: 'financial-templates',
    format: 'excel',
    fileSize: '978 KB',
    lastUpdated: '2025-01-07',
    downloadCount: 389,
    access: 'free',
    fileUrl: '/downloads/cash-flow-forecast.xlsx',
    tags: ['cash-flow', 'forecasting', 'financial-planning', 'excel', 'budgeting'],
  },
  {
    id: 'internal-controls-guide',
    slug: 'internal-controls-guide',
    title: 'Internal Controls Assessment Guide',
    description: 'Comprehensive guide to evaluating internal controls',
    longDescription:
      'Detailed guide for assessing and documenting internal controls. Includes COSO framework application, control testing procedures, deficiency evaluation, and remediation planning.',
    category: 'financial-templates',
    format: 'pdf',
    fileSize: '2.5 MB',
    pageCount: 22,
    lastUpdated: '2025-01-06',
    downloadCount: 267,
    access: 'gated',
    fileUrl: '/downloads/internal-controls-guide.pdf',
    tags: ['internal-controls', 'coso', 'risk-management', 'audit', 'governance'],
  },

  // Industry Guides
  {
    id: 'real-estate-compliance',
    slug: 'real-estate-compliance',
    title: 'Real Estate Industry Compliance Guide',
    description: 'Complete compliance guide for UAE real estate companies',
    longDescription:
      'Comprehensive guide covering all compliance requirements for real estate developers and brokers in the UAE. Includes RERA regulations, escrow requirements, VAT treatment, and audit considerations.',
    category: 'industry-guides',
    format: 'pdf',
    fileSize: '3.4 MB',
    pageCount: 28,
    lastUpdated: '2025-01-04',
    downloadCount: 312,
    access: 'gated',
    fileUrl: '/downloads/real-estate-compliance.pdf',
    tags: ['real-estate', 'rera', 'compliance', 'industry', 'dubai'],
  },
  {
    id: 'fintech-regulatory-guide',
    slug: 'fintech-regulatory-guide',
    title: 'FinTech Regulatory Framework Guide',
    description: 'Regulatory guide for FinTech startups in UAE',
    longDescription:
      'Essential guide for FinTech companies navigating UAE regulatory landscape. Covers licensing requirements, DFSA regulations, virtual asset regulations, and compliance considerations.',
    category: 'industry-guides',
    format: 'pdf',
    fileSize: '2.8 MB',
    pageCount: 24,
    lastUpdated: '2024-12-30',
    downloadCount: 198,
    access: 'free',
    fileUrl: '/downloads/fintech-regulatory-guide.pdf',
    tags: ['fintech', 'regulatory', 'licensing', 'dfsa', 'startup'],
  },

  // Regulatory Updates
  {
    id: 'q1-2025-regulatory-update',
    slug: 'q1-2025-regulatory-update',
    title: 'Q1 2025 UAE Regulatory Updates',
    description: 'Latest regulatory changes affecting UAE businesses',
    longDescription:
      'Quarterly summary of regulatory changes, new laws, amendments, and compliance deadlines for Q1 2025. Covers tax, corporate governance, ESG reporting, and industry-specific regulations.',
    category: 'regulatory-updates',
    format: 'pdf',
    fileSize: '1.6 MB',
    pageCount: 12,
    lastUpdated: '2025-01-15',
    downloadCount: 423,
    access: 'free',
    fileUrl: '/downloads/q1-2025-regulatory-update.pdf',
    tags: ['regulatory', 'updates', 'compliance', 'news', 'q1-2025'],
    featured: true,
  },
  {
    id: 'esg-reporting-guide',
    slug: 'esg-reporting-guide',
    title: 'ESG Reporting Requirements for UAE Companies',
    description: 'Guide to ESG and sustainability reporting in the UAE',
    longDescription:
      'Comprehensive guide to Environmental, Social, and Governance (ESG) reporting requirements for UAE companies. Includes disclosure frameworks, metrics, and best practices.',
    category: 'regulatory-updates',
    format: 'pdf',
    fileSize: '2.9 MB',
    pageCount: 26,
    lastUpdated: '2025-01-03',
    downloadCount: 245,
    access: 'gated',
    fileUrl: '/downloads/esg-reporting-guide.pdf',
    tags: ['esg', 'sustainability', 'reporting', 'governance', 'disclosure'],
  },
]

// Helper functions
export function getResourceById(id: string): Resource | undefined {
  return RESOURCE_CATALOG.find((resource) => resource.id === id)
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCE_CATALOG.find((resource) => resource.slug === slug)
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return RESOURCE_CATALOG.filter((resource) => resource.category === category)
}

export function getFeaturedResources(): Resource[] {
  return RESOURCE_CATALOG.filter((resource) => resource.featured === true)
}

export function getFreeResources(): Resource[] {
  return RESOURCE_CATALOG.filter((resource) => resource.access === 'free')
}

export function getGatedResources(): Resource[] {
  return RESOURCE_CATALOG.filter((resource) => resource.access === 'gated')
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase()
  return RESOURCE_CATALOG.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}

export function getRelatedResources(resourceId: string): Resource[] {
  const resource = getResourceById(resourceId)
  if (!resource || !resource.relatedResources) return []

  return resource.relatedResources
    .map((id) => getResourceById(id))
    .filter((r): r is Resource => r !== undefined)
}

// Category statistics
export function getCategoryStats() {
  const stats = new Map<ResourceCategory, number>()

  RESOURCE_CATALOG.forEach((resource) => {
    const count = stats.get(resource.category) || 0
    stats.set(resource.category, count + 1)
  })

  return stats
}
