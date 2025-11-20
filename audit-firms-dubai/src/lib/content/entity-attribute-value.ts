/**
 * Entity-Attribute-Value (E-A-V) Data Structure
 * Implements Koray Gübür's semantic SEO framework for topical authority
 *
 * This structure enables:
 * - Enhanced knowledge graph understanding
 * - Semantic search optimization
 * - Voice search compatibility
 * - Rich entity relationships
 */

export interface EntityRelationships {
  relatedEntities: string[]
  requiredFor: string[]
  complementaryTo: string[]
  enabledBy?: string[]
  regulates?: string[]
}

export interface AuditEntityEAV {
  entity: string
  category: 'service' | 'compliance' | 'industry' | 'location' | 'technology' | 'standard'

  attributes: {
    [key: string]: string[] | number | boolean | { [key: string]: any }
  }

  values: {
    [key: string]: any
  }

  relationships: EntityRelationships

  // SEO metadata
  seoMetadata?: {
    title: string
    description: string
    keywords: string[]
    url: string
  }
}

// ============================================================================
// CORE LAYER: Direct Service Entities
// ============================================================================

export const externalAuditEAV: AuditEntityEAV = {
  entity: "External Audit",
  category: "service",

  attributes: {
    auditType: ["Statutory", "Voluntary", "Group Consolidation"],
    standards: ["ISA", "IFRS", "UAE GAAP"],
    timeline: {
      express: 7,
      standard: 14,
      complex: 30,
      unit: "days"
    },
    deliverables: [
      "Audit Report",
      "Management Letter",
      "Compliance Certificate",
      "Representation Letter",
      "Financial Statements"
    ],
    priceRange: {
      min: 15000,
      max: 150000,
      currency: "AED"
    }
  },

  values: {
    ministryApproved: true,
    industriesServed: "all",
    companySize: ["SME", "Mid-Market", "Large Corporation"],
    languages: ["English", "Arabic"],
    freeZones: ["DIFC", "ADGM", "DMCC", "JAFZA", "DAFZA", "All zones"],
    urgencyAvailable: true
  },

  relationships: {
    relatedEntities: [
      "Internal Audit",
      "IFRS Compliance",
      "Financial Reporting",
      "Statutory Audit"
    ],
    requiredFor: [
      "Ministry Filing",
      "Bank Compliance",
      "License Renewal",
      "Visa Applications",
      "Government Tenders",
      "Investment Rounds"
    ],
    complementaryTo: [
      "Tax Advisory",
      "CFO Services",
      "Accounting Services",
      "Business Valuation"
    ]
  },

  seoMetadata: {
    title: "External Audit Services Dubai | Ministry Approved",
    description: "Professional external audit services in Dubai. Ministry-approved auditors, IFRS compliant, 7-day turnaround.",
    keywords: ["external audit dubai", "statutory audit", "ministry approved auditors"],
    url: "/services/external-audit"
  }
}

export const internalAuditEAV: AuditEntityEAV = {
  entity: "Internal Audit",
  category: "service",

  attributes: {
    focusAreas: ["Risk", "Operations", "Compliance", "IT", "Financial"],
    framework: ["COSO", "COBIT", "ISO 31000", "IIA Standards"],
    frequency: ["Annual", "Quarterly", "Continuous", "Ad-hoc"],
    reporting: ["Board", "Management", "Audit Committee", "Stakeholders"],
    methodology: ["Risk-based", "Process-based", "Agile", "Traditional"],
    priceRange: {
      min: 20000,
      max: 200000,
      currency: "AED",
      model: "project-based or retainer"
    }
  },

  values: {
    independenceLevel: ["Full", "Partial", "Co-sourced", "Outsourced"],
    industryExpertise: "specialized",
    technologyUse: ["Data analytics", "AI-assisted", "Automated testing"],
    deliverables: [
      "Risk Matrix",
      "Control Assessment",
      "Recommendations Report",
      "Action Plan",
      "Follow-up Reviews"
    ]
  },

  relationships: {
    relatedEntities: [
      "Risk Assessment",
      "Operational Audit",
      "Compliance Audit",
      "Corporate Governance"
    ],
    requiredFor: [
      "Risk Management",
      "Corporate Governance",
      "Regulatory Compliance",
      "Process Improvement"
    ],
    complementaryTo: [
      "External Audit",
      "Forensic Audit",
      "IT Audit",
      "Quality Control"
    ]
  },

  seoMetadata: {
    title: "Internal Audit Services Dubai | Risk Assessment",
    description: "Professional internal audit and risk assessment services. COSO framework, data analytics, continuous improvement.",
    keywords: ["internal audit dubai", "risk assessment", "operational audit"],
    url: "/services/internal-audit"
  }
}

