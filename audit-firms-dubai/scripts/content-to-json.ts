/**
 * Extract TypeScript content to JSON
 * Uses proper TypeScript imports to ensure correctness
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Import content data
import { TEAM_MEMBERS } from '../src/lib/content/team'
import { LOCATIONS } from '../src/lib/content/locations'
import { SERVICES } from '../src/lib/content/services'
import { INDUSTRIES } from '../src/lib/content/industries'
import { BLOG_POSTS } from '../src/lib/content/blog'
import { GUIDES } from '../src/lib/content/guides'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputDir = path.join(__dirname, '..', 'public', 'data')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

console.log('🚀 Extracting content to JSON...\n')

const datasets = [
  { name: 'team', data: TEAM_MEMBERS },
  { name: 'locations', data: LOCATIONS },
  { name: 'services', data: SERVICES },
  { name: 'industries', data: INDUSTRIES },
  { name: 'blog', data: BLOG_POSTS },
  { name: 'guides', data: GUIDES },
]

for (const { name, data } of datasets) {
  const outputPath = path.join(outputDir, `${name}.json`)

  try {
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8')

    const stats = fs.statSync(outputPath)
    const sizeKB = (stats.size / 1024).toFixed(2)
    console.log(`✅ ${name}.json created (${sizeKB} KB)`)
  } catch (error) {
    console.error(`❌ Error creating ${name}.json:`, error)
  }
}

console.log('\n🎉 Extraction complete!')
