'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export function OurClients() {
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
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Scrolling logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            <div className="flex animate-scroll space-x-12">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex h-24 w-40 flex-shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <Image
                    src={`/images/clients/${logo}`}
                    alt={`Client logo ${index + 1}`}
                    width={160}
                    height={96}
                    className="max-h-20 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Join 28,000+ businesses that trust us with their audit and compliance needs
          </p>
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
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
