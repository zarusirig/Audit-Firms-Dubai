# API Setup Guide for Audit Firms Dubai

This guide explains how to set up and configure the API endpoints for smooth functioning.

## 🚀 Quick Start

Your APIs are now fully functional! Here's what has been implemented:

### ✅ Completed Setup
- **Database Storage**: File-based JSON storage (suitable for moderate traffic)
- **Email Notifications**: Resend integration for transactional emails
- **Spam Protection**: Honeypot fields and rate limiting
- **Validation**: Comprehensive form validation with Zod schemas
- **Error Handling**: Graceful error handling with fallbacks

## 📋 API Endpoints

| Endpoint | Method | Purpose | Status |
|----------|--------|---------|---------|
| `/api/contact` | POST | Contact form submissions | ✅ Ready |
| `/api/quote` | POST | Quote request forms | ✅ Ready |
| `/api/newsletter` | POST | Newsletter subscriptions | ✅ Ready |
| `/api/download` | POST | Gated downloads | ✅ Ready |
| `/api/calculate-fee` | POST | Audit fee calculator | ✅ Ready |

## 🔧 Configuration Required

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration (Required for email functionality)
# Get your API key from https://resend.com/
RESEND_API_KEY=re_eJjjEoiP_6Acm6S63Gpw5hmBD6KBq7sJj

# Email Settings
FROM_EMAIL=noreply@auditfirmsdubai.ae
FROM_NAME=Farahat & Co

# Admin/Notification Emails
ADMIN_EMAIL=info@farahatco.com
SALES_EMAIL=info@farahatco.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://auditfirmsdubai.ae

# Data Storage Path (relative to project root)
DATA_STORAGE_PATH=./data

# Security (change this in production)
RATE_LIMIT_SECRET=your_secret_key_here_change_this_in_production
```

### 2. Resend Email Setup

1. **Sign up for Resend**: Visit [resend.com](https://resend.com) and create an account
2. **Get API Key**: Go to API Keys section and create a new key
3. **Verify Domain**: Add and verify your domain (`auditfirmsdubai.ae`)
4. **Add API Key**: Paste your API key in the `.env.local` file

### 3. Domain Verification (Important!)

For emails to work properly, you need to verify your domain with Resend:

1. **Add Domain**: In Resend dashboard, add `auditfirmsdubai.ae`
2. **Add DNS Records**: Resend will provide DNS records to add to your domain
3. **Verify**: Once DNS records are added, Resend will verify your domain

## 📊 Data Storage

The APIs use a simple file-based database stored in the `./data/` directory:

- `contacts.json` - Contact form submissions
- `quotes.json` - Quote requests
- `newsletter.json` - Newsletter subscriptions
- `downloads.json` - Download tracking records

### Migration Path

For high-traffic sites, you can easily migrate to:
- **PostgreSQL/MySQL**: Replace file operations with database queries
- **MongoDB**: Change the database service to use MongoDB
- **AWS S3/Cloud Storage**: Store data in cloud storage

## 🧪 Testing the APIs

### Using cURL

Test each endpoint:

```bash
# Contact Form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message",
    "formType": "general"
  }'

# Quote Form
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "ABC Corp",
    "contactName": "Jane Smith",
    "email": "jane@abc.com",
    "phone": "+971501234567",
    "services": ["external-audit"],
    "companySize": "small",
    "urgency": "within-month",
    "agreeToTerms": true
  }'

# Newsletter
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "firstName": "John",
    "marketingConsent": true
  }'

# Download
curl -X POST http://localhost:3000/api/download \
  -H "Content-Type: application/json" \
  -d '{
    "resourceId": "audit-checklist-001",
    "email": "user@example.com",
    "name": "John Doe",
    "marketingConsent": true
  }'
```

### Health Checks

Each API has a GET endpoint for health checks:

```bash
curl http://localhost:3000/api/contact
curl http://localhost:3000/api/quote
curl http://localhost:3000/api/newsletter
curl http://localhost:3000/api/download
curl http://localhost:3000/api/calculate-fee
```

## 📧 Email Templates

The following email templates are available:

- `contactAutoResponder` - Sent to users after contact form submission
- `quoteAutoResponder` - Sent to users after quote request
- `quoteNotification` - Sent to sales team for new quotes
- `newsletterConfirmation` - Double opt-in confirmation for newsletter
- `downloadConfirmation` - Sent after successful download

## 🔒 Security Features

### Rate Limiting
- Contact forms: 3 submissions per minute per IP
- Quote forms: 2 submissions per hour per IP
- Newsletter: 5 subscriptions per hour per IP
- Downloads: 10 downloads per hour per IP
- Calculator: 20 calculations per minute per IP

### Spam Protection
- Honeypot fields (hidden fields that should remain empty)
- Submission speed detection (bots submit too fast)
- Suspicious keyword detection
- Disposable email detection

### Data Sanitization
- HTML tag removal
- Email format validation
- Phone number sanitization
- Input length limits

## 🚨 Error Handling

The APIs are designed to be resilient:

- **Database failures**: Continue with email sending
- **Email failures**: Log errors but don't break the API
- **Validation errors**: Return detailed error messages
- **Rate limiting**: Return appropriate HTTP status codes

## 📈 Monitoring

Check the console logs for:
- Successful submissions
- Email sending status
- Database operation results
- Error details

## 🔄 Next Steps

### Optional Enhancements

1. **CRM Integration**
   - Connect with HubSpot, Salesforce, or Pipedrive
   - Sync leads automatically

2. **Advanced Analytics**
   - Track conversion rates
   - Monitor form performance
   - Generate lead reports

3. **Mailing List Integration**
   - Connect with Mailchimp, SendGrid, or ConvertKit
   - Automated welcome sequences

4. **SMS Notifications**
   - Add Twilio for SMS alerts
   - Critical lead notifications

### Production Deployment

1. **Environment Variables**: Set up proper env vars in production
2. **Domain Verification**: Ensure email domain is verified
3. **Monitoring**: Set up error tracking (Sentry, LogRocket)
4. **Backups**: Regular backups of the data directory

## 🆘 Troubleshooting

### Emails Not Sending
1. Check Resend API key is correct
2. Verify domain is verified in Resend
3. Check spam folder
4. Review Resend dashboard for delivery status

### Data Not Saving
1. Check `./data/` directory permissions
2. Ensure disk space is available
3. Check file system write permissions

### Rate Limiting Issues
1. Clear browser cache/cookies
2. Wait for rate limit window to reset
3. Check if IP is blocked by firewall

## 📞 Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify environment variables are set correctly
3. Test with the provided cURL commands
4. Review the API response for error details

---

**Your APIs are now ready for production use!** 🎉
