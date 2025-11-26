import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, FileText, Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { i18n, type Locale } from '@/lib/i18n/config'

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
    title: 'Resources Hub | Expert Guides, Tools & Insights | Audit Firms Dubai',
    description:
      'Access comprehensive audit resources, compliance guides, calculators, and expert insights. Free tools and templates for UAE businesses.',
    keywords: [
      'audit resources',
      'compliance guides',
      'audit tools',
      'uae business resources',
      'audit calculators',
      'compliance templates',
    ],
    alternates: {
      canonical: `https://auditfirmsdubai.ae/${locale}/resources`,
      languages: {
        en: 'https://auditfirmsdubai.ae/en/resources',
        ar: 'https://auditfirmsdubai.ae/ar/resources',
      },
    },
  }
}

const resources = [
  {
    title: 'Blog & Insights',
    description:
      'Expert articles on audit, compliance, tax, and financial regulations in the UAE. Stay updated with the latest industry insights.',
    icon: BookOpen,
    href: '/resources/blog',
    badge: '100+ Articles',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Audit Guides',
    description:
      'Comprehensive downloadable guides covering RERA audit, federal law compliance, VAT, and audit preparation checklists.',
    icon: FileText,
    href: '/resources/guides',
    badge: 'Free Downloads',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Tools & Calculators',
    description:
      'Free online tools including audit cost comparison, materiality calculator, and audit readiness assessment.',
    icon: Calculator,
    href: '/tools/audit-cost-comparison',
    badge: 'Interactive Tools',
    color: 'from-purple-500 to-purple-600',
  },
]

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 text-secondary-400" />
              Free Resources & Tools
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Resource <span className="text-secondary-400">Hub</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Access expert guides, insightful articles, and powerful tools to navigate audit,
              compliance, and financial regulations in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Explore Our Resources</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to stay compliant and make informed financial decisions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {resources.map((resource) => (
              <Link key={resource.href} href={`/${locale}${resource.href}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${resource.color} text-white shadow-lg`}
                      >
                        <resource.icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {resource.badge}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 mt-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-700 group-hover:gap-3 transition-all">
                      Explore Now
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Popular Guides */}
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Popular Guides</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`/${locale}/resources/guides/complete-audit-requirements-uae-2025`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Complete Audit Requirements UAE 2025
                      </div>
                      <div className="text-sm text-gray-600">
                        Comprehensive guide to UAE audit requirements
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/resources/guides/federal-law-32-2021-explained`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Federal Law 32/2021 Explained
                      </div>
                      <div className="text-sm text-gray-600">
                        Understanding commercial companies law
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/resources/guides/audit-preparation-checklist`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Audit Preparation Checklist
                      </div>
                      <div className="text-sm text-gray-600">
                        Step-by-step preparation guide
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/${locale}/resources/guides`}>
                    View All Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Popular Tools */}
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Free Tools</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`/${locale}/tools/audit-cost-comparison`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Audit Cost Comparison Tool
                      </div>
                      <div className="text-sm text-gray-600">
                        Compare audit fees across Dubai firms
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/tools/materiality-calculator`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Materiality Calculator
                      </div>
                      <div className="text-sm text-gray-600">
                        Calculate audit materiality thresholds
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/calculator`}
                    className="group flex items-start gap-3 text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    <Calculator className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold group-hover:underline">
                        Audit Fee Calculator
                      </div>
                      <div className="text-sm text-gray-600">
                        Get instant audit cost estimates
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/${locale}/tools/audit-cost-comparison`}>
                    Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Need Personalized Guidance?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Our certified auditors are ready to help with your specific audit, tax, and compliance
            needs. Schedule a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${locale}/contact`}>Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
              <Link href={`/${locale}/services/external-audit`}>View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
