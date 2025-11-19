import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import {
  Building2,
  Globe,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Briefcase,
  LayoutGrid,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
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

  // Get translations
  const dict = await getDictionary(locale)

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Our Clients', href: `/${locale}/clients` },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section - Improved Design */}
      <section className="relative overflow-hidden bg-primary-950 py-20 text-white md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/20 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-8">
              <Globe className="h-4 w-4 text-secondary-400" />
              <span className="text-primary-100">Serving Clients Across 140+ Countries</span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
              Trusted by Leading <br />
              <span className="text-secondary-400">Global Businesses</span>
            </h1>
            
            <p className="mb-10 text-xl text-primary-100 md:text-2xl max-w-3xl mx-auto leading-relaxed">
              For over 37 years, we have been the audit and advisory partner of choice for 
              Fortune 500 corporations and innovative startups alike.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 border-t border-white/10 pt-10">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">28k+</div>
                <div className="text-sm text-primary-300">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">140+</div>
                <div className="text-sm text-primary-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">15+</div>
                <div className="text-sm text-primary-300">Industries</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">37+</div>
                <div className="text-sm text-primary-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Enhanced Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Our Distinguished Clients
            </h2>
            <div className="h-1 w-20 bg-secondary-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">
              We are proud to serve a diverse portfolio of leading international organizations, 
              delivering excellence and strategic value in every engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-md"
              >
                <div className="relative h-16 w-full mb-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} - Audit Client`}
                    fill
                    className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {client.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                    {client.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Companies Trust Us - New Card Design */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Why Global Companies Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              We deliver more than just compliance—we provide strategic value that empowers your business growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'Ministry Approved',
                description: 'Officially recognized by UAE regulatory authorities for statutory audits and compliance services.',
              },
              {
                icon: Globe,
                title: 'Global Expertise',
                description: 'Deep experience serving multinational corporations with cross-border operations and complex requirements.',
              },
              {
                icon: Building2,
                title: 'Industry Specialists',
                description: 'Specialized knowledge across 15+ sectors including finance, real estate, and technology.',
              },
              {
                icon: ShieldCheck,
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes ensuring the highest international audit standards.',
              },
              {
                icon: TrendingUp,
                title: 'Strategic Insights',
                description: 'Actionable business intelligence to optimize operations and drive sustainable growth.',
              },
              {
                icon: Users,
                title: 'Dedicated Teams',
                description: 'Multilingual professionals understanding local regulations and international best practices.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Icon Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit and advisory services tailored to the unique challenges of each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { name: 'Technology & IT', icon: Zap },
              { name: 'Financial Services', icon: TrendingUp },
              { name: 'Manufacturing', icon: Building2 },
              { name: 'Real Estate', icon: Building2 },
              { name: 'Healthcare', icon: ShieldCheck },
              { name: 'Retail & E-commerce', icon: Briefcase },
              { name: 'Hospitality', icon: Building2 },
              { name: 'Construction', icon: LayoutGrid },
              { name: 'Transportation', icon: Globe },
              { name: 'Professional Services', icon: Users },
              { name: 'Telecommunications', icon: Phone },
              { name: 'Energy & Utilities', icon: Zap },
              { name: 'Education', icon: Award },
              { name: 'Media', icon: MessageSquare },
              { name: 'Automotive', icon: Settings },
              { name: 'Food & Beverage', icon: Coffee },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 p-6 text-center transition-all hover:border-primary-100 hover:bg-white hover:shadow-sm"
              >
                {/* Note: Some icons might be repetitive as we don't have specific icons for all industries in the import list yet, but this structure is better */}
                <span className="mb-3 font-medium text-gray-700 group-hover:text-primary-700">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection dict={dict} />

      {/* CTA Section - Improved */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">
              Ready to Join Our Success Story?
            </h2>
            <p className="mb-10 text-xl text-primary-100 leading-relaxed">
              Whether you're a multinational corporation or a growing business in the UAE,
              we deliver the same level of excellence. Let's discuss how we can support your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold h-14 px-8 text-lg">
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900 h-14 px-8 text-lg bg-transparent">
                <Link href={`/${locale}/services`}>
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper icons for the industry map
function Settings(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function Coffee(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  )
}
