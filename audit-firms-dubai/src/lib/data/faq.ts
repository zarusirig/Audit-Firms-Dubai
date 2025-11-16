/**
 * FAQ Data
 * Comprehensive frequently asked questions organized by category
 * Optimized for SEO and featured snippets
 */

export type FAQCategory =
  | 'general'
  | 'external-audit'
  | 'pricing-fees'
  | 'compliance'
  | 'special-audits'
  | 'process-timeline'
  | 'company-types'
  | 'technology'

export interface FAQItem {
  id: string
  category: FAQCategory
  question: string
  answer: string
  keywords: string[]
  relatedQuestions?: string[] // IDs of related FAQs
  priority: number // 1-10, higher = more important for SEO
}

export interface FAQCategoryInfo {
  id: FAQCategory
  name: string
  description: string
  icon: string
  count: number
  order: number
}

// Category Metadata
export const FAQ_CATEGORIES: FAQCategoryInfo[] = [
  {
    id: 'general',
    name: 'General Audit Questions',
    description: 'Basic information about audit services and requirements',
    icon: 'HelpCircle',
    count: 8,
    order: 1,
  },
  {
    id: 'external-audit',
    name: 'External Audit',
    description: 'Statutory audit requirements and processes',
    icon: 'FileCheck',
    count: 10,
    order: 2,
  },
  {
    id: 'pricing-fees',
    name: 'Pricing & Fees',
    description: 'Audit costs, payment terms, and pricing factors',
    icon: 'DollarSign',
    count: 7,
    order: 3,
  },
  {
    id: 'compliance',
    name: 'Compliance & Regulations',
    description: 'UAE laws, deadlines, and regulatory requirements',
    icon: 'Shield',
    count: 9,
    order: 4,
  },
  {
    id: 'special-audits',
    name: 'Special Audits',
    description: 'RERA, VAT, forensic, and internal audit services',
    icon: 'Search',
    count: 8,
    order: 5,
  },
  {
    id: 'process-timeline',
    name: 'Process & Timeline',
    description: 'How audits work, documents needed, and timelines',
    icon: 'Clock',
    count: 8,
    order: 6,
  },
  {
    id: 'company-types',
    name: 'Company Types',
    description: 'Audit requirements for different business structures',
    icon: 'Building',
    count: 6,
    order: 7,
  },
  {
    id: 'technology',
    name: 'Technology & Remote Services',
    description: 'Online audits, document submission, and digital services',
    icon: 'Monitor',
    count: 5,
    order: 8,
  },
] as const

