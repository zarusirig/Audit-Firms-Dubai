import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

export interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  author: string
  publishedTime: string
  modifiedTime?: string
  image?: string
  tags?: string[]
  wordCount?: number
}

export function ArticleSchema({
  title,
  description,
  slug,
  author,
  publishedTime,
  modifiedTime,
  image = '/og-image.jpg',
  tags = [],
  wordCount = 2000,
}: ArticleSchemaProps) {
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_CONFIG.url}/resources/blog/${slug}#article`,
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: `${SITE_CONFIG.url}/team`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
        width: 240,
        height: 80,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/resources/blog/${slug}`,
    },
    articleSection: 'Audit & Compliance',
    keywords: tags.join(', '),
    wordCount,
    inLanguage: 'en-AE',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'Audit Services',
    },
  }

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
