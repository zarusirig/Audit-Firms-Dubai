import { Suspense } from 'react'
import type { Metadata } from 'next'
import { CheckCircle, Mail, Phone, Calendar, ArrowRight, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/constants'
import type { Locale } from '@/lib/i18n/config'

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Thank You | Farahat & Co',
    description: 'Thank you for contacting Farahat & Co. We will get back to you shortly.',
    robots: {
      index: false, // No need to index thank you pages
      follow: true,
    },
  }
}

// Thank You Page Component
export default async function ThankYouPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const type = resolvedSearchParams.type as string | undefined
  const submissionId = resolvedSearchParams.id as string | undefined

  // Determine message based on type
  const getContent = () => {
    switch (type) {
      case 'quote':
        return {
          title: 'Quote Request Received!',
          subtitle: 'Thank you for requesting a quote from Farahat & Co',
          message: 'Our audit specialists will review your requirements and send you a detailed proposal within 24 hours.',
          icon: CheckCircle,
        }
      case 'contact':
        return {
          title: 'Message Received!',
          subtitle: 'Thank you for contacting us',
          message: 'We have received your message and will respond within 24 hours.',
          icon: Mail,
        }
      case 'calculator':
        return {
          title: 'Estimate Saved!',
          subtitle: 'Your audit fee estimate has been saved',
          message: 'We will contact you shortly to provide a detailed quote based on your requirements.',
          icon: Download,
        }
      default:
        return {
          title: 'Thank You!',
          subtitle: 'We appreciate you reaching out',
          message: 'Our team will be in touch with you soon.',
          icon: CheckCircle,
        }
    }
  }

  const content = getContent()
  const Icon = content.icon

  return (
    <Suspense fallback={null}>
      {/* Conversion Tracking Script - will fire once page loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics Conversion Tracking
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                'value': 1.0,
                'currency': 'AED',
                'transaction_id': '${submissionId || 'unknown'}'
              });
            }

            // Facebook Pixel Conversion Tracking
            if (typeof fbq !== 'undefined') {
              fbq('track', 'Lead', {
                content_name: '${type || 'general'}',
                content_category: 'form_submission'
              });
            }
          `,
        }}
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Message Card */}
            <Card className="border-2 border-primary shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-green-600" />
                  </div>
                </div>

                <CardTitle className="text-3xl sm:text-4xl font-bold mb-2">
                  {content.title}
                </CardTitle>

                <CardDescription className="text-lg">
                  {content.subtitle}
                </CardDescription>

                {submissionId && (
                  <div className="mt-4">
                    <Badge variant="secondary" className="text-sm px-4 py-1">
                      Reference ID: {submissionId}
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground text-lg">
                  {content.message}
                </p>

                {/* What Happens Next */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    What Happens Next?
                  </h3>

                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-semibold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Review</p>
                        <p className="text-sm text-muted-foreground">
                          Our specialists will carefully review your {type === 'quote' ? 'quote request' : 'message'}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-semibold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-muted-foreground">
                          We'll reach out within 24 hours (usually much sooner)
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-semibold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Consultation</p>
                        <p className="text-sm text-muted-foreground">
                          {type === 'quote' ? "We'll provide a detailed proposal and discuss your requirements" : "We'll address your inquiry and provide expert guidance"}
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg border">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Need immediate assistance?</p>
                      <a
                        href="tel:+97142500251"
                        className="text-primary hover:underline font-semibold"
                      >
                        +971 42 500 251
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email us directly</p>
                      <a
                        href="mailto:info@farahatco.com"
                        className="text-primary hover:underline font-semibold text-sm"
                      >
                        info@farahatco.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <Button asChild size="lg" className="flex-1">
                    <a href={`/${resolvedParams.locale}`}>
                      Return to Homepage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <a href={`/${resolvedParams.locale}/calculator`}>
                      Calculate Audit Fees
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ministry Approved</li>
                    <li>• 37 Years Experience</li>
                    <li>• 28,000+ Clients</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• External Audit</li>
                    <li>• Internal Audit</li>
                    <li>• Due Diligence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href={`/${resolvedParams.locale}/about`} className="text-primary hover:underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href={`/${resolvedParams.locale}/services`} className="text-primary hover:underline">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href={`/${resolvedParams.locale}/contact`} className="text-primary hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  )
}
