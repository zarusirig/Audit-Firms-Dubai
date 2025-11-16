/**
 * Resource Types
 * Type definitions for downloadable resources and tools
 */

export type ResourceCategory =
  | 'audit-checklists'
  | 'compliance-guides'
  | 'tax-templates'
  | 'financial-templates'
  | 'industry-guides'
  | 'regulatory-updates'

export type ResourceFormat = 'pdf' | 'excel' | 'word' | 'powerpoint' | 'zip'

export type ResourceAccess = 'free' | 'gated' // free = direct download, gated = email required

export interface Resource {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  category: ResourceCategory
  format: ResourceFormat
  fileSize: string // e.g., "2.5 MB"
  pageCount?: number // for PDFs
  lastUpdated: string // ISO date string
  downloadCount?: number
  access: ResourceAccess
  fileUrl: string // public URL or path
  thumbnailUrl?: string
  tags: string[]
  featured?: boolean
  relatedResources?: string[] // Array of resource IDs
}

export interface ResourceDownload {
  resourceId: string
  email: string
  name?: string
  company?: string
  jobTitle?: string
  source?: string // where they found the resource
  timestamp: string
  ipAddress?: string
  userAgent?: string
}

export interface ResourceCategoryInfo {
  id: ResourceCategory
  name: string
  description: string
  icon: string // lucide icon name
  count: number
}

// Display labels for categories
export const RESOURCE_CATEGORY_LABELS: Record<ResourceCategory, string> = {
  'audit-checklists': 'Audit Checklists',
  'compliance-guides': 'Compliance Guides',
  'tax-templates': 'Tax Templates',
  'financial-templates': 'Financial Templates',
  'industry-guides': 'Industry Guides',
  'regulatory-updates': 'Regulatory Updates',
}

// Display labels for formats
export const RESOURCE_FORMAT_LABELS: Record<ResourceFormat, string> = {
  pdf: 'PDF',
  excel: 'Excel',
  word: 'Word',
  powerpoint: 'PowerPoint',
  zip: 'ZIP Archive',
}

// Format icons (lucide)
export const RESOURCE_FORMAT_ICONS: Record<ResourceFormat, string> = {
  pdf: 'FileText',
  excel: 'Sheet',
  word: 'FileType',
  powerpoint: 'Presentation',
  zip: 'FolderArchive',
}

// Format colors for badges
export const RESOURCE_FORMAT_COLORS: Record<
  ResourceFormat,
  { bg: string; text: string }
> = {
  pdf: { bg: 'bg-red-100', text: 'text-red-700' },
  excel: { bg: 'bg-green-100', text: 'text-green-700' },
  word: { bg: 'bg-blue-100', text: 'text-blue-700' },
  powerpoint: { bg: 'bg-orange-100', text: 'text-orange-700' },
  zip: { bg: 'bg-purple-100', text: 'text-purple-700' },
}
