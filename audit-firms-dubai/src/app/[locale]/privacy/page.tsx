/**
 * Privacy Policy Page
 * Comprehensive privacy policy for Audit Firms Dubai (Farahat & Co subsidiary)
 * GDPR compliant and UAE law compliant
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Audit Firms Dubai | Farahat & Co',
  description:
    'Privacy Policy for Audit Firms Dubai. Learn how we collect, use, protect, and manage your personal information in accordance with UAE data protection laws and GDPR standards.',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Audit Firms Dubai',
    description: 'Our commitment to protecting your personal data and privacy.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'November 16, 2025';

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-primary-600">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
              <Shield className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-4 text-xl text-neutral-700">
              Audit Firms Dubai - A Division of Farahat Office & Co.
            </p>
            <p className="text-lg text-neutral-600">
              Your privacy is important to us. This policy explains how we collect, use, protect,
              and manage your personal information.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Last Updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold text-neutral-700">Quick Navigation:</p>
            <div className="flex flex-wrap gap-3">
              <a href="#data-collection" className="text-sm text-primary-600 hover:underline">
                Data Collection
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#data-usage" className="text-sm text-primary-600 hover:underline">
                Data Usage
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#data-protection" className="text-sm text-primary-600 hover:underline">
                Data Protection
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#cookies" className="text-sm text-primary-600 hover:underline">
                Cookies
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#your-rights" className="text-sm text-primary-600 hover:underline">
                Your Rights
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#contact" className="text-sm text-primary-600 hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl prose-headings:font-serif prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            {/* Introduction */}
            <div className="not-prose mb-12 rounded-lg border border-primary-200 bg-primary-50 p-6">
              <h2 className="mb-3 text-2xl font-bold text-primary-900">Our Commitment</h2>
              <p className="text-neutral-700">
                <strong>Audit Firms Dubai</strong>, operating as a division of{' '}
                <strong>Farahat Office & Co.</strong> (established 1985), is committed to
                protecting your privacy and ensuring the security of your personal information. We
                adhere to the highest standards of data protection in accordance with UAE Federal
                Law, GDPR principles, and international best practices for professional services
                firms.
              </p>
            </div>

            {/* 1. Data Collection */}
            <div id="data-collection" className="scroll-mt-20">
              <h2>1. Information We Collect</h2>

              <h3>1.1 Personal Information</h3>
              <p>When you engage with our services, we may collect the following personal data:</p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, business
                  address, job title, company name
                </li>
                <li>
                  <strong>Business Information:</strong> Company registration details, trade
                  license number, tax registration number, financial statements, accounting records
                </li>
                <li>
                  <strong>Identification Documents:</strong> Emirates ID, passport copies, visa
                  information, authorized signatory details (when required for regulatory
                  compliance)
                </li>
                <li>
                  <strong>Financial Data:</strong> Bank account details (for payment processing
                  only), transaction records related to our services
                </li>
                <li>
                  <strong>Communication Records:</strong> Emails, phone call recordings (with
                  consent), chat messages, consultation notes, service requests
                </li>
              </ul>

              <h3>1.2 Automatically Collected Information</h3>
              <p>
                When you visit our website <strong>{SITE_CONFIG.url}</strong>, we automatically
                collect:
              </p>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, referring URLs)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies (see Cookie Policy)</li>
              </ul>

              <h3>1.3 Information from Third Parties</h3>
              <p>We may receive information about you from:</p>
              <ul>
                <li>
                  UAE government entities (Ministry of Economy, Federal Tax Authority, Dubai
                  Economy & Tourism)
                </li>
                <li>
                  Banks and financial institutions (for verification purposes with your consent)
                </li>
                <li>
                  Professional referral partners (lawyers, business consultants) who recommend our
                  services
                </li>
                <li>Public registries and databases (for regulatory compliance verification)</li>
              </ul>
            </div>

            {/* 2. Data Usage */}
            <div id="data-usage" className="scroll-mt-20">
              <h2>2. How We Use Your Information</h2>

              <h3>2.1 Primary Service Delivery</h3>
              <p>
                Farahat Office & Co. uses your personal information strictly for legitimate
                business purposes:
              </p>
              <ul>
                <li>
                  <strong>Audit Services:</strong> Conducting external audits, internal audits,
                  forensic audits, RERA audits, VAT audits, and due diligence services
                </li>
                <li>
                  <strong>Regulatory Compliance:</strong> Preparing and filing audit reports with
                  UAE Ministry of Economy, Federal Tax Authority, RERA, and other regulatory bodies
                </li>
                <li>
                  <strong>Professional Consultation:</strong> Providing tax advisory, financial
                  consulting, compliance guidance, and business advisory services
                </li>
                <li>
                  <strong>Client Communication:</strong> Responding to inquiries, providing service
                  updates, sharing audit findings, discussing recommendations
                </li>
                <li>
                  <strong>Billing and Payments:</strong> Processing invoices, collecting payments,
                  maintaining financial records
                </li>
              </ul>

              <h3>2.2 Business Operations</h3>
              <p>We use your data to:</p>
              <ul>
                <li>Maintain client relationship management (CRM) systems</li>
                <li>Improve service quality through feedback analysis</li>
                <li>Conduct internal quality control reviews</li>
                <li>Train our audit professionals (using anonymized data)</li>
                <li>Protect against fraud, unauthorized access, and security threats</li>
              </ul>

              <h3>2.3 Marketing Communications (With Consent)</h3>
              <p>With your explicit consent, we may send you:</p>
              <ul>
                <li>Newsletters about UAE tax and audit regulatory updates</li>
                <li>Service announcements and special offers</li>
                <li>Industry insights and professional guidance</li>
                <li>Invitations to webinars, seminars, and educational events</li>
              </ul>
              <p>
                <strong>You can opt-out</strong> at any time by clicking the "Unsubscribe" link in
                any marketing email or contacting us directly.
              </p>

              <h3>2.4 Legal and Regulatory Obligations</h3>
              <p>We process your data when required by law:</p>
              <ul>
                <li>Compliance with UAE Federal Law and tax regulations</li>
                <li>
                  Responding to court orders, subpoenas, and government requests
                </li>
                <li>Fulfilling anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
                <li>Protecting legal rights and preventing fraud or misconduct</li>
              </ul>
            </div>

            {/* 3. Data Protection */}
            <div id="data-protection" className="scroll-mt-20">
              <h2>3. How We Protect Your Information</h2>

              <h3>3.1 Security Measures</h3>
              <p>
                Farahat Office & Co. implements industry-leading security protocols to safeguard
                your data:
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> All data transmission uses SSL/TLS encryption (256-bit)
                </li>
                <li>
                  <strong>Secure Storage:</strong> Client data stored on encrypted servers with
                  restricted access
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-based permissions, multi-factor
                  authentication (MFA), and audit trails
                </li>
                <li>
                  <strong>Physical Security:</strong> Secure office premises with controlled access
                  and 24/7 surveillance
                </li>
                <li>
                  <strong>Regular Audits:</strong> Internal security audits and penetration testing
                </li>
                <li>
                  <strong>Employee Training:</strong> Mandatory confidentiality agreements and data
                  protection training
                </li>
              </ul>

              <h3>3.2 Data Retention</h3>
              <p>We retain your personal information for:</p>
              <ul>
                <li>
                  <strong>Active Clients:</strong> Duration of engagement plus 7 years (as required
                  by UAE audit regulations)
                </li>
                <li>
                  <strong>Audit Records:</strong> Minimum 10 years from report date (regulatory
                  requirement)
                </li>
                <li>
                  <strong>Financial Records:</strong> 7 years from last transaction (tax law
                  requirement)
                </li>
                <li>
                  <strong>Marketing Data:</strong> Until you withdraw consent or request deletion
                </li>
              </ul>
              <p>
                After retention periods expire, we securely delete or anonymize your data unless
                legal obligations require longer retention.
              </p>

              <h3>3.3 Data Sharing and Disclosure</h3>
              <p>We share your information only in these limited circumstances:</p>
              <ul>
                <li>
                  <strong>With Your Consent:</strong> When you authorize us to share data with
                  third parties
                </li>
                <li>
                  <strong>Regulatory Bodies:</strong> UAE Ministry of Economy, Federal Tax
                  Authority, Dubai Economy, RERA, and other authorities as legally required
                </li>
                <li>
                  <strong>Service Providers:</strong> Cloud hosting, payment processors, IT
                  support (all bound by strict confidentiality agreements)
                </li>
                <li>
                  <strong>Professional Partners:</strong> Legal counsel, tax advisors, specialist
                  consultants (only when necessary for service delivery)
                </li>
                <li>
                  <strong>Parent Company:</strong> FAR Consulting Middle East (for integrated
                  business services with your consent)
                </li>
              </ul>
              <p>
                <strong>We never sell</strong> your personal data to third parties for marketing
                purposes.
              </p>
            </div>

            {/* 4. Online Payments */}
            <div id="payments" className="scroll-mt-20">
              <h2>4. Online Payment Security</h2>

              <p>
                Farahat Office & Co. processes online payments through <strong>PayTabs</strong>, a
                Payment Card Industry Data Security Standard (PCI DSS) compliant payment gateway.
              </p>

              <h3>4.1 Payment Protection</h3>
              <ul>
                <li>
                  All credit/debit card transactions are fully encrypted and processed securely
                </li>
                <li>
                  Your complete credit card number is never visible to Farahat Office & Co. staff
                </li>
                <li>PayTabs uses 3D Secure technology for enhanced fraud protection</li>
                <li>
                  Transaction data is encrypted and stored within PayTabs' secure banking
                  infrastructure
                </li>
                <li>
                  All funds are transferred directly from your card to our UAE bank account (PayTabs
                  never holds funds)
                </li>
              </ul>

              <h3>4.2 Accepted Payment Methods</h3>
              <p>We accept Visa and MasterCard credit/debit cards, and bank wire transfers (AED and USD).</p>

              <h3>4.3 Third-Party Payment Privacy</h3>
              <p>
                PayTabs has its own privacy policy governing payment data. Review their policy at:{' '}
                <a
                  href="https://www.paytabs.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.paytabs.com/policy
                </a>
              </p>
            </div>

            {/* 5. Cookies */}
            <div id="cookies" className="scroll-mt-20">
              <h2>5. Cookies and Tracking Technologies</h2>

              <p>
                Our website uses cookies and similar technologies to enhance user experience and
                analyze website performance.
              </p>

              <h3>5.1 Types of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for website functionality (login,
                  security, form submissions)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Google Analytics to understand visitor
                  behavior and improve our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences (language
                  selection, location)
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Measure advertising effectiveness (only with
                  your consent)
                </li>
              </ul>

              <h3>5.2 Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. Note that disabling cookies
                may affect website functionality.
              </p>
              <p>
                For detailed information, see our{' '}
                <Link href="/cookies" className="text-primary-600 hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            {/* 6. Your Rights */}
            <div id="your-rights" className="scroll-mt-20">
              <h2>6. Your Privacy Rights</h2>

              <p>Under UAE data protection laws and GDPR principles, you have the following rights:</p>

              <h3>6.1 Right to Access</h3>
              <p>
                You can request a copy of all personal data we hold about you, including how we
                obtained it and how we use it.
              </p>

              <h3>6.2 Right to Rectification</h3>
              <p>
                If your personal information is inaccurate or incomplete, you have the right to
                request corrections.
              </p>

              <h3>6.3 Right to Erasure ("Right to be Forgotten")</h3>
              <p>
                You may request deletion of your personal data, subject to legal and regulatory
                retention requirements for audit records.
              </p>

              <h3>6.4 Right to Restrict Processing</h3>
              <p>
                You can request that we limit how we use your personal data in certain circumstances.
              </p>

              <h3>6.5 Right to Data Portability</h3>
              <p>
                You can request your data in a structured, machine-readable format for transfer to
                another service provider.
              </p>

              <h3>6.6 Right to Object</h3>
              <p>
                You can object to processing of your data for marketing purposes or when processed
                based on legitimate interests.
              </p>

              <h3>6.7 Right to Withdraw Consent</h3>
              <p>
                If we process your data based on consent, you can withdraw that consent at any time.
              </p>

              <h3>How to Exercise Your Rights</h3>
              <p>
                To exercise any of these rights, contact our Data Protection Officer:
              </p>
              <div className="not-prose my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <p className="mb-2 font-semibold text-neutral-900">Data Protection Officer</p>
                <p className="mb-1 text-neutral-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@farahatco.com" className="text-primary-600">
                    privacy@farahatco.com
                  </a>
                </p>
                <p className="mb-1 text-neutral-700">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+97142500251" className="text-primary-600">
                    +971 4 250 0251
                  </a>
                </p>
                <p className="text-neutral-700">
                  <strong>Address:</strong> Rigga Street, IBIS Hotel Building, Offices Entrance,
                  5th Floor, Dubai, UAE
                </p>
              </div>
              <p>We will respond to your request within 30 days.</p>
            </div>

            {/* 7. International Transfers */}
            <div id="international" className="scroll-mt-20">
              <h2>7. International Data Transfers</h2>

              <p>
                While Farahat Office & Co. primarily operates within the UAE, we may transfer data
                internationally in these situations:
              </p>
              <ul>
                <li>Cloud service providers with servers outside the UAE (with appropriate safeguards)</li>
                <li>Parent company operations across Middle East and Asia</li>
                <li>
                  Cross-border audit engagements for multinational clients (with your authorization)
                </li>
              </ul>
              <p>
                All international transfers comply with UAE data protection standards and include
                appropriate security measures such as:
              </p>
              <ul>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Data Processing Agreements (DPAs)</li>
                <li>Adequacy decisions for countries with equivalent data protection laws</li>
              </ul>
            </div>

            {/* 8. Children's Privacy */}
            <div id="children" className="scroll-mt-20">
              <h2>8. Children's Privacy</h2>

              <p>
                Our services are designed for businesses and professionals. We do not knowingly
                collect personal information from individuals under 18 years of age. If you believe
                we have inadvertently collected data from a minor, please contact us immediately.
              </p>
            </div>

            {/* 9. Changes to Privacy Policy */}
            <div id="changes" className="scroll-mt-20">
              <h2>9. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices,
                technology, legal requirements, or business operations.
              </p>
              <ul>
                <li>
                  <strong>Notification:</strong> Material changes will be announced via email to
                  registered clients and posted on our website
                </li>
                <li>
                  <strong>Effective Date:</strong> Changes become effective 30 days after posting
                  unless otherwise stated
                </li>
                <li>
                  <strong>Review Regularly:</strong> We encourage you to review this policy
                  periodically
                </li>
              </ul>
              <p>
                Last Updated: <strong>{lastUpdated}</strong>
              </p>
            </div>

            {/* 10. Contact Information */}
            <div id="contact" className="scroll-mt-20">
              <h2>10. Contact Us</h2>

              <p>
                If you have questions, concerns, or complaints about this Privacy Policy or our data
                practices, please contact us:
              </p>

              <div className="not-prose my-6 space-y-4">
                <div className="rounded-lg border border-primary-200 bg-primary-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary-900">
                    Farahat Office & Co. (Audit Firms Dubai)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <div>
                        <p className="font-semibold text-neutral-900">Dubai Office</p>
                        <p className="text-neutral-700">
                          Rigga Street, IBIS Hotel Building
                          <br />
                          Offices Entrance, 5th Floor
                          <br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 text-primary-600" />
                      <div>
                        <p className="font-semibold text-neutral-900">Phone</p>
                        <a href="tel:+97142500251" className="text-primary-600 hover:underline">
                          +971 4 250 0251
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0 text-primary-600" />
                      <div>
                        <p className="font-semibold text-neutral-900">Email</p>
                        <a
                          href="mailto:privacy@farahatco.com"
                          className="text-primary-600 hover:underline"
                        >
                          privacy@farahatco.com
                        </a>
                        <br />
                        <a
                          href="mailto:info@farahatco.com"
                          className="text-primary-600 hover:underline"
                        >
                          info@farahatco.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Governing Law */}
            <div id="governing-law" className="scroll-mt-20">
              <h2>11. Governing Law and Jurisdiction</h2>

              <p>
                This Privacy Policy is governed by and construed in accordance with the{' '}
                <strong>laws of the United Arab Emirates</strong>. Any disputes arising from this
                policy or our data practices shall be subject to the exclusive jurisdiction of the{' '}
                <strong>Dubai Courts</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary-900">
              Related Legal Documents
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/terms"
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <FileText className="h-8 w-8 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    Terms of Service
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Review our service terms, conditions, and engagement agreements
                  </p>
                </div>
              </Link>
              <Link
                href="/cookies"
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <Eye className="h-8 w-8 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    Cookie Policy
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Learn about cookies and tracking technologies we use
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">Questions About Your Privacy?</h2>
            <p className="mb-8 text-xl text-primary-100">
              Our team is here to address any concerns about how we protect and manage your
              personal information.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:privacy@farahatco.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Privacy Team
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+97142500251">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 4 250 0251
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
