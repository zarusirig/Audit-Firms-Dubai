import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

interface Advantage {
  title: string
  description: string
}

interface LocationAdvantagesProps {
  advantages: Advantage[]
}

export function LocationAdvantages({ advantages }: LocationAdvantagesProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose This Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl w-full mx-auto text-center px-4">
              Strategic advantages and specialized expertise at our office
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
