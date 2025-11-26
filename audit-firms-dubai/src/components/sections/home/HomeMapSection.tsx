import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation } from 'lucide-react'

export function HomeMapSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Head Office Location
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us in Dubai</h2>
          <p className="text-lg text-gray-600">
            Our main headquarters is centrally located in Deira, Dubai. 
            We are easily accessible from all major business districts.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 p-2 rounded-2xl shadow-xl border border-gray-200">
            <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1599400072037!2d55.32106289999999!3d25.265204600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccebf52f08f%3A0x9abd5d8d2b10a61!2sFarahat%20%26%20Co.%20-%20Auditing%20Firm%20and%20TAX%20Consultants!5e0!3m2!1sen!2snp!4v1763555876751!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Farahat & Co Head Office Map"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Farahat+%26+Co.+-+Auditing+Firm+and+TAX+Consultants" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/locations">
                <MapPin className="h-4 w-4" />
                View All 7 Locations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}



