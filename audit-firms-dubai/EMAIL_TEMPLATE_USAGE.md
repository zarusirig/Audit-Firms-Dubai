# 📧 Email Template Usage Guide for Resend

## 🎯 Available Templates

### 1. `auditFirmEmail()` - Professional Audit Firm Template
**Best for:** Client communications, proposals, follow-ups

**Features:**
- ✅ Ministry Approved Auditors branding
- ✅ Professional introduction and content sections
- ✅ Services list (optional)
- ✅ Call-to-action button
- ✅ Complete contact information
- ✅ Mobile-responsive design

### 2. `customEmailTemplate()` - Flexible Custom Template
**Best for:** Newsletters, announcements, custom communications

**Features:**
- ✅ Customizable title and content
- ✅ Optional recipient name
- ✅ Call-to-action button (optional)
- ✅ Additional information box (optional)
- ✅ Professional styling

## 🚀 How to Use with Resend

### Step 1: Import Templates
```javascript
import { auditFirmEmail, customEmailTemplate } from './src/lib/email/templates.js';
import { Resend } from 'resend';

const resend = new Resend('your_api_key_here');
```

### Step 2: Create Email Content
```javascript
// Professional audit firm email
const emailData = auditFirmEmail({
  recipientName: "John Smith",
  subject: "Ministry Approved Audit Services Proposal",
  introduction: "Thank you for considering Farahat & Co for your audit needs.",
  mainContent: "We have prepared a customized audit proposal for your business based on our initial consultation. Our team of certified auditors will ensure compliance with UAE regulations.",
  services: [
    "External Financial Audit",
    "Internal Controls Review",
    "VAT Compliance Audit",
    "Management Reports"
  ],
  callToAction: {
    text: "View Full Proposal",
    url: "https://auditfirmsdubai.ae/proposal"
  },
  contactInfo: true
});
```

### Step 3: Send with Resend
```javascript
const result = await resend.emails.send({
  from: 'Farahat & Co <info@auditfirmsdubai.ae>',
  to: ['client@example.com'],
  subject: emailData.subject,
  html: emailData.html,
});
```

## 📝 Template Examples

### Professional Client Email
```javascript
const clientEmail = auditFirmEmail({
  recipientName: "Sarah Johnson",
  subject: "Your Comprehensive Audit Proposal",
  introduction: "Following our productive meeting, we're pleased to present our audit proposal.",
  mainContent: "Our proposal includes detailed scope, timeline, and pricing for comprehensive audit services tailored to your business needs.",
  services: [
    "Financial Statement Audit",
    "Internal Controls Assessment",
    "Regulatory Compliance Review",
    "Management Letter Preparation"
  ],
  callToAction: {
    text: "Review Proposal",
    url: "https://auditfirmsdubai.ae/proposal-link"
  }
});
```

### Newsletter Welcome
```javascript
const newsletterEmail = customEmailTemplate({
  recipientName: "Michael Chen",
  subject: "Welcome to Farahat & Co Insights",
  title: "Welcome to Our Audit Newsletter!",
  content: `Thank you for subscribing!

You'll receive monthly updates on:
• UAE audit regulations
• Financial reporting standards
• Tax compliance updates
• Industry best practices

Your first newsletter arrives next week.`,
  callToAction: {
    text: "Explore Our Services",
    url: "https://auditfirmsdubai.ae/services"
  },
  additionalInfo: "Unsubscribe anytime using the link in our emails."
});
```

### Follow-up Email
```javascript
const followUpEmail = auditFirmEmail({
  recipientName: "Emma Davis",
  subject: "Following Up on Your Audit Consultation",
  introduction: "I hope you're doing well.",
  mainContent: "I wanted to follow up on our recent discussion about audit services for your growing business. Have you had time to review the information we shared?",
  callToAction: {
    text: "Schedule Follow-up Call",
    url: "https://auditfirmsdubai.ae/contact"
  }
});
```

## 🎨 Customization Options

### Colors & Branding
- **Primary Color:** `#1e40af` (Professional blue)
- **Secondary Color:** `#64748b` (Slate gray)
- **Accent Color:** `#16a34a` (Success green)

### Typography
- **Font Family:** System fonts (Helvetica, Arial, sans-serif)
- **Heading Size:** 24px, 28px for main titles
- **Body Text:** 16px with 1.6 line height

### Layout
- **Max Width:** 600px (email-safe width)
- **Padding:** 40px content, 20px footer
- **Border Radius:** 6px for modern look
- **Mobile Responsive:** Yes

## 📊 Email Analytics

Track performance in Resend Dashboard:
- **Open Rates:** How many recipients open your emails
- **Click Rates:** Which links get clicked
- **Delivery Rates:** Successful delivery percentage
- **Bounce Rates:** Hard/soft bounces

## 🔧 Advanced Features

### Template Variables
```javascript
// Dynamic content based on recipient
const personalizedEmail = auditFirmEmail({
  recipientName: recipient.name,
  subject: `Audit Services for ${recipient.company}`,
  // ... rest of template
});
```

### Conditional Content
```javascript
const emailData = auditFirmEmail({
  // Show contact info only for prospects
  contactInfo: recipient.status === 'prospect',
  // ... rest of template
});
```

### A/B Testing
```javascript
// Test different subject lines
const subjects = [
  "Audit Services Proposal",
  "Custom Audit Solution for Your Business",
  "Ministry Approved Audit Services"
];
```

## 📞 Support

**Need help with templates?**
- Check `resend-email-examples.js` for complete examples
- Test templates locally before sending
- Use Resend dashboard to preview emails
- Monitor delivery and engagement metrics

---

**Your professional email templates are ready!** 🚀

Start sending branded, compliant emails from `info@auditfirmsdubai.ae`
