import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Tag, TrendingUp, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/lib/content/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Audit & Compliance Blog | Expert Insights | Audit Firms Dubai',
  description:
    'Latest insights on audit, compliance, VAT, RERA, and financial regulations in UAE. Expert guidance from Farahat & Co certified auditors.',
  keywords: [
    'audit blog uae',
    'compliance news dubai',
    'vat updates',
    'audit insights',
    'accounting blog dubai',
  ],
  openGraph: {
    title: 'Audit & Compliance Blog | Audit Firms Dubai',
    description:
      'Expert insights on audit, tax, compliance, and financial regulations in UAE',
    type: 'website',
  },
}

// Get all blog posts as array and sort by date (newest first)
const getAllPosts = (): BlogPost[] => {
  return Object.values(BLOG_POSTS).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
}

// Get featured posts
const getFeaturedPosts = (): BlogPost[] => {
  return getAllPosts().filter((post) => post.featured)
}

// Get posts by category
const getPostsByCategory = (category: string): BlogPost[] => {
  return getAllPosts().filter((post) => post.category === category)
}

// Category definitions
const categories = [
  { value: 'all', label: 'All Articles', icon: TrendingUp },
  { value: 'audit', label: 'Audit', icon: Tag },
  { value: 'compliance', label: 'Compliance', icon: Tag },
  { value: 'tax', label: 'Tax & VAT', icon: Tag },
  { value: 'industry', label: 'Industry Insights', icon: Tag },
  { value: 'business-setup', label: 'Business Setup', icon: Briefcase },
  { value: 'guides', label: 'Guides', icon: Tag },
  { value: 'news', label: 'News & Updates', icon: Tag },
]

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 text-white lg:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 text-secondary-400" />
              Expert Insights & Updates
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Audit & Compliance <span className="text-secondary-400">Insights</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert guidance on audit, tax, compliance, and financial regulations in the UAE.
              Stay informed with insights from our certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={category.value === 'all' ? 'default' : 'outline'}
                size="sm"
                className="gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <p className="mt-2 text-gray-600">
                Our most popular and insightful articles on audit and compliance
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <p className="mt-2 text-gray-600">
              {allPosts.length} articles on audit, compliance, tax, and financial regulations
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Need Expert Audit Guidance?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our certified auditors provide comprehensive audit, tax, and compliance services
            across all UAE industries. Get personalized advice for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/calculator">Calculate Audit Fees</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Blog Post Card Component
function BlogPostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <Card
      className={`group flex h-full flex-col overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured ? 'bg-primary-50/50 border-primary-100' : 'bg-white'
      }`}
    >
      <CardHeader className="pb-4">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={featured ? 'default' : 'secondary'} className="capitalize font-medium">
            {post.category}
          </Badge>
          {featured && (
            <div className="flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-wider">
              <CheckCircle2 className="h-3 w-3" />
              Featured
            </div>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-xl font-serif font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
          <Link href={`/resources/blog/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-base text-gray-600 mt-2">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs text-gray-500 border-gray-200 font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary-400" />
            <span className="font-medium">{formatDate(post.publishDate)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary-400" />
            <span className="font-medium">{post.readTime} min read</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
