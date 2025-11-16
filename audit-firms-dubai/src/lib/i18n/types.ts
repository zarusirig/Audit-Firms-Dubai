// i18n Types for Dubai Audit Firm
// Type-safe dictionary interface for internationalization

export interface CommonDictionary {
  home: string;
  services: string;
  industries: string;
  about: string;
  contact: string;
  resources: string;
  getQuote: string;
  learnMore: string;
  readMore: string;
  callNow: string;
  emailUs: string;
  whatsapp: string;
  schedule: string;
}

export interface NavigationDictionary {
  mainMenu: string;
  services: string;
  externalAudit: string;
  internalAudit: string;
  dueDiligence: string;
  forensicAudit: string;
  vatAudit: string;
  reraAudit: string;
  industries: string;
  realEstate: string;
  trading: string;
  manufacturing: string;
  healthcare: string;
  hospitality: string;
  technology: string;
  about: string;
  contact: string;
  resources: string;
  guides: string;
  tools: string;
  blog: string;
}

export interface HeroDictionary {
  title: string;
  subtitle: string;
  cta: string;
  secondaryCta: string;
}

export interface TrustDictionary {
  ministryApproved: string;
  experienceYears: string;
  clientsServed: string;
  countriesServed: string;
  awardsWon: string;
  auditsCompleted: string;
  averageTurnaround: string;
  clientRating: string;
}

export interface FooterDictionary {
  tagline: string;
  quickLinks: string;
  services: string;
  industries: string;
  about: string;
  contact: string;
  privacy: string;
  terms: string;
  sitemap: string;
  connect: string;
  newsletter: string;
  newsletterPlaceholder: string;
  subscribe: string;
  copyright: string;
  offices: string;
  dubaiBranch: string;
  abuDhabiBranch: string;
}

export interface ContactDictionary {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export interface SeoDictionary {
  readingTime: string;
  author: string;
  publishedOn: string;
  updatedOn: string;
  shareOn: string;
  tags: string;
  relatedArticles: string;
  tableOfContents: string;
}

export interface Dictionary {
  common: CommonDictionary;
  navigation: NavigationDictionary;
  hero: HeroDictionary;
  trust: TrustDictionary;
  footer: FooterDictionary;
  contact: ContactDictionary;
  seo: SeoDictionary;
}
