import {
  Building,
  Truck,
  Factory,
  Landmark,
  HeartPulse,
  Plane,
  Cpu,
  Briefcase,
  LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const iconMap: Record<string, LucideIcon> = {
  building: Building,
  truck: Truck,
  factory: Factory,
  landmark: Landmark,
  'heart-pulse': HeartPulse,
  plane: Plane,
  cpu: Cpu,
  briefcase: Briefcase,
}

interface Industry {
  name: string
  description: string
  icon: string
}

interface IndustriesServedProps {
  title: string
  industries: Industry[]
}

export function IndustriesServed({ title, industries }: IndustriesServedProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep expertise across diverse sectors with specialized knowledge of
              industry-specific regulations and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Briefcase
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow group"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                      <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
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
