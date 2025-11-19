import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowRight, Scale } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
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
    title: 'External Audit vs Internal Audit: Complete Comparison 2025 | UAE Guide',
    description:
      'Detailed comparison of external audit vs internal audit in UAE. Learn key differences, when you need each, costs, benefits, and which is right for your business.',
    keywords: [
      'external audit vs internal audit',
      'internal vs external audit',
      'difference between internal and external audit',
      'external audit uae',
      'internal audit uae',
      'statutory audit vs internal audit',
      'audit comparison',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compare/external-vs-internal-audit`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compare/external-vs-internal-audit`,
        ar: `${SITE_CONFIG.url}/ar/compare/external-vs-internal-audit`,
      },
    },
    openGraph: {
      title: 'External Audit vs Internal Audit: Complete UAE Comparison',
      description:
        'Comprehensive guide comparing external and internal audit. Understand differences, costs, benefits, and when you need each type.',
      type: 'article',
    },
  }
}

export default async function ExternalVsInternalAuditPage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Compare', href: `/${locale}/compare` },
    { label: 'External vs Internal Audit', href: `/${locale}/compare/external-vs-internal-audit` },
  ]

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'External Audit vs Internal Audit: Complete Comparison Guide',
            description:
              'Comprehensive comparison of external and internal audit in UAE including key differences, costs, benefits, and when you need each type.',
            publisher: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai (Farahat & Co)',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-blue-500">
                <Scale className="mr-1 h-3 w-3" />
                Complete Comparison Guide
              </Badge>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                External Audit vs Internal Audit
              </h1>
              <p className="text-xl text-blue-100">
                Understand the key differences, when you need each type, typical costs, and which
                is right for your UAE business
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Quick Comparison Overview
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-4 text-left font-bold">Aspect</th>
                      <th className="border bg-blue-50 p-4 text-left font-bold text-blue-900">
                        External Audit
                      </th>
                      <th className="border bg-green-50 p-4 text-left font-bold text-green-900">
                        Internal Audit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border p-4 font-medium">Purpose</td>
                      <td className="border bg-blue-50/30 p-4">
                        Independent verification of financial statements
                      </td>
                      <td className="border bg-green-50/30 p-4">
                        Evaluate and improve risk management and controls
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Required by Law</td>
                      <td className="border bg-blue-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> Yes, for most
                        UAE companies
                      </td>
                      <td className="border bg-green-50/30 p-4">
                        <XCircle className="inline h-5 w-5 text-red-600" /> No, voluntary
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Who Performs It</td>
                      <td className="border bg-blue-50/30 p-4">
                        Independent, Ministry-approved external auditors
                      </td>
                      <td className="border bg-green-50/30 p-4">
                        Company employees or contracted specialists
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Frequency</td>
                      <td className="border bg-blue-50/30 p-4">Annual (once per year)</td>
                      <td className="border bg-green-50/30 p-4">
                        Ongoing (quarterly, monthly, or continuous)
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Scope</td>
                      <td className="border bg-blue-50/30 p-4">Financial statements and records</td>
                      <td className="border bg-green-50/30 p-4">
                        All operations, processes, and risks
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Reporting To</td>
                      <td className="border bg-blue-50/30 p-4">
                        Shareholders, Ministry, DED/Free Zone
                      </td>
                      <td className="border bg-green-50/30 p-4">
                        Management, Audit Committee, Board
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Typical Cost (SME)</td>
                      <td className="border bg-blue-50/30 p-4">AED 15,000 - 45,000 annually</td>
                      <td className="border bg-green-50/30 p-4">
                        AED 30,000 - 100,000+ annually
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Independence</td>
                      <td className="border bg-blue-50/30 p-4">Fully independent</td>
                      <td className="border bg-green-50/30 p-4">
                        Independent within organization
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Detailed Comparison</h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900">What is External Audit?</h3>
                <p className="text-gray-700">
                  External audit is a statutory requirement in the UAE for most companies. It
                  involves an independent, Ministry-approved auditor examining your company's
                  financial statements to provide reasonable assurance that they present a true and
                  fair view of the financial position and comply with International Financial
                  Reporting Standards (IFRS) and UAE laws.
                </p>
                <p className="text-gray-700">
                  The external auditor is a third party with no connection to the company, ensuring
                  complete independence. They issue an audit opinion that shareholders, banks,
                  regulators, and other stakeholders rely on. In the UAE, external audits must be
                  filed with the Ministry of Economy or respective free zone authorities.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">What is Internal Audit?</h3>
                <p className="text-gray-700">
                  Internal audit is an independent, objective assurance activity designed to add
                  value and improve an organization's operations. It helps evaluate and improve the
                  effectiveness of risk management, control, and governance processes. Unlike
                  external audit, internal audit is not legally required but is considered a best
                  practice for medium to large organizations.
                </p>
                <p className="text-gray-700">
                  Internal auditors can be employees of the company or outsourced professionals. They
                  report to management and the audit committee, providing ongoing assessments of
                  internal controls, operational efficiency, compliance with policies, and fraud
                  risks. Internal audit has a broader scope than external audit, covering
                  operational, financial, and compliance aspects.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Key Differences Explained
                </h3>

                <h4 className="text-xl font-bold text-gray-900">1. Legal Requirement</h4>
                <p className="text-gray-700">
                  <strong>External Audit:</strong> Mandatory for LLCs, joint stock companies,
                  branches of foreign companies, and most free zone entities under UAE Commercial
                  Companies Law. Failure to conduct external audit can result in penalties and
                  license suspension.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit:</strong> Completely voluntary. Companies choose to
                  implement internal audit to strengthen governance, improve controls, prevent fraud,
                  or meet parent company requirements (e.g., SOX 404 for US-listed entities).
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">2. Independence</h4>
                <p className="text-gray-700">
                  <strong>External Audit:</strong> Auditor must be completely independent with no
                  financial or personal relationship with the company. UAE Ministry approves external
                  auditors and can revoke licenses for independence violations.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit:</strong> While internal auditors should be operationally
                  independent (reporting to audit committee, not line management), they are still
                  part of or hired by the organization. This provides organizational knowledge but
                  slightly less independence than external audit.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">3. Scope and Focus</h4>
                <p className="text-gray-700">
                  <strong>External Audit:</strong> Focuses narrowly on financial statements and
                  accounting records. The objective is to verify that revenue, expenses, assets, and
                  liabilities are fairly stated. External auditors test transactions and balances but
                  don't typically assess operational efficiency or strategic risks.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit:</strong> Has a much broader scope covering financial
                  controls, operational processes, IT systems, compliance with laws and policies,
                  fraud risks, and strategic initiatives. Internal audit can examine anything from
                  procurement processes to cybersecurity to sales effectiveness.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">4. Frequency and Timing</h4>
                <p className="text-gray-700">
                  <strong>External Audit:</strong> Conducted annually, typically 3-4 weeks after
                  year-end close. External auditors complete their work and issue a report once per
                  year.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit:</strong> Ongoing throughout the year. Internal audit
                  typically follows an annual risk-based plan with audits conducted quarterly or
                  monthly. This allows continuous monitoring and timely identification of issues.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">5. Reporting</h4>
                <p className="text-gray-700">
                  <strong>External Audit:</strong> The auditor's report is public (filed with
                  authorities) and addressed to shareholders. It provides an opinion on the financial
                  statements (unqualified, qualified, adverse, or disclaimer). The report is
                  relatively short (1-2 pages) plus audited financials.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit:</strong> Reports are internal and confidential, addressed
                  to management and the audit committee. They are detailed, typically including
                  findings, root causes, risks, and recommendations. Follow-up reports track
                  implementation of recommendations.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">When Do You Need Each?</h3>

                <div className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-xl font-bold text-blue-900">
                    <CheckCircle2 className="h-6 w-6" />
                    You Need External Audit If:
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>You operate an LLC, joint stock company, or branch in UAE</li>
                    <li>Your free zone requires annual audit (most do)</li>
                    <li>Your bank requires audited financials for loans</li>
                    <li>You're tendering for government contracts</li>
                    <li>You're seeking investors or selling your business</li>
                    <li>You need credibility with stakeholders</li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border-2 border-green-200 bg-green-50 p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-900">
                    <CheckCircle2 className="h-6 w-6" />
                    You Need Internal Audit If:
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>You have weak internal controls or past fraud incidents</li>
                    <li>You're growing rapidly and losing oversight</li>
                    <li>You have complex operations across multiple locations</li>
                    <li>You're subject to SOX or other governance requirements</li>
                    <li>You want to improve operational efficiency</li>
                    <li>You need independent assessment of risks</li>
                    <li>Your board or investors require it</li>
                  </ul>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Cost Comparison</h3>
                <p className="text-gray-700">
                  <strong>External Audit Costs in UAE:</strong> Typically range from AED 15,000 to
                  AED 150,000+ annually depending on company size, complexity, and industry. Small
                  companies (under AED 10M revenue) usually pay AED 15,000-25,000. Medium companies
                  (AED 10-50M) pay AED 25,000-45,000. Large companies pay AED 45,000-150,000+.
                </p>
                <p className="text-gray-700">
                  <strong>Internal Audit Costs in UAE:</strong> More variable depending on scope and
                  approach. Outsourced internal audit typically costs AED 30,000-100,000+ annually
                  for SMEs. In-house internal audit departments require salary (AED 180,000-420,000
                  per year for qualified staff) plus overhead. Co-sourced models (hybrid of in-house
                  and outsourced) are popular for medium companies.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Can You Have Both? Should You?
                </h3>
                <p className="text-gray-700">
                  Yes, many companies have both external and internal audit, and they complement each
                  other well. External audit provides the required statutory compliance and external
                  credibility. Internal audit provides ongoing risk management and operational
                  improvement.
                </p>
                <p className="text-gray-700">
                  For small businesses (under AED 20M revenue), external audit alone is usually
                  sufficient. For medium businesses (AED 20-100M), consider adding internal audit
                  focused on high-risk areas. For large businesses (over AED 100M), both external and
                  internal audit are typically essential for proper governance.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Working Together</h3>
                <p className="text-gray-700">
                  When a company has both types of audit, coordination is important to maximize
                  efficiency and avoid duplication. External auditors can rely on internal audit work
                  in certain areas, potentially reducing external audit fees. Internal auditors can
                  use external audit findings to identify control weaknesses for further
                  investigation. Best practice is for both audit functions to communicate and
                  coordinate their activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Helper */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Which Type of Audit Do You Need?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-900">Choose External Audit If:</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>You're legally required to have it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>You need credibility with external stakeholders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>You're seeking financing or investors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>You have relatively simple operations</span>
                      </li>
                    </ul>
                    <Button asChild className="mt-6 w-full" size="lg">
                      <Link href={`/${locale}/services/external-audit`}>
                        Get External Audit Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-900">Choose Internal Audit If:</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>You want to improve operations and controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>You need ongoing risk assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>You have fraud concerns or weak controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>You have complex, multi-location operations</span>
                      </li>
                    </ul>
                    <Button asChild className="mt-6 w-full" size="lg" variant="default">
                      <Link href={`/${locale}/services/internal-audit`}>
                        Get Internal Audit Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Not Sure Which You Need?</CardTitle>
                  <CardDescription>
                    Our audit experts can assess your situation and recommend the right approach
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/${locale}/contact`}>Schedule Free Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Can the same firm do both external and internal audit?
                  </h3>
                  <p className="text-gray-700">
                    Yes, but with restrictions. Under UAE regulations and international standards, if
                    a firm performs your external audit, their internal audit services are limited to
                    avoid independence conflicts. Many companies use different firms for each type.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Does internal audit reduce external audit fees?
                  </h3>
                  <p className="text-gray-700">
                    Potentially yes. External auditors can rely on effective internal audit work in
                    certain areas, reducing their testing requirements. However, the savings in
                    external audit fees rarely offset the full cost of internal audit. The main
                    benefit of internal audit is improved controls and risk management, not reduced
                    external audit fees.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Is internal audit required for SOX compliance?
                  </h3>
                  <p className="text-gray-700">
                    While SOX doesn't explicitly require an internal audit function, Section 404
                    requires management to assess the effectiveness of internal controls. Most
                    companies use internal audit to perform this assessment and testing. If your UAE
                    entity is part of a US-listed group, you'll likely need internal audit
                    capabilities to support SOX compliance.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Can I outsource internal audit?
                  </h3>
                  <p className="text-gray-700">
                    Yes, many UAE companies outsource internal audit rather than building in-house
                    teams. Outsourced internal audit provides flexibility, specialized expertise, and
                    avoids the overhead of full-time staff. Co-sourced models (combination of
                    in-house and outsourced) are also popular for medium to large companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Expert Audit Services in Dubai</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Farahat & Co provides both external and internal audit services with 37 years of
              experience and 28,000+ audits completed across all UAE industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={`/${locale}/calculator`}>Calculate Audit Fees</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
