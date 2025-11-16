import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export interface MetaTagsProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
  locale?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
}

/**
 * Generate SEO metadata for pages
 * Used in page.tsx files with generateMetadata function
 */
export function generateSEOMetadata(props: MetaTagsProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    canonical,
    locale = 'en_AE',
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
    noindex = false,
  } = props

  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`

  const ogImage = image.startsWith('http')
    ? image
    : `${SITE_CONFIG.url}${image}`

  const canonicalUrl = canonical || SITE_CONFIG.url

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@eliteauditdubai',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${canonicalUrl.replace('/ar/', '/en/')}`,
        ar: `${canonicalUrl.replace('/en/', '/ar/')}`,
      },
    },
  }
}

/**
 * Helper to generate metadata for service pages
 */
export function generateServiceMetadata(params: {
  serviceName: string
  description: string
  locale: string
  slug: string
}): Metadata {
  const { serviceName, description, locale, slug } = params

  return generateSEOMetadata({
    title: `${serviceName} Services in Dubai`,
    description: `Professional ${serviceName.toLowerCase()} services in Dubai and UAE. ${description}`,
    keywords: [
      `${serviceName.toLowerCase()} dubai`,
      `${serviceName.toLowerCase()} uae`,
      `${serviceName.toLowerCase()} services`,
      'audit firm dubai',
      'professional audit services',
    ],
    canonical: `${SITE_CONFIG.url}/${locale}/services/${slug}`,
    locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
  })
}

/**
 * Helper to generate metadata for industry pages
 */
export function generateIndustryMetadata(params: {
  industryName: string
  description: string
  locale: string
  slug: string
}): Metadata {
  const { industryName, description, locale, slug } = params

  return generateSEOMetadata({
    title: `${industryName} Audit Services in Dubai`,
    description: `Specialized audit services for ${industryName.toLowerCase()} companies in Dubai. ${description}`,
    keywords: [
      `${industryName.toLowerCase()} audit dubai`,
      `${industryName.toLowerCase()} audit uae`,
      'industry-specific audit',
      'audit firm dubai',
    ],
    canonical: `${SITE_CONFIG.url}/${locale}/industries/${slug}`,
    locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
  })
}

/**
 * Helper to generate metadata for blog articles
 */
export function generateArticleMetadata(params: {
  title: string
  description: string
  author: string
  publishedTime: string
  modifiedTime?: string
  tags: string[]
  locale: string
  slug: string
  image?: string
}): Metadata {
  const { title, description, author, publishedTime, modifiedTime, tags, locale, slug, image } = params

  return generateSEOMetadata({
    title,
    description,
    author,
    publishedTime,
    modifiedTime,
    tags,
    type: 'article',
    section: 'Audit & Compliance',
    canonical: `${SITE_CONFIG.url}/${locale}/resources/blog/${slug}`,
    locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
    image,
  })
}

/**
 * Helper to generate metadata for location pages
 */
export function generateLocationMetadata(params: {
  locationName: string
  description: string
  locale: string
  slug: string
}): Metadata {
  const { locationName, description, locale, slug } = params

  return generateSEOMetadata({
    title: `Audit Firm in ${locationName}`,
    description: `Professional audit services in ${locationName}, Dubai. ${description}`,
    keywords: [
      `audit firm ${locationName.toLowerCase()}`,
      `auditors ${locationName.toLowerCase()}`,
      `audit services ${locationName.toLowerCase()}`,
      'dubai audit firm',
    ],
    canonical: `${SITE_CONFIG.url}/${locale}/locations/${slug}`,
    locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
  })
}
