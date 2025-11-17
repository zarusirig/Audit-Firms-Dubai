#!/bin/bash

echo "🔧 Adding data fetching to generateMetadata functions..."

# Fix industry pages
for industry in "ecommerce" "technology" "hospitality" "healthcare" "financial-services" "manufacturing" "trading" "real-estate"; do
  file="src/app/[locale]/industries/$industry/page.tsx"
  echo "📝 Fixing $industry generateMetadata..."
  
  # Add data fetching after "const locale = resolvedParams.locale as Locale" in generateMetadata
  sed -i '/export async function generateMetadata/,/^  return {$/ {
    /const locale = resolvedParams\.locale as Locale$/a\
\
  const data = await serverLoaders.getIndustryBySlug('"'$industry'"')\
  if (!data) {\
    return { title: '"'Industry Not Found'"' }\
  }
  }' "$file"
done

# Fix service pages
for service in "forensic-audit" "vat-audit" "rera-audit" "due-diligence" "internal-audit" "external-audit"; do
  file="src/app/[locale]/services/$service/page.tsx"
  echo "📝 Fixing $service generateMetadata..."
  
  sed -i '/export async function generateMetadata/,/^  return {$/ {
    /const locale = resolvedParams\.locale as Locale$/a\
\
  const data = await serverLoaders.getServiceBySlug('"'$service'"')\
  if (!data) {\
    return { title: '"'Service Not Found'"' }\
  }
  }' "$file"
done

# Fix location pages
for location in "abu-dhabi" "difc" "business-bay" "jlt" "dubai-marina" "downtown-dubai"; do
  file="src/app/[locale]/locations/$location/page.tsx"
  echo "📝 Fixing $location generateMetadata..."
  
  sed -i '/export async function generateMetadata/,/^  return {$/ {
    /const locale = resolvedParams\.locale as Locale$/a\
\
  const data = await serverLoaders.getLocationBySlug('"'$location'"')\
  if (!data) {\
    return { title: '"'Location Not Found'"' }\
  }
  }' "$file"
done

echo "✅ generateMetadata functions fixed!"
