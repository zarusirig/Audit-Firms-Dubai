import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generation for Audit Firms Dubai
 * Implements bilingual support (English/Arabic) with hreflang
 * Includes all pages with proper priority and change frequency
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsdubai.ae';

// Supported locales
const locales = ['en', 'ar'] as const;

// Core pages with SEO priorities
const staticPages = [
  { path: '', priority: 1.0, changeFreq: 'weekly' as const },
  { path: 'about', priority: 0.9, changeFreq: 'monthly' as const },
  { path: 'contact', priority: 0.9, changeFreq: 'monthly' as const },
  { path: 'calculator', priority: 0.8, changeFreq: 'monthly' as const },
  { path: 'faq', priority: 0.7, changeFreq: 'monthly' as const },
];

// Service pages - high priority for SEO
const servicePages = [
  'external-audit',
  'internal-audit',
  'due-diligence',
  'forensic-audit',
  'rera-audit',
  'vat-audit',
  'special-purpose-audits',
].map((slug) => ({
  path: `services/${slug}`,
  priority: 0.9,
  changeFreq: 'monthly' as const,
}));

// Industry-specific pages
const industryPages = [
  'real-estate',
  'trading',
  'manufacturing',
  'financial-services',
  'healthcare',
  'hospitality',
  'technology',
  'construction',
  'ecommerce',
].map((slug) => ({
  path: `industries/${slug}`,
  priority: 0.8,
  changeFreq: 'monthly' as const,
}));

// Location pages - critical for local SEO
const locationPages = [
  'difc',
  'business-bay',
  'dubai-marina',
  'jlt',
  'downtown-dubai',
].map((slug) => ({
  path: `locations/${slug}`,
  priority: 0.8,
  changeFreq: 'monthly' as const,
}));

// Guide/pillar content pages
const guidePages = [
  { path: 'guides/uae-audit-requirements', priority: 0.85, changeFreq: 'monthly' as const },
  { path: 'guides/ifrs-implementation', priority: 0.85, changeFreq: 'monthly' as const },
];

// Combine all pages
const allPages = [
  ...staticPages,
  ...servicePages,
  ...industryPages,
  ...locationPages,
  ...guidePages,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each page in each locale
  allPages.forEach((page) => {
    locales.forEach((locale) => {
      const url = page.path
        ? `${SITE_URL}/${locale}/${page.path}`
        : `${SITE_URL}/${locale}`;

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFreq,
        priority: page.priority,
        // Add alternates for bilingual support
        alternates: {
          languages: {
            en: page.path
              ? `${SITE_URL}/en/${page.path}`
              : `${SITE_URL}/en`,
            ar: page.path
              ? `${SITE_URL}/ar/${page.path}`
              : `${SITE_URL}/ar`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
