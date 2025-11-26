import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { i18n, type Locale } from '@/lib/i18n/config'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Building2,
  Package,
  Factory,
  Landmark,
  HeartPulse,
  Palmtree,
  Laptop,
  ShoppingCart,
  ArrowRight,
  Phone,
  CheckCircle2,
} from 'lucide-react'

const INDUSTRIES = [
  {
    slug: 'real-estate',
    name: 'Real Estate & Property',
    icon: Building2,
    description:
      'Specialized RERA audit services for property developers, real estate investment trusts, and property management companies.',
    highlights: [
      'RERA Compliance',
      'Escrow Account Audits',
      'DLD Requirements',
      'Service Charge Audits',
    ],
    challenges: ['Complex valuations', 'Off-plan sales', 'Escrow compliance', 'Multiple regulations'],
  },
  {
    slug: 'trading',
    name: 'Trading & Distribution',
    icon: Package,
    description:
      'Comprehensive audit services for import/export companies, wholesalers, and trading businesses across the UAE.',
    highlights: [
      'Inventory Verification',
      'Multi-Currency Transactions',
      'Custom Compliance',
      'Transfer Pricing',
    ],
    challenges: [
      'Inventory management',
      'Foreign exchange',
      'Transfer pricing',
      'Cross-border trade',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    description:
      'Industry-specific audit expertise for manufacturing plants, production facilities, and industrial operations.',
    highlights: [
      'Cost Accounting',
      'Inventory Valuation',
      'WIP Assessment',
      'Production Efficiency',
    ],
    challenges: ['Complex costing', 'WIP valuation', 'Fixed assets', 'Waste management'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    icon: Landmark,
    description:
      'Specialized audits for banks, investment firms, money exchanges, and financial institutions under DFSA/CBUAE regulations.',
    highlights: [
      'DFSA Compliance',
      'CBUAE Regulations',
      'Risk Management',
      'Capital Adequacy',
    ],
    challenges: ['Complex regulations', 'Risk assessment', 'Fair value', 'Anti-money laundering'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Medical',
    icon: HeartPulse,
    description:
      'Audit services for hospitals, clinics, pharmacies, and healthcare providers meeting DHA and HAAD requirements.',
    highlights: [
      'DHA Compliance',
      'HAAD Requirements',
      'Medical Inventory',
      'Revenue Recognition',
    ],
    challenges: [
      'Insurance claims',
      'Inventory controls',
      'Patient privacy',
      'Multiple regulators',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    icon: Palmtree,
    description:
      'Tailored audit solutions for hotels, restaurants, travel agencies, and tourism companies in Dubai.',
    highlights: [
      'Revenue Management',
      'Tourism Licenses',
      'Multi-Location Audits',
      'Seasonal Business',
    ],
    challenges: [
      'Revenue recognition',
      'Seasonal fluctuations',
      'Cash handling',
      'Multiple outlets',
    ],
  },
  {
    slug: 'technology',
    name: 'Technology & IT',
    icon: Laptop,
    description:
      'Modern audit approaches for software companies, IT services, SaaS businesses, and tech startups.',
    highlights: [
      'SaaS Revenue Recognition',
      'Intellectual Property',
      'R&D Capitalization',
      'Startup Valuations',
    ],
    challenges: [
      'Subscription revenue',
      'Intangible assets',
      'R&D costs',
      'Rapid growth',
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: ShoppingCart,
    description:
      'E-commerce specific audit services for online retailers, marketplace sellers, and omnichannel businesses.',
    highlights: [
      'Online Sales Verification',
      'Payment Gateway Reconciliation',
      'Multi-Channel Revenue',
      'Returns Management',
    ],
    challenges: [
      'Payment reconciliation',
      'Returns & refunds',
      'Marketplace accounting',
      'Digital payments',
    ],
  },
]

// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Industry-Specific Audit Services Dubai | All Sectors Covered | Farahat & Co',
    description:
      'Specialized audit services for all industries in Dubai: Real Estate (RERA), Trading, Manufacturing, Financial Services, Healthcare, Hospitality, Technology & E-commerce. Industry experts. Call +971 4 250 0251',
    keywords: [
      'industry specific audits dubai',
      'sector audit services',
      'rera audit real estate',
      'trading company audit',
      'manufacturing audit uae',
      'financial services audit',
      'healthcare audit dubai',
      'hospitality audit',
      'technology audit services',
      'ecommerce audit dubai',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/industries`,
      languages: {
        en: `${SITE_CONFIG.url}/en/industries`,
        ar: `${SITE_CONFIG.url}/ar/industries`,
      },
    },
    openGraph: {
      title: 'Industry-Specific Audit Services Dubai | All Sectors Covered',
      description:
        'Specialized audit expertise across 8 major industries in Dubai. Ministry-approved auditors with sector-specific knowledge.',
      url: `${SITE_CONFIG.url}/${locale}/industries`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function IndustriesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Industries', href: `/${locale}/industries` },
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              Industry Specialists Since 1985
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Industry-Specific <span className="text-secondary-400">Audit Services</span>
            </h1>
            <p className="mb-8 text-xl text-primary-100 md:text-2xl leading-relaxed">
              Deep expertise across 8 major sectors of the UAE economy, understanding unique
              challenges and regulatory requirements of each industry
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Industry Expert
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                <Link href={`/${locale}/services`}>
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Why Industry Expertise Matters
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700">
              Every industry has unique accounting standards, regulatory requirements, and operational
              challenges. Our auditors specialize in specific sectors, bringing deep knowledge of
              industry-specific IFRS applications, compliance requirements, and common financial issues.
              This specialization ensures more accurate audits, valuable insights, and compliance with
              sector-specific regulations.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary-700">8</CardTitle>
                  <CardDescription>Industries Covered</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary-700">28,000+</CardTitle>
                  <CardDescription>Clients Across Sectors</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary-700">150+</CardTitle>
                  <CardDescription>Industry Specialists</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Specialized audit solutions tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon
              return (
                <Link key={industry.slug} href={`/${locale}/industries/${industry.slug}`}>
                  <Card className="group h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-gray-200 hover:border-primary-200">
                    <CardHeader>
                      <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
                        <Icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="font-serif text-xl text-gray-900 group-hover:text-primary-700 transition-colors">
                        {industry.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-gray-600 leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        {/* Key Highlights */}
                        <div>
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">
                            What We Cover
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {industry.highlights.slice(0, 3).map((highlight) => (
                              <Badge key={highlight} variant="secondary" className="bg-gray-50 text-gray-600 border-gray-100 font-normal">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Common Challenges */}
                        <div>
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">
                            Challenges We Solve
                          </p>
                          <ul className="space-y-2">
                            {industry.challenges.slice(0, 2).map((challenge) => (
                              <li key={challenge} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center text-sm font-bold text-primary-600 transition-colors group-hover:text-primary-800 pt-2">
                          View Industry Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Our Industry-Specific Approach
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              How we deliver superior audit quality through industry specialization
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Dedicated Sector Teams',
                  description:
                    'Our auditors specialize in specific industries, with dedicated teams for real estate, financial services, healthcare, and other sectors. Team members have years of experience auditing similar businesses.',
                },
                {
                  title: 'Regulatory Expertise',
                  description:
                    'Deep knowledge of sector-specific regulations (RERA, DFSA, DHA, etc.) ensures full compliance. We stay current with regulatory changes affecting your industry.',
                },
                {
                  title: 'Industry Benchmarking',
                  description:
                    'Compare your performance against industry peers with our proprietary benchmarking data. Identify opportunities for improvement based on sector best practices.',
                },
                {
                  title: 'Tailored Audit Programs',
                  description:
                    'Customized audit procedures addressing industry-specific risks and accounting issues. We focus on what matters most in your sector.',
                },
                {
                  title: 'Operational Insights',
                  description:
                    'Beyond compliance, we provide business insights drawn from industry experience. Our recommendations are practical and industry-relevant.',
                },
                {
                  title: 'Continuous Education',
                  description:
                    'Our teams receive ongoing training on industry developments, new standards, and emerging risks in their specialized sectors.',
                },
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary-500">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-primary-900 text-white">
                <Badge variant="secondary" className="mb-2 w-fit">
                  Success Story
                </Badge>
                <CardTitle className="font-serif text-2xl">
                  How Industry Expertise Saved a Real Estate Developer AED 2.5M
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-neutral-900">The Challenge:</h4>
                    <p className="text-neutral-700">
                      A Dubai-based property developer faced RERA penalties due to escrow account
                      discrepancies and off-plan sales recognition issues identified during a routine
                      audit by a generalist firm.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-neutral-900">Our Solution:</h4>
                    <p className="text-neutral-700">
                      Our real estate specialized team conducted a comprehensive review, identifying
                      the root causes and working with RERA to resolve discrepancies. We implemented
                      proper revenue recognition policies aligned with IFRS 15 for construction
                      contracts.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-neutral-900">The Results:</h4>
                    <ul className="space-y-2">
                      {[
                        'Avoided AED 2.5M in RERA penalties',
                        'Zero compliance issues in subsequent audits',
                        'Improved financial reporting accuracy',
                        'Strengthened internal controls',
                      ].map((result) => (
                        <li key={result} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                          <span className="text-neutral-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href={`/${locale}/case-studies`}>
                        View More Case Studies
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Need an Industry Expert?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Speak with our sector specialists to discuss your industry-specific audit needs
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 4 250 0251
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/quote`}>
                  Get Industry-Specific Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