export const dueDiligenceEAV: AuditEntityEAV = {
  entity: "Due Diligence",
  category: "service",

  attributes: {
    types: ["Financial", "Tax", "Legal", "Operational", "Commercial"],
    scope: ["Buy-side", "Sell-side", "Vendor", "Investment"],
    timeline: {
      limited: 7,
      standard: 14,
      comprehensive: 30,
      unit: "days"
    },
    deliverables: [
      "Due Diligence Report",
      "Risk Assessment",
      "Valuation Analysis",
      "Red Flags Summary",
      "Deal Structure Recommendations"
    ],
    priceRange: {
      min: 25000,
      max: 300000,
      currency: "AED"
    }
  },

  values: {
    transactionTypes: ["M&A", "Investment", "Partnership", "IPO", "Exit"],
    industries: "all",
    confidentiality: "NDA required",
    urgency: "express service available"
  },

  relationships: {
    relatedEntities: [
      "Business Valuation",
      "M&A Advisory",
      "Financial Modeling",
      "Risk Assessment"
    ],
    requiredFor: [
      "Mergers & Acquisitions",
      "Investment Decisions",
      "Partnership Formation",
      "IPO Preparation"
    ],
    complementaryTo: [
      "Tax Advisory",
      "Legal Services",
      "Business Valuation",
      "Transaction Support"
    ]
  },

  seoMetadata: {
    title: "Due Diligence Services Dubai | M&A Financial Review",
    description: "Expert due diligence for M&A transactions. Buy-side, sell-side, investor due diligence. 7-day express service.",
    keywords: ["due diligence dubai", "m&a audit", "financial due diligence"],
    url: "/services/due-diligence"
  }
}

export const forensicAuditEAV: AuditEntityEAV = {
  entity: "Forensic Audit",
  category: "service",

  attributes: {
    investigationTypes: [
      "Fraud Detection",
      "Asset Misappropriation",
      "Financial Statement Fraud",
      "Corruption",
      "Embezzlement"
    ],
    techniques: [
      "Data Analytics",
      "Document Examination",
      "Interviews",
      "Digital Forensics",
      "Transaction Tracing"
    ],
    deliverables: [
      "Forensic Report",
      "Evidence Documentation",
      "Loss Quantification",
      "Expert Witness Support",
      "Legal Testimony"
    ],
    priceRange: {
      min: 30000,
      max: 500000,
      currency: "AED",
      note: "Varies by complexity"
    }
  },

  values: {
    confidentiality: "maximum",
    legalSupport: true,
    expertWitness: true,
    courtTestimony: true,
    industries: "all"
  },

  relationships: {
    relatedEntities: [
      "Internal Audit",
      "Compliance Audit",
      "Risk Assessment",
      "Legal Services"
    ],
    requiredFor: [
      "Fraud Investigation",
      "Legal Proceedings",
      "Insurance Claims",
      "Dispute Resolution"
    ],
    complementaryTo: [
      "Legal Advisory",
      "Cybersecurity",
      "Internal Controls",
      "Whistleblower Support"
    ]
  },

  seoMetadata: {
    title: "Forensic Audit Services Dubai | Fraud Investigation",
    description: "Expert forensic audit and fraud investigation. Digital forensics, expert witness, legal support. Confidential service.",
    keywords: ["forensic audit dubai", "fraud investigation", "expert witness"],
    url: "/services/forensic-audit"
  }
}

