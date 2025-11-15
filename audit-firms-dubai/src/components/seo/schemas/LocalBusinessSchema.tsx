import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

interface LocalBusinessSchemaProps {
  locationName?: string
  address?: string
  latitude?: number
  longitude?: number
}

export function LocalBusinessSchema({
  locationName = 'Dubai',
  address = SITE_CONFIG.address,
  latitude = 25.2048,
  longitude = 55.2708,
}: LocalBusinessSchemaProps = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: `${SITE_CONFIG.name} - ${locationName}`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: 'AED 15,000 - 200,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: locationName,
      addressRegion: 'Dubai',
      postalCode: '00000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '28058',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Ahmed Al Mansoori',
        },
        datePublished: '2024-01-15',
        reviewBody:
          'Excellent audit services. Professional team that completed our external audit on time with detailed recommendations.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson',
        },
        datePublished: '2024-02-20',
        reviewBody:
          'Very knowledgeable about UAE regulations and IFRS. Made the audit process smooth and stress-free.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Audit Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'External Audit',
            description: 'Statutory audit services for UAE businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Internal Audit',
            description: 'Internal control and risk assessment services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Due Diligence',
            description: 'Financial due diligence for M&A transactions',
          },
        },
      ],
    },
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
