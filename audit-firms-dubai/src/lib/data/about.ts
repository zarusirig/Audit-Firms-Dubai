/**
 * About Us Page Data
 * Company history, team, certifications, awards, and values
 */

// Company Timeline
export const COMPANY_TIMELINE = [
  {
    year: '1985',
    title: 'Foundation of Farahat & Co',
    description:
      'Established in Dubai with a vision to provide world-class accounting and audit services to the UAE business community.',
    icon: 'Building',
    milestone: true,
  },
  {
    year: '1990',
    title: 'Ministry Approval & Expansion',
    description:
      'Received official approval from UAE Ministry of Economy as registered auditors. Expanded to Abu Dhabi office.',
    icon: 'BadgeCheck',
  },
  {
    year: '1995',
    title: 'International Recognition',
    description:
      'Achieved recognition from international accounting bodies. Served first multinational clients across 10 countries.',
    icon: 'Globe',
  },
  {
    year: '2000',
    title: 'Free Zone Certification',
    description:
      'Authorized as approved auditors for DMCC, DIFC, and JAFZA free zones. Specialized RERA audit team established.',
    icon: 'Award',
  },
  {
    year: '2005',
    title: 'Digital Transformation',
    description:
      'Implemented cutting-edge audit technology and client portals. Reached milestone of 10,000 clients served.',
    icon: 'Zap',
  },
  {
    year: '2010',
    title: 'Advisory Services Launch',
    description:
      'Expanded into corporate finance, tax advisory, and management consulting. Team grew to 100+ professionals.',
    icon: 'TrendingUp',
  },
  {
    year: '2015',
    title: '30 Years of Excellence',
    description:
      'Celebrated 30 years with 20,000+ clients across 100+ countries. Received UAE Business Excellence Award.',
    icon: 'Trophy',
  },
  {
    year: '2018',
    title: 'VAT Compliance Leader',
    description:
      'Became UAE\'s leading VAT audit and advisory firm. Helped 5,000+ businesses with VAT registration and compliance.',
    icon: 'Receipt',
  },
  {
    year: '2020',
    title: 'COVID-19 Response',
    description:
      'Launched remote audit services and virtual consultations. Supported businesses through economic challenges.',
    icon: 'Shield',
  },
  {
    year: '2023',
    title: 'Corporate Tax Expertise',
    description:
      'Led industry with UAE Corporate Tax advisory services. Helped 3,000+ companies prepare for new tax regime.',
    icon: 'Calculator',
  },
  {
    year: '2025',
    title: '40 Years Approaching',
    description:
      'Serving 28,000+ clients across 140 countries. Recognized as one of the top 5 audit firms in the UAE.',
    icon: 'Star',
    milestone: true,
  },
] as const

// Leadership Team
export const LEADERSHIP_TEAM = [
  {
    id: 'founder',
    name: 'Mr. Farahat',
    position: 'Founder & Chairman',
    credentials: ['CPA', 'CA'],
    bio: 'Founded Farahat & Co in 1985 with a vision to establish the highest standards of auditing in the UAE. With over 40 years of experience, Mr. Farahat has led the firm through four decades of growth and transformation.',
    specialization: ['Strategic Leadership', 'Corporate Governance', 'Audit Standards'],
    experience: '40+ years',
    image: '/team/founder.jpg',
    linkedin: '#',
    email: 'chairman@auditfirmsindubai.com',
  },
  {
    id: 'managing-partner',
    name: 'Dr. Ahmad Al-Mansouri',
    position: 'Managing Partner',
    credentials: ['CPA', 'PhD in Accounting'],
    bio: 'Leading the firm\'s operations with 25 years of experience in audit and assurance. Dr. Al-Mansouri oversees all audit engagements and maintains relationships with regulatory bodies.',
    specialization: ['External Audit', 'IFRS Compliance', 'Quality Control'],
    experience: '25+ years',
    image: '/team/managing-partner.jpg',
    linkedin: '#',
    email: 'ahmad@auditfirmsindubai.com',
  },
  {
    id: 'audit-director',
    name: 'Sarah Johnson',
    position: 'Audit Director',
    credentials: ['ACCA', 'CIA'],
    bio: 'Heads the external audit department with expertise in statutory audits, RERA audits, and free zone compliance. Sarah has completed 500+ audit engagements across diverse industries.',
    specialization: ['Statutory Audit', 'RERA Compliance', 'Free Zone Audits'],
    experience: '18+ years',
    image: '/team/audit-director.jpg',
    linkedin: '#',
    email: 'sarah@auditfirmsindubai.com',
  },
  {
    id: 'forensic-head',
    name: 'Mohammed Al-Hashimi',
    position: 'Head of Forensic Audit',
    credentials: ['CFE', 'CPA', 'CISA'],
    bio: 'Certified Fraud Examiner with 20 years of experience in fraud investigation and forensic accounting. Mohammed has led high-profile investigations for government and private sector clients.',
    specialization: ['Fraud Investigation', 'Forensic Accounting', 'Litigation Support'],
    experience: '20+ years',
    image: '/team/forensic-head.jpg',
    linkedin: '#',
    email: 'mohammed.h@auditfirmsindubai.com',
  },
  {
    id: 'tax-advisory-head',
    name: 'Jennifer Williams',
    position: 'Head of Tax Advisory',
    credentials: ['CPA', 'CTA'],
    bio: 'Leads the tax advisory division with specialization in VAT, Corporate Tax, and international taxation. Jennifer has advised 1,000+ businesses on UAE tax compliance.',
    specialization: ['VAT Compliance', 'Corporate Tax', 'Tax Planning'],
    experience: '15+ years',
    image: '/team/tax-advisory-head.jpg',
    linkedin: '#',
    email: 'jennifer@auditfirmsindubai.com',
  },
  {
    id: 'internal-audit-director',
    name: 'Khalid Al-Mazrouei',
    position: 'Internal Audit Director',
    credentials: ['CIA', 'CRMA'],
    bio: 'Certified Internal Auditor specializing in risk assessment, internal controls, and corporate governance. Khalid has designed internal audit frameworks for 200+ organizations.',
    specialization: ['Risk Management', 'Internal Controls', 'Compliance'],
    experience: '16+ years',
    image: '/team/internal-audit-director.jpg',
    linkedin: '#',
    email: 'khalid@auditfirmsindubai.com',
  },
] as const

