import * as Icons from 'lucide-react'

interface Benefit {
  title: string
  description: string
  icon: string
}

interface IndustryBenefitsProps {
  title: string
  benefits: Benefit[]
}

export function IndustryBenefits({ title, benefits }: IndustryBenefitsProps) {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.CheckCircle
    return Icon
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = getIcon(benefit.icon)
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
