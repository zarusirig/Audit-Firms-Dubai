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

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden md:block absolute top-[3.5rem] left-1/6 right-1/6 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -z-0 rounded-full"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white">
                  {index + 1}
                </div>

                <Card className="mt-10 pt-8 h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-xs font-bold text-primary-700 mb-3 uppercase tracking-wider">
                      {step.week}
                    </div>
                    <CardTitle className="text-xl font-serif text-gray-900 group-hover:text-primary-700 transition-colors">{step.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 bg-gray-50/50 rounded-xl p-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Deliverables
                      </div>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium leading-snug">
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
