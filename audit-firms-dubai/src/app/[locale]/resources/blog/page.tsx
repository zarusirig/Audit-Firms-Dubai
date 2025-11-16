import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Tag, TrendingUp } from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/lib/content/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Audit & Compliance Blog | Expert Insights | Elite Audit Dubai',
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
    title: 'Audit & Compliance Blog | Elite Audit Dubai',
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
  { value: 'guides', label: 'Guides', icon: Tag },
  { value: 'news', label: 'News & Updates', icon: Tag },
]

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Audit & Compliance Insights
            </h1>
            <p className="text-xl text-blue-100">
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
      className={`group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg ${
        featured ? 'border-blue-200 bg-blue-50/50' : ''
      }`}
    >
      <CardHeader>
        <div className="mb-3 flex items-center gap-2">
          <Badge variant={featured ? 'default' : 'secondary'} className="capitalize">
            {post.category}
          </Badge>
          {featured && (
            <Badge variant="default" className="bg-amber-500">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-blue-600">
          <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        <Button asChild variant="ghost" className="mt-4 w-full justify-start p-0">
          <Link href={`/resources/blog/${post.slug}`} className="text-blue-600">
            Read Article →
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