// Senior Team Members
export const SENIOR_TEAM = [
  {
    name: 'Ahmed Hassan',
    position: 'Senior Audit Manager',
    credentials: ['ACCA', 'MBA'],
    experience: '12+ years',
    specialization: ['External Audit', 'IFRS'],
  },
  {
    name: 'Fatima Al-Kaabi',
    position: 'Senior Tax Consultant',
    credentials: ['CPA', 'CTA'],
    experience: '10+ years',
    specialization: ['VAT', 'Corporate Tax'],
  },
  {
    name: 'David Thompson',
    position: 'IT Audit Manager',
    credentials: ['CISA', 'CISSP'],
    experience: '14+ years',
    specialization: ['IT Audit', 'Cybersecurity'],
  },
  {
    name: 'Noura Al-Suwaidi',
    position: 'RERA Audit Specialist',
    credentials: ['CA', 'Real Estate Certified'],
    experience: '11+ years',
    specialization: ['RERA', 'Real Estate'],
  },
  {
    name: 'Michael Chen',
    position: 'Due Diligence Manager',
    credentials: ['CPA', 'CFA'],
    experience: '13+ years',
    specialization: ['M&A', 'Valuation'],
  },
  {
    name: 'Laila Al-Amiri',
    position: 'Compliance Manager',
    credentials: ['CIA', 'CAMS'],
    experience: '9+ years',
    specialization: ['AML', 'Compliance'],
  },
] as const

// Certifications & Accreditations
export const CERTIFICATIONS = [
  {
    id: 'ministry',
    name: 'UAE Ministry of Economy',
    type: 'Regulatory Approval',
    description: 'Licensed auditors approved by the UAE Ministry of Economy',
    logo: '/certifications/ministry.svg',
    issued: '1990',
    category: 'regulatory',
    priority: 1,
  },
  {
    id: 'dfsa',
    name: 'Dubai Financial Services Authority (DFSA)',
    type: 'Free Zone Recognition',
    description: 'Recognized audit firm for DIFC-registered companies',
    logo: '/certifications/dfsa.svg',
    issued: '2005',
    category: 'regulatory',
    priority: 2,
  },
  {
    id: 'adgm',
    name: 'Abu Dhabi Global Market (ADGM)',
    type: 'Free Zone Recognition',
    description: 'Authorized auditors for ADGM financial free zone',
    logo: '/certifications/adgm.svg',
    issued: '2015',
    category: 'regulatory',
    priority: 3,
  },
  {
    id: 'dmcc',
    name: 'DMCC Approved Auditors',
    type: 'Free Zone Approval',
    description: 'Approved auditors for DMCC free zone companies',
    logo: '/certifications/dmcc.svg',
    issued: '2002',
    category: 'regulatory',
    priority: 4,
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    type: 'Quality Management',
    description: 'International standard for quality management systems',
    logo: '/certifications/iso-9001.svg',
    issued: '2018',
    category: 'quality',
    priority: 5,
  },
  {
    id: 'ifac',
    name: 'International Federation of Accountants (IFAC)',
    type: 'Professional Association',
    description: 'Member of the global organization for the accountancy profession',
    logo: '/certifications/ifac.svg',
    issued: '1995',
    category: 'professional',
    priority: 6,
  },
  {
    id: 'ica',
    name: 'Institute of Chartered Accountants',
    type: 'Professional Association',
    description: 'Member firm with chartered accountants on staff',
    logo: '/certifications/ica.svg',
    issued: '1987',
    category: 'professional',
    priority: 7,
  },
  {
    id: 'acfe',
    name: 'Association of Certified Fraud Examiners',
    type: 'Specialized Certification',
    description: 'Certified fraud examiners for forensic audit services',
    logo: '/certifications/acfe.svg',
    issued: '2008',
    category: 'professional',
    priority: 8,
  },
] as const

