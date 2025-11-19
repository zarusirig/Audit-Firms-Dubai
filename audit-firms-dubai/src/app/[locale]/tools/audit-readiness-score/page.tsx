import { Suspense } from 'react'
import type { Metadata } from 'next'
import { CheckCircle2, AlertTriangle, TrendingUp, Award } from 'lucide-react'

import { AuditReadinessAssessment } from '@/components/tools/AuditReadinessAssessment'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/constants'
import type { Locale } from '@/lib/i18n/config'

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Audit Readiness Score | Free Assessment Tool | Audit Firms Dubai',
    description:
      'Assess your company\'s audit readiness with our free 15-question evaluation. Get a personalized score, recommendations, and detailed report. Prepare for external audit with confidence.',
    keywords: [
      'audit readiness assessment',
      'audit preparation checklist',
      'audit readiness score',
      'prepare for audit',
      'audit assessment tool',
      'audit readiness quiz',
      'external audit preparation',
      'audit readiness uae',
      'audit readiness dubai',
    ],
    openGraph: {
      title: 'Free Audit Readiness Assessment | Get Your Score',
      description:
        'Find out if your company is ready for an audit. 15-question assessment with instant scoring and personalized recommendations.',
      url: `${SITE_CONFIG.url}/${locale}/tools/audit-readiness-score`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-audit-readiness.jpg`,
          width: 1200,
          height: 630,
          alt: 'Audit Readiness Assessment - Audit Firms Dubai',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Audit Readiness Score | Free Assessment',
      description: 'Assess your audit preparedness in 5 minutes. Get actionable recommendations.',
      images: [`${SITE_CONFIG.url}/og-audit-readiness.jpg`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/tools/audit-readiness-score`,
      languages: {
        en: `${SITE_CONFIG.url}/en/tools/audit-readiness-score`,
        ar: `${SITE_CONFIG.url}/ar/tools/audit-readiness-score`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Audit Readiness Score Page Component
export default async function AuditReadinessScorePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Audit Readiness Score Assessment',
            description:
              'Free online assessment tool to evaluate company audit readiness with personalized recommendations',
            url: `${SITE_CONFIG.url}/${resolvedParams.locale}/tools/audit-readiness-score`,
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'AED',
            },
            provider: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai (Farahat & Co)',
              url: SITE_CONFIG.url,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 text-white sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-blue-700">
              Free Assessment Tool
            </Badge>

            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Audit Readiness Score
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
              Is your company prepared for an external audit? Take our comprehensive 15-question
              assessment to discover your audit readiness score and get personalized recommendations
              to fill any gaps.
            </p>

            {/* Trust Indicators */}
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">15 Questions</p>
                  <p className="text-xs text-blue-200">5 min assessment</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Instant Score</p>
                  <p className="text-xs text-blue-200">0-100 rating</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Gap Analysis</p>
                  <p className="text-xs text-blue-200">Identify risks</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold">Free Report</p>
                  <p className="text-xs text-blue-200">Detailed PDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tool */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="text-center">Loading assessment...</div>}>
            <AuditReadinessAssessment />
          </Suspense>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Why Assess Your Audit Readiness?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Avoid Delays</h3>
                  <p className="text-gray-600">
                    Identify documentation gaps and organizational issues before the audit starts,
                    saving weeks of delays and back-and-forth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Reduce Costs</h3>
                  <p className="text-gray-600">
                    Better preparation means less auditor time spent waiting for documents or
                    clarifications, directly reducing your audit fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Minimize Findings</h3>
                  <p className="text-gray-600">
                    Proactively address control weaknesses and compliance issues before auditors
                    discover them in their testing.
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
                  <h3 className="mb-2 text-lg font-bold">How is the readiness score calculated?</h3>
                  <p className="text-gray-600">
                    Your score is based on 15 questions across four categories: Financial Record
                    Organization (33%), Compliance Status (20%), Documentation Completeness (27%),
                    and Team Preparedness (20%). Each question is weighted by importance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    What does my score mean for the audit?
                  </h3>
                  <p className="text-gray-600">
                    Scores 0-40 indicate high risk and significant preparation needed. Scores 41-70
                    suggest medium risk with some improvements required. Scores 71-100 indicate low
                    risk and audit readiness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">Is this assessment really free?</h3>
                  <p className="text-gray-600">
                    Yes, completely free with no obligations. We provide the instant score and basic
                    recommendations immediately. A detailed PDF report is available via email.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold">
                    How long does the assessment take?
                  </h3>
                  <p className="text-gray-600">
                    Most companies complete the 15 questions in 5-7 minutes. You can save your
                    progress and return later if needed.
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
