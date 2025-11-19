'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface IndustryHeroProps {
  headline: string
  subheadline: string
  description: string
}

export function IndustryHero({ headline, subheadline, description }: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white md:py-24">
      {/* Background Pattern & Blobs */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm mb-6">
            Industry-Specialized Auditors
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-secondary-400 font-semibold mb-6">
            {subheadline}
          </p>

          <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-secondary-500 text-primary-900 hover:bg-secondary-600 font-bold h-14 px-8">
              <Phone className="mr-2 h-5 w-5" />
              +971 42 500 251
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary-900 h-14 px-8">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center text-sm text-primary-200 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
              Ministry Approved
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
              Industry Specialists
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
              Fast Turnaround
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
