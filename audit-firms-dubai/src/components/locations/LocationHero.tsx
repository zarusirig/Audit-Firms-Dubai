'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

interface LocationHeroProps {
  headline: string
  subheadline: string
  description: string
  address: string
  phone: string
  hours: string
  image?: string
}

export function LocationHero({
  headline,
  subheadline,
  description,
  address,
  phone,
  hours,
  image,
}: LocationHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 overflow-hidden text-white">
       {/* Background Image */}
       {image ? (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={image}
            alt={headline}
            fill
            className="w-full h-full object-cover object-center"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-primary-900/20 to-primary-900/60" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-secondary-400" />
                Office Location
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                {headline}
              </h1>

              <p className="text-xl text-secondary-400 font-medium mb-4">
                {subheadline}
              </p>

              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Office Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                    <MapPin className="h-6 w-6 text-secondary-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-200 mb-1">
                      Address
                    </div>
                    <div className="text-white font-medium">{address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                    <Phone className="h-6 w-6 text-secondary-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-200 mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-white hover:text-secondary-400 font-bold text-lg transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                    <Clock className="h-6 w-6 text-secondary-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-200 mb-1">
                      Office Hours
                    </div>
                    <div className="text-white">{hours}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Button className="w-full bg-white text-primary-900 hover:bg-primary-50 font-bold" size="lg">
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
