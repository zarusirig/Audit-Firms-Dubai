import { Metadata } from 'next';

/**
 * SEO Meta Tags Generator for Audit Firms Dubai
 * Generates optimized meta tags, Open Graph, and Twitter Cards
 */

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  locale?: 'en' | 'ar';
  alternateLocales?: { locale: string; url: string }[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsdubai.ae';
const SITE_NAME = 'Audit Firms Dubai - Farahat & Co';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetaTags({
  title,
  description,
  canonical,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  locale = 'en',
  alternateLocales = [],
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: MetaTagsProps): Metadata {
  const fullTitle = title.includes('Audit Firms Dubai')
    ? title
    : `${title} | Audit Firms Dubai`;

  const canonicalUrl = canonical || SITE_URL;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),

    alternates: {
      canonical: canonicalUrl,
      languages: alternateLocales.reduce((acc, alt) => {
        acc[alt.locale] = alt.url;
        return acc;
      }, {} as Record<string, string>),
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'ar_AE',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@auditfirmsdubai',
      site: '@auditfirmsdubai',
    },

    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },

    ...(author && { authors: [{ name: author }] }),

    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Audit Firms Dubai | Ministry Approved Auditors Since 1985 | Farahat & Co',
    template: '%s | Audit Firms Dubai',
  },
  description:
    'Leading audit firm in Dubai since 1985. Ministry-approved auditors with 28,000+ clients across 140 countries. ✓ External audit ✓ Internal audit ✓ RERA audit ✓ VAT compliance. Call +971 42 500 251',
  keywords: [
    'audit firms in dubai',
    'audit firm dubai',
    'external audit dubai',
    'internal audit uae',
    'rera audit',
    'vat audit dubai',
    'auditors in dubai',
    'ministry approved auditors',
    'farahat and co',
  ],
  authors: [{ name: 'Farahat & Co' }],
  creator: 'Audit Firms Dubai',
  publisher: 'Farahat & Co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
