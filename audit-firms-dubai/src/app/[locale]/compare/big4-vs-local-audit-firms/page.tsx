import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowRight, Scale, TrendingUp, DollarSign } from 'lucide-react'
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
    title: 'Big 4 vs Local Audit Firms in Dubai: Complete Comparison 2025',
    description:
      'Detailed comparison of Big 4 vs local audit firms in UAE. Compare costs, service quality, industry expertise, and which is best for your business size.',
    keywords: [
      'big 4 vs local audit firms',
      'big 4 audit firms dubai',
      'local audit firms uae',
      'audit firm comparison',
      'deloitte pwc ey kpmg vs local',
      'best audit firm dubai',
      'audit firm selection',
      'audit fees comparison',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compare/big4-vs-local-audit-firms`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compare/big4-vs-local-audit-firms`,
        ar: `${SITE_CONFIG.url}/ar/compare/big4-vs-local-audit-firms`,
      },
    },
    openGraph: {
      title: 'Big 4 vs Local Audit Firms in Dubai: Complete Comparison',
      description:
        'Compare Big 4 firms (Deloitte, PwC, EY, KPMG) with local audit firms. Costs, quality, expertise, and best fit for your business.',
      type: 'article',
    },
  }
}

export default async function Big4VsLocalPage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Compare', href: `/${locale}/compare` },
    { label: 'Big 4 vs Local Firms', href: `/${locale}/compare/big4-vs-local-audit-firms` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Big 4 vs Local Audit Firms in Dubai: Complete Comparison',
            description:
              'Comprehensive comparison of Big 4 vs local audit firms including costs, service quality, and best fit for different business sizes.',
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
                <Scale className="mr-1 h-3 w-3" />
                Comprehensive Audit Firm Comparison
              </Badge>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Big 4 vs Local Audit Firms in Dubai
              </h1>
              <p className="text-xl text-blue-100">
                Compare costs, service quality, industry expertise, and find the right audit firm
                for your business size and needs
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                At a Glance Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-4 text-left font-bold">Factor</th>
                      <th className="border bg-purple-50 p-4 text-left font-bold text-purple-900">
                        Big 4 Firms
                      </th>
                      <th className="border bg-blue-50 p-4 text-left font-bold text-blue-900">
                        Local Firms
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border p-4 font-medium">Typical Audit Fee (SME)</td>
                      <td className="border bg-purple-50/30 p-4">AED 45,000 - 150,000+</td>
                      <td className="border bg-blue-50/30 p-4">AED 15,000 - 45,000</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Audit Timeline</td>
                      <td className="border bg-purple-50/30 p-4">4-6 weeks</td>
                      <td className="border bg-blue-50/30 p-4">2-4 weeks</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Brand Recognition</td>
                      <td className="border bg-purple-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> Global brand
                      </td>
                      <td className="border bg-blue-50/30 p-4">Regional/local reputation</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Partner Accessibility</td>
                      <td className="border bg-purple-50/30 p-4">Limited</td>
                      <td className="border bg-blue-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> High
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Service Flexibility</td>
                      <td className="border bg-purple-50/30 p-4">Standardized processes</td>
                      <td className="border bg-blue-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> Highly flexible
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Minimum Engagement Size</td>
                      <td className="border bg-purple-50/30 p-4">Often AED 50M+ revenue</td>
                      <td className="border bg-blue-50/30 p-4">No minimum</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Advisory Services</td>
                      <td className="border bg-purple-50/30 p-4">
                        <CheckCircle2 className="inline h-5 w-5 text-green-600" /> Extensive
                      </td>
                      <td className="border bg-blue-50/30 p-4">Focused on audit/tax/compliance</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-medium">Best For</td>
                      <td className="border bg-purple-50/30 p-4">
                        Listed companies, multinationals, IPO candidates
                      </td>
                      <td className="border bg-blue-50/30 p-4">SMEs, private companies, startups</td>
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
                <h3 className="text-2xl font-bold text-gray-900">Who Are the Big 4?</h3>
                <p className="text-gray-700">
                  The Big 4 refers to the four largest global accounting and audit firms: Deloitte,
                  PwC (PricewaterhouseCoopers), EY (Ernst & Young), and KPMG. These firms dominate
                  the audit market for large public companies worldwide and have significant
                  presences in Dubai and Abu Dhabi. They audit the majority of Fortune 500 companies
                  and almost all listed companies on major stock exchanges.
                </p>
                <p className="text-gray-700">
                  In the UAE, all Big 4 firms are Ministry-approved auditors with large local teams.
                  They offer not only audit services but extensive advisory, tax, consulting, and
                  transaction services. Big 4 firms employ thousands of professionals globally and
                  hundreds in the UAE.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  What Are Local Audit Firms?
                </h3>
                <p className="text-gray-700">
                  Local audit firms are UAE-based firms approved by the Ministry of Economy to
                  conduct statutory audits. They range from solo practitioners to mid-tier firms with
                  50-100+ professionals. Examples include Farahat & Co (37 years, 28,000+ audits),
                  Grant Thornton UAE, BDO UAE, Crowe UAE, and many smaller boutique firms.
                </p>
                <p className="text-gray-700">
                  Local firms typically focus on the SME market (small and medium enterprises) and
                  private companies. They offer audit, tax, VAT, accounting, and business advisory
                  services tailored to the UAE market. Many have deep UAE expertise, long-standing
                  relationships with local authorities, and understanding of regional business
                  practices.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Cost Comparison</h3>
                <p className="text-gray-700">
                  <strong>Big 4 Pricing:</strong> Big 4 firms charge premium rates reflecting their
                  global brand and standardized quality. For a small to medium UAE company (AED
                  10-50M revenue), Big 4 audit fees typically range from AED 45,000 to AED 150,000.
                  For larger companies, fees can exceed AED 300,000-500,000+ annually. Big 4 firms
                  often have minimum engagement sizes and may decline smaller audits.
                </p>
                <p className="text-gray-700">
                  <strong>Local Firm Pricing:</strong> Local firms offer significantly more
                  competitive pricing. For the same AED 10-50M company, audit fees typically range
                  from AED 15,000 to AED 45,000 - often 50-70% less than Big 4. Local firms are more
                  willing to take smaller engagements and flexible on pricing for long-term
                  relationships.
                </p>
                <p className="text-gray-700">
                  <strong>What Drives the Price Difference?</strong> Big 4 have higher overhead costs
                  (premium office locations, global compliance systems, brand marketing), higher
                  billing rates (even for junior staff), and more extensive quality review processes.
                  Local firms have leaner operations, lower overhead, and often the partners
                  themselves do significant client work.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Service Quality</h3>
                <p className="text-gray-700">
                  <strong>Big 4 Quality:</strong> Big 4 firms have rigorous, standardized quality
                  control processes, extensive internal review layers, and global methodologies. Work
                  is typically performed by large teams following detailed audit programs. Quality is
                  generally consistent, though some clients feel the processes are rigid. Big 4 firms
                  invest heavily in training and technology.
                </p>
                <p className="text-gray-700">
                  <strong>Local Firm Quality:</strong> Quality varies more among local firms. Top
                  local firms (like Farahat & Co with 37 years experience) provide quality
                  comparable to Big 4, often with more personalized service. Partners are more
                  involved in client work. However, smaller local firms may have less robust quality
                  controls. When choosing a local firm, verify their experience, qualifications, and
                  reputation.
                </p>
                <p className="text-gray-700">
                  <strong>Important Note:</strong> All UAE-approved auditors (Big 4 and local) must
                  meet Ministry standards and follow International Standards on Auditing (ISA).
                  Ministry approval itself provides baseline quality assurance.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  Accessibility and Responsiveness
                </h3>
                <p className="text-gray-700">
                  <strong>Big 4:</strong> For smaller clients, accessing senior professionals or
                  partners can be challenging. Work is often managed by managers and seniors, with
                  partners involved only in review and signing. Response times can be slower due to
                  bureaucracy. Clients sometimes feel like "small fish in a big pond."
                </p>
                <p className="text-gray-700">
                  <strong>Local Firms:</strong> Local firms typically provide better accessibility.
                  Partners are directly involved with clients, often responding personally to queries.
                  Clients have direct phone numbers and emails for partners. This accessibility is
                  highly valued by SMEs who want responsive, personalized service.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Specialization</h3>
                <p className="text-gray-700">
                  <strong>Big 4:</strong> Have dedicated industry specialists for sectors like
                  financial services, real estate, healthcare, technology, etc. If you're in a highly
                  specialized industry or subject to complex regulations (e.g., Islamic finance,
                  insurance), Big 4 depth of expertise is valuable.
                </p>
                <p className="text-gray-700">
                  <strong>Local Firms:</strong> Many local firms have strong industry expertise in
                  common UAE sectors (trading, contracting, real estate, hospitality). Some
                  specialize in areas like RERA audits, DHA healthcare, or VAT. For standard
                  industries, local firm expertise is typically sufficient.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">International Reach</h3>
                <p className="text-gray-700">
                  <strong>Big 4:</strong> Have offices worldwide, enabling seamless coordination for
                  multinational groups. If you have subsidiaries in multiple countries, Big 4 can
                  coordinate group audits globally using their network. This is critical for
                  companies with complex international structures.
                </p>
                <p className="text-gray-700">
                  <strong>Local Firms:</strong> Some are affiliated with international networks
                  (e.g., Grant Thornton, BDO, Crowe are global networks with local member firms),
                  providing international reach. Pure local firms may not have global capabilities but
                  can coordinate with correspondent firms when needed.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  When to Choose Big 4 vs Local
                </h3>

                <div className="mt-6 rounded-lg border-2 border-purple-200 bg-purple-50 p-6">
                  <h4 className="mb-4 text-xl font-bold text-purple-900">
                    Choose Big 4 Firms If You:
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Are a publicly listed company or planning IPO</li>
                    <li>Are a subsidiary of a multinational group (especially US-listed)</li>
                    <li>Operate in highly regulated specialized sectors</li>
                    <li>Need global brand credibility (e.g., for international investors)</li>
                    <li>Have complex international operations requiring coordination</li>
                    <li>
                      Have annual revenue exceeding AED 100M and budget isn't a primary constraint
                    </li>
                    <li>Require extensive advisory services beyond audit</li>
                  </ul>
                </div>

                <div className="mt-6 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                  <h4 className="mb-4 text-xl font-bold text-blue-900">
                    Choose Local Firms If You:
                  </h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Are an SME or private company (under AED 100M revenue)</li>
                    <li>Want to minimize audit costs while maintaining quality</li>
                    <li>Value direct access to partners and personalized service</li>
                    <li>Have straightforward operations and standard industry</li>
                    <li>Need flexible, responsive audit support</li>
                    <li>Prefer building long-term relationships with your auditor</li>
                    <li>Are a startup or growing business</li>
                  </ul>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  The Middle Ground: Mid-Tier Firms
                </h3>
                <p className="text-gray-700">
                  Between Big 4 and small local firms are mid-tier firms like Grant Thornton, BDO,
                  Crowe, RSM, and Mazars. These offer a balance: more affordable than Big 4, more
                  accessible, yet with international networks and strong capabilities. Mid-tier firms
                  are excellent choices for medium-sized businesses seeking quality audit at
                  reasonable fees with some international capability.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Common Misconceptions</h3>
                <p className="text-gray-700">
                  <strong>Misconception 1: "Banks only accept Big 4 audits"</strong> - False. UAE
                  banks accept audits from any Ministry-approved auditor. Some international banks or
                  specialized financing may prefer Big 4, but standard business banking accepts all
                  approved auditors.
                </p>
                <p className="text-gray-700">
                  <strong>Misconception 2: "Local firms aren't qualified"</strong> - False. All
                  Ministry-approved auditors meet strict qualification requirements (typically CPA,
                  CA, or ACCA with years of experience). Many local firm partners trained at Big 4
                  before starting their own practices.
                </p>
                <p className="text-gray-700">
                  <strong>Misconception 3: "Cheap audits mean poor quality"</strong> - Not
                  necessarily. Lower fees often reflect lower overhead and leaner operations, not
                  lower quality. The key is choosing a reputable, experienced local firm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Which Audit Firm Tier is Right for You?
              </h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      Large Enterprise (AED 100M+ revenue)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">
                      <strong>Recommended:</strong> Big 4 or Top Mid-Tier Firms
                    </p>
                    <p className="text-gray-600">
                      You need robust audit processes, potential for IPO, international credibility,
                      and specialized industry expertise. The premium cost is justified by the value
                      and credibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Medium Business (AED 20-100M revenue)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">
                      <strong>Recommended:</strong> Mid-Tier or Established Local Firms
                    </p>
                    <p className="text-gray-600">
                      You need quality audit at reasonable cost, some advisory capability, and
                      responsive service. Mid-tier firms like Grant Thornton or established local
                      firms like Farahat & Co offer the best value.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Small Business (Under AED 20M revenue)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">
                      <strong>Recommended:</strong> Reputable Local Firms
                    </p>
                    <p className="text-gray-600">
                      Cost-effectiveness is important, but so is quality and service. Choose an
                      experienced local firm with good reputation, partner involvement, and flexible
                      service. You'll get better value than Big 4 without sacrificing quality.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle>Need Help Choosing?</CardTitle>
                  <CardDescription>
                    Our audit experts can recommend the right approach based on your specific
                    situation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button asChild size="lg" className="flex-1">
                      <Link href={`/${locale}/contact`}>Schedule Free Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="flex-1">
                      <Link href={`/${locale}/calculator`}>Get Audit Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Established Local Firm with 37 Years of Excellence</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Farahat & Co combines the quality of Big 4 with the accessibility and value of a local
              firm. Over 28,000 audits completed, Ministry-approved, serving all industries.
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
                <Link href={`/${locale}/about`}>Learn About Our Firm</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
