'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar } from 'lucide-react'

interface ServiceHeroProps {
  headline: string
  subheadline: string
  painPoint: string
  usp: string
}

export function ServiceHero({
  headline,
  subheadline,
  painPoint,
  usp,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Ministry Approved Auditors
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
            {subheadline}
          </p>

          {/* Pain Point */}
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            {painPoint}
          </p>

          {/* USP */}
          <p className="text-base text-primary-700 font-medium mb-8">
            {usp}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="tel:+97142500251">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 42 500 251
              </a>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">28,058</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">37</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">140</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
