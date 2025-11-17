#!/bin/bash

echo "🔧 Fixing data fetching placement..."

# Function to fix a single file
fix_file() {
  local file="$1"
  local slug="$2"
  local loader_function="$3"
  
  # Remove misplaced data fetching code
  sed -i '/^  const .*Data = await serverLoaders\./d' "$file"
  sed -i '/^$/N;/^\n  if (!.*Data) {$/d' "$file"
  sed -i '/^    notFound()$/d' "$file"
  sed -i '/^  }$/N;/^  }\n$/d' "$file"
  
  # Find the line with the opening brace after params definition
  line_num=$(grep -n "}) {" "$file" | head -1 | cut -d: -f1)
  
  if [ -n "$line_num" ]; then
    # Insert data fetching code after the opening brace
    sed -i "${line_num}a\\
  const data = await serverLoaders.${loader_function}('${slug}')\\
\\
  if (!data) {\\
    notFound()\\
  }\\
" "$file"
    
    # Replace all references to the old variable name with 'data'
    sed -i "s/serviceData/data/g" "$file"
    sed -i "s/industryData/data/g" "$file"
    sed -i "s/locationData/data/g" "$file"
  fi
}

# Fix service pages
for service in "forensic-audit" "vat-audit" "rera-audit" "due-diligence" "internal-audit" "external-audit"; do
  echo "📝 Fixing services/$service..."
  fix_file "src/app/[locale]/services/$service/page.tsx" "$service" "getServiceBySlug"
done

# Fix industry pages
for industry in "ecommerce" "technology" "hospitality" "healthcare" "financial-services" "manufacturing" "trading" "real-estate"; do
  echo "📝 Fixing industries/$industry..."
  fix_file "src/app/[locale]/industries/$industry/page.tsx" "$industry" "getIndustryBySlug"
done

# Fix location pages
for location in "abu-dhabi" "difc" "business-bay" "jlt" "dubai-marina" "downtown-dubai"; do
  echo "📝 Fixing locations/$location..."
  fix_file "src/app/[locale]/locations/$location/page.tsx" "$location" "getLocationBySlug"
done

echo "✅ Data fetching placement fixed!"
