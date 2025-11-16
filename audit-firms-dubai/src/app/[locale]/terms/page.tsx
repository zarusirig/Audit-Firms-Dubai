/**
 * Terms of Service Page
 * Comprehensive terms and conditions for Elite Audit Dubai (Farahat & Co subsidiary)
 * Legally binding agreement for service engagement
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Scale, AlertCircle, CheckCircle, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | Elite Audit Dubai | Farahat & Co',
  description:
    'Terms of Service for Elite Audit Dubai professional audit services. Review our service terms, conditions, engagement agreements, and legal obligations.',
  robots: 'index, follow',
  openGraph: {
    title: 'Terms of Service | Elite Audit Dubai',
    description: 'Our service terms, conditions, and professional engagement agreements.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
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
            <span className="font-medium text-primary-600">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
              <Scale className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl">
              Terms of Service
            </h1>
            <p className="mb-4 text-xl text-neutral-700">
              Elite Audit Dubai - A Division of Farahat Office & Co.
            </p>
            <p className="text-lg text-neutral-600">
              Please read these terms carefully before using our professional audit services.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Last Updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="border-b border-neutral-200 bg-amber-50 py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl items-start gap-4">
            <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
            <div>
              <p className="mb-2 font-semibold text-amber-900">
                By using Elite Audit Dubai services, you agree to these Terms
              </p>
              <p className="text-sm text-amber-800">
                These Terms of Service constitute a legally binding agreement between you and
                Farahat Office & Co. (operating as Elite Audit Dubai). If you do not agree to these
                terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold text-neutral-700">Quick Navigation:</p>
            <div className="flex flex-wrap gap-3">
              <a href="#acceptance" className="text-sm text-primary-600 hover:underline">
                Acceptance
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#services" className="text-sm text-primary-600 hover:underline">
                Services
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#payments" className="text-sm text-primary-600 hover:underline">
                Payments & Refunds
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#client-obligations" className="text-sm text-primary-600 hover:underline">
                Client Obligations
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#liability" className="text-sm text-primary-600 hover:underline">
                Liability
              </a>
              <span className="text-neutral-300">|</span>
              <a href="#termination" className="text-sm text-primary-600 hover:underline">
                Termination
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
              <h2 className="mb-3 text-2xl font-bold text-primary-900">
                Welcome to Elite Audit Dubai
              </h2>
              <p className="text-neutral-700">
                Thank you for choosing <strong>Elite Audit Dubai</strong>, a premier audit division
                of <strong>Farahat Office & Co.</strong> (established 1985). These Terms of Service
                ("Terms") govern your use of our professional audit, assurance, tax, and advisory
                services. By engaging our services, signing an engagement letter, or using our
                website <strong>{SITE_CONFIG.url}</strong>, you agree to be bound by these Terms.
              </p>
            </div>

            {/* 1. Acceptance */}
            <div id="acceptance" className="scroll-mt-20">
              <h2>1. Acceptance of Terms</h2>

              <h3>1.1 Agreement to Terms</h3>
              <p>
                By using our services, you confirm that you:
              </p>
              <ul>
                <li>Are at least 18 years of age and legally competent to enter into contracts</li>
                <li>
                  Have the authority to bind your organization (if engaging on behalf of a business
                  entity)
                </li>
                <li>
                  Have read, understood, and agree to comply with these Terms and our Privacy Policy
                </li>
                <li>
                  Acknowledge that these Terms constitute a legally binding agreement under UAE law
                </li>
              </ul>

              <h3>1.2 Organizational Representation</h3>
              <p>
                If you are using our services as an employee, director, agent, or representative of
                an organization, you represent and warrant that you have the authority to bind that
                organization to these Terms. References to "you" or "Client" include both individual
                users and the organizations they represent.
              </p>

              <h3>1.3 Updates to Terms</h3>
              <p>
                Farahat Office & Co. reserves the right to modify these Terms at any time. Material
                changes will be communicated via email to active clients. Continued use of our
                services after modifications constitutes acceptance of updated Terms.
              </p>
            </div>

            {/* 2. Services Provided */}
            <div id="services" className="scroll-mt-20">
              <h2>2. Professional Services</h2>

              <h3>2.1 Scope of Services</h3>
              <p>
                Elite Audit Dubai provides the following professional services through qualified,
                licensed auditors and consultants:
              </p>
              <ul>
                <li>
                  <strong>External Audit Services:</strong> Statutory audits, financial statement
                  audits, IFRS compliance audits, Ministry of Economy approved audit reports
                </li>
                <li>
                  <strong>Internal Audit Services:</strong> Risk assessment, internal control
                  evaluation, compliance reviews, fraud prevention programs
                </li>
                <li>
                  <strong>Forensic Audit Services:</strong> Fraud investigations, litigation
                  support, asset tracing, expert witness testimony
                </li>
                <li>
                  <strong>Due Diligence Services:</strong> Financial due diligence, commercial due
                  diligence, M&A transaction support, investment analysis
                </li>
                <li>
                  <strong>RERA Audit Services:</strong> Real estate regulatory compliance audits,
                  escrow account audits, Dubai Land Department filings
                </li>
                <li>
                  <strong>VAT Audit Services:</strong> VAT compliance review, FTA audit support,
                  voluntary disclosure assistance, VAT health checks
                </li>
                <li>
                  <strong>Advisory Services:</strong> Tax planning, corporate governance, financial
                  consulting, regulatory compliance advisory
                </li>
              </ul>

              <h3>2.2 Service Engagement Process</h3>
              <p>All professional services are provided under the following framework:</p>
              <ol>
                <li>
                  <strong>Initial Consultation:</strong> Free preliminary discussion to understand
                  your needs
                </li>
                <li>
                  <strong>Proposal & Quote:</strong> Written proposal detailing scope, timeline,
                  deliverables, and fees
                </li>
                <li>
                  <strong>Engagement Letter:</strong> Formal agreement signed by both parties
                  defining terms, responsibilities, and limitations
                </li>
                <li>
                  <strong>Service Delivery:</strong> Professional execution according to agreed
                  scope and timeline
                </li>
                <li>
                  <strong>Final Deliverables:</strong> Audit reports, management letters,
                  certifications, or advisory recommendations
                </li>
              </ol>

              <h3>2.3 Not Legal Advice</h3>
              <p>
                The information and services provided by Elite Audit Dubai relate to{' '}
                <strong>accounting, auditing, and financial advisory</strong>. While we may address
                regulatory compliance and tax matters, <strong>we do not provide legal advice</strong>.
                For legal matters, we recommend consulting qualified legal counsel licensed in the
                UAE.
              </p>

              <h3>2.4 Service Limitations</h3>
              <p>
                Our services do <strong>not</strong> include:
              </p>
              <ul>
                <li>Legal representation or advocacy before courts or government agencies</li>
                <li>Preparation of legal contracts (except audit engagement letters)</li>
                <li>Immigration, visa, or labor law advisory</li>
                <li>Real estate brokerage or property transactions</li>
                <li>
                  Services related to illegal activities, money laundering, or fraud concealment
                </li>
              </ul>
            </div>

            {/* 3. Payments and Billing */}
            <div id="payments" className="scroll-mt-20">
              <h2>3. Payments, Billing, and Refunds</h2>

              <h3>3.1 Fee Structure</h3>
              <p>Audit and advisory fees are determined based on:</p>
              <ul>
                <li>
                  <strong>Company Size:</strong> Annual revenue, total assets, number of employees
                </li>
                <li>
                  <strong>Service Type:</strong> External audit, internal audit, forensic,
                  due diligence, VAT, RERA
                </li>
                <li>
                  <strong>Complexity Factors:</strong> Multi-currency transactions, international
                  operations, group consolidations, inventory-heavy businesses, first-time audits
                </li>
                <li>
                  <strong>Urgency:</strong> Standard delivery (7-10 days), express (3-5 days),
                  emergency (72 hours)
                </li>
              </ul>
              <p>
                All fees are quoted in <strong>UAE Dirhams (AED)</strong> or{' '}
                <strong>US Dollars (USD)</strong> and are exclusive of VAT where applicable.
              </p>

              <h3>3.2 Payment Terms</h3>
              <p>Standard payment terms:</p>
              <ul>
                <li>
                  <strong>New Clients:</strong> 50% advance payment upon engagement letter signing,
                  50% upon completion
                </li>
                <li>
                  <strong>Returning Clients:</strong> Net 30 days payment terms (subject to credit
                  approval)
                </li>
                <li>
                  <strong>Retainer Services:</strong> Monthly advance payment for ongoing internal
                  audit or advisory services
                </li>
              </ul>
              <p>
                Late payments incur a <strong>2% monthly interest charge</strong> after the due date.
              </p>

              <h3>3.3 Accepted Payment Methods</h3>
              <p>We accept:</p>
              <ul>
                <li>Bank wire transfer (AED or USD) to our UAE bank account</li>
                <li>
                  Credit/Debit Cards (Visa, MasterCard) via PayTabs secure payment gateway
                </li>
                <li>Checks payable to "Farahat Office & Co." (UAE banks only)</li>
              </ul>

              <h3>3.4 Online Payment Security</h3>
              <p>
                Online card payments are processed through <strong>PayTabs</strong>, a PCI DSS
                compliant payment gateway. All transactions are encrypted with 3D Secure
                authentication. We never store complete credit card numbers. See our{' '}
                <Link href="/privacy">Privacy Policy</Link> for details.
              </p>

              <h3>3.5 Third-Party Credit Card Authorization</h3>
              <p>
                If a credit card used for payment is not in the client's name, the following
                documents are required:
              </p>
              <ul>
                <li>
                  Photocopy of both sides of the credit card (signed by cardholder authorizing use)
                </li>
                <li>
                  Authorization letter stating client name, payment amount, and service description
                </li>
                <li>Emirates ID or passport copies of both the client and cardholder</li>
              </ul>
              <p>
                Failure to provide these documents may result in engagement suspension or
                cancellation.
              </p>

              <h3>3.6 Refund Policy</h3>
              <p>
                <strong>General Refund Terms:</strong>
              </p>
              <ul>
                <li>
                  <strong>Before Work Begins:</strong> Full refund available within 7 business days
                  of payment if no work has commenced
                </li>
                <li>
                  <strong>After Work Begins:</strong> Prorated refund based on work completed
                  (deducting hours worked at standard hourly rates)
                </li>
                <li>
                  <strong>Completed Services:</strong> No refunds for completed audit reports or
                  delivered advisory services
                </li>
                <li>
                  <strong>Client-Caused Delays:</strong> No refunds if the client fails to provide
                  required documentation within agreed timelines
                </li>
              </ul>

              <p>
                <strong>Non-Refundable Fees:</strong>
              </p>
              <ul>
                <li>
                  Government filing fees (Ministry of Economy, RERA, FTA, or other regulatory
                  bodies)
                </li>
                <li>
                  Third-party costs (registered agent services, notary fees, translation services)
                </li>
                <li>Express or emergency service surcharges</li>
              </ul>

              <p>
                <strong>Billing Errors:</strong> If you believe there has been a billing error,
                contact us at{' '}
                <a href="mailto:billing@farahatco.com">billing@farahatco.com</a> or call{' '}
                <a href="tel:+97142500251">+971 4 250 0251</a> within 30 days of invoice date. We
                will investigate and resolve discrepancies promptly.
              </p>

              <h3>3.7 Currency and Exchange Rates</h3>
              <p>
                Unless otherwise agreed, all fees are quoted and billed in UAE Dirhams (AED). If
                payment is made in a different currency, the exchange rate on the date of payment
                applies. Exchange rate fluctuations are the client's responsibility.
              </p>
            </div>

            {/* 4. Client Obligations */}
            <div id="client-obligations" className="scroll-mt-20">
              <h2>4. Client Responsibilities and Obligations</h2>

              <h3>4.1 Document Provision</h3>
              <p>Clients are required to provide:</p>
              <ul>
                <li>
                  Complete and accurate financial records (trial balance, general ledger, bank
                  statements, invoices, receipts)
                </li>
                <li>
                  Legal documents (trade license, memorandum of association, board resolutions,
                  contracts)
                </li>
                <li>Tax records (VAT returns, corporate tax filings, TRN certificates)</li>
                <li>Prior year audit reports and management letters (if applicable)</li>
                <li>Access to accounting systems and authorized personnel for queries</li>
              </ul>
              <p>
                <strong>Timeliness:</strong> Failure to provide required documents within agreed
                timelines may result in engagement delays or additional fees.
              </p>

              <h3>4.2 Accuracy of Information</h3>
              <p>
                You represent and warrant that all information provided to Elite Audit Dubai is:
              </p>
              <ul>
                <li>Accurate, complete, and not misleading</li>
                <li>Provided in good faith without intent to conceal material facts</li>
                <li>
                  Authorized for disclosure (you have rights to share the information with us)
                </li>
              </ul>
              <p>
                Audit opinions are based on the information you provide. We are not responsible for
                errors in financial statements resulting from incomplete or inaccurate client data.
              </p>

              <h3>4.3 Regulatory Compliance</h3>
              <p>
                Clients are responsible for:
              </p>
              <ul>
                <li>Maintaining proper books of accounts as required by UAE Commercial Law</li>
                <li>Filing tax returns and regulatory reports by statutory deadlines</li>
                <li>
                  Implementing audit recommendations to address internal control weaknesses
                </li>
                <li>Notifying us of any material changes to business operations or ownership</li>
              </ul>

              <h3>4.4 Prohibited Uses</h3>
              <p>
                You agree <strong>not</strong> to use our services for:
              </p>
              <ul>
                <li>Illegal activities, money laundering, terrorist financing, or fraud</li>
                <li>Tax evasion or concealment of assets</li>
                <li>
                  Misrepresenting our audit opinions or using reports for unauthorized purposes
                </li>
                <li>Violating UAE laws, international sanctions, or anti-corruption regulations</li>
              </ul>
              <p>
                We reserve the right to terminate services immediately if we suspect illegal or
                unethical conduct.
              </p>
            </div>

            {/* 5. Professional Standards */}
            <div id="professional-standards" className="scroll-mt-20">
              <h2>5. Professional Standards and Independence</h2>

              <h3>5.1 Audit Standards</h3>
              <p>
                All audit services are performed in accordance with:
              </p>
              <ul>
                <li>
                  <strong>International Standards on Auditing (ISA)</strong>
                </li>
                <li>
                  <strong>
                    International Financial Reporting Standards (IFRS) and IFRS for SMEs
                  </strong>
                </li>
                <li>
                  <strong>UAE Federal Law and Ministry of Economy regulations</strong>
                </li>
                <li>
                  <strong>Professional ethics codes</strong> of ICAI, ACCA, AICPA, and other
                  certifying bodies
                </li>
              </ul>

              <h3>5.2 Auditor Independence</h3>
              <p>
                We maintain strict independence in accordance with professional standards. We will
                not provide audit services if:
              </p>
              <ul>
                <li>
                  We have a financial interest in your business or hold management positions
                </li>
                <li>
                  There are close personal relationships that impair objectivity
                </li>
                <li>We have provided bookkeeping or financial statement preparation services for the same period being audited</li>
                <li>
                  Conflicts of interest exist with other clients (e.g., direct competitors in M&A
                  transactions)
                </li>
              </ul>
              <p>
                Clients must disclose any potential conflicts. We will assess and determine if
                safeguards can maintain independence.
              </p>

              <h3>5.3 Confidentiality</h3>
              <p>
                All client information is strictly confidential. We do not disclose your data to
                third parties except:
              </p>
              <ul>
                <li>
                  With your explicit written consent
                </li>
                <li>
                  When legally required (court orders, regulatory inquiries, government audits)
                </li>
                <li>
                  To regulatory authorities as mandated by audit regulations (Ministry of Economy,
                  FTA, RERA)
                </li>
                <li>
                  For professional quality control reviews by oversight bodies
                </li>
              </ul>
              <p>
                See our <Link href="/privacy">Privacy Policy</Link> for detailed information handling
                practices.
              </p>
            </div>

            {/* 6. Intellectual Property */}
            <div id="intellectual-property" className="scroll-mt-20">
              <h2>6. Intellectual Property and Document Ownership</h2>

              <h3>6.1 Client Documents</h3>
              <p>
                All documents you provide to us (financial records, contracts, tax filings) remain
                your property. We retain copies as required by professional standards and UAE
                regulations for a minimum of <strong>10 years</strong>.
              </p>

              <h3>6.2 Audit Reports and Deliverables</h3>
              <p>
                Audit reports, management letters, and advisory recommendations prepared for you are
                <strong> your property</strong> upon full payment of fees. However:
              </p>
              <ul>
                <li>
                  Audit reports may only be used for their intended purpose (e.g., Ministry of
                  Economy filing, bank submission, investor presentation)
                </li>
                <li>
                  Redistribution or publication of reports requires our prior written consent
                </li>
                <li>
                  You may not alter, modify, or misrepresent our opinions or findings
                </li>
              </ul>

              <h3>6.3 Our Intellectual Property</h3>
              <p>
                The following remain the exclusive property of Farahat Office & Co.:
              </p>
              <ul>
                <li>
                  Audit methodologies, templates, checklists, and internal working papers
                </li>
                <li>
                  Website content, software, branding, logos, and proprietary tools (e.g., fee
                  calculator)
                </li>
                <li>Training materials, research publications, and thought leadership content</li>
              </ul>
              <p>
                You may not copy, reproduce, reverse-engineer, or commercially exploit our
                intellectual property without written permission.
              </p>

              <h3>6.4 Use of Name and Testimonials</h3>
              <p>
                We may not use your company name in marketing materials, case studies, or
                testimonials without your express written consent. Client confidentiality extends
                to the fact of engagement itself unless you authorize disclosure.
              </p>
            </div>

            {/* 7. Warranties and Disclaimers */}
            <div id="liability" className="scroll-mt-20">
              <h2>7. Warranties, Disclaimers, and Limitation of Liability</h2>

              <h3>7.1 Professional Care</h3>
              <p>
                We warrant that all services will be performed with reasonable professional care and
                skill by qualified, licensed professionals. Our audit opinions are based on evidence
                obtained through audit procedures and professional judgment.
              </p>

              <h3>7.2 No Absolute Assurance</h3>
              <p>
                <strong>Important:</strong> An audit is designed to provide{' '}
                <strong>reasonable assurance</strong>, not absolute certainty. Due to the test-based
                nature of auditing and inherent limitations, there is an unavoidable risk that
                material misstatements or fraud may not be detected even when the audit is properly
                planned and performed.
              </p>

              <h3>7.3 Disclaimer of Warranties</h3>
              <p>
                To the fullest extent permitted by UAE law, our services are provided "as is" without
                warranties of any kind, express or implied, including but not limited to:
              </p>
              <ul>
                <li>Merchantability or fitness for a particular purpose</li>
                <li>
                  Guarantees of specific business outcomes or regulatory approvals
                </li>
                <li>
                  Detection of all fraud, errors, or illegal acts
                </li>
              </ul>

              <h3>7.4 Limitation of Liability</h3>
              <p>
                <strong>Maximum Liability:</strong> To the fullest extent permitted by law, Farahat
                Office & Co.'s aggregate liability for all claims arising from or related to our
                services shall not exceed the <strong>greater of</strong>:
              </p>
              <ul>
                <li>
                  <strong>AED 5,000 (Five Thousand Dirhams)</strong>, or
                </li>
                <li>
                  <strong>The total fees paid by you</strong> to Elite Audit Dubai for the specific
                  engagement giving rise to the claim
                </li>
              </ul>

              <h3>7.5 Exclusion of Consequential Damages</h3>
              <p>
                In no event shall Farahat Office & Co., its directors, partners, employees, or
                affiliates be liable for:
              </p>
              <ul>
                <li>
                  Indirect, incidental, special, consequential, or punitive damages
                </li>
                <li>
                  Loss of profits, revenue, business opportunities, or goodwill
                </li>
                <li>
                  Business interruption or loss of data
                </li>
              </ul>
              <p>
                This limitation applies regardless of the legal theory (contract, tort, negligence,
                strict liability) and even if we have been advised of the possibility of such
                damages.
              </p>

              <h3>7.6 Third-Party Reliance</h3>
              <p>
                Our audit reports and advisory opinions are prepared solely for your use. Third
                parties (banks, investors, regulators) may rely on our reports only if:
              </p>
              <ul>
                <li>
                  We have explicitly agreed in writing to their reliance
                </li>
                <li>
                  The third party's identity and purpose of reliance were known at engagement
                  commencement
                </li>
              </ul>
              <p>
                We accept no liability to third parties who rely on our work without our prior
                written consent.
              </p>
            </div>

            {/* 8. Indemnification */}
            <div id="indemnification" className="scroll-mt-20">
              <h2>8. Client Indemnification</h2>

              <p>
                You agree to indemnify, defend, and hold harmless Farahat Office & Co., its
                directors, partners, employees, affiliates, and agents from and against any and all
                claims, liabilities, damages, losses, costs, and expenses (including reasonable
                legal fees) arising from:
              </p>
              <ul>
                <li>
                  Your violation of these Terms or applicable laws
                </li>
                <li>
                  Inaccurate, incomplete, or misleading information you provide
                </li>
                <li>
                  Your unauthorized use of our audit reports or intellectual property
                </li>
                <li>
                  Third-party claims related to your business operations or financial statements
                </li>
                <li>
                  Your breach of confidentiality or misuse of our proprietary information
                </li>
              </ul>
            </div>

            {/* 9. Termination */}
            <div id="termination" className="scroll-mt-20">
              <h2>9. Termination of Services</h2>

              <h3>9.1 Termination by Client</h3>
              <p>
                You may terminate our services at any time by providing <strong>written notice</strong>.
                Upon termination:
              </p>
              <ul>
                <li>
                  You remain responsible for payment of all fees for work completed up to the
                  termination date
                </li>
                <li>
                  We will provide a final billing statement within 10 business days
                </li>
                <li>
                  We may retain your documents as required by professional standards (minimum 10
                  years)
                </li>
              </ul>

              <h3>9.2 Termination by Elite Audit Dubai</h3>
              <p>
                We reserve the right to terminate or suspend services immediately without prior
                notice if:
              </p>
              <ul>
                <li>
                  You fail to pay fees when due (after 30 days past due date)
                </li>
                <li>
                  You fail to provide required documents after reasonable requests
                </li>
                <li>
                  You engage in illegal activities, fraud, or unethical conduct
                </li>
                <li>
                  Conflicts of interest arise that cannot be resolved
                </li>
                <li>
                  You breach confidentiality or these Terms
                </li>
                <li>
                  Circumstances arise that impair our professional independence
                </li>
              </ul>

              <h3>9.3 Effect of Termination</h3>
              <p>
                Upon termination:
              </p>
              <ul>
                <li>
                  All outstanding fees become immediately due and payable
                </li>
                <li>
                  We will return original client documents upon request
                </li>
                <li>
                  Confidentiality obligations continue indefinitely
                </li>
                <li>
                  We have no obligation to issue audit reports or opinions for incomplete engagements
                </li>
              </ul>
            </div>

            {/* 10. Dispute Resolution */}
            <div id="dispute-resolution" className="scroll-mt-20">
              <h2>10. Dispute Resolution and Governing Law</h2>

              <h3>10.1 Informal Resolution</h3>
              <p>
                Most client concerns can be resolved quickly. If you have a dispute or complaint:
              </p>
              <ol>
                <li>
                  Contact your engagement partner or manager immediately at{' '}
                  <a href="tel:+97142500251">+971 4 250 0251</a>
                </li>
                <li>
                  If unresolved, escalate to our Managing Partner at{' '}
                  <a href="mailto:mali@farahatco.com">mali@farahatco.com</a>
                </li>
                <li>
                  We will investigate and respond within 10 business days
                </li>
              </ol>

              <h3>10.2 Mediation</h3>
              <p>
                If informal resolution fails, you agree to attempt good-faith mediation before
                pursuing litigation. Mediation shall be conducted in Dubai by a mutually agreed
                mediator, with costs shared equally.
              </p>

              <h3>10.3 Governing Law</h3>
              <p>
                These Terms are governed by and construed in accordance with the{' '}
                <strong>laws of the United Arab Emirates</strong>, without regard to conflict of law
                principles.
              </p>

              <h3>10.4 Jurisdiction</h3>
              <p>
                Any disputes arising from these Terms or our services that cannot be resolved
                through mediation shall be subject to the exclusive jurisdiction of the{' '}
                <strong>Dubai Courts</strong>.
              </p>
            </div>

            {/* 11. Miscellaneous */}
            <div id="miscellaneous" className="scroll-mt-20">
              <h2>11. General Provisions</h2>

              <h3>11.1 Entire Agreement</h3>
              <p>
                These Terms, together with your signed engagement letter and our Privacy Policy,
                constitute the entire agreement between you and Farahat Office & Co. regarding our
                services. These Terms supersede all prior oral or written agreements.
              </p>

              <h3>11.2 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable by a court,
                the remaining provisions shall continue in full force and effect.
              </p>

              <h3>11.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms does not constitute a
                waiver of that right or provision.
              </p>

              <h3>11.4 Assignment</h3>
              <p>
                You may not assign or transfer your rights or obligations under these Terms without
                our prior written consent. We may assign our rights to affiliated entities or
                successors.
              </p>

              <h3>11.5 Force Majeure</h3>
              <p>
                Neither party shall be liable for delays or failures in performance resulting from
                causes beyond reasonable control, including acts of God, war, strikes, government
                actions, pandemics, or natural disasters.
              </p>

              <h3>11.6 Notices</h3>
              <p>
                All notices under these Terms must be in writing and sent to:
              </p>
              <div className="not-prose my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <p className="mb-2 font-semibold text-neutral-900">
                  Farahat Office & Co. (Elite Audit Dubai)
                </p>
                <p className="mb-1 text-neutral-700">
                  Rigga Street, IBIS Hotel Building, Offices Entrance, 5th Floor
                </p>
                <p className="mb-1 text-neutral-700">Dubai, United Arab Emirates</p>
                <p className="mb-1 text-neutral-700">
                  Email: <a href="mailto:info@farahatco.com" className="text-primary-600">info@farahatco.com</a>
                </p>
                <p className="text-neutral-700">
                  Phone: <a href="tel:+97142500251" className="text-primary-600">+971 4 250 0251</a>
                </p>
              </div>
            </div>

            {/* 12. Contact */}
            <div id="contact-terms" className="scroll-mt-20">
              <h2>12. Questions About These Terms</h2>

              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>

              <div className="not-prose my-6 space-y-4">
                <div className="rounded-lg border border-primary-200 bg-primary-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary-900">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <div>
                        <p className="font-semibold text-neutral-900">Office Address</p>
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

            {/* Acknowledgment */}
            <div className="not-prose my-8 rounded-lg border border-green-200 bg-green-50 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-2 text-lg font-bold text-green-900">
                    By using our services, you acknowledge:
                  </h3>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-green-800">
                    <li>You have read and understood these Terms of Service</li>
                    <li>You agree to be legally bound by these Terms</li>
                    <li>You have the authority to enter into this agreement</li>
                    <li>You will comply with all applicable UAE laws and regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-neutral-500">
              Last Updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary-900">
              Related Legal Documents
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/privacy"
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <Shield className="h-8 w-8 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    Privacy Policy
                  </h3>
                  <p className="text-sm text-neutral-600">
                    How we collect, use, and protect your personal information
                  </p>
                </div>
              </Link>
              <Link
                href="/cookies"
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <FileText className="h-8 w-8 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    Cookie Policy
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Information about cookies and tracking technologies
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
            <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-xl text-primary-100">
              Contact us today for a free consultation and discover how our professional audit
              services can benefit your business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
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
