import { Metadata } from 'next'
import { SERVICES } from '@/lib/content/services'
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

const serviceData = SERVICES['due-diligence']

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
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    keywords: serviceData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/services/${serviceData.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services/${serviceData.slug}`,
        ar: `${SITE_CONFIG.url}/ar/services/${serviceData.slug}`,
      },
    },
    openGraph: {
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      url: `${SITE_CONFIG.url}/${locale}/services/${serviceData.slug}`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function DueDiligencePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Services', href: `/${locale}/services` },
    { label: serviceData.title, href: `/${locale}/services/${serviceData.slug}` },
  ]

  return (
    <>
      <ServiceSchema
        name={serviceData.title}
        description={serviceData.metaDescription}
        serviceType="Due Diligence Services"
        provider={SITE_CONFIG.name}
        areaServed="Dubai, UAE"
        url={`${SITE_CONFIG.url}/${locale}/services/${serviceData.slug}`}
      />
      <FAQSchema faqs={serviceData.faqs} />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <ServiceHero
        headline={serviceData.heroHeadline}
        subheadline={serviceData.heroSubheadline}
        painPoint={serviceData.heroPainPoint}
        usp={serviceData.heroUSP}
        image={serviceData.heroImage}
      />

      <ServiceOverview
        title={serviceData.overviewTitle}
        content={serviceData.overviewContent}
        legalRequirement={serviceData.legalRequirement}
        whoNeedsIt={serviceData.whoNeedsIt}
      />

      <ProcessTimeline
        title={serviceData.methodologyTitle}
        steps={serviceData.processSteps}
      />

      <BenefitsList
        title={serviceData.benefitsTitle}
        benefits={serviceData.benefits}
      />

      <IndustriesServed
        title={serviceData.industriesTitle}
        industries={serviceData.industries}
      />

      <PricingSection
        title={serviceData.pricingTitle}
        intro={serviceData.pricingIntro}
        tiers={serviceData.pricingTiers}
        factors={serviceData.pricingFactors}
      />

      <ServiceFAQ faqs={serviceData.faqs} />

      <RelatedServices services={serviceData.relatedServices} />
    </>
  )
}
