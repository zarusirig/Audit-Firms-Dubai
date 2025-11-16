/**
 * FAQ Data for Comprehensive FAQ Page
 * Organized by categories for better UX and SEO
 * Optimized for Google Featured Snippets
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Audit Questions',
    description: 'Essential information about audit services in Dubai',
    icon: 'HelpCircle',
    faqs: [
      {
        question: 'What is an external audit and why is it required in UAE?',
        answer: 'An external audit is an independent examination of a company\'s financial statements by a licensed auditor. In the UAE, it\'s mandatory under Federal Law No. 32 of 2021 for all mainland companies and most free zone entities. The audit ensures financial transparency, regulatory compliance, and builds trust with stakeholders, banks, and government authorities.',
      },
      {
        question: 'What is the difference between external audit and internal audit?',
        answer: 'External audit is conducted by independent third-party auditors to verify financial statements for statutory compliance and is mandatory by law. Internal audit is an ongoing process performed by in-house or hired auditors to evaluate internal controls, risk management, and operational efficiency. External audits are annual and legally required, while internal audits are continuous and voluntary but highly recommended.',
      },
      {
        question: 'Who needs an audit in Dubai?',
        answer: 'All mainland companies registered with the Department of Economic Development (DED) must have annual audits. Most free zone companies also require audits based on their specific free zone regulations. Additionally, companies seeking bank loans, investor funding, or government contracts typically need audited financial statements.',
      },
      {
        question: 'How often should a company be audited?',
        answer: 'UAE companies must conduct annual audits for each financial year. The audited financial statements must be submitted within 9 months of the financial year-end for mainland companies. Some regulated industries or larger organizations may require more frequent audits (quarterly or semi-annual) based on stakeholder requirements.',
      },
      {
        question: 'Can I choose any auditor in Dubai?',
        answer: 'No, you must select an auditor who is licensed and approved by the UAE Ministry of Economy. Farahat & Co is fully approved by the Ministry of Economy and recognized by all major free zones including DIFC, DMCC, JAFZA, and others. Using a non-approved auditor will result in rejection of your audit report.',
      },
    ],
  },
  {
    id: 'external-audit',
    title: 'External Audit Services',
    description: 'Questions about statutory audit requirements',
    icon: 'FileCheck',
    faqs: [
      {
        question: 'How long does an external audit take in Dubai?',
        answer: 'A standard external audit takes 7-10 business days for small to medium-sized companies with organized records. Complex businesses or larger corporations may require 2-3 weeks. We offer express audit services (3-5 days) for urgent requirements. The actual timeline depends on your company size, transaction volume, and document readiness.',
      },
      {
        question: 'What documents are needed for an external audit?',
        answer: 'Required documents include: trade license, financial statements (balance sheet, P&L, cash flow), all bank statements, sales and purchase invoices, expense receipts, payroll records, VAT returns, fixed asset registers, lease agreements, loan documents, and shareholder agreements. We provide a detailed checklist specific to your business during engagement.',
      },
      {
        question: 'What happens during an external audit?',
        answer: 'The audit process includes: 1) Planning and understanding your business, 2) Testing internal controls, 3) Verifying account balances through sampling, 4) Confirming transactions with third parties, 5) Physical verification of assets, 6) Analytical review of financial data, 7) Management discussions, and 8) Issuing the final audit report with our opinion on the financial statements.',
      },
      {
        question: 'What is included in an audit report?',
        answer: 'An audit report includes: auditor\'s opinion (unqualified, qualified, or adverse), audited financial statements (balance sheet, income statement, cash flow, notes), basis of accounting, key audit matters, management responsibilities, auditor responsibilities, and our firm\'s credentials. The report is prepared in accordance with International Standards on Auditing (ISA).',
      },
      {
        question: 'Can an audit find fraud in my company?',
        answer: 'While external audits include procedures to detect material misstatements including fraud, they are designed primarily for financial statement accuracy, not fraud detection. For fraud investigation, we recommend our specialized Forensic Audit service, which uses advanced techniques including digital forensics, transaction analysis, and investigative interviews to uncover fraudulent activities.',
      },
    ],
  },
  {
    id: 'pricing-timeline',
    title: 'Pricing & Timeline',
    description: 'Cost and delivery information',
    icon: 'DollarSign',
    faqs: [
      {
        question: 'How much does an external audit cost in Dubai?',
        answer: 'External audit fees in Dubai typically range from AED 15,000 to AED 150,000+ depending on company size, revenue, complexity, and industry. Small companies (revenue under AED 5M) start from AED 15,000. Medium businesses (AED 5M-50M) range from AED 25,000-60,000. Large corporations cost AED 60,000+. Use our online audit fee calculator for an instant customized quote.',
      },
      {
        question: 'What factors affect audit fees?',
        answer: 'Audit fees are influenced by: 1) Annual revenue and transaction volume, 2) Number of bank accounts and locations, 3) Industry type and regulatory requirements, 4) Quality of accounting records, 5) Previous audit findings, 6) Number of entities/subsidiaries, 7) Free zone vs mainland, 8) Urgency (express service), and 9) Additional services required (VAT audit, tax advisory).',
      },
      {
        question: 'Are there any hidden costs in audit fees?',
        answer: 'No. At Farahat & Co, we provide transparent, fixed-price quotes with no hidden fees. Our quote includes all standard audit procedures, fieldwork, report preparation, and one round of revisions. Additional costs may apply only for scope changes requested mid-audit, additional locations, or extra services beyond the original agreement.',
      },
      {
        question: 'Do you offer payment plans for audit services?',
        answer: 'Yes, we offer flexible payment terms for our clients. Typically, we require 50% advance payment upon engagement and 50% upon delivery of the draft audit report. For long-term clients or large engagements, we can discuss customized payment schedules. We accept bank transfers, credit cards, and cheques.',
      },
      {
        question: 'How quickly can you complete an urgent audit?',
        answer: 'We offer express audit service with completion in 3-5 business days for urgent requirements. This is ideal for companies facing submission deadlines, loan applications, or investor due diligence. Express service requires all documents to be ready and available, and includes a premium fee of 30-50% above standard audit fees.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Regulatory & Compliance',
    description: 'Legal requirements and deadlines',
    icon: 'Shield',
    faqs: [
      {
        question: 'What is the deadline for submitting audited accounts in UAE?',
        answer: 'Mainland companies must submit audited financial statements to the Ministry of Economy within 9 months of their financial year-end. For example, if your financial year ends December 31, 2024, audited accounts must be submitted by September 30, 2025. Free zone deadlines vary by jurisdiction - DMCC requires submission within 6 months, while DIFC has different timelines.',
      },
      {
        question: 'What are the penalties for not conducting an audit?',
        answer: 'Failing to submit audited accounts results in: 1) Fines from AED 20,000 to AED 500,000 depending on company size, 2) Trade license suspension or non-renewal, 3) Inability to apply for bank loans or tenders, 4) Potential legal action against company directors, and 5) Damaged reputation with authorities. Penalties increase for repeat violations.',
      },
      {
        question: 'Is Farahat & Co approved by all free zones in Dubai?',
        answer: 'Yes, Farahat & Co is recognized and approved by all major free zones in Dubai including DIFC (Dubai International Financial Centre), DMCC (Dubai Multi Commodities Centre), JAFZA (Jebel Ali Free Zone), Dubai Airport Free Zone, Dubai Silicon Oasis, Dubai Healthcare City, and more. We are also approved for ADGM (Abu Dhabi) and other UAE free zones.',
      },
      {
        question: 'Do I need separate audits for VAT compliance?',
        answer: 'VAT-registered companies may require separate VAT audits if their annual taxable supplies exceed AED 150 million, or if requested by the Federal Tax Authority (FTA) during a tax audit. While external audits cover financial statements, specialized VAT audits focus specifically on VAT compliance, input tax recovery, and FTA return accuracy.',
      },
      {
        question: 'What is the difference between IFRS and UAE GAAP?',
        answer: 'IFRS (International Financial Reporting Standards) is the globally recognized accounting framework required for most UAE companies. UAE GAAP refers to local accounting standards that were previously used but have largely been replaced by IFRS. All audits in UAE must now comply with IFRS unless specifically exempted by regulation.',
      },
    ],
  },
  {
    id: 'industry-specific',
    title: 'Industry-Specific Audits',
    description: 'Specialized audit services by sector',
    icon: 'Building',
    faqs: [
      {
        question: 'What is a RERA audit for real estate companies?',
        answer: 'RERA (Real Estate Regulatory Agency) audit is mandatory for property developers, owners associations, and property managers in Dubai. It includes auditing escrow accounts, service charge funds, trust accounts, and ensuring compliance with Dubai Land Department (DLD) regulations. RERA audits must be conducted by approved auditors like Farahat & Co.',
      },
      {
        question: 'Do healthcare facilities need special audits?',
        answer: 'Yes, healthcare facilities including hospitals, clinics, and medical centers require audits that comply with Dubai Health Authority (DHA) or Department of Health (DOH) regulations. Healthcare audits include verification of medical supplies inventory, insurance claim reconciliations, patient billing systems, and compliance with healthcare-specific accounting standards.',
      },
      {
        question: 'What is a forensic audit and when do I need one?',
        answer: 'Forensic audit is a specialized investigation service used to detect and investigate fraud, embezzlement, financial misconduct, or disputes. You need forensic audit when: suspecting employee theft, investigating vendor fraud, resolving partnership disputes, supporting litigation cases, conducting pre-acquisition due diligence, or responding to whistleblower complaints.',
      },
      {
        question: 'Do trading companies have different audit requirements?',
        answer: 'Trading companies require standard external audits, but with special attention to inventory valuation, receivables aging, supplier verifications, and customs documentation. If dealing with high-value goods or international trade, auditors verify import/export documentation, letter of credit compliance, and inventory movement between warehouses and free zones.',
      },
      {
        question: 'What is due diligence audit for acquisitions?',
        answer: 'Due diligence audit is a comprehensive review conducted before mergers, acquisitions, or investments. It includes financial due diligence (historical financials, cash flow analysis), commercial due diligence (market position, customer contracts), legal compliance, tax exposure, operational efficiency, and risk identification. This helps buyers make informed decisions and negotiate better terms.',
      },
    ],
  },
  {
    id: 'process',
    title: 'Audit Process & Documentation',
    description: 'How audits work step by step',
    icon: 'ClipboardList',
    faqs: [
      {
        question: 'What is the audit engagement process?',
        answer: 'The engagement process starts with: 1) Initial consultation to understand your needs, 2) Receiving our fee quote and engagement letter, 3) Signing the engagement letter and paying advance, 4) Receiving document checklist, 5) Submitting required documents, 6) Audit fieldwork and testing, 7) Management discussion on findings, 8) Draft report review, 9) Final audit report delivery.',
      },
      {
        question: 'Will auditors visit our office?',
        answer: 'Yes, for most audits, our team will conduct on-site fieldwork at your office. This allows us to verify physical assets, review original documents, observe internal controls, and interview staff. The duration of on-site work varies from 1-5 days depending on company size. For small businesses with digital records, we can conduct remote audits.',
      },
      {
        question: 'How should I prepare for an audit?',
        answer: 'Prepare by: 1) Organizing financial records and bank statements, 2) Reconciling all bank accounts, 3) Preparing trial balance and financial statements, 4) Organizing invoices and receipts chronologically, 5) Updating fixed asset registers, 6) Preparing debt and inventory schedules, 7) Ensuring all VAT returns are filed, and 8) Informing key staff about auditor visits.',
      },
      {
        question: 'Can I make changes after receiving the draft audit report?',
        answer: 'Yes, upon receiving the draft audit report, you can review and request clarifications or corrections if you find any factual errors or have additional information. We allow one round of revisions at no extra cost. However, the audit opinion is based on evidence and cannot be changed unless new supporting documentation is provided.',
      },
      {
        question: 'What is a management representation letter?',
        answer: 'A management representation letter is a formal document signed by company management acknowledging responsibility for financial statements, confirming completeness of information provided, and stating that all material matters have been disclosed to auditors. This is a mandatory requirement for all audits and protects both the company and the auditor.',
      },
    ],
  },
  {
    id: 'free-zones',
    title: 'Free Zone Audits',
    description: 'Audit requirements for free zone companies',
    icon: 'MapPin',
    faqs: [
      {
        question: 'Do DIFC companies need audits?',
        answer: 'Yes, all DIFC (Dubai International Financial Centre) companies must have annual audits conducted by DIFC-recognized auditors. DIFC has stricter regulatory requirements including submission within 4 months of year-end for some categories. Farahat & Co is recognized by DIFC Authority and experienced in DIFC audit requirements and reporting standards.',
      },
      {
        question: 'What are DMCC audit requirements?',
        answer: 'DMCC (Dubai Multi Commodities Centre) companies must submit audited financial statements within 6 months of financial year-end. DMCC audits must be performed by Ministry-approved auditors like Farahat & Co. Failure to submit on time results in fines and potential license suspension. DMCC companies engaged in commodity trading have additional audit requirements.',
      },
      {
        question: 'Are JAFZA audit requirements different?',
        answer: 'JAFZA (Jebel Ali Free Zone) companies must conduct annual audits if their revenue exceeds AED 1 million or if required by their license type. Audits must be conducted by Ministry-approved auditors and submitted through JAFZA\'s online portal. Companies with revenue below AED 1 million may only need unaudited financial statements.',
      },
      {
        question: 'Do free zone companies pay less for audits?',
        answer: 'Audit fees for free zone companies are generally similar to mainland companies of comparable size. However, some free zones have simplified reporting requirements which may reduce audit scope and cost. The main cost factors are company revenue, transaction complexity, and industry - not the jurisdiction itself.',
      },
      {
        question: 'Can the same auditor audit mainland and free zone entities?',
        answer: 'Yes, if you have both mainland and free zone entities, Farahat & Co can audit all of them as we are approved by the Ministry of Economy and recognized by all major free zones. Using the same auditor for group companies provides consistency, better understanding of inter-company transactions, and often cost savings through group engagement discounts.',
      },
    ],
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit & Risk',
    description: 'Internal controls and risk management',
    icon: 'Target',
    faqs: [
      {
        question: 'Why do I need internal audit if I have external audit?',
        answer: 'Internal audit is a continuous process that evaluates and improves internal controls, risk management, and operational efficiency throughout the year. External audit is an annual snapshot of financial statements. Internal audit helps prevent fraud, improve processes, ensure compliance, and identify issues before they become material problems found by external auditors.',
      },
      {
        question: 'How often should internal audits be conducted?',
        answer: 'Internal audits should be conducted quarterly or semi-annually depending on company size and risk profile. High-risk areas like cash handling, inventory, and procurement may need monthly reviews. We recommend a risk-based internal audit plan covering all business areas over a 2-3 year cycle, with high-risk areas audited more frequently.',
      },
      {
        question: 'What does internal audit cover?',
        answer: 'Internal audit covers: operational efficiency, internal control effectiveness, compliance with policies and regulations, risk assessment, fraud prevention, IT systems and cybersecurity, procurement processes, inventory management, HR and payroll, financial reporting accuracy, and adherence to board directives. Scope is customized to your business needs.',
      },
      {
        question: 'Can internal audit prevent fraud?',
        answer: 'While no system can guarantee 100% fraud prevention, regular internal audits significantly reduce fraud risk by: detecting control weaknesses, identifying unusual transactions, creating deterrence through oversight, testing segregation of duties, verifying authorizations, and building a culture of accountability. Most fraud cases occur in companies without regular internal audits.',
      },
      {
        question: 'Should I hire in-house internal auditors or outsource?',
        answer: 'Both options have merits. In-house auditors provide continuous presence and deep business knowledge but require full-time costs. Outsourcing to firms like Farahat & Co provides: expertise across industries, independence, cost efficiency (pay only for services used), access to specialized tools, and no employee overhead. Many companies combine both approaches.',
      },
    ],
  },
];

// Flatten all FAQs for schema markup
export const ALL_FAQS = FAQ_CATEGORIES.flatMap(category =>
  category.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer,
    category: category.title,
  }))
);

// SEO Keywords for FAQ page
export const FAQ_KEYWORDS = [
  'audit faq dubai',
  'audit questions uae',
  'external audit requirements dubai',
  'audit cost dubai',
  'audit timeline uae',
  'audit process dubai',
  'audit checklist uae',
  'audit mandatory dubai',
  'audit deadline uae',
  'audit firms faq',
  'audit services questions',
  'audit compliance dubai',
  'external audit vs internal audit',
  'forensic audit dubai',
  'rera audit requirements',
  'free zone audit',
  'difc audit requirements',
  'dmcc audit deadline',
  'vat audit uae',
  'due diligence audit',
];
