'use client'

/**
 * About Statistics Component
 * Animated statistics display for About Us page
 */

import React from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { useEffect } from 'react'

interface Statistic {
  metric: string
  unit: string
  label: string
  description: string
  icon: string
}

interface AboutStatisticsProps {
  statistics: readonly Statistic[]
  className?: string
}

export default function AboutStatistics({ statistics, className = '' }: AboutStatisticsProps) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {statistics.map((stat, index) => (
        <StatisticCard key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  )
}

interface StatisticCardProps {
  stat: Statistic
  index: number
}

function StatisticCard({ stat, index }: StatisticCardProps) {
  const Icon = (LucideIcons[stat.icon as keyof typeof LucideIcons] ||
    LucideIcons.TrendingUp) as React.ComponentType<{ className?: string }>
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    // Format number with commas
    const num = Math.round(latest)
    return num.toLocaleString()
  })

  useEffect(() => {
    // Parse the metric value (remove commas)
    const target = parseFloat(stat.metric.replace(/,/g, ''))
    const animation = animate(count, target, {
      duration: 2,
      delay: index * 0.2,
    })

    return animation.stop
  }, [stat.metric, index, count])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-sm transition-all hover:border-primary hover:shadow-md"
    >
      {/* Icon */}
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-white" />
      </div>

      {/* Metric */}
      <div className="mb-2 flex items-baseline justify-center gap-1">
        <motion.span className="text-4xl font-bold text-primary md:text-5xl">
          {rounded}
        </motion.span>
        <span className="text-2xl font-bold text-primary">{stat.unit}</span>
      </div>

      {/* Label */}
      <h3 className="mb-2 text-lg font-bold text-gray-900">{stat.label}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{stat.description}</p>

      {/* Decorative element */}
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150" />
    </motion.div>
  )
}
