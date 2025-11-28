'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  Building,
  Users,
  CheckCircle2,
  RefreshCw
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'

const costComparisonSchema = z.object({
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select industry'),
  auditType: z.enum(['external', 'internal', 'both']),
  complexity: z.enum(['simple', 'moderate', 'complex']),
})

type CostComparisonFormData = z.infer<typeof costComparisonSchema>

interface CostComparison {
  big4: {
    range: { min: number; max: number }
    average: number
    timeline: string
  }
  local: {
    range: { min: number; max: number }
    average: number
    timeline: string
  }
  elite: {
    range: { min: number; max: number }
    average: number
    timeline: string
  }
  savings: {
    vsBig4: number
    vsLocal: number
    percentage: number
  }
}

const companySizes = [
  { value: 'micro', label: 'Micro (Revenue < AED 1M)', multiplier: 0.8 },
  { value: 'small', label: 'Small (AED 1M-10M)', multiplier: 1.0 },
  { value: 'medium', label: 'Medium (AED 10M-50M)', multiplier: 1.5 },
  { value: 'large', label: 'Large (AED 50M-200M)', multiplier: 2.5 },
  { value: 'enterprise', label: 'Enterprise (AED 200M+)', multiplier: 4.0 },
]

const industries = [
  { value: 'general', label: 'General Business', multiplier: 1.0 },
  { value: 'trading', label: 'Trading & Distribution', multiplier: 1.1 },
  { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
  { value: 'real-estate', label: 'Real Estate', multiplier: 1.3 },
  { value: 'financial', label: 'Financial Services', multiplier: 1.4 },
  { value: 'healthcare', label: 'Healthcare', multiplier: 1.2 },
  { value: 'technology', label: 'Technology', multiplier: 1.1 },
  { value: 'hospitality', label: 'Hospitality', multiplier: 1.3 },
  { value: 'construction', label: 'Construction', multiplier: 1.5 },
  { value: 'oil-gas', label: 'Oil & Gas', multiplier: 1.8 },
]

const auditTypes = [
  { value: 'external', label: 'External Audit Only', multiplier: 1.0 },
  { value: 'internal', label: 'Internal Audit Only', multiplier: 0.7 },
  { value: 'both', label: 'Both External & Internal', multiplier: 1.5 },
]

const complexityLevels = [
  { value: 'simple', label: 'Simple Operations', multiplier: 0.8 },
  { value: 'moderate', label: 'Moderate Complexity', multiplier: 1.0 },
  { value: 'complex', label: 'High Complexity', multiplier: 1.3 },
]

export default function AuditCostComparison() {
  const [result, setResult] = useState<CostComparison | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CostComparisonFormData>({
    resolver: zodResolver(costComparisonSchema),
    defaultValues: {
      auditType: 'external',
      complexity: 'moderate',
    },
  })

  const watchedValues = watch()

  const calculateCosts = (data: CostComparisonFormData) => {
    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const { companySize, industry, auditType, complexity } = data

      // Get multipliers
      const sizeData = companySizes.find(s => s.value === companySize)
      const industryData = industries.find(i => i.value === industry)
      const typeData = auditTypes.find(t => t.value === auditType)
      const complexityData = complexityLevels.find(c => c.value === complexity)

      const sizeMultiplier = sizeData?.multiplier || 1.0
      const industryMultiplier = industryData?.multiplier || 1.0
      const typeMultiplier = typeData?.multiplier || 1.0
      const complexityMultiplier = complexityData?.multiplier || 1.0

      // Base costs (approximate market rates in AED)
      const baseBig4 = 35000 * sizeMultiplier * industryMultiplier * typeMultiplier * complexityMultiplier
      const baseLocal = 15000 * sizeMultiplier * industryMultiplier * typeMultiplier * complexityMultiplier
      const baseElite = 12000 * sizeMultiplier * industryMultiplier * typeMultiplier * complexityMultiplier

      // Calculate ranges (±20% for Big4, ±15% for others)
      const big4Range = {
        min: Math.round(baseBig4 * 0.8),
        max: Math.round(baseBig4 * 1.2)
      }
      const localRange = {
        min: Math.round(baseLocal * 0.85),
        max: Math.round(baseLocal * 1.15)
      }
      const eliteRange = {
        min: Math.round(baseElite * 0.9),
        max: Math.round(baseElite * 1.1)
      }

      // Timeline estimates
      const getTimeline = (size: string) => {
        switch (size) {
          case 'micro': return '2-3 weeks'
          case 'small': return '3-4 weeks'
          case 'medium': return '4-6 weeks'
          case 'large': return '6-8 weeks'
          case 'enterprise': return '8-12 weeks'
          default: return '4-6 weeks'
        }
      }

      const timeline = getTimeline(companySize)

      // Calculate savings
      const vsBig4 = Math.round(baseBig4 - baseElite)
      const vsLocal = Math.round(baseLocal - baseElite)
      const percentage = Math.round((vsBig4 / baseBig4) * 100)

      setResult({
        big4: {
          range: big4Range,
          average: Math.round(baseBig4),
          timeline: companySize === 'enterprise' ? '10-16 weeks' : timeline
        },
        local: {
          range: localRange,
          average: Math.round(baseLocal),
          timeline
        },
        elite: {
          range: eliteRange,
          average: Math.round(baseElite),
          timeline
        },
        savings: {
          vsBig4,
          vsLocal,
          percentage
        }
      })

      setIsCalculating(false)
    }, 1500)
  }

  const resetComparison = () => {
    setResult(null)
    setValue('companySize', '')
    setValue('industry', '')
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Prevent SSR issues with Radix UI components
  if (!isMounted) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Compare Audit Costs
            </CardTitle>
            <CardDescription>
              Loading comparison tool...
            </CardDescription>
          </CardHeader>
          <CardContent className="py-12">
            <div className="flex justify-center">
              <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Compare Audit Costs
          </CardTitle>
          <CardDescription>
            Get realistic pricing estimates for Big 4, local firms, and Audit Firms Dubai
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(calculateCosts)} className="space-y-6">
            {/* Company Size */}
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size (Annual Revenue)</Label>
              <Select
                value={watchedValues.companySize}
                onValueChange={(value) => setValue('companySize', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.companySize && (
                <p className="text-sm text-red-500">{errors.companySize.message}</p>
              )}
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry">Industry Sector</Label>
              <Select
                value={watchedValues.industry}
                onValueChange={(value) => setValue('industry', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-500">{errors.industry.message}</p>
              )}
            </div>

            {/* Audit Type */}
            <div className="space-y-2">
              <Label htmlFor="auditType">Audit Services Needed</Label>
              <Select
                value={watchedValues.auditType}
                onValueChange={(value) => setValue('auditType', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select audit type" />
                </SelectTrigger>
                <SelectContent>
                  {auditTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Complexity */}
            <div className="space-y-2">
              <Label htmlFor="complexity">Business Complexity</Label>
              <Select
                value={watchedValues.complexity}
                onValueChange={(value) => setValue('complexity', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select complexity level" />
                </SelectTrigger>
                <SelectContent>
                  {complexityLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isCalculating} className="w-full" size="lg">
              {isCalculating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Calculating Costs...
                </>
              ) : (
                <>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Compare Costs
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Cost Comparison Table */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <CheckCircle2 className="h-5 w-5" />
                Cost Comparison Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-4 text-left font-semibold">Audit Firm Type</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Price Range</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Average Cost</th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-4 font-medium flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        Big 4 Firms (EY, PwC, KPMG, Deloitte)
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {formatCurrency(result.big4.range.min)} - {formatCurrency(result.big4.range.max)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center font-semibold">
                        {formatCurrency(result.big4.average)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {result.big4.timeline}
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium flex items-center gap-2">
                        <Users className="h-5 w-5 text-gray-600" />
                        Local Audit Firms
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {formatCurrency(result.local.range.min)} - {formatCurrency(result.local.range.max)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center font-semibold">
                        {formatCurrency(result.local.average)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">
                        {result.local.timeline}
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-200 p-4 font-medium flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Audit Firms Dubai (Recommended)
                      </td>
                      <td className="border border-gray-200 p-4 text-center bg-blue-100">
                        {formatCurrency(result.elite.range.min)} - {formatCurrency(result.elite.range.max)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center font-semibold bg-blue-100 text-blue-900">
                        {formatCurrency(result.elite.average)}
                      </td>
                      <td className="border border-gray-200 p-4 text-center bg-blue-100">
                        {result.elite.timeline}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Savings Highlight */}
          {result.savings.vsBig4 > 0 && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="font-medium text-green-900">
                Save {formatCurrency(result.savings.vsBig4)} ({result.savings.percentage}%) compared to Big 4 firms
                while getting the same quality standards and Ministry approval.
              </AlertDescription>
            </Alert>
          )}

          {/* Value Proposition */}
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Audit Firms Dubai?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Ministry-Approved Auditors</div>
                      <div className="text-sm text-gray-600">Same regulatory compliance as Big 4 firms</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Local Market Expertise</div>
                      <div className="text-sm text-gray-600">Deep understanding of UAE business environment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Faster Response Times</div>
                      <div className="text-sm text-gray-600">Quicker audit completion and issue resolution</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Transparent Pricing</div>
                      <div className="text-sm text-gray-600">No hidden fees or surprise charges</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Modern Technology</div>
                      <div className="text-sm text-gray-600">Advanced audit tools and real-time reporting</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Personalized Service</div>
                      <div className="text-sm text-gray-600">Dedicated audit team and direct communication</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Alert className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-800">
                  <div className="font-medium mb-1">Important Disclaimer</div>
                  <div>
                    These estimates are based on typical market rates and general industry data.
                    Actual audit costs may vary based on specific circumstances, scope of work,
                    and additional services required. Contact us for a personalized quote.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <div className="text-center">
            <Button onClick={resetComparison} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Compare Different Scenario
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}







