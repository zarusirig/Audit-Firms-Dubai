import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import {
  HeroSection,
  StatisticsSection,
  ServicesGrid,
  AccountingServicesSection,
  WhyChooseUs,
  OurClients,
  TestimonialsSection,
  FAQSection,
  CTASection,
  HomeMapSection,
  LocationCoverageSection,
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
      title: 'Audit Firms in Dubai | Accounting & Auditing Services UAE | Farahat & Co',
      description:
        'Leading audit & accounting firms in Dubai & UAE. Ministry-approved auditors. ✓ External audit ✓ VAT audit ✓ Accounting services ✓ All free zones ✓ 7-day delivery ✓ 28,000+ clients. +971 4 250 0251',
      keywords: [
        'audit firms in dubai',
        'audit firms in uae',
        'auditing firms in dubai',
        'accounting firms in dubai',
        'accounting and auditing firms',
        'chartered accountants dubai',
        'audit firm dubai',
        'external audit dubai',
        'internal audit uae',
        'rera audit',
        'vat audit dubai',
        'auditors in dubai',
        'ministry approved auditors',
        'accounting services dubai',
        'free zone audit',
        'farahat and co',
      ],
    },
    ar: {
      title: 'شركات التدقيق دبي | مدققون معتمدون منذ 1985 | فرحات وشركاه',
      description:
        'شركة تدقيق رائدة في دبي منذ 1985. مدققون معتمدون من وزارة الاقتصاد مع أكثر من 28,000 عميل في 140 دولة. التدقيق الخارجي، التدقيق الداخلي، تدقيق ريرا، الامتثال لضريبة القيمة المضافة. اتصل +971 4 250 0251',
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

      <AccountingServicesSection dict={dict} />

      <WhyChooseUs dict={dict} />

      <OurClients dict={dict} />

      <TestimonialsSection dict={dict} />

      <CTASection dict={dict} />

      <FAQSection dict={dict} />

      <HomeMapSection />

      <LocationCoverageSection dict={dict} />
    </>
  )
}
