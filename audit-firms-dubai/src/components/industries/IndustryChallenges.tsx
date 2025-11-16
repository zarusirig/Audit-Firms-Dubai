import * as Icons from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Challenge {
  title: string
  description: string
  icon: string
}

interface IndustryChallengesProps {
  title: string
  challenges: Challenge[]
}

export function IndustryChallenges({ title, challenges }: IndustryChallengesProps) {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.AlertCircle
    return Icon
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Industry-specific audit complexities that require specialized expertise and proven methodologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = getIcon(challenge.icon)
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
