import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { serverLoaders } from '@/lib/content-loaders'
import type { BlogPost } from '@/types/content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await serverLoaders.getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await serverLoaders.getBlogPostBySlug(slug)

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
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
      authors: [post.author.name],
      tags: post.tags,
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
  const post = await serverLoaders.getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Load related posts
  const relatedPostsData = await Promise.all(
    post.relatedPosts.map((relatedSlug) => serverLoaders.getBlogPostBySlug(relatedSlug))
  )
  const relatedPosts = relatedPostsData.filter((p) => p !== undefined) as BlogPost[]

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
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.title,
            },
            datePublished: post.publishDate,
            dateModified: post.lastUpdated,
            keywords: post.keywords.join(', '),
            articleSection: post.category,
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
              <Link href="/resources/blog" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Header */}
        <header className="border-b bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Category & Featured Badge */}
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="default" className="capitalize">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="default" className="bg-amber-500">
                    Featured Article
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mb-6 text-xl text-gray-600">{post.excerpt}</p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-sm">{post.author.title}</div>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg prose-blue max-w-none">
                {/* Render markdown content as HTML - using dangerouslySetInnerHTML for now */}
                {/* In production, you'd use a markdown parser like react-markdown or remark */}
                <div
                  className="markdown-content"
                  style={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
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

              {/* Related Services */}
              {post.relatedServices.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Related Services</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {post.relatedServices.map((service) => (
                      <Card key={service.slug} className="transition-shadow hover:shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/services/${service.slug}`}>Learn More →</Link>
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <h3 className="mb-8 text-2xl font-bold text-gray-900">Related Articles</h3>
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
