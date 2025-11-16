'use client'

/**
 * Company Timeline Component
 * Visual timeline showing company history and milestones
 */

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: string
  milestone?: boolean
}

interface CompanyTimelineProps {
  events: readonly TimelineEvent[]
  className?: string
}

export default function CompanyTimeline({ events, className = '' }: CompanyTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 md:left-1/2">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-primary to-primary/50"
        />
      </div>

      {/* Timeline Events */}
      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = (LucideIcons[event.icon as keyof typeof LucideIcons] ||
            LucideIcons.Circle) as React.ComponentType<{ className?: string }>
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative grid grid-cols-1 gap-8 md:grid-cols-2 ${
                isLeft ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* Content */}
              <div className={`pl-20 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                {event.milestone && (
                  <Badge className="mb-2 bg-gold text-white">
                    Major Milestone
                  </Badge>
                )}
                <div className="mb-2 flex items-center gap-2 md:justify-end">
                  <span className="text-2xl font-bold text-primary">{event.year}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Icon Circle */}
              <div
                className={`absolute left-8 top-0 -ml-4 md:left-1/2 ${
                  event.milestone
                    ? 'h-16 w-16 -ml-8'
                    : 'h-12 w-12 -ml-6'
                }`}
              >
                <div
                  className={`flex h-full w-full items-center justify-center rounded-full border-4 border-white shadow-lg ${
                    event.milestone
                      ? 'bg-gradient-to-br from-primary to-primary/70'
                      : 'bg-white'
                  }`}
                >
                  <Icon
                    className={`${event.milestone ? 'h-8 w-8 text-white' : 'h-6 w-6 text-primary'}`}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
