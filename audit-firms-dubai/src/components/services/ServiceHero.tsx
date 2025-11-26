'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Calendar } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

interface ServiceHeroProps {
  headline: string
  subheadline: string
  painPoint: string
  usp: string
  image?: string
}

export function ServiceHero({
  headline,
  subheadline,
  painPoint,
  usp,
  image,
}: ServiceHeroProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 text-white">
      {/* Background Image or Gradient */}
      {image ? (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={image}
            alt="Background"
            fill
            className="w-full h-full object-cover object-center"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-primary-900/20 to-primary-900/60" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
          {/* Background Pattern & Blobs - Only if no image */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />
        </>
      )}

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
            </span>
            Ministry Approved Auditors
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-lg">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary-400 font-semibold mb-6 drop-shadow-md">
            {subheadline}
          </p>

          {/* Pain Point */}
          <p className="text-lg text-primary-100 mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {painPoint}
          </p>

          {/* USP */}
          <p className="text-base text-white/90 font-medium mb-8 bg-white/10 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
            {usp}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold h-14 px-8 shadow-lg shadow-secondary-500/20">
              <Calendar className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900 h-14 px-8 backdrop-blur-sm bg-white/5"
              asChild
            >
              <a href="tel:+97142500251">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 4 250 0251
              </a>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">28,058</div>
                <div className="text-sm text-primary-200">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">37</div>
                <div className="text-sm text-primary-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">140</div>
                <div className="text-sm text-primary-200">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-primary-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
