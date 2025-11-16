import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Building2, TrendingUp, Shield, Award } from 'lucide-react'

import { AuditFeeCalculator } from '@/components/calculator/AuditFeeCalculator'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CalculatorSchema,
  CalculatorFAQSchema,
  CalculatorHowToSchema,
} from '@/components/seo/schemas/CalculatorSchema'
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
    title: 'Audit Fee Calculator Dubai | Instant Price Estimate | Farahat & Co',
    description:
      'Calculate your audit fees instantly with our free online calculator. Get accurate price estimates for external audit, internal audit, RERA audit & more in Dubai. Ministry-approved auditors since 1985.',
    keywords: [
      'audit fee calculator',
      'audit cost calculator dubai',
      'external audit fees uae',
      'audit price estimate',
      'how much does audit cost',
      'audit pricing calculator',
      'free audit calculator',
      'audit cost estimation',
      'audit fees dubai',
      'calculate audit price',
    ],
    openGraph: {
      title: 'Free Audit Fee Calculator - Get Instant Estimate | Dubai',
      description:
        'Calculate your audit costs in 3 easy steps. Accurate pricing for all audit types in UAE. Ministry-approved auditors.',
      url: `${SITE_CONFIG.url}/${locale}/calculator`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-calculator.jpg`,
          width: 1200,
          height: 630,
          alt: 'Audit Fee Calculator - Farahat & Co',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Audit Fee Calculator | Dubai UAE',
      description: 'Get instant audit cost estimates. Ministry-approved auditors since 1985.',
      images: [`${SITE_CONFIG.url}/og-calculator.jpg`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/calculator`,
      languages: {
        en: `${SITE_CONFIG.url}/en/calculator`,
        ar: `${SITE_CONFIG.url}/ar/calculator`,
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

// Calculator Page Component
export default async function CalculatorPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  // Parse URL params for shared calculations
  const urlParams = new URLSearchParams()
  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    if (value) {
      urlParams.set(key, Array.isArray(value) ? value[0] : value)
    }
  })

  return (
    <>
      {/* Schema Markup for SEO */}
      <CalculatorSchema />
      <CalculatorFAQSchema />
      <CalculatorHowToSchema />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Free Calculator Tool
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Audit Fee Calculator
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl w-full mx-auto text-center px-4 whitespace-normal">
              Get an accurate estimate of your audit costs in just 3 simple steps. Our intelligent
              calculator considers your company size, industry, complexity, and timeline to provide
              personalized pricing.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm whitespace-normal">Ministry Approved</p>
                  <p className="text-xs text-muted-foreground whitespace-normal">Since 1985</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm whitespace-normal">28,000+</p>
                  <p className="text-xs text-muted-foreground whitespace-normal">Clients Served</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm whitespace-normal">140 Countries</p>
                  <p className="text-xs text-muted-foreground whitespace-normal">Global Reach</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm whitespace-normal">37 Years</p>
                  <p className="text-xs text-muted-foreground whitespace-normal">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                  <p className="text-muted-foreground">Loading calculator...</p>
                </div>
              </div>
            }
          >
            <AuditFeeCalculator />
          </Suspense>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">How Our Calculator Works</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl w-full mx-auto text-center px-4 whitespace-normal">
              Our sophisticated pricing algorithm considers multiple factors to provide you with the most
              accurate audit fee estimate
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Enter Company Details</h3>
                  <p className="text-sm text-muted-foreground whitespace-normal">
                    Provide information about your company type, industry, and size. All data is kept
                    confidential and never stored without your consent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Specify Requirements</h3>
                  <p className="text-sm text-muted-foreground whitespace-normal">
                    Select complexity factors and timeline needs. Our calculator adjusts pricing based on
                    audit scope and urgency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Get Instant Estimate</h3>
                  <p className="text-sm text-muted-foreground whitespace-normal">
                    Receive a detailed price breakdown, timeline estimate, and personalized recommendations
                    for your audit engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Considered Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Factors We Consider</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl w-full mx-auto text-center whitespace-normal">
              Our calculator uses industry-standard pricing models and our 37 years of experience to
              estimate your audit fees based on:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Company Revenue',
                  desc: 'Higher revenue typically means more transactions to audit',
                },
                {
                  title: 'Industry Sector',
                  desc: 'Some industries require specialized audit procedures',
                },
                {
                  title: 'Company Structure',
                  desc: 'LLC, Free Zone, Branch - each has different requirements',
                },
                {
                  title: 'Number of Locations',
                  desc: 'Multi-location businesses require additional coordination',
                },
                {
                  title: 'Complexity Factors',
                  desc: 'International operations, group structures, etc.',
                },
                {
                  title: 'Service Timeline',
                  desc: 'Express service requires additional resources',
                },
                {
                  title: 'Audit History',
                  desc: 'First-time audits require extra verification work',
                },
                {
                  title: 'Regulatory Requirements',
                  desc: 'Industry-specific compliance needs',
                },
                {
                  title: 'Employee Count',
                  desc: 'Larger organizations have more complex systems',
                },
              ].map((factor, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-1">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-normal">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Farahat & Co</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl w-full mx-auto text-center whitespace-normal">
              With 37 years of experience and 28,000+ satisfied clients, we're Dubai's trusted audit
              partner
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div>
                <h3 className="font-bold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground whitespace-normal">
                  No hidden fees. Clear, upfront pricing with detailed breakdowns.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground whitespace-normal">
                  Express service available. Meet your deadlines without compromising quality.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground whitespace-normal">
                  Certified professionals (CPA, CA, ACCA, CIA) with deep UAE expertise.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Ministry Approved</h3>
                <p className="text-sm text-muted-foreground whitespace-normal">
                  Officially recognized by UAE Ministry of Economy and regulatory bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content for SEO */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate whitespace-normal">
            <h2>Understanding Audit Fees in Dubai</h2>

            <p>
              Audit fees in Dubai vary significantly based on multiple factors including company size,
              industry complexity, and regulatory requirements. The UAE Ministry of Economy mandates annual
              audits for most business entities, making it crucial to budget appropriately for this
              essential compliance requirement.
            </p>

            <h3>What Determines Audit Costs?</h3>

            <p>
              Audit pricing is not arbitrary. Professional audit firms like Farahat & Co calculate fees
              based on the estimated time and expertise required to complete the engagement according to
              International Standards on Auditing (ISA). Key factors include:
            </p>

            <ul>
              <li>
                <strong>Company Revenue:</strong> Higher revenue companies typically have more transactions,
                requiring additional testing and verification procedures.
              </li>
              <li>
                <strong>Industry Complexity:</strong> Regulated industries like financial services, real
                estate (RERA), and healthcare require specialized audit procedures and compliance checks.
              </li>
              <li>
                <strong>Group Structures:</strong> Companies with subsidiaries or complex group structures
                require consolidated financial statement audits.
              </li>
              <li>
                <strong>First-Time Audits:</strong> Initial audits require verification of opening
                balances and prior period adjustments, adding to the scope of work.
              </li>
            </ul>

            <h3>Average Audit Costs in Dubai (2025)</h3>

            <p>
              Based on current market rates and our extensive experience, typical audit fees in Dubai range
              from AED 8,000 for small sole proprietorships to AED 200,000+ for large corporations with
              complex operations. Use our calculator above for a personalized estimate based on your
              specific circumstances.
            </p>

            <h3>How to Reduce Audit Costs</h3>

            <p>
              While maintaining audit quality is non-negotiable, there are legitimate ways to optimize your
              audit investment:
            </p>

            <ol>
              <li>Maintain organized financial records throughout the year</li>
              <li>Implement strong internal controls to reduce substantive testing</li>
              <li>Prepare required documents in advance to minimize fieldwork time</li>
              <li>Choose standard timelines instead of express service when possible</li>
              <li>Consider quarterly reviews to spread costs and reduce year-end surprises</li>
            </ol>

            <h3>When to Use This Calculator</h3>

            <p>
              Our audit fee calculator is ideal for budgeting purposes, comparing quotes from different
              firms, or understanding how different factors affect pricing. However, for a binding quote,
              we recommend scheduling a consultation where we can review your specific circumstances in
              detail.
            </p>

            <div className="not-prose mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h3 className="text-lg font-bold mb-2">Need a Detailed Quote?</h3>
              <p className="mb-4 whitespace-normal">
                Get a customized proposal from our audit specialists within 24 hours. Call us at{' '}
                <a href="tel:+97142500251" className="text-primary font-semibold">
                  +971 42 500 251
                </a>{' '}
                or request a quote online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
