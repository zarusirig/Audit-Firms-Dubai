#!/bin/bash

# Email Setup Script for info@auditfirmsdubai.ae
# Run this script to create your .env.local file

echo "🚀 Setting up email for info@auditfirmsdubai.ae"
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    echo "Do you want to overwrite it? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi
fi

echo "📝 Creating .env.local file..."
cat > .env.local << 'EOF'
# Email Configuration (Resend)
# Get your API key from https://resend.com/
# Replace 'your_resend_api_key_here' with your actual API key
RESEND_API_KEY=re_eJjjEoiP_6Acm6S63Gpw5hmBD6KBq7sJj

# Email Settings
FROM_EMAIL=info@auditfirmsdubai.ae
FROM_NAME=Farahat & Co

# Admin/Notification Emails
ADMIN_EMAIL=info@auditfirmsdubai.ae
SALES_EMAIL=info@auditfirmsdubai.ae

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://auditfirmsdubai.ae

# Data Storage Path (relative to project root)
DATA_STORAGE_PATH=./data

# Security
RATE_LIMIT_SECRET=change_this_to_a_random_string_in_production
EOF

echo "✅ .env.local created successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://resend.com and create an account"
echo "2. Add domain 'auditfirmsdubai.ae' in Resend dashboard"
echo "3. Add the DNS records shown in Resend to your domain registrar"
echo "4. Get your API key from Resend and replace 'your_resend_api_key_here' in .env.local"
echo "5. Run: npm run dev"
echo "6. Test with: curl -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"name\":\"Test\",\"email\":\"your@email.com\",\"message\":\"Testing\",\"formType\":\"general\"}'"
echo ""
echo "📖 See EMAIL_SETUP_GUIDE.md for detailed instructions"
echo ""
echo "🎉 Ready to send emails from info@auditfirmsdubai.ae!"
