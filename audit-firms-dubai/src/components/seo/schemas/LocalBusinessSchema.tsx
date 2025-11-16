'use client';

/**
 * LocalBusiness Schema for Audit Firms Dubai
 * Optimized for local SEO in Dubai, UAE
 */

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
    name: 'Audit Firms Dubai - Business Bay Office',
    address: 'Business Bay, Dubai, UAE',
    latitude: 25.1872,
    longitude: 55.2631,
  };

  const loc = location || defaultLocation;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://auditfirmsindubai.com/#localbusiness',
    name: loc.name,
    image: 'https://auditfirmsindubai.com/office.jpg',
    url: 'https://auditfirmsindubai.com',
    telephone: '+971-42-500-251',
    email: 'info@auditfirmsindubai.com',
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
      reviewCount: '1247',
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
