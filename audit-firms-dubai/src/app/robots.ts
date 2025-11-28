import { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration for Audit Firms Dubai
 * Controls search engine crawling behavior
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsdubai.ae';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Block Google and Google-related bots
        userAgent: 'Google*',
        disallow: '/',
      },
      {
        // Bingbot - allow with restrictions
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/local-test/'],
      },
      {
        // AhrefsBot - allow with restrictions
        userAgent: 'AhrefsBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/local-test/'],
        crawlDelay: 10,
      },
      {
        // SEMrushBot - allow with restrictions
        userAgent: 'SEMrushBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/local-test/'],
        crawlDelay: 10,
      },
      {
        // Block MJ12bot completely
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        // Block dotbot completely
        userAgent: 'dotbot',
        disallow: '/',
      },
      {
        // General rules for all other bots
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/dashboard/',
          '/account/',
          '/login',
          '/logout',
          '/search',
          '/checkout/',
          '/payment/',
          '/invoice/',
          '/*?sort=',
          '/*?filter=',
          '/*?page=',
          '/*?utm_',
          '/*?ref=',
          '/*&session',
          '/tag/',
          '/author/',
          '/print/',
          '*/feed',
          '/local-test/',
          '/sitemap-0.xml',
          '/thank-you'
        ],
        crawlDelay: 5,
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-en.xml`,
      `${SITE_URL}/sitemap-ar.xml`,
    ],
    host: SITE_URL,
  };
}
