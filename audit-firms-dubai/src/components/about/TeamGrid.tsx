'use client'

/**
 * Team Grid Component
 * Displays team members in a responsive grid
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface TeamMember {
  id?: string
  name: string
  position: string
  credentials: readonly string[]
  bio?: string
  specialization: readonly string[]
  experience: string
  image?: string
  linkedin?: string
  email?: string
}

interface TeamGridProps {
  members: readonly TeamMember[]
  variant?: 'leadership' | 'senior'
  className?: string
}

export default function TeamGrid({
  members,
  variant = 'leadership',
  className = '',
}: TeamGridProps) {
  return (
    <div
      className={`grid gap-8 ${
        variant === 'leadership'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      } ${className}`}
    >
      {members.map((member, index) => (
        <TeamMemberCard key={member.id || member.name} member={member} variant={variant} index={index} />
      ))}
    </div>
  )
}

interface TeamMemberCardProps {
  member: TeamMember
  variant: 'leadership' | 'senior'
  index: number
}

function TeamMemberCard({ member, variant, index }: TeamMemberCardProps) {
  if (variant === 'leadership') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-gray-400">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Credentials */}
          <div className="mb-3 flex flex-wrap gap-2">
            {member.credentials.map((credential) => (
              <Badge
                key={credential}
                variant="secondary"
                className="bg-primary/10 text-primary"
              >
                {credential}
              </Badge>
            ))}
          </div>

          {/* Name & Position */}
          <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="mb-3 text-sm font-medium text-primary">{member.position}</p>

          {/* Experience */}
          <p className="mb-3 text-sm text-gray-600">
            <span className="font-semibold">Experience:</span> {member.experience}
          </p>

          {/* Bio */}
          {member.bio && <p className="mb-4 text-sm text-gray-600">{member.bio}</p>}

          {/* Specialization */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Specialization
            </p>
            <div className="flex flex-wrap gap-1.5">
              {member.specialization.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-2">
            {member.email && (
              <Button size="sm" variant="outline" asChild>
                <a href={`mailto:${member.email}`}>
                  <Mail className="mr-1 h-4 w-4" />
                  Email
                </a>
              </Button>
            )}
            {member.linkedin && (
              <Button size="sm" variant="outline" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Senior team variant (more compact)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Credentials */}
      <div className="mb-3 flex flex-wrap gap-2">
        {member.credentials.map((credential) => (
          <Badge key={credential} variant="secondary" className="text-xs">
            {credential}
          </Badge>
        ))}
      </div>

      {/* Name & Position */}
      <h4 className="mb-1 font-bold text-gray-900">{member.name}</h4>
      <p className="mb-2 text-sm text-primary">{member.position}</p>

      {/* Experience */}
      <p className="mb-3 text-xs text-gray-600">{member.experience}</p>

      {/* Specialization */}
      <div className="flex flex-wrap gap-1.5">
        {member.specialization.map((spec) => (
          <span
            key={spec}
            className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
          >
            {spec}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