// Awards & Recognition
export const AWARDS = [
  {
    year: '2024',
    award: 'Best Audit Firm in Dubai',
    organization: 'UAE Business Awards',
    description: 'Recognized for outstanding audit quality and client satisfaction',
    category: 'Excellence',
  },
  {
    year: '2023',
    award: 'Tax Advisory Firm of the Year',
    organization: 'Middle East Finance Awards',
    description: 'Excellence in UAE Corporate Tax and VAT advisory services',
    category: 'Tax',
  },
  {
    year: '2023',
    award: 'Top 5 Audit Firms in UAE',
    organization: 'International Accounting Bulletin',
    description: 'Ranked among the top audit firms based on revenue and client base',
    category: 'Industry Ranking',
  },
  {
    year: '2022',
    award: 'Excellence in Client Service',
    organization: 'Dubai Chamber of Commerce',
    description: 'Awarded for exceptional client satisfaction and service delivery',
    category: 'Service',
  },
  {
    year: '2021',
    award: 'Digital Innovation in Audit',
    organization: 'Middle East Technology Awards',
    description: 'Recognition for implementing AI-powered audit tools',
    category: 'Innovation',
  },
  {
    year: '2020',
    award: 'COVID-19 Business Support Award',
    organization: 'UAE Ministry of Economy',
    description: 'Supporting businesses through economic challenges with advisory services',
    category: 'Social Impact',
  },
  {
    year: '2019',
    award: 'Best RERA Audit Services',
    organization: 'Real Estate Awards Middle East',
    description: 'Excellence in real estate audit and RERA compliance',
    category: 'Specialized Service',
  },
  {
    year: '2018',
    award: 'VAT Implementation Excellence',
    organization: 'Gulf Tax Conference',
    description: 'Leading firm in UAE VAT implementation and compliance',
    category: 'Tax',
  },
] as const

