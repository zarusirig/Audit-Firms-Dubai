'use client';

/**
 * LocalBusiness Schema for Audit Firms Dubai
 * Optimized for local SEO in Dubai, UAE
 */

import { SITE_CONFIG, COMPANY_STATS } from '@/lib/constants';

interface LocalBusinessSchemaProps {
  location?: {
    name: string;
    address: string;
    latitude?: number;
    longitude?: number;
  };
}

export function LocalBusinessSchema({ location }: LocalBusinessSchemaProps = {}) {
  const defaultLocation = {
    name: `${SITE_CONFIG.name} - Business Bay Office`,
    address: SITE_CONFIG.address,
    latitude: 25.1872,
    longitude: 55.2631,
  };

  const loc = location || defaultLocation;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    additionalType: [
      'https://schema.org/AccountingService',
      'https://schema.org/FinancialService',
      'https://schema.org/Auditor',
    ],
    name: loc.name,
    alternateName: [
      'Audit Firms in Dubai',
      'Farahat and Co Auditors',
      'Accounting Firms Dubai',
      'Auditing Companies Dubai',
    ],
    description: 'Leading audit and accounting firms in Dubai & UAE. Ministry-approved auditors providing external audit, internal audit, VAT audit, and accounting services since 1985. Serving businesses across Dubai mainland, all free zones, Abu Dhabi, Sharjah, and throughout UAE.',
    image: `${SITE_CONFIG.url}/office.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: 'AED 15,000 - AED 100,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE',
    },
    geo: loc.latitude && loc.longitude ? {
      '@type': 'GeoCoordinates',
      latitude: loc.latitude,
      longitude: loc.longitude,
    } : undefined,
    areaServed: [
      {
        '@type': 'City',
        name: 'Dubai',
        containedIn: {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
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
        '@type': 'State',
        name: 'United Arab Emirates',
      },
    ],
    serviceArea: [
      'Business Bay',
      'DIFC',
      'DMCC',
      'JAFZA',
      'Dubai Marina',
      'Dubai Mainland',
      'Abu Dhabi',
      'Sharjah',
      'All UAE Free Zones',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Audit and Accounting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'External Audit Services in Dubai',
            description: 'Ministry-approved statutory audit services for UAE companies',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Internal Audit Services',
            description: 'Risk-based internal audit for Dubai and UAE businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VAT Audit Dubai',
            description: 'VAT compliance audit and tax advisory services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accounting Services Dubai',
            description: 'Bookkeeping, financial reporting, and CFO services for UAE businesses',
          },
        },
      ],
    },
    knowsAbout: [
      'External Audit',
      'Internal Audit',
      'VAT Audit',
      'RERA Audit',
      'Forensic Audit',
      'Due Diligence',
      'Accounting Services',
      'CFO Services',
      'UAE Federal Law',
      'IFRS Standards',
      'Ministry of Economy Regulations',
      'Free Zone Compliance',
      'Dubai Audit Requirements',
      'Corporate Tax UAE',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'AED, USD, EUR',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: COMPANY_STATS.clientsServed.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    hasMap: 'https://goo.gl/maps/example',
    foundingDate: '1985',
    slogan: '7-Day Audit Delivery - Ministry Approved Since 1985',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
