import { Metadata } from 'next'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { serverLoaders } from '@/lib/content-loaders'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  FileText,
  Download,
  TrendingUp,
  Calendar,
  Lock,
  Check,
} from 'lucide-react'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Expert Audit & Compliance Guides | Free Downloads | Farahat & Co',
    description:
      'Download comprehensive guides on UAE audit, VAT compliance, RERA requirements, internal audit, due diligence, and more. Expert insights from 37 years of experience.',
    keywords: [
      'audit guides uae',
      'compliance guides dubai',
      'vat guide download',
      'audit checklist',
      'free audit resources',
      'external audit guide',
      'rera compliance guide',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/resources/guides`,
      languages: {
        en: `${SITE_CONFIG.url}/en/resources/guides`,
        ar: `${SITE_CONFIG.url}/ar/resources/guides`,
      },
    },
  }
}

export default async function GuidesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Resources', href: `/${locale}/resources` },
    { label: 'Guides', href: `/${locale}/resources/guides` },
  ]

  const guides = Object.values(GUIDES)
  const featuredGuides = guides.filter((g) => g.featured)
  const guidesByCategory = {
    audit: guides.filter((g) => g.category === 'audit'),
    tax: guides.filter((g) => g.category === 'tax'),
    compliance: guides.filter((g) => g.category === 'compliance'),
    industry: guides.filter((g) => g.category === 'industry'),
    preparation: guides.filter((g) => g.category === 'preparation'),
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <FileText className="mr-1 h-3 w-3" />
              Free Expert Resources
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Comprehensive Audit & Compliance Guides
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Download our in-depth guides covering UAE audit, VAT compliance, RERA
              requirements, internal audit best practices, and more. Written by experts with
              37 years of experience auditing 28,000+ UAE companies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>6 Comprehensive Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>13,000+ Words of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Expert Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">Featured Guides</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 shadow-lg transition-all hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-4">
                    <Badge variant="default" className="bg-primary">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>

                  <div className="mb-4 inline-block rounded-xl bg-red-100 p-4">
                    <FileText className="h-10 w-10 text-red-700" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {guide.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-gray-600">
                    {guide.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {guide.format.toUpperCase()}
                    </span>
                    <span>•</span>
                    <span>{guide.fileSize}</span>
                    <span>•</span>
                    <span>{guide.pageCount} pages</span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/${locale}/resources/guides/${guide.slug}`}>
                      {guide.access === 'gated' ? (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Get Free Guide
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </>
                      )}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Guides by Category */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Audit Guides */}
            {guidesByCategory.audit.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Audit Guides
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {guidesByCategory.audit.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} locale={locale} />
                  ))}
                </div>
              </div>
            )}

            {/* Tax & Compliance Guides */}
            {guidesByCategory.tax.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Tax & VAT Compliance
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {guidesByCategory.tax.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} locale={locale} />
                  ))}
                </div>
              </div>
            )}

            {/* Industry Guides */}
            {guidesByCategory.industry.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Industry-Specific Guides
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {guidesByCategory.industry.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} locale={locale} />
                  ))}
                </div>
              </div>
            )}

            {/* Preparation Guides */}
            {guidesByCategory.preparation.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Audit Preparation
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {guidesByCategory.preparation.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} locale={locale} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Need Personalized Assistance?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Our guides provide comprehensive information, but every business is unique.
              Contact us for personalized audit and compliance guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/services`}>View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GuideCard({
  guide,
  locale,
}: {
  guide: (typeof GUIDES)[keyof typeof GUIDES]
  locale: string
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="border-b border-gray-100 bg-gray-50 p-4">
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-red-100 p-3">
            <FileText className="h-8 w-8 text-red-700" />
          </div>
          {guide.access === 'gated' && (
            <Badge variant="outline" className="border-primary/30 text-primary">
              <Lock className="mr-1 h-3 w-3" />
              Free
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-primary">
          <Link
            href={`/${locale}/resources/guides/${guide.slug}`}
            className="hover:underline"
          >
            {guide.title}
          </Link>
        </h3>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
          {guide.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {guide.format.toUpperCase()}
          </span>
          <span>•</span>
          <span>{guide.fileSize}</span>
          <span>•</span>
          <span>{guide.pageCount} pages</span>
        </div>

        <div className="mb-4 flex flex-wrap gap-1">
          {guide.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            Updated{' '}
            {new Date(guide.lastUpdated).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </div>
          <Button size="sm" asChild>
            <Link href={`/${locale}/resources/guides/${guide.slug}`}>
              {guide.access === 'gated' ? 'Get Guide' : 'Download'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
