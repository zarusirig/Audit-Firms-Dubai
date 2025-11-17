#!/usr/bin/env node
/**
 * Script to extract TypeScript content data to JSON files
 * This converts large content files to external JSON for better maintainability
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const contentDir = path.join(projectRoot, 'src', 'lib', 'content');
const outputDir = path.join(projectRoot, 'public', 'data');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🚀 Starting content extraction to JSON...\n');

// List of content files to process
const contentFiles = [
  'blog.ts',
  'services.ts',
  'industries.ts',
  'guides.ts',
  'locations.ts',
  'team.ts'
];

for (const filename of contentFiles) {
  const inputPath = path.join(contentDir, filename);
  const baseName = filename.replace('.ts', '');
  const outputPath = path.join(outputDir, `${baseName}.json`);

  console.log(`📄 Processing ${filename}...`);

  try {
    // Read the TypeScript file
    const content = fs.readFileSync(inputPath, 'utf-8');

    // Extract the exported constant (everything after export const until the end)
    // This is a simple regex-based extraction
    const constantMatch = content.match(/export const \w+:\s*Record<[^>]+>\s*=\s*(\{[\s\S]*?\n\})\s*(?:\/\/|export|$)/);

    if (!constantMatch) {
      console.error(`❌ Could not find exported constant in ${filename}`);
      continue;
    }

    let dataString = constantMatch[1];

    // Convert TypeScript object literal to JSON-parseable string
    // Remove trailing commas
    dataString = dataString.replace(/,(\s*[\]}])/g, '$1');

    // Try to evaluate as JavaScript (since it's a valid object literal)
    const data = eval(`(${dataString})`);

    // Write to JSON file
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

    const sizeKB = (fs.statSync(outputPath).size / 1024).toFixed(2);
    console.log(`✅ Created ${baseName}.json (${sizeKB} KB)\n`);

  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
  }
}

console.log('🎉 Content extraction complete!');
console.log(`📁 JSON files saved to: ${outputDir}`);
