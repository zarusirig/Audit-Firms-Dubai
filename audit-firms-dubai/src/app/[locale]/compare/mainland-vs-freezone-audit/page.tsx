import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowRight, Scale, Building2, MapPin } from 'lucide-react'
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
    title: 'Mainland vs Free Zone Audit Requirements UAE: Complete Comparison 2025',
    description:
      'Compare audit requirements for UAE mainland vs free zone companies. Learn differences in audit mandates, costs, deadlines, and compliance for DIFC, JAFZA, DMCC, and mainland DED.',
    keywords: [
      'mainland vs free zone audit',
      'uae mainland audit requirements',
      'free zone audit requirements',
      'difc audit',
      'jafza audit',
      'dmcc audit',
      'dubai mainland audit',
      'freezone vs mainland compliance',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compare/mainland-vs-freezone-audit`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compare/mainland-vs-freezone-audit`,
        ar: `${SITE_CONFIG.url}/ar/compare/mainland-vs-freezone-audit`,
      },
    },
    openGraph: {
      title: 'Mainland vs Free Zone Audit Requirements in UAE: Complete Comparison',
      description:
        'Comprehensive guide to audit requirements for UAE mainland and free zone companies including DIFC, JAFZA, DMCC, and DED.',
      type: 'article',
    },
  }
}

