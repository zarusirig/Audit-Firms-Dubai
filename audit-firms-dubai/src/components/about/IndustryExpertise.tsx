'use client'

/**
 * Industry Expertise Component
 * Showcase industry-specific experience and expertise
 */

import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Industry {
  industry: string
  experience: string
  clients: string
  services: readonly string[]
  icon: string
}

interface IndustryExpertiseProps {
  industries: readonly Industry[]
  className?: string
}

export default function IndustryExpertise({ industries, className = '' }: IndustryExpertiseProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {industries.map((industry, index) => {
        const Icon = (LucideIcons[industry.icon as keyof typeof LucideIcons] ||
          LucideIcons.Briefcase) as React.ComponentType<{ className?: string }>

        return (
          <motion.div
            key={industry.industry}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
          >
            {/* Icon */}
            <div className="mb-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </div>

            {/* Industry Name */}
            <h3 className="mb-3 text-lg font-bold text-gray-900">{industry.industry}</h3>

            {/* Stats */}
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {industry.experience}
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {industry.clients} clients
              </Badge>
            </div>

            {/* Services */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Specialized Services:
              </p>
              <ul className="space-y-1.5">
                {industry.services.map((service, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/50 translate-y-1 transition-transform duration-300 group-hover:translate-y-0" />
          </motion.div>
        )
      })}
    </div>
  )
}
