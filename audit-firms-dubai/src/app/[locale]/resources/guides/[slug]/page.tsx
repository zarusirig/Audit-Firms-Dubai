import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  FileText,
  Download,
  Calendar,
  Lock,
  CheckCircle2,
  ArrowLeft,
  Share2,
} from 'lucide-react'
import { GUIDES, Guide } from '@/lib/content/guides'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const guides = Object.keys(GUIDES)
  const locales = i18n.locales

  const params = []
  for (const locale of locales) {
    for (const slug of guides) {
      params.push({ locale, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const guide = GUIDES[resolvedParams.slug]

  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
      publishedTime: guide.lastUpdated,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${resolvedParams.locale}/resources/guides/${resolvedParams.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/resources/guides/${resolvedParams.slug}`,
        ar: `${SITE_CONFIG.url}/ar/resources/guides/${resolvedParams.slug}`,
      },
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const guide = GUIDES[resolvedParams.slug]

  if (!guide) {
    notFound()
  }

  const relatedGuides = guide.relatedGuides
    .map((slug) => GUIDES[slug])
    .filter((g) => g !== undefined)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.description,
            author: {
              '@type': 'Person',
              name: guide.author.name,
              jobTitle: guide.author.title,
            },
            datePublished: guide.lastUpdated,
            dateModified: guide.lastUpdated,
            keywords: guide.keywords.join(', '),
            articleSection: guide.category,
            publisher: {
              '@type': 'Organization',
              name: 'Elite Audit Dubai (Farahat & Co)',
              logo: {
                '@type': 'ImageObject',
                url: 'https://eliteauditdubai.com/logo.png',
              },
            },
          }),
        }}
      />

      <article className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" size="sm">
              <Link href={`/${locale}/resources/guides`} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Guides
              </Link>
            </Button>
          </div>
        </div>

        {/* Guide Header */}
        <header className="border-b bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Category & Access Badge */}
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="default" className="capitalize">
                  {guide.category}
                </Badge>
                {guide.featured && (
                  <Badge variant="default" className="bg-amber-500">
                    Featured Guide
                  </Badge>
                )}
                <Badge variant="outline" className="gap-1">
                  <FileText className="h-3 w-3" />
                  {guide.format.toUpperCase()} • {guide.pageCount} pages
                </Badge>
              </div>

              {/* Title */}
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                {guide.title}
              </h1>

              {/* Subtitle/Description */}
              <p className="mb-6 text-xl text-gray-600">{guide.description}</p>

              {/* Meta Information */}
              <div className="mb-6 flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Updated {formatDate(guide.lastUpdated)}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>{guide.fileSize}</span>
                </div>
                {guide.downloadCount && (
                  <>
                    <Separator orientation="vertical" className="h-6" />
                    <div className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      <span>{guide.downloadCount.toLocaleString()} downloads</span>
                    </div>
                  </>
                )}
              </div>

              {/* Download CTA */}
              <Card className="border-2 border-blue-200 bg-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900">
                        {guide.access === 'gated'
                          ? 'Download This Free Guide'
                          : 'Get Instant Access'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {guide.access === 'gated'
                          ? 'Enter your email to receive this comprehensive guide instantly'
                          : 'Download the complete guide immediately'}
                      </p>
                    </div>
                    {guide.access === 'gated' ? (
                      <Button size="lg" className="gap-2" asChild>
                        <Link href={`/${locale}/resources/guides/${guide.slug}/download`}>
                          <Lock className="h-5 w-5" />
                          Get Free Access
                        </Link>
                      </Button>
                    ) : (
                      <Button size="lg" className="gap-2" asChild>
                        <Link href={guide.fileUrl} target="_blank">
                          <Download className="h-5 w-5" />
                          Download PDF
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Guide Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg prose-blue max-w-none">
                {/* Table of Contents */}
                <Card className="mb-8 border-blue-200 bg-blue-50/30">
                  <CardHeader>
                    <CardTitle className="text-xl">What's Inside This Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2">
                      {guide.tableOfContents.map((item, index) => (
                        <li key={index} className="font-medium text-gray-900">
                          {item.section}
                          {item.subsections && item.subsections.length > 0 && (
                            <ul className="mt-1 space-y-1 font-normal text-gray-600">
                              {item.subsections.map((sub, subIndex) => (
                                <li key={subIndex}>{sub}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Introduction */}
                <div className="mb-8">
                  {guide.introduction.map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Main Sections */}
                <div className="space-y-8">
                  {guide.sections.map((section, index) => (
                    <section key={index} className="scroll-mt-8" id={`section-${index}`}>
                      <h2 className="mb-4 text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                      <div className="space-y-3">
                        {section.content.map((content, contentIndex) => (
                          <p key={contentIndex} className="text-gray-700">
                            {content}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-12 border-t pt-8">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">Conclusion</h2>
                  {guide.conclusion.map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Benefits Highlight */}
              {guide.benefits && guide.benefits.length > 0 && (
                <Card className="mt-8 border-green-200 bg-green-50/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Key Takeaways
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guide.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Download CTA (Repeat) */}
              <Card className="mt-8 border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      Download the Complete Guide
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Get the full {guide.pageCount}-page PDF guide delivered to your inbox
                    </p>
                    {guide.access === 'gated' ? (
                      <Button size="lg" className="gap-2" asChild>
                        <Link href={`/${locale}/resources/guides/${guide.slug}/download`}>
                          <Lock className="h-5 w-5" />
                          Get Free Access
                        </Link>
                      </Button>
                    ) : (
                      <Button size="lg" className="gap-2" asChild>
                        <Link href={guide.fileUrl} target="_blank">
                          <Download className="h-5 w-5" />
                          Download PDF
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Share Buttons */}
              <div className="mt-8 border-t pt-8">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600">
                    Found this guide helpful? Share it:
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {guide.relatedServices.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Related Services</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {guide.relatedServices.map((service) => (
                      <Card key={service.slug} className="transition-shadow hover:shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/${locale}/services/${service.slug}`}>
                              Learn More →
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="border-t bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <h3 className="mb-8 text-2xl font-bold text-gray-900">
                  More Helpful Guides
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedGuides.map((relatedGuide) => (
                    <RelatedGuideCard key={relatedGuide.id} guide={relatedGuide} locale={locale} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Our Ministry-approved auditors provide comprehensive audit, tax, and compliance
              services. Get expert guidance tailored to your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/contact`}>Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={`/${locale}/calculator`}>Calculate Audit Fees</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

// Related Guide Card Component
function RelatedGuideCard({ guide, locale }: { guide: Guide; locale: string }) {
  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="capitalize">
            {guide.category}
          </Badge>
          {guide.access === 'free' && (
            <Badge variant="outline" className="text-green-600">
              Free
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-blue-600">
          <Link href={`/${locale}/resources/guides/${guide.slug}`}>{guide.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
          <FileText className="h-4 w-4" />
          <span>
            {guide.format.toUpperCase()} • {guide.pageCount} pages
          </span>
        </div>
        <Button asChild variant="ghost" className="w-full justify-start p-0">
          <Link href={`/${locale}/resources/guides/${guide.slug}`} className="text-blue-600">
            {guide.access === 'gated' ? 'Get Guide →' : 'Download →'}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
