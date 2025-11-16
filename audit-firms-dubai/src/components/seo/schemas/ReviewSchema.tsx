import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

export interface Review {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}

export interface ReviewSchemaProps {
  reviews: Review[]
  averageRating?: number
  reviewCount?: number
}

export function ReviewSchema({
  reviews,
  averageRating = 4.9,
  reviewCount,
}: ReviewSchemaProps) {
  if (!reviews || reviews.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_CONFIG.name} - Audit Services`,
    description: SITE_CONFIG.description,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: (reviewCount || reviews.length).toString(),
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