export default async function MainlandVsFreezoneAuditPage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Compare', href: `/${locale}/compare` },
    {
      label: 'Mainland vs Free Zone Audit',
      href: `/${locale}/compare/mainland-vs-freezone-audit`,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Mainland vs Free Zone Audit Requirements in UAE',
            description:
              'Comprehensive comparison of audit requirements for UAE mainland and free zone companies.',
            publisher: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-blue-500">
                <Building2 className="mr-1 h-3 w-3" />
                Jurisdiction Comparison Guide
              </Badge>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Mainland vs Free Zone Audit Requirements
              </h1>
              <p className="text-xl text-blue-100">
                Understand the differences in audit requirements, costs, and compliance between UAE
                mainland and various free zones
              </p>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
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
                      <th className="border bg-amber-50 p-4 text-left font-bold text-amber-900">
                        UAE Mainland (DED)
                      </th>
                      <th className="border bg-blue-50 p-4 text-left font-bold text-blue-900">
                        Free Zones (General)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border p-4 font-medium">Audit Mandatory?</td>
                      <td className="border bg-amber-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> Yes, all LLCs
                      </td>
                      <td className="border bg-blue-50/30 p-4">
                        Varies by zone (most zones yes)
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Revenue Threshold</td>
                      <td className="border bg-amber-50/30 p-4">No threshold (all sizes)</td>
                      <td className="border bg-blue-50/30 p-4">
                        Often AED 1-3M+ (zone-specific)
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Filing Deadline</td>
                      <td className="border bg-amber-50/30 p-4">
                        3-4 months from year-end (varies by emirate)
                      </td>
                      <td className="border bg-blue-50/30 p-4">Typically 3-6 months</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Accounting Standard</td>
                      <td className="border bg-amber-50/30 p-4">IFRS mandatory</td>
                      <td className="border bg-blue-50/30 p-4">
                        IFRS (DIFC/ADGM) or IFRS for SMEs (others)
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Auditor Approval</td>
                      <td className="border bg-amber-50/30 p-4">
                        UAE Ministry of Economy approved
                      </td>
                      <td className="border bg-blue-50/30 p-4">
                        Zone-specific approval (varies)
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Language</td>
                      <td className="border bg-amber-50/30 p-4">Arabic or English</td>
                      <td className="border bg-blue-50/30 p-4">English (most zones)</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Typical Audit Fee</td>
                      <td className="border bg-amber-50/30 p-4">AED 15,000 - 45,000</td>
                      <td className="border bg-blue-50/30 p-4">AED 12,000 - 40,000</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Additional Compliance</td>
                      <td className="border bg-amber-50/30 p-4">
                        Corporate tax, VAT, Economic Substance
                      </td>
                      <td className="border bg-blue-50/30 p-4">
                        Varies (some tax benefits, ESR still applies)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Detailed Analysis</h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900">UAE Mainland Audit Requirements</h3>
                <p className="text-gray-700">
                  Companies registered in UAE mainland (through Department of Economic Development -
                  DED in Dubai, or equivalent in other emirates) are subject to the UAE Commercial
                  Companies Law (Federal Law No. 32 of 2021). This law makes external audit mandatory
                  for all Limited Liability Companies (LLCs), joint stock companies, and branches of
                  foreign companies, regardless of size or revenue.
                </p>
                <p className="text-gray-700">
                  <strong>Key Mainland Requirements:</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Mandatory Audit:</strong> No exceptions or revenue thresholds. Even a
                    startup LLC with minimal revenue must have an annual audit.
                  </li>
                  <li>
                    <strong>Ministry-Approved Auditor:</strong> Auditor must be approved by UAE
                    Ministry of Economy. The approved auditor list is publicly available.
                  </li>
                  <li>
                    <strong>IFRS Compliance:</strong> Financial statements must comply with full
                    International Financial Reporting Standards.
                  </li>
                  <li>
                    <strong>Filing Deadline:</strong> Typically 90-120 days from year-end, though
                    this varies by emirate and DED office.
                  </li>
                  <li>
                    <strong>Language:</strong> Financials can be in English or Arabic. Some mainland
                    authorities prefer Arabic, though English is widely accepted.
                  </li>
                </ul>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Free Zone Audit Requirements
                </h3>
                <p className="text-gray-700">
                  The UAE has over 40 free zones, each with its own regulatory authority and specific
                  audit requirements. Free zones offer benefits like 100% foreign ownership, tax
                  exemptions, and easier business setup, but audit requirements vary significantly.
                </p>
                <p className="text-gray-700">
                  <strong>Major Free Zones Comparison:</strong>
                </p>

                <h4 className="text-xl font-bold text-gray-900">DIFC (Dubai International Financial Centre)</h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Audit Required:</strong> Yes, all DIFC entities must have annual audit
                  </li>
                  <li>
                    <strong>Auditor:</strong> Must be DFSA (Dubai Financial Services Authority)
                    registered auditor
                  </li>
                  <li>
                    <strong>Standard:</strong> Full IFRS mandatory
                  </li>
                  <li>
                    <strong>Deadline:</strong> 4 months from year-end for filing
                  </li>
                  <li>
                    <strong>Additional:</strong> DIFC has stringent corporate governance requirements
                  </li>
                  <li>
                    <strong>Cost:</strong> Typically higher (AED 25,000-60,000+) due to IFRS and
                    compliance complexity
                  </li>
                </ul>

                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  JAFZA (Jebel Ali Free Zone)
                </h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Audit Required:</strong> Yes, for companies with revenue over AED 1M
                  </li>
                  <li>
                    <strong>Auditor:</strong> Ministry-approved or JAFZA-approved auditor
                  </li>
                  <li>
                    <strong>Standard:</strong> IFRS or IFRS for SMEs
                  </li>
                  <li>
                    <strong>Deadline:</strong> 6 months from year-end
                  </li>
                  <li>
                    <strong>Cost:</strong> AED 15,000-35,000 typically
                  </li>
                </ul>

                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  DMCC (Dubai Multi Commodities Centre)
                </h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Audit Required:</strong> Yes, for most license types
                  </li>
                  <li>
                    <strong>Auditor:</strong> DMCC-approved auditor list
                  </li>
                  <li>
                    <strong>Standard:</strong> IFRS or IFRS for SMEs
                  </li>
                  <li>
                    <strong>Deadline:</strong> 4-6 months from year-end
                  </li>
                  <li>
                    <strong>Cost:</strong> AED 12,000-40,000
                  </li>
                </ul>

                <h4 className="mt-6 text-xl font-bold text-gray-900">ADGM (Abu Dhabi Global Market)</h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Audit Required:</strong> Yes, all entities
                  </li>
                  <li>
                    <strong>Auditor:</strong> ADGM-registered auditor
                  </li>
                  <li>
                    <strong>Standard:</strong> Full IFRS
                  </li>
                  <li>
                    <strong>Deadline:</strong> 4 months from year-end
                  </li>
                  <li>
                    <strong>Additional:</strong> Similar to DIFC in stringency
                  </li>
                  <li>
                    <strong>Cost:</strong> AED 25,000-60,000+
                  </li>
                </ul>

                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  Other Major Free Zones (RAKEZ, SHAMS, DSO, etc.)
                </h4>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Audit Required:</strong> Often yes, but with revenue thresholds (AED
                    1-3M common)
                  </li>
                  <li>
                    <strong>Auditor:</strong> Usually accepts Ministry-approved auditors
                  </li>
                  <li>
                    <strong>Standard:</strong> IFRS for SMEs typically acceptable
                  </li>
                  <li>
                    <strong>Flexibility:</strong> More flexible requirements than DIFC/ADGM
                  </li>
                </ul>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Key Differences Explained</h3>

                <h4 className="text-xl font-bold text-gray-900">1. Mandatory vs Optional Audit</h4>
                <p className="text-gray-700">
                  <strong>Mainland:</strong> Audit is absolutely mandatory for all LLCs and joint
                  stock companies, regardless of revenue. There are no exemptions.
                </p>
                <p className="text-gray-700">
                  <strong>Free Zones:</strong> Requirements vary. Financial free zones (DIFC, ADGM)
                  require audit for all entities. Commercial free zones often have revenue thresholds
                  (e.g., AED 1M, AED 3M) below which audit may be optional. Always check your
                  specific free zone requirements.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">2. Accounting Standards</h4>
                <p className="text-gray-700">
                  <strong>Mainland:</strong> Full IFRS is mandatory. This can be complex and costly
                  for small businesses, requiring significant accounting expertise.
                </p>
                <p className="text-gray-700">
                  <strong>Free Zones:</strong> DIFC and ADGM require full IFRS (like mainland). Most
                  other free zones accept IFRS for SMEs, which is a simplified version of IFRS
                  designed for small and medium enterprises. This reduces complexity and cost.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">3. Auditor Selection</h4>
                <p className="text-gray-700">
                  <strong>Mainland:</strong> Must use a UAE Ministry of Economy-approved auditor. The
                  approved list is published online and includes hundreds of firms.
                </p>
                <p className="text-gray-700">
                  <strong>Free Zones:</strong> Each zone may have its own approved auditor list.
                  DIFC/ADGM have separate registration systems. Some free zones accept any
                  Ministry-approved auditor. Check your specific zone's requirements.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">4. Filing Deadlines</h4>
                <p className="text-gray-700">
                  <strong>Mainland:</strong> Generally 90-120 days (3-4 months) from financial
                  year-end, though Dubai DED has been flexible with extensions in recent years.
                </p>
                <p className="text-gray-700">
                  <strong>Free Zones:</strong> Typically more generous - often 4-6 months from
                  year-end. DIFC and ADGM are stricter (4 months). Commercial zones like JAFZA offer
                  6 months.
                </p>

                <h4 className="mt-6 text-xl font-bold text-gray-900">5. Cost Differences</h4>
                <p className="text-gray-700">
                  Audit costs are generally similar between mainland and most free zones for
                  comparable company sizes. However:
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    DIFC/ADGM audits cost more (20-30% premium) due to full IFRS and stricter
                    compliance
                  </li>
                  <li>
                    Free zones accepting IFRS for SMEs may have slightly lower audit costs
                  </li>
                  <li>
                    Mainland Arabic-language financial statement requirements may add minor
                    translation costs
                  </li>
                </ul>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Corporate Tax Considerations (2023+)
                </h3>
                <p className="text-gray-700">
                  Since June 2023, UAE introduced corporate tax at 9% for profits above AED 375,000.
                  This applies to both mainland and most free zone companies, with some exceptions:
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Mainland:</strong> Subject to 9% corporate tax on taxable income
                  </li>
                  <li>
                    <strong>Free Zones:</strong> Qualifying Free Zone Persons may benefit from 0%
                    corporate tax on qualifying income (must meet conditions)
                  </li>
                  <li>
                    Both mainland and free zone companies need audited financials for corporate tax
                    filings
                  </li>
                </ul>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Economic Substance Regulations (ESR)
                </h3>
                <p className="text-gray-700">
                  Both mainland and free zone companies conducting "relevant activities" (banking,
                  insurance, investment management, lease-finance, headquarters, shipping,
                  holding/IP) must comply with ESR. This includes:
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>Annual ESR notification filing</li>
                  <li>ESR report (if conducting relevant activity)</li>
                  <li>Often requires auditor involvement in ESR report preparation</li>
                </ul>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Which Jurisdiction for Audit Compliance?
                </h3>

                <div className="mt-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
                  <h4 className="mb-4 text-xl font-bold text-amber-900">Choose Mainland If:</h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>You need to do business directly with UAE government entities</li>
                    <li>Your business model requires mainland presence (certain industries)</li>
                    <li>You're comfortable with mandatory audit at all revenue levels</li>
                    <li>You have full UAE national partnership (for certain licenses)</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Audit Implication:</strong> Expect to pay for annual audit regardless of
                    business size or revenue.
                  </p>
                </div>

                <div className="mt-6 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                  <h4 className="mb-4 text-xl font-bold text-blue-900">Choose Free Zone If:</h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>You want 100% foreign ownership</li>
                    <li>You're a startup/small business wanting to defer audit costs initially</li>
                    <li>You benefit from specific free zone industry clusters</li>
                    <li>You want potential corporate tax benefits (qualifying FZ person)</li>
                    <li>You prefer IFRS for SMEs over full IFRS</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Audit Implication:</strong> May have revenue threshold before audit is
                    required (check specific zone). Some cost/complexity savings possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Zone Specific Table */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Major Free Zones: Audit Requirements Summary
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left text-sm font-bold">Free Zone</th>
                      <th className="border p-3 text-left text-sm font-bold">Audit Mandatory?</th>
                      <th className="border p-3 text-left text-sm font-bold">Revenue Threshold</th>
                      <th className="border p-3 text-left text-sm font-bold">Accounting Standard</th>
                      <th className="border p-3 text-left text-sm font-bold">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr>
                      <td className="border p-3 font-medium">DIFC</td>
                      <td className="border p-3">Yes, all</td>
                      <td className="border p-3">No threshold</td>
                      <td className="border p-3">Full IFRS</td>
                      <td className="border p-3">AED 25K-60K+</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">ADGM</td>
                      <td className="border p-3">Yes, all</td>
                      <td className="border p-3">No threshold</td>
                      <td className="border p-3">Full IFRS</td>
                      <td className="border p-3">AED 25K-60K+</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">JAFZA</td>
                      <td className="border p-3">Yes</td>
                      <td className="border p-3">AED 1M+</td>
                      <td className="border p-3">IFRS/SME</td>
                      <td className="border p-3">AED 15K-35K</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">DMCC</td>
                      <td className="border p-3">Most licenses</td>
                      <td className="border p-3">Varies</td>
                      <td className="border p-3">IFRS/SME</td>
                      <td className="border p-3">AED 12K-40K</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">RAKEZ</td>
                      <td className="border p-3">Conditional</td>
                      <td className="border p-3">AED 3M+</td>
                      <td className="border p-3">IFRS/SME</td>
                      <td className="border p-3">AED 12K-30K</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">SHAMS</td>
                      <td className="border p-3">Conditional</td>
                      <td className="border p-3">AED 1M+</td>
                      <td className="border p-3">IFRS/SME</td>
                      <td className="border p-3">AED 12K-30K</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">DSO</td>
                      <td className="border p-3">Conditional</td>
                      <td className="border p-3">Varies</td>
                      <td className="border p-3">IFRS/SME</td>
                      <td className="border p-3">AED 12K-30K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Note:</strong> Requirements change periodically. Always verify current
                requirements with your specific free zone authority.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Audit Services for All UAE Jurisdictions
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Farahat & Co is approved by Ministry of Economy and all major UAE free zones. We've
              audited 28,000+ companies across mainland and all free zones over 37 years.
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
                <Link href={`/${locale}/calculator`}>Get Audit Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
