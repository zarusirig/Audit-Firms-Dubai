import { Metadata } from 'next'
import { INDUSTRIES } from '@/lib/content/industries'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ServiceSchema } from '@/components/seo/schemas/ServiceSchema'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import { IndustryHero, IndustryOverview, IndustryChallenges, IndustryCompliance, IndustryApproach, IndustryBenefits, IndustryFindings, IndustryCaseStudy, IndustryFAQ, IndustryRelated } from '@/components/industries'

const industryData = INDUSTRIES['healthcare']

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  return {
    title: industryData.metaTitle,
    description: industryData.metaDescription,
    keywords: industryData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/industries/${industryData.slug}`,
      languages: { en: `${SITE_CONFIG.url}/en/industries/${industryData.slug}`, ar: `${SITE_CONFIG.url}/ar/industries/${industryData.slug}` },
    },
  }
}

export default async function HealthcareIndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Industries', href: `/${locale}/industries` },
    { label: industryData.title, href: `/${locale}/industries/${industryData.slug}` },
  ]

  return (
    <>
      <ServiceSchema name={industryData.title} description={industryData.metaDescription} serviceType="Industry-Specialized Audit Services" provider={SITE_CONFIG.name} areaServed="Dubai, UAE" url={`${SITE_CONFIG.url}/${locale}/industries/${industryData.slug}`} />
      <FAQSchema faqs={industryData.faqs} />
      <div className="container mx-auto px-4 py-4"><Breadcrumbs items={breadcrumbItems} /></div>
      <IndustryHero headline={industryData.heroHeadline} subheadline={industryData.heroSubheadline} description={industryData.heroDescription} />
      <IndustryOverview title={industryData.industryOverview.title} content={industryData.industryOverview.content} />
      <IndustryChallenges title={industryData.challenges.title} challenges={industryData.challenges.items} />
      <IndustryCompliance title={industryData.compliance.title} regulations={industryData.compliance.regulations} />
      <IndustryApproach title={industryData.ourApproach.title} description={industryData.ourApproach.description} steps={industryData.ourApproach.steps} />
      <IndustryBenefits title={industryData.benefits.title} benefits={industryData.benefits.items} />
      <IndustryFindings title={industryData.commonFindings.title} findings={industryData.commonFindings.findings} />
      <IndustryCaseStudy caseStudy={industryData.caseStudy} />
      <IndustryFAQ faqs={industryData.faqs} />
      <IndustryRelated services={industryData.relatedServices} locale={locale} />
    </>
  )
}
