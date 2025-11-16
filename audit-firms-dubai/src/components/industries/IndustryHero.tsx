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
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Industry-Specialized Auditors
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-6">
            {subheadline}
          </p>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              +971 42 500 251
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-600 rounded-full" />
              Ministry Approved
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-600 rounded-full" />
              Industry Specialists
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-600 rounded-full" />
              Fast Turnaround
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
