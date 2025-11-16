/**
 * Glossary Page - Comprehensive Audit & Financial Terms
 * SEO-optimized with schema markup and alphabet navigation
 * 250+ terms organized by categories and alphabetically
 */

import { Metadata } from 'next';
import {
  GLOSSARY_CATEGORIES,
  ALL_GLOSSARY_TERMS,
  GLOSSARY_KEYWORDS,
  AVAILABLE_LETTERS,
} from '@/lib/data/glossary';
import { GlossarySchema } from '@/components/seo/schemas/GlossarySchema';
import { GlossaryPageContent } from '@/components/glossary/GlossaryPageContent';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare, BookOpen, Search, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Audit Glossary: 250+ Financial Terms Explained | Farahat & Co Dubai',
  description:
    'Comprehensive glossary of audit, financial, and compliance terms for businesses in Dubai and UAE. Get clear definitions of 250+ terms including IFRS, VAT, RERA audit, corporate tax, internal controls, and UAE regulations.',
  keywords: GLOSSARY_KEYWORDS,
  openGraph: {
    title: 'Complete Audit & Financial Glossary | Dubai UAE',
    description:
      'Search 250+ audit, accounting, and tax terms. From external audit to IFRS, VAT to corporate governance - comprehensive definitions for UAE businesses.',
    type: 'website',
    url: 'https://auditfirmsdubai.ae/glossary',
    images: [
      {
        url: 'https://auditfirmsdubai.ae/og-glossary.jpg',
        width: 1200,
        height: 630,
        alt: 'Audit Glossary Dubai',
      },
    ],
  },
  alternates: {
    canonical: 'https://auditfirmsdubai.ae/glossary',
  },
};

export default function GlossaryPage() {
  return (
    <>
      {/* Glossary Schema for Rich Snippets */}
      <GlossarySchema terms={ALL_GLOSSARY_TERMS} />

      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-600 font-medium">Glossary</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary-100 p-4">
                <BookOpen className="h-12 w-12 text-primary-600" />
              </div>
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-900 md:text-5xl lg:text-6xl">
              Audit & Financial Glossary
            </h1>
            <p className="mb-6 text-xl text-neutral-700 md:text-2xl">
              Your comprehensive guide to audit, accounting, and tax terminology
            </p>
            <p className="text-lg text-neutral-600">
              Search and explore 250+ essential terms from audit fundamentals to UAE
              regulations, financial reporting to tax compliance. Clear definitions designed for
              business owners, finance professionals, and students.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">
                  {ALL_GLOSSARY_TERMS.length}+
                </div>
                <div className="text-sm text-neutral-600">Terms Defined</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">
                  {GLOSSARY_CATEGORIES.length}
                </div>
                <div className="text-sm text-neutral-600">Categories</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">
                  {AVAILABLE_LETTERS.length}
                </div>
                <div className="text-sm text-neutral-600">Letters Covered</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-neutral-600">UAE Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-100 p-2">
                  <Search className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Quick Search</h3>
                  <p className="text-sm text-neutral-600">
                    Instantly find terms and definitions with our powerful search
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-100 p-2">
                  <Target className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Category Filters</h3>
                  <p className="text-sm text-neutral-600">
                    Browse by topic: audit, tax, UAE regulations, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-100 p-2">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Related Terms</h3>
                  <p className="text-sm text-neutral-600">
                    Explore connected concepts and expand your knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Glossary Content */}
      <GlossaryPageContent categories={GLOSSARY_CATEGORIES} />

      {/* Need Expert Help CTA */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Need Expert Clarification?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Our audit experts can help you understand complex terms and how they apply to
              your business in the UAE.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Phone Consultation */}
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <Phone className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-lg font-semibold">Call Our Experts</h3>
                <p className="mb-4 text-sm text-primary-100">
                  Speak with certified auditors about your questions
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary-900"
                >
                  <a href="tel:+97142500251">+971 42 500 251</a>
                </Button>
              </div>

              {/* WhatsApp */}
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <MessageSquare className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-lg font-semibold">WhatsApp Chat</h3>
                <p className="mb-4 text-sm text-primary-100">
                  Get quick answers to your terminology questions
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary-900"
                >
                  <a
                    href="https://wa.me/971526922588"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">
              Browse by Category
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {GLOSSARY_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold text-primary-900">
                    {category.title}
                  </h3>
                  <p className="mb-3 text-sm text-neutral-600">{category.description}</p>
                  <div className="text-sm font-medium text-primary-600">
                    {category.terms.length} terms
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">
              Related Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/faq"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  Audit FAQ
                </h3>
                <p className="text-sm text-neutral-600">
                  Get answers to 40+ common audit questions
                </p>
              </Link>
              <Link
                href="/services/external-audit"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  External Audit
                </h3>
                <p className="text-sm text-neutral-600">
                  Learn about statutory audit requirements in UAE
                </p>
              </Link>
              <Link
                href="/calculator"
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                  Fee Calculator
                </h3>
                <p className="text-sm text-neutral-600">
                  Get instant pricing estimate for your audit
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Footer */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl text-neutral-700">
            <h2 className="font-serif text-2xl font-bold text-primary-900">
              About This Glossary
            </h2>
            <p>
              This comprehensive audit and financial glossary is maintained by Farahat & Co,
              one of Dubai's leading audit firms with 37 years of experience. Our team of
              Ministry-approved auditors and CPA/CA certified professionals have compiled these
              definitions to help businesses, students, and professionals understand the
              complex terminology used in auditing, accounting, and financial compliance in the
              UAE.
            </p>
            <p>
              All definitions are specifically tailored for the UAE business environment,
              incorporating references to UAE Federal Law No. 32 of 2021, VAT regulations,
              RERA requirements, free zone compliance, and international standards like IFRS.
              We regularly update this glossary to reflect changes in regulations and
              accounting standards.
            </p>
            <h3 className="font-serif text-xl font-bold text-primary-900">
              How to Use This Glossary
            </h3>
            <ul>
              <li>
                <strong>Search:</strong> Use the search bar to find specific terms or concepts
              </li>
              <li>
                <strong>Browse Alphabetically:</strong> Click letters A-Z to jump to terms
                starting with that letter
              </li>
              <li>
                <strong>Filter by Category:</strong> Select a category to view related terms
                together
              </li>
              <li>
                <strong>Explore Related Terms:</strong> Click on related terms to understand
                connected concepts
              </li>
            </ul>
            <p>
              If you need personalized guidance on how any of these terms apply to your
              specific situation, our audit experts are available for free consultation.
              Contact us today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
