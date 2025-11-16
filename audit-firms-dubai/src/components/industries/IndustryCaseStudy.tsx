import { Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react'

interface CaseStudy {
  title: string
  challenge: string
  solution: string
  results: string[]
}

interface IndustryCaseStudyProps {
  caseStudy: CaseStudy
}

export function IndustryCaseStudy({ caseStudy }: IndustryCaseStudyProps) {
  return (
    <section className="py-16 bg-primary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Success Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {caseStudy.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">The Challenge</h3>
              </div>
              <p className="text-white/90">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Solution</h3>
              </div>
              <p className="text-white/90">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Measurable Results</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
