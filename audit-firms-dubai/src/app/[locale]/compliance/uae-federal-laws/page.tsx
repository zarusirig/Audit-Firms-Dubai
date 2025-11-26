import { Metadata } from 'next'
import { COMPLIANCE_PAGES } from '@/lib/content/compliance'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'

const complianceData = COMPLIANCE_PAGES['uae-federal-laws']

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
    title: complianceData.metaTitle,
    description: complianceData.metaDescription,
    keywords: complianceData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/compliance/${complianceData.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/compliance/${complianceData.slug}`,
        ar: `${SITE_CONFIG.url}/ar/compliance/${complianceData.slug}`,
      },
    },
    openGraph: {
      title: complianceData.metaTitle,
      description: complianceData.metaDescription,
      url: `${SITE_CONFIG.url}/${locale}/compliance/${complianceData.slug}`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'article',
    },
  }
}

export default async function UAEFederalLawsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Compliance', href: `/${locale}/compliance` },
    { label: complianceData.title, href: `/${locale}/compliance/${complianceData.slug}` },
  ]

  return (
    <>
      <FAQSchema faqs={complianceData.faqs} />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{complianceData.heroHeadline}</h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90 font-medium">{complianceData.heroSubheadline}</p>
          <p className="text-lg text-white/90 max-w-3xl">{complianceData.heroDescription}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{complianceData.introductionTitle}</h2>
          {complianceData.introduction.map((paragraph, index) => (
            <p key={index} className="text-lg text-neutral-900 mb-4 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </section>
      {complianceData.sections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg text-neutral-900 mb-4 leading-relaxed whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Compliance Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {complianceData.keyItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary-600">{item.title}</h3>
                <p className="text-neutral-900 mb-4">{item.description}</p>
                {item.details && (
                  <ul className="space-y-2">
                    {item.details.map((detail, dIndex) => (
                      <li key={dIndex} className="text-gray-600 flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {complianceData.timeline && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Legal Milestones</h2>
            <div className="space-y-8">
              {complianceData.timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-32">
                    <div className="font-bold text-primary-600">{event.date}</div>
                  </div>
                  <div className="flex-grow border-l-4 border-primary-600 pl-6 pb-8">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-neutral-900">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {complianceData.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-neutral-900 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {complianceData.relatedPages.map((page, index) => (
              <a key={index} href={`/${locale}${page.slug}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-primary-600">{page.title}</h3>
                <p className="text-neutral-900">{page.description}</p>
                <div className="mt-4 text-primary-600 font-semibold">Learn More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Need Help with UAE Law Compliance?</h2>
          <p className="text-xl mb-8 text-white/90 font-medium">Our experts can guide you through federal audit requirements and ensure full compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${locale}/services/external-audit`} className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Audit Services</a>
            <a href={`/${locale}/contact`} className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-800 transition-colors border-2 border-white">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
