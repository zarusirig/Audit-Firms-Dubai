/**
 * Simple File-Based Database Service
 * Stores form submissions in JSON files
 * Suitable for moderate traffic business websites
 */

import fs from 'fs-extra'
import path from 'path'

// Database directory
const DATA_DIR = process.env.DATA_STORAGE_PATH || path.join(process.cwd(), 'data')

// Ensure data directory exists
fs.ensureDirSync(DATA_DIR)

/**
 * Base record interface
 */
export interface BaseRecord {
  id: string
  createdAt: string
  updatedAt: string
}

/**
 * Contact form submission
 */
export interface ContactSubmission extends BaseRecord {
  name: string
  email: string
  phone?: string
  message?: string
  subject?: string
  company?: string
  preferredContact?: string
  formType: 'general' | 'quick-contact'
  ip?: string
  userAgent?: string
  source?: string
  status: 'new' | 'read' | 'responded' | 'archived'
}

/**
 * Quote request submission
 */
export interface QuoteSubmission extends BaseRecord {
  companyName: string
  industry: string
  contactName: string
  jobTitle?: string
  email: string
  phone: string
  currentAuditor?: string
  specificRequirements?: string
  budget?: string
  timeline?: string
  otherServiceDetails?: string
  website?: string
  annualRevenue?: string
  services: string[]
  companySize: string
  urgency: string
  agreeToTerms: boolean
  priority: 'low' | 'normal' | 'high'
  ip?: string
  userAgent?: string
  source?: string
  status: 'new' | 'contacted' | 'quoted' | 'won' | 'lost' | 'archived'
}

/**
 * Newsletter subscription
 */
export interface NewsletterSubscription extends BaseRecord {
  email: string
  firstName?: string
  interests?: string[]
  source?: string
  ip?: string
  userAgent?: string
  status: 'pending' | 'confirmed' | 'unsubscribed'
  confirmedAt?: string
  unsubscribedAt?: string
}

/**
 * Download tracking record
 */
export interface DownloadRecord extends BaseRecord {
  resourceId: string
  resourceTitle: string
  resourceCategory: string
  resourceFormat: string
  email: string
  name: string
  company?: string
  jobTitle?: string
  marketingConsent: boolean
  ip?: string
  userAgent?: string
  status: 'completed' | 'failed'
}

/**
 * Generic database operations
 */
class DatabaseService {
  private getFilePath(collection: string): string {
    return path.join(DATA_DIR, `${collection}.json`)
  }

  private async readCollection<T extends BaseRecord>(collection: string): Promise<T[]> {
    try {
      const filePath = this.getFilePath(collection)
      if (!await fs.pathExists(filePath)) {
        return []
      }
      const data = await fs.readJson(filePath)
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error(`Error reading collection ${collection}:`, error)
      return []
    }
  }

  private async writeCollection<T extends BaseRecord>(collection: string, records: T[]): Promise<void> {
    try {
      const filePath = this.getFilePath(collection)
      await fs.writeJson(filePath, records, { spaces: 2 })
    } catch (error) {
      console.error(`Error writing collection ${collection}:`, error)
      throw error
    }
  }

