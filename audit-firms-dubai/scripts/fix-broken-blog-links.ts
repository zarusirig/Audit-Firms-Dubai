/**
 * Automatic Blog Link Fixer
 * Finds and fixes broken internal blog links in content
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Mapping of broken slugs to correct slugs
const SLUG_FIXES: Record<string, string> = {
  // Broken slug → Correct slug
  'small-business-tax-exemption-uae': 'small-business-tax-exemption-uae-qualifying-375000-threshold',
  'vat-registration-new-companies-dubai': 'vat-registration-new-companies-dubai', // Verify this exists
  'mergers-acquisitions-due-diligence-uae': 'mergers-acquisitions-audit-uae-due-diligence-purchase',
  'internal-audit-services-uae': 'internal-audit', // Likely the service page, not blog
  'business-setup-dubai-2025-mainland-vs-free-zone-complete-guide': 'business-setup-dubai-2025-mainland-freezone-comparison',
  'icv-certificate-requirements-application-process-uae': 'icv-certificate-uae-requirements-process',
}

// Files to check and fix
const FILES_TO_FIX = [
  'src/lib/content/blog.ts',
  'src/lib/content/new-blog-posts.ts',
]

interface FixResult {
  file: string
  brokenSlug: string
  correctSlug: string
  occurrences: number
  linesFixed: number[]
}

const results: FixResult[] = []
let totalFixes = 0

console.log('🔧 Starting Broken Blog Link Fixer...\n')

// Process each file
FILES_TO_FIX.forEach((filePath) => {
  const fullPath = join(process.cwd(), filePath)
  console.log(`📄 Checking: ${filePath}`)

  try {
    let content = readFileSync(fullPath, 'utf-8')
    const originalContent = content
    let fileModified = false

    // Check each broken slug
    Object.entries(SLUG_FIXES).forEach(([brokenSlug, correctSlug]) => {
      // Find all occurrences of broken slug in markdown links
      const patterns = [
        // Markdown link pattern: [text](/resources/blog/slug)
        new RegExp(`\\(/resources/blog/${brokenSlug}\\)`, 'g'),
        // Link in relatedPosts array: 'slug'
        new RegExp(`'${brokenSlug}'`, 'g'),
        // Double quoted: "slug"
        new RegExp(`"${brokenSlug}"`, 'g'),
      ]

      let occurrences = 0
      const linesFixed: number[] = []

      patterns.forEach((pattern) => {
        const matches = content.match(pattern)
        if (matches) {
          occurrences += matches.length

          // Replace in content
          if (pattern.toString().includes('/resources/blog/')) {
            content = content.replace(
              new RegExp(`\\(/resources/blog/${brokenSlug}\\)`, 'g'),
              `(/resources/blog/${correctSlug})`
            )
          } else if (pattern.toString().includes("'")) {
            content = content.replace(
              new RegExp(`'${brokenSlug}'`, 'g'),
              `'${correctSlug}'`
            )
          } else {
            content = content.replace(
              new RegExp(`"${brokenSlug}"`, 'g'),
              `"${correctSlug}"`
            )
          }

          fileModified = true
        }
      })

      if (occurrences > 0) {
        console.log(`  ✓ Fixed ${occurrences}x: ${brokenSlug} → ${correctSlug}`)
        results.push({
          file: filePath,
          brokenSlug,
          correctSlug,
          occurrences,
          linesFixed,
        })
        totalFixes += occurrences
      }
    })

    // Write back if modified
    if (fileModified && content !== originalContent) {
      writeFileSync(fullPath, content, 'utf-8')
      console.log(`  💾 File updated: ${filePath}\n`)
    } else {
      console.log(`  ✓ No changes needed\n`)
    }
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error)
  }
})

// Generate report
console.log('\n' + '='.repeat(60))
console.log('📊 FIX REPORT')
console.log('='.repeat(60))

if (results.length === 0) {
  console.log('\n✅ No broken links found! All links are correct.')
} else {
  console.log(`\n✅ Fixed ${totalFixes} broken link(s) across ${results.length} unique slug(s)\n`)

  console.log('Details:')
  results.forEach((result, index) => {
    console.log(`\n${index + 1}. ${result.brokenSlug}`)
    console.log(`   → ${result.correctSlug}`)
    console.log(`   File: ${result.file}`)
    console.log(`   Occurrences: ${result.occurrences}`)
  })

  console.log('\n' + '='.repeat(60))
  console.log('📝 NEXT STEPS')
  console.log('='.repeat(60))
  console.log('\n1. Rebuild the project:')
  console.log('   npm run build')
  console.log('\n2. Test the fixed links:')
  console.log('   npm run dev')
  console.log('\n3. Re-crawl with Screaming Frog to verify fixes')
  console.log('\n4. Check for any remaining 404s')
}

console.log('\n✅ Done!\n')

// Export summary for review
const summary = {
  timestamp: new Date().toISOString(),
  totalFixes,
  fixes: results,
  slugMapping: SLUG_FIXES,
}

writeFileSync(
  join(process.cwd(), 'LINK_FIX_REPORT.json'),
  JSON.stringify(summary, null, 2)
)

console.log('📄 Detailed report saved to: LINK_FIX_REPORT.json\n')
