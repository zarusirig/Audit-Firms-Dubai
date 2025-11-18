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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Check,
  ArrowRight,
  Phone,
  Calculator,
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,
  TrendingUp,
  Clock,
  FileText,
  AlertCircle,
} from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

// Pricing tiers
const PRICING_PACKAGES = [
  {
    id: 'startup',
    name: 'Startup Package',
    price: 'AED 15,000',
    priceRange: '15,000 - 25,000',
    ideal: 'Small businesses and startups',
    description: 'Perfect for new companies and small businesses with straightforward operations',
    icon: FileCheck,
    features: [
      'Annual external audit',
      'Financial statement preparation',
      'Basic management letter',
      'Email support',
      '15-day turnaround',
      'Up to AED 2M revenue',
      'Single location',
      'Standard working hours',
    ],
    notIncluded: ['VAT audit', 'Internal audit', 'Dedicated account manager'],
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth Package',
    price: 'AED 35,000',
    priceRange: '30,000 - 50,000',
    ideal: 'Growing SMEs',
    description: 'Comprehensive audit services for established and growing businesses',
    icon: TrendingUp,
    features: [
      'Annual external audit',
      'Financial statement preparation',
      'Detailed management letter',
      'VAT compliance review',
      'Priority support',
      '10-day turnaround',
      'Up to AED 10M revenue',
      'Multiple locations (up to 3)',
      'Dedicated account manager',
      'Quarterly financial review',
    ],
    notIncluded: ['Internal audit', 'Due diligence'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    price: 'Custom',
    priceRange: '75,000+',
    ideal: 'Large corporations',
    description: 'Tailored audit solutions for large organizations with complex requirements',
    icon: Building2,
    features: [
      'Comprehensive external audit',
      'Internal audit services',
      'IFRS consultation',
      'Risk assessment',
      'Priority 24/7 support',
      '7-day express turnaround',
      'Unlimited revenue',
      'Multiple locations',
      'Dedicated audit team',
      'Monthly advisory calls',
      'Custom reporting',
      'Subsidiary consolidation',
    ],
    notIncluded: [],
    popular: false,
  },
]

// Specialized audit pricing
const SPECIALIZED_AUDITS = [
  {
    service: 'RERA Audit',
    icon: Building2,
    startingPrice: 'AED 20,000',
    duration: '7-10 days',
    factors: [
      'Number of escrow accounts',
      'Project size and complexity',
      'DLD transaction volume',
      'Service charge audits',
    ],
  },
  {
    service: 'VAT Audit',
    icon: ReceiptText,
    startingPrice: 'AED 12,000',
    duration: '5-7 days',
    factors: [
      'Annual VAT turnover',
      'Number of transactions',
      'Multi-rate complexity',
      'FTA inspection preparation',
    ],
  },
  {
    service: 'Internal Audit',
    icon: Shield,
    startingPrice: 'AED 25,000',
    duration: '10-15 days',
    factors: [
      'Scope of review',
      'Number of processes',
      'Risk assessment depth',
      'Report detail level',
    ],
  },
  {
    service: 'Due Diligence',
    icon: Search,
    startingPrice: 'AED 40,000',
    duration: '15-20 days',
    factors: [
      'Transaction size',
      'Target company complexity',
      'Industry specialization',
      'Urgency of timeline',
    ],
  },
  {
    service: 'Forensic Audit',
    icon: Scale,
    startingPrice: 'AED 50,000',
    duration: '20-30 days',
    factors: [
      'Investigation scope',
      'Period under review',
      'Evidence complexity',
      'Expert witness requirements',
    ],
  },
]

// Pricing factors
const PRICING_FACTORS = [
  {
    factor: 'Company Revenue',
    impact: 'High',
    description:
      'Higher revenue companies require more extensive testing and sampling, increasing audit scope.',
  },
  {
    factor: 'Industry Complexity',
    impact: 'Medium',
    description:
      'Industries like financial services and real estate have more complex accounting requirements.',
  },
  {
    factor: 'Number of Transactions',
    impact: 'High',
    description:
      'More transactions require larger sample sizes and additional audit procedures.',
  },
  {
    factor: 'Number of Locations',
    impact: 'Medium',
    description: 'Multiple branches or subsidiaries increase fieldwork and coordination costs.',
  },
  {
    factor: 'Accounting Quality',
    impact: 'High',
    description:
      'Poor accounting records require more time for reconciliation and error correction.',
  },
  {
    factor: 'Turnaround Time',
    impact: 'Medium',
    description: 'Express service (3-5 days) carries a 30% premium over standard timeline.',
  },
  {
    factor: 'Previous Audit Issues',
    impact: 'Medium',
    description:
      'Significant prior year adjustments or qualifications require additional procedures.',
  },
  {
    factor: 'Free Zone vs Mainland',
    impact: 'Low',
    description: 'Different jurisdictions have varying reporting requirements.',
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
    title: 'Audit Pricing Dubai | Transparent Audit Fees & Packages | Farahat & Co',
    description:
      'Clear, transparent audit pricing in Dubai. External audit from AED 15,000. No hidden fees. Fixed pricing. Compare packages or get instant quote. Ministry-approved auditors. Call +971 42 500 251',
    keywords: [
      'audit fees dubai',
      'audit cost dubai',
      'audit pricing uae',
      'how much does audit cost',
      'audit packages dubai',
      'external audit price',
      'rera audit fees',
      'vat audit cost',
      'audit firm pricing',
      'transparent audit fees',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/pricing`,
      languages: {
        en: `${SITE_CONFIG.url}/en/pricing`,
        ar: `${SITE_CONFIG.url}/ar/pricing`,
      },
    },
    openGraph: {
      title: 'Transparent Audit Pricing Dubai | Fixed Fees, No Hidden Costs',
      description:
        'Clear audit pricing starting from AED 15,000. Compare packages and get instant quotes. 37 years of transparent pricing.',
      url: `${SITE_CONFIG.url}/${locale}/pricing`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Pricing', href: `/${locale}/pricing` },
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
              Transparent Pricing, No Hidden Fees
            </Badge>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Clear, Competitive Audit Pricing
            </h1>
            <p className="mb-8 text-xl text-primary-100 md:text-2xl">
              Fixed pricing packages with no surprises. Know exactly what you'll pay before we
              start.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/tools/audit-cost-comparison`}>
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Audit Cost
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <Alert>
            <AlertCircle className="h-5 w-5" />
            <AlertDescription className="text-base">
              <strong>Price Match Guarantee:</strong> We'll match any like-for-like quote from a
              Ministry-approved audit firm. Same quality, better price.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Choose Your Package
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Three comprehensive packages designed for businesses at every stage
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_PACKAGES.map((pkg) => {
              const Icon = pkg.icon
              return (
                <Card
                  key={pkg.id}
                  className={`relative flex flex-col ${
                    pkg.popular ? 'border-primary-500 shadow-xl' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-secondary-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3">
                      <Icon className="h-6 w-6 text-primary-700" />
                    </div>
                    <CardTitle className="font-serif text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <div className="mb-1 text-4xl font-bold text-primary-900">{pkg.price}</div>
                      <div className="text-sm text-neutral-600">
                        Range: AED {pkg.priceRange}
                      </div>
                      <div className="mt-2 text-sm font-medium text-neutral-700">
                        Ideal for: {pkg.ideal}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-3 font-semibold text-neutral-900">What's Included:</h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                              <span className="text-sm text-neutral-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {pkg.notIncluded.length > 0 && (
                        <div>
                          <h4 className="mb-2 text-sm font-semibold text-neutral-500">
                            Not Included:
                          </h4>
                          <ul className="space-y-1">
                            {pkg.notIncluded.map((item) => (
                              <li key={item} className="text-xs text-neutral-500">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <div className="border-t p-6">
                    <Button
                      asChild
                      className="w-full"
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      <Link href={`/${locale}/quote`}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialized Audits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Specialized Audit Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Additional services with industry-specific pricing
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZED_AUDITS.map((audit) => {
              const Icon = audit.icon
              return (
                <Card key={audit.service}>
                  <CardHeader>
                    <div className="mb-3 inline-flex rounded-lg bg-primary-100 p-2.5">
                      <Icon className="h-5 w-5 text-primary-700" />
                    </div>
                    <CardTitle className="text-lg">{audit.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 text-2xl font-bold text-primary-900">
                          {audit.startingPrice}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <Clock className="h-4 w-4" />
                          {audit.duration}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                          Pricing Factors:
                        </h4>
                        <ul className="space-y-1">
                          {audit.factors.map((factor) => (
                            <li key={factor} className="text-xs text-neutral-600">
                              • {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              What Affects Audit Pricing?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Understanding the factors that influence your audit cost
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {PRICING_FACTORS.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">{item.factor}</CardTitle>
                      <Badge
                        variant={
                          item.impact === 'High'
                            ? 'destructive'
                            : item.impact === 'Medium'
                            ? 'default'
                            : 'secondary'
                        }
                        className="text-xs"
                      >
                        {item.impact} Impact
                      </Badge>
                    </div>
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

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                Pricing FAQs
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Are there any hidden fees?',
                  a: 'No. Our quotes include all standard audit procedures. Additional costs only arise if you request extra services (like urgent delivery or additional reports) which we\'ll always discuss and agree in advance.',
                },
                {
                  q: 'Can I pay in installments?',
                  a: 'Yes, we offer flexible payment terms for annual audits. Typical structure: 50% upon engagement, 25% at fieldwork commencement, 25% upon report delivery.',
                },
                {
                  q: 'Do you offer discounts for multiple years?',
                  a: 'Yes, we provide 10-15% discounts for multi-year engagement commitments (2-3 years). This also ensures continuity and efficiency in the audit process.',
                },
                {
                  q: 'What if my business is larger/smaller than the package assumes?',
                  a: 'Our calculator provides precise pricing based on your specific details. Packages are indicative ranges - we always provide a custom quote after understanding your exact requirements.',
                },
                {
                  q: 'Is express service available?',
                  a: 'Yes, 3-5 day express service is available for an additional 30% fee. Subject to availability and document readiness.',
                },
                {
                  q: 'Do prices include VAT?',
                  a: 'All prices shown are excluding VAT. 5% UAE VAT applies to audit services and will be added to your final invoice.',
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Get Your Custom Quote Today
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Use our calculator for instant pricing or speak with our team for a detailed quote
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/tools/audit-cost-comparison`}>
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Audit Cost
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 42 500 251
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
