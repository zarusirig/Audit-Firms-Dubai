import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  ArrowRight,
  CheckCircle,
  Shield,
  BookOpen,
  ExternalLink,
  Info,
} from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/lib/content/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Components } from 'react-markdown'
import { DesktopTableOfContents, MobileTableOfContents } from '@/components/blog/TableOfContents'

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

// Temporarily disable static generation to avoid SSR issues
// export async function generateStaticParams() {
//   return Object.keys(BLOG_POSTS).map((slug) => ({
//     slug,
//   }))
// }

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const post = BLOG_POSTS[slug]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/resources/blog/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/resources/blog/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/resources/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
      authors: [post.author.name],
      tags: post.tags,
      url: `${SITE_CONFIG.url}/${locale}/resources/blog/${slug}`,
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS[slug]

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts
    .map((slug) => BLOG_POSTS[slug])
    .filter((p) => p !== undefined)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }

  // Extract headings for Table of Contents
  const headings = post.content.match(/^#{2,3}\s+.+$/gm)?.map((match) => {
    const level = match.startsWith('###') ? 3 : 2
    const text = match.replace(/^#{2,3}\s+/, '')
    const id = slugify(text)
    return { level, text, id }
  }) || []

  const markdownComponents: Components = {
    h2: ({ children, ...props }) => {
      const text = children?.toString() || ''
      const id = slugify(text)
      return <h2 id={id} {...props}>{children}</h2>
    },
    h3: ({ children, ...props }) => {
      const text = children?.toString() || ''
      const id = slugify(text)
      return <h3 id={id} {...props}>{children}</h3>
    },
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
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.title,
            },
            reviewer: post.reviewer
              ? {
                  '@type': 'Person',
                  name: post.reviewer.name,
                  jobTitle: post.reviewer.title,
                }
              : undefined,
            datePublished: post.publishDate,
            dateModified: post.lastUpdated,
            keywords: post.keywords.join(', '),
            articleSection: post.category,
            publisher: {
              '@type': 'Organization',
              name: 'Audit Firms Dubai (Farahat & Co)',
              logo: {
                '@type': 'ImageObject',
                url: 'https://auditfirmsdubai.ae/logo.png',
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
              <Link href="/resources/blog" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Header */}
        <header className="border-b bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              {/* Category & Featured Badge */}
              <div className="mb-6 flex items-center justify-center gap-2">
                <Badge variant="secondary" className="capitalize px-3 py-1 text-sm">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="default" className="bg-amber-500 px-3 py-1 text-sm hover:bg-amber-600">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="mb-8 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl md:leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mb-12 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto text-center">{post.excerpt}</p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div>{post.author.title}</div>
                  </div>
                </div>
                <Separator orientation="vertical" className="hidden h-10 md:block" />
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1fr_360px] max-w-7xl mx-auto">
              {/* Main Content */}
              <div className="min-w-0">
                {/* Mobile Table of Contents */}
                <div className="lg:hidden mb-12">
                   <MobileTableOfContents headings={headings} />
                </div>

                <div className="prose prose-lg prose-blue max-w-none guide-content
                  prose-headings:scroll-mt-24
                  prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0
                  prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl
                  prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-2xl
                  prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-xl
                  prose-p:text-neutral-900 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:my-3 prose-li:leading-relaxed prose-li:text-neutral-900
                  prose-ol:my-6 prose-ol:ml-6
                  prose-strong:text-neutral-900 prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-blockquote:my-8
                  prose-img:rounded-xl prose-img:shadow-md prose-img:my-8
                  prose-hr:my-8 prose-hr:border-gray-200
                  prose-table:my-8 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-neutral-900
                  prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-gray-200
                  prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Legal Disclaimer (Bottom of Content) */}
                <div className="mt-12 rounded-lg bg-gray-50 p-6 text-sm text-gray-600 border border-gray-100">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">Legal Disclaimer</h4>
                      <p>
                        This content is for informational purposes only and reflects regulations as of{' '}
                        {new Date().getFullYear()}. For specific legal advice or disputes, please consult with
                        an auditor or legal consultant.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-12 border-t pt-8">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-600">Share this article:</div>
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
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Sticky Wrapper */}
                <div className="lg:sticky lg:top-24 space-y-8">
                  
                  {/* Desktop Table of Contents (Hidden on Mobile) */}
                  <DesktopTableOfContents headings={headings} />

                  {/* Verified & Reviewed Box */}
                  {post.reviewer && (
                    <Card className="border-blue-100 bg-blue-50/50 shadow-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-blue-700">
                          <Shield className="h-5 w-5" />
                          <span className="font-semibold">Reviewed & Verified</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                            {post.reviewer.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{post.reviewer.name}</div>
                            <div className="text-xs text-gray-600 mb-2">{post.reviewer.title}</div>
                            <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                              <CheckCircle className="h-3 w-3" />
                              Verified Content
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Updated: {formatDate(post.reviewer.lastReviewed)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Official Sources */}
                  {post.sources && post.sources.length > 0 && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 text-gray-900">
                          <BookOpen className="h-5 w-5" />
                          <span className="font-semibold">Official Sources</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {post.sources.map((source, idx) => (
                            <li key={idx} className="text-sm">
                              <a 
                                href={source.url || '#'} 
                                className="group flex items-start gap-2 text-gray-600 hover:text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 shrink-0 mt-0.5 opacity-50 group-hover:opacity-100" />
                                <span>{source.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Related Services Card */}
                  {post.relatedServices.length > 0 && (
                    <Card className="border-primary-100 shadow-md">
                      <CardHeader className="bg-primary-50/50 pb-3">
                        <CardTitle className="text-lg text-primary-900">
                          Related Services
                        </CardTitle>
                        <CardDescription>
                          Expert assistance for your business
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          {post.relatedServices.map((service) => (
                            <div key={service.slug} className="space-y-2">
                              <h4 className="font-medium text-gray-900">{service.title}</h4>
                              <p className="text-xs text-gray-500 line-clamp-2">
                                {service.description}
                              </p>
                              <Button asChild variant="link" className="h-auto p-0 text-primary-600">
                                <Link href={`/services/${service.slug}`}>
                                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                              <Separator className="mt-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Newsletter / Contact CTA */}
                  <Card className="bg-neutral-900 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">
                        Need Expert Advice?
                      </CardTitle>
                      <CardDescription className="text-neutral-300">
                        Our auditors are ready to help you navigate UAE regulations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-100" asChild>
                        <Link href="/contact">Get a Free Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
                   <Link href="/resources/blog" className="text-blue-600 hover:underline flex items-center gap-1">
                     View All Guides <ArrowRight className="h-4 w-4" />
                   </Link>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Need Professional Audit Services?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Our Ministry-approved auditors provide comprehensive audit, tax, and compliance
              services. Get expert guidance tailored to your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/calculator">Calculate Audit Fees</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

// Related Post Card Component
function RelatedPostCard({ post }: { post: BlogPost }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit capitalize">
          {post.category}
        </Badge>
        <CardTitle className="line-clamp-2 text-lg transition-colors group-hover:text-blue-600">
          <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{formatDate(post.publishDate)}</span>
          <span>{post.readTime} min read</span>
        </div>
      </CardContent>
    </Card>
  )
}
