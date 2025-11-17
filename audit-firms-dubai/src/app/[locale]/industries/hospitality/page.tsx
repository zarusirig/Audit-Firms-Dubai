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

  const data = await serverLoaders.getIndustryBySlug('hospitality')
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

export default async function HospitalityIndustryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const data = await serverLoaders.getIndustryBySlug('hospitality')

  if (!data) {
    notFound()
  }
  // TypeScript: notFound() never returns, data is guaranteed defined here
  const pageData = data!

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Industries', href: `/${locale}/industries` },
    { label: pageData.title, href: `/${locale}/industries/${pageData.slug}` },
  ]

  return (
    <>
      <ServiceSchema
        name={pageData.title}
        description={pageData.metaDescription}
        serviceType="Industry-Specialized Audit Services"
        provider={SITE_CONFIG.name}
        areaServed="Dubai, UAE"
        url={`${SITE_CONFIG.url}/${locale}/industries/${pageData.slug}`}
      />
      <FAQSchema faqs={pageData.faqs} />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <IndustryHero
        headline={pageData.heroHeadline}
        subheadline={pageData.heroSubheadline}
        description={pageData.heroDescription}
      />

      <IndustryOverview
        title={pageData.industryOverview.title}
        content={pageData.industryOverview.content}
      />

      <IndustryChallenges
        title={pageData.challenges.title}
        challenges={pageData.challenges.items}
      />

      <IndustryCompliance
        title={pageData.compliance.title}
        regulations={pageData.compliance.regulations}
      />

      <IndustryApproach
        title={pageData.ourApproach.title}
        description={pageData.ourApproach.description}
        steps={pageData.ourApproach.steps}
      />

      <IndustryBenefits
        title={pageData.benefits.title}
        benefits={pageData.benefits.items}
      />

      <IndustryFindings
        title={pageData.commonFindings.title}
        findings={pageData.commonFindings.findings}
      />

      <IndustryCaseStudy caseStudy={pageData.caseStudy} />

      <IndustryFAQ faqs={pageData.faqs} />

      <IndustryRelated services={pageData.relatedServices} locale={locale} />
    </>
  )
}
