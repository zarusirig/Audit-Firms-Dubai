/**
 * Calculator Tool Schema Markup
 * Helps Google understand and display the calculator in search results
 */

import { SITE_CONFIG } from '@/lib/constants'

export function CalculatorSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Audit Fee Calculator',
    description:
      'Free online calculator to estimate audit fees for businesses in Dubai, UAE. Get instant pricing for external audit, internal audit, RERA audit, and more.',
    url: `${SITE_CONFIG.url}/en/calculator`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'ProfessionalService',
      name: 'Farahat & Co',
      image: `${SITE_CONFIG.url}/logo.png`,
      telephone: '+971-42-500-251',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 1901, The Prism Tower',
        addressLocality: 'Business Bay',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      priceRange: 'AED 8,000 - AED 200,000',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '28058',
      },
    },
    featureList: [
      'Instant fee calculation',
      'Detailed price breakdown',
      'Timeline estimation',
      'Complexity factor analysis',
      'Shareable results',
      'PDF download',
      'Industry-specific pricing',
      'Free to use',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema for Calculator Page
export function CalculatorFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How accurate is the audit fee calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our calculator provides an estimated price range based on the information you provide. The actual fee may vary by ±15% depending on factors discovered during our initial assessment. For an exact quote, request a detailed proposal from our team.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors affect audit fees in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Audit fees are determined by company revenue, industry sector, number of locations, employee count, complexity factors (like international operations, group structures, regulatory requirements), previous audit status, and service urgency. Our calculator considers all these factors.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does an audit cost in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Audit fees in Dubai typically range from AED 8,000 for small businesses to AED 200,000+ for large corporations. The exact cost depends on your company size, industry, and complexity. Use our free calculator to get an instant estimate for your specific situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the calculator free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our audit fee calculator is completely free to use with no registration required. You can calculate estimates as many times as you need and share your results with colleagues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a binding quote from the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator provides an estimate for budgeting purposes. For a binding quote with a fixed price, click "Get Exact Quote" after viewing your results, or call us at +971 42 500 251 to speak with our audit specialists.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information do I need to use the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You'll need to know your company type, industry sector, annual revenue range, number of employees, number of locations, previous audit status, and any complexity factors like international operations or group structures.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete the calculation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The calculator takes about 2-3 minutes to complete. It's a simple 3-step process: company information, financial details, and audit requirements. Your estimate is generated instantly.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I save and share my calculation results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can share your results via a unique URL, download them as a PDF, or save them for later reference. The calculator also automatically saves your progress locally.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

// HowTo Schema for Calculator Usage
export function CalculatorHowToSchema() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Audit Fees in Dubai',
    description:
      'Step-by-step guide to calculating your audit fees using our free online calculator',
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Enter Company Information',
        text: 'Select your company type (LLC, Free Zone, Branch, etc.) and industry sector from the dropdown menus.',
        image: `${SITE_CONFIG.url}/images/calculator-step1.jpg`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Provide Financial Details',
        text: 'Enter your annual revenue range, number of employees, and number of business locations.',
        image: `${SITE_CONFIG.url}/images/calculator-step2.jpg`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Specify Audit Requirements',
        text: 'Select your previous audit status, service urgency, and any complexity factors that apply to your business.',
        image: `${SITE_CONFIG.url}/images/calculator-step3.jpg`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'View Your Results',
        text: 'Click "Calculate Fee" to instantly see your price range, detailed breakdown, timeline estimate, and personalized recommendations.',
        image: `${SITE_CONFIG.url}/images/calculator-results.jpg`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  )
}
