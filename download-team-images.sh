#!/usr/bin/env bash

set -euo pipefail

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGES_DIR="${PROJECT_ROOT}/public/images/team"
USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Team member URLs and filenames
declare -a TEAM_MEMBERS=(
  "https://farahatco.com/abdulla-al-shamssi/|Abdulla-Al-Shamssi.jpg"
  "https://farahatco.com/m-a-farahat/|MA-Farahat.jpg"
  "https://farahatco.com/jose-varghese/|Jose-Varghese.jpg"
  "https://farahatco.com/m-al-khairy/|M-Al-Khairy.jpg"
  "https://farahatco.com/bilal-al-abdulla/|Bilal-Al-Abdulla.jpg"
  "https://farahatco.com/mamdouh-ali/|Mamdouh-Ali.jpg"
  "https://farahatco.com/dr-imad-kutum/|Dr-Imad-Kutum.jpg"
  "https://farahatco.com/v-ramakrishnan/|V-Ramakrishnan.jpg"
  "https://farahatco.com/eng-raymond-arancon/|Eng-Raymond-Arancon.jpg"
  "https://farahatco.com/dalia-rashid/|Dalia-Rashid.jpg"
  "https://farahatco.com/romany-shayb/|Romany-Shayb.jpg"
  "https://farahatco.com/saeb-khabshnih/|Saeb-Khabshnih.jpg"
  "https://farahatco.com/md-kamruzzaman-fca/|Md-Kamruzzaman.jpg"
  "https://farahatco.com/ahmad-ali-jourieh/|Ahmad-Ali-Jourieh.jpg"
  "https://farahatco.com/mohamed-ali-ghoraba/|Mohamed-Ali-Ghoraba.jpg"
  "https://farahatco.com/mohamed-zahran/|Mohamed-Zahran.jpg"
  "https://farahatco.com/nayomi-jayaweera/|Nayomi-Jayaweera.jpg"
  "https://farahatco.com/dulmini-assalaarachchi/|Dulmini-Assalaarachchi.jpg"
  "https://farahatco.com/abdurrahman-rizvi/|Abdurrahman-Rizvi.jpg"
  "https://farahatco.com/menali-madhurika/|Menali-Madhurika.jpg"
  "https://farahatco.com/tareq-badarin/|Tareq-Badarin.jpg"
  "https://farahatco.com/sarwat-jahan/|Sarwat-Jahan.jpg"
)

# Counters
TOTAL=0
SUCCESS=0
FAILED=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create images directory
echo -e "${BLUE}Creating directory: ${IMAGES_DIR}${NC}"
mkdir -p "${IMAGES_DIR}"

