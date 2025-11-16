'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  HelpCircle,
  FileCheck,
  DollarSign,
  Shield,
  Building,
  ClipboardList,
  MapPin,
  Target,
  Filter,
  X,
} from 'lucide-react';
import { FAQCategory } from '@/lib/data/faq';

const iconMap: Record<string, React.ComponentType<any>> = {
  HelpCircle,
  FileCheck,
  DollarSign,
  Shield,
  Building,
  ClipboardList,
  MapPin,
  Target,
};

interface FAQPageContentProps {
  categories: FAQCategory[];
}

export function FAQPageContent({ categories }: FAQPageContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter FAQs based on search query
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  // Apply category filter if selected
  const displayCategories = selectedCategory
    ? filteredCategories.filter((cat) => cat.id === selectedCategory)
    : filteredCategories;

  const totalFAQs = displayCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  return (
    <>
      {/* Search and Filter Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search FAQs... (e.g., 'audit cost', 'timeline', 'RERA')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 pr-4 text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-neutral-600">
                  Found {totalFAQs} result{totalFAQs !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              )}
            </div>

            {/* Category Filters */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-700">
                <Filter className="h-4 w-4" />
                Filter by Category:
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size="sm"
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                  >
                    {category.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {displayCategories.length === 0 ? (
              <div className="rounded-lg bg-white p-12 text-center">
                <HelpCircle className="mx-auto mb-4 h-16 w-16 text-neutral-300" />
                <h3 className="mb-2 text-xl font-semibold text-neutral-700">
                  No FAQs Found
                </h3>
                <p className="text-neutral-600">
                  Try adjusting your search query or browse all categories
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4"
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {displayCategories.map((category, categoryIndex) => {
                  const Icon = iconMap[category.icon] || HelpCircle;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    >
                      {/* Category Header */}
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-full bg-primary-100 p-3">
                          <Icon className="h-6 w-6 text-primary-700" />
                        </div>
                        <div className="flex-1">
                          <h2 className="mb-1 font-serif text-2xl font-bold text-primary-900">
                            {category.title}
                          </h2>
                          <p className="text-neutral-600">{category.description}</p>
                          <Badge variant="secondary" className="mt-2">
                            {category.faqs.length} Question
                            {category.faqs.length !== 1 ? 's' : ''}
                          </Badge>
                        </div>
                      </div>

                      {/* FAQ Accordion */}
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem
                            key={`${category.id}-${faqIndex}`}
                            value={`${category.id}-${faqIndex}`}
                            className="border-neutral-200 bg-white"
                          >
                            <AccordionTrigger className="px-6 text-left font-semibold text-primary-900 hover:text-primary-600 hover:no-underline">
                              {highlightText(faq.question, searchQuery)}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-neutral-700">
                              {highlightText(faq.answer, searchQuery)}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// Helper function to highlight search query in text
function highlightText(text: string, query: string) {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 font-semibold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