// Company Values
export const COMPANY_VALUES = [
  {
    id: 'integrity',
    title: 'Integrity & Independence',
    description:
      'We maintain the highest ethical standards and professional independence in all our engagements. Our audits are impartial, objective, and guided by international auditing standards.',
    icon: 'Shield',
    examples: [
      'Strict conflict of interest policies',
      'Independent quality review process',
      'Transparent fee structures',
      'Ethical decision-making framework',
    ],
  },
  {
    id: 'excellence',
    title: 'Professional Excellence',
    description:
      '37 years of delivering audit services that exceed client expectations. We invest in continuous professional development and cutting-edge audit technology.',
    icon: 'Award',
    examples: [
      '150+ hours annual training per staff',
      'Latest audit software and AI tools',
      '95% team certification rate (CPA/CA)',
      'Rigorous quality control procedures',
    ],
  },
  {
    id: 'client-focus',
    title: 'Client-Centric Approach',
    description:
      'Every client receives personalized attention from senior team members. We understand your business and provide insights that add value beyond compliance.',
    icon: 'Users',
    examples: [
      'Dedicated partner for each engagement',
      'Industry-specific expertise',
      'Proactive advisory and recommendations',
      '24/7 client support portal',
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation & Technology',
    description:
      'We leverage the latest audit technology, data analytics, and AI tools to deliver faster, more accurate audits while identifying risks and opportunities.',
    icon: 'Zap',
    examples: [
      'AI-powered risk assessment',
      'Real-time audit dashboards',
      'Cloud-based collaboration tools',
      'Automated compliance checking',
    ],
  },
  {
    id: 'transparency',
    title: 'Transparency & Communication',
    description:
      'Clear, timely communication at every stage of the audit. We explain complex findings in simple terms and provide actionable recommendations.',
    icon: 'MessageCircle',
    examples: [
      'Regular progress updates',
      'Detailed management letters',
      'Exit meetings with key stakeholders',
      'Bilingual reporting (English & Arabic)',
    ],
  },
  {
    id: 'community',
    title: 'Community Commitment',
    description:
      'Proud members of the UAE business community for 37 years. We support local businesses, contribute to professional development, and give back to society.',
    icon: 'Heart',
    examples: [
      'Free SME audit workshops',
      'Pro bono services for NPOs',
      'Student mentorship programs',
      'Industry thought leadership',
    ],
  },
] as const

// Parent Company Services (FAR Consulting Middle East)
export const PARENT_COMPANY_SERVICES = [
  {
    category: 'Company Formation',
    description: 'Complete business setup services across UAE mainland, free zones, and offshore',
    services: [
      'Mainland company formation',
      'Free zone company registration',
      'Offshore company setup',
      'Trade license procurement',
      'Local sponsorship arrangements',
    ],
  },
  {
    category: 'Legal Services',
    description: 'Comprehensive legal support in English and Arabic',
    services: [
      'Legal documentation drafting',
      'Power of Attorney services',
      'Contract review and drafting',
      'Trademark registration',
      'Legal case management',
    ],
  },
  {
    category: 'PRO Services',
    description: 'Full Public Relations Officer services for visa and government processes',
    services: [
      'Work permits and employment visas',
      'Residency visa processing',
      'Document attestation',
      'Emirates ID services',
      'Labor card processing',
    ],
  },
  {
    category: 'Accounting & Bookkeeping',
    description: 'Complete accounting solutions for businesses of all sizes',
    services: [
      'Monthly bookkeeping',
      'Financial statement preparation',
      'Payroll services',
      'VAT return filing',
      'Management reporting',
    ],
  },
  {
    category: 'Corporate Services',
    description: 'Ongoing support for established businesses',
    services: [
      'License renewals',
      'Corporate bank account opening',
      'Corporate amendments',
      'Annual general meeting support',
      'Business center facilities',
    ],
  },
] as const

// Industry Expertise
export const INDUSTRY_EXPERTISE = [
  {
    industry: 'Real Estate & Construction',
    experience: '35+ years',
    clients: '800+',
    services: ['RERA Audit', 'Escrow Account Audit', 'Project Audit'],
    icon: 'Building',
  },
  {
    industry: 'Financial Services',
    experience: '37+ years',
    clients: '500+',
    services: ['Regulatory Audit', 'Compliance Review', 'Risk Assessment'],
    icon: 'DollarSign',
  },
  {
    industry: 'Trading & Distribution',
    experience: '37+ years',
    clients: '5,000+',
    services: ['Inventory Audit', 'VAT Audit', 'Stock Verification'],
    icon: 'Package',
  },
  {
    industry: 'Hospitality & Tourism',
    experience: '30+ years',
    clients: '300+',
    services: ['Revenue Audit', 'F&B Audit', 'Tourism License Audit'],
    icon: 'Hotel',
  },
  {
    industry: 'Healthcare',
    experience: '25+ years',
    clients: '200+',
    services: ['Medical License Audit', 'Pharmaceutical Audit', 'Compliance Audit'],
    icon: 'Heart',
  },
  {
    industry: 'Education & Training',
    experience: '28+ years',
    clients: '150+',
    services: ['Educational Institution Audit', 'Grant Audit', 'NPO Audit'],
    icon: 'GraduationCap',
  },
  {
    industry: 'Manufacturing & Industrial',
    experience: '32+ years',
    clients: '400+',
    services: ['Cost Audit', 'Inventory Valuation', 'Process Audit'],
    icon: 'Factory',
  },
  {
    industry: 'Technology & Media',
    experience: '20+ years',
    clients: '250+',
    services: ['IT Audit', 'Software License Audit', 'IP Valuation'],
    icon: 'Laptop',
  },
] as const

// Why Choose Us (About Page Specific)
export const WHY_CHOOSE_FARAHAT = [
  {
    metric: '37',
    unit: 'Years',
    label: 'Of Excellence',
    description: 'Established in 1985, one of the oldest audit firms in Dubai',
    icon: 'Calendar',
  },
  {
    metric: '28,000',
    unit: '+',
    label: 'Clients Served',
    description: 'Trusted by businesses across 140 countries worldwide',
    icon: 'Users',
  },
  {
    metric: '150',
    unit: '+',
    label: 'Professionals',
    description: '95% certified CPAs, CAs, ACCAs, and specialized auditors',
    icon: 'Award',
  },
  {
    metric: '98',
    unit: '%',
    label: 'Satisfaction Rate',
    description: 'Consistently exceeding client expectations for decades',
    icon: 'Star',
  },
  {
    metric: '7',
    unit: 'Days',
    label: 'Avg. Turnaround',
    description: 'Fast, efficient audit delivery without compromising quality',
    icon: 'Zap',
  },
  {
    metric: '112',
    unit: '+',
    label: 'Awards Won',
    description: 'Recognition for professional excellence and innovation',
    icon: 'Trophy',
  },
] as const
