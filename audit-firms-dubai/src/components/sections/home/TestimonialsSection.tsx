'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants/brand';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

/**
 * Testimonials Section
 * Displays client testimonials with ratings
 */

export function TestimonialsSection() {
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
          <p className="mx-auto max-w-2xl text-lg text-neutral-700">
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
      className="relative rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* Quote Icon */}
      <Quote className="absolute right-4 top-4 h-8 w-8 text-primary-100" />

      {/* Rating */}
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary-500 text-secondary-500" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 text-neutral-700 italic">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary-100 text-primary-700">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-primary-900">{testimonial.author}</div>
          <div className="text-sm text-neutral-600">
            {testimonial.position} at {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
