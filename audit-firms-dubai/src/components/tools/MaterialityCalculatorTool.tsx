'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, Info, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

type MaterialityBasis = 'revenue' | 'assets' | 'profit' | 'equity'

interface MaterialityRange {
  low: number
  mid: number
  high: number
  percentage: {
    low: number
    mid: number
    high: number
  }
}

export function MaterialityCalculatorTool() {
  const [basis, setBasis] = useState<MaterialityBasis>('revenue')
  const [amount, setAmount] = useState<string>('')
  const [results, setResults] = useState<MaterialityRange | null>(null)

  // Calculate materiality when inputs change
  useEffect(() => {
    if (!amount || parseFloat(amount) <= 0) {
      setResults(null)
      return
    }

    const value = parseFloat(amount)
    let percentages: { low: number; mid: number; high: number }

    // Industry standard percentage ranges by basis
    switch (basis) {
      case 'revenue':
        percentages = { low: 0.5, mid: 1.0, high: 2.0 }
        break
      case 'assets':
        percentages = { low: 0.5, mid: 0.75, high: 1.0 }
        break
      case 'profit':
        percentages = { low: 5.0, mid: 7.5, high: 10.0 }
        break
      case 'equity':
        percentages = { low: 1.0, mid: 1.5, high: 2.0 }
        break
    }

    const low = (value * percentages.low) / 100
    const mid = (value * percentages.mid) / 100
    const high = (value * percentages.high) / 100

    setResults({
      low,
      mid,
      high,
      percentage: percentages,
    })
  }, [basis, amount])

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getBasisInfo = (selectedBasis: MaterialityBasis) => {
    const info = {
      revenue: {
        label: 'Revenue/Turnover',
        description: 'Most common basis for profit-oriented entities',
        icon: DollarSign,
        benchmark: '0.5% - 2%',
        example: 'If revenue is AED 10M, materiality would be AED 50K - 200K',
      },
      assets: {
        label: 'Total Assets',
        description: 'Common for asset-intensive businesses',
        icon: TrendingUp,
        benchmark: '0.5% - 1%',
        example: 'If assets are AED 50M, materiality would be AED 250K - 500K',
      },
      profit: {
        label: 'Profit Before Tax',
        description: 'Used for highly profitable entities',
        icon: TrendingUp,
        benchmark: '5% - 10%',
        example: 'If profit is AED 2M, materiality would be AED 100K - 200K',
      },
      equity: {
        label: 'Total Equity',
        description: 'Common for financial institutions',
        icon: TrendingUp,
        benchmark: '1% - 2%',
        example: 'If equity is AED 20M, materiality would be AED 200K - 400K',
      },
    }
    return info[selectedBasis]
  }

  const getPerformanceMateriality = () => {
    if (!results) return null
    // Performance materiality is typically 50-75% of planning materiality
    return {
      low: results.mid * 0.5,
      mid: results.mid * 0.65,
      high: results.mid * 0.75,
    }
  }

  const performanceMat = getPerformanceMateriality()

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-purple-600" />
                Calculate Materiality
              </CardTitle>
              <CardDescription>
                Select a basis and enter the amount to calculate audit materiality thresholds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basis Selection */}
              <div>
                <Label className="mb-3 block text-base font-medium">
                  Select Materiality Basis
                </Label>
                <RadioGroup value={basis} onValueChange={(value) => setBasis(value as MaterialityBasis)}>
                  <div className="space-y-3">
                    {(['revenue', 'assets', 'profit', 'equity'] as MaterialityBasis[]).map((b) => {
                      const info = getBasisInfo(b)
                      return (
                        <div
                          key={b}
                          className={`flex items-start space-x-3 rounded-lg border-2 p-4 transition-all ${
                            basis === b
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <RadioGroupItem value={b} id={b} className="mt-1" />
                          <Label htmlFor={b} className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{info.label}</span>
                              <Badge variant="outline" className="text-xs">
                                {info.benchmark}
                              </Badge>
                            </div>
                            <div className="mt-1 text-sm text-gray-600">{info.description}</div>
                          </Label>
                        </div>
                      )
                    })}
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Input */}
              <div>
                <Label htmlFor="amount" className="mb-2 block text-base font-medium">
                  Enter Amount (AED)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    AED
                  </span>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-14 text-lg"
                    min="0"
                    step="1000"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {getBasisInfo(basis).example}
                </p>
              </div>

              {/* Info Box */}
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 shrink-0 text-purple-600" />
                    <div className="text-sm text-gray-700">
                      <p className="font-medium text-purple-900">Professional Judgment Required</p>
                      <p className="mt-1">
                        These calculations provide common benchmarks. Auditors consider additional
                        factors when setting final materiality levels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div>
          {results ? (
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <TrendingUp className="h-6 w-6" />
                  Materiality Results
                </CardTitle>
                <CardDescription>Based on {getBasisInfo(basis).label}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Planning Materiality */}
                <div>
                  <div className="mb-4 flex items-baseline justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Planning Materiality</h3>
                    <Badge variant="default" className="bg-purple-600">
                      Primary Threshold
                    </Badge>
                  </div>

                  <div className="mb-4 rounded-lg bg-gradient-to-r from-purple-100 to-purple-50 p-6">
                    <div className="mb-2 text-sm font-medium text-purple-700">
                      Typical Range ({results.percentage.low}% - {results.percentage.high}%)
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-gray-600">Conservative</div>
                        <div className="text-lg font-bold text-purple-900">
                          {formatCurrency(results.low)}
                        </div>
                        <div className="text-xs text-gray-600">{results.percentage.low}%</div>
                      </div>
                      <div className="rounded-lg bg-purple-600 p-2 text-white">
                        <div className="text-xs">Recommended</div>
                        <div className="text-xl font-bold">{formatCurrency(results.mid)}</div>
                        <div className="text-xs">{results.percentage.mid}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Aggressive</div>
                        <div className="text-lg font-bold text-purple-900">
                          {formatCurrency(results.high)}
                        </div>
                        <div className="text-xs text-gray-600">{results.percentage.high}%</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conservative (Lower Risk)</span>
                      <span className="font-medium">{formatCurrency(results.low)}</span>
                    </div>
                    <Progress value={33} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Standard (Balanced)</span>
                      <span className="font-medium">{formatCurrency(results.mid)}</span>
                    </div>
                    <Progress value={66} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Aggressive (Higher Risk)</span>
                      <span className="font-medium">{formatCurrency(results.high)}</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                {/* Performance Materiality */}
                {performanceMat && (
                  <div className="border-t pt-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Performance Materiality</h3>
                      <p className="text-sm text-gray-600">
                        Set lower to reduce aggregation risk (typically 50-75% of planning)
                      </p>
                    </div>
                    <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Conservative (50%)</span>
                        <span className="font-medium">{formatCurrency(performanceMat.low)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Typical (65%)</span>
                        <span className="font-medium">{formatCurrency(performanceMat.mid)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Aggressive (75%)</span>
                        <span className="font-medium">{formatCurrency(performanceMat.high)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interpretation */}
                <div className="border-t pt-6">
                  <h3 className="mb-3 font-bold text-gray-900">What This Means</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                      <span>
                        Misstatements <strong>below</strong> this threshold are generally not
                        material
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                      <span>
                        Misstatements <strong>above</strong> this threshold require adjustment or
                        disclosure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                      <span>Auditors design procedures to detect errors exceeding materiality</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="flex min-h-[400px] items-center justify-center py-12">
                <div className="text-center">
                  <Calculator className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p className="text-lg font-medium text-gray-600">
                    Enter an amount to calculate materiality
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Results will appear here with detailed breakdowns
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Additional Info */}
      {results && (
        <Card className="mt-8 border-2 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Need Professional Audit Services?
                </h3>
                <p className="text-gray-700">
                  Our certified auditors can help determine appropriate materiality levels for your
                  specific situation and conduct a comprehensive audit.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <a href="/contact">Get Free Consultation</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/calculator">Calculate Audit Fees</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
