#!/usr/bin/env node

/**
 * Simple API Test Script
 * Verifies file structure and basic setup
 */

import fs from 'fs-extra'
import path from 'path'

console.log('🧪 Testing API Setup...\n')

// Test data directory creation
const DATA_DIR = path.join(process.cwd(), 'data')
console.log('🗂️  Testing data directory creation...')

try {
  await fs.ensureDir(DATA_DIR)
  console.log('✅ Data directory created successfully')
} catch (error) {
  console.log('❌ Failed to create data directory:', error.message)
  process.exit(1)
}

// Test file existence
const filesToCheck = [
  'src/lib/database/index.ts',
  'src/lib/email/service.ts',
  'src/lib/email/templates.ts',
  'src/app/api/contact/route.ts',
  'src/app/api/quote/route.ts',
  'src/app/api/newsletter/route.ts',
  'src/app/api/download/route.ts',
  'src/app/api/calculate-fee/route.ts',
  'package.json'
]

console.log('📁 Checking file existence...')
let allFilesExist = true

for (const file of filesToCheck) {
  const filePath = path.join(process.cwd(), file)
  if (await fs.pathExists(filePath)) {
    console.log(`✅ ${file}`)
  } else {
    console.log(`❌ ${file} - MISSING`)
    allFilesExist = false
  }
}

if (!allFilesExist) {
  console.log('\n❌ Some required files are missing!')
  process.exit(1)
}

// Test dependencies
console.log('\n📦 Checking dependencies...')
const packageJson = await fs.readJson('package.json')
const requiredDeps = ['resend', 'fs-extra', 'zod', 'next']

for (const dep of requiredDeps) {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    console.log(`✅ ${dep}`)
  } else {
    console.log(`❌ ${dep} - MISSING`)
    allFilesExist = false
  }
}

// Check for .env.local
console.log('\n🔐 Checking environment configuration...')
const envExists = await fs.pathExists('.env.local')
if (envExists) {
  console.log('✅ .env.local exists')
} else {
  console.log('⚠️  .env.local missing (create it with your Resend API key)')
}

// Check for API_SETUP_GUIDE.md
const guideExists = await fs.pathExists('API_SETUP_GUIDE.md')
if (guideExists) {
  console.log('✅ API_SETUP_GUIDE.md exists')
} else {
  console.log('❌ API_SETUP_GUIDE.md missing')
}

console.log('\n🎉 Basic setup verification completed!')
console.log('\n📋 Next Steps:')
console.log('1. Create .env.local file with your Resend API key (see API_SETUP_GUIDE.md)')
console.log('2. Start the development server: npm run dev')
console.log('3. Test the APIs using the cURL commands in API_SETUP_GUIDE.md')
console.log('4. Check the ./data/ directory for stored submissions')
console.log('\n📖 See API_SETUP_GUIDE.md for complete setup instructions')

if (!envExists) {
  console.log('\n⚠️  IMPORTANT: Email functionality requires .env.local with RESEND_API_KEY')
}
