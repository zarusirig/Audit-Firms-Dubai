/**
 * Generate Local Sitemaps for Testing
 * Creates sitemaps with localhost URLs for local Screaming Frog testing
 */

import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import { BLOG_POSTS } from '../src/lib/content/blog'

// Use localhost for local testing
const SITE_URL = 'http://localhost:3000'

// Read existing sitemap to preserve other URLs structure
const existingSitemap = readFileSync(
  join(process.cwd(), 'public', 'sitemap.xml'),
  'utf-8'
)
const existingSitemapEn = readFileSync(
  join(process.cwd(), 'public', 'sitemap-en.xml'),
  'utf-8'
)
const existingSitemapAr = readFileSync(
  join(process.cwd(), 'public', 'sitemap-ar.xml'),
  'utf-8'
)

// Function to extract non-blog URLs and convert to localhost
function extractNonBlogUrls(sitemapContent: string): string[] {
  // Use [\s\S] instead of . with s flag for ES5 compatibility
  const urlMatches = sitemapContent.match(/<url>[\s\S]*?<\/url>/g)
  if (!urlMatches) return []

  return urlMatches
    .filter((url) => !url.includes('/resources/blog/'))
    .map((url) => {
      // Replace production URL with localhost
      return url.replace(/https:\/\/auditfirmsdubai\.ae/g, SITE_URL)
    })
}

// Function to generate today's date
function getTodayDate(): string {
  return new Date().toISOString().split('T')[0]
}

// Get all blog posts
const allBlogSlugs = Object.keys(BLOG_POSTS)
console.log(`📊 Total blog posts found: ${allBlogSlugs.length}`)

// Generate blog URL entries for English sitemap
const blogUrlsEn = allBlogSlugs
  .map((slug) => {
    const post = BLOG_POSTS[slug]
    const lastmod = post.lastUpdated || post.publishDate || getTodayDate()
    return `<url><loc>${SITE_URL}/en/resources/blog/${slug}</loc><lastmod>${lastmod}</lastmod></url>`
  })
  .join('\n')

// Generate blog URL entries for Arabic sitemap
const blogUrlsAr = allBlogSlugs
  .map((slug) => {
    const post = BLOG_POSTS[slug]
    const lastmod = post.lastUpdated || post.publishDate || getTodayDate()
    return `<url><loc>${SITE_URL}/ar/resources/blog/${slug}</loc><lastmod>${lastmod}</lastmod></url>`
  })
  .join('\n')

// Generate blog URL entries for main sitemap (both languages)
const blogUrlsMain = allBlogSlugs
  .flatMap((slug) => {
    const post = BLOG_POSTS[slug]
    const lastmod = post.lastUpdated || post.publishDate || getTodayDate()
    return [
      `<url><loc>${SITE_URL}/en/resources/blog/${slug}</loc><lastmod>${lastmod}</lastmod></url>`,
      `<url><loc>${SITE_URL}/ar/resources/blog/${slug}</loc><lastmod>${lastmod}</lastmod></url>`,
    ]
  })
  .join('\n')

// Extract non-blog URLs from existing sitemaps
const nonBlogUrlsMain = extractNonBlogUrls(existingSitemap)
const nonBlogUrlsEn = extractNonBlogUrls(existingSitemapEn)
const nonBlogUrlsAr = extractNonBlogUrls(existingSitemapAr)

console.log(`🔗 Non-blog URLs (main): ${nonBlogUrlsMain.length}`)
console.log(`🔗 Non-blog URLs (EN): ${nonBlogUrlsEn.length}`)
console.log(`🔗 Non-blog URLs (AR): ${nonBlogUrlsAr.length}`)

// Generate complete local sitemaps
const sitemapMain = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${nonBlogUrlsMain.join('\n')}

<!-- Blog Posts (${allBlogSlugs.length} posts × 2 languages = ${allBlogSlugs.length * 2} URLs) -->
${blogUrlsMain}

</urlset>
`

const sitemapEn = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${nonBlogUrlsEn.join('\n')}

<!-- Blog Posts (${allBlogSlugs.length} posts) -->
${blogUrlsEn}

</urlset>
`

const sitemapAr = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${nonBlogUrlsAr.join('\n')}

<!-- Blog Posts (${allBlogSlugs.length} posts) -->
${blogUrlsAr}

</urlset>
`

// Create local-test directory
const localTestDir = join(process.cwd(), 'public', 'local-test')
try {
  const fs = require('fs')
  if (!fs.existsSync(localTestDir)) {
    fs.mkdirSync(localTestDir, { recursive: true })
  }
} catch (err) {
  console.error('Error creating local-test directory:', err)
}

// Write local test sitemaps
writeFileSync(join(localTestDir, 'sitemap.xml'), sitemapMain)
writeFileSync(join(localTestDir, 'sitemap-en.xml'), sitemapEn)
writeFileSync(join(localTestDir, 'sitemap-ar.xml'), sitemapAr)

// Also create a local robots.txt
const localRobotsTxt = `# Local Testing robots.txt
User-agent: *
Allow: /

# Local Sitemaps (for testing with Screaming Frog)
Sitemap: http://localhost:3000/local-test/sitemap.xml
Sitemap: http://localhost:3000/local-test/sitemap-en.xml
Sitemap: http://localhost:3000/local-test/sitemap-ar.xml
`

writeFileSync(join(localTestDir, 'robots.txt'), localRobotsTxt)

console.log('\n✅ Local test sitemaps generated successfully!')
console.log(`   📁 Location: /public/local-test/`)
console.log(`   - sitemap.xml: ${nonBlogUrlsMain.length + allBlogSlugs.length * 2} URLs`)
console.log(`   - sitemap-en.xml: ${nonBlogUrlsEn.length + allBlogSlugs.length} URLs`)
console.log(`   - sitemap-ar.xml: ${nonBlogUrlsAr.length + allBlogSlugs.length} URLs`)
console.log(`   - robots.txt: Local testing version`)
console.log(`\n🚀 Next steps:`)
console.log(`   1. Run: npm run dev`)
console.log(`   2. Open Screaming Frog`)
console.log(`   3. Use sitemap URL: http://localhost:3000/local-test/sitemap.xml`)
console.log(`\n💡 Tip: Keep production sitemaps unchanged in /public/`)
