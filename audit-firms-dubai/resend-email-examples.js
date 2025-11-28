/**
 * Resend Email Template Examples
 * Professional email templates for Farahat & Co Audit Firm
 * Ready to use with Resend API
 */

import { Resend } from 'resend';

// Initialize Resend (replace with your actual API key)
const resend = new Resend('your_resend_api_key_here');

// Example 1: Using the Custom Email Template
async function sendCustomEmail() {
  const { customEmailTemplate } = await import('./src/lib/email/templates.js');

  const emailData = customEmailTemplate({
    recipientName: "John Smith",
    subject: "Custom Audit Consultation Offer",
    title: "Personalized Audit Services",
    content: `We noticed your company is growing rapidly and may benefit from our comprehensive audit services.

Our team of certified auditors can help ensure your financial statements are accurate and compliant with UAE regulations.

We offer flexible scheduling and can accommodate your busy business needs.`,
    callToAction: {
      text: "Schedule Free Consultation",
      url: "https://auditfirmsdubai.ae/contact"
    },
    additionalInfo: "This consultation is completely free and takes only 30 minutes."
  });

  const result = await resend.emails.send({
    from: 'Farahat & Co <info@auditfirmsdubai.ae>',
    to: ['client@example.com'],
    subject: emailData.subject,
    html: emailData.html,
  });

  console.log('Custom email sent:', result);
}

// Example 2: Using the Audit Firm Professional Template
async function sendAuditFirmEmail() {
  const { auditFirmEmail } = await import('./src/lib/email/templates.js');

  const emailData = auditFirmEmail({
    recipientName: "Sarah Johnson",
    subject: "Ministry Approved Audit Services for Your Business",
    introduction: "Thank you for your interest in Farahat & Co's audit services.",
    mainContent: "As Ministry Approved Auditors since 1985, we provide comprehensive financial audit services tailored to businesses in Dubai and the UAE. Our experienced team understands the unique requirements of various industries and ensures compliance with local regulations.",
    services: [
      "External Financial Audits",
      "Internal Control Reviews",
      "VAT Audit Compliance",
      "Due Diligence Services",
      "IFRS Implementation Support",
      "Tax Advisory Services"
    ],
    callToAction: {
      text: "Request Free Quote",
      url: "https://auditfirmsdubai.ae/quote"
    },
    contactInfo: true
  });

  const result = await resend.emails.send({
    from: 'Farahat & Co <info@auditfirmsdubai.ae>',
    to: ['prospect@example.com'],
    subject: emailData.subject,
    html: emailData.html,
  });

  console.log('Audit firm email sent:', result);
}

// Example 3: Follow-up Email Template
async function sendFollowUpEmail() {
  const { auditFirmEmail } = await import('./src/lib/email/templates.js');

  const emailData = auditFirmEmail({
    recipientName: "Michael Chen",
    subject: "Following Up on Your Audit Inquiry",
    introduction: "I hope this email finds you well.",
    mainContent: "Thank you for your recent inquiry about our audit services. I wanted to follow up and see if you had any questions about our Ministry Approved audit services or would like to schedule a consultation.",
    callToAction: {
      text: "Book Consultation",
      url: "https://auditfirmsdubai.ae/contact"
    },
    contactInfo: true
  });

  const result = await resend.emails.send({
    from: 'Farahat & Co <info@auditfirmsdubai.ae>',
    to: ['followup@example.com'],
    subject: emailData.subject,
    html: emailData.html,
  });

  console.log('Follow-up email sent:', result);
}

// Example 4: Newsletter Welcome Email
async function sendNewsletterWelcome() {
  const { customEmailTemplate } = await import('./src/lib/email/templates.js');

  const emailData = customEmailTemplate({
    recipientName: "Emma Davis",
    subject: "Welcome to Farahat & Co Newsletter",
    title: "Welcome to Our Audit Insights Newsletter!",
    content: `Thank you for subscribing to the Farahat & Co newsletter!

You'll now receive regular updates on:
• UAE audit regulations and compliance changes
• Financial reporting best practices
• Tax updates and advisory insights
• Industry news and analysis

Our first newsletter will arrive in your inbox soon with the latest audit industry developments.`,
    callToAction: {
      text: "Explore Our Services",
      url: "https://auditfirmsdubai.ae/services"
    },
    additionalInfo: "You can unsubscribe at any time by clicking the link at the bottom of our emails."
  });

  const result = await resend.emails.send({
    from: 'Farahat & Co <info@auditfirmsdubai.ae>',
    to: ['subscriber@example.com'],
    subject: emailData.subject,
    html: emailData.html,
  });

  console.log('Newsletter welcome email sent:', result);
}

// Export examples for use
export {
  sendCustomEmail,
  sendAuditFirmEmail,
  sendFollowUpEmail,
  sendNewsletterWelcome
};

/*
USAGE INSTRUCTIONS:

1. Replace 'your_resend_api_key_here' with your actual Resend API key
2. Call any of the example functions:

   // For a professional audit firm email
   await sendAuditFirmEmail();

   // For a custom email
   await sendCustomEmail();

   // For follow-ups
   await sendFollowUpEmail();

3. Customize the content, recipient, and call-to-action as needed

4. The templates automatically include:
   - Professional Farahat & Co branding
   - Ministry Approved Auditors messaging
   - Contact information
   - Mobile-responsive design
   - Proper email authentication headers
*/


