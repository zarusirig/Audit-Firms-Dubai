import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2, Info } from 'lucide-react'

interface ServiceOverviewProps {
  title: string
  content: string[]
  legalRequirement?: string
  whoNeedsIt?: string[]
}

export function ServiceOverview({
  title,
  content,
  legalRequirement,
  whoNeedsIt,
}: ServiceOverviewProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h2>

          {/* Content Paragraphs */}
          <div className="prose prose-lg max-w-none mb-8">
            {content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Legal Requirement Alert */}
          {legalRequirement && (
            <Alert className="mb-8 border-primary-200 bg-primary-50">
              <Info className="h-5 w-5 text-primary-600" />
              <AlertDescription className="text-primary-900">
                <strong>Legal Requirement:</strong> {legalRequirement}
              </AlertDescription>
            </Alert>
          )}

          {/* Who Needs It */}
          {whoNeedsIt && whoNeedsIt.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Who Needs This Service?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {whoNeedsIt.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
