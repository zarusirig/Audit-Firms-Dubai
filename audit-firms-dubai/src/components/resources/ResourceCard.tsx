'use client'

/**
 * Resource Card Component
 * Beautiful card for displaying downloadable resources
 */

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Download,
  FileText,
  Sheet,
  FileType,
  FolderArchive,
  Lock,
  ExternalLink,
  Calendar,
  TrendingUp
} from 'lucide-react'
import { Resource, RESOURCE_FORMAT_COLORS, RESOURCE_CATEGORY_LABELS } from '@/lib/resources/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import GatedDownloadForm from './GatedDownloadForm'

interface ResourceCardProps {
  resource: Resource
  variant?: 'default' | 'compact' | 'featured'
  showCategory?: boolean
}

const FORMAT_ICONS = {
  pdf: FileText,
  excel: Sheet,
  word: FileType,
  powerpoint: FileType,
  zip: FolderArchive,
}

export default function ResourceCard({
  resource,
  variant = 'default',
  showCategory = true
}: ResourceCardProps) {
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const FormatIcon = FORMAT_ICONS[resource.format]
  const formatColor = RESOURCE_FORMAT_COLORS[resource.format]

  const handleDownload = () => {
    if (resource.access === 'gated') {
      setShowDownloadForm(true)
    } else {
      // Direct download for free resources
      window.open(resource.fileUrl, '_blank')
    }
  }

  const handleDownloadReady = (downloadUrl: string) => {
    window.open(downloadUrl, '_blank')
    setShowDownloadForm(false)
  }

  if (showDownloadForm) {
    return (
      <div className="space-y-4">
        <GatedDownloadForm
          resourceId={resource.id}
          resourceTitle={resource.title}
          resourceFormat={resource.format}
          onDownloadReady={handleDownloadReady}
        />
        <Button
          variant="outline"
          onClick={() => setShowDownloadForm(false)}
          className="w-full"
        >
          Cancel
        </Button>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
        <div className={`rounded-lg ${formatColor.bg} p-3`}>
          <FormatIcon className={`h-6 w-6 ${formatColor.text}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{resource.title}</h3>
          <p className="text-sm text-gray-600">{resource.fileSize}</p>
        </div>
        <Button size="sm" onClick={handleDownload}>
          {resource.access === 'gated' ? (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Get
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download
            </>
          )}
        </Button>
      </div>
    )
  }

  if (variant === 'featured') {
    return (
      <div className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 shadow-lg transition-all hover:border-primary/40 hover:shadow-xl">
        {/* Featured Badge */}
        <div className="absolute right-4 top-4">
          <Badge variant="default" className="bg-primary">
            <TrendingUp className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        </div>

        {/* Icon */}
        <div className={`mb-4 inline-block rounded-xl ${formatColor.bg} p-4`}>
          <FormatIcon className={`h-10 w-10 ${formatColor.text}`} />
        </div>

        {/* Category */}
        {showCategory && (
          <p className="mb-2 text-sm font-medium text-primary">
            {RESOURCE_CATEGORY_LABELS[resource.category]}
          </p>
        )}

        {/* Title & Description */}
        <h3 className="mb-3 text-xl font-bold text-gray-900">{resource.title}</h3>
        <p className="mb-4 line-clamp-2 text-gray-600">{resource.description}</p>

        {/* Metadata */}
        <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FormatIcon className="h-4 w-4" />
            {resource.format.toUpperCase()}
          </span>
          <span>•</span>
          <span>{resource.fileSize}</span>
          {resource.pageCount && (
            <>
              <span>•</span>
              <span>{resource.pageCount} pages</span>
            </>
          )}
          {resource.downloadCount && (
            <>
              <span>•</span>
              <span>{resource.downloadCount.toLocaleString()} downloads</span>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button onClick={handleDownload} className="flex-1">
            {resource.access === 'gated' ? (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Get Resource
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download Free
              </>
            )}
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/tools/${resource.slug}`}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 p-4">
        <div className="flex items-start justify-between">
          <div className={`rounded-lg ${formatColor.bg} p-3`}>
            <FormatIcon className={`h-8 w-8 ${formatColor.text}`} />
          </div>
          {resource.access === 'gated' && (
            <Badge variant="outline" className="border-primary/30 text-primary">
              <Lock className="mr-1 h-3 w-3" />
              Gated
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        {showCategory && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
            {RESOURCE_CATEGORY_LABELS[resource.category]}
          </p>
        )}

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-primary">
          <Link href={`/tools/${resource.slug}`} className="hover:underline">
            {resource.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-600">{resource.description}</p>

        {/* Metadata */}
        <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FormatIcon className="h-3 w-3" />
            {resource.format.toUpperCase()}
          </span>
          <span>•</span>
          <span>{resource.fileSize}</span>
          {resource.pageCount && (
            <>
              <span>•</span>
              <span>{resource.pageCount} pages</span>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            Updated {new Date(resource.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </div>
          <Button size="sm" onClick={handleDownload}>
            {resource.access === 'gated' ? 'Get Resource' : 'Download'}
          </Button>
        </div>
      </div>
    </div>
  )
}