export const reraAuditEAV: AuditEntityEAV = {
  entity: "RERA Audit",
  category: "service",

  attributes: {
    auditTypes: [
      "Developer Audit",
      "Property Manager Audit",
      "Escrow Account Audit",
      "Service Charge Audit"
    ],
    regulatoryBodies: ["RERA", "Dubai Land Department", "DED"],
    compliance: [
      "Law No. 13 of 2008",
      "Decree No. 6 of 2010",
      "Escrow Account Regulations"
    ],
    deliverables: [
      "RERA Audit Report",
      "Escrow Compliance Certificate",
      "Service Charge Statement",
      "Regulatory Filing Support"
    ],
    priceRange: {
      min: 18000,
      max: 120000,
      currency: "AED"
    }
  },

  values: {
    ministryApproved: true,
    reraAccredited: true,
    urgency: "deadline-driven",
    industries: ["Real Estate", "Property Management", "Development"]
  },

  relationships: {
    relatedEntities: [
      "Real Estate Compliance",
      "External Audit",
      "Regulatory Compliance"
    ],
    requiredFor: [
      "RERA Registration",
      "Developer License",
      "Property Manager License",
      "Project Approval"
    ],
    complementaryTo: [
      "Real Estate Advisory",
      "Legal Compliance",
      "Escrow Management"
    ]
  },

  seoMetadata: {
    title: "RERA Audit Services Dubai | Real Estate Compliance",
    description: "RERA-approved audit services for developers and property managers. Escrow audit, service charge audit, compliance.",
    keywords: ["rera audit dubai", "escrow audit", "property manager audit"],
    url: "/services/rera-audit"
  }
}

export const vatAuditEAV: AuditEntityEAV = {
  entity: "VAT Audit",
  category: "service",

  attributes: {
    auditTypes: [
      "VAT Compliance Audit",
      "VAT Refund Audit",
      "Pre-FTA Audit",
      "VAT Health Check"
    ],
    scope: [
      "VAT Returns Review",
      "Input Tax Validation",
      "Output Tax Verification",
      "Exempt Supplies Analysis",
      "Zero-rated Review"
    ],
    deliverables: [
      "VAT Audit Report",
      "Compliance Assessment",
      "Risk Identification",
      "Remediation Plan",
      "FTA Submission Support"
    ],
    priceRange: {
      min: 15000,
      max: 100000,
      currency: "AED"
    }
  },

  values: {
    ftaApproved: true,
    penaltyAvoidance: true,
    refundSupport: true,
    urgency: "express available"
  },

  relationships: {
    relatedEntities: [
      "Tax Compliance",
      "FTA Regulations",
      "Accounting Services"
    ],
    requiredFor: [
      "VAT Compliance",
      "FTA Audit Defense",
      "VAT Refund Claims",
      "Penalty Avoidance"
    ],
    complementaryTo: [
      "Tax Advisory",
      "Accounting Services",
      "Compliance Consulting"
    ]
  },

  seoMetadata: {
    title: "VAT Audit Services Dubai | FTA Compliance",
    description: "Expert VAT audit and compliance services. FTA-approved, penalty avoidance, refund support. Free consultation.",
    keywords: ["vat audit dubai", "fta compliance", "vat refund audit"],
    url: "/services/vat-audit"
  }
}

// ============================================================================
// SUPPORT LAYER: Regulatory Compliance Entities
// ============================================================================

export const ifrsComplianceEAV: AuditEntityEAV = {
  entity: "IFRS Compliance",
  category: "compliance",

  attributes: {
    standards: [
      "IFRS 15 - Revenue Recognition",
      "IFRS 16 - Leases",
      "IFRS 9 - Financial Instruments",
      "IFRS 17 - Insurance Contracts"
    ],
    services: [
      "IFRS Implementation",
      "IFRS Training",
      "Gap Analysis",
      "Financial Statement Conversion"
    ],
    timeline: {
      assessment: 7,
      implementation: 60,
      ongoing: "continuous",
      unit: "days"
    }
  },

  values: {
    mandatory: true,
    effectiveDate: "varies by standard",
    applicability: "all UAE companies",
    complexity: "high"
  },

  relationships: {
    relatedEntities: [
      "External Audit",
      "Financial Reporting",
      "Accounting Standards"
    ],
    requiredFor: [
      "Statutory Audit",
      "Financial Reporting",
      "Ministry Filing",
      "Bank Compliance"
    ],
    complementaryTo: [
      "Accounting Services",
      "CFO Services",
      "Training Programs"
    ]
  },

  seoMetadata: {
    title: "IFRS Compliance & Implementation Services Dubai",
    description: "Expert IFRS implementation and compliance. Gap analysis, training, conversion. All IFRS standards covered.",
    keywords: ["ifrs implementation dubai", "ifrs compliance", "ifrs training"],
    url: "/compliance/ifrs-standards"
  }
}

