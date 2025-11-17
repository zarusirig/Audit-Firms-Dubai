import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { serverLoaders } from '@/lib/content-loaders'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import {
  ServiceHero,
  ServiceOverview,
  ProcessTimeline,
  BenefitsList,
  IndustriesServed,
  PricingSection,
  ServiceFAQ,
  RelatedServices,
} from '@/components/services'


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

  const data = await serverLoaders.getServiceBySlug('internal-audit')
  if (!data) {
    return { title: 'Service Not Found' }
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/services/${data.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services/${data.slug}`,
        ar: `${SITE_CONFIG.url}/ar/services/${data.slug}`,
      },
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${SITE_CONFIG.url}/${locale}/services/${data.slug}`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function InternalAuditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const data = await serverLoaders.getServiceBySlug('internal-audit')

  if (!data) {
    notFound()
  }
  // TypeScript: notFound() never returns, data is guaranteed defined here
  const pageData = data!

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Services', href: `/${locale}/services` },
    { label: pageData.title, href: `/${locale}/services/${pageData.slug}` },
  ]

  return (
    <>
      <ServiceSchema
        name={pageData.title}
        description={pageData.metaDescription}
        serviceType="Audit Services"
        provider={SITE_CONFIG.name}
        areaServed="Dubai, UAE"
        url={`${SITE_CONFIG.url}/${locale}/services/${pageData.slug}`}
      />
      <FAQSchema faqs={pageData.faqs} />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <ServiceHero
        headline={pageData.heroHeadline}
        subheadline={pageData.heroSubheadline}
        painPoint={pageData.heroPainPoint}
        usp={pageData.heroUSP}
      />

      <ServiceOverview
        title={pageData.overviewTitle}
        content={pageData.overviewContent}
        legalRequirement={pageData.legalRequirement}
        whoNeedsIt={pageData.whoNeedsIt}
      />

      <ProcessTimeline
        title={pageData.methodologyTitle}
        steps={pageData.processSteps}
      />

      <BenefitsList
        title={pageData.benefitsTitle}
        benefits={pageData.benefits}
      />

      <IndustriesServed
        title={pageData.industriesTitle}
        industries={pageData.industries}
      />

      <PricingSection
        title={pageData.pricingTitle}
        intro={pageData.pricingIntro}
        tiers={pageData.pricingTiers}
        factors={pageData.pricingFactors}
      />

      <ServiceFAQ faqs={pageData.faqs} />

      <RelatedServices services={pageData.relatedServices} />
    </>
  )
}
