'use client'

import Link from 'next/link'

interface DAFZACTASectionProps {
  locale: string
}

export function DAFZACTASection({ locale }: DAFZACTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need DAFZA Audit Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Approved auditors for Dubai Airport Free Zone companies. Technology and media sector expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Get Free Quote
          </Link>
          <Link
            href={`/${locale}/services/external-audit`}
            className="px-8 py-4 border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