export const uaeFederalLawsEAV: AuditEntityEAV = {
  entity: "UAE Federal Laws",
  category: "compliance",

  attributes: {
    laws: [
      "Federal Law No. 32 of 2021 (Commercial Companies)",
      "Federal Decree-Law No. 47 of 2022 (Taxation)",
      "Cabinet Decision No. 96 of 2023",
      "Federal Law No. 14 of 2018 (Central Bank)"
    ],
    requirements: [
      "Annual Audit Mandatory",
      "IFRS Compliance",
      "Ministry Filing",
      "Beneficial Ownership Disclosure"
    ],
    penalties: {
      lateAudit: "AED 10,000 - 50,000",
      nonCompliance: "AED 20,000 - 500,000",
      licenseImpact: "suspension or cancellation"
    }
  },

  values: {
    applicability: "all UAE mainland companies",
    enforcingAuthority: "Ministry of Economy",
    updateFrequency: "annual",
    language: ["English", "Arabic"]
  },

  relationships: {
    relatedEntities: [
      "Ministry Requirements",
      "IFRS Standards",
      "Audit Requirements"
    ],
    requiredFor: [
      "Business License",
      "Ministry Compliance",
      "Legal Operations",
      "Banking Relationships"
    ],
    enabledBy: [
      "External Audit",
      "Legal Advisory",
      "Compliance Services"
    ],
    complementaryTo: [
      "Local Authority Requirements",
      "Industry Specific Regulations"
    ]
  },

  seoMetadata: {
    title: "UAE Federal Laws & Audit Requirements | Complete Guide",
    description: "Comprehensive guide to UAE federal audit laws. Requirements, deadlines, penalties. Updated for 2025.",
    keywords: ["uae audit law", "federal law 32", "ministry requirements"],
    url: "/compliance/uae-federal-laws"
  }
}

export const ministryRequirementsEAV: AuditEntityEAV = {
  entity: "Ministry Requirements",
  category: "compliance",

  attributes: {
    filingRequirements: [
      "Audited Financial Statements",
      "Audit Report",
      "Board Resolution",
      "Beneficial Ownership Register"
    ],
    deadlines: {
      large: "90 days from year-end",
      medium: "120 days from year-end",
      small: "150 days from year-end"
    },
    approvalProcess: [
      "Auditor Registration",
      "Ministry Portal Submission",
      "Document Verification",
      "Approval Issuance"
    ]
  },

  values: {
    portalUrl: "https://mc.gov.ae",
    electronicFiling: true,
    arabicRequired: "optional",
    supportAvailable: true
  },

  relationships: {
    relatedEntities: [
      "UAE Federal Laws",
      "External Audit",
      "DED Requirements"
    ],
    requiredFor: [
      "License Renewal",
      "Visa Quota",
      "Bank Accounts",
      "Government Tenders"
    ],
    enabledBy: [
      "Audit Services",
      "PRO Services",
      "Filing Services"
    ],
    complementaryTo: [
      "Tax Compliance",
      "Insurance Requirements"
    ]
  },

  seoMetadata: {
    title: "Ministry of Economy Audit Requirements Dubai | Filing Guide",
    description: "Complete guide to Ministry of Economy audit requirements. Deadlines, filing process, approvals. 2025 updated.",
    keywords: ["ministry audit requirements", "moe filing", "audit approval"],
    url: "/compliance/ministry-requirements"
  }
}

// ============================================================================
// RELATED LAYER: Advisory Services
// ============================================================================

