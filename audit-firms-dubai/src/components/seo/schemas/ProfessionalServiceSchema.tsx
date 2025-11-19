import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

export interface ProfessionalServiceSchemaProps {
  serviceName?: string
  description?: string
}

export function ProfessionalServiceSchema({
  serviceName = 'Audit Services',
  description = SITE_CONFIG.description,
}: ProfessionalServiceSchemaProps = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#professionalservice`,
    name: `${SITE_CONFIG.name} - ${serviceName}`,
    alternateName: 'Audit Firms Dubai',
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
      width: 240,
      height: 80,
    },
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'AED 15,000 - 200,000',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: [
      {
        '@type': 'City',
        name: 'Dubai',
      },
      {
        '@type': 'City',
        name: 'Abu Dhabi',
      },
      {
        '@type': 'City',
        name: 'Sharjah',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    ],
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'United Arab Emirates',
    },
    knowsAbout: [
      'External Audit',
      'Internal Audit',
      'IFRS',
      'International Standards on Auditing',
      'UAE Commercial Companies Law',
      'VAT Audit',
      'Corporate Tax',
      'Due Diligence',
      'Forensic Audit',
      'RERA Audit',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Ministry Approval',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Ministry of Economy - UAE',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ISO Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'ISO 9001:2015',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '28058',
    },
  }

  return (
    <Script
      id="professional-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
