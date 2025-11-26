'use client';

import { SITE_CONFIG, COMPANY_STATS } from '@/lib/constants';

/**
 * Organization Schema for Audit Firms Dubai (Farahat & Co)
 * Implements schema.org/Organization for brand recognition
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: 'Audit Firms Dubai',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundedYear,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'IBIS Hotel Building Office Entrance 5th Floor, Office No.: 5001, Rigga Road',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '4647',
      addressCountry: 'AE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar'],
        option: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971 52 6922588',
        contactType: 'sales',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar'],
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/farahat-co',
      'https://twitter.com/auditfirmsdubai',
      'https://www.facebook.com/farahatandco',
      'https://www.instagram.com/auditfirmsdubai',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: COMPANY_STATS.clientsServed.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    award: [
      'Best Audit Firm Dubai 2024',
      'Excellence in Professional Services 2023',
      'Top 10 Accounting Firms UAE 2023',
    ],
    knowsAbout: [
      'External Audit',
      'Internal Audit',
      'Forensic Audit',
      'Due Diligence',
      'IFRS',
      'UAE Audit Regulations',
      'VAT Compliance',
      'RERA Audit',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
