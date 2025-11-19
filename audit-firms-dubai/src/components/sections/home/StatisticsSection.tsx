'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Star, Shield } from 'lucide-react';
import { BRAND_STATS } from '@/lib/constants/brand';

/**
 * Statistics Section with Animated Counters
 * Uses Intersection Observer to trigger count-up animation when in view
 */

const iconMap = {
  Award,
  Users,
  Globe,
  TrendingUp,
  Star,
  Shield,
};

export function StatisticsSection({ dict }: { dict: any }) {
  return (
    <section className="relative bg-primary-900 py-16 text-white lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900 rounded-full blur-3xl opacity-20" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {dict.statistics.title}
          </h2>
          <p className="text-lg text-primary-200">
            {dict.statistics.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          <AnimatedStat
            end={BRAND_STATS.experience.value}
            suffix="+"
            label={BRAND_STATS.experience.label}
            icon="Award"
            delay={0}
          />
          <AnimatedStat
            end={BRAND_STATS.clients.value}
            suffix="+"
            label={BRAND_STATS.clients.label}
            icon="Users"
            delay={0.1}
            format
          />
          <AnimatedStat
            end={BRAND_STATS.countries.value}
            suffix=""
            label={BRAND_STATS.countries.label}
            icon="Globe"
            delay={0.2}
          />
          <AnimatedStat
            end={BRAND_STATS.awards.value}
            suffix="+"
            label={BRAND_STATS.awards.label}
            icon="TrendingUp"
            delay={0.3}
          />
          <AnimatedStat
            end={BRAND_STATS.satisfaction.value}
            suffix="%"
            label={BRAND_STATS.satisfaction.label}
            icon="Star"
            delay={0.4}
          />
          <AnimatedStat
            end={BRAND_STATS.teamSize.value}
            suffix="+"
            label={BRAND_STATS.teamSize.label}
            icon="Shield"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

interface AnimatedStatProps {
  end: number;
  suffix: string;
  label: string;
  icon: keyof typeof iconMap;
  delay?: number;
  format?: boolean;
}

function AnimatedStat({ end, suffix, label, icon, delay = 0, format = false }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const [displayValue, setDisplayValue] = useState(0);

  const Icon = iconMap[icon];

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const formattedValue = format ? displayValue.toLocaleString() : displayValue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-3 rounded-full bg-primary-800 p-3">
        <Icon className="h-6 w-6 text-secondary-400" />
      </div>
      <div className="mb-1 font-serif text-3xl font-bold text-white md:text-4xl">
        {formattedValue}
        <span className="text-secondary-400">{suffix}</span>
      </div>
      <div className="text-sm text-primary-200">{label}</div>
    </motion.div>
  );
}
