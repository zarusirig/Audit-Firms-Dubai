import { Metadata } from 'next'
import { COMPLIANCE_PAGES } from '@/lib/content/compliance'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'
import {
  ServiceHero,
  ServiceOverview,
  ProcessTimeline,
  BenefitsList,
  ServiceFAQ,
  RelatedServices,
} from '@/components/services'

const complianceData = COMPLIANCE_PAGES['ifrs-standards']

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

export default async function IFRSStandardsPage({
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

  // Transform compliance timeline to process steps format
  // Note: We cast to any first because the component expects specific fields like 'week' and 'deliverables'
  const timelineSteps = complianceData.timeline?.map((item) => ({
    week: item.date, // Map date to 'week' as it's the time indicator
    title: item.title,
    description: item.description,
    deliverables: [] // Provide empty array as timeline items don't have deliverables
  })) || []

  // Transform related pages to related services format
  const relatedServices = complianceData.relatedPages.map(page => ({
    title: page.title,
    slug: page.slug.replace(/^\//, '').replace(/^(en|ar)\//, ''), // Ensure clean slug
    description: page.description,
    icon: 'FileText' as const // Default icon for related resources
  }))

  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={complianceData.faqs} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <ServiceHero
        headline={complianceData.heroHeadline}
        subheadline={complianceData.heroSubheadline}
        painPoint={complianceData.heroDescription}
        usp="Mandatory UAE Compliance"
        image="/images/services/external-audit-hero.jpg"
      />

      {/* Introduction */}
      <ServiceOverview
        title={complianceData.introductionTitle}
        content={complianceData.introduction}
      />

      {/* Main Sections - Rendered as separate overview sections for now */}
      {complianceData.sections.map((section, index) => (
        <ServiceOverview
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}

      {/* Key Standards */}
      <BenefitsList
        title="Key IFRS Standards"
        benefits={complianceData.keyItems.map(item => ({
          title: item.title,
          description: item.description,
          icon: 'briefcase' as const // Default icon for standards
        }))}
      />

      {/* Timeline */}
      {timelineSteps.length > 0 && (
        <ProcessTimeline
          title="Implementation Timeline"
          steps={timelineSteps}
        />
      )}

      {/* FAQs */}
      <ServiceFAQ faqs={complianceData.faqs} />

      {/* Related Resources */}
      <RelatedServices services={relatedServices} />
    </>
  )
}
