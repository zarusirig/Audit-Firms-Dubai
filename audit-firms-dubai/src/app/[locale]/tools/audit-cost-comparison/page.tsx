import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BarChart3, DollarSign, CheckCircle2, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import AuditCostComparison from '@/components/tools/AuditCostComparison'

type Props = {
  params: Promise<{ locale: string }>
}

// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Page metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Audit Cost Comparison | Big 4 vs Local Firms in Dubai',
    description: 'Compare audit costs between Big 4 firms and local auditors in Dubai. Get transparent pricing, understand value differences, and find the right audit firm for your business.',
    keywords: [
      'audit cost comparison dubai',
      'big 4 audit fees',
      'local audit firm pricing',
      'audit cost calculator',
      'audit pricing dubai',
      'audit firm comparison',
      'audit fees uae',
      'audit cost breakdown',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/audit-cost-comparison`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/audit-cost-comparison`,
        ar: `${SITE_CONFIG.url}/ar/tools/audit-cost-comparison`,
      },
    },
    openGraph: {
      title: 'Audit Cost Comparison | Big 4 vs Local Firms in Dubai',
      description: 'Compare audit costs between Big 4 firms and local auditors in Dubai. Get transparent pricing and understand value differences.',
      url: `${SITE_CONFIG.url}/${locale}/tools/audit-cost-comparison`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function AuditCostComparisonPage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Audit Cost Comparison Tool',
            description: 'Compare audit costs between Big 4 and local firms in Dubai',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'AED',
            },
            provider: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai (Farahat & Co)',
            },
          }),
        }}
      />

      <article className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" size="sm">
              <Link href={`/${locale}/tools`} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </div>

        {/* Header */}
        <header className="border-b bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="default" className="mb-4 gap-1">
                <BarChart3 className="h-3 w-3" />
                Free Cost Comparison Tool
              </Badge>

              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Audit Cost Comparison
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                Compare audit costs between Big 4 firms and local auditors in Dubai.
                Get transparent pricing estimates and understand what you get for your money.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Real Market Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Instant Estimates</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Comparison Tool */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <AuditCostComparison />
            </div>
          </div>
        </section>

        {/* Why Compare Costs */}
        <section className="border-t bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Why Audit Costs Matter
                </h2>
                <p className="text-lg text-gray-600">
                  Understanding audit pricing helps you make informed decisions about your audit partner
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Cost vs. Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      The cheapest audit isn't always the best value. Consider factors like
                      audit quality, industry expertise, technology used, and client service
                      when evaluating audit firms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      Hidden Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Some firms offer low base fees but charge extra for essential services
                      like travel, additional procedures, or report amendments. Always ask
                      for a complete fee proposal upfront.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="border-blue-200 bg-blue-50/30">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      Need a Custom Audit Quote?
                    </h3>
                    <p className="mb-6 text-gray-700">
                      Our transparent pricing model ensures you get exactly what you pay for.
                      No hidden fees, no surprises, just professional audit services.
                    </p>
                    <Button asChild size="lg">
                      <Link href={`/${locale}/contact`}>Get Custom Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Big 4 vs Local Comparison Table */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Big 4 vs Local Audit Firms
                </h2>
                <p className="text-lg text-gray-600">
                  Understanding the key differences helps you choose the right audit partner
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-4 text-left font-semibold">Factor</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Big 4 Firms</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Local Firms</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Elite Audit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-4 font-medium">Pricing Range</td>
                      <td className="border border-gray-200 p-4 text-center">High (AED 50K-200K+)</td>
                      <td className="border border-gray-200 p-4 text-center">Medium (AED 15K-80K)</td>
                      <td className="border border-gray-200 p-4 text-center bg-blue-50">Competitive (AED 12K-60K)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium">Global Recognition</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-4 font-medium">Industry Expertise</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center">Limited</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium">Technology & Tools</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center">Basic</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-4 font-medium">Ministry Approval</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium">Local Market Knowledge</td>
                      <td className="border border-gray-200 p-4 text-center">Limited</td>
                      <td className="border border-gray-200 p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="border border-gray-200 p-4 text-center bg-blue-50"><CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-4 font-medium">Response Time</td>
                      <td className="border border-gray-200 p-4 text-center">Slow</td>
                      <td className="border border-gray-200 p-4 text-center">Fast</td>
                      <td className="border border-gray-200 p-4 text-center bg-blue-50">Very Fast</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Your Audit Quote?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Get transparent, competitive pricing with the same quality standards as Big 4 firms.
              No hidden fees, no surprises, just professional audit services you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={`/${locale}/calculator`}>Use Fee Calculator</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}