export const taxConsultationEAV: AuditEntityEAV = {
  entity: "Tax Consultation",
  category: "service",

  attributes: {
    services: [
      "Tax Planning",
      "Tax Compliance",
      "Tax Dispute Resolution",
      "Transfer Pricing",
      "International Tax"
    ],
    taxes: ["VAT", "Corporate Tax", "Excise Tax", "Customs Duties"],
    deliverables: [
      "Tax Assessment",
      "Tax Returns",
      "Tax Planning Report",
      "FTA Correspondence",
      "Dispute Support"
    ],
    priceRange: {
      min: 10000,
      max: 150000,
      currency: "AED",
      model: "project or retainer"
    }
  },

  values: {
    ftaRegistered: true,
    multiJurisdiction: true,
    languages: ["English", "Arabic"],
    urgency: "available"
  },

  relationships: {
    relatedEntities: [
      "VAT Audit",
      "Corporate Tax Advisory",
      "International Tax"
    ],
    requiredFor: [
      "Tax Compliance",
      "Tax Optimization",
      "FTA Defense",
      "Cross-border Transactions"
    ],
    complementaryTo: [
      "Accounting Services",
      "CFO Services",
      "External Audit"
    ]
  },

  seoMetadata: {
    title: "Tax Consultation Services Dubai | VAT, Corporate Tax",
    description: "Expert tax consultation for UAE businesses. VAT, corporate tax, international tax. FTA-approved advisors.",
    keywords: ["tax consultation dubai", "vat advisory", "corporate tax uae"],
    url: "/services/tax-consultation"
  }
}

export const businessValuationEAV: AuditEntityEAV = {
  entity: "Business Valuation",
  category: "service",

  attributes: {
    methodologies: [
      "Income Approach (DCF)",
      "Market Approach",
      "Asset-based Approach",
      "Industry-specific Methods"
    ],
    purposes: [
      "M&A Transactions",
      "Investment Decisions",
      "Partnership Disputes",
      "Estate Planning",
      "Financial Reporting"
    ],
    deliverables: [
      "Valuation Report",
      "Financial Model",
      "Assumptions Documentation",
      "Market Analysis",
      "Sensitivity Analysis"
    ],
    priceRange: {
      min: 20000,
      max: 200000,
      currency: "AED"
    }
  },

  values: {
    accreditation: "IVS compliant",
    industries: "all",
    expertWitness: true,
    confidential: true
  },

  relationships: {
    relatedEntities: [
      "Due Diligence",
      "M&A Advisory",
      "Financial Modeling"
    ],
    requiredFor: [
      "M&A Deals",
      "Investment Rounds",
      "IFRS 3 Compliance",
      "Shareholder Disputes"
    ],
    complementaryTo: [
      "Transaction Advisory",
      "Financial Advisory",
      "Legal Services"
    ]
  },

  seoMetadata: {
    title: "Business Valuation Services Dubai | M&A Valuation",
    description: "Professional business valuation for M&A, investments, disputes. IVS compliant, all industries. Expert valuators.",
    keywords: ["business valuation dubai", "company valuation", "m&a valuation"],
    url: "/services/business-valuation"
  }
}

export const cfoServicesEAV: AuditEntityEAV = {
  entity: "CFO Services",
  category: "service",

  attributes: {
    services: [
      "Part-time CFO",
      "Interim CFO",
      "Virtual CFO",
      "CFO Advisory"
    ],
    responsibilities: [
      "Financial Planning",
      "Cash Flow Management",
      "Fundraising Support",
      "Board Reporting",
      "Strategic Planning"
    ],
    engagement: {
      partTime: "2-5 days/month",
      interim: "full-time temporary",
      virtual: "remote as needed",
      advisory: "on-call"
    },
    priceRange: {
      min: 15000,
      max: 50000,
      currency: "AED/month"
    }
  },

  values: {
    experience: "15+ years average",
    industries: "specialized",
    availability: "flexible",
    languages: ["English", "Arabic"]
  },

  relationships: {
    relatedEntities: [
      "Financial Advisory",
      "Accounting Services",
      "Business Planning"
    ],
    requiredFor: [
      "Growth Companies",
      "Fundraising",
      "Turnarounds",
      "IPO Preparation"
    ],
    complementaryTo: [
      "External Audit",
      "Tax Advisory",
      "Business Valuation"
    ]
  },

  seoMetadata: {
    title: "CFO Services Dubai | Part-time CFO, Virtual CFO",
    description: "Experienced CFO services for growing businesses. Part-time, interim, virtual CFO. Strategic financial leadership.",
    keywords: ["cfo services dubai", "part time cfo", "virtual cfo"],
    url: "/services/cfo-services"
  }
}

// ============================================================================
// RELATED LAYER: Technology Integration
// ============================================================================

