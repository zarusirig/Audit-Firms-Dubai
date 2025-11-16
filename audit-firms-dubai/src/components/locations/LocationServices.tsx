import { CheckCircle2 } from 'lucide-react'

interface LocationServicesProps {
  services: string[]
  clientFocus: string[]
}

export function LocationServices({ services, clientFocus }: LocationServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services Offered */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Services Offered at This Location
              </h2>

              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Focus */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Industries We Serve
              </h2>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
                <div className="grid gap-3">
                  {clientFocus.map((client, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
