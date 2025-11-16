'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone, Calculator, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { BRAND_STATS, CTA_CONFIG } from '@/lib/constants/brand';

/**
 * Hero Section - Homepage
 * Conversion-optimized hero with trust indicators and dual CTAs
 */

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Ministry Approved Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <Badge 
              variant="outline" 
              className="border-secondary-500 bg-secondary-50 px-4 py-2 text-sm font-semibold text-secondary-900"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Ministry of Economy Approved Auditors
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-900 md:text-5xl lg:text-6xl"
          >
            Dubai's Most Trusted
            <br />
            <span className="text-secondary-700">Audit Firm Since 1985</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-700 md:text-xl lg:text-2xl"
          >
            Expert external audit, internal audit, and advisory services for UAE businesses.
            <br className="hidden md:block" />
            <span className="font-semibold text-primary-700">
              28,000+ clients | 140 countries | 98% satisfaction
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={CTA_CONFIG.primary.href}>
                <Phone className="mr-2 h-5 w-5" />
                {CTA_CONFIG.primary.text}
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href={CTA_CONFIG.secondary.href}>
                <Calculator className="mr-2 h-5 w-5" />
                {CTA_CONFIG.secondary.text}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a 
                href={CTA_CONFIG.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
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
              suffix="Years"
              label="Experience"
            />
            <StatCard 
              value={BRAND_STATS.clients.value}
              suffix="+"
              label="Clients Served"
              format
            />
            <StatCard 
              value={BRAND_STATS.countries.value}
              suffix=""
              label="Countries"
            />
            <StatCard 
              value={BRAND_STATS.awards.value}
              suffix="+"
              label="Awards Won"
            />
          </motion.div>

          {/* Quick Contact Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 sm:flex-row"
          >
            <div className="flex items-center gap-2 text-neutral-600">
              <Phone className="h-5 w-5 text-primary-700" />
              <div className="text-left">
                <div className="text-xs text-neutral-500">Emergency? Call Now</div>
                <a 
                  href={`tel:${CTA_CONFIG.primary.phone.replace(/\s/g, '')}`}
                  className="text-lg font-semibold text-primary-700 hover:text-primary-900"
                >
                  {CTA_CONFIG.primary.phone}
                </a>
              </div>
            </div>
            
            <div className="hidden h-8 w-px bg-neutral-300 sm:block" />
            
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-primary-900">Available:</span> Sunday - Thursday, 9 AM - 6 PM GST
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
  format = false 
}: { 
  value: number; 
  suffix: string; 
  label: string;
  format?: boolean;
}) {
  const displayValue = format ? value.toLocaleString() : value;
  
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-2xl font-bold text-primary-700 md:text-3xl">
        {displayValue}
        <span className="text-secondary-600">{suffix}</span>
      </div>
      <div className="text-xs text-neutral-600 md:text-sm">{label}</div>
    </div>
  );
}
