/**
 * FAQ Page - Comprehensive Frequently Asked Questions
 * SEO-optimized for featured snippets with schema markup
 * Organized by categories for better user experience
 */

import { Metadata } from 'next';
import { FAQ_CATEGORIES, ALL_FAQS, FAQ_KEYWORDS } from '@/lib/data/faq';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { FAQPageContent } from '@/components/faq/FAQPageContent';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Audit FAQ - 40+ Questions Answered | Audit Firms Dubai | Farahat & Co',
  description:
    'Complete FAQ guide for audit services in Dubai. Get answers to 40+ questions about external audit, internal audit, RERA audit, free zone audits, pricing, timelines, compliance deadlines, and regulatory requirements in UAE.',
  keywords: FAQ_KEYWORDS,
  openGraph: {
    title: 'Audit FAQ - Everything You Need to Know | Farahat & Co Dubai',
    description:
      'Comprehensive answers to all your audit questions in Dubai. External audit requirements, costs, timelines, free zone audits, RERA compliance, and more.',
    type: 'website',
    url: 'https://auditfirmsdubai.ae/faq',
    images: [
      {
        url: 'https://auditfirmsdubai.ae/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Audit FAQ Dubai',
      },
    ],
  },
  alternates: {
    canonical: 'https://auditfirmsdubai.ae/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={ALL_FAQS} />

      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-600 font-medium">FAQ</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-6 text-xl text-neutral-700 md:text-2xl">
              Everything you need to know about audit services in Dubai
            </p>
            <p className="text-lg text-neutral-600">
              Get instant answers to 40+ common questions about external audits, internal
              audits, compliance, pricing, timelines, and regulatory requirements in the UAE.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">40+</div>
                <div className="text-sm text-neutral-600">Questions Answered</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">8</div>
                <div className="text-sm text-neutral-600">Categories</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">37</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-neutral-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Content */}
      <FAQPageContent categories={FAQ_CATEGORIES} />

      {/* Still Have Questions CTA */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Our audit experts are here to help. Get personalized answers to your specific
              questions.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Phone Consultation */}
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <Phone className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-lg font-semibold">Call Us</h3>
                <p className="mb-4 text-sm text-primary-100">
                  Speak with an audit expert
                </p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-900">
                  <a href="tel:+97142500251">+971 42 500 251</a>
                </Button>
              </div>

              {/* WhatsApp */}
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <MessageSquare className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-lg font-semibold">WhatsApp</h3>
                <p className="mb-4 text-sm text-primary-100">
                  Quick responses on WhatsApp
                </p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-900">
                  <a
                    href="https://wa.me/971526922588"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </Button>
              </div>

              {/* Fee Calculator */}
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <Calculator className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-lg font-semibold">Get Quote</h3>
                <p className="mb-4 text-sm text-primary-100">
                  Calculate audit fees instantly
                </p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-900">
                  <Link href="/calculator">Fee Calculator</Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 text-sm text-primary-100">
              <p>
                Average response time: <strong className="text-white">Under 2 hours</strong>{' '}
                during business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">
              Related Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/external-audit"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  External Audit
                </h3>
                <p className="text-sm text-neutral-600">
                  Learn about statutory audit requirements and our services
                </p>
              </Link>
              <Link
                href="/calculator"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  Audit Fee Calculator
                </h3>
                <p className="text-sm text-neutral-600">
                  Get instant pricing estimate for your audit
                </p>
              </Link>
              <Link
                href="/about"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  About Farahat & Co
                </h3>
                <p className="text-sm text-neutral-600">
                  Learn about our 37 years of audit excellence
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Footer */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl text-neutral-700">
            <h2 className="font-serif text-2xl font-bold text-primary-900">
              Why Choose Farahat & Co for Your Audit Questions?
            </h2>
            <p>
              With 37 years of experience serving over 28,000 clients across 140 countries,
              Farahat & Co is one of Dubai's most trusted audit firms. Our Ministry-approved
              auditors and CPA/CA certified professionals have answered thousands of audit
              questions and helped businesses navigate UAE's complex audit requirements.
            </p>
            <p>
              Whether you need guidance on external audit requirements, internal audit
              implementation, RERA compliance, free zone regulations, or forensic
              investigations, our team provides accurate, practical answers backed by
              decades of hands-on experience in the UAE market.
            </p>
            <p>
              Can't find your question? Our audit experts are available to provide
              personalized guidance for your specific situation. Contact us today for a
              free consultation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
