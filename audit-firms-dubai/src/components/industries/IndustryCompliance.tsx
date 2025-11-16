import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Regulation {
  name: string
  description: string
  requirements: string[]
}

interface IndustryComplianceProps {
  title: string
  regulations: Regulation[]
}

export function IndustryCompliance({ title, regulations }: IndustryComplianceProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive compliance coverage across all applicable regulations and standards
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((regulation, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-600">{regulation.name}</CardTitle>
                  <CardDescription className="text-base">{regulation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {regulation.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
