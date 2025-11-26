'use client'

import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent SSR issues with Radix UI Accordion
  if (!isMounted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our audit services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg px-6 bg-white animate-pulse"
                >
                  <div className="py-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Our audit experts are here to help. Get in touch for personalized
                answers to your specific situation.
              </p>
              <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our audit services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our audit experts are here to help. Get in touch for personalized
              answers to your specific situation.
            </p>
            <Button size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
