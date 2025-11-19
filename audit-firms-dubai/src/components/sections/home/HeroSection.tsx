'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone, Calculator, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { BRAND_STATS, CTA_CONFIG } from '@/lib/constants/brand';
import type { Locale } from '@/lib/i18n/config';

/**
 * Hero Section - Homepage
 * Conversion-optimized hero with trust indicators and dual CTAs
 */

interface HeroSectionProps {
  dict: any;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <a
          href={`tel:${CTA_CONFIG.primary.phone.replace(/\s/g, '')}`}
          className="bg-secondary-500 text-primary-900 px-6 py-3 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 hover:bg-secondary-600 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>
      {/* Background Pattern & Blobs */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-secondary-100/40 blur-3xl"
      />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Ministry Approved Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="relative overflow-hidden rounded-full border border-secondary-200 bg-white/80 px-6 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
              <div className="relative flex items-center gap-2 text-sm font-semibold text-secondary-800">
                <CheckCircle2 className="h-4 w-4 text-secondary-600" />
                {dict.hero.badge}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-900 md:text-5xl lg:text-6xl"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {dict.hero.title}
            <br />
            <span className="text-secondary-700">{dict.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-700 md:text-xl lg:text-2xl max-w-2xl w-full mx-auto text-center"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {dict.hero.subtitle}
            <br className="hidden md:block" />
            <span className="font-semibold text-primary-700">
              {dict.hero.stats}
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[48px]">
              <Link href={CTA_CONFIG.primary.href}>
                <Phone className={locale === 'ar' ? 'ml-2 h-5 w-5' : 'mr-2 h-5 w-5'} />
                {dict.hero.cta}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary-300 hover:bg-primary-50 px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px]">
              <Link href={CTA_CONFIG.secondary.href}>
                <Calculator className={locale === 'ar' ? 'ml-2 h-5 w-5' : 'mr-2 h-5 w-5'} />
                {dict.hero.secondaryCta}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-green-500 text-green-700 hover:bg-green-50 px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px]">
              <a
                href={CTA_CONFIG.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className={locale === 'ar' ? 'ml-2 h-5 w-5' : 'mr-2 h-5 w-5'} />
                {dict.hero.whatsappCta}
              </a>
            </Button>
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8 inline-block rounded-full bg-red-50 border border-red-200 px-6 py-3"
          >
            <div className="flex items-center gap-2 text-red-800" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-semibold">{dict.hero.urgency}</span>
            </div>
          </motion.div>

          {/* Trust Indicators - Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            <StatCard
              value={BRAND_STATS.experience.value}
              suffix={locale === 'ar' ? '' : 'Years'}
              label={dict.hero.experienceLabel}
              locale={locale}
            />
            <StatCard
              value={BRAND_STATS.clients.value}
              suffix="+"
              label={dict.hero.clientsLabel}
              format
              locale={locale}
            />
            <StatCard
              value={BRAND_STATS.countries.value}
              suffix=""
              label={dict.hero.countriesLabel}
              locale={locale}
            />
            <StatCard
              value={98}
              suffix="%"
              label={dict.hero.successRateLabel}
              locale={locale}
            />
          </motion.div>

          {/* Quick Contact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-col items-center justify-center gap-8 rounded-2xl border border-white/50 bg-white/40 px-8 py-8 shadow-xl backdrop-blur-md sm:flex-row sm:gap-12"
          >
            <div className="flex items-center gap-4 text-neutral-700 group cursor-pointer">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-primary-100 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary-200">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-0.5">{dict.hero.supportLabel}</div>
                <a
                  href={`tel:${CTA_CONFIG.primary.phone.replace(/\s/g, '')}`}
                  className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-700"
                  dir="ltr"
                >
                  {CTA_CONFIG.primary.phone}
                </a>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-primary-200 to-transparent sm:block" />

            <div className="flex items-center gap-4 text-neutral-700 group">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-secondary-200 transition-transform duration-300 group-hover:scale-110 group-hover:ring-secondary-300">
                <CheckCircle2 className="h-6 w-6 text-secondary-600" />
              </div>
              <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold uppercase tracking-wider text-secondary-700 mb-0.5">{dict.hero.guaranteedLabel}</div>
                <div className="text-lg font-bold text-neutral-900">{dict.hero.deliveryTime}</div>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-primary-200 to-transparent sm:block" />

            <div className="flex items-center gap-4 text-neutral-700">
              <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-neutral-200">
                <div className="h-6 w-6 flex items-center justify-center font-bold text-xs text-neutral-600 bg-neutral-100 rounded-full">9-6</div>
              </div>
              <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-0.5">{dict.hero.businessHoursLabel}</div>
                <div className="text-sm font-medium text-neutral-900">{dict.hero.businessHours}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({
  value,
  suffix,
  label,
  format = false,
  locale
}: {
  value: number;
  suffix: string;
  label: string;
  format?: boolean;
  locale: Locale;
}) {
  const displayValue = format ? value.toLocaleString(locale === 'ar' ? 'ar-AE' : 'en-US') : value;

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-2xl font-bold text-primary-700 md:text-3xl" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {displayValue}
        <span className="text-secondary-600">{suffix}</span>
      </div>
      <div className="text-xs text-neutral-600 md:text-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>{label}</div>
    </div>
  );
}