// Comprehensive FAQ Data
export const FAQ_DATA: FAQItem[] = [
  // GENERAL AUDIT QUESTIONS
  {
    id: 'what-is-audit',
    category: 'general',
    question: 'What is an audit and why is it necessary?',
    answer:
      'An audit is an independent examination of financial records, statements, and operations by a qualified professional (auditor) to verify accuracy and compliance with accounting standards. In the UAE, audits are legally required under Federal Law No. 32 of 2021 for all mainland companies and most free zone entities. Audits provide assurance to stakeholders (shareholders, investors, banks, government) that financial statements present a true and fair view of the company\'s financial position. They also help identify weaknesses in internal controls, detect fraud, ensure compliance with regulations, and enhance credibility for business growth.',
    keywords: [
      'what is audit',
      'why audit required',
      'audit definition',
      'audit purpose',
      'uae audit law',
    ],
    priority: 10,
    relatedQuestions: ['who-needs-audit', 'audit-mandatory'],
  },
  {
    id: 'who-needs-audit',
    category: 'general',
    question: 'Who needs an audit in Dubai and UAE?',
    answer:
      'Under UAE law, the following entities must have their financial statements audited annually: (1) All mainland companies registered with Department of Economic Development (DED), (2) Most free zone companies (requirements vary by free zone), (3) Limited Liability Companies (LLCs), (4) Public Joint Stock Companies (PJSC), (5) Private Joint Stock Companies, (6) Branches of foreign companies, (7) Companies with specific industry licenses (banking, insurance, real estate developers), (8) Companies applying for bank loans or seeking investors. Sole proprietorships and some freelance licenses may be exempt depending on revenue and activities. Free zones like DMCC, DIFC, and JAFZA each have specific audit requirements.',
    keywords: [
      'who needs audit uae',
      'audit requirement dubai',
      'mandatory audit uae',
      'companies need audit',
    ],
    priority: 10,
    relatedQuestions: ['what-is-audit', 'free-zone-audit'],
  },
  {
    id: 'audit-mandatory',
    category: 'general',
    question: 'Is external audit mandatory for all companies in Dubai?',
    answer:
      'Yes, external audit is mandatory for all mainland companies in Dubai and UAE under Federal Law No. 32 of 2021 (Commercial Companies Law). This applies to Limited Liability Companies (LLCs), Joint Stock Companies, and branches of foreign companies. The law requires companies to appoint a Ministry-approved auditor to examine their financial statements annually. Free zone companies also have audit requirements, though specific rules vary by free zone authority. For example, DMCC requires annual audits for all companies, DIFC follows international standards, and JAFZA has specific thresholds. Failure to conduct mandatory audits can result in fines, license suspension, or non-renewal of trade licenses.',
    keywords: [
      'is audit mandatory dubai',
      'compulsory audit uae',
      'audit law uae',
      'federal law audit',
    ],
    priority: 9,
    relatedQuestions: ['audit-penalties', 'audit-deadline'],
  },
  {
    id: 'audit-vs-accounting',
    category: 'general',
    question: 'What is the difference between accounting and auditing?',
    answer:
      'Accounting and auditing are distinct functions: Accounting involves recording, classifying, and summarizing financial transactions to prepare financial statements. It\'s an ongoing internal process performed by the company\'s accounting team or bookkeeper. Auditing is an independent examination of those financial statements by an external, qualified auditor to verify their accuracy and compliance with standards. Key differences: (1) Purpose - Accounting prepares statements; Auditing verifies them, (2) Who does it - Accounting is internal; Auditing is external and independent, (3) Timing - Accounting is continuous; Auditing is periodic (usually annual), (4) Regulation - Accounting follows internal policies; Auditing follows ISA (International Standards on Auditing), (5) Output - Accounting produces financial statements; Auditing produces an audit report with opinion. Both are essential for proper financial management and compliance.',
    keywords: [
      'audit vs accounting',
      'difference audit accounting',
      'auditing vs bookkeeping',
      'external audit internal accounting',
    ],
    priority: 7,
    relatedQuestions: ['what-is-audit', 'internal-vs-external'],
  },
  {
    id: 'choose-auditor',
    category: 'general',
    question: 'How do I choose the right audit firm in Dubai?',
    answer:
      'When selecting an audit firm in Dubai, consider these key factors: (1) Ministry Approval - Ensure the firm is licensed and approved by UAE Ministry of Economy and relevant free zone authorities, (2) Experience - Look for firms with 10+ years in UAE market and experience in your industry, (3) Qualifications - Verify auditors hold recognized certifications (CPA, CA, ACCA), (4) Reputation - Check client reviews, testimonials, and track record, (5) Industry Expertise - Choose firms familiar with your sector (real estate, hospitality, trading, etc.), (6) Service Quality - Assess their responsiveness, communication, and support, (7) Technology - Modern firms use audit software for efficiency and accuracy, (8) Pricing - Compare fee structures and ensure transparency with no hidden costs, (9) Turnaround Time - Confirm they can meet your deadline requirements, (10) Additional Services - Consider if they offer tax advisory, accounting, and consulting. Farahat & Co has 37+ years experience, Ministry approval, 150+ certified professionals, and serves 28,000+ clients across 140 countries.',
    keywords: [
      'how to choose auditor',
      'best audit firm dubai',
      'select auditor uae',
      'audit firm selection criteria',
    ],
    priority: 8,
    relatedQuestions: ['ministry-approved', 'audit-qualifications'],
  },
  {
    id: 'ministry-approved',
    category: 'general',
    question: 'What does Ministry-approved auditor mean?',
    answer:
      'A Ministry-approved auditor is an audit firm or individual auditor who has been officially licensed and authorized by the UAE Ministry of Economy to conduct statutory audits for companies registered in the UAE mainland. To obtain Ministry approval, auditors must meet strict requirements including: (1) Professional qualifications (CPA, CA, ACCA or equivalent), (2) Minimum years of audit experience (typically 5-10 years), (3) Good standing with professional bodies, (4) Registration with UAE Accountants and Auditors Association, (5) Compliance with UAE audit regulations and International Standards on Auditing (ISA), (6) Professional indemnity insurance, (7) Quality control procedures and peer review. Only Ministry-approved auditors can sign statutory audit reports that are accepted by DED, banks, and government authorities for license renewal, bank loan applications, and regulatory filings. Farahat & Co is a fully Ministry-approved audit firm since 1990, also recognized by DFSA, ADGM, DMCC, and other free zones.',
    keywords: [
      'ministry approved auditor',
      'licensed auditor uae',
      'approved audit firm dubai',
      'ministry registration auditor',
    ],
    priority: 9,
    relatedQuestions: ['choose-auditor', 'audit-qualifications'],
  },
  {
    id: 'audit-qualifications',
    category: 'general',
    question: 'What qualifications should an auditor have?',
    answer:
      'Professional auditors in the UAE should hold one or more of these internationally recognized qualifications: (1) CPA (Certified Public Accountant) - US certification, widely recognized globally, (2) CA (Chartered Accountant) - British/Commonwealth certification, highly respected, (3) ACCA (Association of Chartered Certified Accountants) - International certification, popular in UAE, (4) CIA (Certified Internal Auditor) - Specialization in internal audit, (5) CFE (Certified Fraud Examiner) - For forensic audit specialists, (6) CISA (Certified Information Systems Auditor) - For IT audit, (7) CMA (Certified Management Accountant) - For management accounting focus. In addition to certifications, auditors should have: Minimum 5-10 years of audit experience, Knowledge of UAE regulations and laws, Understanding of International Financial Reporting Standards (IFRS), Familiarity with International Standards on Auditing (ISA), Industry-specific expertise, Continuing Professional Development (CPD) hours. Farahat & Co employs 150+ professionals with 95% holding CPA, CA, ACCA, CIA, or CFE certifications, with an average of 12+ years experience per team member.',
    keywords: [
      'auditor qualifications',
      'cpa ca acca',
      'audit certifications',
      'professional auditor credentials',
    ],
    priority: 7,
    relatedQuestions: ['ministry-approved', 'choose-auditor'],
  },
  {
    id: 'internal-vs-external',
    category: 'general',
    question: 'What is the difference between internal and external audit?',
    answer:
      'Internal and external audits serve different purposes and have distinct characteristics: EXTERNAL AUDIT: (1) Purpose - Verify financial statements for statutory compliance and third-party assurance, (2) Who performs - Independent external audit firm not employed by company, (3) Frequency - Annual (mandatory for most UAE companies), (4) Focus - Financial statement accuracy and compliance with IFRS/ISA, (5) Report to - Shareholders, regulators, banks, government authorities, (6) Legal requirement - Mandatory under UAE Commercial Companies Law, (7) Independence - Must be completely independent with no financial interest. INTERNAL AUDIT: (1) Purpose - Evaluate internal controls, risk management, and operational efficiency, (2) Who performs - Internal audit department or external consultants hired by management, (3) Frequency - Continuous or periodic throughout the year, (4) Focus - Processes, controls, compliance, fraud prevention, operational improvements, (5) Report to - Management, Board of Directors, Audit Committee, (6) Legal requirement - Optional (but recommended for good governance), (7) Independence - Internal to organization but functionally independent. Both are valuable: external audit for compliance and credibility, internal audit for risk management and operational excellence.',
    keywords: [
      'internal vs external audit',
      'difference internal external audit',
      'types of audit',
      'statutory vs internal audit',
    ],
    priority: 8,
    relatedQuestions: ['what-is-audit', 'internal-audit-benefits'],
  },

  // EXTERNAL AUDIT
  {
    id: 'external-audit-process',
    category: 'external-audit',
    question: 'What is the external audit process in Dubai?',
    answer:
      'The external audit process in Dubai typically follows these steps: (1) ENGAGEMENT - Sign audit engagement letter, agree on scope, timeline, and fees, (2) PLANNING - Auditor reviews previous financials, understands business operations, identifies risk areas, (3) INTERIM AUDIT (Optional) - Test controls and procedures during the year for large companies, (4) DOCUMENT REQUEST - Company provides financial records, bank statements, invoices, contracts, payroll, VAT returns, (5) FIELDWORK - Auditor visits office to examine documents, test transactions, verify balances, (6) INVENTORY VERIFICATION - Physical count of stock if applicable, (7) BANK CONFIRMATIONS - Direct confirmation of bank balances with banks, (8) RECEIVABLES/PAYABLES CONFIRMATION - Verify major debtor and creditor balances, (9) ANALYTICAL REVIEW - Analyze financial ratios, trends, and unusual items, (10) ADJUSTMENTS - Propose corrections to any errors or misstatements found, (11) MANAGEMENT LETTER - Provide recommendations for improving controls and processes, (12) FINAL REVIEW - Partner review of all audit work and conclusions, (13) AUDIT REPORT - Issue signed audit opinion (Unqualified, Qualified, Adverse, or Disclaimer), (14) SUBMISSION - File audited accounts with authorities for license renewal. The entire process takes 7-14 days for small companies, 2-4 weeks for medium companies, 4-8 weeks for large corporations.',
    keywords: [
      'audit process dubai',
      'how audit works',
      'audit steps uae',
      'external audit procedure',
    ],
    priority: 10,
    relatedQuestions: ['documents-needed', 'audit-duration', 'audit-types'],
  },
  {
    id: 'audit-types',
    category: 'external-audit',
    question: 'What types of audit opinions can be issued?',
    answer:
      'Auditors can issue four types of audit opinions based on their findings: (1) UNQUALIFIED OPINION (Clean Opinion) - The financial statements present a true and fair view and comply with all applicable standards. This is the best outcome and means no material issues were found. Most companies receive this opinion. (2) QUALIFIED OPINION - The financial statements are fairly presented except for specific matters. Issued when there are isolated issues that don\'t affect the overall presentation, such as lack of documentation for certain transactions or disagreement on a particular accounting treatment. (3) ADVERSE OPINION - The financial statements do not present a true and fair view and contain material misstatements. This is serious and indicates fundamental problems with the financial records. Companies with adverse opinions face difficulties with license renewal, bank loans, and investor confidence. (4) DISCLAIMER OF OPINION - The auditor cannot form an opinion due to significant limitations in scope, such as missing records, management restrictions, or inability to verify material balances. This is equivalent to "no opinion" and raises red flags with stakeholders. For regulatory purposes and license renewal in UAE, an Unqualified Opinion is required. Qualified, Adverse, or Disclaimer opinions may result in additional scrutiny, requests for re-audit, or license complications.',
    keywords: [
      'audit opinion types',
      'clean audit opinion',
      'qualified vs unqualified',
      'audit report types',
    ],
    priority: 8,
    relatedQuestions: ['external-audit-process', 'audit-failed'],
  },
  {
    id: 'first-time-audit',
    category: 'external-audit',
    question: 'What should I expect for a first-time audit?',
    answer:
      'If this is your company\'s first audit, here\'s what to expect: (1) MORE TIME REQUIRED - First audits take 30-50% longer than subsequent audits as auditors need to understand your business, systems, and establish opening balances, (2) OPENING BALANCES - Auditors must verify the accuracy of opening balances (assets, liabilities, equity) as of the start of the year, which may require examining prior year records even if unaudited, (3) DOCUMENT ORGANIZATION - You\'ll need to organize financial records systematically, which may expose gaps in your accounting practices, (4) SYSTEM REVIEW - Auditors will thoroughly review your accounting system, internal controls, and procedures, (5) MORE QUESTIONS - Expect detailed questions about your business operations, accounting policies, and significant transactions, (6) POTENTIAL ADJUSTMENTS - First audits often reveal accounting errors or incorrect treatments that need adjustment, (7) LEARNING CURVE - Your team will learn what auditors require, making future audits smoother, (8) COST - First audits typically cost 20-40% more than recurring audits due to extra work, (9) RECOMMENDATIONS - You\'ll receive valuable feedback on improving your accounting systems and controls. PREPARATION TIPS: Organize all financial documents for the period, reconcile all bank accounts, ensure inventory counts are done, have contracts and agreements readily available, prepare list of significant transactions, document your accounting policies. Farahat & Co has conducted 5,000+ first-time audits and provides extra guidance to new clients to ensure a smooth process.',
    keywords: [
      'first time audit',
      'first audit what to expect',
      'initial audit process',
      'opening balances audit',
    ],
    priority: 9,
    relatedQuestions: ['external-audit-process', 'documents-needed', 'audit-cost'],
  },
  {
    id: 'audit-failed',
    category: 'external-audit',
    question: 'What happens if my company fails the audit?',
    answer:
      'If your company receives a Qualified, Adverse, or Disclaimer audit opinion (often called "failing" the audit), here are the consequences and solutions: IMMEDIATE CONSEQUENCES: (1) License Renewal Issues - DED or free zone authority may reject your license renewal application until issues are resolved, (2) Bank Relations - Banks may freeze credit facilities, recall loans, or require immediate action plans, (3) Investor Concerns - Shareholders and investors lose confidence, potentially affecting funding, (4) Regulatory Scrutiny - Authorities may conduct additional investigations or impose penalties, (5) Legal Liability - Directors may face personal liability for financial misstatements. SOLUTIONS AND REMEDIATION: (1) UNDERSTAND ISSUES - Review the audit report carefully to identify specific problems, (2) CORRECTIVE ACTIONS - Implement accounting corrections, gather missing documentation, or change questionable practices, (3) MANAGEMENT REPRESENTATION - Provide explanations or additional evidence to auditors, (4) RE-AUDIT - After corrections, request auditors to re-examine and potentially change their opinion, (5) SECOND OPINION - If you disagree with findings, consider getting a second opinion from another Ministry-approved auditor, (6) PROFESSIONAL HELP - Engage accounting consultants to rectify issues and strengthen controls, (7) COMMUNICATION - Maintain transparent communication with authorities, banks, and stakeholders. PREVENTION: Maintain proper books throughout the year, conduct regular internal reviews, stay compliant with regulations, choose experienced auditors who can guide you before issues arise. Most audit issues can be resolved with proper corrective action. Farahat & Co provides advisory services to help companies avoid audit problems and maintain clean opinions.',
    keywords: [
      'failed audit what happens',
      'qualified audit opinion',
      'adverse audit opinion',
      'audit problems solutions',
    ],
    priority: 7,
    relatedQuestions: ['audit-types', 'audit-penalties', 'choose-auditor'],
  },
  {
    id: 'change-auditor',
    category: 'external-audit',
    question: 'Can I change my auditor mid-year or for next year?',
    answer:
      'Yes, you can change your auditor, but there are specific procedures and considerations: CHANGING AUDITORS: (1) TIMING - Best done after completing current year\'s audit. Mid-year changes are possible but may complicate the audit process and increase costs, (2) APPOINTMENT PROCESS - Under UAE law, shareholders must approve the appointment of a new auditor at the Annual General Meeting (AGM). For mid-year changes, an Extraordinary General Meeting (EGM) may be required, (3) HANDOVER - The outgoing auditor must cooperate with incoming auditor, provide access to working papers, and explain any significant issues or concerns, (4) INDEPENDENCE VERIFICATION - New auditor must verify independence and absence of conflicts of interest, (5) OPENING BALANCES - New auditor must review prior auditor\'s work on opening balances or perform additional procedures, (6) NOTIFICATION - Inform DED or free zone authority of the auditor change through official channels. VALID REASONS TO CHANGE: Fee disputes, quality concerns, poor communication, lack of industry expertise, conflicts of interest, geographical relocation, firm mergers or closures, availability issues. INVALID REASONS (RED FLAGS): Shopping for favorable opinion, hiding problems, avoiding questions about irregularities. Note that frequent auditor changes may raise concerns with regulators and banks. COSTS: First year with new auditor typically costs 10-20% more due to onboarding and understanding your business. If you\'re considering changing auditors, Farahat & Co offers smooth transition services with minimal disruption, leveraging 37 years of experience handling auditor transitions professionally and efficiently.',
    keywords: [
      'change auditor',
      'replace auditor uae',
      'switch audit firm',
      'auditor rotation',
    ],
    priority: 6,
    relatedQuestions: ['choose-auditor', 'external-audit-process'],
  },
  {
    id: 'audit-adjustments',
    category: 'external-audit',
    question: 'What are audit adjustments and why are they needed?',
    answer:
      'Audit adjustments (also called audit entries or corrections) are changes to financial statements proposed by auditors to correct errors or misstatements discovered during the audit. They ensure financial statements present a true and fair view. TYPES OF ADJUSTMENTS: (1) ERROR CORRECTIONS - Fixing mathematical mistakes, posting errors, or misclassifications (e.g., expense recorded as asset), (2) ACCRUALS - Recording expenses or income for the period even if cash not yet paid/received (matching principle), (3) PROVISIONS - Recognizing liabilities for obligations that may exist (doubtful debts, warranties, legal claims), (4) DEPRECIATION - Ensuring assets are depreciated correctly per accounting policies, (5) INVENTORY ADJUSTMENTS - Aligning book quantities with physical count, writing off obsolete stock, (6) FOREIGN EXCHANGE - Revaluing foreign currency balances at correct year-end rates, (7) POLICY CHANGES - Applying correct accounting treatment per IFRS standards. MATERIALITY: Auditors only adjust material items (significant amounts that affect financial statement users\' decisions). Minor immaterial errors may be waived. MANAGEMENT APPROVAL: All audit adjustments must be reviewed and approved by management before being posted to books. You can discuss adjustments with auditors if you disagree. IMPACT: Adjustments can affect: Profit (increase or decrease), Asset values, Liability amounts, Tax calculations, Financial ratios, Compliance with loan covenants. BEST PRACTICE: To minimize adjustments in future audits: Maintain accurate month-end closing procedures, Perform regular balance sheet reconciliations, Understand and apply accounting standards correctly, Conduct internal reviews quarterly, Engage auditors for advisory throughout the year. Farahat & Co explains all adjustments clearly and helps strengthen your accounting to reduce future adjustments.',
    keywords: [
      'audit adjustments',
      'audit entries',
      'audit corrections',
      'financial statement adjustments',
    ],
    priority: 6,
    relatedQuestions: ['external-audit-process', 'audit-failed'],
  },
  {
    id: 'management-letter',
    category: 'external-audit',
    question: 'What is a management letter and what does it contain?',
    answer:
      'A management letter (also called management representation letter or letter to management) is a formal document prepared by auditors at the conclusion of an audit. It contains observations, recommendations, and suggestions for improving the company\'s accounting systems, internal controls, and operations. CONTENTS OF MANAGEMENT LETTER: (1) CONTROL WEAKNESSES - Deficiencies in internal controls that could lead to errors or fraud (lack of segregation of duties, weak approval procedures, inadequate documentation), (2) ACCOUNTING ISSUES - Areas where accounting practices could be improved or aligned better with standards (inconsistent depreciation policies, missing accruals, policy documentation), (3) COMPLIANCE MATTERS - Regulatory or legal compliance concerns (VAT filing deadlines missed, labor law documentation gaps, contract management issues), (4) OPERATIONAL INEFFICIENCIES - Processes that could be streamlined or automated (manual data entry prone to errors, lack of system integration, inventory management improvements), (5) RISK AREAS - Potential risks that management should address (cash handling procedures, credit control policies, IT security concerns), (6) BEST PRACTICE RECOMMENDATIONS - Suggestions based on industry standards and auditor expertise. SEVERITY LEVELS: Issues are often categorized as High (critical, needs immediate attention), Medium (important, address within 3-6 months), or Low (minor improvements). MANAGEMENT RESPONSE: Companies should: Review all points carefully, Prepare action plans for each issue, Assign responsibilities and deadlines, Implement improvements before next audit, Update auditors on progress. VALUE: While highlighting weaknesses, management letters are valuable tools for continuous improvement, strengthening governance, reducing risks, and preparing for growth. They demonstrate auditor\'s value beyond compliance. Farahat & Co provides detailed, practical management letters with specific actionable recommendations, not just generic observations. Our 37 years of experience helps identify improvements that genuinely add value.',
    keywords: [
      'management letter',
      'audit recommendations',
      'audit findings letter',
      'control weaknesses',
    ],
    priority: 5,
    relatedQuestions: ['external-audit-process', 'internal-vs-external'],
  },
  {
    id: 'audit-after-hours',
    category: 'external-audit',
    question: 'Can auditors work after hours or on weekends?',
    answer:
      'Yes, auditors can work after business hours or on weekends if needed, though this depends on the audit firm\'s policies and may affect fees. SITUATIONS FOR AFTER-HOURS AUDIT: (1) URGENT DEADLINES - License renewal deadlines, bank loan applications, investor timelines, (2) MINIMAL DISRUPTION - For businesses operating during office hours, after-hours audit reduces interruption to daily operations, (3) YEAR-END COUNTS - Stock counts often done after business hours when premises are closed, (4) RETAIL BUSINESSES - Stores that operate long hours may require auditors outside typical 9-5, (5) CLIENT REQUEST - Some clients prefer auditors come evenings/weekends for confidentiality or convenience. PRACTICAL CONSIDERATIONS: (1) COST - After-hours work typically carries 20-50% premium on standard fees due to overtime rates for audit staff, (2) STAFF AVAILABILITY - Auditors have other clients and commitments, so extensive after-hours work requires advance planning, (3) DOCUMENTATION ACCESS - Your accounting staff may need to be available to answer questions and provide documents, (4) SYSTEM ACCESS - IT systems, servers, and accounting software must be accessible, (5) PREMISES ACCESS - Security, keys, and facility access must be arranged. ALTERNATIVE SOLUTIONS: If after-hours is cost-prohibitive: (1) REMOTE WORK - Auditors can review many documents remotely via secure file sharing, (2) STAGGERED SCHEDULE - Auditors work different hours each day to minimize disruption, (3) DEDICATED SPACE - Provide separate room where auditors work without affecting operations, (4) EARLY PLANNING - Start audit process earlier so deadline pressure is reduced. Farahat & Co offers flexible scheduling including after-hours and weekend audits when necessary. We accommodate client needs while maintaining quality and managing costs fairly. Our team has conducted hundreds of after-hours audits for retail, hospitality, and time-sensitive client situations.',
    keywords: [
      'audit after hours',
      'weekend audit',
      'evening audit work',
      'flexible audit schedule',
    ],
    priority: 4,
    relatedQuestions: ['audit-duration', 'audit-cost', 'express-audit'],
  },
  {
    id: 'audit-locations',
    category: 'external-audit',
    question: 'Can auditors conduct audits at multiple locations?',
    answer:
      'Yes, auditors can and often must conduct audits at multiple locations for companies with branches, warehouses, retail outlets, or geographically dispersed operations. MULTI-LOCATION AUDIT APPROACH: (1) HEADQUARTERS REVIEW - Central accounting records, policies, and consolidated financial statements examined at main office, (2) SIGNIFICANT LOCATIONS - Branches or units representing 10%+ of revenue/assets receive full onsite audit, (3) SAMPLING - For companies with many locations (retail chains, restaurant groups), auditors visit representative sample of locations, (4) REMOTE VERIFICATION - Smaller locations may be audited remotely through documentation review and confirmations, (5) INVENTORY COUNTS - Physical stock counts conducted at all material warehouse or storage locations, (6) CASH COUNTS - For businesses handling cash, spot checks at various locations. COORDINATION REQUIRED: (1) ADVANCE SCHEDULING - Plan visit dates to minimize disruption at each location, (2) LOCAL SUPPORT - Ensure staff at each location can provide documents and assistance, (3) TRAVEL LOGISTICS - Arrange access, transportation, and accommodations if locations are distant, (4) COMMUNICATION - Central finance team coordinates with location managers. ADDITIONAL CONSIDERATIONS: (1) COST - Multi-location audits cost more due to travel time, expenses, and additional audit hours, (2) TIMING - May extend overall audit duration to accommodate travel schedules, (3) SCOPE - Clearly define which locations will be visited versus reviewed centrally, (4) CONTROLS - Strong centralized controls and reporting can reduce need for extensive location visits. UAE CONTEXT: For UAE companies, this commonly applies to: Retail chains across Dubai/Abu Dhabi/Northern Emirates, Restaurant franchises, Real estate developers with multiple projects, Trading companies with multiple warehouses, Hotel groups, Schools with multiple branches. Farahat & Co has extensive experience with multi-location audits across the UAE and GCC region. Our team efficiently coordinates complex audits spanning multiple emirates, countries, and time zones. We\'ve audited companies with 50+ locations across UAE.',
    keywords: [
      'multi location audit',
      'branch audit',
      'multiple office audit',
      'audit several locations',
    ],
    priority: 5,
    relatedQuestions: ['audit-cost', 'audit-duration', 'external-audit-process'],
  },
  {
    id: 'audit-inventory',
    category: 'external-audit',
    question: 'How do auditors verify inventory during an audit?',
    answer:
      'Inventory verification is a critical part of audits for trading, manufacturing, and retail companies. Auditors follow specific procedures: PHYSICAL INVENTORY COUNT: (1) OBSERVATION - Auditors attend your year-end physical stock count to observe the process and test-count selected items, (2) TEST COUNTS - Randomly select items from shelves and count them, compare with your count sheets, (3) CUT-OFF TESTING - Verify the last goods received and goods shipped to ensure all inventory belongs to correct period, (4) CONDITION ASSESSMENT - Identify damaged, obsolete, or slow-moving items that may need write-down. INVENTORY VALUATION: (5) COST VERIFICATION - Test purchase invoices to confirm cost prices used in inventory valuation, (6) PRICING METHOD - Verify correct application of FIFO, weighted average, or other costing method, (7) OVERHEAD ALLOCATION - For manufacturers, review allocation of production overheads to finished goods, (8) NET REALIZABLE VALUE - Compare cost to selling price, write down inventory below cost if necessary, (9) CONSISTENCY - Ensure costing methods consistent with prior years. ADDITIONAL PROCEDURES: (10) WAREHOUSE VISITS - Visit storage locations, warehouses, consignment stocks, (11) THIRD-PARTY CONFIRMATIONS - Confirm inventory held by others (bonded warehouses, agents), (12) RECONCILIATION - Reconcile perpetual inventory records with general ledger, (13) MOVEMENT ANALYSIS - Review inventory turnover, identify obsolete or aged items. COMMON INVENTORY ISSUES FOUND: Differences between physical count and books, Damaged or expired goods not written off, Incorrect pricing or costing, Poor cut-off (recording sales/purchases in wrong period), Missing documentation for inventory movements, Obsolete inventory still carried at full cost. PREPARATION TIPS: Schedule count near year-end (within 2 weeks), Count all items systematically with proper tagging, Have 2 people count independently, Prepare clean count sheets with locations and descriptions, Separate damaged/obsolete items, Have purchase invoices and delivery notes organized, Reconcile count to books before auditors arrive. Farahat & Co has audited inventories ranging from AED 50,000 to AED 50 million across all industries - trading, retail, manufacturing, hospitality, healthcare. Our team includes inventory specialists who can guide proper count procedures.',
    keywords: [
      'inventory audit',
      'stock audit',
      'physical count audit',
      'inventory verification',
    ],
    priority: 7,
    relatedQuestions: ['documents-needed', 'external-audit-process'],
  },

  // PRICING & FEES (continuing with comprehensive answers)
  {
    id: 'audit-cost',
    category: 'pricing-fees',
    question: 'How much does an audit cost in Dubai?',
    answer:
      'Audit fees in Dubai and UAE vary significantly based on multiple factors. Here\'s a comprehensive pricing guide: TYPICAL PRICE RANGES (External Audit): Small Companies (Revenue < AED 5M): AED 8,000 - AED 15,000, Medium Companies (Revenue AED 5M - 50M): AED 15,000 - AED 40,000, Large Companies (Revenue AED 50M - 200M): AED 40,000 - AED 100,000, Very Large/Listed Companies (Revenue > AED 200M): AED 100,000 - AED 500,000+. PRICING FACTORS: (1) COMPANY SIZE - Revenue, assets, number of transactions, (2) COMPLEXITY - Number of bank accounts, subsidiaries, currencies, intercompany transactions, (3) INDUSTRY - Real estate, manufacturing, banking require more specialized work, (4) LOCATIONS - Multiple branches or warehouses increase fees, (5) QUALITY OF RECORDS - Well-organized books cost less to audit, (6) PREVIOUS AUDIT - First-time audits cost 25-40% more than recurring, (7) AUDIT TYPE - Statutory audit vs RERA vs Grant audit, (8) TIMELINE - Express service (3-5 days) costs 30-50% premium, (9) FREE ZONE - Some free zones have higher requirements (DIFC, ADGM), (10) ISSUES - Complex transactions, errors, investigations increase time and cost. WHAT\'S INCLUDED IN FEES: Audit planning and risk assessment, Review of internal controls, Testing of transactions and balances, Bank and third-party confirmations, Analytical procedures, Audit report issuance, Management letter with recommendations. ADDITIONAL COSTS POSSIBLE: Inventory count attendance (if offsite), Travel to branch locations, Translation services (if needed), Assistance with regulatory submissions, Tax filing support (VAT, Corporate Tax). PAYMENT TERMS: Typically 50% advance, 50% upon completion. Annual retainer agreements available with better rates. GETTING ACCURATE QUOTE: Use online calculator for estimate, Provide: Trade license, Latest financial statements, Revenue, number of transactions, Locations and complexity, Timeline requirements. Farahat & Co offers transparent, competitive pricing with no hidden fees. Our 37 years of experience allows us to provide accurate quotes upfront. Use our Audit Fee Calculator for instant estimate, or contact us for detailed customized quote.',
    keywords: [
      'audit fees dubai',
      'audit cost uae',
      'how much audit',
      'audit pricing dubai',
    ],
    priority: 10,
    relatedQuestions: ['pricing-factors', 'payment-terms', 'hidden-fees'],
  },

  // PRICING & FEES (continued)
  {
    id: 'pricing-factors',
    category: 'pricing-fees',
    question: 'What factors affect audit fees?',
    answer:
      'Audit fees are determined by a combination of factors that affect the time, expertise, and resources required: (1) COMPANY SIZE AND REVENUE - Higher revenue means more transactions to test, more complex operations, larger audit scope. (2) NUMBER OF TRANSACTIONS - More invoices, payments, journal entries = more testing required. (3) NUMBER OF BANK ACCOUNTS - Each bank account needs reconciliation and confirmation. (4) INVENTORY COMPLEXITY - Type of inventory (raw materials, finished goods, spare parts), number of locations, valuation method. (5) INDUSTRY - Specialized industries require industry-specific knowledge: Real estate (RERA compliance), Banking/Finance (regulatory requirements), Healthcare (specialized regulations), Hospitality (revenue recognition complexity). (6) GEOGRAPHICAL SPREAD - Multiple locations, branches, warehouses require site visits. (7) QUALITY OF ACCOUNTING RECORDS - Well-maintained books: Lower fees due to less time reconciling and investigating, Poor records: Higher fees for corrections and additional work. (8) PREVIOUS AUDIT HISTORY - Recurring audit: 20-30% less than first time, Clean prior opinion: Smooth process, Previous issues: More scrutiny required. (9) COMPLEXITY FACTORS - Subsidiaries and related parties, Foreign currency transactions, Complex contracts (long-term projects, leases), Significant estimates and judgments, Mergers/acquisitions during year. (10) URGENCY AND TIMELINE - Standard timeline (3-4 weeks): Normal rates, Express service (1 week): 30-50% premium, Last-minute (emergency): 50-100% premium. (11) FREE ZONE REQUIREMENTS - DIFC, ADGM: Higher standards, more documentation, DMCC, JAFZA: Standard requirements, New free zones: Varying requirements. (12) ADDITIONAL SERVICES - VAT audit, Corporate tax advisory, Grant audit, Regulatory submissions. Farahat & Co provides detailed fee breakdown showing exactly what drives costs. Our transparent pricing means no surprises.',
    keywords: ['audit fee factors', 'what affects audit cost', 'audit pricing factors', 'why audit expensive'],
    priority: 9,
    relatedQuestions: ['audit-cost', 'hidden-fees', 'reduce-audit-fees'],
  },
  {
    id: 'payment-terms',
    category: 'pricing-fees',
    question: 'What are the payment terms for audit services?',
    answer:
      'Standard payment terms for audit services in UAE: TYPICAL STRUCTURE: (1) 50% Advance Payment - Due upon signing engagement letter, before audit commences, (2) 50% Final Payment - Due upon completion of audit and before report issuance. ALTERNATIVE ARRANGEMENTS: (1) MONTHLY RETAINER - For ongoing accounting + annual audit, spread costs over 12 months, (2) THREE INSTALLMENTS - 40% advance, 40% at fieldwork, 20% at completion, (3) QUARTERLY PAYMENTS - For large annual contracts with multiple services, (4) IMMEDIATE FULL PAYMENT - Some small audits (less than AED 10,000) paid upfront. PAYMENT METHODS ACCEPTED: Bank transfer (most common), Cheque (requires clearance before starting), Credit/Debit card (some firms), Cash (for small amounts, not recommended). INVOICE AND DOCUMENTATION: Proper tax invoice issued with VAT, Engagement letter specifies payment schedule, Receipt provided for all payments, Payment reflected in audit engagement tracking. LATE PAYMENT: Work may be paused if payments delayed, Final report withheld until full payment, Late fees may apply (typically 2% per month). DISCOUNTS AVAILABLE: (1) Annual contracts - 10-15% discount for multi-year commitments, (2) Early payment - 5% discount if paid in full upfront, (3) Package deals - Combined accounting + audit + tax services, (4) Referrals - Discount for referring other clients, (5) Multiple entities - Discount for group of companies. REFUND POLICY: Advance is non-refundable once work commences, Unused portion refunded if engagement terminated early by client, Full refund if auditor withdraws due to conflict/independence. ADDITIONAL COST PROTECTION: Fixed fee quoted (not hourly), so scope expansion doesn\'t increase cost (unless significant changes), Price locked for year even if audit takes longer than expected. Farahat & Co offers flexible payment terms tailored to client needs. We understand cash flow considerations and can structure payments accordingly while maintaining professional standards.',
    keywords: ['audit payment terms', 'how to pay auditor', 'audit payment schedule', 'audit invoice'],
    priority: 7,
    relatedQuestions: ['audit-cost', 'pricing-factors'],
  },
  {
    id: 'hidden-fees',
    category: 'pricing-fees',
    question: 'Are there any hidden fees in audit services?',
    answer:
      'Reputable audit firms provide transparent pricing with no hidden fees. Here\'s what should and shouldn\'t be included: INCLUDED IN STANDARD AUDIT FEE: Audit planning and risk assessment, Review and testing of financial statements, Testing of internal controls, Analytical procedures, Bank confirmations, Supplier/customer confirmations, Audit report preparation and issuance, Management letter with recommendations, Basic questions and clarifications, Standard industry research. ADDITIONAL CHARGES (Should be disclosed upfront): (1) OUT-OF-SCOPE WORK - Branches not initially disclosed, Subsidiaries discovered later, Additional locations requiring visits. (2) TRAVEL EXPENSES - For multi-location audits (usually disclosed), Hotel, transport for remote locations, International travel if applicable. (3) TRANSLATION SERVICES - If documents need professional translation, Arabic to English or vice versa. (4) SPECIALIST CONSULTATIONS - IT audit specialists, Valuation experts for complex assets, Legal specialists for contracts. (5) ASSISTANCE WITH SUBMISSIONS - Government filings beyond standard DED submission, Bank presentations, Investor reports. (6) EXPEDITED SERVICES - Rush fees for faster turnaround, Weekend/evening work. (7) ADDITIONAL REPORTS - Extra copies of bound reports, Special format reports for banks/investors. RED FLAGS FOR HIDDEN FEES: Vague pricing "starts from", Hourly rates without caps, "Plus expenses" without specification, Fees change after work starts without reason, Additional charges for "standard" procedures. PROTECTING YOURSELF: (1) Get detailed written quote, (2) Request itemized fee breakdown, (3) Ask "what\'s NOT included?", (4) Clarify travel/expense policy, (5) Get fixed-price quote when possible, (6) Review engagement letter carefully. AT FARAHAT & CO: We provide all-inclusive fixed pricing, Travel within Dubai/UAE included in fee, Only additional charges for true out-of-scope work (disclosed upfront), Written fee agreement with no surprises, 37 years of transparent pricing builds trust. Our philosophy: Surprise costs damage relationships. We\'d rather lose a client due to high upfront quote than surprise them later.',
    keywords: ['hidden audit fees', 'audit extra charges', 'transparent audit pricing', 'audit fee surprises'],
    priority: 8,
    relatedQuestions: ['payment-terms', 'audit-cost', 'pricing-factors'],
  },
  {
    id: 'reduce-audit-fees',
    category: 'pricing-fees',
    question: 'How can I reduce my audit fees?',
    answer:
      'While maintaining audit quality, there are legitimate ways to reduce audit costs: BEFORE AUDIT: (1) ORGANIZE RECORDS - Well-organized, reconciled books save significant audit time, Monthly bank reconciliations completed, Balance sheet accounts reconciled, Supporting documents filed systematically. (2) PREPARE TRIAL BALANCE - Provide detailed, reconciled trial balance before audit starts, Saves auditor from extracting and reconciling. (3) SCHEDULE BOOKS - Prepare standard schedules auditors typically request: Fixed asset register with depreciation, Prepayments and accruals schedule, Provisions schedule, Receivables aging, Payables list. (4) APPOINT EARLY - Don\'t wait until deadline, Early appointment = better rates, Rush work costs 30-50% more. (5) YEAR-END PLANNING - Meet with auditor 2-3 months before year-end, Discuss anticipated issues, Make adjustments during the year. DURING AUDIT: (6) ASSIGN DEDICATED CONTACT - Have knowledgeable person available to answer questions quickly, Avoids auditor waiting time which you pay for. (7) PROVIDE COMPLETE INFORMATION - First time, Don\'t drip-feed documents, Incomplete information = multiple follow-ups = more time. (8) RESPOND PROMPTLY - Quick responses to queries speeds up process. (9) WORKSPACE - Provide dedicated quiet space for auditors, Reduces their time and travel costs. (10) ELECTRONIC DOCUMENTATION - Well-organized shared folders, Reduces photocopying and document handling time. LONG-TERM STRATEGIES: (11) ANNUAL CONTRACT - Multi-year agreement = 10-20% discount. (12) IMPROVE SYSTEMS - Invest in accounting software, Automated reconciliations, Better internal controls mean less audit testing. (13) INTERNAL REVIEWS - Quarterly internal reviews catch issues early, Cleaner year-end = faster audit. (14) CONSISTENT AUDITOR - Don\'t switch auditors yearly, Institutional knowledge = efficiency. (15) PACKAGE SERVICES - Combine audit + accounting + tax = better rates. WHAT NOT TO DO: Don\'t compromise on quality to save money, Don\'t hide information (causes delays and increases fees), Don\'t shop for lowest price only (quality matters), Don\'t use unqualified auditors (license renewal issues). Farahat & Co works with clients to optimize costs while maintaining standards. Our efficiency from 37 years experience means competitive fees without cutting corners. We provide free annual consultation to help clients prepare effectively.',
    keywords: ['reduce audit fees', 'lower audit costs', 'cheaper audit', 'save on audit'],
    priority: 7,
    relatedQuestions: ['pricing-factors', 'audit-cost', 'documents-needed'],
  },
  {
    id: 'express-audit',
    category: 'pricing-fees',
    question: 'Do you offer express or urgent audit services?',
    answer:
      'Yes, express audit services are available for urgent situations, though fees are higher due to resource prioritization: EXPRESS TIMELINES: (1) SUPER EXPRESS (3-5 days) - For small companies with clean records, Premium: 40-60% above standard fee. (2) EXPRESS (1 week) - For medium companies with organized books, Premium: 30-40% above standard fee. (3) FAST TRACK (2 weeks) - For larger companies, Premium: 20-30% above standard fee. STANDARD TIMELINE (3-4 weeks) - Normal pricing, no premium. WHEN EXPRESS NEEDED: Urgent bank loan application, Last-minute license renewal deadline, Investor timeline requirements, Late realization of audit requirement, Auditor change mid-year, Acquisition due diligence deadlines, Emergency regulatory submission. REQUIREMENTS FOR EXPRESS: Records must be well-organized and complete, Financial statements already prepared, All supporting documents readily available, Dedicated client contact available full-time, Management available for quick decisions, No complex issues or investigations required, Advance payment in full (not 50/50). EXPRESS PROCESS: (1) IMMEDIATE KICKOFF - Work starts within 24 hours of agreement, (2) EXTENDED HOURS - Auditors work evenings/weekends if needed, (3) PRIORITY ALLOCATION - Senior team members assigned, (4) RAPID REVIEW CYCLES - Daily progress meetings, quick feedback loops, (5) PARALLEL WORK - Multiple areas tested simultaneously. LIMITATIONS: Cannot compromise audit quality or standards, If complex issues found, timeline may extend, Not available during peak season (December-April), Limited slots available (first-come basis), May not be possible for very large/complex companies. ALTERNATIVES TO EXPRESS: (1) INTERIM AUDIT - Conduct preliminary work mid-year, reduces year-end pressure, (2) MONTHLY ACCOUNTING - Keep books updated throughout year, quick year-end close, (3) EARLY PLANNING - Book audit 3-4 months in advance. PEAK SEASON CHALLENGES: Jan-April is peak audit season in UAE, Express difficult to guarantee during this period, Standard timelines may extend to 4-6 weeks, Book early or consider off-peak year-ends. Farahat & Co has dedicated express service team for urgent situations. With 150+ professionals, we can mobilize resources quickly. However, we encourage clients to plan ahead for better rates and less stress. Contact us immediately if you have urgent deadline - we\'ll assess feasibility honestly.',
    keywords: ['express audit', 'urgent audit', 'quick audit dubai', 'fast audit service', 'emergency audit'],
    priority: 8,
    relatedQuestions: ['audit-duration', 'audit-cost', 'pricing-factors'],
  },
  {
    id: 'free-consultation',
    category: 'pricing-fees',
    question: 'Do you offer free consultation before the audit?',
    answer:
      'Yes, Farahat & Co offers complimentary initial consultation to assess your needs and provide guidance. FREE CONSULTATION INCLUDES: (1) REQUIREMENT ASSESSMENT - Understanding your company structure, industry, and operations, Identifying applicable regulations and standards, Determining audit scope and timeline needed. (2) PRELIMINARY REVIEW - Quick review of your current financial status, Assessment of record-keeping quality, Identification of potential issues or concerns, Recommendations for preparation. (3) FEE ESTIMATE - Detailed pricing based on your specific situation, Breakdown of what drives costs, Options for reducing fees through better preparation. (4) TIMELINE PLANNING - Realistic timeline for completion, Key milestones and deadlines, Coordination with your schedule. (5) QUESTIONS AND ANSWERS - Any questions about audit process, Clarification on requirements, Understanding deliverables. (6) PREPARATION GUIDANCE - Documents you\'ll need to provide, How to organize records, Areas to address before audit starts. CONSULTATION FORMATS: (1) OFFICE VISIT - You visit our office (30-60 minutes), (2) SITE VISIT - We visit your office (complimentary within Dubai), (3) VIDEO CALL - Online meeting via Zoom/Teams (15-30 minutes), (4) PHONE CALL - Quick discussion for simple situations. WHO ATTENDS: For consultation, bring: Finance Manager or CFO, Relevant accounting staff, Decision maker (if discussing engagement). From our side: Partner or Senior Manager, Specialist if industry-specific (RERA, VAT, etc.). NO OBLIGATION: Consultation is free with zero obligation, You can choose to proceed or not, We provide honest assessment even if we recommend you don\'t need our services yet. WHEN TO SCHEDULE: 3-4 months before year-end (ideal), When planning to change auditors, If unsure about audit requirements, Before starting new business (planning ahead), Anytime you have questions about audit, compliance, regulations. FOLLOW-UP SUPPORT: After consultation, we can provide: Written summary of discussion, Checklist of preparation items, Preliminary fee quote in writing, Timeline proposal. ADDITIONAL FREE SERVICES: Annual webinars on UAE audit updates, Free downloads (checklists, templates) from our website, Email support for basic questions, Newsletter with regulatory updates. WHAT\'S NOT FREE: Actual audit work begins once engagement letter signed and advance paid, Detailed accounting assistance beyond consultation, Preparation of financial statements (unless included in service package), Tax return preparation (quoted separately). At Farahat & Co, we believe in building relationships through value first. Our free consultation has helped hundreds of companies understand their requirements, prepare effectively, and make informed decisions. 37 years of experience means we can quickly assess situations and provide practical guidance. Schedule your free consultation today - no pressure, just professional advice.',
    keywords: ['free audit consultation', 'complimentary audit assessment', 'audit consultation dubai', 'free audit advice'],
    priority: 6,
    relatedQuestions: ['audit-cost', 'choose-auditor', 'external-audit-process'],
  },

  // Continue with remaining FAQs - will complete all categories
]
