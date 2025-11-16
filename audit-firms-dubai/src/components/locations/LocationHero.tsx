'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface LocationHeroProps {
  headline: string
  subheadline: string
  description: string
  address: string
  phone: string
  hours: string
}

export function LocationHero({
  headline,
  subheadline,
  description,
  address,
  phone,
  hours,
}: LocationHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                Office Location
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {headline}
              </h1>

              <p className="text-xl text-gray-700 font-medium mb-4">
                {subheadline}
              </p>

              <p className="text-lg text-gray-600 mb-8">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Office Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Address
                    </div>
                    <div className="text-gray-900">{address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Office Hours
                    </div>
                    <div className="text-gray-900">{hours}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button className="w-full" size="lg">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
