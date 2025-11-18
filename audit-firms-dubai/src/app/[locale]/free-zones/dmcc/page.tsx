import { Metadata } from 'next'
import { FREE_ZONES } from '@/lib/content/free-zones'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import Link from 'next/link'

const freeZone = FREE_ZONES['dmcc']

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
    title: freeZone.metaTitle,
    description: freeZone.metaDescription,
    keywords: freeZone.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/free-zones/${freeZone.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/free-zones/${freeZone.slug}`,
        ar: `${SITE_CONFIG.url}/ar/free-zones/${freeZone.slug}`,
      },
    },
    openGraph: {
      title: freeZone.metaTitle,
      description: freeZone.metaDescription,
      url: `${SITE_CONFIG.url}/${locale}/free-zones/${freeZone.slug}`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'article',
    },
  }
}

export default async function DMCCAuditRequirementsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Free Zones', href: `/${locale}/free-zones` },
    { label: freeZone.title, href: `/${locale}/free-zones/${freeZone.slug}` },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {freeZone.heroHeadline}
            </h1>
            <p className="text-xl text-slate-300 mb-2">{freeZone.heroSubheadline}</p>
            <p className="text-lg text-slate-400">{freeZone.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{freeZone.overview.title}</h2>
            <div className="space-y-4 text-lg text-slate-700">
              {freeZone.overview.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{freeZone.auditRequirements.title}</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Mandatory</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {freeZone.auditRequirements.mandatory ? 'Yes' : 'No'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Threshold</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {freeZone.auditRequirements.threshold}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Deadline</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {freeZone.auditRequirements.deadline}
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Key Requirements:</h3>
                <ul className="space-y-2">
                  {freeZone.auditRequirements.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeZone.keyFeatures.map((feature, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filing Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Filing Process</h2>
            <div className="space-y-6">
              {freeZone.filingProcess.map((step) => (
                <div key={step.step} className="bg-white rounded-lg p-6 shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-slate-700 mb-2">{step.description}</p>
                      <div className="text-sm text-blue-600 font-semibold">
                        Timeline: {step.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Required Documents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {freeZone.requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-start bg-slate-50 rounded p-4">
                  <span className="text-blue-600 mr-3">📄</span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-red-900">Penalties for Non-Compliance</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Violation Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  {freeZone.penalties.map((penalty, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4">{penalty.type}</td>
                      <td className="px-6 py-4 font-semibold text-red-700">{penalty.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Benefits of DMCC</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {freeZone.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Common Industries in DMCC</h2>
            <div className="flex flex-wrap gap-3">
              {freeZone.commonIndustries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need DMCC Audit Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            DMCC-approved auditors with competitive pricing and fast turnaround.
            37 years of UAE experience.
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
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
