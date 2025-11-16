interface LocationAboutProps {
  title: string
  content: string[]
}

export function LocationAbout({ title, content }: LocationAboutProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h2>

          <div className="prose prose-lg max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
