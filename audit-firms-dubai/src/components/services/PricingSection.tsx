import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Info } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface PricingTier {
  name: string
  range: string
  ideal: string
  features: string[]
}

interface PricingSectionProps {
  title: string
  intro: string
  tiers: PricingTier[]
  factors: string[]
}

export function PricingSection({
  title,
  intro,
  tiers,
  factors,
}: PricingSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl w-full mx-auto text-center px-4">{intro}</p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  index === 1
                    ? 'border-primary-500 border-2 shadow-xl scale-105'
                    : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {tier.range}
                  </div>
                  <CardDescription className="text-base">
                    {tier.ideal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Factors */}
          <Alert className="border-primary-200 bg-primary-50">
            <Info className="h-5 w-5 text-primary-600" />
            <AlertDescription>
              <div className="text-primary-900">
                <strong className="block mb-3">
                  Factors That Affect Audit Pricing:
                </strong>
                <div className="grid md:grid-cols-2 gap-2">
                  {factors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary-600">•</span>
                      <span className="text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AlertDescription>
          </Alert>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Every business is unique. Let us provide a customized quote based on
              your specific needs.
            </p>
            <Button size="lg">Schedule Free Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
