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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1599400072037!2d55.32106289999999!3d25.265204600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccebf52f08f%3A0x9abd5d8d2b10a61!2sFarahat%20%26%20Co.%20-%20Auditing%20Firm%20and%20TAX%20Consultants!5e0!3m2!1sen!2snp!4v1763555876751!5m2!1sen!2snp"
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
