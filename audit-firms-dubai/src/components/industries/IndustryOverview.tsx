interface IndustryOverviewProps {
  title: string
  content: string[]
}

export function IndustryOverview({ title, content }: IndustryOverviewProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h2>

          <div className="space-y-6">
            {content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
