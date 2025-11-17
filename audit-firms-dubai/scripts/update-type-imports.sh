#!/bin/bash

echo "🔄 Updating type imports..."

FILES=$(grep -r "type TeamMember\|type BlogPost\|type Guide\|type ServicePageContent\|type IndustryPageContent\|type LocationPageContent" src/app --include="*.tsx" -l)

for file in $FILES; do
  echo "📝 Updating types in $file"

  # Replace type imports
  sed -i "s|type TeamMember,|TeamMember,|g" "$file"
  sed -i "s|type BlogPost,|BlogPost,|g" "$file"
  sed -i "s|type Guide,|Guide,|g" "$file"
  sed -i "s|type ServicePageContent,|ServicePageContent,|g" "$file"
  sed -i "s|type IndustryPageContent,|IndustryPageContent,|g" "$file"
  sed -i "s|type LocationPageContent,|LocationPageContent,|g" "$file"

  # Add type import from @/types/content if needed
  if grep -q "TeamMember\|BlogPost\|Guide\|ServicePageContent\|IndustryPageContent\|LocationPageContent" "$file"; then
    if ! grep -q "from '@/types/content'" "$file"; then
      # Find types used in this file
      types=()
      grep -q "TeamMember" "$file" && types+=("TeamMember")
      grep -q "BlogPost" "$file" && types+=("BlogPost")
      grep -q "Guide" "$file" && types+=("Guide")
      grep -q "ServicePageContent" "$file" && types+=("ServicePageContent")
      grep -q "IndustryPageContent" "$file" && types+=("IndustryPageContent")
      grep -q "LocationPageContent" "$file" && types+=("LocationPageContent")

      if [ ${#types[@]} -gt 0 ]; then
        type_imports=$(IFS=", "; echo "${types[*]}")
        # Add import after the other imports
        sed -i "/from '@\/lib\/content-loaders'/a import type { $type_imports } from '@/types/content'" "$file"
      fi
    fi
  fi
done

echo "✅ Type import updates complete!"
