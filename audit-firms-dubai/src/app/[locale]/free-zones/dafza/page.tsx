import { Metadata } from 'next'
import { FREE_ZONES } from '@/lib/content/free-zones'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { DAFZACTASection } from '@/components/free-zones/DAFZACTASection'

const freeZone = FREE_ZONES['dafza']

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
  }
}

export default async function DAFZAAuditRequirementsPage({
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

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{freeZone.heroHeadline}</h1>
            <p className="text-xl text-slate-300 mb-2">{freeZone.heroSubheadline}</p>
            <p className="text-lg text-slate-400">{freeZone.heroDescription}</p>
          </div>
        </div>
      </section>

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

      <DAFZACTASection locale={locale} />
    </>
  )
}
