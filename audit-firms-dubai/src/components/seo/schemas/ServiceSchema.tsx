'use client';

/**
 * Service Schema for individual service pages
 * Helps search engines understand service offerings
 */

export interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  provider?: string;
  priceRange?: string;
  url?: string;
}

export function ServiceSchema({
  name,
  description,
  serviceType,
  areaServed = 'Dubai, UAE',
  provider = 'Farahat & Co',
  priceRange,
  url,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://auditfirmsindubai.com',
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    ...(priceRange && { priceRange }),
    ...(url && { url }),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url || 'https://auditfirmsindubai.com/contact',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+971-42-500-251',
        contactType: 'Customer Service',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
