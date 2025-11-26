# Email Setup Guide for info@auditfirmsdubai.ae

## 🎯 Quick Start - 5 Minutes to Email Working

### Step 1: Get Resend Account (2 minutes)

1. Go to [resend.com](https://resend.com)
2. Click "Sign up" and create your account
3. Verify your email address

### Step 2: Add Your Domain (2 minutes)

1. In Resend dashboard, click "Domains" in the left sidebar
2. Click "Add Domain"
3. Enter: `auditfirmsdubai.ae`
4. Click "Add Domain"

### Step 3: Verify Domain Ownership

You'll see DNS records that Resend needs you to add to your domain:

**Add these DNS records to your domain registrar (GoDaddy, Namecheap, etc.):**

```
Type: TXT
Name: _dmarc.auditfirmsdubai.ae
Value: v=DMARC1; p=none;
```

```
Type: TXT
Name: auditfirmsdubai.ae
Value: v=spf1 include:_spf.resend.com ~all
```

```
Type: CNAME
Name: resend._domainkey.auditfirmsdubai.ae
Value: dkim._domainkey.resend.com
```

**For info@auditfirmsdubai.ae specifically:**
- No additional MX records needed (Resend handles this)
- The email will work once domain is verified

### Step 4: Get Your API Key

1. In Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Name it "Audit Firms Dubai"
4. Copy the API key (starts with `re_`)

### Step 5: Configure Your Application

Create a file named `.env.local` in your project root:

```env
# Email Configuration (Resend)
RESEND_API_KEY=re_B5zK7fbB_GFMTaDK8SdoxPtRihBYxLepu

# Email Settings
FROM_EMAIL=info@auditfirmsdubai.ae
FROM_NAME=Farahat & Co

# Admin/Notification Emails
ADMIN_EMAIL=info@auditfirmsdubai.ae
SALES_EMAIL=info@auditfirmsdubai.ae

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://auditfirmsdubai.ae

# Data Storage Path
DATA_STORAGE_PATH=./data

# Security
RATE_LIMIT_SECRET=your_random_secret_here_123456789
```

## 🧪 Test Your Setup

1. Start your development server:
```bash
npm run dev
```

2. Test a contact form submission:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "message": "Testing email setup",
    "formType": "general"
  }'
```

3. Check your email - you should receive a confirmation!

## 📧 Understanding Email Flow

When someone submits your forms:

- **Contact Forms**: Email goes to `info@auditfirmsdubai.ae` + confirmation to user
- **Quote Requests**: Email goes to `info@auditfirmsdubai.ae` + confirmation to user
- **Newsletter**: Confirmation email sent to subscriber
- **Downloads**: Download link + optional sales notification

## 🔧 Troubleshooting

### "Domain not verified" error
- Wait 5-10 minutes after adding DNS records
- Check if DNS records were added correctly
- Contact your domain registrar if issues persist

### Emails going to spam
- Complete domain verification
- Send a few test emails to warm up the domain
- Check your domain reputation

### API key issues
- Make sure you copied the full API key
- Check for extra spaces in `.env.local`
- Restart your development server after changes

## 💰 Pricing

**Resend Free Tier:**
- 3,000 emails/month
- Perfect for getting started
- Upgrade anytime as you grow

## 🚀 Production Deployment

When deploying to production:

1. **Vercel/Netlify**: Add environment variables in their dashboard
2. **Custom Server**: Copy `.env.local` to production
3. **Security**: Use different API keys for dev/prod

## 📞 Support

- **Resend Support**: support@resend.com
- **Domain Issues**: Contact your domain registrar
- **API Issues**: Check Resend dashboard for error logs

---

**Your email will be working in about 10 minutes!** 🎉

Need help with DNS records or have questions? Let me know!
