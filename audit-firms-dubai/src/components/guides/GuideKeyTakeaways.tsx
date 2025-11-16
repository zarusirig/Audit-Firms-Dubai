import { Lightbulb, CheckCircle2 } from 'lucide-react'

interface GuideKeyTakeawaysProps {
  takeaways: string[]
}

export function GuideKeyTakeaways({ takeaways }: GuideKeyTakeawaysProps) {
  return (
    <section className="my-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border-2 border-amber-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Key Takeaways
        </h2>
      </div>

      <ul className="space-y-4">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <span className="text-lg text-gray-800 font-medium">{takeaway}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
