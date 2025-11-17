#!/bin/bash

# Update function calls to use serverLoaders in Server Components

echo "🔄 Updating function calls to use serverLoaders..."

FILES=$(grep -r "from '@/lib/content-loaders'" src/app --include="*.tsx" -l)

for file in $FILES; do
  if grep -q "export default async function" "$file"; then
    echo "📝 Updating $file"

    # Add serverLoaders import if not present
    if ! grep -q "{ serverLoaders }" "$file"; then
      sed -i "s|from '@/lib/content-loaders'|, { serverLoaders } from '@/lib/content-loaders'|g" "$file"
    fi

    # Replace function calls with serverLoaders prefix
    sed -i "s/await getAllTeamMembers()/await serverLoaders.getAllTeamMembers()/g" "$file"
    sed -i "s/await getTeamMemberById(/await serverLoaders.getTeamMemberById(/g" "$file"
    sed -i "s/await getAllLocations()/await serverLoaders.getAllLocations()/g" "$file"
    sed -i "s/await getLocationBySlug(/await serverLoaders.getLocationBySlug(/g" "$file"
    sed -i "s/await getAllServices()/await serverLoaders.getAllServices()/g" "$file"
    sed -i "s/await getServiceBySlug(/await serverLoaders.getServiceBySlug(/g" "$file"
    sed -i "s/await getAllIndustries()/await serverLoaders.getAllIndustries()/g" "$file"
    sed -i "s/await getIndustryBySlug(/await serverLoaders.getIndustryBySlug(/g" "$file"
    sed -i "s/await getAllBlogPosts()/await serverLoaders.getAllBlogPosts()/g" "$file"
    sed -i "s/await getBlogPostBySlug(/await serverLoaders.getBlogPostBySlug(/g" "$file"
    sed -i "s/await getAllGuides()/await serverLoaders.getAllGuides()/g" "$file"
    sed -i "s/await getGuideBySlug(/await serverLoaders.getGuideBySlug(/g" "$file"

    # Handle cases without await
    sed -i "s/getAllTeamMembers()/serverLoaders.getAllTeamMembers()/g" "$file"
    sed -i "s/getTeamMemberById(/serverLoaders.getTeamMemberById(/g" "$file"
    sed -i "s/getAllLocations()/serverLoaders.getAllLocations()/g" "$file"
    sed -i "s/getLocationBySlug(/serverLoaders.getLocationBySlug(/g" "$file"
    sed -i "s/getAllServices()/serverLoaders.getAllServices()/g" "$file"
    sed -i "s/getServiceBySlug(/serverLoaders.getServiceBySlug(/g" "$file"
    sed -i "s/getAllIndustries()/serverLoaders.getAllIndustries()/g" "$file"
    sed -i "s/getIndustryBySlug(/serverLoaders.getIndustryBySlug(/g" "$file"
    sed -i "s/getAllBlogPosts()/serverLoaders.getAllBlogPosts()/g" "$file"
    sed -i "s/getBlogPostBySlug(/serverLoaders.getBlogPostBySlug(/g" "$file"
    sed -i "s/getAllGuides()/serverLoaders.getAllGuides()/g" "$file"
    sed -i "s/getGuideBySlug(/serverLoaders.getGuideBySlug(/g" "$file"
  fi
done

echo "✅ Function call updates complete!"
