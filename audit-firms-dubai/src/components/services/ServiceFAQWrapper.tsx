'use client'

import dynamic from 'next/dynamic'

// Dynamically import ServiceFAQ to avoid SSR issues with Radix UI Accordion
const ServiceFAQ = dynamic(() => import('./ServiceFAQ').then(mod => mod.ServiceFAQ), { ssr: false })

export { ServiceFAQ }
export default ServiceFAQ
