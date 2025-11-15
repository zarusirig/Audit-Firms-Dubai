import Script from 'next/script'
import { SITE_CONFIG, COMPANY_STATS, SOCIAL_LINKS } from '@/lib/constants'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: 'Farahat & Co - Audit Firms Dubai',
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
      width: 240,
      height: 80,
    },
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '00000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Dubai',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    ],
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
    ],
    foundingDate: '1985',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 50,
    },
    slogan: "Dubai's Most Trusted Audit Partner",
    priceRange: 'AED 15,000 - 200,000',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: COMPANY_STATS.clientsServed,
    },
    knowsAbout: [
      'Audit Services',
      'External Audit',
      'Internal Audit',
      'IFRS',
      'ISA',
      'UAE Commercial Law',
      'VAT Audit',
      'Forensic Audit',
      'Due Diligence',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Farahat & Co',
        url: 'https://www.farahatco.com',
      },
    ],
    award: [
      'ISO 9001:2015 Certified',
      'Ministry of Economy Approved',
      'DFSA Registered',
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
