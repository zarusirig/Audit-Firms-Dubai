/**
 * Brand Constants for Audit Firms Dubai (Farahat & Co)
 * Single source of truth for all brand-related data
 */

// Brand Statistics (from brand-guidelines.md)
export const BRAND_STATS = {
  experience: {
    value: 37,
    label: 'Years of Experience',
    suffix: 'Years',
    since: 'Since 1985',
    description: 'Established excellence in auditing',
  },
  clients: {
    value: 28058,
    label: 'Clients Served',
    suffix: 'Clients',
    description: 'Trusted by businesses worldwide',
  },
  countries: {
    value: 140,
    label: 'Countries Covered',
    suffix: 'Countries',
    description: 'International reach and expertise',
  },
  awards: {
    value: 112,
    label: 'Awards Received',
    suffix: 'Awards',
    description: 'Recognition for professional excellence',
  },
  satisfaction: {
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    description: 'Consistently exceeding expectations',
  },
  teamSize: {
    value: 150,
    label: 'Expert Team Members',
    suffix: 'Professionals',
    description: '95% CPA/CA certified',
  },
} as const;

// Services Overview
export const CORE_SERVICES = [
  {
    id: 'external-audit',
    name: 'External Audit',
    icon: 'FileCheck',
    description: 'Statutory compliance audits by certified professionals meeting UAE legal requirements',
    href: '/services/external-audit',
    features: ['Ministry Approved', 'IFRS Compliant', '7-Day Delivery'],
  },
  {
    id: 'internal-audit',
    name: 'Internal Audit',
    icon: 'Shield',
    description: 'Risk assessment and internal control evaluation to strengthen your business operations',
    href: '/services/internal-audit',
    features: ['Risk-Based', 'Process Improvement', 'Fraud Prevention'],
  },
  {
    id: 'due-diligence',
    name: 'Due Diligence',
    icon: 'Search',
    description: 'Comprehensive financial and commercial due diligence for M&A and investments',
    href: '/services/due-diligence',
    features: ['M&A Support', 'Investment Analysis', 'Risk Identification'],
  },
  {
    id: 'forensic-audit',
    name: 'Forensic Audit',
    icon: 'AlertTriangle',
    description: 'Fraud investigation and litigation support by certified fraud examiners',
    href: '/services/forensic-audit',
    features: ['Fraud Detection', 'Legal Support', 'Expert Witness'],
  },
  {
    id: 'rera-audit',
    name: 'RERA Audit',
    icon: 'Building',
    description: 'Specialized audit services for Dubai real estate developers and property managers',
    href: '/services/rera-audit',
    features: ['RERA Compliance', 'Escrow Accounts', 'Real Estate Focus'],
  },
  {
    id: 'vat-audit',
    name: 'VAT Audit',
    icon: 'Receipt',
    description: 'VAT compliance audit and corporate tax advisory services for UAE businesses',
    href: '/services/vat-audit',
    features: ['FTA Approved', 'Tax Planning', 'Compliance Review'],
  },
] as const;

// Why Choose Us - Unique Selling Propositions
export const WHY_CHOOSE_US = [
  {
    title: 'Ministry Approved',
    description: 'Licensed and approved by UAE Ministry of Economy and all major free zones',
    icon: 'BadgeCheck',
  },
  {
    title: '37 Years Experience',
    description: 'Established in 1985, one of the oldest and most trusted audit firms in Dubai',
    icon: 'Award',
  },
  {
    title: 'International Standards',
    description: 'Full compliance with International Standards on Auditing (ISA) and IFRS',
    icon: 'Globe',
  },
  {
    title: 'Fast Turnaround',
    description: '7-day audit delivery for most engagements with express service available',
    icon: 'Zap',
  },
  {
    title: 'Fixed Pricing',
    description: 'Transparent, competitive pricing with no hidden fees or surprise charges',
    icon: 'DollarSign',
  },
  {
    title: 'Expert Team',
    description: '150+ professionals including CPAs, CAs, ACCAs, CIAs, and CFEs',
    icon: 'Users',
  },
  {
    title: 'Bilingual Service',
    description: 'Professional services in English and Arabic for seamless communication',
    icon: 'Languages',
  },
  {
    title: 'Client Satisfaction',
    description: '98% satisfaction rate with 28,000+ clients served across 140 countries',
    icon: 'Star',
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Mohammed Al-Rashid',
    position: 'CEO',
    company: 'Dubai Trading LLC',
    rating: 5,
    text: 'Farahat & Co has been our trusted audit partner for over 10 years. Their professionalism and attention to detail are unmatched in the UAE.',
    avatar: '/testimonials/avatar-1.jpg',
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    position: 'CFO',
    company: 'Emirates Real Estate',
    rating: 5,
    text: 'The RERA audit service was exceptional. They completed our escrow account audit in just 5 days with zero compliance issues.',
    avatar: '/testimonials/avatar-2.jpg',
  },
  {
    id: 3,
    author: 'Ahmed Hassan',
    position: 'Managing Director',
    company: 'Gulf Construction Co.',
    rating: 5,
    text: 'Their forensic audit team helped us uncover financial irregularities that saved our company millions. Highly recommended!',
    avatar: '/testimonials/avatar-3.jpg',
  },
  {
    id: 4,
    author: 'Jennifer Williams',
    position: 'Finance Manager',
    company: 'Tech Innovations DMCC',
    rating: 5,
    text: 'Fast, efficient, and thorough. The team understood our DMCC free zone requirements perfectly.',
    avatar: '/testimonials/avatar-4.jpg',
  },
  {
    id: 5,
    author: 'Khalid Al-Mazrouei',
    position: 'Owner',
    company: 'Hospitality Group',
    rating: 5,
    text: 'From external audit to VAT compliance, Farahat & Co handles all our accounting needs with excellence.',
    avatar: '/testimonials/avatar-5.jpg',
  },
  {
    id: 6,
    author: 'Lisa Chen',
    position: 'Director',
    company: 'Asia-Pacific Trading',
    rating: 5,
    text: 'Their bilingual team made communication effortless. The audit process was smooth and stress-free.',
    avatar: '/testimonials/avatar-6.jpg',
  },
] as const;

