import { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration for Audit Firms Dubai
 * Controls search engine crawling behavior
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsindubai.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Block API routes
          '/admin/',         // Block admin routes (if any)
          '/_next/',         // Block Next.js internals
          '/private/',       // Block private content
          '/*?*utm_*',       // Block tracking parameters
          '/*?*fbclid*',     // Block Facebook click IDs
          '/*?*gclid*',      // Block Google click IDs
        ],
        crawlDelay: 0,       // No delay for general crawlers
      },
      {
        // Special rules for Google
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        // Special rules for Bing
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        // Block AI scrapers if needed (can be adjusted based on policy)
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai'],
        disallow: '/',
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
    ],
    host: SITE_URL,
  };
}
