// SEO Components Index
// Central export point for all SEO-related components

export { generateMetaTags, defaultMetadata } from './MetaTags';
export { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

// Schema Exports
export {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
  ArticleSchema,
  ReviewSchema,
  ProfessionalServiceSchema,
  type ServiceSchemaProps,
  type FAQSchemaProps,
  type FAQItem,
  type BreadcrumbSchemaProps,
  type BreadcrumbItem as BreadcrumbSchemaItem,
  type ArticleSchemaProps,
  type ReviewSchemaProps,
  type Review,
  type ProfessionalServiceSchemaProps,
} from './schemas';
