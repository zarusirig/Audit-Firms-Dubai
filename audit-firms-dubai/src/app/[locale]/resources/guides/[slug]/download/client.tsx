'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { GUIDES } from '@/lib/content/guides'
import { type Locale } from '@/lib/i18n/config'
import GatedDownloadForm from '@/components/resources/GatedDownloadForm'

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export default function GuideDownloadClient({ params }: Props) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string; locale: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    params.then(setResolvedParams).finally(() => setLoading(false))
  }, [params])

  if (loading || !resolvedParams) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  const locale = resolvedParams.locale as Locale
  const guide = GUIDES[resolvedParams.slug]

  if (!guide || guide.access !== 'gated') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Download Not Available</h1>
          <p className="text-gray-600 mb-6">This guide is not available for download or doesn't require registration.</p>
          <Link
            href={`/${locale}/resources/guides`}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Guides
          </Link>
        </div>
      </div>
    )
  }

  const handleDownloadReady = (downloadUrl: string) => {
    // This will be called when the form submission is successful
    // In a real app, you'd redirect to a thank-you page or trigger the download
    console.log('Download ready:', downloadUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-white py-4">
        <div className="container mx-auto px-4">
          <Link
            href={`/${locale}/resources/guides/${guide.slug}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guide
          </Link>
        </div>
      </div>

      {/* Download Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Download className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Download {guide.title}</h1>
            <p className="text-lg text-gray-600">
              Get your free {guide.pageCount}-page PDF guide instantly
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <GatedDownloadForm
              resourceId={guide.id}
              resourceTitle={guide.title}
              resourceFormat={guide.format}
              onDownloadReady={handleDownloadReady}
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/resources/guides/${guide.slug}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
