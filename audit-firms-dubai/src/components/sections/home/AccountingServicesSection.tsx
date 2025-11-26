'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calculator, FileText, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Accounting Services Section
 * Captures "accounting firms in dubai" keyword cluster (500+ monthly searches)
 * Strategic placement: Between ServicesGrid and WhyChooseUs
 */

const accountingServices = [
  {
    icon: FileText,
    title: 'Bookkeeping Services',
    description: 'Daily accounting, transaction recording, bank reconciliation',
  },
  {
    icon: Calculator,
    title: 'Financial Reporting',
    description: 'IFRS-compliant financial statements and management accounts',
  },
  {
    icon: TrendingUp,
    title: 'CFO Services',
    description: 'Part-time CFO, financial strategy, budgeting, and forecasting',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Payroll processing, WPS compliance, end-of-service calculations',
  },
];

export function AccountingServicesSection({ dict }: { dict: any }) {
  return (
    <section className="bg-gradient-to-br from-white to-primary-50/30 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 border border-secondary-200">
              <Calculator className="h-4 w-4 text-secondary-600" />
              <span className="text-sm font-semibold text-secondary-700">Full-Service Accounting</span>
            </div>

            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              Professional Accounting & Auditing Firms in Dubai
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-neutral-700 leading-relaxed">
              As one of the leading <strong>accounting and auditing firms in Dubai</strong>,
              we provide comprehensive accounting services alongside our specialized audit offerings.
              Our team of <strong>chartered accountants in Dubai</strong> handles everything from
              bookkeeping to financial reporting, serving businesses across <strong>Dubai mainland,
              all free zones, Abu Dhabi, Sharjah, and throughout UAE</strong>.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {accountingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 transition-all duration-300 group-hover:bg-primary-500">
                    <Icon className="h-6 w-6 text-primary-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 font-bold text-neutral-900">{service.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Content - Keyword Rich */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl border border-primary-100 p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  Complete Accounting Solutions for UAE Businesses
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Our <strong>accounting firm in Dubai</strong> combines traditional bookkeeping
                  with modern financial management. Whether you need monthly accounting services,
                  financial statement preparation, or strategic CFO guidance, our experienced
                  team provides tailored solutions for businesses in <strong>DIFC, DMCC, JAFZA,
                  and all UAE free zones</strong>.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Monthly accounting and financial statement preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>VAT return filing and corporate tax compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Payroll services and WPS compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Part-time CFO and financial advisory services</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Need audit services too? Our{' '}
                  <Link href="/services/external-audit" className="text-primary-700 font-semibold hover:underline">
                    external audit services in Dubai
                  </Link>{' '}
                  complement our accounting offerings. We also provide{' '}
                  <Link href="/services/vat-audit" className="text-primary-700 font-semibold hover:underline">
                    VAT audit services
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/internal-audit" className="text-primary-700 font-semibold hover:underline">
                    internal audit solutions
                  </Link>{' '}
                  for businesses across UAE.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-700 mb-2">150+</div>
                  <div className="text-sm text-neutral-600 font-medium">Chartered Accountants</div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-secondary-700 mb-2">95%</div>
                  <div className="text-sm text-neutral-600 font-medium">CPA/CA/ACCA Qualified</div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-green-700 mb-2">28K+</div>
                  <div className="text-sm text-neutral-600 font-medium">Clients Served</div>
                </div>
                <div className="text-center">
                  <Button asChild className="w-full bg-primary-600 hover:bg-primary-700">
                    <Link href="/contact">
                      Get Accounting Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Keyword-Rich Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-neutral-600 leading-relaxed max-w-4xl mx-auto">
              Looking for reliable <strong>accounting firms in UAE</strong>? Our <strong>auditing
              and accounting companies in Dubai</strong> serve businesses of all sizes across Dubai,
              Abu Dhabi, Sharjah, and all emirates. From startup bookkeeping to enterprise CFO services,
              we're your trusted partner for all financial needs. Our <strong>accounting firm in Dubai</strong>{' '}
              offers integrated audit and accounting solutions with Ministry approval and guaranteed quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
