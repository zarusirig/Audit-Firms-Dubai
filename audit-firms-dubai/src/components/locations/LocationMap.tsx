'use client'

import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LocationMapProps {
  mapUrl: string
  coordinates: {
    lat: number
    lng: number
  }
  landmarks: string[]
}

export function LocationMap({ mapUrl, coordinates, landmarks }: LocationMapProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Embed */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>

              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-square">
                <iframe
                  src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-6">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nearby Landmarks
              </h3>

              <div className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
