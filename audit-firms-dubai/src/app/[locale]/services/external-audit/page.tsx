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


// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const data = await serverLoaders.getServiceBySlug('external-audit')
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

export default async function ExternalAuditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const data = await serverLoaders.getServiceBySlug('external-audit')

  if (!data) {
    notFound()
  }

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Services', href: `/${locale}/services` },
    { label: data.title, href: `/${locale}/services/${data.slug}` },
  ]

  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name={data.title}
        description={data.metaDescription}
        serviceType="Audit Services"
        provider={SITE_CONFIG.name}
        areaServed="Dubai, UAE"
        url={`${SITE_CONFIG.url}/${locale}/services/${data.slug}`}
      />
      <FAQSchema faqs={data.faqs} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Page Content */}
      <ServiceHero
        headline={data.heroHeadline}
        subheadline={data.heroSubheadline}
        painPoint={data.heroPainPoint}
        usp={data.heroUSP}
      />

      <ServiceOverview
        title={data.overviewTitle}
        content={data.overviewContent}
        legalRequirement={data.legalRequirement}
        whoNeedsIt={data.whoNeedsIt}
      />

      <ProcessTimeline
        title={data.methodologyTitle}
        steps={data.processSteps}
      />

      <BenefitsList
        title={data.benefitsTitle}
        benefits={data.benefits}
      />

      <IndustriesServed
        title={data.industriesTitle}
        industries={data.industries}
      />

      <PricingSection
        title={data.pricingTitle}
        intro={data.pricingIntro}
        tiers={data.pricingTiers}
        factors={data.pricingFactors}
      />

      <ServiceFAQ faqs={data.faqs} />

      <RelatedServices services={data.relatedServices} />
    </>
  )
}
