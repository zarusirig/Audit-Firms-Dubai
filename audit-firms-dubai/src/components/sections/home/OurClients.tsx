'use client';

import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

/**
 * Our Clients Section with Auto-Scrolling Logo Slider
 * Displays client logos in an infinite horizontal scroll
 */

// List of all client logos
const clientLogos = [
  'aar-international-usa.png',
  'alem-usa.png',
  'allergan-usa.png',
  'banco-popular-france.png',
  'bbva-uk.png',
  'belvac-usa.png',
  'cbm-china.png',
  'cbmec-middle-east-contracting-china.png',
  'china-mobile-china.png',
  'cima-global-uk.png',
  'cipd-uk.png',
  'coyne-airways-fzco-uk.png',
  'densay-shipping-trading-turkey.png',
  'evestment-usa.png',
  'gameloft-usa.png',
  'hager-companies.png',
  'halcom-germany.png',
  'hrs-hotel-reservation-services-uk.png',
  'hypercom-usa.png',
  'investit-ltd-uk.png',
  'iveco-italy.png',
  'kelly-services-usa.png',
  'life-technologies-usa.png',
  'moodys-investors-services-uk.png',
  'netherlocks-netherlands.png',
  'north-star-usa.png',
  'oglaend-industries-norway.png',
  'one-work-jlt-italy.png',
  'partners-group-uk.png',
  'q-railing-usa.png',
  'richard-mille-france.png',
  'service2media-netherlands.png',
  'spectrum-brands-usa.png',
  'stickman-design-australia.png',
  'tensator-uk.png',
  'thermote-vanhalst-belgium.png',
];

export function OurClients({ dict }: { dict: any }) {
  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by global brands across 140+ countries
          </p>
        </motion.div>

        {/* Logo Slider Container */}
        <div className="relative overflow-hidden py-10 bg-white shadow-sm border-y border-gray-100">
          {/* Gradient overlays for smooth edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          {/* Row 1: Scrolling Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex mb-8"
          >
            <div className="flex animate-scroll space-x-16">
              {duplicatedLogos.slice(0, duplicatedLogos.length / 2).map((logo, index) => (
                <div
                  key={`row1-${logo}-${index}`}
                  className="flex h-20 w-32 flex-shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                >
                  <OptimizedImage
                    src={`/images/clients/${logo}`}
                    alt={`Client logo`}
                    width={128}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2: Scrolling Right (Reverse) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            <div className="flex animate-scroll-reverse space-x-16">
              {duplicatedLogos.slice(duplicatedLogos.length / 2).map((logo, index) => (
                <div
                  key={`row2-${logo}-${index}`}
                  className="flex h-20 w-32 flex-shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                >
                  <OptimizedImage
                    src={`/images/clients/${logo}`}
                    alt={`Client logo`}
                    width={128}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Metrics & Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700">28,000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700">140+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700">7-Day</div>
            <div className="text-sm text-gray-600">Average Delivery</div>
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Recent Success Stories</h3>
            <p className="text-sm text-gray-600">Real results from our audit engagements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors">Manufacturing</div>
                  <div className="text-xs font-medium text-green-600 uppercase tracking-wide">Cost Audit</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Completed audit for AED 50M manufacturing company in just <span className="font-semibold text-gray-900">5 days</span>, identifying <span className="font-semibold text-green-600">AED 2M</span> in cost savings."
              </p>
              <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                 <span className="text-xs font-semibold text-gray-400 uppercase">Client</span>
                 <span className="text-xs font-medium text-gray-700">Major UAE Manufacturer</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">Real Estate</div>
                  <div className="text-xs font-medium text-blue-600 uppercase tracking-wide">RERA Compliance</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Audited escrow accounts for <span className="font-semibold text-gray-900">AED 200M</span> project, ensuring <span className="font-semibold text-blue-600">100% RERA compliance</span> and zero fines."
              </p>
              <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                 <span className="text-xs font-semibold text-gray-400 uppercase">Client</span>
                 <span className="text-xs font-medium text-gray-700">Dubai Developer</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <span className="text-red-600 font-bold text-lg">%</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">Trading</div>
                  <div className="text-xs font-medium text-red-600 uppercase tracking-wide">VAT Audit</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Prepared trading company for FTA VAT audit, resulting in <span className="font-semibold text-gray-900">zero penalties</span> and securing a <span className="font-semibold text-red-600">AED 500K refund</span>."
              </p>
              <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                 <span className="text-xs font-semibold text-gray-400 uppercase">Client</span>
                 <span className="text-xs font-medium text-gray-700">Intl. Trading Firm</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Licensed & Accredited</h3>
            <p className="text-sm text-gray-600">Ministry of Economy approved with international certifications</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {/* Ministry of Economy */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-700">MOE</span>
              </div>
              <span className="text-xs text-center font-semibold">Ministry of Economy</span>
            </div>

            {/* IFRS Certified */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-700">IFRS</span>
              </div>
              <span className="text-xs text-center font-semibold">IFRS Compliant</span>
            </div>

            {/* ISO Certified */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-700">ISO</span>
              </div>
              <span className="text-xs text-center font-semibold">ISO 9001:2015</span>
            </div>

            {/* Big 4 Equivalent */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-secondary-700">4FIRMS</span>
              </div>
              <span className="text-xs text-center font-semibold">Big 4 Quality</span>
            </div>

            {/* UAE Licensed */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-red-700">🇦🇪</span>
              </div>
              <span className="text-xs text-center font-semibold">UAE Licensed</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 45s linear infinite;
        }

        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
