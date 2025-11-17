import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { serverLoaders } from '@/lib/content-loaders'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import {
  IndustryHero,
  IndustryOverview,
  IndustryChallenges,
  IndustryCompliance,
  IndustryApproach,
  IndustryBenefits,
  IndustryFindings,
  IndustryCaseStudy,
  IndustryFAQ,
  IndustryRelated,
} from '@/components/industries'


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

  const data = await serverLoaders.getIndustryBySlug('technology')
  if (!data) {
    return { title: 'Industry Not Found' }
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/industries/${data.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/industries/${data.slug}`,
        ar: `${SITE_CONFIG.url}/ar/industries/${data.slug}`,
      },
    },
  }
}

export default async function TechnologyIndustryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const data = await serverLoaders.getIndustryBySlug('technology')

  if (!data) {
    notFound()
  }

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Industries', href: `/${locale}/industries` },
    { label: data.title, href: `/${locale}/industries/${data.slug}` },
  ]

  return (
    <>
      <ServiceSchema
        name={data.title}
        description={data.metaDescription}
        serviceType="Industry-Specialized Audit Services"
        provider={SITE_CONFIG.name}
        areaServed="Dubai, UAE"
        url={`${SITE_CONFIG.url}/${locale}/industries/${data.slug}`}
      />
      <FAQSchema faqs={data.faqs} />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <IndustryHero
        headline={data.heroHeadline}
        subheadline={data.heroSubheadline}
        description={data.heroDescription}
      />

      <IndustryOverview
        title={data.industryOverview.title}
        content={data.industryOverview.content}
      />

      <IndustryChallenges
        title={data.challenges.title}
        challenges={data.challenges.items}
      />

      <IndustryCompliance
        title={data.compliance.title}
        regulations={data.compliance.regulations}
      />

      <IndustryApproach
        title={data.ourApproach.title}
        description={data.ourApproach.description}
        steps={data.ourApproach.steps}
      />

      <IndustryBenefits
        title={data.benefits.title}
        benefits={data.benefits.items}
      />

      <IndustryFindings
        title={data.commonFindings.title}
        findings={data.commonFindings.findings}
      />

      <IndustryCaseStudy caseStudy={data.caseStudy} />

      <IndustryFAQ faqs={data.faqs} />

      <IndustryRelated services={data.relatedServices} locale={locale} />
    </>
  )
}
