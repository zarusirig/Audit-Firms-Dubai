import { Metadata } from 'next'
import Link from 'next/link'
import { CORE_SERVICES, WHY_CHOOSE_US, HOMEPAGE_FAQ } from '@/lib/constants/brand'
import { SITE_CONFIG } from '@/lib/constants'
import { i18n, type Locale } from '@/lib/i18n/config'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,
  ArrowRight,
  BadgeCheck,
  Award,
  Globe,
  Clock,
  FileText,
  Users,
  Languages,
  Star,
  CheckCircle2,
  Phone,
  Calculator,
} from 'lucide-react'
import { FAQSchema } from '@/components/seo/schemas/FAQSchema'

const iconMap = {
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,
  BadgeCheck,
  Award,
  Globe,
  Clock,
  FileText,
  Users,
  Languages,
  Star,
}

// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

// Page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Audit Services Dubai | External, Internal, RERA & VAT Audits | Farahat & Co',
    description:
      'Comprehensive audit services in Dubai by Ministry-approved auditors. External audit, Internal audit, RERA audit, VAT audit, Due diligence & Forensic audit. 37 years experience. Call +971 42 500 251',
    keywords: [
      'audit services dubai',
      'audit firms in dubai',
      'external audit dubai',
      'internal audit uae',
      'rera audit services',
      'vat audit dubai',
      'forensic audit uae',
      'due diligence dubai',
      'ministry approved auditors',
      'audit company dubai',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/services`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services`,
        ar: `${SITE_CONFIG.url}/ar/services`,
      },
    },
    openGraph: {
      title: 'Audit Services Dubai | External, Internal, RERA & VAT Audits',
      description:
        'Comprehensive audit services in Dubai by Ministry-approved auditors. 37 years experience serving 28,000+ clients.',
      url: `${SITE_CONFIG.url}/${locale}/services`,
      siteName: SITE_CONFIG.name,
      locale: locale,
      type: 'website',
    },
  }
}

export default async function ServicesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Services', href: `/${locale}/services` },
  ]

  return (
    <>
      {/* FAQ Schema */}
      <FAQSchema faqs={HOMEPAGE_FAQ as any} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              Ministry Approved Auditors Since 1985
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Comprehensive <span className="text-secondary-400">Audit Services</span> in Dubai
            </h1>
            <p className="mb-8 text-xl text-primary-100 md:text-2xl leading-relaxed">
              From statutory compliance to specialized audits, we provide complete audit solutions
              tailored to your business needs
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                <Link href={`/${locale}/tools/audit-cost-comparison`}>
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Audit Fees
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Our Audit Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              We offer six specialized audit services, each delivered by certified professionals
              with deep expertise in UAE regulations and international standards
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Link key={service.id} href={`/${locale}${service.href}`}>
                  <Card className="group h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-gray-200 hover:border-primary-200">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform" />
                    
                    <CardHeader>
                      <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
                        <Icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="font-serif text-xl text-gray-900 group-hover:text-primary-700 transition-colors">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-colors font-normal">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-bold text-primary-600 transition-colors group-hover:text-primary-800">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Why Choose Farahat & Co
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              37 years of excellence in auditing with 28,000+ satisfied clients across 140 countries
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <Card key={item.title} className="border-none shadow-sm">
                  <CardHeader>
                    <div className="mb-3 inline-flex rounded-lg bg-primary-100 p-2.5">
                      <Icon className="h-5 w-5 text-primary-700" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Our Audit Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              A streamlined, professional approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description:
                    'Free consultation to understand your business, audit requirements, and timeline. We provide a detailed quote and engagement letter.',
                },
                {
                  step: '02',
                  title: 'Planning & Risk Assessment',
                  description:
                    'Comprehensive review of your business operations, internal controls, and industry-specific risks to tailor our audit approach.',
                },
                {
                  step: '03',
                  title: 'Document Collection',
                  description:
                    'Secure sharing of financial statements, supporting documents, and records through our client portal or in-person collection.',
                },
                {
                  step: '04',
                  title: 'Audit Fieldwork',
                  description:
                    'Detailed examination of financial records, testing of internal controls, and verification of transactions by certified auditors.',
                },
                {
                  step: '05',
                  title: 'Review & Quality Control',
                  description:
                    'Multi-level review process including partner review to ensure audit quality and compliance with international standards.',
                },
                {
                  step: '06',
                  title: 'Report Delivery',
                  description:
                    'Delivery of audit report with management letter highlighting findings, recommendations, and compliance confirmation.',
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="mt-2">{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Specialized audit expertise across diverse sectors of the UAE economy
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Real Estate & Property', slug: 'real-estate', icon: Building2 },
              { name: 'Trading & Distribution', slug: 'trading', icon: FileCheck },
              { name: 'Manufacturing', slug: 'manufacturing', icon: Scale },
              { name: 'Financial Services', slug: 'financial-services', icon: Shield },
              { name: 'Healthcare & Medical', slug: 'healthcare', icon: FileCheck },
              { name: 'Hospitality & Tourism', slug: 'hospitality', icon: Building2 },
              { name: 'Technology & IT', slug: 'technology', icon: Search },
              { name: 'E-commerce & Retail', slug: 'ecommerce', icon: ReceiptText },
            ].map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  key={industry.slug}
                  href={`/${locale}/industries/${industry.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <Icon className="mb-2 h-6 w-6 text-primary-700" />
                      <CardTitle className="text-base">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm font-semibold text-primary-700 transition-colors group-hover:text-primary-900">
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/industries`}>
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-700">
                Common questions about our audit services in Dubai
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {HOMEPAGE_FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-primary-100">
              Contact us today for a free consultation with our audit experts
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 42 500 251
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href={`/${locale}/quote`}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
