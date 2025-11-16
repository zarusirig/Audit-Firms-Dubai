'use client'

/**
 * Certifications Showcase Component
 * Display company certifications, accreditations, and memberships
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge, CheckCircle2, Award, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Certification {
  id: string
  name: string
  type: string
  description: string
  logo?: string
  issued: string
  category: 'regulatory' | 'quality' | 'professional'
  priority: number
}

interface CertificationsShowcaseProps {
  certifications: readonly Certification[]
  className?: string
}

export default function CertificationsShowcase({
  certifications,
  className = '',
}: CertificationsShowcaseProps) {
  const [filter, setFilter] = useState<string>('all')

  const filteredCertifications =
    filter === 'all'
      ? certifications
      : certifications.filter((cert) => cert.category === filter)

  const categoryIcons = {
    regulatory: Shield,
    quality: CheckCircle2,
    professional: Award,
  }

  const categoryLabels = {
    regulatory: 'Regulatory Approvals',
    quality: 'Quality Standards',
    professional: 'Professional Associations',
  }

  return (
    <div className={className}>
      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          size="sm"
        >
          All Certifications
        </Button>
        <Button
          variant={filter === 'regulatory' ? 'default' : 'outline'}
          onClick={() => setFilter('regulatory')}
          size="sm"
        >
          <Shield className="mr-2 h-4 w-4" />
          Regulatory
        </Button>
        <Button
          variant={filter === 'quality' ? 'default' : 'outline'}
          onClick={() => setFilter('quality')}
          size="sm"
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Quality
        </Button>
        <Button
          variant={filter === 'professional' ? 'default' : 'outline'}
          onClick={() => setFilter('professional')}
          size="sm"
        >
          <Award className="mr-2 h-4 w-4" />
          Professional
        </Button>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCertifications.map((cert, index) => {
          const CategoryIcon = categoryIcons[cert.category]

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Logo/Icon */}
              <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-4">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <CategoryIcon className="h-10 w-10 text-primary" />
                )}
              </div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {categoryLabels[cert.category]}
                </span>
              </div>

              {/* Name */}
              <h3 className="mb-2 font-bold text-gray-900">{cert.name}</h3>

              {/* Type */}
              <p className="mb-2 text-sm font-medium text-primary">{cert.type}</p>

              {/* Description */}
              <p className="mb-3 text-sm text-gray-600">{cert.description}</p>

              {/* Issued */}
              <p className="text-xs text-gray-500">Since {cert.issued}</p>

              {/* Hover effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:translate-y-0 translate-y-1" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
