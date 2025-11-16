'use client';

import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Award,
  Globe,
  Clock,
  FileText,
  Users,
  Languages,
  Star
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants/brand';

/**
 * Why Choose Us Section
 * Displays 8 unique selling propositions with icons
 */

const iconMap = {
  BadgeCheck,
  Award,
  Globe,
  Clock,
  FileText,
  Users,
  Languages,
  Star,
};

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-neutral-50 to-primary-50 py-16 lg:py-24">
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
            Why Choose Farahat & Co?
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-neutral-700">
            37 years of excellence, 28,000+ satisfied clients, and unwavering commitment to quality
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => (
            <USPCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface USPCardProps {
  item: typeof WHY_CHOOSE_US[number];
  index: number;
}

function USPCard({ item, index }: USPCardProps) {
  const Icon = iconMap[item.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-300 hover:shadow-md"
    >
      <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3 transition-colors duration-300 group-hover:bg-primary-200">
        <Icon className="h-6 w-6 text-primary-700" />
      </div>
      <h3 className="mb-2 font-semibold text-primary-900">
        {item.title}
      </h3>
      <p className="text-sm text-neutral-600">
        {item.description}
      </p>
    </motion.div>
  );
}
