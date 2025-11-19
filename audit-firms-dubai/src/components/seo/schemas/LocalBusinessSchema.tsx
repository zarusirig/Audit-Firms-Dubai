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
    name: loc.name,
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
    },
    hasMap: 'https://goo.gl/maps/example',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
