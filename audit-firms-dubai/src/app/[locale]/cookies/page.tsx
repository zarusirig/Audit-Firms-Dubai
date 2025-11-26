/**
 * Cookie Policy Page
 * Comprehensive cookie and tracking policy for Audit Firms Dubai
 * GDPR compliant cookie disclosure
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, Settings, Eye, BarChart3, Shield, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

// Make legal pages dynamic to avoid context issues
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Cookie Policy | Audit Firms Dubai | Farahat & Co',
  description:
    'Cookie Policy for Audit Firms Dubai. Learn about the cookies and tracking technologies we use, how to manage your preferences, and protect your privacy.',
  robots: 'index, follow',
  openGraph: {
    title: 'Cookie Policy | Audit Firms Dubai',
    description: 'How we use cookies and tracking technologies on our website.',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
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
            <span className="font-medium text-primary-600">Cookie Policy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
              <Cookie className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mb-4 text-xl text-neutral-700">
              Audit Firms Dubai - A Division of Farahat Office & Co.
            </p>
            <p className="text-lg text-neutral-600">
              This policy explains how we use cookies and similar tracking technologies on our
              website to improve your experience.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Last Updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="border-b border-neutral-200 bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-xl font-bold text-blue-900">Quick Summary</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Eye className="mb-2 h-8 w-8 text-blue-600" />
                <h3 className="mb-1 font-semibold text-neutral-900">Essential Cookies</h3>
                <p className="text-sm text-neutral-600">
                  Required for website functionality (always active)
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <BarChart3 className="mb-2 h-8 w-8 text-blue-600" />
                <h3 className="mb-1 font-semibold text-neutral-900">Analytics Cookies</h3>
                <p className="text-sm text-neutral-600">
                  Help us understand visitor behavior (optional)
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Settings className="mb-2 h-8 w-8 text-blue-600" />
                <h3 className="mb-1 font-semibold text-neutral-900">Your Control</h3>
                <p className="text-sm text-neutral-600">
                  Manage preferences in your browser settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl prose-headings:font-serif prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            {/* 1. What Are Cookies */}
            <div id="what-are-cookies" className="scroll-mt-20">
              <h2>1. What Are Cookies?</h2>

              <p>
                Cookies are small text files that are placed on your computer, smartphone, or other
                device when you visit a website. They are widely used to make websites work more
                efficiently and provide a better user experience.
              </p>

              <h3>1.1 How Cookies Work</h3>
              <p>
                When you visit <strong>{SITE_CONFIG.url}</strong>, our server sends a cookie to
                your device. The cookie is stored in your browser and contains information that can
                be read by the website when you return.
              </p>

              <h3>1.2 First-Party vs. Third-Party Cookies</h3>
              <ul>
                <li>
                  <strong>First-Party Cookies:</strong> Set directly by Audit Firms Dubai to
                  remember your preferences and improve functionality
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Set by external services we use (e.g.,
                  Google Analytics, payment processors) for analytics and marketing purposes
                </li>
              </ul>

              <h3>1.3 Session vs. Persistent Cookies</h3>
              <ul>
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain on your device for a set period or
                  until manually deleted
                </li>
              </ul>
            </div>

            {/* 2. Cookies We Use */}
            <div id="cookies-we-use" className="scroll-mt-20">
              <h2>2. Types of Cookies We Use</h2>

              <h3>2.1 Strictly Necessary Cookies (Essential)</h3>
              <p>
                These cookies are essential for the website to function properly. They cannot be
                disabled in our systems and are usually only set in response to actions you take,
                such as filling out forms or managing privacy settings.
              </p>

              <div className="not-prose my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 bg-neutral-100">
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Cookie Name
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Purpose
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-neutral-700">
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">session_id</td>
                      <td className="p-3">Maintains user session state</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">csrf_token</td>
                      <td className="p-3">Security - prevents cross-site request forgery</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">locale_preference</td>
                      <td className="p-3">Remembers language selection (English/Arabic)</td>
                      <td className="p-3">1 year</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">cookie_consent</td>
                      <td className="p-3">Stores your cookie preference choices</td>
                      <td className="p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Legal Basis:</strong> These cookies are necessary for the website to
                function and are exempt from consent requirements under GDPR.
              </p>

              <h3>2.2 Analytics and Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by
                collecting anonymous information about pages visited, time spent, and navigation
                paths.
              </p>

              <div className="not-prose my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 bg-neutral-100">
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Cookie Name
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Provider
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Purpose
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-neutral-700">
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_ga</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Distinguishes unique users</td>
                      <td className="p-3">2 years</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_ga_*</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Maintains session state</td>
                      <td className="p-3">2 years</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_gid</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Distinguishes users</td>
                      <td className="p-3">24 hours</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_gat</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Throttles request rate</td>
                      <td className="p-3">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>What We Track:</strong>
              </p>
              <ul>
                <li>Pages visited and time spent on each page</li>
                <li>Navigation paths through the website</li>
                <li>Device type, browser, and operating system</li>
                <li>General geographic location (city/country level)</li>
                <li>Referring website or search engine</li>
              </ul>

              <p>
                <strong>Data Privacy:</strong> All analytics data is anonymized and aggregated. We
                cannot identify individual users from this data.
              </p>

              <h3>2.3 Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization, such as remembering
                your preferences and choices.
              </p>

              <div className="not-prose my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 bg-neutral-100">
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Cookie Name
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Purpose
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-neutral-700">
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">calculator_data</td>
                      <td className="p-3">Saves audit fee calculator inputs</td>
                      <td className="p-3">30 days</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">form_progress</td>
                      <td className="p-3">Saves incomplete contact form data</td>
                      <td className="p-3">7 days</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">preferred_location</td>
                      <td className="p-3">Remembers selected office location</td>
                      <td className="p-3">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.4 Marketing and Advertising Cookies (With Consent)</h3>
              <p>
                These cookies may be set by our advertising partners to build a profile of your
                interests and show relevant ads on other websites. They work by uniquely identifying
                your browser and device.
              </p>

              <div className="not-prose my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 bg-neutral-100">
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Cookie Name
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Provider
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Purpose
                      </th>
                      <th className="p-3 text-left text-sm font-semibold text-neutral-900">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-neutral-700">
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_fbp</td>
                      <td className="p-3">Facebook Pixel</td>
                      <td className="p-3">Tracks conversions and retargeting</td>
                      <td className="p-3">3 months</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">_gcl_au</td>
                      <td className="p-3">Google Ads</td>
                      <td className="p-3">Stores ad campaign information</td>
                      <td className="p-3">3 months</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="p-3 font-mono">li_sugr</td>
                      <td className="p-3">LinkedIn</td>
                      <td className="p-3">Browser identification for ads</td>
                      <td className="p-3">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Consent Required:</strong> Marketing cookies are only activated if you
                provide explicit consent through our cookie banner.
              </p>
            </div>

            {/* 3. Third-Party Services */}
            <div id="third-party" className="scroll-mt-20">
              <h2>3. Third-Party Services and Cookies</h2>

              <h3>3.1 Google Analytics</h3>
              <p>
                We use Google Analytics to analyze website traffic and user behavior. Google
                Analytics sets several cookies to collect anonymous statistical data about page
                views, session duration, and user demographics.
              </p>
              <p>
                Privacy: Google Analytics data is anonymized (IP anonymization enabled). Read
                Google's privacy policy:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>

              <h3>3.2 PayTabs Payment Gateway</h3>
              <p>
                When you make online payments, PayTabs (our payment processor) may set cookies to
                facilitate secure transactions and fraud prevention.
              </p>
              <p>
                PayTabs Privacy:{' '}
                <a
                  href="https://www.paytabs.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.paytabs.com/policy
                </a>
              </p>

              <h3>3.3 Social Media Platforms</h3>
              <p>
                If you interact with social media buttons or widgets on our site (LinkedIn,
                Facebook, Twitter), those platforms may set their own cookies. We do not control
                third-party cookies. Please review their respective privacy policies:
              </p>
              <ul>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Facebook:</strong>{' '}
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Twitter/X:</strong>{' '}
                  <a
                    href="https://twitter.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>

              <h3>3.4 Embedded Content</h3>
              <p>
                Our website may embed content from third-party services (YouTube videos, Google
                Maps). These embedded services may set cookies when you view or interact with them.
              </p>
            </div>

            {/* 4. Managing Cookies */}
            <div id="managing-cookies" className="scroll-mt-20">
              <h2>4. How to Manage and Delete Cookies</h2>

              <h3>4.1 Cookie Consent Banner</h3>
              <p>
                When you first visit our website, you'll see a cookie consent banner allowing you
                to:
              </p>
              <ul>
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences by category</li>
              </ul>
              <p>
                You can change your preferences at any time by clicking the "Cookie Settings" link
                in the website footer.
              </p>

              <h3>4.2 Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through settings. You can typically:
              </p>
              <ul>
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies (may affect website functionality)</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <div className="not-prose my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Browser-Specific Instructions:
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>
                    <strong>Google Chrome:</strong>{' '}
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Manage cookies
                    </a>
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong>{' '}
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Manage cookies
                    </a>
                  </li>
                  <li>
                    <strong>Safari (Mac):</strong>{' '}
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Manage cookies
                    </a>
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong>{' '}
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Manage cookies
                    </a>
                  </li>
                </ul>
              </div>

              <h3>4.3 Opt-Out of Google Analytics</h3>
              <p>
                You can prevent Google Analytics from tracking your activity by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-Out Browser Add-On
                </a>
                .
              </p>

              <h3>4.4 Do Not Track (DNT)</h3>
              <p>
                Some browsers offer a "Do Not Track" (DNT) signal. While we respect user privacy
                preferences, there is no universal standard for interpreting DNT signals. We
                recommend using our cookie consent banner or browser settings to manage tracking
                preferences.
              </p>

              <h3>4.5 Impact of Disabling Cookies</h3>
              <p>
                <strong>Important:</strong> If you disable cookies, some features of our website may
                not function properly:
              </p>
              <ul>
                <li>You may need to re-enter information when navigating between pages</li>
                <li>Language preferences may not be saved</li>
                <li>Contact forms may not work correctly</li>
                <li>The audit fee calculator may lose saved data</li>
              </ul>
              <p>
                Essential cookies cannot be disabled as they are necessary for the website to
                function.
              </p>
            </div>

            {/* 5. Your Rights */}
            <div id="your-rights" className="scroll-mt-20">
              <h2>5. Your Privacy Rights</h2>

              <p>Under UAE data protection laws and GDPR principles, you have the right to:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request information about cookies and data we collect
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Change or withdraw your cookie consent at any
                  time
                </li>
                <li>
                  <strong>Object:</strong> Object to processing based on legitimate interests
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of data collected through cookies
                  (subject to legal retention requirements)
                </li>
              </ul>

              <p>
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@farahatco.com">privacy@farahatco.com</a>.
              </p>
            </div>

            {/* 6. Changes to Cookie Policy */}
            <div id="changes" className="scroll-mt-20">
              <h2>6. Changes to This Cookie Policy</h2>

              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology,
                legislation, or our business practices. Material changes will be communicated via:
              </p>
              <ul>
                <li>Updated "Last Modified" date at the top of this policy</li>
                <li>Website banner notification for significant changes</li>
                <li>Email notification to registered users (if applicable)</li>
              </ul>

              <p>
                We encourage you to review this policy periodically. Continued use of our website
                after changes constitutes acceptance of the updated policy.
              </p>

              <p>
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>

            {/* 7. Contact Us */}
            <div id="contact-cookies" className="scroll-mt-20">
              <h2>7. Contact Us About Cookies</h2>

              <p>
                If you have questions about our use of cookies or this Cookie Policy, please contact
                us:
              </p>

              <div className="not-prose my-6 rounded-lg border border-primary-200 bg-primary-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary-900">
                  Farahat Office & Co. (Audit Firms Dubai)
                </h3>
                <div className="space-y-2 text-neutral-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:privacy@farahatco.com" className="text-primary-600">
                      privacy@farahatco.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+97142500251" className="text-primary-600">
                      +971 4 250 0251
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Rigga Street, IBIS Hotel Building, Offices Entrance,
                    5th Floor, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="not-prose my-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-blue-900">Quick Reference Summary</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>
                  <strong>✓ Essential Cookies:</strong> Always active (required for website
                  functionality)
                </p>
                <p>
                  <strong>✓ Analytics Cookies:</strong> Google Analytics (optional, requires
                  consent)
                </p>
                <p>
                  <strong>✓ Functional Cookies:</strong> Enhance user experience (optional)
                </p>
                <p>
                  <strong>✓ Marketing Cookies:</strong> Advertising and retargeting (optional,
                  requires consent)
                </p>
                <p className="mt-3">
                  <strong>Your Control:</strong> Manage preferences via cookie banner or browser
                  settings
                </p>
              </div>
            </div>
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
                href="/terms"
                className="group flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <Settings className="h-8 w-8 flex-shrink-0 text-primary-600" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                    Terms of Service
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Our service terms and conditions
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
            <h2 className="mb-4 font-serif text-3xl font-bold">
              Questions About Cookies or Privacy?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Our team is here to explain how we use cookies and protect your data.
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
