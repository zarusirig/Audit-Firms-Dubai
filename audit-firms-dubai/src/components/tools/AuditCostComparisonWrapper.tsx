'use client'

import dynamic from 'next/dynamic'

// Dynamically import AuditCostComparison to avoid SSR issues with Radix UI Select
const AuditCostComparison = dynamic(() => import('./AuditCostComparison'), { ssr: false })

export default AuditCostComparison
