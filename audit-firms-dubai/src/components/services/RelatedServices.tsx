import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface RelatedService {
  title: string
  slug: string
  description: string
}

interface RelatedServicesProps {
  services: RelatedService[]
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of audit and assurance services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
