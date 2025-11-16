import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQ {
  question: string
  answer: string
}

interface GuideFAQProps {
  faqs: FAQ[]
}

export function GuideFAQ({ faqs }: GuideFAQProps) {
  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Common questions answered by our experts
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white shadow-sm">
            <AccordionTrigger className="text-left font-semibold hover:text-primary-600 py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-2 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
