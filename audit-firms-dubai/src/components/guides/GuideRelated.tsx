import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface RelatedGuide {
  title: string
  slug: string
  description: string
}

interface GuideRelatedProps {
  guides: RelatedGuide[]
  locale: string
}

export function GuideRelated({ guides, locale }: GuideRelatedProps) {
  return (
    <section className="my-16 bg-gray-50 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="h-6 w-6 text-primary-600" />
        <h2 className="text-3xl font-bold text-gray-900">
          Related Guides
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
            <CardHeader>
              <CardTitle className="text-xl">{guide.title}</CardTitle>
              <CardDescription className="text-base">{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/${locale}/guides/${guide.slug}`}>
                <Button variant="outline" className="w-full group">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
