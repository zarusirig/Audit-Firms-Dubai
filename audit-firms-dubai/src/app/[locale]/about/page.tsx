/**
 * About Us Page
 * Company history, team, certifications, and values
 * SEO-optimized with rich schema markup
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ArrowRight, Award, Users, Globe, Shield, CheckCircle2 } from 'lucide-react'
import {
  CompanyTimeline,
  TeamGrid,
  CertificationsShowcase,
  AwardsShowcase,
  ValuesSection,
  IndustryExpertise,
  AboutStatistics,
} from '@/components/about'
import {
  COMPANY_TIMELINE,
  LEADERSHIP_TEAM,
  SENIOR_TEAM,
  CERTIFICATIONS,
  AWARDS,
  COMPANY_VALUES,
  INDUSTRY_EXPERTISE,
  WHY_CHOOSE_FARAHAT,
  PARENT_COMPANY_SERVICES,
} from '@/lib/data/about'

export const metadata: Metadata = {
  title: 'About Farahat & Co | Ministry-Approved Audit Firm Since 1985 | Dubai, UAE',
  description:
    'Learn about Farahat & Co - Established 1985 with 37+ years of audit excellence. Serving 28,000+ clients across 140 countries. Ministry-approved auditors with 150+ CPA/CA certified professionals in Dubai, UAE.',
  keywords: [
    'about farahat co',
    'audit firm dubai',
    'established 1985',
    'ministry approved auditors',
    'dubai audit company history',
    'certified auditors uae',
    'audit team dubai',
    'audit firm certifications',
    'professional audit services',
    'uae audit experience',
    'audit firm awards dubai',
    'trusted auditors uae',
  ],
  openGraph: {
    title: 'About Farahat & Co | 37+ Years of Audit Excellence in Dubai',
    description:
      '28,000+ clients served across 140 countries. Ministry-approved with 150+ certified professionals. Established 1985.',
    type: 'website',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Farahat & Co - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Farahat & Co | Ministry-Approved Auditors Since 1985',
    description:
      '37+ years of excellence. 28,000+ clients. 140 countries. Leading audit firm in Dubai, UAE.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 px-4 py-20 text-white md:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Award className="h-4 w-4 text-secondary-400" />
              Established 1985 - 37+ Years of Excellence
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              About <span className="text-secondary-400">Farahat & Co</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-100 md:text-xl leading-relaxed">
              A legacy of trust and professional excellence in audit and assurance services.
              Ministry-approved auditors serving the UAE business community since 1985.
            </p>

            {/* Quick Stats */}
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-white group-hover:text-secondary-400 transition-colors">37+</div>
                <div className="text-sm font-medium text-primary-200">Years Experience</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-white group-hover:text-secondary-400 transition-colors">28K+</div>
                <div className="text-sm font-medium text-primary-200">Clients Served</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-white group-hover:text-secondary-400 transition-colors">140</div>
                <div className="text-sm font-medium text-primary-200">Countries</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-white group-hover:text-secondary-400 transition-colors">150+</div>
                <div className="text-sm font-medium text-primary-200">Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Story</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in <strong>1985</strong> in Dubai, <strong>Farahat & Co</strong> has grown
                from a small accounting practice to become one of the UAE&apos;s most trusted and
                respected audit firms. For over three and a half decades, we have been at the
                forefront of the UAE&apos;s remarkable economic transformation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                What started as a vision to provide world-class auditing services to the UAE
                business community has evolved into a comprehensive professional services firm
                serving <strong>28,000+ clients</strong> across <strong>140 countries</strong>.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our parent organization, <strong>FAR-Farhat Office & Co.</strong>, established the
                foundation for excellence that continues to define our work today. We combine
                decades of local market expertise with international best practices to deliver
                audit services that meet the highest professional standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 group-hover:bg-primary-600 transition-colors duration-300">
                <Shield className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Ministry Approved</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Licensed by UAE Ministry of Economy since 1990
              </p>
            </div>
            <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 group-hover:bg-primary-600 transition-colors duration-300">
                <Award className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-primary-700 transition-colors">112+ Awards</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recognition for professional excellence and innovation
              </p>
            </div>
            <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 group-hover:bg-primary-600 transition-colors duration-300">
                <Users className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-primary-700 transition-colors">95% Certified</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Team holds CPA, CA, ACCA, CIA, and CFE certifications
              </p>
            </div>
            <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-100">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 group-hover:bg-primary-600 transition-colors duration-300">
                <Globe className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-primary-700 transition-colors">International</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Serving clients across 140 countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Track Record
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Numbers that demonstrate our commitment to excellence and client satisfaction
            </p>
          </div>
          <AboutStatistics statistics={WHY_CHOOSE_FARAHAT} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Journey Through the Years
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Four decades of growth, innovation, and service to the UAE business community
          </p>
        </div>
        <CompanyTimeline events={COMPANY_TIMELINE} className="mt-12" />
      </section>

      {/* Leadership Team Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Leadership Team</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Industry-leading professionals with decades of combined audit experience
            </p>
          </div>
          <TeamGrid members={LEADERSHIP_TEAM} variant="leadership" />
        </div>
      </section>

      {/* Senior Team Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            Senior Team
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Senior Professionals
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Experienced managers and specialists dedicated to delivering excellence
          </p>
        </div>
        <TeamGrid members={SENIOR_TEAM} variant="senior" />
      </section>

      {/* Company Values Section */}
      <section className="bg-gradient-to-br from-primary/5 to-white px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide every engagement and define our professional approach
            </p>
          </div>
          <ValuesSection values={COMPANY_VALUES} />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Certifications & Accreditations</Badge>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Official Approvals & Memberships
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Recognized and approved by UAE regulatory authorities and international professional
            bodies
          </p>
        </div>
        <CertificationsShowcase certifications={CERTIFICATIONS} />
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Recognition & Awards</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Achievements
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Industry recognition for excellence, innovation, and outstanding client service
            </p>
          </div>
          <AwardsShowcase awards={AWARDS} />
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            Industry Expertise
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Specialized Industry Knowledge
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Deep sector-specific experience across diverse industries
          </p>
        </div>
        <IndustryExpertise industries={INDUSTRY_EXPERTISE} />
      </section>

      {/* Parent Company Services */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4">FAR Consulting Middle East</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Complete Business Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Beyond audit services, our parent company offers comprehensive business setup and
              support services across the UAE
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PARENT_COMPANY_SERVICES.map((service, index) => (
              <div
                key={service.category}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900">{service.category}</h3>
                <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-gray-600">
              Visit our parent company for company formation and business setup services
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://farconsultingme.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit FAR Consulting Middle East
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-20 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Work With Us?</h2>
          <p className="mb-8 text-lg text-white/90">
            Join 28,000+ satisfied clients who trust Farahat & Co for their audit and assurance
            needs
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+97142500251">
                <Phone className="mr-2 h-5 w-5" />
                +971 4 250 0251
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Phone className="mb-2 h-6 w-6" />
              <p className="text-sm text-white/80">Call Us</p>
              <a
                href="tel:+97142500251"
                className="font-semibold hover:underline"
              >
                +971 4 250 0251
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="mb-2 h-6 w-6" />
              <p className="text-sm text-white/80">Email Us</p>
              <a
                href="mailto:info@auditfirmsdubai.ae"
                className="font-semibold hover:underline"
              >
                info@auditfirmsdubai.ae
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="mb-2 h-6 w-6" />
              <p className="text-sm text-white/80">Visit Us</p>
              <p className="font-semibold">Business Bay, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-gray max-w-none">
          <h2>About Farahat & Co - Leading Audit Firm in Dubai, UAE</h2>
          <p>
            Farahat & Co, a division of FAR-Farhat Office & Co., is one of the most established and
            trusted audit firms in the United Arab Emirates. Since our foundation in 1985, we have
            been providing exceptional audit, assurance, and advisory services to businesses across
            Dubai, Abu Dhabi, and the Northern Emirates.
          </p>

          <h3>Our Heritage and Legacy</h3>
          <p>
            With over 37 years of professional excellence, Farahat & Co has witnessed and
            contributed to the UAE&apos;s transformation into a global business hub. Our journey began
            in 1985 when our founder, Mr. Farahat, established the firm with a vision to deliver
            world-class auditing services that meet international standards while understanding the
            unique needs of businesses operating in the UAE.
          </p>
          <p>
            Today, we are proud to have served over 28,000 clients across 140 countries, making us
            one of the most experienced international audit firms with local UAE expertise. Our
            client portfolio spans from small and medium enterprises to large multinational
            corporations, free zone companies, and government entities.
          </p>

          <h3>Ministry Approval and Regulatory Recognition</h3>
          <p>
            Farahat & Co is fully licensed and approved by the UAE Ministry of Economy as registered
            auditors. We hold authorizations from all major regulatory bodies and free zones in the
            UAE, including:
          </p>
          <ul>
            <li>Dubai Financial Services Authority (DFSA)</li>
            <li>Abu Dhabi Global Market (ADGM)</li>
            <li>Dubai Multi Commodities Centre (DMCC)</li>
            <li>Dubai International Financial Centre (DIFC)</li>
            <li>Jebel Ali Free Zone (JAFZA)</li>
          </ul>

          <h3>Our Team of Certified Professionals</h3>
          <p>
            Our strength lies in our team of 150+ highly qualified professionals, with 95% holding
            international certifications including Certified Public Accountants (CPA), Chartered
            Accountants (CA), Association of Chartered Certified Accountants (ACCA), Certified
            Internal Auditors (CIA), and Certified Fraud Examiners (CFE).
          </p>
          <p>
            Led by seasoned partners with decades of experience, our team brings together technical
            expertise, industry knowledge, and a deep understanding of UAE regulations to deliver
            audit services that add value beyond compliance.
          </p>

          <h3>Services Beyond Auditing</h3>
          <p>
            While auditing remains our core competency, Farahat & Co offers a comprehensive suite
            of professional services including forensic audit, internal audit, due diligence, VAT
            advisory, corporate tax planning, and financial consulting. Our parent company, FAR
            Consulting Middle East, provides complete business setup and corporate services across
            the UAE.
          </p>

          <h3>Commitment to Excellence</h3>
          <p>
            Our commitment to professional excellence has been recognized through 112+ industry
            awards for audit quality, client service, innovation, and contribution to the
            accounting profession. We maintain the highest quality control standards and invest
            significantly in continuous professional development, training, and technology to ensure
            our team delivers world-class service.
          </p>
          <p>
            With a 98% client satisfaction rate and thousands of long-term client relationships
            spanning decades, Farahat & Co continues to set the standard for audit excellence in
            the UAE.
          </p>
        </div>
      </section>
    </div>
  )
}
