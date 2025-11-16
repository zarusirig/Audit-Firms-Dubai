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
            <p className="text-center text-lg text-neutral-700">
              Get answers to common questions about audit services in Dubai
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {HOMEPAGE_FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
