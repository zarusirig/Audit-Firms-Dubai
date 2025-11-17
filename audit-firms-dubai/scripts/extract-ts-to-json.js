#!/usr/bin/env node
/**
 * Extract TypeScript content data to JSON files
 * Handles large content files by using dynamic imports
 */

const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'src', 'lib', 'content');
const outputDir = path.join(__dirname, '..', 'public', 'data');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🚀 Extracting TypeScript content to JSON...\n');

// Files to extract
const files = [
  { name: 'team', exportName: 'TEAM_MEMBERS' },
  { name: 'locations', exportName: 'LOCATIONS' },
  { name: 'services', exportName: 'SERVICES' },
  { name: 'industries', exportName: 'INDUSTRIES' },
  { name: 'blog', exportName: 'BLOG_POSTS' },
  { name: 'guides', exportName: 'GUIDES' }
];

files.forEach(({ name, exportName }) => {
  const inputPath = path.join(contentDir, `${name}.ts`);
  const outputPath = path.join(outputDir, `${name}.json`);

  console.log(`📄 Processing ${name}.ts...`);

  try {
    // Read the TypeScript file
    let content = fs.readFileSync(inputPath, 'utf-8');

    // Find the export const declaration
    const regex = new RegExp(`export const ${exportName}[^=]*=\\s*({[\\s\\S]*?^})(?=\\s*(?:export|$|//)`, 'm');
    const match = content.match(regex);

    if (!match) {
      console.error(`❌ Could not find ${exportName} in ${name}.ts`);
      return;
    }

    let dataString = match[1];

    // Clean up the data string to make it valid JSON
    // Remove trailing commas before closing braces/brackets
    dataString = dataString.replace(/,(\s*[}\]])/g, '$1');

    // Convert single quotes to double quotes (basic replacement)
    // This is a simplified version - for production, use a proper parser
    dataString = dataString.replace(/'/g, '"');

    // Try to parse and write
    try {
      const data = JSON.parse(dataString);
      fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ Created ${name}.json (${sizeKB} KB)\n`);
    } catch (parseError) {
      // If simple parsing fails, use eval as fallback
      console.log(`⚠️  JSON parse failed, using eval for ${name}.ts...`);
      const data = eval(`(${match[1]})`);
      fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ Created ${name}.json (${sizeKB} KB)\n`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${name}.ts:`, error.message);
  }
});

console.log('🎉 Extraction complete!');
