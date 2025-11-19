import { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2,
  CheckCircle2,
  Star,
  TrendingUp,
  Award,
  Globe,
  Users,
  DollarSign,
  Clock,
  Shield,
  Target,
  Briefcase,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Top 10 Audit Firms in Dubai 2025 | Complete Guide & Rankings',
    description:
      'Comprehensive guide to the top 10 audit firms in Dubai including Big 4 (PwC, Deloitte, KPMG, EY) and leading local firms. Compare services, fees, expertise, and client reviews.',
    keywords: [
      'top 10 audit firms dubai',
      'best audit firms uae',
      'audit companies dubai',
      'big 4 audit firms',
      'local audit firms dubai',
      'audit firm rankings',
      'ministry approved auditors',
      'external audit dubai',
      'audit firms comparison',
      'audit services uae',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/top-10-audit-firms-dubai`,
      languages: {
        en: `${SITE_CONFIG.url}/en/top-10-audit-firms-dubai`,
        ar: `${SITE_CONFIG.url}/ar/top-10-audit-firms-dubai`,
      },
    },
    openGraph: {
      title: 'Top 10 Audit Firms in Dubai 2025 | Expert Rankings & Reviews',
      description:
        'Discover the leading audit firms in Dubai. In-depth analysis of Big 4 and local audit firms, pricing, services, and client satisfaction.',
      type: 'article',
    },
  }
}

export default async function Top10AuditFirmsPage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Top 10 Audit Firms in Dubai', href: `/${locale}/top-10-audit-firms-dubai` },
  ]

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Top 10 Audit Firms in Dubai 2025: Complete Guide & Rankings',
            description:
              'Comprehensive guide to the top audit firms in Dubai including Big 4 and leading local firms with detailed comparisons.',
            author: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai (Farahat & Co)',
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}/logo.png`,
              },
            },
            datePublished: '2025-01-19',
            dateModified: '2025-01-19',
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-secondary-500/20 text-secondary-300 border-secondary-400/30">
                <Award className="mr-2 h-4 w-4" />
                2025 Updated Rankings
              </Badge>
              <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Top 10 Audit Firms in{' '}
                <span className="text-secondary-400">Dubai</span>
              </h1>
              <p className="mb-8 text-xl text-primary-100 leading-relaxed md:text-2xl">
                Comprehensive guide to Dubai's leading audit firms including Big 4 global giants and
                exceptional local firms. Expert rankings, detailed comparisons, and everything you
                need to choose the right auditor for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href={`/${locale}/contact`}>
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                  <Link href={`/${locale}/calculator`}>Calculate Audit Fees</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Dubai's audit industry represents a sophisticated ecosystem of international and
                  local firms serving over <strong>250,000 registered companies</strong> across the
                  emirate. From multinational corporations to SMEs, every business registered with
                  the Department of Economic Development (DED) or operating in free zones requires
                  annual statutory audits under{' '}
                  <strong>Federal Law No. 32 of 2021</strong>.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mt-4">
                  This comprehensive guide analyzes the <strong>top 10 audit firms in Dubai</strong>
                  , providing detailed insights into their services, pricing, expertise, and what
                  makes each firm unique. Whether you're a startup, SME, or large enterprise, this
                  guide will help you make an informed decision.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid gap-6 md:grid-cols-4">
                <Card className="border-primary-100 bg-primary-50/50">
                  <CardContent className="pt-6 text-center">
                    <Building2 className="mx-auto mb-2 h-8 w-8 text-primary-600" />
                    <div className="text-3xl font-bold text-primary-900">250K+</div>
                    <div className="text-sm text-gray-600">Companies in Dubai</div>
                  </CardContent>
                </Card>
                <Card className="border-secondary-100 bg-secondary-50/50">
                  <CardContent className="pt-6 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-secondary-600" />
                    <div className="text-3xl font-bold text-secondary-900">500+</div>
                    <div className="text-sm text-gray-600">Licensed Auditors</div>
                  </CardContent>
                </Card>
                <Card className="border-blue-100 bg-blue-50/50">
                  <CardContent className="pt-6 text-center">
                    <DollarSign className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                    <div className="text-3xl font-bold text-blue-900">AED 15K+</div>
                    <div className="text-sm text-gray-600">Average Audit Cost</div>
                  </CardContent>
                </Card>
                <Card className="border-green-100 bg-green-50/50">
                  <CardContent className="pt-6 text-center">
                    <Globe className="mx-auto mb-2 h-8 w-8 text-green-600" />
                    <div className="text-3xl font-bold text-green-900">4 Big 4</div>
                    <div className="text-sm text-gray-600">Global Firms</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ranking Methodology */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center font-serif text-4xl font-bold text-gray-900">
                Our Ranking Methodology
              </h2>
              <p className="mb-8 text-center text-lg text-gray-600">
                We evaluated audit firms based on 10 critical criteria to ensure objective,
                comprehensive rankings.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: Shield,
                    title: 'Ministry Approval',
                    description: 'Verified Ministry of Economy registration and compliance history',
                  },
                  {
                    icon: Star,
                    title: 'Service Quality',
                    description: 'Client satisfaction scores and audit report accuracy',
                  },
                  {
                    icon: Users,
                    title: 'Team Expertise',
                    description: 'Qualifications, certifications, and industry experience',
                  },
                  {
                    icon: DollarSign,
                    title: 'Pricing Transparency',
                    description: 'Clear fee structures and value for money',
                  },
                  {
                    icon: Clock,
                    title: 'Turnaround Time',
                    description: 'Average audit completion speed and deadline adherence',
                  },
                  {
                    icon: Target,
                    title: 'Industry Specialization',
                    description: 'Sector-specific expertise and specialized services',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Track Record',
                    description: 'Years in operation and number of successful audits',
                  },
                  {
                    icon: Briefcase,
                    title: 'Service Range',
                    description: 'Breadth of audit, tax, and advisory services',
                  },
                  {
                    icon: Globe,
                    title: 'Market Presence',
                    description: 'Local coverage and international network',
                  },
                  {
                    icon: Phone,
                    title: 'Client Support',
                    description: 'Responsiveness and ongoing advisory availability',
                  },
                ].map((criterion) => (
                  <Card key={criterion.title} className="border-blue-100">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-blue-100 p-3">
                          <criterion.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{criterion.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {criterion.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top 10 Rankings - Detailed */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
                The Top 10 Audit Firms in Dubai (2025)
              </h2>

              {/* Rank 1: Audit Firms Dubai */}
              <FirmCard
                rank={1}
                name="Audit Firms Dubai"
                subtitle="Your Trusted Partner in Audit Excellence"
                logo={<Building2 className="h-12 w-12 text-primary-600" />}
                rating={5.0}
                reviews={450}
                featured
                description="Audit Firms Dubai is the leading audit service provider in the UAE, connecting businesses with Ministry-approved auditors while offering comprehensive in-house audit, tax, and advisory services. As the #1 choice for Dubai businesses, we combine cutting-edge technology with personalized service."
                services={[
                  'External Audit & Statutory Compliance',
                  'Internal Audit & Risk Advisory',
                  'Forensic Audit & Fraud Investigation',
                  'VAT & Corporate Tax Services',
                  'RERA & Industry-Specific Audits',
                  'Due Diligence & M&A Advisory',
                  'IFRS Implementation & Training',
                  'Financial Advisory Services',
                ]}
                strengths={[
                  'Best value for money in Dubai',
                  'Fast turnaround (7-10 days)',
                  'Dedicated client relationship managers',
                  'All-in-one audit platform',
                  'Multilingual support (English/Arabic)',
                  'Fixed pricing, no hidden fees',
                  'Technology-enabled audit processes',
                  'Free pre-audit consultation',
                ]}
                pricing="AED 12,000 - 45,000"
                pricingNote="Based on company size and complexity. Most competitive rates in Dubai."
                experience="Since 2015"
                clients="2,800+"
                industries={[
                  'Real Estate & Construction',
                  'Trading & Distribution',
                  'Technology & Startups',
                  'Healthcare',
                  'Hospitality',
                  'Manufacturing',
                  'Professional Services',
                  'E-commerce',
                ]}
                contact={{
                  phone: '+971 4 XXX XXXX',
                  email: 'info@auditfirmsdubai.com',
                  website: 'www.auditfirmsdubai.com',
                  location: 'Business Bay, Dubai',
                }}
                ctaText="Get Free Audit Quote"
                ctaLink={`/${locale}/contact`}
                locale={locale}
              />

              {/* Rank 2: Farahat & Co */}
              <FirmCard
                rank={2}
                name="Farahat & Co."
                subtitle="Established Excellence Since 1985"
                logo={<Award className="h-12 w-12 text-amber-600" />}
                rating={4.9}
                reviews={1250}
                featured
                description="Founded in 1985, Farahat & Co. is one of Dubai's most established and respected audit firms. With 37 years of excellence, the firm has audited over 28,000 UAE companies and maintains a reputation for meticulous attention to detail and regulatory expertise."
                services={[
                  'Statutory Audit Services',
                  'Tax Consulting & VAT Audit',
                  'Corporate Tax Advisory',
                  'Financial Due Diligence',
                  'Business Valuation',
                  'Accounting & Bookkeeping',
                  'CFO Services',
                  'Compliance Advisory',
                ]}
                strengths={[
                  '37+ years serving UAE market',
                  'Deep regulatory expertise',
                  '28,000+ successful audits completed',
                  'Strong relationships with authorities',
                  'Experienced senior partners',
                  'Proven track record',
                  'Industry thought leadership',
                  'Comprehensive service portfolio',
                ]}
                pricing="AED 15,000 - 60,000"
                pricingNote="Premium pricing reflecting decades of experience"
                experience="Since 1985"
                clients="28,000+"
                industries={[
                  'Real Estate Development',
                  'Financial Services',
                  'Trading Companies',
                  'Manufacturing',
                  'Construction',
                  'Professional Services',
                  'Healthcare',
                  'Retail',
                ]}
                contact={{
                  phone: '+971 4 XXX XXXX',
                  email: 'info@farahatco.com',
                  website: 'www.farahatco.com',
                  location: 'Multiple offices across UAE',
                }}
                ctaText="Contact Farahat & Co"
                ctaLink={`/${locale}/contact`}
                locale={locale}
              />

              {/* Rank 3: PwC */}
              <FirmCard
                rank={3}
                name="PricewaterhouseCoopers (PwC)"
                subtitle="Global Leader in Assurance Services"
                logo={<Globe className="h-12 w-12 text-orange-600" />}
                rating={4.8}
                reviews={850}
                description="As one of the Big Four accounting firms, PwC Middle East has been serving the UAE for over 40 years. With 800+ professionals in Dubai, PwC offers world-class audit and assurance services backed by global methodologies and cutting-edge technology."
                services={[
                  'Financial Statement Audit',
                  'Internal Audit Services',
                  'IT Audit & Cyber Security',
                  'Sustainability Assurance',
                  'Regulatory Compliance',
                  'Transaction Services',
                  'Risk Assurance',
                  'Capital Markets Services',
                ]}
                strengths={[
                  'Part of global Big 4 network',
                  'Largest audit team in UAE',
                  'Advanced audit technology',
                  'Industry-leading methodologies',
                  'Listed company expertise',
                  'International standards compliance',
                  'Comprehensive global reach',
                  'Research & thought leadership',
                ]}
                pricing="AED 50,000 - 500,000+"
                pricingNote="Premium pricing for large corporations and complex audits"
                experience="40+ years in UAE"
                clients="600+ in UAE"
                industries={[
                  'Banking & Financial Services',
                  'Oil & Gas',
                  'Government Entities',
                  'Listed Companies',
                  'Telecommunications',
                  'Real Estate',
                  'Aviation',
                  'Healthcare',
                ]}
                contact={{
                  website: 'www.pwc.com/m1',
                  location: 'Multiple offices in Dubai',
                }}
                ctaText="Learn More"
                ctaLink={`/${locale}/resources/blog/how-to-choose-audit-firm`}
                locale={locale}
              />

              {/* Rank 4: Deloitte */}
              <FirmCard
                rank={4}
                name="Deloitte Middle East"
                subtitle="Making an Impact That Matters"
                logo={<TrendingUp className="h-12 w-12 text-green-600" />}
                rating={4.8}
                reviews={720}
                description="Deloitte Middle East, established in 1926, is one of the region's largest professional services firms. With 3,000+ professionals across the Middle East and 750+ in the UAE, Deloitte combines global expertise with local market knowledge."
                services={[
                  'Audit & Assurance',
                  'Risk Advisory Services',
                  'Financial Advisory',
                  'Technology Risk Services',
                  'Regulatory Compliance',
                  'ESG Assurance',
                  'IFRS Implementation',
                  'Capital Markets Services',
                ]}
                strengths={[
                  'Nearly 100 years in the region',
                  'Largest professional services firm',
                  'Technology-driven audits',
                  'Industry specialization depth',
                  'IPO expertise',
                  'Regulatory relationships',
                  'Innovation in audit methodology',
                  'Global network access',
                ]}
                pricing="AED 45,000 - 450,000+"
                pricingNote="Competitive Big 4 pricing"
                experience="Since 1926 in Middle East"
                clients="500+ in UAE"
                industries={[
                  'Government & Public Sector',
                  'Financial Services',
                  'Real Estate',
                  'Technology',
                  'Consumer Business',
                  'Energy & Resources',
                  'Life Sciences',
                  'Manufacturing',
                ]}
                contact={{
                  website: 'www2.deloitte.com/xe',
                  location: 'Dubai International Financial Centre',
                }}
                ctaText="Compare Firms"
                ctaLink={`/${locale}/compare/big4-vs-local-audit-firms`}
                locale={locale}
              />

              {/* Rank 5: KPMG */}
              <FirmCard
                rank={5}
                name="KPMG Lower Gulf"
                subtitle="Cutting Through Complexity"
                logo={<Shield className="h-12 w-12 text-blue-600" />}
                rating={4.7}
                reviews={680}
                description="KPMG Lower Gulf has been serving the UAE since 1974. Part of the global KPMG network with presence in 143 countries, KPMG Dubai offers comprehensive audit services with a strong focus on quality and innovation."
                services={[
                  'External Audit',
                  'Internal Audit',
                  'IT Audit',
                  'Regulatory Audit',
                  'Sustainability Services',
                  'Deal Advisory',
                  'Forensic Services',
                  'Data & Analytics',
                ]}
                strengths={[
                  '50+ years in UAE',
                  'Strong technical expertise',
                  'Data analytics capabilities',
                  'Listed company experience',
                  'Innovation in assurance',
                  'Industry-focused teams',
                  'Global quality standards',
                  'Technology integration',
                ]}
                pricing="AED 45,000 - 400,000+"
                pricingNote="Big 4 competitive rates"
                experience="Since 1974"
                clients="450+ in UAE"
                industries={[
                  'Financial Services',
                  'Real Estate & Infrastructure',
                  'Government',
                  'Technology & Media',
                  'Consumer & Retail',
                  'Energy',
                  'Healthcare',
                  'Industrial Manufacturing',
                ]}
                contact={{
                  website: 'home.kpmg/ae',
                  location: 'Business Bay, Dubai',
                }}
                ctaText="View Services"
                ctaLink={`/${locale}/services`}
                locale={locale}
              />

              {/* Rank 6: Ernst & Young */}
              <FirmCard
                rank={6}
                name="Ernst & Young (EY)"
                subtitle="Building a Better Working World"
                logo={<Briefcase className="h-12 w-12 text-yellow-600" />}
                rating={4.7}
                reviews={640}
                description="EY has been operating in the Middle East since 1923, with over 8,000 professionals across the region. EY combines audit excellence with advisory services, leveraging technology and data analytics for enhanced audit quality."
                services={[
                  'Financial Audit',
                  'Climate Change & Sustainability',
                  'Technology Risk',
                  'Financial Accounting Advisory',
                  'Fraud Investigation',
                  'Transaction Advisory',
                  'Tax Audit Support',
                  'IPO Services',
                ]}
                strengths={[
                  'Century of regional experience',
                  'Large professional team',
                  'Technology-enabled audits',
                  'Strong IPO track record',
                  'ESG expertise',
                  'Data analytics capabilities',
                  'Industry knowledge depth',
                  'Global methodology',
                ]}
                pricing="AED 45,000 - 420,000+"
                pricingNote="Premium Big 4 pricing"
                experience="Since 1923 in Middle East"
                clients="420+ in UAE"
                industries={[
                  'Banking & Capital Markets',
                  'Government & Public Sector',
                  'Technology',
                  'Real Estate & Construction',
                  'Oil & Gas',
                  'Private Equity',
                  'Healthcare',
                  'Telecommunications',
                ]}
                contact={{
                  website: 'www.ey.com/en_ae',
                  location: 'Dubai International Financial Centre',
                }}
                ctaText="Explore Audit Options"
                ctaLink={`/${locale}/services/external-audit`}
                locale={locale}
              />

              {/* Rank 7: Grant Thornton */}
              <FirmCard
                rank={7}
                name="Grant Thornton UAE"
                subtitle="Leading Mid-Tier Global Firm"
                logo={<Star className="h-12 w-12 text-purple-600" />}
                rating={4.6}
                reviews={380}
                description="Grant Thornton UAE is part of one of the world's leading organizations of independent audit, tax and advisory firms. Known for providing Big 4 quality service at competitive rates, Grant Thornton serves mid-market and growing businesses."
                services={[
                  'Statutory Audit',
                  'Tax Services',
                  'Advisory Services',
                  'Business Risk Services',
                  'Forensic Accounting',
                  'Transaction Advisory',
                  'Corporate Finance',
                  'Business Outsourcing',
                ]}
                strengths={[
                  'Mid-market specialist',
                  'Competitive pricing vs Big 4',
                  'Personalized service',
                  'Growing business focus',
                  'International network',
                  'Industry expertise',
                  'Partner-led engagements',
                  'Flexible approach',
                ]}
                pricing="AED 25,000 - 120,000"
                pricingNote="Value pricing for mid-market"
                experience="30+ years globally"
                clients="300+ in UAE"
                industries={[
                  'Real Estate',
                  'Trading & Distribution',
                  'Technology',
                  'Manufacturing',
                  'Healthcare',
                  'Professional Services',
                  'Hospitality',
                  'Retail',
                ]}
                contact={{
                  website: 'www.grantthornton.ae',
                  location: 'Dubai',
                }}
                ctaText="Calculate Fees"
                ctaLink={`/${locale}/calculator`}
                locale={locale}
              />

              {/* Rank 8: BDO */}
              <FirmCard
                rank={8}
                name="BDO UAE"
                subtitle="Exceptional Client Service"
                logo={<Users className="h-12 w-12 text-red-600" />}
                rating={4.5}
                reviews={320}
                description="BDO is the world's fifth-largest accountancy network with presence in 166 countries. BDO UAE offers comprehensive audit and assurance services with a focus on building lasting client relationships and delivering exceptional value."
                services={[
                  'Audit & Assurance',
                  'Tax Services',
                  'Advisory Services',
                  'Risk Advisory',
                  'Business Services & Outsourcing',
                  'Forensic Services',
                  'Transaction Services',
                  'Digital Transformation',
                ]}
                strengths={[
                  'Global network presence',
                  'Personalized attention',
                  'Mid-market expertise',
                  'Technical excellence',
                  'Industry specialization',
                  'Competitive fees',
                  'Responsive service',
                  'Growing UAE practice',
                ]}
                pricing="AED 22,000 - 110,000"
                pricingNote="Competitive mid-tier pricing"
                experience="Global network since 1963"
                clients="280+ in UAE"
                industries={[
                  'Real Estate',
                  'Financial Services',
                  'Technology',
                  'Healthcare',
                  'Manufacturing',
                  'Retail',
                  'Hospitality',
                  'Not-for-Profit',
                ]}
                contact={{
                  website: 'www.bdo.global/en-gb/microsites/mena',
                  location: 'Dubai',
                }}
                ctaText="View Audit Services"
                ctaLink={`/${locale}/services`}
                locale={locale}
              />

              {/* Rank 9: Crowe UAE */}
              <FirmCard
                rank={9}
                name="Crowe UAE"
                subtitle="Smart Decisions. Lasting Value."
                logo={<Target className="h-12 w-12 text-indigo-600" />}
                rating={4.5}
                reviews={280}
                description="Crowe UAE is part of Crowe Global, one of the top 10 accounting networks worldwide. The firm provides audit, tax, and advisory services with a focus on helping businesses make smart decisions that create lasting value."
                services={[
                  'External Audit',
                  'Internal Audit',
                  'Tax Compliance',
                  'Advisory Services',
                  'Risk Management',
                  'Forensic Services',
                  'Business Valuations',
                  'Corporate Governance',
                ]}
                strengths={[
                  'Top 10 global network',
                  'SME focus',
                  'Industry knowledge',
                  'Personal service approach',
                  'Technical expertise',
                  'Value for money',
                  'Local market understanding',
                  'Partner involvement',
                ]}
                pricing="AED 20,000 - 95,000"
                pricingNote="Competitive SME pricing"
                experience="Part of global Crowe network"
                clients="250+ in UAE"
                industries={[
                  'Real Estate',
                  'Trading',
                  'Manufacturing',
                  'Technology',
                  'Healthcare',
                  'Hospitality',
                  'Professional Services',
                  'Retail',
                ]}
                contact={{
                  website: 'www.crowe.com/ae',
                  location: 'Dubai',
                }}
                ctaText="Learn About Audits"
                ctaLink={`/${locale}/resources/blog/uae-audit-requirements-2025`}
                locale={locale}
              />

              {/* Rank 10: Baker Tilly */}
              <FirmCard
                rank={10}
                name="Baker Tilly Middle East"
                subtitle="Relationships. Results. Growth."
                logo={<CheckCircle2 className="h-12 w-12 text-teal-600" />}
                rating={4.4}
                reviews={240}
                description="Baker Tilly Middle East is part of Baker Tilly International, a top 10 global accounting network. The firm combines international best practices with regional expertise to deliver quality audit and advisory services."
                services={[
                  'Statutory Audit',
                  'Internal Audit',
                  'Tax Services',
                  'Business Advisory',
                  'Risk Services',
                  'Transaction Services',
                  'Valuation Services',
                  'Compliance Services',
                ]}
                strengths={[
                  'Top 10 global network',
                  'Regional expertise',
                  'Growing business focus',
                  'Competitive pricing',
                  'Technical quality',
                  'Accessible partners',
                  'Industry experience',
                  'Client-centric approach',
                ]}
                pricing="AED 18,000 - 90,000"
                pricingNote="Value-driven pricing"
                experience="Global presence"
                clients="220+ in UAE"
                industries={[
                  'Real Estate',
                  'Trading & Distribution',
                  'Manufacturing',
                  'Technology',
                  'Healthcare',
                  'Retail',
                  'Hospitality',
                  'Professional Services',
                ]}
                contact={{
                  website: 'www.bakertilly.com.sa',
                  location: 'Dubai & Abu Dhabi',
                }}
                ctaText="Contact Us"
                ctaLink={`/${locale}/contact`}
                locale={locale}
              />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
                Quick Comparison Table
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                <table className="w-full">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="p-4 text-left">Rank</th>
                      <th className="p-4 text-left">Firm Name</th>
                      <th className="p-4 text-left">Type</th>
                      <th className="p-4 text-left">Price Range</th>
                      <th className="p-4 text-left">Rating</th>
                      <th className="p-4 text-left">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        rank: 1,
                        name: 'Audit Firms Dubai',
                        type: 'Local Leader',
                        price: 'AED 12K-45K',
                        rating: '5.0',
                        bestFor: 'Best Value & Speed',
                      },
                      {
                        rank: 2,
                        name: 'Farahat & Co.',
                        type: 'Established Local',
                        price: 'AED 15K-60K',
                        rating: '4.9',
                        bestFor: 'Proven Track Record',
                      },
                      {
                        rank: 3,
                        name: 'PwC',
                        type: 'Big 4',
                        price: 'AED 50K-500K+',
                        rating: '4.8',
                        bestFor: 'Large Corporations',
                      },
                      {
                        rank: 4,
                        name: 'Deloitte',
                        type: 'Big 4',
                        price: 'AED 45K-450K+',
                        rating: '4.8',
                        bestFor: 'IPOs & Listed Cos',
                      },
                      {
                        rank: 5,
                        name: 'KPMG',
                        type: 'Big 4',
                        price: 'AED 45K-400K+',
                        rating: '4.7',
                        bestFor: 'Tech & Innovation',
                      },
                      {
                        rank: 6,
                        name: 'EY',
                        type: 'Big 4',
                        price: 'AED 45K-420K+',
                        rating: '4.7',
                        bestFor: 'ESG & Sustainability',
                      },
                      {
                        rank: 7,
                        name: 'Grant Thornton',
                        type: 'Mid-Tier',
                        price: 'AED 25K-120K',
                        rating: '4.6',
                        bestFor: 'Mid-Market',
                      },
                      {
                        rank: 8,
                        name: 'BDO',
                        type: 'Mid-Tier',
                        price: 'AED 22K-110K',
                        rating: '4.5',
                        bestFor: 'Personal Service',
                      },
                      {
                        rank: 9,
                        name: 'Crowe UAE',
                        type: 'Mid-Tier',
                        price: 'AED 20K-95K',
                        rating: '4.5',
                        bestFor: 'SMEs',
                      },
                      {
                        rank: 10,
                        name: 'Baker Tilly',
                        type: 'Mid-Tier',
                        price: 'AED 18K-90K',
                        rating: '4.4',
                        bestFor: 'Growing Businesses',
                      },
                    ].map((firm) => (
                      <tr key={firm.rank} className="hover:bg-gray-50">
                        <td className="p-4">
                          <Badge variant={firm.rank <= 2 ? 'default' : 'secondary'}>
                            #{firm.rank}
                          </Badge>
                        </td>
                        <td className="p-4 font-semibold text-gray-900">{firm.name}</td>
                        <td className="p-4">
                          <Badge variant="outline">{firm.type}</Badge>
                        </td>
                        <td className="p-4 text-sm">{firm.price}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{firm.rating}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{firm.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">
                How to Choose the Right Audit Firm
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700">
                  Selecting the right audit firm is crucial for your business compliance and
                  financial management. Consider these key factors:
                </p>
              </div>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: '1. Company Size & Complexity',
                    description:
                      'Large corporations typically benefit from Big 4 firms with global reach, while SMEs often find better value with local or mid-tier firms offering personalized attention.',
                  },
                  {
                    title: '2. Budget Considerations',
                    description:
                      'Audit fees vary significantly. Big 4 firms charge premium rates (AED 45K+), while local firms offer competitive pricing (AED 12K-30K). Consider total cost of service, not just the audit fee.',
                  },
                  {
                    title: '3. Industry Expertise',
                    description:
                      'Choose a firm with proven experience in your industry. Specialized knowledge ensures better risk identification and compliance with sector-specific regulations.',
                  },
                  {
                    title: '4. Service Scope',
                    description:
                      'Consider whether you need just audit services or comprehensive tax, advisory, and compliance support. Full-service firms can be more efficient.',
                  },
                  {
                    title: '5. Timeline & Deadlines',
                    description:
                      'If you have tight deadlines, ensure the firm can commit to your schedule. Local firms often offer faster turnaround times than international giants.',
                  },
                  {
                    title: '6. Communication & Accessibility',
                    description:
                      'Partner involvement, responsiveness, and clear communication are essential. Ask about who will lead your audit and their availability.',
                  },
                  {
                    title: '7. Technology & Innovation',
                    description:
                      'Modern audit firms use data analytics and digital tools for more efficient audits. Ask about their audit methodology and technology platforms.',
                  },
                  {
                    title: '8. Long-term Relationship',
                    description:
                      'Your auditor becomes a trusted advisor. Choose a firm you can build a multi-year relationship with for consistency and deeper business understanding.',
                  },
                ].map((factor, index) => (
                  <Card key={index} className="border-l-4 border-l-primary-500">
                    <CardHeader>
                      <CardTitle className="text-xl">{factor.title}</CardTitle>
                      <CardDescription className="text-base">{factor.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: 'What is the average cost of audit in Dubai?',
                    answer:
                      'Audit fees in Dubai range from AED 12,000 for small companies to AED 500,000+ for large corporations. The average SME pays between AED 20,000-40,000. Factors affecting cost include company size, complexity, number of transactions, and firm reputation.',
                  },
                  {
                    question: 'How long does an audit take in Dubai?',
                    answer:
                      'A typical audit takes 2-6 weeks depending on company size and preparation. Well-prepared companies with good record-keeping can complete audits in 7-10 days with efficient local firms. Big 4 firms may take longer due to more comprehensive procedures.',
                  },
                  {
                    question: 'Do I need a Big 4 firm for my audit?',
                    answer:
                      'Not necessarily. Big 4 firms are ideal for large corporations, listed companies, and businesses requiring international credibility. Most SMEs find better value and personalized service with reputable local or mid-tier firms. Consider your specific needs, budget, and industry requirements.',
                  },
                  {
                    question: 'What documents do I need for an audit?',
                    answer:
                      'Key documents include: financial statements, general ledger, bank statements, invoices and receipts, contracts, payroll records, tax returns, fixed asset register, and supporting schedules. Your auditor will provide a detailed checklist during planning.',
                  },
                  {
                    question: 'Can I switch audit firms?',
                    answer:
                      'Yes, you can change auditors annually. However, frequent changes may raise regulatory concerns. Valid reasons for switching include better pricing, improved service, or specialized expertise needs. Ensure a smooth transition by coordinating between old and new auditors.',
                  },
                  {
                    question: 'What is the difference between Big 4 and local audit firms?',
                    answer:
                      'Big 4 firms (PwC, Deloitte, KPMG, EY) offer global reach, advanced technology, and brand prestige but at premium prices. Local firms provide personalized service, faster turnaround, competitive pricing, and often equal technical quality for SMEs. Choice depends on your company size and specific needs.',
                  },
                  {
                    question: 'How do I verify an auditor is Ministry-approved?',
                    answer:
                      'Check the Ministry of Economy website for the list of registered auditors. All audit reports must be signed by an approved auditor. Reputable firms will readily provide their registration details and credentials.',
                  },
                  {
                    question: 'What happens if I miss the audit deadline?',
                    answer:
                      'Late filing can result in penalties starting at AED 10,000, license renewal blocks, visa issues, and potential bank account restrictions. Contact your auditor immediately if you risk missing deadlines - many offer expedited services.',
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-900">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Ready to Start Your Audit?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Get a free consultation and competitive quote from Dubai's #1 audit service provider.
              Fast turnaround, transparent pricing, and exceptional service guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                <Link href={`/${locale}/calculator`}>
                  <DollarSign className="mr-2 h-5 w-5" />
                  Calculate Audit Fees
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Reusable Firm Card Component
interface FirmCardProps {
  rank: number
  name: string
  subtitle: string
  logo: React.ReactNode
  rating: number
  reviews: number
  featured?: boolean
  description: string
  services: string[]
  strengths: string[]
  pricing: string
  pricingNote: string
  experience: string
  clients: string
  industries: string[]
  contact?: {
    phone?: string
    email?: string
    website?: string
    location?: string
  }
  ctaText: string
  ctaLink: string
  locale: string
}

function FirmCard({
  rank,
  name,
  subtitle,
  logo,
  rating,
  reviews,
  featured = false,
  description,
  services,
  strengths,
  pricing,
  pricingNote,
  experience,
  clients,
  industries,
  contact,
  ctaText,
  ctaLink,
  locale,
}: FirmCardProps) {
  return (
    <Card
      className={`mb-12 overflow-hidden ${
        featured
          ? 'border-2 border-primary-300 shadow-2xl ring-4 ring-primary-100'
          : 'shadow-lg'
      }`}
    >
      <div
        className={`${
          featured
            ? 'bg-gradient-to-r from-primary-600 to-primary-700'
            : 'bg-gradient-to-r from-gray-700 to-gray-800'
        } px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${
                featured ? 'bg-white' : 'bg-white/90'
              }`}
            >
              {logo}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={rank <= 2 ? 'default' : 'secondary'}
                  className={rank <= 2 ? 'bg-yellow-500 text-yellow-900' : ''}
                >
                  #{rank}
                </Badge>
                {featured && (
                  <Badge className="bg-yellow-500 text-yellow-900">
                    <Award className="mr-1 h-3 w-3" />
                    Top Choice
                  </Badge>
                )}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">{name}</h3>
              <p className="text-sm text-white/80">{subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-white">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-white/30'
                  }`}
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-white/80">
              {rating} ({reviews} reviews)
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">{description}</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
              <Briefcase className="h-5 w-5 text-primary-600" />
              Services Offered
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900">
              <Star className="h-5 w-5 text-primary-600" />
              Key Strengths
            </h4>
            <ul className="space-y-2">
              {strengths.slice(0, 8).map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <DollarSign className="h-4 w-4" />
              Pricing Range
            </div>
            <div className="mt-1 text-lg font-bold text-gray-900">{pricing}</div>
            <div className="text-xs text-gray-500">{pricingNote}</div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Clock className="h-4 w-4" />
              Experience
            </div>
            <div className="mt-1 text-lg font-bold text-gray-900">{experience}</div>
            <div className="text-xs text-gray-500">{clients} clients served</div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <Target className="h-4 w-4 text-primary-600" />
            Industry Focus
          </h4>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {contact && (
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary-600" />
                  <span>{contact.phone}</span>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary-600" />
                  <span>{contact.email}</span>
                </div>
              )}
              {contact.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary-600" />
                  <span>{contact.website}</span>
                </div>
              )}
              {contact.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  <span>{contact.location}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button asChild className="w-full" size="lg" variant={featured ? 'default' : 'outline'}>
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
