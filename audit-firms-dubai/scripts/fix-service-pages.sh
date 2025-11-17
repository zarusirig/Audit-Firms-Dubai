#!/bin/bash

echo "🔧 Fixing service pages..."

SERVICES=("forensic-audit" "vat-audit" "rera-audit" "due-diligence" "internal-audit" "external-audit")

for service in "${SERVICES[@]}"; do
  file="src/app/[locale]/services/$service/page.tsx"
  echo "📝 Fixing $service..."

  # Read the file and find the service slug
  slug=$(grep "const serviceData = SERVICES\[" "$file" | sed "s/.*SERVICES\['\([^']*\)'.*/\1/")

  # Replace the const serviceData line
  sed -i "/^const serviceData/d" "$file"

  # Add async to the default export function if not already present
  if ! grep -q "export default async function" "$file"; then
    sed -i "s/export default function/export default async function/g" "$file"
  fi

  # Add await serviceData fetch at the beginning of the function
  sed -i "/export default async function.*{/a\\
  const serviceData = await serverLoaders.getServiceBySlug('$slug')\\
\\
  if (!serviceData) {\\
    notFound()\\
  }
" "$file"

  # Add notFound import if not present
  if ! grep -q "from 'next/navigation'" "$file"; then
    sed -i "1i import { notFound } from 'next/navigation'" "$file"
  fi
done

echo "✅ Service pages fixed!"
