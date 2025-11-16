import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Calculator, TrendingUp, Info, Award } from 'lucide-react'

import { MaterialityCalculatorTool } from '@/components/tools/MaterialityCalculatorTool'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/constants'
import type { Locale } from '@/lib/i18n/config'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Materiality Calculator | Free Audit Tool | Elite Audit Dubai',
    description:
      'Calculate audit materiality thresholds for your company. Free online tool with industry benchmarks. Understand what level of misstatement is material for financial statement audits.',
    keywords: [
      'materiality calculator',
      'audit materiality',
      'materiality threshold',
      'audit materiality calculation',
      'ifrs materiality',
      'planning materiality',
      'performance materiality',
      'materiality benchmarks',
      'audit significance level',
    ],
    openGraph: {
      title: 'Free Materiality Calculator | Audit Tool',
      description:
        'Calculate audit materiality thresholds based on revenue, assets, or profit. Industry benchmarks included.',
      url: `${SITE_CONFIG.url}/${locale}/tools/materiality-calculator`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Materiality Calculator | Free Audit Tool',
      description: 'Calculate audit materiality thresholds with industry benchmarks',
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/materiality-calculator`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/materiality-calculator`,
        ar: `${SITE_CONFIG.url}/ar/tools/materiality-calculator`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function MaterialityCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Audit Materiality Calculator',
            description:
              'Free online calculator for determining audit materiality thresholds based on financial metrics',
            url: `${SITE_CONFIG.url}/${resolvedParams.locale}/tools/materiality-calculator`,
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'AED',
            },
            provider: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
              url: SITE_CONFIG.url,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-16 text-white sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-purple-700">
              Free Calculator Tool
            </Badge>

            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Materiality Calculator
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-purple-100">
              Calculate audit materiality thresholds for your company based on revenue, assets, or
              profit. Understand what level of misstatement is considered material for financial
              statement audits.
            </p>

            {/* Trust Indicators */}
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Instant Results</p>
                  <p className="text-xs text-purple-200">Real-time calculation</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Industry Benchmarks</p>
                  <p className="text-xs text-purple-200">Standard ranges</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Educational</p>
                  <p className="text-xs text-purple-200">Learn concepts</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Professional</p>
                  <p className="text-xs text-purple-200">Auditor-approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Tool */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="text-center">Loading calculator...</div>}>
            <MaterialityCalculatorTool />
          </Suspense>
        </div>
      </section>

      {/* What is Materiality */}
      <section className="border-t bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              What is Audit Materiality?
            </h2>
            <div className="prose prose-lg mx-auto max-w-none">
              <p>
                <strong>Materiality</strong> is a fundamental concept in financial statement audits
                that defines the threshold above which misstatements or omissions could reasonably
                influence the economic decisions of users relying on the financial statements.
              </p>

              <div className="my-6 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-purple-700">
                      Planning Materiality
                    </h3>
                    <p className="text-sm text-gray-600">
                      The maximum amount by which the auditor believes the financial statements
                      could be misstated and still not affect users' decisions. Used to plan audit
                      procedures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-purple-700">
                      Performance Materiality
                    </h3>
                    <p className="text-sm text-gray-600">
                      Set at a lower level than planning materiality (typically 50-75%) to reduce
                      the risk that aggregate uncorrected misstatements exceed materiality.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-purple-700">
                      Specific Materiality
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lower materiality levels applied to specific account balances or transactions
                      that are particularly sensitive (e.g., related party transactions).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3>Why Materiality Matters</h3>
              <ul>
                <li>
                  <strong>Audit Efficiency:</strong> Helps auditors focus on items that truly
                  matter to financial statement users
                </li>
                <li>
                  <strong>Professional Judgment:</strong> Requires careful consideration of both
                  quantitative and qualitative factors
                </li>
                <li>
                  <strong>Risk Assessment:</strong> Influences the nature, timing, and extent of
                  audit procedures
                </li>
                <li>
                  <strong>Reporting Decisions:</strong> Determines whether identified misstatements
                  require adjustment or disclosure
                </li>
              </ul>

              <h3>Industry Benchmarks</h3>
              <p>
                While materiality calculation involves professional judgment, common benchmarks
                include:
              </p>
              <ul>
                <li>
                  <strong>0.5% - 2% of revenue</strong> (most common for profit-oriented entities)
                </li>
                <li>
                  <strong>0.5% - 1% of total assets</strong> (for asset-intensive businesses)
                </li>
                <li>
                  <strong>5% - 10% of profit before tax</strong> (for highly profitable companies)
                </li>
                <li>
                  <strong>1% - 2% of equity</strong> (for financial institutions)
                </li>
              </ul>

              <Card className="my-6 border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-6">
                  <p className="font-medium text-purple-900">
                    <Info className="mb-2 inline h-5 w-5" /> Important Note
                  </p>
                  <p className="text-sm text-gray-700">
                    This calculator provides estimates based on common industry benchmarks.
                    Professional auditors consider additional qualitative factors including company
                    circumstances, industry norms, regulatory requirements, and user needs when
                    determining final materiality levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    How do auditors calculate materiality?
                  </h3>
                  <p className="text-gray-600">
                    Auditors typically start with a quantitative benchmark (like 0.5-2% of revenue)
                    and then adjust based on qualitative factors such as company volatility,
                    regulatory environment, user sophistication, and specific risks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    What's the difference between planning and performance materiality?
                  </h3>
                  <p className="text-gray-600">
                    Planning materiality is the overall threshold for financial statements.
                    Performance materiality is set lower (often 50-75% of planning materiality) to
                    reduce the risk that multiple small misstatements exceed planning materiality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    Can materiality change during an audit?
                  </h3>
                  <p className="text-gray-600">
                    Yes. If auditors discover significant issues or if company circumstances change
                    materially, they may revise materiality levels and adjust audit procedures
                    accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    Is lower materiality better?
                  </h3>
                  <p className="text-gray-600">
                    Not necessarily. Lower materiality means more detailed audit work and higher
                    costs. The goal is to set materiality at an appropriate level that balances
                    audit quality with efficiency, considering the needs of financial statement
                    users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
