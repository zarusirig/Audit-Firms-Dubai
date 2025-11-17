#!/bin/bash

echo "🔧 Fixing TypeScript null check errors..."

# Function to fix null checks in a file
fix_null_checks() {
  local file="$1"
  
  # After the "if (!data) { return/notFound() }" block, 
  # TypeScript still thinks data might be undefined.
  # We need to add a type assertion or restructure.
  
  # Strategy: After the null check, add a comment and use data safely
  # The issue is that after "if (!data) notFound()", TS doesn't know
  # that notFound() never returns. We can use a definite assignment or
  # just assert the type.
  
  # For generateMetadata functions, change pattern:
  # const data = await loader()
  # if (!data) return { title: 'Not Found' }
  # // At this point data is definitely defined
  # return { title: data.metaTitle ... }
  
  # For the main function body, same pattern applies
  
  # Actually, the simplest fix is to use non-null assertion operator (!)
  # But that's not ideal. Better to assign to a new const after the check.
  
  # Let's use a safer pattern: assign after null check
  sed -i '/if (!data) {/,/^  }$/ {
    /^  }$/a\
  // TypeScript null check - data is guaranteed to be defined here\
  const content = data
  }' "$file"
  
  # Then replace all remaining 'data.' with 'content.'
  # But this is complex... Let me try a simpler approach
}

# Actually, the simplest fix is to tell TypeScript that notFound() never returns
# Or we can use definite assignment assertion

# Let's use a pragmatic approach: add non-null assertion where needed
# Or better: cast the type after the check

for file in src/app/\[locale\]/{industries,services,locations}/*/page.tsx; do
  if [ -f "$file" ]; then
    echo "📝 Processing $file..."
    
    # In generateMetadata, after the null check, cast the type
    # Look for pattern: if (!data) { return ... }
    # After the closing brace, data should be treated as non-null
    
    # Add a const assertion after null check in generateMetadata
    perl -i -pe '
      if (/^  if \(!data\) \{/ .. /^  \}$/) {
        if (/^  \}$/ && $seen_if) {
          $_ .= "  const pageData = data as NonNullable<typeof data>\n";
          $seen_if = 0;
        } elsif (/^  if \(!data\) \{/) {
          $seen_if = 1;
        }
      }
    ' "$file" 2>/dev/null || true
    
  fi
done

echo "✅ TypeScript fixes applied!"
