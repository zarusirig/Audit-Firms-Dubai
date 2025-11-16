/**
 * Resource Grid Component
 * Grid layout for displaying multiple resources
 */

import React from 'react'
import { Resource } from '@/lib/resources/types'
import ResourceCard from './ResourceCard'

interface ResourceGridProps {
  resources: Resource[]
  variant?: 'default' | 'compact' | 'featured'
  columns?: 1 | 2 | 3 | 4
  showCategory?: boolean
  emptyMessage?: string
}

export default function ResourceGrid({
  resources,
  variant = 'default',
  columns = 3,
  showCategory = true,
  emptyMessage = 'No resources found',
}: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    )
  }

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          variant={variant}
          showCategory={showCategory}
        />
      ))}
    </div>
  )
}
