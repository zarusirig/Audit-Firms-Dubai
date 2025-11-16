'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CORE_SERVICES } from '@/lib/constants/brand';

/**
 * Services Grid Section
 * Showcases 6 core audit services with hover effects
 */

const iconMap = {
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            Comprehensive Audit Services
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-neutral-700">
            From statutory compliance to specialized audits, we provide complete audit solutions
            tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof CORE_SERVICES[number];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={service.href}>
        <div className="group relative h-full overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Content */}
          <div className="relative">
            {/* Icon */}
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 transition-colors duration-300 group-hover:bg-primary-200">
              <Icon className="h-6 w-6 text-primary-700" />
            </div>

            {/* Service Name */}
            <h3 className="mb-2 font-serif text-xl font-bold text-primary-900">
              {service.name}
            </h3>

            {/* Description */}
            <p className="mb-4 text-sm text-neutral-600 line-clamp-3">
              {service.description}
            </p>

            {/* Features */}
            <div className="mb-4 flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <Badge 
                  key={feature} 
                  variant="secondary" 
                  className="text-xs"
                >
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Learn More Link */}
            <div className="flex items-center text-sm font-semibold text-primary-700 transition-colors group-hover:text-primary-900">
              Learn More
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
