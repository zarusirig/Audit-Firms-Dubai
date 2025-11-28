'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Calculator,
  TrendingUp,
  DollarSign,
  BarChart3,
  AlertTriangle,
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

const materialitySchema = z.object({
  baseAmount: z.number().min(1, 'Amount must be greater than 0'),
  baseType: z.enum(['revenue', 'assets', 'equity']),
  industry: z.string().min(1, 'Please select an industry'),
})

type MaterialityFormData = z.infer<typeof materialitySchema>

interface MaterialityResult {
  planningMateriality: number
  performanceMateriality: number
  trivialThreshold: number
  benchmarkRange: {
    min: number
    max: number
  }
  industryAverage: number
  recommendation: string
}

const industries = [
  { value: 'manufacturing', label: 'Manufacturing', multiplier: 0.005 },
  { value: 'trading', label: 'Trading & Retail', multiplier: 0.0075 },
  { value: 'real-estate', label: 'Real Estate', multiplier: 0.003 },
  { value: 'financial-services', label: 'Financial Services', multiplier: 0.001 },
  { value: 'healthcare', label: 'Healthcare', multiplier: 0.004 },
  { value: 'technology', label: 'Technology & IT', multiplier: 0.006 },
  { value: 'hospitality', label: 'Hospitality & Tourism', multiplier: 0.008 },
  { value: 'construction', label: 'Construction', multiplier: 0.004 },
  { value: 'oil-gas', label: 'Oil & Gas', multiplier: 0.002 },
  { value: 'other', label: 'Other Services', multiplier: 0.005 },
]

export default function MaterialityCalculator() {
  const [result, setResult] = useState<MaterialityResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<MaterialityFormData>({
    resolver: zodResolver(materialitySchema),
    defaultValues: {
      baseType: 'revenue',
      industry: '',
    },
  })

  const watchedValues = watch()

  const calculateMateriality = (data: MaterialityFormData) => {
    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const { baseAmount, baseType, industry } = data

      // Find industry multiplier
      const industryData = industries.find(ind => ind.value === industry)
      const multiplier = industryData?.multiplier || 0.005

      // Calculate planning materiality (typically 0.5-2% of base amount)
      const planningMateriality = Math.round(baseAmount * multiplier)

      // Performance materiality (usually 75% of planning materiality)
      const performanceMateriality = Math.round(planningMateriality * 0.75)

      // Trivial threshold (usually 5-10% of planning materiality)
      const trivialThreshold = Math.round(planningMateriality * 0.05)

      // Benchmark range (industry standard)
      const benchmarkMin = Math.round(baseAmount * (multiplier * 0.5))
      const benchmarkMax = Math.round(baseAmount * (multiplier * 2))

      // Industry average
      const industryAverage = Math.round(baseAmount * multiplier)

      // Generate recommendation
      let recommendation = ''
      if (planningMateriality < 10000) {
        recommendation = 'Low materiality threshold - consider if audit scope needs adjustment'
      } else if (planningMateriality > 500000) {
        recommendation = 'High materiality threshold - ensure key risks are adequately addressed'
      } else {
        recommendation = 'Materiality level appears appropriate for your business size'
      }

      setResult({
        planningMateriality,
        performanceMateriality,
        trivialThreshold,
        benchmarkRange: { min: benchmarkMin, max: benchmarkMax },
        industryAverage,
        recommendation,
      })

      setIsCalculating(false)
    }, 1000)
  }

  const resetCalculator = () => {
    setResult(null)
    setValue('baseAmount', undefined as any)
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

  const formatPercentage = (amount: number, base: number) => {
    const percentage = ((amount / base) * 100).toFixed(2)
    return `${percentage}%`
  }

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculate Materiality Threshold
          </CardTitle>
          <CardDescription>
            Enter your financial information to calculate appropriate audit materiality levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(calculateMateriality)} className="space-y-6">
            {/* Base Amount */}
            <div className="space-y-2">
              <Label htmlFor="baseAmount">Base Financial Amount (AED)</Label>
              <Input
                id="baseAmount"
                type="number"
                placeholder="Enter amount (e.g., 1000000)"
                {...register('baseAmount', { valueAsNumber: true })}
                className={errors.baseAmount ? 'border-red-500' : ''}
              />
              {errors.baseAmount && (
                <p className="text-sm text-red-500">{errors.baseAmount.message}</p>
              )}
            </div>

            {/* Base Type */}
            <div className="space-y-2">
              <Label htmlFor="baseType">Base Amount Type</Label>
              <Select
                value={watchedValues.baseType}
                onValueChange={(value) => setValue('baseType', value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select base type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue (Most Common)</SelectItem>
                  <SelectItem value="assets">Total Assets</SelectItem>
                  <SelectItem value="equity">Shareholders' Equity</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-600">
                Materiality is typically calculated as a percentage of revenue for most businesses
              </p>
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry">Industry Sector</Label>
              <Select
                value={watchedValues.industry}
                onValueChange={(value) => setValue('industry', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
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
              <p className="text-sm text-gray-600">
                Industry affects materiality percentage - higher risk industries use lower percentages
              </p>
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isCalculating} className="w-full" size="lg">
              {isCalculating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Materiality
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <CheckCircle2 className="h-5 w-5" />
                Materiality Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900 mb-1">
                    {formatCurrency(result.planningMateriality)}
                  </div>
                  <div className="text-sm font-medium text-green-700 mb-1">Planning Materiality</div>
                  <div className="text-xs text-green-600">
                    {formatPercentage(result.planningMateriality, watchedValues.baseAmount || 1)} of base amount
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">
                    {formatCurrency(result.performanceMateriality)}
                  </div>
                  <div className="text-sm font-medium text-blue-700 mb-1">Performance Materiality</div>
                  <div className="text-xs text-blue-600">
                    75% of planning materiality
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900 mb-1">
                    {formatCurrency(result.trivialThreshold)}
                  </div>
                  <div className="text-sm font-medium text-amber-700 mb-1">Trivial Threshold</div>
                  <div className="text-xs text-amber-600">
                    5% of planning materiality
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industry Benchmark */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Industry Benchmark Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Industry Standard Range:</span>
                  <Badge variant="outline">
                    {formatCurrency(result.benchmarkRange.min)} - {formatCurrency(result.benchmarkRange.max)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Your Calculated Level:</span>
                  <Badge variant="default">
                    {formatCurrency(result.planningMateriality)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Industry Average:</span>
                  <Badge variant="secondary">
                    {formatCurrency(result.industryAverage)}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendation */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="font-medium">
              {result.recommendation}
            </AlertDescription>
          </Alert>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>What These Numbers Mean</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Planning Materiality</h4>
                <p className="text-sm text-gray-600">
                  The maximum amount by which financial statements can be misstated without affecting user decisions.
                  This guides the overall audit approach and risk assessment.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Materiality</h4>
                <p className="text-sm text-gray-600">
                  Applied during detailed testing. Misstatements below this level are generally acceptable,
                  though they may still need evaluation for qualitative factors.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Trivial Threshold</h4>
                <p className="text-sm text-gray-600">
                  Amounts below this threshold are considered clearly trivial and typically do not require
                  documentation or further evaluation, even if individually immaterial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <div className="text-center">
            <Button onClick={resetCalculator} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Calculate Different Amount
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}







