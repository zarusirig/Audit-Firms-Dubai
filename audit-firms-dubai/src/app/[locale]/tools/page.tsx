/**
 * Tools & Resources Hub
 * Main landing page for downloadable resources
 */

import { Metadata } from 'next'
import Link from 'next/link'
import {
  Download,
  FileText,
  Shield,
  Calculator,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
} from 'lucide-react'
import ResourceGrid from '@/components/resources/ResourceGrid'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  RESOURCE_CATALOG,
  getFeaturedResources,
  getResourcesByCategory,
  getCategoryStats,
} from '@/lib/resources/catalog'
import { RESOURCE_CATEGORY_LABELS } from '@/lib/resources/types'

export const metadata: Metadata = {
  title: 'Free Audit Tools & Resources | Templates, Checklists & Guides | Farahat & Co',
  description:
    'Download free audit checklists, compliance guides, tax templates, and financial tools. Professional resources for UAE businesses from Ministry-approved auditors.',
  keywords: [
    'audit tools',
    'audit checklist',
    'compliance guide',
    'tax template',
    'financial template',
    'uae audit resources',
    'free audit tools',
    'rera audit guide',
    'vat compliance',
    'corporate governance',
    'internal audit framework',
    'financial statement template',
  ],
  openGraph: {
    title: 'Free Audit Tools & Resources Hub | Farahat & Co',
    description:
      'Access professional audit tools, compliance guides, and financial templates. Free downloads for UAE businesses.',
    type: 'website',
    images: [
      {
        url: '/og-tools.jpg',
        width: 1200,
        height: 630,
        alt: 'Farahat & Co Tools & Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Audit Tools & Resources Hub | Farahat & Co',
    description:
      'Download free audit checklists, compliance guides, and financial templates for UAE businesses.',
  },
}

export default function ToolsPage() {
  const featuredResources = getFeaturedResources()
  const categoryStats = getCategoryStats()
  const totalResources = RESOURCE_CATALOG.length
  const totalDownloads = RESOURCE_CATALOG.reduce(
    (sum, resource) => sum + (resource.downloadCount || 0),
    0
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-20 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              <Download className="mr-1 h-3 w-3" />
              Free Professional Resources
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Audit Tools & Resources Hub
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
              Access free professional-grade audit checklists, compliance guides, tax templates,
              and financial tools. Created by Ministry-approved auditors with 35+ years of
              experience in the UAE.
            </p>

            {/* Stats */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">{totalResources}+</div>
                <div className="text-sm text-white/80">Free Resources</div>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">{(totalDownloads / 1000).toFixed(1)}K+</div>
                <div className="text-sm text-white/80">Downloads</div>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">{categoryStats.size}</div>
                <div className="text-sm text-white/80">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Interactive Tools</h2>
          <p className="text-gray-600">Free online calculators and assessment tools</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/calculator"
            className="group rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 transition-all hover:border-blue-400 hover:shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <Calculator className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-blue-600">
              Audit Fee Calculator
            </h3>
            <p className="mb-4 text-gray-600">
              Get an instant estimate of your audit costs based on company size, industry, and complexity. Free 3-step calculator.
            </p>
            <Badge variant="default" className="bg-blue-600">
              Most Popular
            </Badge>
          </Link>

          <Link
            href="/tools/audit-readiness-score"
            className="group rounded-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-8 transition-all hover:border-green-400 hover:shadow-lg"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <TrendingUp className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-green-600">
              Audit Readiness Score
            </h3>
            <p className="mb-4 text-gray-600">
              Take our 15-question assessment to discover your audit readiness score (0-100) with personalized recommendations.
            </p>
            <Badge variant="default" className="bg-green-600">
              New Tool
            </Badge>
          </Link>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Downloadable Resources</h2>
          <p className="text-gray-600">Templates, checklists, and guides by category</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#audit-checklists"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <FileText className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Audit Checklists
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('audit-checklists') || 0} resources
              </p>
            </div>
          </Link>

          <Link
            href="#compliance-guides"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <Shield className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Compliance Guides
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('compliance-guides') || 0} resources
              </p>
            </div>
          </Link>

          <Link
            href="#tax-templates"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <Calculator className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Tax Templates
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('tax-templates') || 0} resources
              </p>
            </div>
          </Link>

          <Link
            href="#financial-templates"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <TrendingUp className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Financial Templates
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('financial-templates') || 0} resources
              </p>
            </div>
          </Link>

          <Link
            href="#industry-guides"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <BookOpen className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Industry Guides
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('industry-guides') || 0} resources
              </p>
            </div>
          </Link>

          <Link
            href="#regulatory-updates"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <Filter className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                Regulatory Updates
              </h3>
              <p className="text-sm text-gray-600">
                {categoryStats.get('regulatory-updates') || 0} resources
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Featured Resources</h2>
            <p className="text-gray-600">Our most popular and valuable tools</p>
          </div>
          <Badge variant="default" className="hidden md:flex">
            <TrendingUp className="mr-1 h-3 w-3" />
            Popular
          </Badge>
        </div>
        <ResourceGrid resources={featuredResources} variant="featured" columns={3} />
      </section>

      {/* Audit Checklists */}
      <section id="audit-checklists" className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {RESOURCE_CATEGORY_LABELS['audit-checklists']}
          </h2>
          <p className="text-gray-600">
            Comprehensive checklists to prepare for external and internal audits
          </p>
        </div>
        <ResourceGrid
          resources={getResourcesByCategory('audit-checklists')}
          showCategory={false}
        />
      </section>

      {/* Compliance Guides */}
      <section
        id="compliance-guides"
        className="bg-gray-50 px-4 py-12"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              {RESOURCE_CATEGORY_LABELS['compliance-guides']}
            </h2>
            <p className="text-gray-600">
              Stay compliant with UAE regulations and international standards
            </p>
          </div>
          <ResourceGrid
            resources={getResourcesByCategory('compliance-guides')}
            showCategory={false}
          />
        </div>
      </section>

      {/* Tax Templates */}
      <section id="tax-templates" className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {RESOURCE_CATEGORY_LABELS['tax-templates']}
          </h2>
          <p className="text-gray-600">
            VAT, Corporate Tax, and Transfer Pricing templates and calculators
          </p>
        </div>
        <ResourceGrid resources={getResourcesByCategory('tax-templates')} showCategory={false} />
      </section>

      {/* Financial Templates */}
      <section
        id="financial-templates"
        className="bg-gray-50 px-4 py-12"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              {RESOURCE_CATEGORY_LABELS['financial-templates']}
            </h2>
            <p className="text-gray-600">
              IFRS-compliant financial statement templates and forecasting tools
            </p>
          </div>
          <ResourceGrid
            resources={getResourcesByCategory('financial-templates')}
            showCategory={false}
          />
        </div>
      </section>

      {/* Industry Guides */}
      <section id="industry-guides" className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {RESOURCE_CATEGORY_LABELS['industry-guides']}
          </h2>
          <p className="text-gray-600">
            Industry-specific compliance and regulatory guides
          </p>
        </div>
        <ResourceGrid resources={getResourcesByCategory('industry-guides')} showCategory={false} />
      </section>

      {/* Regulatory Updates */}
      <section
        id="regulatory-updates"
        className="bg-gray-50 px-4 py-12"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              {RESOURCE_CATEGORY_LABELS['regulatory-updates']}
            </h2>
            <p className="text-gray-600">
              Latest regulatory changes and compliance updates
            </p>
          </div>
          <ResourceGrid
            resources={getResourcesByCategory('regulatory-updates')}
            showCategory={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-20 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Need Help Implementing These Resources?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Our audit and compliance experts can help you apply these tools to your business and
            ensure full compliance with UAE regulations.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Download className="mr-2 h-5 w-5" />
                Request a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Audit Fees
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-gray max-w-none">
          <h2>Professional Audit Tools for UAE Businesses</h2>
          <p>
            Farahat & Co provides a comprehensive collection of free professional-grade audit
            tools, compliance guides, and financial templates designed specifically for businesses
            operating in the UAE. Our resources are created by Ministry-approved auditors with over
            35 years of experience serving clients across Dubai, Abu Dhabi, and the Northern
            Emirates.
          </p>

          <h3>Why Download Our Resources?</h3>
          <ul>
            <li>
              <strong>Created by Experts:</strong> All templates and guides are developed by
              certified auditors and compliance specialists
            </li>
            <li>
              <strong>UAE-Specific:</strong> Tailored to UAE regulations, including RERA, DFSA, VAT,
              and Corporate Tax requirements
            </li>
            <li>
              <strong>Regularly Updated:</strong> Our resources are continuously updated to reflect
              the latest regulatory changes
            </li>
            <li>
              <strong>Practical & Actionable:</strong> Ready-to-use templates that save time and
              ensure compliance
            </li>
            <li>
              <strong>Free Access:</strong> Most resources are available for immediate download with
              no cost
            </li>
          </ul>

          <h3>Popular Categories</h3>
          <p>
            Our resource library covers six main categories to support all aspects of your
            financial compliance and reporting needs:
          </p>
          <ul>
            <li>
              <strong>Audit Checklists:</strong> Comprehensive preparation guides for external
              audits, internal audits, and RERA audits
            </li>
            <li>
              <strong>Compliance Guides:</strong> Corporate governance, AML/CFT, data protection,
              and regulatory compliance resources
            </li>
            <li>
              <strong>Tax Templates:</strong> VAT calculators, corporate tax readiness checklists,
              and transfer pricing documentation
            </li>
            <li>
              <strong>Financial Templates:</strong> IFRS-compliant financial statements, cash flow
              forecasts, and internal controls guides
            </li>
            <li>
              <strong>Industry Guides:</strong> Sector-specific compliance guides for real estate,
              FinTech, and other industries
            </li>
            <li>
              <strong>Regulatory Updates:</strong> Quarterly summaries of UAE regulatory changes and
              compliance deadlines
            </li>
          </ul>

          <h3>How to Use These Resources</h3>
          <p>
            Each resource is designed to be immediately actionable. Download the templates, guides,
            or checklists that match your needs, and follow the step-by-step instructions provided.
            For gated resources, simply provide your email address to receive instant access along
            with helpful implementation tips.
          </p>

          <p>
            If you need assistance implementing any of these tools or have questions about
            compliance requirements, our team of audit and compliance experts is ready to help.
            Contact us for a free consultation.
          </p>
        </div>
      </section>
    </div>
  )
}
