import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

export interface ServiceSchemaProps {
  name: string
  description: string
  slug: string
  priceRange?: string
  features?: string[]
  deliveryTime?: string
}

export function ServiceSchema({
  name,
  description,
  slug,
  priceRange = 'AED 15,000 - 50,000',
  features = [],
  deliveryTime = '7-10 business days',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/services/${slug}#service`,
    serviceType: name,
    name: `${name} Services in Dubai`,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Package`,
      itemListElement: [
        {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: priceRange,
            priceCurrency: 'AED',
          },
          itemOffered: {
            '@type': 'Service',
            name,
            description,
          },
          deliveryLeadTime: {
            '@type': 'QuantitativeValue',
            value: deliveryTime,
          },
        },
      ],
    },
    ...(features.length > 0 && {
      serviceOutput: features.map((feature) => ({
        '@type': 'Thing',
        name: feature,
      })),
    }),
    termsOfService: `${SITE_CONFIG.url}/terms`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '500',
    },
  }

  return (
    <Script
      id={`service-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
