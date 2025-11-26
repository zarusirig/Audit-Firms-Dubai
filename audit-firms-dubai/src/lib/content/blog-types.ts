/**
 * Blog Post Type Definitions
 * Shared types for blog content
 */

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: 'audit' | 'compliance' | 'tax' | 'industry' | 'news' | 'guides' | 'business-setup'
  author: {
    name: string
    title: string
    avatar?: string
    url?: string
  }
  reviewer?: {
    name: string
    title: string
    profileUrl?: string
    verified: boolean
    lastReviewed: string
  }
  sources?: {
    title: string
    url?: string
    type?: 'official' | 'news' | 'other'
  }[]
  publishDate: string
  lastUpdated: string
  readTime: number
  featured: boolean
  featuredImage?: string
  tags: string[]

  // Full content
  content: string

  // Related content
  relatedPosts: string[]
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}
