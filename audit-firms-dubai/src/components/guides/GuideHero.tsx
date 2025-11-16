'use client'

import { Clock, Calendar, User, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GuideHeroProps {
  headline: string
  subheadline: string
  description: string
  readTime: string
  publishDate: string
  lastUpdated: string
  author: string
}

export function GuideHero({
  headline,
  subheadline,
  description,
  readTime,
  publishDate,
  lastUpdated,
  author,
}: GuideHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Comprehensive Guide
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-primary-100 font-semibold mb-6">
            {subheadline}
          </p>

          <p className="text-lg text-white/90 mb-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated: {new Date(lastUpdated).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="gap-2">
            <Download className="h-5 w-5" />
            Download PDF Version
          </Button>
        </div>
      </div>
    </section>
  )
}
