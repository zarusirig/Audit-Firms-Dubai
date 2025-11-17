#!/bin/bash

echo "🔧 Fixing industry pages..."

INDUSTRIES=("ecommerce" "technology" "hospitality" "healthcare" "financial-services" "manufacturing" "trading" "real-estate")

for industry in "${INDUSTRIES[@]}"; do
  file="src/app/[locale]/industries/$industry/page.tsx"
  echo "📝 Fixing $industry..."

  # Read the file and find the industry slug on the line with "const industryData = INDUSTRIES["
  slug=$(grep "const industryData = INDUSTRIES\[" "$file" | sed "s/.*INDUSTRIES\['\([^']*\)'.*/\1/")

  # Replace the const industryData line
  sed -i "/^const industryData/d" "$file"

  # Add async to the default export function if not already present
  if ! grep -q "export default async function" "$file"; then
    sed -i "s/export default function/export default async function/g" "$file"
  fi

  # Add await industryData fetch at the beginning of the function
  sed -i "/export default async function.*{/a\\
  const industryData = await serverLoaders.getIndustryBySlug('$slug')\\
\\
  if (!industryData) {\\
    notFound()\\
  }
" "$file"

  # Add notFound import if not present
  if ! grep -q "from 'next/navigation'" "$file"; then
    sed -i "1i import { notFound } from 'next/navigation'" "$file"
  fi
done

echo "✅ Industry pages fixed!"
