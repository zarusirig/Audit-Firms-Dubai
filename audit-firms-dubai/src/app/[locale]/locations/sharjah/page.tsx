import { Metadata } from 'next'
import { LOCATIONS } from '@/lib/content/locations'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema'
import {
  LocationHero,
  LocationAbout,
  LocationAdvantages,
  LocationMap,
  LocationDirections,
  LocationServices,
} from '@/components/locations'

const locationData = LOCATIONS['sharjah']

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
    title: locationData.metaTitle,
    description: locationData.metaDescription,
    keywords: locationData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/locations/${locationData.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/locations/${locationData.slug}`,
        ar: `${SITE_CONFIG.url}/ar/locations/${locationData.slug}`,
      },
    },
    openGraph: {
      title: locationData.metaTitle,
      description: locationData.metaDescription,
      url: `${SITE_CONFIG.url}/${locale}/locations/${locationData.slug}`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function SharjahLocationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Locations', href: `/${locale}/locations` },
    { label: locationData.title, href: `/${locale}/locations/${locationData.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema
        location={{
          name: locationData.location.name,
          address: locationData.location.address,
          latitude: locationData.location.coordinates.lat,
          longitude: locationData.location.coordinates.lng,
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <LocationHero
        headline={locationData.heroHeadline}
        subheadline={locationData.heroSubheadline}
        description={locationData.heroDescription}
        address={locationData.location.address}
        phone={locationData.location.phone}
        hours={locationData.location.hours}
      />

      <LocationAbout
        title={locationData.aboutTitle}
        content={locationData.aboutContent}
      />

      <LocationAdvantages advantages={locationData.whyThisLocation} />

      <LocationMap
        mapUrl={locationData.location.mapUrl}
        coordinates={locationData.location.coordinates}
        landmarks={locationData.nearbyLandmarks}
      />

      <LocationDirections directions={locationData.directions} />

      <LocationServices
        services={locationData.servicesOffered}
        clientFocus={locationData.clientFocus}
      />
    </>
  )
}




