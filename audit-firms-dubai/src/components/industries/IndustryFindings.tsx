import { AlertTriangle, TrendingDown, CheckCircle2 } from 'lucide-react'

interface Finding {
  issue: string
  impact: string
  solution: string
}

interface IndustryFindingsProps {
  title: string
  findings: Finding[]
}

export function IndustryFindings({ title, findings }: IndustryFindingsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Learn from common issues we identify and how to resolve them proactively
          </p>

          <div className="space-y-6">
            {findings.map((finding, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber-500">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <h3 className="font-semibold text-gray-900">Issue</h3>
                    </div>
                    <p className="text-gray-700">{finding.issue}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-gray-900">Impact</h3>
                    </div>
                    <p className="text-gray-700">{finding.impact}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Solution</h3>
                    </div>
                    <p className="text-gray-700">{finding.solution}</p>
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
