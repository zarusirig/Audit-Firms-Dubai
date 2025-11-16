import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'
import { SITE_CONFIG } from '@/lib/constants'
import { i18n, type Locale, localeDirections } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { notFound } from 'next/navigation'
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema'
import '../globals.css'

// NOTE: Google Fonts temporarily disabled due to build environment network restrictions
// Fonts are configured in app/fonts.ts and will be enabled in production deployment

// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Site metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: SITE_CONFIG.name,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
      'audit firms in uae',
      'audit firm in dubai',
      'best audit firm in dubai',
      'external audit dubai',
      'internal audit dubai',
      'statutory audit uae',
      'audit services dubai',
      'شركة تدقيق دبي',
      'مدقق حسابات الإمارات',
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      url: `${SITE_CONFIG.url}/${locale}`,
      siteName: SITE_CONFIG.name,
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: ['/og-image.jpg'],
    },
    verification: {
      google: 'google-site-verification-code',
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}`,
      languages: {
        en: `${SITE_CONFIG.url}/en`,
        ar: `${SITE_CONFIG.url}/ar`,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Await params (Next.js 15+)
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  // Validate locale
  if (!i18n.locales.includes(locale)) {
    notFound()
  }

  // Get translations
  const dict = await getDictionary(locale)
  const direction = localeDirections[locale]

  return (
    <html
      lang={locale}
      dir={direction}
      className="font-sans"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <div className="flex min-h-screen flex-col">
          <Navigation locale={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
