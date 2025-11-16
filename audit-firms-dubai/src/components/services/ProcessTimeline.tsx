import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ProcessStep {
  week: string
  title: string
  description: string
  deliverables: string[]
}

interface ProcessTimelineProps {
  title: string
  steps: ProcessStep[]
}

export function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              Our proven process ensures quality, efficiency, and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                <Card className="mt-8 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-sm font-semibold text-primary-600 mb-2">
                      {step.week}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-900 mb-3">
                        Deliverables:
                      </div>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