  async create<T extends BaseRecord>(collection: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const records = await this.readCollection<T>(collection)

    const now = new Date().toISOString()
    const record: T = {
      ...data,
      id: `${collection}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: now,
      updatedAt: now,
    } as T

    records.push(record)
    await this.writeCollection(collection, records)

    return record
  }

  async findById<T extends BaseRecord>(collection: string, id: string): Promise<T | null> {
    const records = await this.readCollection<T>(collection)
    return records.find(record => record.id === id) || null
  }

  async findAll<T extends BaseRecord>(collection: string, filter?: Partial<T>): Promise<T[]> {
    const records = await this.readCollection<T>(collection)

    if (!filter) {
      return records
    }

    return records.filter(record =>
      Object.entries(filter).every(([key, value]) =>
        (record as any)[key] === value
      )
    )
  }

  async update<T extends BaseRecord>(collection: string, id: string, updates: Partial<Omit<T, 'id' | 'createdAt'>>): Promise<T | null> {
    const records = await this.readCollection<T>(collection)
    const index = records.findIndex(record => record.id === id)

    if (index === -1) {
      return null
    }

    records[index] = {
      ...records[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }

    await this.writeCollection(collection, records)
    return records[index]
  }

  async delete(collection: string, id: string): Promise<boolean> {
    const records = await this.readCollection<BaseRecord>(collection)
    const filteredRecords = records.filter(record => record.id !== id)

    if (filteredRecords.length === records.length) {
      return false // Record not found
    }

    await this.writeCollection(collection, filteredRecords)
    return true
  }
}

// Export singleton instance
export const db = new DatabaseService()

/**
 * Contact submissions
 */
export const contactDb = {
  create: (data: Omit<ContactSubmission, 'id' | 'createdAt' | 'updatedAt'>) =>
    db.create<ContactSubmission>('contacts', data),

  findById: (id: string) =>
    db.findById<ContactSubmission>('contacts', id),

  findAll: (filter?: Partial<ContactSubmission>) =>
    db.findAll<ContactSubmission>('contacts', filter),

  update: (id: string, updates: Partial<Omit<ContactSubmission, 'id' | 'createdAt'>>) =>
    db.update<ContactSubmission>('contacts', id, updates),
}

/**
 * Quote submissions
 */
export const quoteDb = {
  create: (data: Omit<QuoteSubmission, 'id' | 'createdAt' | 'updatedAt'>) =>
    db.create<QuoteSubmission>('quotes', data),

  findById: (id: string) =>
    db.findById<QuoteSubmission>('quotes', id),

  findAll: (filter?: Partial<QuoteSubmission>) =>
    db.findAll<QuoteSubmission>('quotes', filter),

  update: (id: string, updates: Partial<Omit<QuoteSubmission, 'id' | 'createdAt'>>) =>
    db.update<QuoteSubmission>('quotes', id, updates),
}

/**
 * Newsletter subscriptions
 */
export const newsletterDb = {
  create: (data: Omit<NewsletterSubscription, 'id' | 'createdAt' | 'updatedAt'>) =>
    db.create<NewsletterSubscription>('newsletter', data),

  findById: (id: string) =>
    db.findById<NewsletterSubscription>('newsletter', id),

  findAll: (filter?: Partial<NewsletterSubscription>) =>
    db.findAll<NewsletterSubscription>('newsletter', filter),

  update: (id: string, updates: Partial<Omit<NewsletterSubscription, 'id' | 'createdAt'>>) =>
    db.update<NewsletterSubscription>('newsletter', id, updates),

  findByEmail: (email: string) =>
    db.findAll<NewsletterSubscription>('newsletter', { email }),
}

/**
 * Download records
 */
export const downloadDb = {
  create: (data: Omit<DownloadRecord, 'id' | 'createdAt' | 'updatedAt'>) =>
    db.create<DownloadRecord>('downloads', data),

  findById: (id: string) =>
    db.findById<DownloadRecord>('downloads', id),

  findAll: (filter?: Partial<DownloadRecord>) =>
    db.findAll<DownloadRecord>('downloads', filter),

  update: (id: string, updates: Partial<Omit<DownloadRecord, 'id' | 'createdAt'>>) =>
    db.update<DownloadRecord>('downloads', id, updates),
}

/**
 * Database health check
 */
export async function getDatabaseStatus() {
  try {
    // Test by trying to read contacts collection
    const contacts = await contactDb.findAll()
    return {
      status: 'healthy',
      collections: {
        contacts: contacts.length,
        quotes: (await quoteDb.findAll()).length,
        newsletter: (await newsletterDb.findAll()).length,
        downloads: (await downloadDb.findAll()).length,
      },
      storage: {
        path: DATA_DIR,
        writable: await fs.access(DATA_DIR).then(() => true).catch(() => false),
      },
    }
  } catch (error) {
    return {
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
