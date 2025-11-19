import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import {
  HeroSection,
  StatisticsSection,
  ServicesGrid,
  WhyChooseUs,
  OurClients,
  TestimonialsSection,
  FAQSection,
  CTASection,
  HomeMapSection,
} from '@/components/sections/home'
import { SITE_CONFIG } from '@/lib/constants'
import { i18n, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Metadata } from 'next'

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

  const safeLocale = (['en', 'ar'].includes(locale) ? locale : 'en') as 'en' | 'ar'

  const metadata = {
    en: {
      title: 'Audit Firms Dubai | Ministry Approved Auditors Since 1985 | Farahat & Co',
      description:
        'Leading audit firm in Dubai since 1985. Ministry-approved auditors with 28,000+ clients across 140 countries. External audit, Internal audit, RERA audit, VAT compliance. Call +971 42 500 251',
      keywords: [
        'audit firms in dubai',
        'audit firm dubai',
        'external audit dubai',
        'internal audit uae',
        'rera audit',
        'vat audit dubai',
        'auditors in dubai',
        'ministry approved auditors',
        'farahat and co',
        'best audit firm dubai',
      ],
    },
    ar: {
      title: 'شركات التدقيق دبي | مدققون معتمدون منذ 1985 | فرحات وشركاه',
      description:
        'شركة تدقيق رائدة في دبي منذ 1985. مدققون معتمدون من وزارة الاقتصاد مع أكثر من 28,000 عميل في 140 دولة. التدقيق الخارجي، التدقيق الداخلي، تدقيق ريرا، الامتثال لضريبة القيمة المضافة. اتصل +971 42 500 251',
      keywords: [
        'شركات تدقيق دبي',
        'شركة تدقيق دبي',
        'التدقيق الخارجي دبي',
        'التدقيق الداخلي الإمارات',
        'تدقيق ريرا',
        'تدقيق ضريبة القيمة المضافة',
        'مدققون في دبي',
        'مدققون معتمدون',
        'فرحات وشركاه',
        'أفضل شركة تدقيق دبي',
      ],
    },
  }

  return {
    title: metadata[safeLocale].title,
    description: metadata[safeLocale].description,
    keywords: metadata[safeLocale].keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}`,
      languages: {
        en: `${SITE_CONFIG.url}/en`,
        ar: `${SITE_CONFIG.url}/ar`,
      },
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  // Get translations
  const dict = await getDictionary(locale)

  return (
    <>
      <LocalBusinessSchema />

      <HeroSection dict={dict} locale={locale} />

      <StatisticsSection dict={dict} />

      <ServicesGrid dict={dict} />

      <WhyChooseUs dict={dict} />

      <OurClients dict={dict} />

      <TestimonialsSection dict={dict} />

      <CTASection dict={dict} />

      <FAQSection dict={dict} />

      <HomeMapSection />
    </>
  )
}
