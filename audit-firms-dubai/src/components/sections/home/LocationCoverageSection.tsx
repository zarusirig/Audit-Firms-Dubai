'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  CheckCircle, 
  Building2, 
  Landmark, 
  Gem, 
  Anchor, 
  Laptop, 
  Plane, 
  Building
} from 'lucide-react';

/**
 * Location Coverage Section
 * Captures location-based keyword cluster (800+ monthly searches)
 * Targets: audit firms + [location], auditors in [location], etc.
 */

const locations = [
  {
    name: 'Dubai Mainland',
    icon: Building2,
    coverage: 'Business Bay, Deira, Bur Dubai',
    services: 'All audit services',
  },
  {
    name: 'DIFC',
    icon: Landmark,
    coverage: 'Dubai International Financial Centre',
    services: 'Financial services audit',
  },
  {
    name: 'DMCC',
    icon: Gem,
    coverage: 'Dubai Multi Commodities Centre',
    services: 'Trading company audit',
  },
  {
    name: 'JAFZA',
    icon: Anchor,
    coverage: 'Jebel Ali Free Zone',
    services: 'Import/export audit',
  },
  {
    name: 'Dubai Silicon Oasis',
    icon: Laptop,
    coverage: 'Technology companies',
    services: 'Tech startup audit',
  },
  {
    name: 'Dubai Airport Free Zone',
    icon: Plane,
    coverage: 'Airport logistics',
    services: 'Logistics audit',
  },
  {
    name: 'Abu Dhabi',
    icon: Landmark,
    coverage: 'Abu Dhabi mainland & free zones',
    services: 'Federal audit services',
  },
  {
    name: 'Sharjah',
    icon: Building,
    coverage: 'Sharjah mainland & SAIF Zone',
    services: 'Northern Emirates audit',
  },
];

const services = [
  'External Audit',
  'Internal Audit',
  'VAT Audit',
  'RERA Audit',
  'Forensic Audit',
  'Accounting Services',
];

export function LocationCoverageSection({ dict }: { dict: any }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 border border-primary-200">
              <MapPin className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Serving All UAE</span>
            </div>

            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Audit Firms Serving Dubai, Abu Dhabi, Sharjah & All UAE
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-neutral-700 leading-relaxed">
              Our <strong>auditing firms in Dubai</strong> serve businesses across all emirates
              and free zones. From <strong>Business Bay to DIFC, DMCC to JAFZA</strong>, we're
              your trusted <strong>audit company in Dubai and UAE</strong> with dedicated teams
              for every location.
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-3 text-primary-600">
                    <location.icon className="h-10 w-10" />
                  </div>
                  <h3 className="mb-2 font-bold text-neutral-900">{location.name}</h3>
                  <p className="mb-2 text-sm text-neutral-600">{location.coverage}</p>
                  <div className="text-xs font-semibold text-primary-600">{location.services}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service-Location Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 rounded-xl border border-primary-100 bg-gradient-to-br from-primary-50/50 to-white p-8 shadow-sm"
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-primary-900">
              Complete Audit Services Across All Locations
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="px-4 py-3 text-left font-semibold text-neutral-900">Service</th>
                    <th className="px-2 py-3 text-center text-neutral-600">Dubai</th>
                    <th className="px-2 py-3 text-center text-neutral-600">Free Zones</th>
                    <th className="px-2 py-3 text-center text-neutral-600">Abu Dhabi</th>
                    <th className="px-2 py-3 text-center text-neutral-600">Sharjah</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, idx) => (
                    <tr key={service} className={idx % 2 === 0 ? 'bg-neutral-50/50' : ''}>
                      <td className="px-4 py-3 font-medium text-neutral-900">{service}</td>
                      <td className="px-2 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-2 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-2 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="px-2 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bottom Keyword-Rich Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-xl bg-neutral-50 p-8 text-center"
          >
            <p className="mx-auto max-w-4xl text-neutral-700 leading-relaxed mb-6">
              Looking for <strong>audit firms in Business Bay</strong> or <strong>auditors in
              DIFC</strong>? Need <strong>DMCC audit services</strong> or <strong>JAFZA approved
              auditors</strong>? Our <strong>auditing companies in Dubai</strong> and across
              <strong> UAE</strong> provide Ministry-approved audit and accounting services to
              businesses in all locations. From Dubai Marina to Abu Dhabi, from Sharjah to RAK,
              we're your local <strong>audit firm</strong> with international expertise.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Business Bay',
                'Dubai Marina',
                'DIFC',
                'DMCC',
                'JAFZA',
                'Abu Dhabi',
                'Sharjah',
                'All Free Zones',
              ].map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
