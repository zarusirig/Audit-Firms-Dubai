/**
 * Free Zone Audit Requirements Content
 * Comprehensive guides for audit requirements in major UAE free zones
 */

export interface FreeZoneContent {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]

  // Hero Section
  heroHeadline: string
  heroSubheadline: string
  heroDescription: string

  // Overview
  overview: {
    title: string
    content: string[]
  }

  // Audit Requirements
  auditRequirements: {
    title: string
    mandatory: boolean
    threshold?: string
    deadline: string
    requirements: string[]
  }

  // Key Features
  keyFeatures: {
    title: string
    description: string
  }[]

  // Filing Process
  filingProcess: {
    step: number
    title: string
    description: string
    timeline: string
  }[]

  // Required Documents
  requiredDocuments: string[]

  // Penalties
  penalties: {
    type: string
    amount: string
  }[]

  // Benefits
  benefits: string[]

  // Industries
  commonIndustries: string[]

  // Related Services
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}

export const FREE_ZONES: Record<string, FreeZoneContent> = {
  'dmcc': {
    slug: 'dmcc',
    title: 'DMCC Audit Requirements - Dubai Multi Commodities Centre',
    metaTitle: 'DMCC Audit Requirements 2025 | Approved Auditors Dubai',
    metaDescription:
      'Complete guide to DMCC audit requirements. Audit threshold AED 1M, filing deadlines, approved auditors, penalties. Expert DMCC audit services.',
    keywords: [
      'dmcc audit requirements',
      'dmcc approved auditors',
      'dmcc audit threshold',
      'jlt audit',
      'dubai multi commodities centre audit',
      'dmcc financial statements',
      'dmcc compliance',
      'dmcc annual return',
    ],

    heroHeadline: 'DMCC Audit Requirements',
    heroSubheadline: 'Dubai Multi Commodities Centre',
    heroDescription:
      'Comprehensive guide to audit and compliance requirements for DMCC-registered companies. Expert audit services from DMCC-approved auditors.',

    overview: {
      title: 'About DMCC Audit Requirements',
      content: [
        'Dubai Multi Commodities Centre (DMCC) is one of the UAE\'s largest and most prestigious free zones, home to over 21,000 companies. DMCC has specific audit and compliance requirements that differ from mainland Dubai regulations.',
        'Understanding DMCC\'s audit requirements is critical for maintaining good standing, avoiding penalties, and ensuring smooth license renewal. The requirements vary based on your company\'s annual revenue and business activity.',
        'This guide covers everything you need to know about DMCC audit obligations, filing deadlines, approved auditors, and compliance best practices.',
      ],
    },

    auditRequirements: {
      title: 'When is Audit Mandatory?',
      mandatory: true,
      threshold: 'Revenue exceeding AED 1,000,000',
      deadline: '6 months from financial year-end',
      requirements: [
        'Annual revenue exceeding AED 1 million requires full statutory audit',
        'Below AED 1M threshold: Management accounts acceptable',
        'Audit must be conducted by DMCC-approved auditor',
        'Financial statements must comply with IFRS',
        'Audited statements filed via DMCC portal',
        'Annual Return submission mandatory for all companies',
      ],
    },

    keyFeatures: [
      {
        title: 'Revenue Threshold',
        description:
          'Audit mandatory only if annual revenue exceeds AED 1,000,000. Below this, management accounts suffice.',
      },
      {
        title: 'Extended Deadline',
        description:
          '6 months from year-end to file audited statements - longer than mainland (90-150 days).',
      },
      {
        title: 'Approved Auditors',
        description:
          'Must use DMCC-approved auditors. Not all UAE auditors are approved by DMCC.',
      },
      {
        title: 'IFRS Compliance',
        description:
          'Financial statements must comply with International Financial Reporting Standards.',
      },
      {
        title: 'Online Filing',
        description:
          'All submissions made through DMCC online portal - streamlined digital process.',
      },
      {
        title: 'Flexible Accounting',
        description:
          'Companies below threshold can submit simple management accounts instead of full audit.',
      },
    ],

    filingProcess: [
      {
        step: 1,
        title: 'Determine Audit Requirement',
        description:
          'Calculate annual revenue to determine if you exceed AED 1M threshold. If yes, audit mandatory. If no, management accounts acceptable.',
        timeline: 'Month 1 after year-end',
      },
      {
        step: 2,
        title: 'Engage DMCC-Approved Auditor',
        description:
          'Select auditor from DMCC approved list. Verify current approval status. Negotiate fees and timeline.',
        timeline: 'Month 2 after year-end',
      },
      {
        step: 3,
        title: 'Prepare Financial Records',
        description:
          'Organize trial balance, general ledger, supporting documents. Prepare schedule of fixed assets, receivables, payables.',
        timeline: 'Month 2-3',
      },
      {
        step: 4,
        title: 'Audit Fieldwork',
        description:
          'Auditor conducts testing, verifies balances, assesses controls. Respond to auditor queries and provide requested documents.',
        timeline: 'Month 3-4',
      },
      {
        step: 5,
        title: 'Review Draft Audit Report',
        description:
          'Review draft financial statements and audit report. Discuss any findings or adjustments with auditor. Finalize reports.',
        timeline: 'Month 5',
      },
      {
        step: 6,
        title: 'File with DMCC',
        description:
          'Submit audited financial statements via DMCC portal. Complete Annual Return. Pay any outstanding DMCC fees.',
        timeline: 'Before 6-month deadline',
      },
    ],

    requiredDocuments: [
      'Audited Financial Statements (if revenue > AED 1M) or Management Accounts',
      'Independent Auditor\'s Report',
      'Trade License copy',
      'Memorandum and Articles of Association',
      'Shareholder register',
      'Board resolution approving financial statements',
      'Lease agreement copy',
      'Bank statements for all accounts',
      'Previous year\'s filed accounts',
      'Annual Return form (completed online)',
    ],

    penalties: [
      {
        type: 'Late filing of accounts',
        amount: 'AED 5,000 - 20,000 depending on delay',
      },
      {
        type: 'Non-submission of Annual Return',
        amount: 'AED 1,000 initially, escalating monthly',
      },
      {
        type: 'Incomplete or incorrect filing',
        amount: 'AED 2,000 - 10,000',
      },
      {
        type: 'License renewal blocked',
        amount: 'Business disruption, visa issues',
      },
    ],

    benefits: [
      'Clear revenue threshold (AED 1M) - predictable requirement',
      'Extended 6-month deadline - more time than mainland',
      'Management accounts option for smaller companies',
      'Streamlined online filing process',
      'Well-established approved auditor network',
      'JLT location - convenient access to audit firms',
      'Multi-currency trading advantages',
      'Zero corporate tax (with conditions)',
      '100% foreign ownership',
      'No import/export duties',
    ],

    commonIndustries: [
      'Commodities Trading',
      'Precious Metals and Diamonds',
      'Technology and IT Services',
      'Professional Services',
      'Import/Export',
      'Manufacturing Representatives',
      'Consultancy',
      'Marketing and Media',
      'Financial Services',
      'Business Services',
    ],

    relatedServices: [
      {
        title: 'DMCC Audit Services',
        slug: 'external-audit',
        description: 'DMCC-approved auditors with competitive pricing',
      },
      {
        title: 'Management Accounts',
        slug: 'accounting',
        description: 'For DMCC companies below AED 1M threshold',
      },
      {
        title: 'IFRS Compliance',
        slug: 'accounting-advisory',
        description: 'IFRS financial statement preparation',
      },
    ],
  },

  'jafza': {
    slug: 'jafza',
    title: 'JAFZA Audit Requirements - Jebel Ali Free Zone',
    metaTitle: 'JAFZA Audit Requirements 2025 | Jebel Ali Free Zone Auditors',
    metaDescription:
      'Complete guide to JAFZA audit requirements. AED 3M threshold, filing deadlines, approved auditors. Expert JAFZA audit and compliance services.',
    keywords: [
      'jafza audit requirements',
      'jebel ali free zone audit',
      'jafza approved auditors',
      'jafza audit threshold',
      'jafza financial statements',
      'jafza compliance',
      'jebel ali auditors',
    ],

    heroHeadline: 'JAFZA Audit Requirements',
    heroSubheadline: 'Jebel Ali Free Zone Authority',
    heroDescription:
      'Essential audit and compliance requirements for JAFZA companies. AED 3M revenue threshold. Expert guidance from approved auditors.',

    overview: {
      title: 'About JAFZA Audit Requirements',
      content: [
        'Jebel Ali Free Zone (JAFZA) is the Middle East\'s largest free zone and a global trade hub. With over 7,000 companies, JAFZA has streamlined yet comprehensive audit requirements designed to balance compliance with business efficiency.',
        'JAFZA\'s audit requirements are more relaxed than many other UAE jurisdictions, with a higher revenue threshold of AED 3 million. This makes JAFZA particularly attractive for small to medium trading companies.',
        'Understanding JAFZA\'s specific requirements ensures smooth annual compliance, avoids penalties, and maintains your company\'s good standing for license renewal and visa processing.',
      ],
    },

    auditRequirements: {
      title: 'Audit Mandate & Threshold',
      mandatory: true,
      threshold: 'Revenue exceeding AED 3,000,000',
      deadline: '6 months from financial year-end',
      requirements: [
        'Audit mandatory if annual revenue exceeds AED 3 million',
        'Below AED 3M: Simplified accounts or management accounts acceptable',
        'Must use JAFZA-approved or UAE Ministry-approved auditor',
        'IFRS compliance for audited statements',
        'Submission via JAFZA online portal',
        'License renewal contingent on account filing',
      ],
    },

    keyFeatures: [
      {
        title: 'High Revenue Threshold',
        description:
          'AED 3 million threshold - among the highest in UAE free zones. Many small businesses exempt.',
      },
      {
        title: 'Simplified Accounts Option',
        description:
          'Companies below threshold can submit simplified accounts without full audit.',
      },
      {
        title: 'Strategic Location',
        description:
          'Adjacent to Jebel Ali Port - ideal for import/export businesses with logistics advantages.',
      },
      {
        title: 'Flexible Auditor Choice',
        description:
          'Can use JAFZA-approved or Ministry-approved auditors - wider selection.',
      },
      {
        title: 'Trade-Focused',
        description:
          'Requirements designed with trading companies in mind - practical and business-friendly.',
      },
      {
        title: 'Generous Timeline',
        description:
          '6 months to file accounts - ample time for preparation and audit completion.',
      },
    ],

    filingProcess: [
      {
        step: 1,
        title: 'Assess Audit Requirement',
        description:
          'Calculate total annual revenue. If exceeds AED 3M, full audit required. If below, simplified accounts sufficient.',
        timeline: 'Within 1 month of year-end',
      },
      {
        step: 2,
        title: 'Select Auditor',
        description:
          'Choose from JAFZA-approved or UAE Ministry-approved auditors. Verify approval status and obtain quote.',
        timeline: 'Month 2',
      },
      {
        step: 3,
        title: 'Compile Financial Information',
        description:
          'Prepare complete financial records including trading transactions, inventory, receivables, payables, shipping documents.',
        timeline: 'Month 2-3',
      },
      {
        step: 4,
        title: 'Conduct Audit',
        description:
          'Auditor performs fieldwork, tests transactions, verifies customs documentation, assesses inventory.',
        timeline: 'Month 3-4',
      },
      {
        step: 5,
        title: 'Finalize Reports',
        description:
          'Review and approve audited financial statements. Address any audit findings. Obtain signed audit report.',
        timeline: 'Month 5',
      },
      {
        step: 6,
        title: 'Submit to JAFZA',
        description:
          'Upload audited accounts to JAFZA portal. Complete annual filing. Pay license renewal fees.',
        timeline: 'Before 6-month deadline',
      },
    ],

    requiredDocuments: [
      'Audited Financial Statements (if revenue > AED 3M)',
      'Simplified Accounts (if revenue < AED 3M)',
      'Independent Auditor\'s Report (for audited accounts)',
      'Trade License and establishment card',
      'Customs documentation (import/export declarations)',
      'Lease agreement',
      'Bank statements',
      'Inventory schedules',
      'Accounts receivable and payable aging',
      'Previous year filed accounts',
      'Shareholder details and passport copies',
    ],

    penalties: [
      {
        type: 'Late account filing',
        amount: 'AED 5,000 - 15,000 depending on duration',
      },
      {
        type: 'Non-filing',
        amount: 'License renewal blocked + escalating fines',
      },
      {
        type: 'Incorrect information',
        amount: 'AED 2,000 - 5,000',
      },
      {
        type: 'License suspension',
        amount: 'Business operations halted',
      },
    ],

    benefits: [
      'High AED 3M threshold - many businesses exempt from audit',
      'Simplified accounts option for smaller companies',
      'Strategic port location - logistics advantage',
      'Established infrastructure and support services',
      'Wide choice of approved auditors',
      'Business-friendly compliance approach',
      '100% foreign ownership',
      'No currency restrictions',
      'Easy import/export procedures',
      'Access to Jebel Ali Port',
    ],

    commonIndustries: [
      'Import/Export Trading',
      'Logistics and Warehousing',
      'Manufacturing',
      'Distribution',
      'Shipping and Freight',
      'Automotive Trading',
      'Electronics',
      'Construction Materials',
      'Food and Beverage Trading',
      'Industrial Equipment',
    ],

    relatedServices: [
      {
        title: 'JAFZA Audit Services',
        slug: 'external-audit',
        description: 'Approved auditors for JAFZA companies',
      },
      {
        title: 'Simplified Accounts',
        slug: 'accounting',
        description: 'For JAFZA companies below AED 3M',
      },
      {
        title: 'Customs Compliance',
        slug: 'vat-audit',
        description: 'Import/export documentation and VAT',
      },
    ],
  },

  'dubai-south': {
    slug: 'dubai-south',
    title: 'Dubai South Audit Requirements - Free Zone Compliance',
    metaTitle: 'Dubai South Audit Requirements 2025 | DWC Free Zone Auditors',
    metaDescription:
      'Dubai South (DWC) audit requirements guide. Mandatory audit for all companies, filing deadlines, approved auditors. Expert audit services.',
    keywords: [
      'dubai south audit',
      'dwc audit requirements',
      'dubai world central audit',
      'dubai south free zone',
      'dwc auditors',
      'dubai south compliance',
      'aviation city audit',
    ],

    heroHeadline: 'Dubai South Audit Requirements',
    heroSubheadline: 'Dubai World Central Free Zone',
    heroDescription:
      'Audit and compliance requirements for Dubai South (DWC) free zone companies. Mandatory audit regardless of revenue. Expert guidance from approved auditors.',

    overview: {
      title: 'Dubai South Audit Overview',
      content: [
        'Dubai South (formerly Dubai World Central) is a master-planned free zone adjacent to Al Maktoum International Airport. Home to aviation, logistics, and commercial businesses, Dubai South has comprehensive audit requirements similar to mainland regulations.',
        'Unlike many other free zones, Dubai South requires all companies to have audited financial statements regardless of revenue - there is no exemption threshold.',
        'This requirement reflects Dubai South\'s positioning as a premium business destination with emphasis on governance and transparency. Companies benefit from modern infrastructure and proximity to the world\'s largest airport.',
      ],
    },

    auditRequirements: {
      title: 'Mandatory Audit for All Companies',
      mandatory: true,
      threshold: 'All companies regardless of revenue',
      deadline: '4-6 months from year-end (varies by company category)',
      requirements: [
        'All Dubai South companies require annual statutory audit',
        'No revenue threshold exemption',
        'Must use UAE Ministry-approved auditor',
        'IFRS-compliant financial statements',
        'Timely submission required for license renewal',
        'Specific requirements for aviation sector companies',
      ],
    },

    keyFeatures: [
      {
        title: 'Universal Audit Requirement',
        description:
          'All companies require audit regardless of size or revenue - ensures high governance standards.',
      },
      {
        title: 'Airport Proximity',
        description:
          'Adjacent to Al Maktoum International Airport - advantages for aviation and logistics businesses.',
      },
      {
        title: 'Modern Infrastructure',
        description:
          'State-of-the-art facilities and technology infrastructure supporting business operations.',
      },
      {
        title: 'Ministry-Approved Auditors',
        description:
          'Requires UAE Ministry-approved auditors - same standard as mainland companies.',
      },
      {
        title: 'Sector Specialization',
        description:
          'Tailored requirements for aviation, logistics, and commercial sectors.',
      },
      {
        title: 'Growth Focus',
        description:
          'Designed for companies with growth ambitions benefiting from airport proximity.',
      },
    ],

    filingProcess: [
      {
        step: 1,
        title: 'Engage Auditor Early',
        description:
          'Since audit is mandatory for all companies, engage Ministry-approved auditor 2-3 months before year-end.',
        timeline: 'Before year-end',
      },
      {
        step: 2,
        title: 'Year-End Close',
        description:
          'Complete financial year-end close. Reconcile all accounts. Prepare complete trial balance.',
        timeline: 'Month 1',
      },
      {
        step: 3,
        title: 'Document Preparation',
        description:
          'Organize comprehensive documentation including aviation-specific records if applicable.',
        timeline: 'Month 2',
      },
      {
        step: 4,
        title: 'Audit Execution',
        description:
          'Auditor conducts fieldwork. May include aircraft lease verification, cargo documentation, etc.',
        timeline: 'Month 2-3',
      },
      {
        step: 5,
        title: 'Report Finalization',
        description:
          'Review audit findings. Address any issues. Obtain final signed audit report.',
        timeline: 'Month 3-4',
      },
      {
        step: 6,
        title: 'Dubai South Submission',
        description:
          'Submit audited statements to Dubai South authority. Complete license renewal process.',
        timeline: 'Before deadline (4-6 months)',
      },
    ],

    requiredDocuments: [
      'Audited Financial Statements (mandatory for all)',
      'Independent Auditor\'s Report',
      'Ministry-approved auditor credentials',
      'Trade License',
      'Lease agreement',
      'Aviation operating permits (if applicable)',
      'Aircraft lease agreements (for aviation companies)',
      'Cargo handling documentation',
      'Bank statements',
      'Previous year\'s audited accounts',
      'Shareholder information',
    ],

    penalties: [
      {
        type: 'Late filing',
        amount: 'AED 10,000+ depending on delay',
      },
      {
        type: 'Non-submission',
        amount: 'License renewal blocked',
      },
      {
        type: 'Incomplete filing',
        amount: 'AED 5,000 - 10,000',
      },
      {
        type: 'Operating without valid license',
        amount: 'Business closure + fines',
      },
    ],

    benefits: [
      'Premium business destination with growth potential',
      'Al Maktoum International Airport proximity',
      'Modern infrastructure and facilities',
      'Aviation, logistics, and commercial focus',
      'Clear regulatory framework',
      'Professional business environment',
      '100% foreign ownership',
      'No currency restrictions',
      'Import/export advantages',
      'Growing business community',
    ],

    commonIndustries: [
      'Aviation Services',
      'Aircraft Leasing and Trading',
      'Logistics and Distribution',
      'Cargo Handling',
      'Freight Forwarding',
      'E-commerce Fulfillment',
      'Technology and IT',
      'Professional Services',
      'Trading and Distribution',
      'Commercial Services',
    ],

    relatedServices: [
      {
        title: 'External Audit Services',
        slug: 'external-audit',
        description: 'Ministry-approved audit for Dubai South companies',
      },
      {
        title: 'Aviation Industry Audit',
        slug: 'industries/aviation',
        description: 'Specialized audit for aviation sector',
      },
      {
        title: 'Logistics Audit',
        slug: 'industries/logistics',
        description: 'Audit services for logistics companies',
      },
    ],
  },

  'dafza': {
    slug: 'dafza',
    title: 'DAFZA Audit Requirements - Dubai Airport Free Zone',
    metaTitle: 'DAFZA Audit Requirements 2025 | Dubai Airport Free Zone Auditors',
    metaDescription:
      'DAFZA audit requirements and filing deadlines. Revenue threshold, approved auditors, compliance guide for Dubai Airport Free Zone companies.',
    keywords: [
      'dafza audit requirements',
      'dubai airport free zone audit',
      'dafza auditors',
      'dafza compliance',
      'dafza financial statements',
      'dubai airport auditors',
      'dafza filing',
    ],

    heroHeadline: 'DAFZA Audit Requirements',
    heroSubheadline: 'Dubai Airport Free Zone Authority',
    heroDescription:
      'Comprehensive audit requirements for DAFZA companies. Expert guidance on thresholds, deadlines, and compliance from approved auditors.',

    overview: {
      title: 'About DAFZA Audit Requirements',
      content: [
        'Dubai Airport Free Zone (DAFZA) is strategically located adjacent to Dubai International Airport, making it ideal for aviation, technology, media, and service companies requiring air connectivity.',
        'DAFZA has specific audit and financial reporting requirements designed to ensure corporate governance while maintaining business efficiency. Requirements vary based on company size and revenue.',
        'Understanding DAFZA\'s compliance framework is essential for maintaining your license, processing visas, and avoiding penalties. This guide provides comprehensive information on DAFZA audit obligations.',
      ],
    },

    auditRequirements: {
      title: 'Audit Requirements & Thresholds',
      mandatory: true,
      threshold: 'Based on revenue and company category',
      deadline: '6 months from financial year-end',
      requirements: [
        'Audit requirement based on revenue threshold (varies by activity)',
        'Most companies: Audit required if revenue > AED 1 million',
        'Must use DAFZA-approved or Ministry-approved auditor',
        'IFRS-compliant financial reporting',
        'Annual accounts filing mandatory for all companies',
        'Specific requirements for media and tech companies',
      ],
    },

    keyFeatures: [
      {
        title: 'Airport Location',
        description:
          'Direct access to Dubai International Airport - ideal for businesses requiring frequent travel.',
      },
      {
        title: 'Sector-Specific Rules',
        description:
          'Tailored requirements for technology, media, aviation, and professional services.',
      },
      {
        title: 'Revenue-Based Audit',
        description:
          'Audit threshold typically AED 1M - smaller companies may submit simplified accounts.',
      },
      {
        title: 'Flexible Auditor Selection',
        description:
          'Can choose from DAFZA-approved or UAE Ministry-approved auditors.',
      },
      {
        title: '6-Month Deadline',
        description:
          'Generous 6-month filing window from year-end - adequate preparation time.',
      },
      {
        title: 'Tech-Friendly',
        description:
          'Digital submission process and modern compliance framework.',
      },
    ],

    filingProcess: [
      {
        step: 1,
        title: 'Determine Requirements',
        description:
          'Calculate annual revenue and check DAFZA category to determine if audit or simplified accounts required.',
        timeline: 'Month 1 after year-end',
      },
      {
        step: 2,
        title: 'Appoint Auditor',
        description:
          'Select qualified auditor from DAFZA-approved or Ministry-approved list. Confirm availability and pricing.',
        timeline: 'Month 1-2',
      },
      {
        step: 3,
        title: 'Prepare Documentation',
        description:
          'Gather financial records, contracts, bank statements, and sector-specific documentation.',
        timeline: 'Month 2',
      },
      {
        step: 4,
        title: 'Complete Audit',
        description:
          'Auditor conducts examination, tests controls, verifies transactions. Respond to queries promptly.',
        timeline: 'Month 3-4',
      },
      {
        step: 5,
        title: 'Review & Approve',
        description:
          'Review draft financials and audit report. Board approval of financial statements.',
        timeline: 'Month 5',
      },
      {
        step: 6,
        title: 'File with DAFZA',
        description:
          'Submit audited accounts via DAFZA portal. Complete annual return. Pay renewal fees.',
        timeline: 'Before 6-month deadline',
      },
    ],

    requiredDocuments: [
      'Audited Financial Statements or Management Accounts',
      'Independent Auditor\'s Report (if audited)',
      'DAFZA Trade License',
      'Memorandum and Articles of Association',
      'Lease agreement',
      'Sector-specific licenses (media, tech, etc.)',
      'Bank statements for all accounts',
      'Revenue breakdown by activity',
      'Previous year filed accounts',
      'Shareholder registry',
      'Board resolutions',
    ],

    penalties: [
      {
        type: 'Late filing of accounts',
        amount: 'AED 2,000 - 15,000',
      },
      {
        type: 'Non-filing',
        amount: 'License renewal rejected + penalties',
      },
      {
        type: 'Incomplete submission',
        amount: 'AED 1,000 - 5,000',
      },
      {
        type: 'License lapse',
        amount: 'Visa cancellation + business disruption',
      },
    ],

    benefits: [
      'Premium airport location - easy travel access',
      'Technology and media sector focus',
      'Flexible audit thresholds',
      'Modern compliance infrastructure',
      'Digital filing process',
      'Competitive license fees',
      '100% foreign ownership',
      'Repatriation of profits',
      'No import duties on equipment',
      'Access to Dubai Airport facilities',
    ],

    commonIndustries: [
      'Technology and IT Services',
      'Media and Broadcasting',
      'Software Development',
      'E-commerce',
      'Digital Marketing',
      'Telecommunications',
      'Aviation Services',
      'Professional Services',
      'Consultancy',
      'Trading',
    ],

    relatedServices: [
      {
        title: 'DAFZA Audit Services',
        slug: 'external-audit',
        description: 'Approved audit for DAFZA companies',
      },
      {
        title: 'Technology Sector Audit',
        slug: 'industries/technology',
        description: 'Specialized audit for tech companies',
      },
      {
        title: 'Media Company Audit',
        slug: 'industries/media',
        description: 'Audit services for media businesses',
      },
    ],
  },
}
