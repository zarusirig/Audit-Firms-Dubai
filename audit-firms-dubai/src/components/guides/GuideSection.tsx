import { CheckCircle2 } from 'lucide-react'
import { GuideTable } from './GuideTable'

interface Subsection {
  title: string
  content?: string[]
  list?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
}

interface GuideSectionProps {
  id: string
  title: string
  content?: string[]
  subsections?: Subsection[]
  list?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
}

export function GuideSection({ id, title, content, subsections, list, table }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary-600">
        {title}
      </h2>

      {content && content.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}

      {list && (
        <ul className="space-y-3 my-6">
          {list.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {table && <GuideTable headers={table.headers} rows={table.rows} />}

      {subsections && subsections.map((subsection, index) => (
        <div key={index} id={`${id}-${index}`} className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {subsection.title}
          </h3>

          {subsection.content && subsection.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg text-gray-700 mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {subsection.list && (
            <ul className="space-y-3 my-6">
              {subsection.list.map((item, lIndex) => (
                <li key={lIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {subsection.table && <GuideTable headers={subsection.table.headers} rows={subsection.table.rows} />}
        </div>
      ))}
    </section>
  )
}
