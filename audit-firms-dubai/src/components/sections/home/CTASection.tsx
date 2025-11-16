'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Calculator, Clock, CheckCircle } from 'lucide-react';
import { CTA_CONFIG } from '@/lib/constants/brand';

export function CTASection() {
  const cleanPhone = CTA_CONFIG.primary.phone.replace(/\s/g, '');
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 lg:py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-500 px-4 py-2 text-sm font-semibold text-primary-900">
              <Clock className="h-4 w-4" />
              Audit Deadline Approaching? We Can Help!
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Ready to Get Your Audit Done Right?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-primary-100 md:text-xl"
          >
            Join 28,000+ businesses that trust Farahat & Co for their audit needs.
            <br />
            Get started with a free consultation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary-400" />
              <span>Ministry Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary-400" />
              <span>7-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary-400" />
              <span>Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary-400" />
              <span>98% Satisfaction</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              asChild 
              size="lg" 
              className="w-full bg-secondary-500 text-primary-900 hover:bg-secondary-600 sm:w-auto"
            >
              <Link href={CTA_CONFIG.primary.href}>
                <Phone className="mr-2 h-5 w-5" />
                {CTA_CONFIG.primary.text}
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-primary-900 sm:w-auto"
            >
              <Link href={CTA_CONFIG.secondary.href}>
                <Calculator className="mr-2 h-5 w-5" />
                {CTA_CONFIG.secondary.text}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 border-t border-primary-700 pt-6"
          >
            <p className="mb-2 text-sm text-primary-200">Or call us directly:</p>
            <a 
              href={`tel:${cleanPhone}`}
              className="text-2xl font-bold text-white hover:text-secondary-400 md:text-3xl"
            >
              {CTA_CONFIG.primary.phone}
            </a>
            <p className="mt-2 text-sm text-primary-200">
              Available Sunday - Thursday, 9 AM - 6 PM GST
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
