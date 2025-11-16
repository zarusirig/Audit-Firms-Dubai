import { Metadata } from 'next'
import { GUIDES } from '@/lib/content/guides'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/schemas/ArticleSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import {
  GuideHero,
  GuideTOC,
  GuideSection,
  GuideKeyTakeaways,
  GuideDownloadables,
  GuideRelated,
  GuideFAQ,
} from '@/components/guides'

const guideData = GUIDES['uae-audit-requirements']

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
    title: guideData.metaTitle,
    description: guideData.metaDescription,
    keywords: guideData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/guides/${guideData.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/guides/${guideData.slug}`,
        ar: `${SITE_CONFIG.url}/ar/guides/${guideData.slug}`,
      },
    },
  }
}

export default async function UAEAuditRequirementsGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Guides', href: `/${locale}/guides` },
    { label: guideData.title, href: `/${locale}/guides/${guideData.slug}` },
  ]

  return (
    <>
      <ArticleSchema
        title={guideData.title}
        description={guideData.metaDescription}
        image={`${SITE_CONFIG.url}/og-image.jpg`}
        datePublished={guideData.publishDate}
        dateModified={guideData.lastUpdated}
        author={guideData.author}
        url={`${SITE_CONFIG.url}/${locale}/guides/${guideData.slug}`}
      />
      <FAQSchema faqs={guideData.faqs} />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <GuideHero
        headline={guideData.heroHeadline}
        subheadline={guideData.heroSubheadline}
        description={guideData.heroDescription}
        readTime={guideData.readTime}
        publishDate={guideData.publishDate}
        lastUpdated={guideData.lastUpdated}
        author={guideData.author}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 max-w-7xl mx-auto">
          <aside className="lg:block hidden">
            <GuideTOC items={guideData.tableOfContents} />
          </aside>

          <article className="prose prose-lg max-w-none">
            <section id="introduction" className="scroll-mt-24 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary-600">
                Introduction
              </h2>
              {guideData.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            {guideData.sections.map((section) => (
              <GuideSection key={section.id} {...section} />
            ))}

            <GuideKeyTakeaways takeaways={guideData.keyTakeaways} />

            <GuideDownloadables downloadables={guideData.downloadables} />

            <GuideRelated guides={guideData.relatedGuides} locale={locale} />

            <GuideFAQ faqs={guideData.faqs} />
          </article>
        </div>
      </div>
    </>
  )
}
