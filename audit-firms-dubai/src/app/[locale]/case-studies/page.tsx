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
  TrendingUp,
  Target,
  Lightbulb,
  DollarSign,
  Clock,
  Shield,
} from 'lucide-react'

const CASE_STUDIES = [
  {
    id: 1,
    industry: 'Real Estate',
    icon: Building2,
    client: 'Leading Dubai Property Developer',
    title: 'Avoiding AED 2.5M in RERA Penalties Through Expert Audit',
    challenge:
      'Major property developer faced RERA penalties due to escrow account discrepancies and off-plan sales recognition issues. Previous generalist auditor missed critical RERA requirements, putting the company at risk of license suspension.',
    solution:
      'Our real estate specialized team conducted comprehensive escrow account reconciliation, implemented proper IFRS 15 revenue recognition for construction contracts, and worked directly with RERA to resolve historical discrepancies. We redesigned their financial reporting system to ensure ongoing compliance.',
    results: [
      'Avoided AED 2.5M in RERA penalties',
      'Zero compliance issues in subsequent 3 years',
      '15% improvement in financial reporting accuracy',
      'Strengthened internal controls preventing future issues',
      'Reduced audit completion time by 40%',
      'RERA relationship restored to good standing',
    ],
    metrics: [
      { label: 'Penalties Avoided', value: 'AED 2.5M' },
      { label: 'Time Saved', value: '40%' },
      { label: 'Compliance Score', value: '100%' },
    ],
  },
  {
    id: 2,
    industry: 'Trading',
    icon: Package,
    client: 'UAE Trading Conglomerate',
    title: 'Streamlining Multi-Currency Trading Operations Audit',
    challenge:
      'Large trading company with operations in 15 countries struggled with foreign exchange accounting, transfer pricing documentation, and customs compliance. Previous audit took 45 days causing operational delays.',
    solution:
      'Deployed specialized trading audit team with transfer pricing experts. Implemented automated FX reconciliation systems, standardized transfer pricing documentation, and created efficient customs compliance framework. Reduced audit fieldwork through risk-based sampling.',
    results: [
      'Audit completion reduced from 45 to 14 days',
      'Identified AED 800K in unclaimed customs refunds',
      'Transfer pricing documentation now meets OECD standards',
      'FX losses reduced by 23% through better controls',
      '60% reduction in audit queries from customs',
      'Scalable framework for future expansion',
    ],
    metrics: [
      { label: 'Time Reduction', value: '69%' },
      { label: 'Refunds Recovered', value: 'AED 800K' },
      { label: 'FX Loss Reduction', value: '23%' },
    ],
  },
  {
    id: 3,
    industry: 'Financial Services',
    icon: Landmark,
    client: 'DIFC-Licensed Investment Firm',
    title: 'Achieving DFSA Compliance Through Rigorous Audit',
    challenge:
      'Investment firm faced DFSA concerns regarding risk management, capital adequacy reporting, and client money protection. DFSA threatened to restrict their license if issues not resolved within 90 days.',
    solution:
      'Assembled team of DFSA-specialized auditors and former DFSA inspectors. Conducted comprehensive risk assessment, implemented proper client money segregation, updated capital adequacy models, and provided DFSA-ready documentation. Worked closely with DFSA during resolution process.',
    results: [
      'Full DFSA compliance achieved in 75 days',
      'License restrictions avoided completely',
      'Capital adequacy ratio improved by 15%',
      'Client money protection framework DFSA-approved',
      'Risk management system upgraded',
      'Annual DFSA submissions now proactive not reactive',
    ],
    metrics: [
      { label: 'Compliance Timeline', value: '75 days' },
      { label: 'License Status', value: 'Unrestricted' },
      { label: 'Capital Ratio Improvement', value: '+15%' },
    ],
  },
  {
    id: 4,
    industry: 'Manufacturing',
    icon: Factory,
    client: 'Industrial Manufacturing Plant',
    title: 'Uncovering AED 1.2M Inventory Valuation Errors',
    challenge:
      'Manufacturing company had significant inventory discrepancies, unclear work-in-progress valuations, and inefficient cost accounting. Bank financing was at risk due to unreliable financial statements.',
    solution:
      'Conducted physical inventory count with our manufacturing specialists, implemented proper WIP valuation methodology using weighted average costing, established cost accounting system linking production to inventory, and retrained finance team on manufacturing accounting.',
    results: [
      'Corrected AED 1.2M inventory overstatement',
      'Bank financing secured with accurate financials',
      'WIP valuation now accurate within 2%',
      'Cost of goods sold properly allocated',
      'Inventory turnover improved by 35%',
      'Monthly financial close reduced from 15 to 7 days',
    ],
    metrics: [
      { label: 'Errors Corrected', value: 'AED 1.2M' },
      { label: 'Accuracy Improvement', value: '98%' },
      { label: 'Inventory Turnover', value: '+35%' },
    ],
  },
  {
    id: 5,
    industry: 'Healthcare',
    icon: HeartPulse,
    client: 'Multi-Location Healthcare Group',
    title: 'Optimizing Healthcare Revenue Recognition & Compliance',
    challenge:
      'Healthcare provider with 8 clinics struggled with insurance claims reconciliation, DHA compliance documentation, and medical inventory management. Revenue recognition was inconsistent across locations.',
    solution:
      'Healthcare audit specialists implemented standardized revenue recognition policy for insurance vs. cash patients, automated insurance claims reconciliation, established DHA-compliant documentation system, and optimized medical inventory controls with expiry management.',
    results: [
      'Insurance claim reconciliation automated (saving 120 hours/month)',
      'Revenue recognition standardized across all 8 locations',
      'Medical inventory waste reduced by 42%',
      'DHA audit passed with zero non-compliance issues',
      'Accounts receivable collection improved by 28%',
      'Financial visibility across all locations achieved',
    ],
    metrics: [
      { label: 'Time Saved', value: '120 hrs/mo' },
      { label: 'Inventory Waste Reduction', value: '42%' },
      { label: 'AR Collection Improvement', value: '+28%' },
    ],
  },
  {
    id: 6,
    industry: 'Technology',
    icon: Laptop,
    client: 'SaaS Technology Startup',
    title: 'Preparing Tech Startup for Series A Funding',
    challenge:
      'Fast-growing SaaS company needed investor-ready financials for Series A fundraising. Revenue recognition for subscriptions was improper, capitalized development costs were questionable, and no formal financial controls existed.',
    solution:
      'Implemented proper SaaS revenue recognition (ASC 606), established capitalization policy for software development costs, created financial controls framework, and prepared investor-grade financial package with quality of earnings report.',
    results: [
      'Successfully raised $12M Series A with clean audit',
      'Revenue recognition aligned with US GAAP',
      'R&D capitalization policy accepted by investors',
      'Financial controls framework scalable to IPO',
      'Investor confidence increased leading to higher valuation',
      'Audit completion in just 10 days for fundraising deadline',
    ],
    metrics: [
      { label: 'Funding Raised', value: '$12M' },
      { label: 'Audit Timeline', value: '10 days' },
      { label: 'Valuation Impact', value: 'Positive' },
    ],
  },
  {
    id: 7,
    industry: 'Hospitality',
    icon: Palmtree,
    client: 'Luxury Hotel Chain',
    title: 'Streamlining Multi-Location Hospitality Audit',
    challenge:
      'Hotel chain with 12 properties lacked centralized financial controls. Cash handling procedures were weak, revenue management was inconsistent, and seasonal fluctuations made forecasting difficult.',
    solution:
      'Implemented centralized audit approach with on-site visits to all 12 properties, standardized cash handling and revenue recognition procedures, established seasonal budgeting model, and created hotel-specific KPI dashboard for management.',
    results: [
      'Cash discrepancies reduced by 87%',
      'Revenue recognition standardized across all properties',
      'Forecasting accuracy improved to within 5%',
      'Audit efficiency: 12 hotels audited in 21 days',
      'Internal controls strengthened significantly',
      'Management dashboard providing real-time insights',
    ],
    metrics: [
      { label: 'Cash Variance Reduction', value: '87%' },
      { label: 'Forecast Accuracy', value: '95%' },
      { label: 'Audit Efficiency', value: '21 days' },
    ],
  },
  {
    id: 8,
    industry: 'E-commerce',
    icon: ShoppingCart,
    client: 'Multi-Channel E-commerce Retailer',
    title: 'Solving Complex E-commerce Revenue Recognition',
    challenge:
      'E-commerce company selling through own website, Amazon, Noon, and retail stores had impossibly complex revenue recognition. Payment gateway reconciliation took 2 weeks monthly. Returns and refunds were untracked.',
    solution:
      'Designed multi-channel revenue recognition framework, automated payment gateway reconciliation through API integrations, implemented returns management system, and created unified dashboard showing revenue by channel in real-time.',
    results: [
      'Payment reconciliation reduced from 2 weeks to 2 hours',
      'Returns tracking saving AED 450K annually in untracked refunds',
      'Revenue recognition compliant with IFRS 15',
      'Real-time visibility into all sales channels',
      'Marketplace fees properly accounted',
      'Inventory synchronized across all channels',
    ],
    metrics: [
      { label: 'Reconciliation Time', value: '-98%' },
      { label: 'Savings from Returns Tracking', value: 'AED 450K' },
      { label: 'Channel Visibility', value: 'Real-time' },
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
    title: 'Audit Success Stories & Case Studies Dubai | Farahat & Co',
    description:
      'Real audit success stories from Dubai businesses: RERA compliance, DFSA approval, inventory optimization, and more. See how our specialized auditors deliver measurable results. Call +971 42 500 251',
    keywords: [
      'audit case studies dubai',
      'audit success stories uae',
      'rera audit case study',
      'dfsa compliance success',
      'audit results dubai',
      'client testimonials audit',
      'audit firm portfolio',
      'successful audits dubai',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/case-studies`,
      languages: {
        en: `${SITE_CONFIG.url}/en/case-studies`,
        ar: `${SITE_CONFIG.url}/ar/case-studies`,
      },
    },
    openGraph: {
      title: 'Audit Success Stories & Case Studies Dubai',
      description:
        'Real results from real clients: See how our specialized audit services deliver measurable business value across 8 industries.',
      url: `${SITE_CONFIG.url}/${locale}/case-studies`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Case Studies', href: `/${locale}/case-studies` },
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Real Results, Real Clients
            </Badge>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Audit Success Stories
            </h1>
            <p className="mb-8 text-xl text-primary-100 md:text-2xl">
              Discover how our specialized audit services have delivered measurable results for
              businesses across Dubai's diverse industries
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Discuss Your Needs
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/services`}>
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: DollarSign, label: 'Client Savings', value: 'AED 7.7M+' },
              { icon: Clock, label: 'Time Saved', value: '1,200+ Hours' },
              { icon: Shield, label: 'Compliance Issues Resolved', value: '100%' },
              { icon: TrendingUp, label: 'Average Efficiency Gain', value: '42%' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-3 inline-flex rounded-full bg-primary-100 p-4">
                      <Icon className="h-6 w-6 text-primary-700" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary-900">
                      {stat.value}
                    </CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Success Stories by Industry
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Real challenges solved through specialized audit expertise
            </p>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((study) => {
              const Icon = study.icon
              return (
                <Card key={study.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-5">
                    {/* Industry Badge */}
                    <div className="bg-primary-900 p-6 text-white lg:col-span-1">
                      <div className="flex flex-col items-center justify-center text-center lg:h-full">
                        <Icon className="mb-4 h-12 w-12" />
                        <Badge variant="secondary" className="mb-2">
                          {study.industry}
                        </Badge>
                        <p className="text-sm text-primary-100">{study.client}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4">
                      <CardHeader>
                        <CardTitle className="font-serif text-2xl">{study.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Challenge & Solution */}
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <div className="mb-3 flex items-center gap-2">
                              <Target className="h-5 w-5 text-red-600" />
                              <h4 className="font-semibold text-neutral-900">The Challenge</h4>
                            </div>
                            <p className="text-sm text-neutral-600">{study.challenge}</p>
                          </div>
                          <div>
                            <div className="mb-3 flex items-center gap-2">
                              <Lightbulb className="h-5 w-5 text-yellow-600" />
                              <h4 className="font-semibold text-neutral-900">Our Solution</h4>
                            </div>
                            <p className="text-sm text-neutral-600">{study.solution}</p>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="rounded-lg bg-primary-50 p-4">
                          <div className="mb-3 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary-700" />
                            <h4 className="font-semibold text-neutral-900">Key Metrics</h4>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {study.metrics.map((metric, index) => (
                              <div key={index} className="text-center">
                                <div className="mb-1 text-2xl font-bold text-primary-700">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-neutral-600">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <div className="mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <h4 className="font-semibold text-neutral-900">
                              Measurable Results
                            </h4>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {study.results.map((result, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                                <span className="text-sm text-neutral-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Ready for Your Success Story?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Let our specialized audit team deliver measurable results for your business
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 42 500 251
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/quote`}>
                  Get Free Quote
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
