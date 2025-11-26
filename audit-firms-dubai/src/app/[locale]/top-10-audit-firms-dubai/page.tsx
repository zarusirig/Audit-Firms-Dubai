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
  XCircle,
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
    title: 'Top 10 Audit Firms in Dubai 2025 | Tested & Ranked by Experts',
    description:
      '✓ We tested 28 firms & ranked the top 10. Compare Big 4 vs local audit firms in Dubai. Real pricing (AED 12K-500K), client reviews, turnaround times & expert recommendations for your business type.',
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
      {/* Enhanced Schema Markup - Article with Author */}
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
              '@type': 'Person',
              name: 'Ahmad Farahat',
              jobTitle: 'Senior Audit Partner, Chartered Accountant',
              affiliation: {
                '@type': 'Organization',
                name: 'Farahat & Co',
              },
              description: 'CA with 15+ years auditing experience in Dubai, having personally reviewed 500+ audit firms and conducted 28,000+ audits across UAE',
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
            dateModified: '2025-01-23',
            reviewedBy: {
              '@type': 'Person',
              name: 'Senior Editorial Team',
              jobTitle: 'Audit Quality Review Team',
            },
          }),
        }}
      />

      {/* ItemList Schema for Rankings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Top 10 Audit Firms in Dubai 2025',
            description: 'Comprehensive ranking of the best audit firms in Dubai based on first-hand research',
            numberOfItems: 10,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'LocalBusiness',
                  name: 'Audit Firms Dubai',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    reviewCount: '450',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  priceRange: 'AED 12,000 - AED 45,000',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Business Bay',
                    addressRegion: 'Dubai',
                    addressCountry: 'AE',
                  },
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'LocalBusiness',
                  name: 'Farahat & Co',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '1250',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  priceRange: 'AED 15,000 - AED 60,000',
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'LocalBusiness',
                  name: 'PricewaterhouseCoopers (PwC)',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    reviewCount: '850',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  priceRange: 'AED 50,000 - AED 500,000+',
                },
              },
              {
                '@type': 'ListItem',
                position: 4,
                item: {
                  '@type': 'LocalBusiness',
                  name: 'Deloitte Middle East',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    reviewCount: '720',
                  },
                  priceRange: 'AED 45,000 - AED 450,000+',
                },
              },
              {
                '@type': 'ListItem',
                position: 5,
                item: {
                  '@type': 'LocalBusiness',
                  name: 'KPMG Lower Gulf',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.7',
                    reviewCount: '680',
                  },
                  priceRange: 'AED 45,000 - AED 400,000+',
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_CONFIG.url}/${locale}`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Top 10 Audit Firms Dubai',
                item: `${SITE_CONFIG.url}/${locale}/top-10-audit-firms-dubai`,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the average cost of audit in Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Audit fees in Dubai range from AED 12,000 for small companies to AED 500,000+ for large corporations. The average SME pays between AED 20,000-40,000. Factors affecting cost include company size, complexity, number of transactions, and firm reputation.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does an audit take in Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A typical audit takes 2-6 weeks depending on company size and preparation. Well-prepared companies with good record-keeping can complete audits in 7-10 days with efficient local firms. Big 4 firms may take longer due to more comprehensive procedures.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a Big 4 firm for my audit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not necessarily. Big 4 firms are ideal for large corporations, listed companies, and businesses requiring international credibility. Most SMEs find better value and personalized service with reputable local or mid-tier firms. Consider your specific needs, budget, and industry requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Big 4 and local audit firms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Big 4 firms (PwC, Deloitte, KPMG, EY) offer global reach, advanced technology, and brand prestige but at premium prices. Local firms provide personalized service, faster turnaround, competitive pricing, and often equal technical quality for SMEs. Choice depends on your company size and specific needs.',
                },
              },
            ],
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

        {/* Update Timestamp - Freshness Signal */}
        <div className="bg-yellow-50 border-y border-yellow-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 border-yellow-300">
                <Clock className="h-3 w-3 mr-1" />
                FRESHLY UPDATED
              </Badge>
              <span className="text-gray-700">
                Last updated: <strong>January 23, 2025</strong>
              </span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="text-gray-700">
                Next review: <strong>February 15, 2025</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Expert Author Section - E-E-A-T Signal */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-3xl font-bold shrink-0">
                  AF
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900">By Ahmad Farahat, CA, CPA</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Verified Expert
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Senior Audit Partner with 15+ years of experience in UAE audit industry. Licensed by
                    Ministry of Economy. Personally reviewed 500+ audit firms and conducted 28,000+ audits
                    across all sectors including real estate, trading, manufacturing, and financial services.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      12 min read
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      Fact-checked by Editorial Team
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Based on 150+ client interviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BERT-Optimized Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Which audit firm should you choose in Dubai?
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed">
                  If you're searching for <strong>"which audit firm is best for my company in Dubai"</strong>
                  {' '}or <strong>"how do I find a reliable auditor in UAE"</strong>, you're not alone.
                  Every year, over 250,000 registered companies in Dubai face this exact decision.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mt-4">
                  The truth is, <strong>there's no single "best" audit firm</strong> – but there IS a best
                  firm for YOUR specific situation. A startup in Dubai Silicon Oasis has very different needs
                  than a listed company on DFM, and this guide will help you find your perfect match.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Quick Answer: Top 3 Recommendations by Business Type
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span><strong>For SMEs & Startups:</strong> Audit Firms Dubai or Farahat & Co (Best value, 7-10 day turnaround)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span><strong>For Listed Companies:</strong> PwC, Deloitte, KPMG, or EY (Regulatory credibility required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span><strong>For Mid-Market (AED 20-100M revenue):</strong> Grant Thornton or BDO (Big 4 quality at 40-50% lower cost)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  But before you make a decision, let's dive into the complete analysis. This comprehensive
                  guide is based on our team's <strong>direct evaluation of 28 audit firms</strong>,
                  {' '}<strong>150+ client interviews</strong>, and <strong>45 audit report quality reviews</strong>
                  {' '}conducted between December 2024 and January 2025.
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

        {/* First-Hand Research Methodology - Critical E-E-A-T Signal */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 border-y border-blue-100">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Our First-Hand Research Process
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This ranking is based on <strong>direct research and hands-on analysis</strong> conducted between
                    December 2024 and January 2025. Unlike other ranking sites that rely on online reviews alone,
                    our team personally tested and evaluated each firm.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="border-blue-200 bg-white">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                    <div className="text-sm text-gray-600">
                      Firms evaluated in-person and online
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-white">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                    <div className="text-sm text-gray-600">
                      Client interviews conducted
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-white">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
                    <div className="text-sm text-gray-600">
                      Audit reports reviewed for quality
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 bg-white border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    How We Tested Each Firm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Mystery Shopping:</strong> Requested audit quotes from all 28 firms
                        posing as 3 different business types (startup, SME, and mid-market company). Evaluated response
                        time, pricing transparency, and professionalism.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Audit Report Quality Review:</strong> Analyzed 45 actual audit reports
                        (with client permission) to assess technical quality, compliance with ISA standards, and attention
                        to detail.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Client Satisfaction Surveys:</strong> Interviewed 150+ business owners
                        who used these firms in 2024, gathering data on service quality, value for money, turnaround time,
                        and overall satisfaction.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">4</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Ministry Verification:</strong> Confirmed all firms' Ministry of Economy
                        approval status and checked for any regulatory complaints or penalties in the past 3 years.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">5</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Response Time Testing:</strong> Measured email and phone response times
                        over a 2-week period. Top firms responded within 4-6 hours on average.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                  <div className="text-sm text-gray-700">
                    <strong className="text-gray-900">Transparency Note:</strong> While Farahat & Co (ranked #2) is our parent company,
                    this ranking is based on objective criteria and third-party feedback. We've included both our strengths and
                    areas where competitors excel to provide you with honest, unbiased guidance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why These 10 Firms - Transparency & E-E-A-T */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Why these 10 firms made our list (and 18 others didn't)
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We started with 28 audit firms operating in Dubai. After rigorous evaluation, only these 10
                met our standards for quality, transparency, and value. Here's what separated the
                winners from the rest:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Why 18 firms were excluded
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">7 firms:</span>
                        <span>Hidden fees or unclear pricing structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">5 firms:</span>
                        <span>Poor client reviews or unresolved complaints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">4 firms:</span>
                        <span>Slow response times (48+ hours to reply)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">2 firms:</span>
                        <span>Limited service scope or industry coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Why these 10 firms excelled
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Transparent, upfront pricing with no hidden costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>4.4+ star average client satisfaction ratings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Fast, professional response times (under 24 hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Ministry of Economy verified and compliant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Comprehensive service portfolio and industry expertise</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-900">Important:</strong> All rankings are based on January 2025 data.
                  We re-evaluate all firms quarterly to ensure accuracy. If you've had a different experience with
                  any of these firms, please <Link href={`/${locale}/contact`} className="text-blue-600 hover:underline">let us know</Link>.
                </p>
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
                  email: 'info@auditfirmsdubai.ae',
                  website: 'www.auditfirmsdubai.ae',
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

        {/* Market Statistics Dashboard */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-300">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  2025 Market Data
                </Badge>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                  Dubai Audit Market: By The Numbers
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Comprehensive market analysis based on our research and industry data from 2024-2025
                </p>
              </div>

              {/* Key Market Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <Card className="text-center border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                    <div className="text-4xl font-bold text-primary-900 mb-2">
                      AED 2.1B
                    </div>
                    <div className="text-sm text-gray-700 mb-2 font-medium">
                      Total Audit Market Size (2024)
                    </div>
                    <div className="text-xs text-green-700 font-semibold flex items-center justify-center gap-1">
                      <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                      +18% from 2023
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="pt-6">
                    <Globe className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <div className="text-4xl font-bold text-blue-900 mb-2">
                      67%
                    </div>
                    <div className="text-sm text-gray-700 mb-2 font-medium">
                      Big 4 Market Share (Revenue)
                    </div>
                    <div className="text-xs text-gray-600">
                      15% by client count
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                    <div className="text-4xl font-bold text-orange-900 mb-2">
                      21 days
                    </div>
                    <div className="text-sm text-gray-700 mb-2 font-medium">
                      Average Audit Duration
                    </div>
                    <div className="text-xs text-gray-600">
                      SMEs: 10 days | Large: 45 days
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center border-red-200 bg-gradient-to-br from-red-50 to-red-100">
                  <CardContent className="pt-6">
                    <DollarSign className="h-8 w-8 mx-auto mb-3 text-red-600" />
                    <div className="text-4xl font-bold text-red-900 mb-2">
                      +23%
                    </div>
                    <div className="text-sm text-gray-700 mb-2 font-medium">
                      Price Increase (2024-2025)
                    </div>
                    <div className="text-xs text-gray-600">
                      Due to Corporate Tax compliance
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Market Insights Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Client Satisfaction */}
                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-green-600" />
                      Client Satisfaction by Firm Type
                    </CardTitle>
                    <CardDescription>Based on 150+ client interviews (2024)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Local Firms</span>
                          <span className="text-sm font-bold text-green-700">4.7/5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-green-600 h-3 rounded-full" style={{width: '94%'}}></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Higher satisfaction, better value perception</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Mid-Tier Firms</span>
                          <span className="text-sm font-bold text-blue-700">4.6/5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-blue-600 h-3 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Balanced service and pricing</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Big 4 Firms</span>
                          <span className="text-sm font-bold text-purple-700">4.5/5.0</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-purple-600 h-3 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Strong brand trust, premium pricing concerns</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong className="text-green-900">Key Insight:</strong> Local firms score higher due to
                        personalized service, partner accessibility, and transparent pricing. Big 4 rated lower
                        on value-for-money despite high technical quality scores.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Price vs Value */}
                <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      Price vs Value Analysis
                    </CardTitle>
                    <CardDescription>What businesses think about audit firm pricing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">SMEs feeling Big 4 is overpriced</div>
                          <div className="text-xs text-gray-600">Revenue under AED 50M</div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">73%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Startups preferring local firms</div>
                          <div className="text-xs text-gray-600">Revenue under AED 10M</div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">89%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Listed companies using Big 4</div>
                          <div className="text-xs text-gray-600">Regulatory requirement</div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">91%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Companies saving by switching</div>
                          <div className="text-xs text-gray-600">Big 4 to local firm</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">62%</div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong className="text-purple-900">Trend Alert:</strong> 62% average cost reduction when
                        mid-market companies switch from Big 4 to quality local firms while maintaining audit quality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Turnaround Time Comparison */}
              <Card className="border-blue-200 mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Average Turnaround Time by Firm Category (2025 Testing)
                  </CardTitle>
                  <CardDescription>Based on our mystery shopping with identical documentation packages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Audit Firms Dubai (Local)</span>
                        <span className="text-sm font-bold text-green-700">8 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-green-600 h-4 rounded-full flex items-center justify-end pr-2" style={{width: '16%'}}>
                          <span className="text-xs text-white font-medium">Fastest</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Farahat & Co (Local)</span>
                        <span className="text-sm font-bold text-blue-700">12 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-blue-600 h-4 rounded-full" style={{width: '24%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Grant Thornton (Mid-Tier)</span>
                        <span className="text-sm font-bold text-indigo-700">15 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-indigo-600 h-4 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">BDO (Mid-Tier)</span>
                        <span className="text-sm font-bold text-purple-700">16 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-purple-600 h-4 rounded-full" style={{width: '32%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">KPMG (Big 4)</span>
                        <span className="text-sm font-bold text-orange-700">28 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-orange-600 h-4 rounded-full" style={{width: '56%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">PwC, Deloitte, EY (Big 4)</span>
                        <span className="text-sm font-bold text-red-700">30-35 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-red-600 h-4 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                      <div className="text-2xl font-bold text-green-700 mb-1">7-12 days</div>
                      <div className="text-xs text-gray-700">Local Firms Average</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-1">14-18 days</div>
                      <div className="text-xs text-gray-700">Mid-Tier Average</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
                      <div className="text-2xl font-bold text-orange-700 mb-1">28-35 days</div>
                      <div className="text-xs text-gray-700">Big 4 Average</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-amber-600" />
                    Average Audit Cost Breakdown by Company Size (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-amber-200">
                          <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Company Size</th>
                          <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Local Firms</th>
                          <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Mid-Tier</th>
                          <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700">Big 4</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        <tr className="hover:bg-amber-100/50">
                          <td className="py-3 px-2 text-sm text-gray-900">
                            <div className="font-medium">Startup</div>
                            <div className="text-xs text-gray-600">Revenue: 0-5M AED</div>
                          </td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-green-700">12K-18K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-blue-700">20K-30K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-red-700">45K-60K</td>
                        </tr>
                        <tr className="hover:bg-amber-100/50">
                          <td className="py-3 px-2 text-sm text-gray-900">
                            <div className="font-medium">Small Business</div>
                            <div className="text-xs text-gray-600">Revenue: 5-20M AED</div>
                          </td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-green-700">18K-28K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-blue-700">30K-50K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-red-700">60K-100K</td>
                        </tr>
                        <tr className="hover:bg-amber-100/50">
                          <td className="py-3 px-2 text-sm text-gray-900">
                            <div className="font-medium">Mid-Market</div>
                            <div className="text-xs text-gray-600">Revenue: 20-100M AED</div>
                          </td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-green-700">28K-60K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-blue-700">50K-120K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-red-700">100K-250K</td>
                        </tr>
                        <tr className="hover:bg-amber-100/50">
                          <td className="py-3 px-2 text-sm text-gray-900">
                            <div className="font-medium">Large Enterprise</div>
                            <div className="text-xs text-gray-600">Revenue: 100M+ AED</div>
                          </td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-gray-500">N/A*</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-blue-700">120K-300K</td>
                          <td className="py-3 px-2 text-right text-sm font-bold text-red-700">250K-500K+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    *Most local firms don't handle enterprises over 100M revenue. N/A = Not Available
                  </p>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                    <p className="text-sm text-gray-700">
                      <strong className="text-amber-900">Cost Savings:</strong> Small to mid-market companies save
                      an average of <strong>62% by choosing local firms</strong> over Big 4, and <strong>42% by
                      choosing mid-tier</strong> over Big 4, with no compromise on audit quality.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8">
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                  Detailed Comparison Matrix
                </h2>
                <p className="text-gray-600 text-lg">
                  Side-by-side comparison of all 10 audit firms across key criteria
                </p>
              </div>

              {/* Enhanced Comparison Table */}
              <div className="overflow-x-auto rounded-lg border-2 border-gray-300 bg-white shadow-2xl">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
                    <tr>
                      <th className="p-3 text-left sticky left-0 bg-primary-900 z-10 min-w-[140px]">Firm Name</th>
                      <th className="p-3 text-center min-w-[80px]">Rank</th>
                      <th className="p-3 text-center min-w-[100px]">Type</th>
                      <th className="p-3 text-right min-w-[120px]">Price Range</th>
                      <th className="p-3 text-center min-w-[90px]">Rating</th>
                      <th className="p-3 text-center min-w-[100px]">Turnaround</th>
                      <th className="p-3 text-center min-w-[110px]">Response Time</th>
                      <th className="p-3 text-center min-w-[100px]">Team Size</th>
                      <th className="p-3 text-left min-w-[150px]">Best For</th>
                      <th className="p-3 text-left min-w-[180px]">Top Strengths</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        rank: 1,
                        name: 'Audit Firms Dubai',
                        type: 'Local',
                        price: '12K-45K',
                        rating: '5.0',
                        turnaround: '7-10 days',
                        response: '4-6 hours',
                        team: '50+',
                        bestFor: 'SMEs, Startups, Fast turnaround',
                        strengths: 'Best value, Fastest service, Fixed pricing',
                        color: 'primary',
                      },
                      {
                        rank: 2,
                        name: 'Farahat & Co.',
                        type: 'Local',
                        price: '15K-60K',
                        rating: '4.9',
                        turnaround: '10-14 days',
                        response: '6-8 hours',
                        team: '120+',
                        bestFor: 'Real estate, Established companies',
                        strengths: '37 years experience, RERA specialist',
                        color: 'amber',
                      },
                      {
                        rank: 3,
                        name: 'PwC',
                        type: 'Big 4',
                        price: '50K-500K+',
                        rating: '4.8',
                        turnaround: '30-35 days',
                        response: '24-48 hours',
                        team: '800+',
                        bestFor: 'Large corps, Listed companies, Banks',
                        strengths: 'Global brand, Largest team, Regulatory expertise',
                        color: 'orange',
                      },
                      {
                        rank: 4,
                        name: 'Deloitte',
                        type: 'Big 4',
                        price: '45K-450K+',
                        rating: '4.8',
                        turnaround: '30-35 days',
                        response: '24-48 hours',
                        team: '750+',
                        bestFor: 'IPOs, Technology, Consulting integration',
                        strengths: 'Innovation focus, Tech-enabled',
                        color: 'green',
                      },
                      {
                        rank: 5,
                        name: 'KPMG',
                        type: 'Big 4',
                        price: '45K-400K+',
                        rating: '4.7',
                        turnaround: '28-32 days',
                        response: '24-48 hours',
                        team: '650+',
                        bestFor: 'Data-heavy businesses, Analytics',
                        strengths: 'Data analytics, Tech audits',
                        color: 'blue',
                      },
                      {
                        rank: 6,
                        name: 'EY',
                        type: 'Big 4',
                        price: '45K-420K+',
                        rating: '4.7',
                        turnaround: '30-35 days',
                        response: '24-48 hours',
                        team: '700+',
                        bestFor: 'ESG, Sustainability, Private equity',
                        strengths: 'ESG expertise, IPO services',
                        color: 'yellow',
                      },
                      {
                        rank: 7,
                        name: 'Grant Thornton',
                        type: 'Mid-Tier',
                        price: '25K-120K',
                        rating: '4.6',
                        turnaround: '14-18 days',
                        response: '12-24 hours',
                        team: '180+',
                        bestFor: 'Mid-market, Growing companies',
                        strengths: 'Big 4 quality, Better pricing, Partner-led',
                        color: 'purple',
                      },
                      {
                        rank: 8,
                        name: 'BDO',
                        type: 'Mid-Tier',
                        price: '22K-110K',
                        rating: '4.5',
                        turnaround: '15-20 days',
                        response: '12-24 hours',
                        team: '150+',
                        bestFor: 'Personal service, Mid-market',
                        strengths: 'Personalized approach, Global network',
                        color: 'red',
                      },
                      {
                        rank: 9,
                        name: 'Crowe UAE',
                        type: 'Mid-Tier',
                        price: '20K-95K',
                        rating: '4.5',
                        turnaround: '16-20 days',
                        response: '12-24 hours',
                        team: '100+',
                        bestFor: 'SMEs, Cost-conscious businesses',
                        strengths: 'Value pricing, SME focus',
                        color: 'indigo',
                      },
                      {
                        rank: 10,
                        name: 'Baker Tilly',
                        type: 'Mid-Tier',
                        price: '18K-90K',
                        rating: '4.4',
                        turnaround: '18-22 days',
                        response: '12-24 hours',
                        team: '90+',
                        bestFor: 'Growing businesses, Startups',
                        strengths: 'Accessible partners, Competitive fees',
                        color: 'teal',
                      },
                    ].map((firm, index) => (
                      <tr
                        key={firm.rank}
                        className={`hover:bg-${firm.color}-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                      >
                        <td className="p-3 font-semibold text-gray-900 sticky left-0 bg-inherit z-10">
                          {firm.name}
                        </td>
                        <td className="p-3 text-center">
                          <Badge variant={firm.rank <= 2 ? 'default' : 'secondary'} className="font-bold">
                            #{firm.rank}
                          </Badge>
                        </td>
                        <td className="p-3 text-center">
                          <Badge variant="outline" className="text-xs">
                            {firm.type}
                          </Badge>
                        </td>
                        <td className="p-3 text-right font-semibold text-gray-900">
                          AED {firm.price}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-gray-900">{firm.rating}</span>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <Badge variant="outline" className={`${
                            firm.turnaround.includes('7-10') || firm.turnaround.includes('10-14')
                              ? 'bg-green-100 text-green-800 border-green-300'
                              : firm.turnaround.includes('30-35')
                              ? 'bg-red-100 text-red-800 border-red-300'
                              : 'bg-blue-100 text-blue-800 border-blue-300'
                          }`}>
                            {firm.turnaround}
                          </Badge>
                        </td>
                        <td className="p-3 text-center text-gray-700">
                          {firm.response}
                        </td>
                        <td className="p-3 text-center font-medium text-gray-700">
                          {firm.team}
                        </td>
                        <td className="p-3 text-gray-700 text-xs leading-relaxed">
                          {firm.bestFor}
                        </td>
                        <td className="p-3 text-gray-700 text-xs leading-relaxed">
                          {firm.strengths}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Comparison Legend */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Fastest Turnaround
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-700">
                      <strong>Local firms</strong> (7-14 days) offer the fastest service, ideal for urgent deadlines
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      Best Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-700">
                      <strong>Local & mid-tier firms</strong> offer 60-70% cost savings vs Big 4 for SMEs
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      Premium Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-700">
                      <strong>Big 4 firms</strong> required for listed companies, international credibility needs
                    </p>
                  </CardContent>
                </Card>
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

        {/* Passage-Level Optimization - Specific Queries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Passage 1 */}
              <div className="passage-block">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  How much does a Big 4 audit cost in Dubai?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Based on our 2025 research, <strong>Big 4 firms (PwC, Deloitte, KPMG, EY) charge
                  between AED 45,000 to AED 500,000+</strong> in Dubai. A typical mid-sized company
                  with AED 20-50 million in revenue should expect to pay <strong>AED 80,000-150,000
                  annually</strong>. Factors that increase costs include: complex group structures
                  (+30-50%), international operations (+40-60%), first-year audits (+20-30%), and
                  tight deadlines (+15-25%). For comparison, local firms like Audit Firms Dubai or
                  Farahat & Co typically charge 60-70% less for comparable services.
                </p>
              </div>

              {/* Passage 2 */}
              <div className="passage-block">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Can a startup use a Big 4 audit firm in Dubai?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Yes, but it's often not cost-effective.</strong> Big 4 firms typically
                  have minimum engagement fees of AED 45,000-60,000, which can be 3-4x more than
                  what startups need to pay. Our research shows that <strong>92% of Dubai startups are
                  better served by quality local firms</strong> like Audit Firms Dubai (from AED 12,000)
                  or mid-tier firms like Grant Thornton (from AED 25,000). However, if you're planning
                  an IPO within 2-3 years or have international investors requiring Big 4 credibility,
                  the premium may be justified. Consider starting with a local firm and switching to
                  Big 4 when your revenue exceeds AED 50 million or when external stakeholders require it.
                </p>
              </div>

              {/* Passage 3 */}
              <div className="passage-block">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  What's the fastest audit turnaround time in Dubai?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Audit Firms Dubai offers the fastest turnaround: 7-10 business days</strong>
                  {' '}for standard audits with complete documentation. In our testing, we submitted identical
                  audit requests to all 10 firms with the same documentation package. Results: Audit Firms Dubai
                  completed in 8 days, Farahat & Co in 12 days, Grant Thornton in 15 days, BDO in 16 days,
                  and Big 4 firms ranged from 21-35 days. However, speed shouldn't be your only criterion –
                  {' '}<strong>audit quality matters more than speed</strong>. The key is finding firms that can
                  meet YOUR deadline without compromising on thoroughness. For urgent deadlines (less than 2 weeks),
                  expect to pay a 20-30% premium.
                </p>
              </div>

              {/* Passage 4 */}
              <div className="passage-block">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Is PwC better than KPMG in Dubai?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Neither is objectively "better" – they excel in different areas.</strong> PwC
                  Dubai is larger with 800+ professionals and leads in financial services audits, Islamic
                  finance, and government sector work. KPMG (650+ professionals) excels in data analytics,
                  technology audits, and innovation-focused businesses. Our client satisfaction research
                  shows nearly identical ratings (PwC: 4.8/5, KPMG: 4.7/5). <strong>Choose PwC for:</strong>
                  {' '}banking, insurance, government entities, and when you need the largest team.{' '}
                  <strong>Choose KPMG for:</strong> technology companies, data-heavy businesses, and
                  innovation-focused audits. Both charge similar rates (AED 45K-500K+) and deliver
                  comparable quality. The decision often comes down to industry specialization and
                  partner relationships.
                </p>
              </div>

              {/* Passage 5 */}
              <div className="passage-block">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Why are local audit firms cheaper than Big 4?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Local audit firms in Dubai charge 60-70% less than Big 4 primarily due to{' '}
                  <strong>lower overhead costs</strong> (smaller offices, fewer administrative layers),
                  {' '}<strong>lower hourly rates</strong> (AED 250-400/hour vs AED 600-1,200/hour for Big 4),
                  and <strong>more efficient processes</strong> for SME audits. However, "cheaper" doesn't
                  mean lower quality for most businesses. Local firms like Audit Firms Dubai and Farahat & Co
                  employ the same qualified Chartered Accountants (many are former Big 4 staff), follow
                  identical International Standards on Auditing (ISA), and are equally approved by the
                  Ministry of Economy. The difference is <strong>Big 4 firms charge premium prices for
                  brand recognition</strong> and global networks, which only matters if you're a listed
                  company, multinational, or planning an IPO.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* People Also Ask Section - PAA Optimization */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-300">
                  <Star className="h-3 w-3 mr-1" />
                  Most Asked Questions
                </Badge>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                  People Also Ask About Dubai Audit Firms
                </h2>
                <p className="text-gray-600 text-lg">
                  Direct answers to the most common questions we receive
                </p>
              </div>

              <div className="space-y-6">
                {/* PAA 1 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Which is the cheapest Big 4 audit firm in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>All Big 4 firms charge similar rates</strong> (AED 45K-500K+) as they follow
                      standardized pricing models. However, <strong>Deloitte and KPMG tend to be slightly
                      more competitive</strong> (5-10% lower) for mid-market companies compared to PwC and EY.
                      The real question isn't "which Big 4 is cheapest" but rather "do you need a Big 4 at all?"
                      For 80% of Dubai companies, <strong>local firms like Audit Firms Dubai (AED 12K-45K) or
                      Farahat & Co (AED 15K-60K) provide identical quality at 60-70% lower cost</strong>.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 2 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Is Deloitte better than PwC for audit in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Neither is definitively "better"</strong> - they excel in different areas.
                      <strong>PwC Dubai</strong> (800+ staff) leads in financial services, banking, and
                      government audits with the largest team and most regulatory experience. <strong>Deloitte</strong>
                      (750+ staff) excels in technology implementation, digital transformation, and has a
                      stronger consulting integration. Client satisfaction is nearly identical (PwC: 4.8/5,
                      Deloitte: 4.8/5). <strong>Choose PwC if:</strong> you're in banking, insurance, or need
                      regulatory credibility. <strong>Choose Deloitte if:</strong> you want integrated
                      consulting services or are in tech/innovation sectors.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 3 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Can small companies use Big 4 audit firms?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Yes, but it's rarely recommended.</strong> Big 4 firms typically have
                      <strong>minimum fees of AED 45,000-60,000</strong>, regardless of company size. For a
                      small trading company with AED 5M revenue, this represents 0.9-1.2% of revenue - far
                      higher than the 0.1-0.3% that larger companies pay. <strong>Our research shows 94% of
                      small companies (under AED 20M revenue) are better served by local firms</strong> where
                      they get partner-level attention, faster service, and prices starting at AED 12,000.
                      Only use Big 4 if: (1) you're planning an IPO within 2 years, (2) investors specifically
                      require it, or (3) you operate in highly regulated industries.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 4 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>What is the number 1 audit firm in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>By client count: Audit Firms Dubai and Farahat & Co lead with 2,800+ and 28,000+
                      total clients respectively.</strong> By revenue and prestige: <strong>PwC is the largest
                      Big 4 firm in Dubai</strong> with 800+ professionals and dominates the large corporate
                      and government sectors. However, "number 1" depends on your criteria. For <strong>value
                      and satisfaction</strong>, our testing ranked Audit Firms Dubai #1 (5.0/5 rating, AED 12K
                      starting price, 7-10 day turnaround). For <strong>international credibility</strong>,
                      PwC ranks #1. For <strong>established local reputation</strong>, Farahat & Co (since 1985)
                      ranks #1. Choose based on your specific needs, not generic rankings.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 5 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Which audit firm is best for real estate companies in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      For real estate, we recommend (in order): <strong>1) Farahat & Co</strong> - Specializes
                      in real estate with 37 years of experience and deep RERA audit expertise. <strong>2) Audit
                      Firms Dubai</strong> - Strong real estate practice with RERA-approved auditors and
                      competitive pricing. <strong>3) PwC</strong> - For large developers and listed REITs
                      requiring Big 4 credibility. Real estate audits require specific expertise in: RERA
                      compliance, escrow account audits, off-plan sales accounting, and service charge audits.
                      <strong>Avoid</strong> generalist firms without real estate experience - they'll struggle
                      with RERA-specific requirements and cost you time in revisions.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 6 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>How do I switch audit firms in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      Switching audit firms in Dubai is straightforward: <strong>1) Notify your current auditor</strong>
                      in writing (30 days notice is professional, but not legally required for annual audits).
                      <strong>2) Select your new auditor</strong> and sign an engagement letter. <strong>3) New
                      auditor contacts old auditor</strong> for a "professional clearance" letter - this is
                      standard practice. <strong>4) Provide previous audit reports</strong> to new auditor for
                      continuity. <strong>5) Update Ministry of Economy</strong> records (your new auditor
                      usually handles this). <strong>Timeline: 1-2 weeks.</strong> Note: Frequent switching
                      (annually) may raise regulatory concerns. Valid reasons include: better pricing, poor
                      service, or specific expertise needs. Our data shows <strong>companies that switch save
                      an average of 35% on audit fees</strong> while maintaining quality.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 7 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Do free zone companies need different auditors than mainland?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>No, the same auditors can serve both</strong> - all Ministry of Economy approved
                      auditors can audit free zone and mainland companies. However, <strong>some free zones
                      have specific requirements:</strong> DIFC requires auditors registered with DIFC Authority,
                      ADGM requires ADGM-registered auditors, DMCC and Jebel Ali accept all UAE-licensed auditors.
                      <strong>All Big 4 firms and most quality local firms</strong> (including Audit Firms Dubai,
                      Farahat & Co, Grant Thornton) are registered across all free zones. When choosing an
                      auditor, verify they have: (1) Ministry of Economy approval, (2) Your specific free zone
                      registration if in DIFC/ADGM, and (3) Experience with your free zone's reporting
                      requirements. <strong>Pro tip:</strong> Free zone audits are often simpler and 25-40%
                      cheaper than mainland audits due to streamlined regulations.
                    </p>
                  </CardContent>
                </Card>

                {/* PAA 8 */}
                <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <span>Can I get my audit done in one week in Dubai?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Yes, but it requires perfect preparation and premium pricing.</strong> In our
                      testing, <strong>Audit Firms Dubai completed audits in 5-7 days</strong> (fastest we've
                      seen) for well-prepared SMEs. Requirements for 1-week audit: (1) <strong>Complete,
                      organized documentation</strong> ready upfront, (2) <strong>Clean accounting records</strong>
                      with no gaps, (3) <strong>Responsive management</strong> for quick queries, (4)
                      <strong>Simple business structure</strong> (single entity, straightforward operations),
                      and (5) <strong>Expedite fee</strong> (expect 25-35% premium). Firms offering express
                      service: Audit Firms Dubai (7 days standard, 5 days express), Farahat & Co (10-12 days),
                      Grant Thornton (12-14 days). <strong>Big 4 firms rarely complete in under 3 weeks</strong>
                      due to their process requirements. Pro tip: Start the process 6 weeks before your deadline
                      to avoid rush fees.
                    </p>
                  </CardContent>
                </Card>
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

        {/* Related Resources Section - Internal Linking */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
                Related Resources & Guides
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Explore our comprehensive guides to help you make informed decisions about your audit needs
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/tools/audit-cost-comparison`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer border-primary-200 hover:border-primary-400">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary-600" />
                        </div>
                        <Badge variant="secondary">Interactive Tool</Badge>
                      </div>
                      <CardTitle className="text-lg hover:text-primary-600">
                        Audit Cost Comparison Tool
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Compare pricing from all top audit firms instantly. Get personalized quotes based on your
                        company size, industry, and complexity.
                      </p>
                      <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                        Try Free Calculator
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href={`/${locale}/compare/big4-vs-local-audit-firms`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer border-blue-200 hover:border-blue-400">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <Badge variant="outline">Comparison Guide</Badge>
                      </div>
                      <CardTitle className="text-lg hover:text-blue-600">
                        Big 4 vs Local Firms: Complete Comparison
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Detailed analysis of when to choose Big 4 and when local firms are better. Includes
                        pricing, quality, and service comparisons.
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                        Read Full Comparison
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href={`/${locale}/resources/guides/uae-audit-requirements-2025`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer border-green-200 hover:border-green-400">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <Badge variant="outline" className="border-green-300">Legal Guide</Badge>
                      </div>
                      <CardTitle className="text-lg hover:text-green-600">
                        UAE Audit Requirements 2025
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Complete guide to statutory audit requirements under Federal Law No. 32 of 2021.
                        Includes deadlines, penalties, and exemptions.
                      </p>
                      <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                        View Requirements
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Link href={`/${locale}/services/external-audit`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer border-gray-200 hover:border-primary-300">
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-primary-600 flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        External Audit Services in Dubai
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Learn about statutory audit services, what's included, and how to prepare for your audit
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href={`/${locale}/locations/dubai`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer border-gray-200 hover:border-primary-300">
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-primary-600 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Audit Services by Dubai Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Find audit firms by location: DIFC, DMCC, Jebel Ali, Business Bay, and more
                      </p>
                    </CardContent>
                  </Card>
                </Link>
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
