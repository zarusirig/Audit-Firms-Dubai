import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Building2,
  Globe,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
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
    title: 'Our Clients - Trusted by 28,000+ Businesses Worldwide | Farahat & Co',
    description:
      'Trusted audit and advisory partner for leading international companies across 140+ countries. From Fortune 500 companies to growing businesses in UAE, we deliver excellence in audit, tax, and advisory services.',
    keywords: [
      'audit clients dubai',
      'international audit firm',
      'global clients uae',
      'trusted auditors',
      'farahat clients',
      'multinational companies audit',
      'uae business auditors',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/clients`,
      languages: {
        en: `${SITE_CONFIG.url}/en/clients`,
        ar: `${SITE_CONFIG.url}/ar/clients`,
      },
    },
  }
}

// Client logos data
const clients = [
  { name: 'AAR International', logo: '/images/clients/aar-international-usa.png', country: 'USA' },
  { name: 'Alem', logo: '/images/clients/alem-usa.png', country: 'USA' },
  { name: 'Allergan', logo: '/images/clients/allergan-usa.png', country: 'USA' },
  { name: 'Banco Popular', logo: '/images/clients/banco-popular-france.png', country: 'France' },
  { name: 'BBVA', logo: '/images/clients/bbva-uk.png', country: 'UK' },
  { name: 'Belvac', logo: '/images/clients/belvac-usa.png', country: 'USA' },
  { name: 'CBM', logo: '/images/clients/cbm-china.png', country: 'China' },
  { name: 'CBMEC Middle East Contracting', logo: '/images/clients/cbmec-middle-east-contracting-china.png', country: 'China' },
  { name: 'China Mobile', logo: '/images/clients/china-mobile-china.png', country: 'China' },
  { name: 'CIMA', logo: '/images/clients/cima-global-uk.png', country: 'UK' },
  { name: 'CIPD', logo: '/images/clients/cipd-uk.png', country: 'UK' },
  { name: 'Coyne Airways', logo: '/images/clients/coyne-airways-fzco-uk.png', country: 'UK' },
  { name: 'Densay Shipping & Trading', logo: '/images/clients/densay-shipping-trading-turkey.png', country: 'Turkey' },
  { name: 'eVestment', logo: '/images/clients/evestment-usa.png', country: 'USA' },
  { name: 'Gameloft', logo: '/images/clients/gameloft-usa.png', country: 'USA' },
  { name: 'Hager Companies', logo: '/images/clients/hager-companies.png', country: 'International' },
  { name: 'Halcom', logo: '/images/clients/halcom-germany.png', country: 'Germany' },
  { name: 'HRS Hotel Reservation Services', logo: '/images/clients/hrs-hotel-reservation-services-uk.png', country: 'UK' },
  { name: 'Hypercom', logo: '/images/clients/hypercom-usa.png', country: 'USA' },
  { name: 'Investit Ltd', logo: '/images/clients/investit-ltd-uk.png', country: 'UK' },
  { name: 'Iveco', logo: '/images/clients/iveco-italy.png', country: 'Italy' },
  { name: 'Kelly Services', logo: '/images/clients/kelly-services-usa.png', country: 'USA' },
  { name: 'Life Technologies', logo: '/images/clients/life-technologies-usa.png', country: 'USA' },
  { name: "Moody's Investors Services", logo: '/images/clients/moodys-investors-services-uk.png', country: 'UK' },
  { name: 'Netherlocks', logo: '/images/clients/netherlocks-netherlands.png', country: 'Netherlands' },
  { name: 'North Star', logo: '/images/clients/north-star-usa.png', country: 'USA' },
  { name: 'Oglaend Industries', logo: '/images/clients/oglaend-industries-norway.png', country: 'Norway' },
  { name: 'One Work JLT', logo: '/images/clients/one-work-jlt-italy.png', country: 'Italy' },
  { name: 'Partners Group', logo: '/images/clients/partners-group-uk.png', country: 'UK' },
  { name: 'Q-Railing', logo: '/images/clients/q-railing-usa.png', country: 'USA' },
  { name: 'Richard Mille', logo: '/images/clients/richard-mille-france.png', country: 'France' },
  { name: 'Service2Media', logo: '/images/clients/service2media-netherlands.png', country: 'Netherlands' },
  { name: 'Spectrum Brands', logo: '/images/clients/spectrum-brands-usa.png', country: 'USA' },
  { name: 'Stickman Design', logo: '/images/clients/stickman-design-australia.png', country: 'Australia' },
  { name: 'Tensator', logo: '/images/clients/tensator-uk.png', country: 'UK' },
  { name: 'Thermote & Vanhalst', logo: '/images/clients/thermote-vanhalst-belgium.png', country: 'Belgium' },
]

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Our Clients', href: `/${locale}/clients` },
  ]

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
              <Globe className="mr-1 h-3 w-3" />
              140+ Countries Worldwide
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Trusted by Leading Global Businesses
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              For over 37 years, we have been the trusted audit and advisory partner for
              international companies across diverse industries. From Fortune 500 corporations
              to innovative startups in the UAE, we deliver excellence in every engagement.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">28,000+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">140+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">37+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Our Distinguished Clients
            </h2>
            <p className="text-lg text-gray-600">
              We are proud to serve leading international organizations across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} - Audit Client`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/95 to-primary/90 p-3 text-center text-xs text-white transition-transform duration-300 group-hover:translate-y-0">
                  <div className="font-semibold">{client.name}</div>
                  <div className="text-white/90">{client.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Companies Trust Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Why Global Companies Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              We deliver more than compliance—we provide strategic value to every client
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Ministry Approved
              </h3>
              <p className="text-gray-600">
                Officially recognized and approved by UAE regulatory authorities to conduct
                statutory audits and compliance services
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Global Expertise
              </h3>
              <p className="text-gray-600">
                Experience serving multinational corporations with cross-border operations
                and complex international compliance requirements
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Industry Specialists
              </h3>
              <p className="text-gray-600">
                Deep sector knowledge across 15+ industries including technology, finance,
                manufacturing, real estate, and healthcare
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes and continuous professional development
                ensure the highest audit standards
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Strategic Insights
              </h3>
              <p className="text-gray-600">
                Beyond compliance, we provide actionable business intelligence to help
                clients optimize operations and drive growth
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Dedicated Teams
              </h3>
              <p className="text-gray-600">
                Multilingual professionals who understand local regulations and
                international business practices across diverse markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive audit and advisory services across all major sectors
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Technology & IT',
              'Financial Services',
              'Manufacturing',
              'Real Estate',
              'Healthcare',
              'Retail & E-commerce',
              'Hospitality',
              'Construction',
              'Transportation',
              'Professional Services',
              'Telecommunications',
              'Energy & Utilities',
              'Education',
              'Media & Entertainment',
              'Automotive',
              'Food & Beverage',
            ].map((industry) => (
              <div
                key={industry}
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-gradient-to-br from-primary/5 via-white to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Join Our Growing List of Satisfied Clients
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Whether you're a multinational corporation or a growing business in the UAE,
              we deliver the same level of excellence and dedication to every engagement.
              Let's discuss how we can support your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/services`}>Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