# Function to convert relative URL to absolute
to_absolute_url() {
  local base_url="$1"
  local img_url="$2"

  # Already absolute
  if [[ "$img_url" =~ ^https?:// ]]; then
    echo "$img_url"
    return
  fi

  # Protocol-relative
  if [[ "$img_url" =~ ^// ]]; then
    echo "https:${img_url}"
    return
  fi

  # Root-relative
  if [[ "$img_url" =~ ^/ ]]; then
    local domain=$(echo "$base_url" | sed -E 's|(https?://[^/]+).*|\1|')
    echo "${domain}${img_url}"
    return
  fi

  # Path-relative
  local base_path=$(echo "$base_url" | sed -E 's|^(https?://[^/]+/.*/)[^/]*$|\1|')
  echo "${base_path}${img_url}"
}

# Function to extract main profile image from HTML
extract_profile_image() {
  local html="$1"
  local page_url="$2"

  # Strategy 1: Look for og:image meta tag (most reliable for profile pages)
  local og_image=$(echo "$html" | grep -o '<meta property="og:image" content="[^"]*"' | sed 's/.*content="\([^"]*\)".*/\1/' | head -1)
  if [[ -n "$og_image" ]]; then
    to_absolute_url "$page_url" "$og_image"
    return
  fi

  # Strategy 2: Look for Twitter card image
  local twitter_image=$(echo "$html" | grep -o '<meta name="twitter:image" content="[^"]*"' | sed 's/.*content="\([^"]*\)".*/\1/' | head -1)
  if [[ -n "$twitter_image" ]]; then
    to_absolute_url "$page_url" "$twitter_image"
    return
  fi

  # Strategy 3: Look for wp-post-image (WordPress featured image)
  local wp_image=$(echo "$html" | grep 'wp-post-image' | grep -o 'src="[^"]*"' | sed 's/src="\([^"]*\)".*/\1/' | head -1)
  if [[ -n "$wp_image" ]]; then
    to_absolute_url "$page_url" "$wp_image"
    return
  fi

  # Strategy 4: Look for largest image in content area (exclude logos, icons)
  local content_image=$(echo "$html" | grep -o '<img[^>]*src="[^"]*"[^>]*>' | \
    grep -v 'logo' | grep -v 'icon' | grep -v 'svg' | \
    grep -o 'src="[^"]*"' | sed 's/src="\([^"]*\)".*/\1/' | \
    grep -E '\.(jpg|jpeg|png)' | head -1)
  if [[ -n "$content_image" ]]; then
    to_absolute_url "$page_url" "$content_image"
    return
  fi

  # Strategy 5: Look for any reasonable sized image
  local any_image=$(echo "$html" | grep -o '<img[^>]*src="[^"]*"[^>]*>' | \
    grep -v 'logo' | grep -v 'icon' | grep -v 'button' | \
    grep -o 'src="[^"]*"' | sed 's/src="\([^"]*\)".*/\1/' | \
    grep -E '\.(jpg|jpeg|png)' | head -1)
  if [[ -n "$any_image" ]]; then
    to_absolute_url "$page_url" "$any_image"
    return
  fi

  echo ""
}

# Main download loop
echo -e "\n${BLUE}Starting download of ${#TEAM_MEMBERS[@]} team member images...${NC}\n"

for entry in "${TEAM_MEMBERS[@]}"; do
  TOTAL=$((TOTAL + 1))

  # Split URL and filename
  IFS='|' read -r url filename <<< "$entry"

  echo -e "${YELLOW}[$TOTAL/${#TEAM_MEMBERS[@]}] Processing: ${filename}${NC}"
  echo "  URL: $url"

  # Fetch HTML
  echo "  Fetching HTML..."
  html=$(curl -s -L -A "$USER_AGENT" "$url" 2>/dev/null || echo "")

  if [[ -z "$html" ]]; then
    echo -e "  ${RED}✗ Failed to fetch page${NC}"
    FAILED=$((FAILED + 1))
    echo ""
    continue
  fi

  # Extract image URL
  echo "  Extracting image URL..."
  img_url=$(extract_profile_image "$html" "$url")

  if [[ -z "$img_url" ]]; then
    echo -e "  ${RED}✗ Could not find profile image${NC}"
    FAILED=$((FAILED + 1))
    echo ""
    continue
  fi

  echo "  Image URL: $img_url"

  # Download image
  echo "  Downloading..."
  output_path="${IMAGES_DIR}/${filename}"

  if curl -s -L -A "$USER_AGENT" -o "$output_path" "$img_url" 2>/dev/null; then
    # Check if file is empty or too small (likely error page)
    file_size=$(wc -c < "$output_path" 2>/dev/null || echo "0")

    if [[ "$file_size" -lt 1000 ]]; then
      echo -e "  ${RED}✗ Downloaded file too small (${file_size} bytes) - likely error${NC}"
      rm -f "$output_path"
      FAILED=$((FAILED + 1))
    else
      echo -e "  ${GREEN}✓ Success!${NC} (${file_size} bytes)"
      SUCCESS=$((SUCCESS + 1))
    fi
  else
    echo -e "  ${RED}✗ Download failed${NC}"
    FAILED=$((FAILED + 1))
  fi

  echo ""
done

# Final summary
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    DOWNLOAD SUMMARY                    ${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "Total team members:  ${TOTAL}"
echo -e "${GREEN}Successful downloads: ${SUCCESS}${NC}"
echo -e "${RED}Failed downloads:     ${FAILED}${NC}"
echo -e "\n${BLUE}Download directory:${NC}"
echo -e "  ${IMAGES_DIR}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"

# List downloaded files
if [[ "$SUCCESS" -gt 0 ]]; then
  echo -e "\n${GREEN}Downloaded files:${NC}"
  ls -lh "${IMAGES_DIR}" | tail -n +2
fi

exit 0
