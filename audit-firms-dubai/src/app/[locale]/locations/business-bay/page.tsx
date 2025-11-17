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

  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Locations', href: `/${locale}/locations` },
    { label: data.title, href: `/${locale}/locations/${data.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema location={{ name: data.location.name, address: data.location.address, latitude: data.location.coordinates.lat, longitude: data.location.coordinates.lng }} />
      <div className="container mx-auto px-4 py-4"><Breadcrumbs items={breadcrumbItems} /></div>
      <LocationHero headline={data.heroHeadline} subheadline={data.heroSubheadline} description={data.heroDescription} address={data.location.address} phone={data.location.phone} hours={data.location.hours} />
      <LocationAbout title={data.aboutTitle} content={data.aboutContent} />
      <LocationAdvantages advantages={data.whyThisLocation} />
      <LocationMap mapUrl={data.location.mapUrl} coordinates={data.location.coordinates} landmarks={data.nearbyLandmarks} />
      <LocationDirections directions={data.directions} />
      <LocationServices services={data.servicesOffered} clientFocus={data.clientFocus} />
    </>
  )
}
}
