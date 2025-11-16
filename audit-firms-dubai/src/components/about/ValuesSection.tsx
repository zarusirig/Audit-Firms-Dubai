'use client'

/**
 * Values Section Component
 * Display company values with examples
 */

import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'

interface CompanyValue {
  id: string
  title: string
  description: string
  icon: string
  examples: readonly string[]
}

interface ValuesSectionProps {
  values: readonly CompanyValue[]
  className?: string
}

export default function ValuesSection({ values, className = '' }: ValuesSectionProps) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {values.map((value, index) => {
        const Icon = (LucideIcons[value.icon as keyof typeof LucideIcons] ||
          LucideIcons.Circle) as React.ComponentType<{ className?: string }>

        return (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
          >
            {/* Icon */}
            <div className="mb-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>

            {/* Description */}
            <p className="mb-6 text-gray-600">{value.description}</p>

            {/* Examples */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                In Practice:
              </p>
              <ul className="space-y-2">
                {value.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{example}</span>
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
