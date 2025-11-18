import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import MaterialityCalculator from '@/components/tools/MaterialityCalculator'

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
    title: 'Audit Materiality Calculator | Professional Audit Threshold Calculator',
    description: 'Calculate audit materiality thresholds for your business. Professional calculator for UAE companies with industry benchmarks and expert guidance from Farahat & Co.',
    keywords: [
      'audit materiality calculator',
      'materiality threshold calculator',
      'audit materiality uae',
      'materiality calculation',
      'audit planning materiality',
      'materiality benchmarks',
      'audit risk assessment',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/materiality-calculator`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/materiality-calculator`,
        ar: `${SITE_CONFIG.url}/ar/tools/materiality-calculator`,
      },
    },
    openGraph: {
      title: 'Audit Materiality Calculator | Professional Audit Threshold Calculator',
      description: 'Calculate audit materiality thresholds for your business. Professional calculator for UAE companies with industry benchmarks.',
      url: `${SITE_CONFIG.url}/${locale}/tools/materiality-calculator`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function MaterialityCalculatorPage({ params }: Props) {
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
            name: 'Audit Materiality Calculator',
            description: 'Professional audit materiality threshold calculator for UAE businesses',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'AED',
            },
            provider: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
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
                <Calculator className="h-3 w-3" />
                Free Professional Tool
              </Badge>

              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Audit Materiality Calculator
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                Calculate professional audit materiality thresholds for your UAE business.
                Get expert-recommended benchmarks and understand how materiality affects your audit.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Industry Benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Instant Results</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <MaterialityCalculator />
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="border-t bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Understanding Audit Materiality
                </h2>
                <p className="text-lg text-gray-600">
                  Learn how materiality affects your audit process and financial reporting
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      What is Audit Materiality?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Audit materiality is the threshold above which missing or incorrect information
                      in financial statements is considered to have an impact on the decision-making
                      of users. It helps auditors determine the nature, timing, and extent of audit procedures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      Why Materiality Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Proper materiality assessment ensures audit efficiency and focuses on areas
                      that truly matter. Too high a materiality level may miss important misstatements,
                      while too low increases audit costs unnecessarily.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="border-blue-200 bg-blue-50/30">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      Need Help with Materiality Assessment?
                    </h3>
                    <p className="mb-6 text-gray-700">
                      Our audit professionals can help you determine the right materiality level
                      for your specific business circumstances and industry requirements.
                    </p>
                    <Button asChild size="lg">
                      <Link href={`/${locale}/contact`}>Speak with an Expert</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Discuss Your Audit Needs?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Our Ministry-approved auditors provide comprehensive audit services with
              proper materiality assessments tailored to your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={`/${locale}/calculator`}>Get Audit Fee Estimate</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

