'use client'

/**
 * Awards Showcase Component
 * Display company awards and recognition
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface AwardItem {
  year: string
  award: string
  organization: string
  description: string
  category: string
}

interface AwardsShowcaseProps {
  awards: readonly AwardItem[]
  className?: string
}

export default function AwardsShowcase({ awards, className = '' }: AwardsShowcaseProps) {
  const categoryIcons: Record<string, typeof Trophy> = {
    Excellence: Trophy,
    Service: Star,
    Innovation: Award,
    Tax: Medal,
    'Industry Ranking': Trophy,
    'Social Impact': Star,
    'Specialized Service': Award,
  }

  // Group awards by year
  const awardsByYear = awards.reduce(
    (acc, award) => {
      if (!acc[award.year]) {
        acc[award.year] = []
      }
      acc[award.year].push(award)
      return acc
    },
    {} as Record<string, AwardItem[]>
  )

  const years = Object.keys(awardsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className={className}>
      <div className="space-y-8">
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
          >
            {/* Year Header */}
            <div className="mb-4 flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-2xl font-bold text-white">
                  {year.substring(2)}
                </div>
              </div>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
            </div>

            {/* Awards for this year */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {awardsByYear[year].map((award, index) => {
                const Icon = categoryIcons[award.category] || Trophy

                return (
                  <motion.div
                    key={`${year}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    {/* Category Badge */}
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-gold/10 text-gold"
                    >
                      <Icon className="mr-1 h-3 w-3" />
                      {award.category}
                    </Badge>

                    {/* Award Name */}
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{award.award}</h3>

                    {/* Organization */}
                    <p className="mb-3 text-sm font-medium text-primary">{award.organization}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-600">{award.description}</p>

                    {/* Decoration */}
                    <div className="absolute -right-4 -top-4 h-24 w-24 opacity-5">
                      <Trophy className="h-full w-full text-gold" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
