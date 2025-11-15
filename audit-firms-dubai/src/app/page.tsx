import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { COMPANY_STATS, SERVICES, SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <Badge variant="secondary" className="mb-6">
              Ministry of Economy Approved • Est. 1985
            </Badge>

            {/* Headline */}
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-neutral-900 lg:text-6xl">
              Dubai's Most Trusted
              <span className="text-primary-600"> Audit Firm</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-neutral-600 lg:text-xl">
              Professional audit and assurance services for UAE businesses.
              Ministry approved, IFRS experts, serving 28,000+ clients across 140 countries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary-600">
                {COMPANY_STATS.clientsServed.toLocaleString()}+
              </div>
              <div className="text-sm text-neutral-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary-600">
                {COMPANY_STATS.yearsExperience}
              </div>
              <div className="text-sm text-neutral-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary-600">
                {COMPANY_STATS.countriesServed}+
              </div>
              <div className="text-sm text-neutral-600">Countries Worldwide</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary-600">
                {COMPANY_STATS.satisfactionRate}%
              </div>
              <div className="text-sm text-neutral-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-neutral-900 lg:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              Comprehensive audit and assurance services tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-neutral-900 lg:text-4xl">
                Why Choose Elite Audit Dubai?
              </h2>
              <div className="space-y-4">
                {[
                  "Ministry of Economy approved audit firm",
                  "37+ years of professional experience",
                  "IFRS and ISA compliance experts",
                  "Serving 140+ countries worldwide",
                  "Fast turnaround time (7-10 days)",
                  "Dedicated relationship manager",
                  "Transparent pricing with no hidden costs",
                  "100% confidentiality guaranteed",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary-600" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <Card className="w-full max-w-md border-2 border-primary-200 bg-primary-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Schedule a free consultation with our audit experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link href="/resources/tools/calculator">Calculate Audit Fees</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
