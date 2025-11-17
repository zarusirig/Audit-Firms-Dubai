import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { serverLoaders } from '@/lib/content-loaders'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import { LocationHero, LocationAbout, LocationAdvantages, LocationMap, LocationDirections, LocationServices } from '@/components/locations'


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const data = await serverLoaders.getLocationBySlug('business-bay')
  if (!data) {
    return { title: 'Location Not Found' }
  }
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/locations/${data.slug}`,
      languages: { en: `${SITE_CONFIG.url}/en/locations/${data.slug}`, ar: `${SITE_CONFIG.url}/ar/locations/${data.slug}` },
    },
  }
}

export default async function BusinessBayLocationPage({ params }: { params: Promise<{ locale: string }> }) {
  const data = await serverLoaders.getLocationBySlug('business-bay')

  if (!data) {
    notFound()
  }
  // TypeScript: notFound() never returns, data is guaranteed defined here
  const pageData = data!

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Locations', href: `/${locale}/locations` },
    { label: pageData.title, href: `/${locale}/locations/${pageData.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema location={{ name: pageData.location.name, address: pageData.location.address, latitude: pageData.location.coordinates.lat, longitude: pageData.location.coordinates.lng }} />
      <div className="container mx-auto px-4 py-4"><Breadcrumbs items={breadcrumbItems} /></div>
      <LocationHero headline={pageData.heroHeadline} subheadline={pageData.heroSubheadline} description={pageData.heroDescription} address={pageData.location.address} phone={pageData.location.phone} hours={pageData.location.hours} />
      <LocationAbout title={pageData.aboutTitle} content={pageData.aboutContent} />
      <LocationAdvantages advantages={pageData.whyThisLocation} />
      <LocationMap mapUrl={pageData.location.mapUrl} coordinates={pageData.location.coordinates} landmarks={pageData.nearbyLandmarks} />
      <LocationDirections directions={pageData.directions} />
      <LocationServices services={pageData.servicesOffered} clientFocus={pageData.clientFocus} />
    </>
  )
}
