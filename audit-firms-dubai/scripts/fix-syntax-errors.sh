#!/bin/bash

echo "🔧 Fixing syntax errors in page files..."

# Fix all industry, service, and location pages
for file in src/app/\[locale\]/{industries,services,locations}/*/page.tsx; do
  if [ -f "$file" ]; then
    echo "📝 Fixing $file..."
    
    # Fix missing closing brace after notFound()
    # Pattern: "notFound()\n\n  const" should be "notFound()\n  }\n\n  const"
    sed -i '/notFound()$/,/^  const/ {
      /notFound()$/ {
        N
        s/notFound()\n\n  const/notFound()\n  }\n\n  const/
      }
    }' "$file"
    
    # Remove extra closing brace at end if file ends with }\n}
    if tail -2 "$file" | grep -q "^}$"; then
      # Check if last two lines are both just }
      if [ "$(tail -2 "$file" | uniq | wc -l)" -eq 1 ]; then
        # Remove last line
        sed -i '$ d' "$file"
      fi
    fi
  fi
done

echo "✅ Syntax errors fixed!"
