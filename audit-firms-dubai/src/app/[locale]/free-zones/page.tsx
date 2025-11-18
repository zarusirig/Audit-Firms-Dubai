import { Metadata } from 'next'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import Link from 'next/link'
import { FREE_ZONES } from '@/lib/content/free-zones'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'UAE Free Zone Audit Requirements | DMCC, JAFZA, DAFZA, Dubai South',
    description:
      'Complete guide to audit requirements for UAE free zones. DMCC, JAFZA, DAFZA, Dubai South audit thresholds, deadlines, approved auditors.',
    keywords: [
      'free zone audit requirements',
      'dmcc audit',
      'jafza audit',
      'dafza audit',
      'dubai south audit',
      'free zone auditors uae',
      'free zone compliance',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/free-zones`,
      languages: {
        en: `${SITE_CONFIG.url}/en/free-zones`,
        ar: `${SITE_CONFIG.url}/ar/free-zones`,
      },
    },
  }
}

export default async function FreeZonesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Free Zones', href: `/${locale}/free-zones` },
  ]

  const freeZonesList = Object.values(FREE_ZONES)

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              UAE Free Zone Audit Requirements
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Comprehensive guide to audit requirements for major UAE free zones
            </p>
            <p className="text-lg text-slate-400">
              DMCC, JAFZA, DAFZA, Dubai South - Thresholds, Deadlines, and Compliance
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Free Zone Audit Requirements Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                UAE free zones have varying audit requirements depending on the specific zone and your
                company's revenue. Understanding these requirements is crucial for compliance and smooth
                license renewal.
              </p>
              <p>
                Unlike mainland UAE companies (which require audit regardless of revenue), most free zones
                have revenue thresholds below which simplified accounts or management accounts are acceptable
                instead of full statutory audits.
              </p>
              <p>
                This guide covers the four major free zones where most businesses operate: DMCC, JAFZA,
                DAFZA, and Dubai South.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Free Zone</th>
                    <th className="px-6 py-4 text-left">Audit Threshold</th>
                    <th className="px-6 py-4 text-left">Filing Deadline</th>
                    <th className="px-6 py-4 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold">DMCC</td>
                    <td className="px-6 py-4">Revenue &gt; AED 1M</td>
                    <td className="px-6 py-4">6 months from year-end</td>
                    <td className="px-6 py-4">Jumeirah Lakes Towers</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="px-6 py-4 font-semibold">JAFZA</td>
                    <td className="px-6 py-4">Revenue &gt; AED 3M</td>
                    <td className="px-6 py-4">6 months from year-end</td>
                    <td className="px-6 py-4">Jebel Ali</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold">Dubai South</td>
                    <td className="px-6 py-4">All companies (no threshold)</td>
                    <td className="px-6 py-4">4-6 months from year-end</td>
                    <td className="px-6 py-4">Al Maktoum Airport Area</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="px-6 py-4 font-semibold">DAFZA</td>
                    <td className="px-6 py-4">Revenue &gt; AED 1M</td>
                    <td className="px-6 py-4">6 months from year-end</td>
                    <td className="px-6 py-4">Dubai Airport</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Free Zone Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Detailed Requirements by Free Zone</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {freeZonesList.map((zone) => (
                <div
                  key={zone.slug}
                  className="border rounded-xl p-8 hover:shadow-2xl transition-shadow bg-white"
                >
                  <h3 className="text-2xl font-bold mb-4">{zone.title}</h3>
                  <p className="text-slate-600 mb-6">{zone.heroDescription}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="font-semibold">Audit Required:</span>
                      <span className="text-blue-600 font-bold">
                        {zone.auditRequirements.threshold}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="font-semibold">Deadline:</span>
                      <span>{zone.auditRequirements.deadline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Common Industries:</span>
                      <span>{zone.commonIndustries.length}+</span>
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/free-zones/${zone.slug}`}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Full Requirements →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Differences from Mainland</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">Revenue Thresholds</h3>
                <p className="text-slate-300">
                  Most free zones have revenue thresholds (AED 1M-3M) below which audit is not required.
                  Mainland companies require audit regardless of revenue.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">Extended Deadlines</h3>
                <p className="text-slate-300">
                  Free zones typically allow 6 months for filing, compared to 90-150 days for mainland
                  companies.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">Auditor Approval</h3>
                <p className="text-slate-300">
                  Some free zones have their own approved auditor lists, while others accept Ministry-
                  approved auditors.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">Simplified Accounts</h3>
                <p className="text-slate-300">
                  Below thresholds, free zones often accept management accounts or simplified financial
                  statements instead of full audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Free Zone Audit Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Approved auditors for all major UAE free zones. Competitive pricing, fast turnaround, expert
            service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href={`/${locale}/services/external-audit`}
              className="px-8 py-4 border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Our Audit Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
