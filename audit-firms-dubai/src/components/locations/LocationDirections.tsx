import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Train, Car, ParkingCircle } from 'lucide-react'

interface Directions {
  byMetro: string
  byCar: string
  parking: string
}

interface LocationDirectionsProps {
  directions: Directions
}

export function LocationDirections({ directions }: LocationDirectionsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600">
              Easy access by metro, car, or taxi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* By Metro */}
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Train className="h-7 w-7 text-primary-600" />
                </div>
                <CardTitle>By Metro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {directions.byMetro}
                </p>
              </CardContent>
            </Card>

            {/* By Car */}
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-primary-600" />
                </div>
                <CardTitle>By Car</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {directions.byCar}
                </p>
              </CardContent>
            </Card>

            {/* Parking */}
            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <ParkingCircle className="h-7 w-7 text-primary-600" />
                </div>
                <CardTitle>Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {directions.parking}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
