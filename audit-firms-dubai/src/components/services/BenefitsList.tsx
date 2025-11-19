import {
  ShieldCheck,
  Users,
  AlertTriangle,
  Lightbulb,
  Zap,
  Globe,
  Award,
  MessageCircle,
  TrendingUp,
  Briefcase,
  LucideIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const iconMap: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  users: Users,
  'alert-triangle': AlertTriangle,
  lightbulb: Lightbulb,
  zap: Zap,
  globe: Globe,
  award: Award,
  'message-circle': MessageCircle,
  'trending-up': TrendingUp,
  briefcase: Briefcase,
}

interface Benefit {
  title: string
  description: string
  icon: string
}

interface BenefitsListProps {
  title: string
  benefits: Benefit[]
}

export function BenefitsList({ title, benefits }: BenefitsListProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl w-full mx-auto text-center px-4">
              Partner with Dubai's most trusted audit firm and experience the
              difference that expertise and dedication make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Briefcase
              return (
                <Card
                  key={index}
                  className="group border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
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
