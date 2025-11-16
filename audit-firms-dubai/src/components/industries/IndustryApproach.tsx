import { CheckCircle2 } from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
  deliverables: string[]
}

interface IndustryApproachProps {
  title: string
  description: string
  steps: Step[]
}

export function IndustryApproach({ title, description, steps }: IndustryApproachProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-primary-600">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {step.description}
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
