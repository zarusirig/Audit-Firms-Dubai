/**
 * Email Templates
 * HTML email templates for various notifications
 * Ready for integration with SendGrid, Resend, or any email service
 */

import { SITE_CONFIG } from '../constants'

// Email wrapper with consistent branding
function emailWrapper(content: string, title: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 2px solid #1e40af;">
              <h1 style="margin: 0; color: #1e40af; font-size: 28px; font-weight: 700;">
                Farahat & Co
              </h1>
              <p style="margin: 5px 0 0; color: #64748b; font-size: 14px;">
                Ministry Approved Auditors Since 1985
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #64748b; text-align: center;">
                <strong>Farahat & Co</strong> | Ministry Approved Auditors
              </p>
              <p style="margin: 0 0 10px; font-size: 13px; color: #64748b; text-align: center;">
                Office 1901, The Prism Tower, Business Bay, Dubai, UAE
              </p>
              <p style="margin: 0; font-size: 13px; color: #64748b; text-align: center;">
                Phone: <a href="tel:+97142500251" style="color: #1e40af; text-decoration: none;">+971 42 500 251</a> |
                Email: <a href="mailto:info@farahatco.com" style="color: #1e40af; text-decoration: none;">info@farahatco.com</a>
              </p>
              <p style="margin: 20px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
                © ${new Date().getFullYear()} Farahat & Co. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// Contact Form Auto-Responder
export function contactAutoResponder(data: {
  name: string
  submissionId: string
}): { subject: string; html: string } {
  const content = `
<h2 style="margin: 0 0 20px; color: #1e293b; font-size: 24px;">
  Thank You for Contacting Us, ${data.name}!
</h2>

<p style="margin: 0 0 15px; color: #475569; font-size: 16px; line-height: 1.6;">
  We have received your message and appreciate you reaching out to Farahat & Co.
</p>

<div style="background-color: #f1f5f9; padding: 20px; border-radius: 6px; margin: 25px 0;">
  <p style="margin: 0 0 10px; color: #334155; font-size: 14px; font-weight: 600;">
    Reference ID: <span style="color: #1e40af;">${data.submissionId}</span>
  </p>
  <p style="margin: 0; color: #64748b; font-size: 14px;">
    Please keep this reference number for your records.
  </p>
</div>

<h3 style="margin: 25px 0 15px; color: #1e293b; font-size: 18px;">
  What Happens Next?
</h3>

<ol style="margin: 0 0 20px; padding-left: 20px; color: #475569; font-size: 15px; line-height: 1.8;">
  <li>Our team will carefully review your inquiry</li>
  <li>We'll contact you within 24 hours (usually sooner)</li>
  <li>We'll provide expert guidance tailored to your needs</li>
</ol>

<div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 25px 0;">
  <p style="margin: 0; color: #92400e; font-size: 14px;">
    <strong>Need immediate assistance?</strong><br>
    Call us at <a href="tel:+97142500251" style="color: #b45309; text-decoration: none; font-weight: 600;">+971 42 500 251</a>
  </p>
</div>

<p style="margin: 25px 0 0; color: #475569; font-size: 15px; line-height: 1.6;">
  Best regards,<br>
  <strong>The Farahat & Co Team</strong>
</p>
  `

  return {
    subject: 'Thank You for Contacting Farahat & Co',
    html: emailWrapper(content, 'Contact Confirmation'),
  }
}

// Quote Request Auto-Responder
export function quoteAutoResponder(data: {
  contactName: string
  companyName: string
  services: string[]
  submissionId: string
}): { subject: string; html: string } {
  const content = `
<h2 style="margin: 0 0 20px; color: #1e293b; font-size: 24px;">
  Quote Request Received, ${data.contactName}!
</h2>

<p style="margin: 0 0 15px; color: #475569; font-size: 16px; line-height: 1.6;">
  Thank you for requesting a quote from Farahat & Co for <strong>${data.companyName}</strong>.
</p>

<div style="background-color: #f1f5f9; padding: 20px; border-radius: 6px; margin: 25px 0;">
  <p style="margin: 0 0 10px; color: #334155; font-size: 14px; font-weight: 600;">
    Reference ID: <span style="color: #1e40af;">${data.submissionId}</span>
  </p>
  <p style="margin: 0 0 15px; color: #64748b; font-size: 14px;">
    Services Requested:
  </p>
  <ul style="margin: 0; padding-left: 20px; color: #475569;">
    ${data.services.map(service => `<li style="margin-bottom: 5px;">${service}</li>`).join('')}
  </ul>
</div>

<h3 style="margin: 25px 0 15px; color: #1e293b; font-size: 18px;">
  Next Steps
</h3>

<ol style="margin: 0 0 20px; padding-left: 20px; color: #475569; font-size: 15px; line-height: 1.8;">
  <li>Our audit specialists will review your requirements</li>
  <li>We'll prepare a detailed proposal within 24 hours</li>
  <li>You'll receive a customized quote tailored to your needs</li>
  <li>We'll schedule a consultation to discuss the proposal</li>
</ol>

<div style="text-align: center; margin: 30px 0;">
  <a href="${SITE_CONFIG.url}/calculator" style="display: inline-block; background-color: #1e40af; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">
    Calculate Your Audit Fees
  </a>
</div>

<p style="margin: 25px 0 0; color: #475569; font-size: 15px; line-height: 1.6;">
  Looking forward to serving you,<br>
  <strong>Farahat & Co Audit Team</strong>
</p>
  `

  return {
    subject: 'Quote Request Confirmation - Farahat & Co',
    html: emailWrapper(content, 'Quote Request Confirmation'),
  }
}

// Newsletter Confirmation (Double Opt-In)
export function newsletterConfirmation(data: {
  email: string
  firstName?: string
  confirmationToken: string
}): { subject: string; html: string } {
  const content = `
<h2 style="margin: 0 0 20px; color: #1e293b; font-size: 24px;">
  Confirm Your Newsletter Subscription
</h2>

<p style="margin: 0 0 15px; color: #475569; font-size: 16px; line-height: 1.6;">
  ${data.firstName ? `Hi ${data.firstName}!` : 'Hello!'}
</p>

<p style="margin: 0 0 15px; color: #475569; font-size: 16px; line-height: 1.6;">
  Thank you for subscribing to the Farahat & Co newsletter! We're excited to share valuable insights about audit, compliance, and financial best practices with you.
</p>

<p style="margin: 0 0 20px; color: #475569; font-size: 15px; line-height: 1.6;">
  To complete your subscription, please confirm your email address by clicking the button below:
</p>

<div style="text-align: center; margin: 30px 0;">
  <a href="${SITE_CONFIG.url}/newsletter/confirm?token=${data.confirmationToken}" style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
    Confirm Subscription
  </a>
</div>

<p style="margin: 20px 0 0; color: #64748b; font-size: 14px; line-height: 1.6;">
  If you didn't subscribe to this newsletter, you can safely ignore this email.
</p>

<div style="background-color: #f1f5f9; padding: 20px; border-radius: 6px; margin: 25px 0;">
  <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6;">
    <strong>What to expect:</strong><br>
    • Monthly audit industry insights<br>
    • UAE compliance updates<br>
    • Tax and regulatory news<br>
    • Exclusive guides and resources
  </p>
</div>
  `

  return {
    subject: 'Confirm Your Subscription - Farahat & Co Newsletter',
    html: emailWrapper(content, 'Newsletter Confirmation'),
  }
}

// Internal Notification for Sales Team
export function quoteNotification(data: {
  submissionId: string
  companyName: string
  contactName: string
  email: string
  phone: string
  services: string[]
  urgency: string
  priority: string
}): { subject: string; html: string } {
  const content = `
<h2 style="margin: 0 0 20px; color: #1e293b; font-size: 22px;">
  New Quote Request [${data.priority.toUpperCase()}]
</h2>

<div style="background-color: ${data.priority === 'high' ? '#fee2e2' : '#f1f5f9'}; border-left: 4px solid ${data.priority === 'high' ? '#dc2626' : '#1e40af'}; padding: 15px; margin: 20px 0;">
  <p style="margin: 0; color: ${data.priority === 'high' ? '#991b1b' : '#1e3a8a'}; font-size: 14px; font-weight: 600;">
    ${data.priority === 'high' ? '⚠️ HIGH PRIORITY - Respond within 2 hours' : '📋 Standard Priority'}
  </p>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background-color: #f8fafc;">
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Reference ID:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1e293b;">${data.submissionId}</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Company:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1e293b;">${data.companyName}</td>
  </tr>
  <tr style="background-color: #f8fafc;">
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Contact:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1e293b;">${data.contactName}</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0;">
      <a href="mailto:${data.email}" style="color: #1e40af; text-decoration: none;">${data.email}</a>
    </td>
  </tr>
  <tr style="background-color: #f8fafc;">
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Phone:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0;">
      <a href="tel:${data.phone}" style="color: #1e40af; text-decoration: none;">${data.phone}</a>
    </td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Urgency:</td>
    <td style="padding: 12px; border: 1px solid #e2e8f0; color: #1e293b;">${data.urgency}</td>
  </tr>
</table>

<h3 style="margin: 25px 0 10px; color: #1e293b; font-size: 18px;">Services Requested:</h3>
<ul style="margin: 0; padding-left: 20px; color: #475569;">
  ${data.services.map(service => `<li style="margin-bottom: 5px;">${service}</li>`).join('')}
</ul>

<div style="text-align: center; margin: 30px 0;">
  <a href="${SITE_CONFIG.url}/admin/quotes/${data.submissionId}" style="display: inline-block; background-color: #1e40af; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">
    View Full Details
  </a>
</div>
  `

  return {
    subject: `New Quote Request [${data.priority.toUpperCase()}]: ${data.companyName}`,
    html: emailWrapper(content, 'New Quote Request'),
  }
}
