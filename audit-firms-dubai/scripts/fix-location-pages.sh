#!/bin/bash

echo "🔧 Fixing location pages..."

LOCATIONS=("abu-dhabi" "difc" "business-bay" "jlt" "dubai-marina" "downtown-dubai")

for location in "${LOCATIONS[@]}"; do
  file="src/app/[locale]/locations/$location/page.tsx"
  echo "📝 Fixing $location..."

  # Read the file and find the location slug
  slug=$(grep "const locationData = LOCATIONS\[" "$file" | sed "s/.*LOCATIONS\['\([^']*\)'.*/\1/")

  # Replace the const locationData line
  sed -i "/^const locationData/d" "$file"

  # Add async to the default export function if not already present
  if ! grep -q "export default async function" "$file"; then
    sed -i "s/export default function/export default async function/g" "$file"
  fi

  # Add await locationData fetch at the beginning of the function
  sed -i "/export default async function.*{/a\\
  const locationData = await serverLoaders.getLocationBySlug('$slug')\\
\\
  if (!locationData) {\\
    notFound()\\
  }
" "$file"

  # Add notFound import if not present
  if ! grep -q "from 'next/navigation'" "$file"; then
    sed -i "1i import { notFound } from 'next/navigation'" "$file"
  fi
done

echo "✅ Location pages fixed!"
