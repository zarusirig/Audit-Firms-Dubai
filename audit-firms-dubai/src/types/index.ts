// Core type definitions for the Audit Firms Dubai website

/**
 * Service Types
 */
export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  pricing: PricingTier[];
  faqs: FAQ[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  content: string;
  heroImage: string;
  industries: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceRange?: {
    min: number;
    max: number;
  };
  features: string[];
  popular?: boolean;
}

/**
 * FAQ Types
 */
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Industry Types
 */
export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  caseStudies?: CaseStudy[];
  relatedServices: string[];
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: Testimonial;
}

/**
 * Location Types
 */
export interface Location {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: BusinessHours[];
  image: string;
  description: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

/**
 * Testimonial Types
 */
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

/**
 * Team Member Types
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

/**
 * Blog/Guide Types
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
}

/**
 * Form Types
 */
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message?: string;
  urgency?: boolean;
  preferredContact?: 'phone' | 'email' | 'whatsapp';
}

export interface QuoteForm extends ContactForm {
  companyType: CompanyType;
  industry: string;
  annualRevenue: string;
  employees: string;
  urgency: boolean;
}

export type CompanyType = 'llc' | 'free-zone' | 'branch' | 'holding' | 'partnership';

/**
 * Calculator Types
 */
export interface AuditCalculatorInput {
  companyType: CompanyType;
  industry: string;
  annualRevenue: number;
  employees: number;
  branches: number;
  firstTimeAudit: boolean;
  complexityFactors: string[];
  urgency: 'standard' | 'express';
}

export interface AuditCalculatorResult {
  priceRange: {
    min: number;
    max: number;
  };
  timeline: string;
  breakdown: PriceBreakdown[];
  included: string[];
}

export interface PriceBreakdown {
  item: string;
  amount: number;
  description: string;
}

/**
 * Navigation Types
 */
export type NavigationChild = {
  readonly label: string;
  readonly href: string;
};

export type NavigationItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavigationChild[];
};

export type NavigationItems = readonly NavigationItem[];

/**
 * SEO Types
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Analytics Types
 */
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

/**
 * Response Types
 */
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
}

/**
 * Utility Types
 */
export type Locale = 'en' | 'ar';

export interface Breadcrumb {
  label: string;
  href: string;
}