export const auditSoftwareEAV: AuditEntityEAV = {
  entity: "Audit Software & Technology",
  category: "technology",

  attributes: {
    platforms: [
      "CaseWare",
      "IDEA Data Analytics",
      "Tableau",
      "Power BI",
      "Custom Tools"
    ],
    capabilities: [
      "Automated Testing",
      "Data Analytics",
      "Risk Assessment",
      "Document Management",
      "Workflow Automation"
    ],
    benefits: [
      "95% faster data analysis",
      "100% transaction testing capability",
      "Real-time reporting",
      "Enhanced accuracy",
      "Cost efficiency"
    ]
  },

  values: {
    cloudBased: true,
    aiPowered: true,
    integration: "multiple systems",
    security: "enterprise-grade"
  },

  relationships: {
    relatedEntities: [
      "Data Analytics",
      "Internal Audit",
      "External Audit"
    ],
    requiredFor: [
      "Digital Transformation",
      "Process Automation",
      "Quality Assurance"
    ],
    enabledBy: [
      "Cloud Infrastructure",
      "AI/ML Technology",
      "Secure Platforms"
    ],
    complementaryTo: [
      "Audit Services",
      "Risk Assessment",
      "Compliance Monitoring"
    ]
  },

  seoMetadata: {
    title: "Audit Software & Technology Dubai | Data Analytics",
    description: "Advanced audit technology and software. CaseWare, IDEA, data analytics, AI-powered testing. Modern audit solutions.",
    keywords: ["audit software dubai", "audit technology", "data analytics"],
    url: "/technology/audit-software"
  }
}

export const dataAnalyticsAuditEAV: AuditEntityEAV = {
  entity: "Data Analytics in Audit",
  category: "technology",

  attributes: {
    techniques: [
      "Predictive Analytics",
      "Anomaly Detection",
      "Pattern Recognition",
      "Transaction Testing",
      "Visualization"
    ],
    tools: [
      "IDEA",
      "ACL",
      "Tableau",
      "Power BI",
      "Python/R"
    ],
    applications: [
      "Fraud Detection",
      "Risk Assessment",
      "Continuous Auditing",
      "Trend Analysis",
      "Compliance Monitoring"
    ]
  },

  values: {
    coverage: "100% of transactions",
    speed: "real-time analysis",
    accuracy: "99%+ detection rate",
    automation: "80% automated"
  },

  relationships: {
    relatedEntities: [
      "Forensic Audit",
      "Internal Audit",
      "Audit Software"
    ],
    requiredFor: [
      "Modern Audit Standards",
      "Regulatory Compliance",
      "Risk Management"
    ],
    enabledBy: [
      "Big Data",
      "Machine Learning",
      "Cloud Computing"
    ],
    complementaryTo: [
      "Traditional Audit",
      "Risk Management",
      "Compliance"
    ]
  },

  seoMetadata: {
    title: "Data Analytics Audit Services Dubai | AI-Powered Auditing",
    description: "Advanced data analytics for audit. 100% transaction testing, fraud detection, real-time insights. AI-powered.",
    keywords: ["data analytics audit", "ai audit", "predictive analytics"],
    url: "/technology/data-analytics"
  }
}

// ============================================================================
// Export all entities for use across the application
// ============================================================================

export const allAuditEntities: AuditEntityEAV[] = [
  // Core Services
  externalAuditEAV,
  internalAuditEAV,
  dueDiligenceEAV,
  forensicAuditEAV,
  reraAuditEAV,
  vatAuditEAV,

  // Compliance
  ifrsComplianceEAV,
  uaeFederalLawsEAV,
  ministryRequirementsEAV,

  // Advisory Services
  taxConsultationEAV,
  businessValuationEAV,
  cfoServicesEAV,

  // Technology
  auditSoftwareEAV,
  dataAnalyticsAuditEAV
]

// Helper function to get entity by name
export function getEntityByName(entityName: string): AuditEntityEAV | undefined {
  return allAuditEntities.find(e => e.entity === entityName)
}

// Helper function to get all entities by category
export function getEntitiesByCategory(category: AuditEntityEAV['category']): AuditEntityEAV[] {
  return allAuditEntities.filter(e => e.category === category)
}

// Helper function to get related entities
export function getRelatedEntities(entityName: string): AuditEntityEAV[] {
  const entity = getEntityByName(entityName)
  if (!entity) return []

  return entity.relationships.relatedEntities
    .map(name => getEntityByName(name))
    .filter((e): e is AuditEntityEAV => e !== undefined)
}

// Export type for use in components
export type EntityCategory = AuditEntityEAV['category']
