/**
 * Content Loaders
 * Type-safe functions to load JSON content data
 */

import {
  TeamMembersCollection,
  LocationsCollection,
  ServicesCollection,
  IndustriesCollection,
  BlogPostsCollection,
  GuidesCollection,
  TeamMember,
  LocationPageContent,
  ServicePageContent,
  IndustryPageContent,
  BlogPost,
  Guide,
} from '@/types/content'

// Cache for loaded content to avoid repeated fetches
const contentCache = new Map<string, unknown>()

/**
 * Generic function to load JSON content with caching
 */
async function loadJSON<T>(filename: string): Promise<T> {
  if (contentCache.has(filename)) {
    return contentCache.get(filename) as T
  }

  const response = await fetch(`/data/${filename}.json`)

  if (!response.ok) {
    throw new Error(`Failed to load ${filename}.json: ${response.statusText}`)
  }

  const data = await response.json()
  contentCache.set(filename, data)
  return data as T
}

// ===== Team Loaders =====

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const data = await loadJSON<TeamMembersCollection>('team')
  return Object.values(data).sort((a, b) => a.order - b.order)
}

export async function getTeamMembersByRole(role: TeamMember['role']): Promise<TeamMember[]> {
  const members = await getAllTeamMembers()
  return members.filter((member) => member.role === role)
}

export async function getTeamMembersByDepartment(
  department: TeamMember['department']
): Promise<TeamMember[]> {
  const members = await getAllTeamMembers()
  return members.filter((member) => member.department === department)
}

export async function getFeaturedTeamMembers(): Promise<TeamMember[]> {
  const members = await getAllTeamMembers()
  return members.filter((member) => member.featured)
}

export async function getTeamMemberById(id: string): Promise<TeamMember | undefined> {
  const data = await loadJSON<TeamMembersCollection>('team')
  return data[id]
}

// ===== Location Loaders =====

export async function getAllLocations(): Promise<LocationPageContent[]> {
  const data = await loadJSON<LocationsCollection>('locations')
  return Object.values(data)
}

export async function getLocationBySlug(slug: string): Promise<LocationPageContent | undefined> {
  const data = await loadJSON<LocationsCollection>('locations')
  return data[slug]
}

// ===== Service Loaders =====

export async function getAllServices(): Promise<ServicePageContent[]> {
  const data = await loadJSON<ServicesCollection>('services')
  return Object.values(data)
}

export async function getServiceBySlug(slug: string): Promise<ServicePageContent | undefined> {
  const data = await loadJSON<ServicesCollection>('services')
  return data[slug]
}

// ===== Industry Loaders =====

export async function getAllIndustries(): Promise<IndustryPageContent[]> {
  const data = await loadJSON<IndustriesCollection>('industries')
  return Object.values(data)
}

export async function getIndustryBySlug(slug: string): Promise<IndustryPageContent | undefined> {
  const data = await loadJSON<IndustriesCollection>('industries')
  return data[slug]
}

// ===== Blog Loaders =====

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await loadJSON<BlogPostsCollection>('blog')
  return Object.values(data).sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const data = await loadJSON<BlogPostsCollection>('blog')
  return data[slug]
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.featured)
}

export async function getBlogPostsByCategory(
  category: BlogPost['category']
): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.category === category)
}

// ===== Guide Loaders =====

export async function getAllGuides(): Promise<Guide[]> {
  const data = await loadJSON<GuidesCollection>('guides')
  return Object.values(data).sort((a, b) => b.downloadCount - a.downloadCount)
}

export async function getGuideBySlug(slug: string): Promise<Guide | undefined> {
  const data = await loadJSON<GuidesCollection>('guides')
  return data[slug]
}

export async function getFeaturedGuides(): Promise<Guide[]> {
  const guides = await getAllGuides()
  return guides.filter((guide) => guide.featured)
}

export async function getGuidesByCategory(category: Guide['category']): Promise<Guide[]> {
  const guides = await getAllGuides()
  return guides.filter((guide) => guide.category === category)
}

// ===== Server-Side Loaders (for Next.js SSG/SSR) =====

import fs from 'fs/promises'
import path from 'path'

/**
 * Load JSON content from file system (server-side only)
 * Use this in getStaticProps, getServerSideProps, or Server Components
 */
async function loadJSONFromFS<T>(filename: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'public', 'data', `${filename}.json`)
  const fileContent = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContent) as T
}

// Server-side exports
export const serverLoaders = {
  async getAllTeamMembers(): Promise<TeamMember[]> {
    const data = await loadJSONFromFS<TeamMembersCollection>('team')
    return Object.values(data).sort((a, b) => a.order - b.order)
  },

  async getTeamMemberById(id: string): Promise<TeamMember | undefined> {
    const data = await loadJSONFromFS<TeamMembersCollection>('team')
    return data[id]
  },

  async getAllLocations(): Promise<LocationPageContent[]> {
    const data = await loadJSONFromFS<LocationsCollection>('locations')
    return Object.values(data)
  },

  async getLocationBySlug(slug: string): Promise<LocationPageContent | undefined> {
    const data = await loadJSONFromFS<LocationsCollection>('locations')
    return data[slug]
  },

  async getAllServices(): Promise<ServicePageContent[]> {
    const data = await loadJSONFromFS<ServicesCollection>('services')
    return Object.values(data)
  },

  async getServiceBySlug(slug: string): Promise<ServicePageContent | undefined> {
    const data = await loadJSONFromFS<ServicesCollection>('services')
    return data[slug]
  },

  async getAllIndustries(): Promise<IndustryPageContent[]> {
    const data = await loadJSONFromFS<IndustriesCollection>('industries')
    return Object.values(data)
  },

  async getIndustryBySlug(slug: string): Promise<IndustryPageContent | undefined> {
    const data = await loadJSONFromFS<IndustriesCollection>('industries')
    return data[slug]
  },

  async getAllBlogPosts(): Promise<BlogPost[]> {
    const data = await loadJSONFromFS<BlogPostsCollection>('blog')
    return Object.values(data).sort((a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
  },

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const data = await loadJSONFromFS<BlogPostsCollection>('blog')
    return data[slug]
  },

  async getAllGuides(): Promise<Guide[]> {
    const data = await loadJSONFromFS<GuidesCollection>('guides')
    return Object.values(data).sort((a, b) => b.downloadCount - a.downloadCount)
  },

  async getGuideBySlug(slug: string): Promise<Guide | undefined> {
    const data = await loadJSONFromFS<GuidesCollection>('guides')
    return data[slug]
  },
}
