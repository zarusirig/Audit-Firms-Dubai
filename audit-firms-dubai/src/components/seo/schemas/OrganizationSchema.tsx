'use client';

/**
 * Organization Schema for Audit Firms Dubai (Farahat & Co)
 * Implements schema.org/Organization for brand recognition
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://auditfirmsindubai.com/#organization',
    name: 'Farahat & Co',
    alternateName: 'Audit Firms Dubai',
    url: 'https://auditfirmsindubai.com',
    logo: 'https://auditfirmsindubai.com/logo.png',
    description:
      'Leading audit and accounting firm in Dubai, UAE since 1985. Ministry-approved auditors providing external audit, internal audit, and advisory services.',
    foundingDate: '1985',
    email: 'info@auditfirmsindubai.com',
    telephone: '+971-42-500-251',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Business Bay',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: [
      'https://www.linkedin.com/company/farahat-co',
      'https://twitter.com/auditfirmsdubai',
      'https://www.facebook.com/farahatandco',
      'https://www.instagram.com/auditfirmsdubai',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1247',
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
