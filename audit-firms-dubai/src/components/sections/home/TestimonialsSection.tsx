'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants/brand';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

/**
 * Testimonials Section
 * Displays client testimonials with ratings
 */

export function TestimonialsSection({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-16 lg:py-24">
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
            What Our Clients Say
          </h2>
          <p className="max-w-2xl w-full mx-auto text-center px-4 whitespace-normal text-lg text-neutral-700">
            Trusted by thousands of businesses across the UAE and beyond
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[number];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col h-full rounded-xl border border-neutral-100 bg-neutral-50/50 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white hover:border-primary-100"
    >
      {/* Quote Icon */}
      <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-200/20 rotate-180" />

      {/* Rating */}
      <div className="mb-6 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary-500 text-secondary-500" />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="mb-8 flex-1 text-neutral-700 italic leading-relaxed">
        "{testimonial.text}"
      </blockquote>

      {/* Author Info */}
      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-neutral-100">
        <Avatar className="h-12 w-12 ring-2 ring-white shadow-sm">
          <AvatarFallback className="bg-primary-100 text-primary-700 font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-neutral-900">{testimonial.author}</div>
          <div className="text-sm text-neutral-500 font-medium">
            {testimonial.position}, <span className="text-primary-600">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
