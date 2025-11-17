#!/bin/bash

echo "🔧 Fixing all import issues..."

FILES=$(grep -r "from '@/lib/content-loaders'" src/app --include="*.tsx" -l)

for file in $FILES; do
  echo "📝 Fixing $file"

  # Remove malformed import lines with duplicate imports
  # This handles cases like: "import { func, Type, } , { serverLoaders }"
  sed -i '/} , { serverLoaders }/d' "$file"

  # Ensure clean serverLoaders import exists
  if ! grep -q "^import { serverLoaders } from '@/lib/content-loaders'" "$file"; then
    # Add it after the last import before the first empty line or export
    sed -i "/^import.*from.*$/a import { serverLoaders } from '@/lib/content-loaders'" "$file" | head -1
  fi

  # Remove imports of functions that should come from serverLoaders
  sed -i "/import {.*getAllTeamMembers/d" "$file"
  sed -i "/import {.*getAllLocations/d" "$file"
  sed -i "/import {.*getAllServices/d" "$file"
  sed -i "/import {.*getAllIndustries/d" "$file"
  sed -i "/import {.*getAllBlogPosts/d" "$file"
  sed -i "/import {.*getAllGuides/d" "$file"
done

echo "✅ Import fixes complete!"
