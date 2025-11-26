'use client'

import dynamic from 'next/dynamic'

// Dynamically import AboutStatistics to avoid SSR issues with framer-motion
const AboutStatistics = dynamic(() => import('./AboutStatistics'), { ssr: false })

export default AboutStatistics
