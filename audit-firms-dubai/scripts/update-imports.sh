#!/bin/bash

# Script to update all content imports to use new content-loaders

echo "🔄 Updating content imports across the codebase..."

# Find all files that import from lib/content
FILES=$(grep -r "from '@/lib/content/" src/app --include="*.tsx" --include="*.ts" -l)

for file in $FILES; do
  echo "📝 Updating $file"

  # Replace imports from @/lib/content/team with @/lib/content-loaders
  sed -i "s|from '@/lib/content/team'|from '@/lib/content-loaders'|g" "$file"

  # Replace imports from @/lib/content/locations
  sed -i "s|from '@/lib/content/locations'|from '@/lib/content-loaders'|g" "$file"

  # Replace imports from @/lib/content/services
  sed -i "s|from '@/lib/content/services'|from '@/lib/content-loaders'|g" "$file"

  # Replace imports from @/lib/content/industries
  sed -i "s|from '@/lib/content/industries'|from '@/lib/content-loaders'|g" "$file"

  # Replace imports from @/lib/content/blog
  sed -i "s|from '@/lib/content/blog'|from '@/lib/content-loaders'|g" "$file"

  # Replace imports from @/lib/content/guides
  sed -i "s|from '@/lib/content/guides'|from '@/lib/content-loaders'|g" "$file"

  # Update function calls to use serverLoaders for Server Components
  # This requires manual review, but we can add comments
  if grep -q "export default async function" "$file"; then
    # Server Component - should use serverLoaders
    echo "  ⚠️  Server Component detected - ensure using serverLoaders"
  fi
done

echo "✅ Import updates complete!"
echo "⚠️  Please review changes and update function calls to use 'serverLoaders' in Server Components"
