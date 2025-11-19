'use client';

/**
 * Service Schema for individual service pages
 * Helps search engines understand service offerings
 */

import { SITE_CONFIG } from '@/lib/constants';

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
  provider = SITE_CONFIG.name,
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
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    ...(priceRange && { priceRange }),
    ...(url && { url }),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url || `${SITE_CONFIG.url}/contact`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
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
