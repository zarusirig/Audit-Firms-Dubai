/**
 * Contact Page
 * Get in touch with Farahat & Co - Contact information and inquiry form
 * SEO-optimized with rich contact information and schema markup
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OFFICE_LOCATIONS, SITE_CONFIG } from '@/lib/constants'
import { Locale } from '@/lib/i18n/config'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Globe,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { QuickContactForm } from '@/components/forms/QuickContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: 'Contact Farahat & Co | Get Expert Audit Consultation | Dubai, UAE',
    description:
      'Contact Farahat & Co for professional audit services in Dubai, UAE. Call +971 4 250 0251 or email info@auditfirmsdubai.ae. Free consultation available. Business Bay office.',
    keywords: [
      'contact audit firm dubai',
      'farahat co contact',
      'audit consultation dubai',
      'audit firm phone number',
      'audit services inquiry',
      'dubai auditor contact',
      'business bay audit firm',
      'free audit consultation',
      'audit quote request',
      'contact certified auditors uae',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/contact`,
      languages: {
        en: `${SITE_CONFIG.url}/en/contact`,
        ar: `${SITE_CONFIG.url}/ar/contact`,
      },
    },
    openGraph: {
      title: 'Contact Farahat & Co | Professional Audit Services in Dubai',
      description:
        'Get in touch with UAE\'s leading audit firm. Call +971 4 250 0251 or visit our Business Bay office. Free consultation available.',
      type: 'website',
      url: `${SITE_CONFIG.url}/${locale}/contact`,
      locale: locale,
      images: [
        {
          url: '/og-contact.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Farahat & Co',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Farahat & Co | Audit Firm in Dubai',
      description:
        'Professional audit consultation. Call +971 4 250 0251 or email us today.',
    },
  }
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export default async function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 px-4 py-20 text-white md:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <MessageSquare className="h-4 w-4 text-secondary-400" />
              We're Here to Help
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Get in <span className="text-secondary-400">Touch</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-100 md:text-xl leading-relaxed">
              Have questions about our audit services? Need a quote? Our team of certified
              professionals is ready to assist you with expert guidance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold h-14 px-8" asChild>
                <a href="tel:+97142500251">
                  <Phone className="mr-2 h-5 w-5" />
                  +971 4 250 0251
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-900 h-14 px-8"
                asChild
              >
                <a href="mailto:info@auditfirmsdubai.ae">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {OFFICE_LOCATIONS.map((office) => (
            <Card key={office.id} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 group-hover:bg-primary-600 transition-colors duration-300">
                  <MapPin className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{office.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {office.id === 'dubai' ? 'Head Office' : 'Branch Office'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1 shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>

                {office.whatsapp && (
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-green-600 shrink-0" />
                    <a
                      href={`https://wa.me/${office.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                    >
                      WhatsApp: {office.whatsapp}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-600 shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {office.email}
                  </a>
                </div>

                {office.emailConsultation && (
                   <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary-600 shrink-0" />
                    <a
                      href={`mailto:${office.emailConsultation}`}
                      className="text-sm font-semibold text-gray-900 hover:text-secondary-600 transition-colors"
                    >
                      Consultation: {office.emailConsultation}
                    </a>
                  </div>
                )}

                {office.hours && (
                  <div className="flex items-start gap-3 border-t pt-4 mt-4">
                    <Clock className="h-5 w-5 text-primary-600 mt-1 shrink-0" />
                    <p className="text-sm text-gray-600">{office.hours}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <QuickContactForm variant="default" showTitle={false} showDescription={false} />
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        Ministry Approved Auditors
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fully licensed and approved by UAE Ministry of Economy since 1990
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        37+ Years of Excellence
                      </h4>
                      <p className="text-sm text-gray-600">
                        Serving 28,000+ clients across 140 countries since 1985
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">Fast Response Time</h4>
                      <p className="text-sm text-gray-600">
                        We respond to all inquiries within 24 hours, guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>
                    Looking for something specific?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/services/external-audit">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      External Audit Services
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/pricing">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View Pricing & Packages
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/about">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      About Our Firm
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/resources/faq">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Frequently Asked Questions
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-l-4 border-l-orange-500 bg-orange-50 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900 text-xl">
                    <Phone className="h-6 w-6 animate-pulse" />
                    Need Urgent Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-base text-orange-800 font-medium">
                    For urgent audit matters or time-sensitive inquiries, call us directly:
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg h-12 shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="tel:+97142500251">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: +971 4 250 0251
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 font-serif">Our Head Office Location</h2>
          <p className="text-lg text-gray-600">
            Visit us at our main office in Rigga Road, Dubai
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl bg-white p-2">
          <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.685686632145!2d55.31532201501056!3d25.26432698386526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccd76075061%3A0x89b2b94870189189!2sIbis%20Hotel%20-%20Al%20Rigga!5e0!3m2!1sen!2sae!4v1631234567890!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farahat & Co Head Office - Rigga Road, Dubai"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Common Questions</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How quickly can you respond to my inquiry?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We guarantee a response within 24 hours for all inquiries submitted through our
                  contact form or email. For urgent matters, we recommend calling our office
                  directly at +971 4 250 0251 during business hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer free consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer a complimentary initial consultation to understand your audit
                  requirements and provide preliminary guidance. This helps us prepare an accurate
                  quote and timeline for your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What information should I prepare?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To help us serve you better, please have your company details, industry type,
                  financial year-end, and any specific audit requirements ready. If you're
                  switching auditors, information about your previous audit would be helpful.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I visit your office without an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While walk-ins are welcome, we highly recommend scheduling an appointment to
                  ensure one of our senior auditors is available to give you their full attention
                  and discuss your requirements in detail.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-600">Still have questions?</p>
            <Button size="lg" asChild>
              <Link href="/resources/faq">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-gray max-w-none">
          <h2>Contact Farahat & Co - Leading Audit Firm in Dubai</h2>
          <p>
            Getting in touch with Farahat & Co is easy. Whether you need a comprehensive external
            audit, specialized forensic investigation, or expert advisory services, our team of
            certified professionals is ready to assist you.
          </p>

          <h3>Multiple Ways to Reach Us</h3>
          <p>
            We understand that different clients prefer different communication channels. That's
            why we offer multiple convenient ways to contact our team:
          </p>
          <ul>
            <li>
              <strong>Phone:</strong> Call us directly at +971 4 250 0251 during business hours
              (9AM - 7PM GMT+4 - Monday to Friday)
            </li>
            <li>
              <strong>Email:</strong> Send detailed inquiries to info@auditfirmsdubai.ae - we
              respond within 24 hours
            </li>
            <li>
              <strong>Office Visit:</strong> Visit our Business Bay office in Dubai - please
              schedule an appointment for personalized attention
            </li>
            <li>
              <strong>Online Form:</strong> Fill out our quick contact form above for a prompt
              response from our team
            </li>
          </ul>

          <h3>What to Expect When You Contact Us</h3>
          <p>
            When you reach out to Farahat & Co, you'll experience our commitment to professional
            service excellence:
          </p>
          <ul>
            <li>
              <strong>Prompt Response:</strong> All inquiries are acknowledged within 24 hours
            </li>
            <li>
              <strong>Expert Consultation:</strong> You'll speak with qualified audit
              professionals, not sales representatives
            </li>
            <li>
              <strong>Tailored Solutions:</strong> We take time to understand your specific
              requirements and industry challenges
            </li>
            <li>
              <strong>Transparent Pricing:</strong> Clear, detailed quotes with no hidden fees
            </li>
            <li>
              <strong>Confidentiality:</strong> All communications are treated with strict
              professional confidentiality
            </li>
          </ul>

          <h3>Our Dubai Head Office Location</h3>
          <p>
            Our head office is strategically located in the IBIS Hotel Building on Rigga Road, Dubai.
            This central location offers easy access for our clients.
          </p>

          <h3>Service Areas</h3>
          <p>
            With offices in Dubai, Abu Dhabi, and Sharjah, we serve clients throughout the UAE
            including Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We
            also provide audit services to companies in Dubai's various free zones including DIFC,
            DMCC, JAFZA, and others.
          </p>

          <h3>Emergency and Urgent Audit Services</h3>
          <p>
            If you have an urgent audit requirement, regulatory deadline, or time-sensitive
            compliance matter, please call us directly at +971 4 250 0251. Our team can mobilize
            quickly to meet critical deadlines and urgent audit needs.
          </p>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Farahat & Co',
              url: 'https://auditfirmsdubai.ae',
              logo: 'https://auditfirmsdubai.ae/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-4-250-0251',
                contactType: 'Customer Service',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
              },
              email: 'info@auditfirmsdubai.ae',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'IBIS Hotel Building Office Entrance 5th Floor, Office No.: 5001, Rigga Road',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
            },
          }),
        }}
      />
    </div>
  )
}
