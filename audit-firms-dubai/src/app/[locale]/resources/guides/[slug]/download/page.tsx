import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { GUIDES } from '@/lib/content/guides'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import GatedDownloadForm from '@/components/resources/GatedDownloadForm'
import GuideDownloadClient from './client'

// Make this page dynamic to avoid build-time errors with forms
export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const guide = GUIDES[resolvedParams.slug]

  if (!guide || guide.access !== 'gated') {
    return {
      title: 'Download Not Available',
    }
  }

  return {
    title: `Download ${guide.title} - Free PDF Guide`,
    description: `Get your free copy of ${guide.title}. ${guide.description}`,
    robots: 'noindex, nofollow', // Don't index download pages
  }
}

export default function GuideDownloadPage({ params }: Props) {
  return <GuideDownloadClient params={params} />
}

