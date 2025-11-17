#!/bin/bash

echo "🔧 Fixing malformed imports..."

# Fix all files with malformed imports like: import { FOO } , { serverLoaders }
find src/app -name "*.tsx" -type f | while read file; do
  # Check if file has malformed import
  if grep -q "} , { serverLoaders }" "$file"; then
    echo "📝 Fixing $file"

    # Replace malformed import with correct one
    sed -i "s/import { [A-Z_]* } , { serverLoaders } from '@\/lib\/content-loaders'/import { serverLoaders } from '@\/lib\/content-loaders'/g" "$file"
  fi
done

echo "✅ Import fixes complete!"
