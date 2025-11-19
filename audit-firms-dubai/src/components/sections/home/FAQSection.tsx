'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { HOMEPAGE_FAQ } from '@/lib/constants/brand';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';

/**
 * FAQ Section with Schema Markup
 * Displays frequently asked questions with structured data
 */

export function FAQSection() {
  // Prepare FAQ data for schema
  const faqSchemaData = HOMEPAGE_FAQ.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <FAQSchema faqs={faqSchemaData} />
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3">
              <HelpCircle className="h-6 w-6 text-primary-700" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl w-full mx-auto text-center px-4 text-lg text-neutral-700">
              Get answers to common questions about audit services in Dubai
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {HOMEPAGE_FAQ.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-200 bg-white rounded-xl px-6 shadow-sm transition-all duration-200 data-[state=open]:border-primary-200 data-[state=open]:bg-primary-50/30 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-gray-900 hover:no-underline py-6 group">
                    <span className="group-hover:text-primary-700 transition-colors">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Interactive Audit Readiness Quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Is Your Business Audit-Ready?</h3>
              <p className="text-primary-700 mb-4">Take our 30-second quiz to find out</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-sm">✓</span>
                  </div>
                  <span className="font-semibold text-sm">Organized financial records</span>
                </div>
                <div className="ml-11 text-xs text-gray-600">Documents ready and accessible</div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold text-sm">📊</span>
                  </div>
                  <span className="font-semibold text-sm">Up-to-date compliance</span>
                </div>
                <div className="ml-11 text-xs text-gray-600">All filings current</div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-primary-600 hover:bg-primary-700">
                <Link href="/tools/audit-readiness-score">
                  Take Free Readiness Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-gray-600 mt-2">Get personalized recommendations • No email required</p>
            </div>
          </motion.div>

          {/* CTA to Full FAQ Page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Button asChild variant="outline">
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
