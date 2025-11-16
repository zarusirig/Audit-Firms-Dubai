import { Metadata } from 'next'
import { LOCATIONS } from '@/lib/content/locations'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
    title: 'Our Locations in Dubai - 5 Offices Across Dubai | Farahat & Co',
    description: 'Find our audit and accounting offices across Dubai. DIFC, Business Bay, Dubai Marina, JLT, Downtown Dubai. Ministry-approved auditors. Call +971 42 500 251',
    keywords: [
      'audit firm dubai locations',
      'auditors in dubai',
      'difc auditors',
      'business bay audit firm',
      'dubai marina auditors',
      'jlt accounting',
      'downtown dubai auditors',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/locations`,
      languages: {
        en: `${SITE_CONFIG.url}/en/locations`,
        ar: `${SITE_CONFIG.url}/ar/locations`,
      },
    },
  }
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Locations', href: `/${locale}/locations` },
  ]

  const locations = Object.values(LOCATIONS)

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              5 Offices Across Dubai
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Locations in Dubai
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Conveniently located offices across Dubai's major business districts.
              Choose the location nearest to you for personalized audit and
              accounting services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Any Office
              </Button>
              <Button size="lg" variant="outline">
                Find Nearest Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Card
                  key={location.slug}
                  className="hover:shadow-xl transition-shadow border-2 hover:border-primary-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{location.heroHeadline}</CardTitle>
                    <CardDescription>{location.heroSubheadline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{location.location.address}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <a
                          href={`tel:${location.location.phone.replace(/\s/g, '')}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {location.location.phone}
                        </a>
                      </div>

                      <div className="flex items-start gap-3 text-sm">
                        <Clock className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{location.location.hours}</span>
                      </div>

                      <div className="pt-4 border-t">
                        <Link href={`/${locale}/locations/${location.slug}`}>
                          <Button variant="outline" className="w-full group">
                            View Office Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving All of Dubai
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With strategic locations across Dubai's key business districts, we're
              never far from where you need us. Each office is staffed with
              experienced audit professionals ready to serve your business.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-700 font-medium">Office Locations</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-700 font-medium">Audit Professionals</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Office to Visit?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact our central team and we'll direct you to the most convenient
              location for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                +971 42 500 251
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
