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
} from 'lucide-react'
import { QuickContactForm } from '@/components/forms/QuickContactForm'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Farahat & Co | Get Expert Audit Consultation | Dubai, UAE',
    description:
      'Contact Farahat & Co for professional audit services in Dubai, UAE. Call +971 4 250 0251 or email info@auditfirmsindubai.com. Free consultation available. Business Bay office.',
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
    openGraph: {
      title: 'Contact Farahat & Co | Professional Audit Services in Dubai',
      description:
        'Get in touch with UAE\'s leading audit firm. Call +971 4 250 0251 or visit our Business Bay office. Free consultation available.',
      type: 'website',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              <MessageSquare className="mr-1 h-3 w-3" />
              We're Here to Help
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
              Have questions about our audit services? Need a quote? Our team of certified
              professionals is ready to assist you with expert guidance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+97142500251">
                  <Phone className="mr-2 h-5 w-5" />
                  +971 4 250 0251
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="mailto:info@auditfirmsindubai.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
              <CardDescription>Speak with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+97142500251"
                className="text-lg font-semibold text-primary hover:underline"
              >
                +971 4 250 0251
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Sunday - Thursday
                <br />
                9:00 AM - 6:00 PM GST
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
              <CardDescription>Get a detailed response</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:info@auditfirmsindubai.com"
                className="break-all text-lg font-semibold text-primary hover:underline"
              >
                info@auditfirmsindubai.com
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                We respond within 24 hours
              </p>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
              <CardDescription>Our office location</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold text-gray-900">
                Business Bay
                <br />
                Dubai, UAE
              </p>
              <Button variant="link" className="mt-2 h-auto p-0" asChild>
                <a
                  href="https://maps.google.com/?q=Business+Bay+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Office Hours</CardTitle>
              <CardDescription>When we're available</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Sun - Thu:</span>
                  <span className="text-muted-foreground">9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Friday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <Card className="border-l-4 border-l-orange-500 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900">
                    <Phone className="h-5 w-5" />
                    Need Urgent Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-orange-800">
                    For urgent audit matters or time-sensitive inquiries, call us directly:
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <a href="tel:+97142500251">
                      <Phone className="mr-2 h-4 w-4" />
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
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Location</h2>
          <p className="text-lg text-gray-600">
            Visit our office in the heart of Dubai's business district
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <div className="aspect-video w-full bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14443.943941653708!2d55.25782!3d25.186111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85bf%3A0x7c7d8e3c769e0e49!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farahat & Co Office Location - Business Bay, Dubai"
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
              (Sunday to Thursday, 9:00 AM to 6:00 PM GST)
            </li>
            <li>
              <strong>Email:</strong> Send detailed inquiries to info@auditfirmsindubai.com - we
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

          <h3>Our Business Bay Office Location</h3>
          <p>
            Our office is strategically located in Business Bay, Dubai's premier commercial
            district. The location offers easy access via Sheikh Zayed Road and is well-served by
            Dubai Metro (Business Bay station). Free parking is available for clients visiting our
            office.
          </p>

          <h3>Service Areas</h3>
          <p>
            While our main office is in Business Bay, Dubai, we serve clients throughout the UAE
            including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We
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
              url: 'https://auditfirmsindubai.com',
              logo: 'https://auditfirmsindubai.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-4-250-0251',
                contactType: 'Customer Service',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              },
              email: 'info@auditfirmsindubai.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Business Bay',
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
