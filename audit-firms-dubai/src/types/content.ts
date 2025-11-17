/**
 * Content Type Definitions
 * Type-safe interfaces for JSON content data
 */

// ===== Team Types =====
export interface TeamMember {
  id: string
  name: string
  title: string
  role: 'partner' | 'director' | 'manager' | 'senior' | 'specialist'
  department: 'audit' | 'tax' | 'advisory' | 'assurance' | 'legal' | 'management'
  image: string
  bio: string
  specializations: string[]
  qualifications: string[]
  experience: string
  email?: string
  linkedin?: string
  languages: string[]
  featured: boolean
  order: number
}

// ===== Location Types =====
export interface LocationDetails {
  name: string
  address: string
  phone: string
  email: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
  mapUrl: string
}

export interface LocationPageContent {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroSubheadline: string
  heroDescription: string
  location: LocationDetails
  aboutTitle: string
  aboutContent: string[]
  whyThisLocation: {
    title: string
    description: string
  }[]
  nearbyLandmarks: string[]
  directions: {
    byMetro: string
    byCar: string
    parking: string
  }
  servicesOffered: string[]
  clientFocus: string[]
}

// ===== Service Types =====
export interface ServiceBenefit {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  week: string
  title: string
  description: string
  deliverables: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface IndustryFocus {
  name: string
  description: string
  icon: string
}

export interface PricingTier {
  name: string
  range: string
  ideal: string
  features: string[]
}

export interface ServicePageContent {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroSubheadline: string
  heroPainPoint: string
  heroUSP: string
  overviewTitle: string
  overviewContent: string[]
  legalRequirement?: string
  whoNeedsIt: string[]
  methodologyTitle: string
  processSteps: ProcessStep[]
  benefitsTitle: string
  benefits: ServiceBenefit[]
  industriesTitle: string
  industries: IndustryFocus[]
  pricingTitle: string
  pricingIntro: string
  pricingTiers: PricingTier[]
  pricingFactors: string[]
  faqs: FAQ[]
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}

// ===== Industry Types =====
export interface IndustryPageContent {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroSubheadline: string
  heroDescription: string
  industryOverview: {
    title: string
    content: string[]
  }
  challenges: {
    title: string
    items: {
      title: string
      description: string
      icon: string
    }[]
  }
  compliance: {
    title: string
    regulations: {
      name: string
      description: string
      requirements: string[]
    }[]
  }
  ourApproach: {
    title: string
    description: string
    steps: {
      number: number
      title: string
      description: string
      deliverables: string[]
    }[]
  }
  benefits: {
    title: string
    items: {
      title: string
      description: string
      icon: string
    }[]
  }
  commonFindings: {
    title: string
    findings: {
      issue: string
      impact: string
      solution: string
    }[]
  }
  caseStudy: {
    title: string
    challenge: string
    solution: string
    results: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}

// ===== Blog Types =====
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: 'audit' | 'compliance' | 'tax' | 'industry' | 'news' | 'guides'
  author: {
    name: string
    title: string
    avatar?: string
  }
  publishDate: string
  lastUpdated: string
  readTime: number
  featured: boolean
  featuredImage?: string
  tags: string[]
  content: string
  relatedPosts: string[]
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}

// ===== Guide Types =====
export interface GuideSection {
  title: string
  content: string[]
}

export interface Guide {
  id: string
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  category: 'audit' | 'compliance' | 'tax' | 'industry' | 'preparation'
  format: 'pdf'
  fileSize: string
  pageCount: number
  lastUpdated: string
  downloadCount: number
  access: 'gated' | 'free'
  featured: boolean
  tags: string[]
  author: {
    name: string
    title: string
    avatar?: string
  }
  tableOfContents: {
    section: string
    subsections?: string[]
  }[]
  benefits: string[]
  introduction: string[]
  sections: GuideSection[]
  conclusion: string[]
  relatedGuides: string[]
  relatedServices: {
    title: string
    slug: string
    description: string
  }[]
}

// ===== Collection Types =====
export type TeamMembersCollection = Record<string, TeamMember>
export type LocationsCollection = Record<string, LocationPageContent>
export type ServicesCollection = Record<string, ServicePageContent>
export type IndustriesCollection = Record<string, IndustryPageContent>
export type BlogPostsCollection = Record<string, BlogPost>
export type GuidesCollection = Record<string, Guide>