// Trust Badges
export const TRUST_BADGES = [
  {
    title: 'Ministry of Economy',
    description: 'Approved Auditors',
    logo: '/badges/ministry-approved.svg',
  },
  {
    title: 'DFSA',
    description: 'Recognized Firm',
    logo: '/badges/dfsa.svg',
  },
  {
    title: 'ADGM',
    description: 'Authorized Auditors',
    logo: '/badges/adgm.svg',
  },
  {
    title: 'ISO 9001:2015',
    description: 'Certified',
    logo: '/badges/iso.svg',
  },
] as const;

// FAQ Data
export const HOMEPAGE_FAQ = [
  {
    question: 'Is external audit mandatory for all companies in Dubai?',
    answer: 'Yes, under UAE Federal Law No. 32 of 2021, all mainland companies must have their financial statements audited by a Ministry-approved auditor. Free zone companies also require audits based on their free zone regulations.',
  },
  {
    question: 'How long does an audit typically take?',
    answer: 'Standard external audits take 7-10 business days for small to medium companies. We also offer express service (3-5 days) for urgent requirements. The timeline depends on company size, complexity, and document readiness.',
  },
  {
    question: 'What documents do I need to provide for an audit?',
    answer: 'You\'ll need: trade license, financial statements, bank statements, invoices, expense receipts, payroll records, VAT returns, lease agreements, and loan documents. We provide a detailed checklist upon engagement.',
  },
  {
    question: 'How much does an external audit cost in Dubai?',
    answer: 'Audit fees start from AED 15,000 for small companies and vary based on revenue, complexity, and industry. Use our audit fee calculator for an instant estimate, or contact us for a detailed quote.',
  },
  {
    question: 'Are you approved by the Ministry of Economy?',
    answer: 'Yes, Farahat & Co is fully licensed and approved by the UAE Ministry of Economy. We are also recognized by DFSA, ADGM, and all major free zones including DMCC, DIFC, and JAFZA.',
  },
  {
    question: 'Do you provide services in Arabic?',
    answer: 'Yes, we have bilingual teams fluent in both English and Arabic. All our reports and communications can be provided in your preferred language.',
  },
  {
    question: 'What is the deadline for submitting audited accounts?',
    answer: 'Mainland companies must submit audited accounts within 9 months from financial year-end. Free zone requirements vary by jurisdiction. Late submissions may result in penalties.',
  },
  {
    question: 'Can you help with RERA audit for property developers?',
    answer: 'Absolutely! We specialize in RERA audits for real estate developers, property managers, and owners associations. We audit escrow accounts, service charges, and ensure full DLD compliance.',
  },
] as const;

// Call-to-Action Data
export const CTA_CONFIG = {
  primary: {
    text: 'Get Free Consultation',
    subtext: 'Speak with our audit experts today',
    phone: '+971 42 500 251',
    href: '/contact',
  },
  secondary: {
    text: 'Calculate Audit Fees',
    subtext: 'Get instant pricing estimate',
    href: '/calculator',
  },
  whatsapp: {
    text: 'Chat on WhatsApp',
    number: '+971526922588',
    href: 'https://wa.me/971526922588',
  },
} as const;
