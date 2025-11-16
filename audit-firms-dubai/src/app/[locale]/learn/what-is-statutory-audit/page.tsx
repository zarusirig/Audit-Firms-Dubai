import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, FileText, Shield, AlertTriangle, ArrowRight, Calendar, Building2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
    title: 'What is Statutory Audit in UAE? Complete Guide 2025 | Elite Audit Dubai',
    description:
      'Complete guide to statutory audit in UAE. Learn what statutory audit means, legal requirements, who needs it, process, timeline, and costs. Expert guidance from Ministry-approved auditors.',
    keywords: [
      'what is statutory audit',
      'statutory audit meaning',
      'statutory audit uae',
      'statutory audit requirements dubai',
      'statutory audit process',
      'statutory audit definition',
      'statutory vs external audit',
      'statutory audit cost uae',
      'who needs statutory audit',
      'statutory audit deadline uae',
    ],
    openGraph: {
      title: 'What is Statutory Audit in UAE? Complete Guide',
      description:
        'Learn everything about statutory audit in UAE including requirements, process, timeline, and costs from Ministry-approved auditors.',
      url: `${SITE_CONFIG.url}/${locale}/learn/what-is-statutory-audit`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'What is Statutory Audit in UAE? Complete Guide',
      description:
        'Comprehensive guide to statutory audit requirements, process, and timeline in UAE',
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/learn/what-is-statutory-audit`,
      languages: {
        en: `${SITE_CONFIG.url}/en/learn/what-is-statutory-audit`,
        ar: `${SITE_CONFIG.url}/ar/learn/what-is-statutory-audit`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function WhatIsStatutoryAuditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What is Statutory Audit in UAE? Complete Guide 2025',
            description:
              'Comprehensive guide to statutory audit requirements, process, and compliance in the United Arab Emirates',
            author: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
            },
            datePublished: '2025-01-15',
            dateModified: '2025-01-15',
            publisher: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}/logo.png`,
              },
            },
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
                name: 'What is statutory audit in UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A statutory audit in UAE is a legally mandated examination of a company\'s financial statements and records by an independent, Ministry-approved auditor. It verifies that financial statements present a true and fair view and comply with UAE regulations and International Financial Reporting Standards (IFRS).',
                },
              },
              {
                '@type': 'Question',
                name: 'Who needs a statutory audit in UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All UAE mainland companies registered with the Department of Economic Development (DED) must conduct annual statutory audits. This includes LLCs, public and private joint stock companies, branches of foreign companies, and specific free zone entities.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does a statutory audit cost in UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Statutory audit costs in UAE typically range from AED 8,000 to AED 50,000+ depending on company size, complexity, and transaction volume. Small companies: AED 8,000-15,000, Medium companies: AED 15,000-35,000, Large companies: AED 35,000-100,000+.',
                },
              },
              {
                '@type': 'Question',
                name: 'When is the statutory audit deadline in UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Companies must file audited financial statements with the DED within 3-6 months after the financial year-end, depending on company size. Large companies: 90 days, Medium companies: 120 days, Small companies: 150 days.',
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 text-white sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-4 bg-white text-blue-700">
                Educational Guide
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                What is Statutory Audit in UAE?
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
                Complete guide to statutory audit requirements, process, timeline, and costs in the
                United Arab Emirates. Everything you need to know explained by Ministry-approved
                auditors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/calculator">Calculate Audit Fees</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="border-b bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Table of Contents</h2>
              <div className="grid gap-2 md:grid-cols-2">
                <a href="#definition" className="text-blue-600 hover:underline">
                  → Definition & Meaning
                </a>
                <a href="#legal-requirements" className="text-blue-600 hover:underline">
                  → Legal Requirements
                </a>
                <a href="#who-needs-it" className="text-blue-600 hover:underline">
                  → Who Needs Statutory Audit
                </a>
                <a href="#process" className="text-blue-600 hover:underline">
                  → Audit Process & Timeline
                </a>
                <a href="#vs-external-audit" className="text-blue-600 hover:underline">
                  → Statutory vs External Audit
                </a>
                <a href="#costs" className="text-blue-600 hover:underline">
                  → Costs & Pricing
                </a>
                <a href="#deadlines" className="text-blue-600 hover:underline">
                  → Deadlines & Filing
                </a>
                <a href="#faq" className="text-blue-600 hover:underline">
                  → Frequently Asked Questions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg prose-blue mx-auto max-w-4xl">
              {/* Definition */}
              <div id="definition" className="scroll-mt-20">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                  <FileText className="h-8 w-8 text-blue-600" />
                  What is Statutory Audit? Definition & Meaning
                </h2>
                <Card className="mb-8 border-2 border-blue-100 bg-blue-50">
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium text-gray-900">
                      A <strong>statutory audit</strong> is a legally mandated examination of a
                      company's financial statements, books, and records by an independent,
                      Ministry-approved external auditor.
                    </p>
                    <p className="mt-4 text-gray-700">
                      The purpose is to verify that the financial statements present a "true and
                      fair view" of the company's financial position and comply with applicable
                      laws, regulations, and accounting standards (primarily IFRS in the UAE).
                    </p>
                  </CardContent>
                </Card>

                <p>
                  Unlike voluntary audits or internal reviews, statutory audits are{' '}
                  <strong>mandatory by law</strong> for certain types of companies. The auditor
                  must be licensed and approved by the UAE Ministry of Economy and must be
                  independent of the company being audited.
                </p>

                <h3>Key Characteristics of Statutory Audit:</h3>
                <ul>
                  <li>
                    <strong>Legal Requirement:</strong> Mandated by UAE Commercial Companies Law
                    (Federal Law No. 32 of 2021)
                  </li>
                  <li>
                    <strong>Independence:</strong> Performed by external auditors with no
                    relationship to the company
                  </li>
                  <li>
                    <strong>Annual Frequency:</strong> Must be conducted every financial year
                  </li>
                  <li>
                    <strong>Standardized Reporting:</strong> Auditor's opinion follows
                    International Standards on Auditing (ISA)
                  </li>
                  <li>
                    <strong>Regulatory Filing:</strong> Results must be filed with government
                    authorities (DED, free zone authorities)
                  </li>
                </ul>
              </div>

              {/* Legal Requirements */}
              <div id="legal-requirements" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                  <Shield className="h-8 w-8 text-blue-600" />
                  Legal Requirements in UAE
                </h2>

                <p>
                  The statutory audit requirement in the UAE is governed by{' '}
                  <strong>Federal Law No. 32 of 2021</strong> (the UAE Commercial Companies Law)
                  and regulations issued by the Ministry of Economy.
                </p>

                <h3>Regulatory Framework:</h3>
                <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Federal Law No. 32 of 2021</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Main commercial companies law requiring annual audits for all mainland
                        companies
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ministry of Economy Resolutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Auditor licensing, approval process, audit quality requirements
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">IFRS Standards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        International Financial Reporting Standards adopted as accounting framework
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ISA Standards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        International Standards on Auditing govern audit methodology and reporting
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Who Needs It */}
              <div id="who-needs-it" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  Who Needs a Statutory Audit in UAE?
                </h2>

                <p>The following entities are required to conduct annual statutory audits:</p>

                <div className="not-prose my-6">
                  <Card className="mb-4 border-l-4 border-l-green-500">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <CardTitle>Mainland Companies (DED Registered)</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>All Limited Liability Companies (LLC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Public Joint Stock Companies (PJSC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Private Joint Stock Companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Branches of foreign companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Partnership companies (in certain cases)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mb-4 border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <CardTitle>Free Zone Companies</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>DIFC (Dubai International Financial Centre) - Mandatory</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>ADGM (Abu Dhabi Global Market) - Mandatory</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>JAFZA, DMCC, and other free zones - Often mandatory</span>
                        </li>
                        <li className="mt-2 text-xs text-gray-600">
                          Note: Requirements vary by free zone authority
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-amber-500">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600" />
                        <CardTitle>Specific Industries</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Real estate developers (RERA audit requirement)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Financial institutions (Central Bank regulated)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Healthcare providers (DOH/HAAD requirements)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>Educational institutions (KHDA regulated)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6 border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <CardTitle className="text-red-900">
                        Exemptions (Limited Cases)
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Very small sole proprietorships and certain civil companies may be exempt,
                      but exemptions are rare. Always confirm with your licensing authority.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Process & Timeline */}
              <div id="process" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  Statutory Audit Process & Timeline
                </h2>

                <p>
                  The statutory audit process typically takes <strong>4-8 weeks</strong> from start
                  to finish, depending on company size and complexity.
                </p>

                <div className="not-prose my-8">
                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Auditor Appointment',
                        duration: 'Week 1',
                        description:
                          'Shareholders appoint external auditor approved by Ministry of Economy. Engagement letter signed.',
                        color: 'blue',
                      },
                      {
                        step: '2',
                        title: 'Planning & Risk Assessment',
                        duration: 'Week 1-2',
                        description:
                          'Auditor reviews business, identifies risks, plans audit procedures, and requests document list.',
                        color: 'blue',
                      },
                      {
                        step: '3',
                        title: 'Fieldwork & Testing',
                        duration: 'Week 2-5',
                        description:
                          'Detailed testing of transactions, balances, and controls. Includes vouching, confirmations, and analytical procedures.',
                        color: 'green',
                      },
                      {
                        step: '4',
                        title: 'Review & Adjustments',
                        duration: 'Week 5-6',
                        description:
                          'Auditor reviews findings, discusses adjustments with management, resolves open items.',
                        color: 'amber',
                      },
                      {
                        step: '5',
                        title: 'Finalization & Reporting',
                        duration: 'Week 6-8',
                        description:
                          'Final review, sign-off on financial statements, issue audit report with opinion.',
                        color: 'green',
                      },
                      {
                        step: '6',
                        title: 'Filing with Authorities',
                        duration: 'Week 8',
                        description:
                          'Submit audited financials to DED/free zone within regulatory deadline.',
                        color: 'purple',
                      },
                    ].map((item) => (
                      <Card
                        key={item.step}
                        className={`border-l-4 border-l-${item.color}-500`}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full bg-${item.color}-100 text-${item.color}-700 font-bold`}
                              >
                                {item.step}
                              </div>
                              <div>
                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                <CardDescription>{item.duration}</CardDescription>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Statutory vs External Audit */}
              <div id="vs-external-audit" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 text-3xl font-bold">
                  Statutory Audit vs External Audit: What's the Difference?
                </h2>

                <p>
                  Many people use "statutory audit" and "external audit" interchangeably, but
                  there's a subtle distinction:
                </p>

                <div className="not-prose my-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Aspect
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Statutory Audit
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            External Audit (General)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Legal Requirement
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <strong>Mandatory</strong> by law
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            May be voluntary or mandatory
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Purpose
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Regulatory compliance
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Compliance or management request
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Frequency
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <strong>Annual</strong> requirement
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            As needed (annual, periodic, one-time)
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Scope
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Full financial statements
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Can be limited or full scope
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            Reporting
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Must be filed with authorities
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Filing depends on context
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="mt-4">
                  <strong>In practice:</strong> When a UAE mainland company gets their annual audit
                  to comply with the law, it's a statutory audit. The same audit might also be
                  called an "external audit" because it's conducted by external auditors. So
                  essentially, <strong>statutory audits are a type of external audit</strong> that
                  is legally required.
                </p>
              </div>

              {/* Costs */}
              <div id="costs" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 text-3xl font-bold">
                  Statutory Audit Costs in UAE (2025 Pricing)
                </h2>

                <p>
                  Statutory audit fees in the UAE vary significantly based on company size, industry
                  complexity, transaction volume, and auditor reputation.
                </p>

                <div className="not-prose my-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border-2 border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle>Small Companies</CardTitle>
                        <CardDescription>Revenue under AED 10M</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="mb-4 text-3xl font-bold text-blue-600">
                          AED 8,000 - 15,000
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• Simple business structure</li>
                          <li>• Low transaction volume</li>
                          <li>• Standard accounting</li>
                          <li>• 2-3 week timeline</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200">
                      <CardHeader className="bg-green-50">
                        <CardTitle>Medium Companies</CardTitle>
                        <CardDescription>Revenue AED 10M - 100M</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="mb-4 text-3xl font-bold text-green-600">
                          AED 15,000 - 35,000
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• Moderate complexity</li>
                          <li>• Multiple entities/branches</li>
                          <li>• Some specialized areas</li>
                          <li>• 3-5 week timeline</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200">
                      <CardHeader className="bg-purple-50">
                        <CardTitle>Large Companies</CardTitle>
                        <CardDescription>Revenue over AED 100M</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="mb-4 text-3xl font-bold text-purple-600">
                          AED 35,000 - 100,000+
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• High complexity</li>
                          <li>• Group consolidation</li>
                          <li>• Specialized industries</li>
                          <li>• 6-8 week timeline</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <h3>Factors Affecting Audit Costs:</h3>
                <ul>
                  <li>
                    <strong>Company size:</strong> Revenue, assets, number of employees
                  </li>
                  <li>
                    <strong>Industry complexity:</strong> Real estate, financial services, and oil &
                    gas cost more
                  </li>
                  <li>
                    <strong>Transaction volume:</strong> High-volume businesses require more testing
                  </li>
                  <li>
                    <strong>Number of entities:</strong> Consolidation of subsidiaries increases
                    scope
                  </li>
                  <li>
                    <strong>Quality of records:</strong> Poor organization increases audit hours
                  </li>
                  <li>
                    <strong>First-year audit:</strong> Initial audits are typically 30-50% more
                    expensive
                  </li>
                  <li>
                    <strong>Auditor tier:</strong> Big 4 firms charge 2-3x more than local firms
                  </li>
                </ul>

                <div className="not-prose mt-6">
                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Want an accurate cost estimate for your company?
                          </p>
                          <p className="mt-2 text-sm text-gray-700">
                            Use our free Audit Fee Calculator to get an instant estimate based on
                            your specific situation.
                          </p>
                          <Button asChild className="mt-4" size="sm">
                            <Link href="/calculator">Calculate Your Audit Fees</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Deadlines */}
              <div id="deadlines" className="scroll-mt-20 pt-8">
                <h2 className="mb-6 text-3xl font-bold">
                  Filing Deadlines for Statutory Audits in UAE
                </h2>

                <p>
                  Companies must file their audited financial statements with the relevant authority
                  within specific deadlines after their financial year-end:
                </p>

                <div className="not-prose my-6">
                  <Card className="mb-4 border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-red-900">Large Companies (Revenue {'>'}100M)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-600">90 Days</div>
                      <p className="mt-2 text-sm text-gray-700">
                        Must file audited financials within 3 months of financial year-end
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="mb-4 border-l-4 border-l-amber-500">
                    <CardHeader>
                      <CardTitle className="text-amber-900">
                        Medium Companies (Revenue AED 10-100M)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-amber-600">120 Days</div>
                      <p className="mt-2 text-sm text-gray-700">
                        Must file audited financials within 4 months of financial year-end
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-900">Small Companies (Revenue {'<'}10M)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">150 Days</div>
                      <p className="mt-2 text-sm text-gray-700">
                        Must file audited financials within 5 months of financial year-end
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-6 border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <CardTitle className="text-red-900">Late Filing Penalties</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-800">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">First Offense:</span>
                        <span>AED 10,000 fine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">Second Offense:</span>
                        <span>AED 20,000 fine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-600">Third Offense:</span>
                        <span>AED 50,000 fine + potential license suspension</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm font-medium text-red-900">
                      Recommendation: Start your audit process 4-6 weeks before the year-end to
                      ensure timely completion.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              <div id="faq" className="scroll-mt-20 pt-8">
                <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>

                <div className="not-prose space-y-4">
                  {[
                    {
                      question: 'Can I choose any auditor for statutory audit?',
                      answer:
                        'No, the auditor must be licensed and approved by the UAE Ministry of Economy. Only Ministry-approved auditors can sign statutory audit reports.',
                    },
                    {
                      question: 'How long does a statutory audit take?',
                      answer:
                        'Typically 4-8 weeks depending on company size and complexity. Small companies: 2-4 weeks, Medium companies: 4-6 weeks, Large companies: 6-8 weeks.',
                    },
                    {
                      question: 'What documents do I need for a statutory audit?',
                      answer:
                        'Financial statements, bank statements, invoices, contracts, payroll records, fixed asset register, tax returns, board minutes, and supporting documentation for all major transactions.',
                    },
                    {
                      question: 'What if the auditor finds problems?',
                      answer:
                        'The auditor will discuss findings with management and may require adjustments to financial statements. Serious issues may result in a qualified opinion or adverse opinion rather than an unqualified ("clean") opinion.',
                    },
                    {
                      question: 'Can I do statutory audit myself?',
                      answer:
                        'No, statutory audits must be performed by an independent external auditor who is licensed by the Ministry of Economy. Internal staff cannot conduct statutory audits.',
                    },
                    {
                      question: 'Is statutory audit the same as tax audit?',
                      answer:
                        'No, they are different. Statutory audit examines financial statements for true and fair view. Tax audit (like VAT audit) specifically examines tax compliance and calculations.',
                    },
                  ].map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Need Help with Statutory Audit?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Our Ministry-approved auditors have conducted 28,000+ statutory audits across all
              industries in UAE. Get expert guidance and competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/calculator">Calculate Audit Fees</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/tools/audit-readiness-score">Check Your Audit Readiness</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
