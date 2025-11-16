'use client'

/**
 * Multi-Step Audit Fee Calculator Form
 * Beautiful, user-friendly interface with validation
 */

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Briefcase,
  DollarSign,
  Users,
  MapPin,
  FileCheck,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Clock,
  Info,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

import {
  COMPANY_TYPE_LABELS,
  INDUSTRY_LABELS,
  REVENUE_LABELS,
  EMPLOYEE_LABELS,
  AUDIT_STATUS_LABELS,
  URGENCY_LABELS,
  COMPLEXITY_FACTOR_LABELS,
  COMPLEXITY_FACTOR_DESCRIPTIONS,
  type CalculatorInputs,
  type ComplexityFactors,
} from './types'
import { calculatorSchema, type CalculatorFormData } from './validation'

interface CalculatorFormProps {
  onCalculate: (data: CalculatorInputs) => void
  initialData?: Partial<CalculatorInputs>
  isLoading?: boolean
}

const TOTAL_STEPS = 3

export function CalculatorForm({ onCalculate, initialData, isLoading }: CalculatorFormProps) {
  const [currentStep, setCurrentStep] = useState(1)

  // Initialize form with default values
  const form = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      companyType: initialData?.companyType || undefined,
      industrySector: initialData?.industrySector || undefined,
      annualRevenue: initialData?.annualRevenue || undefined,
      numberOfEmployees: initialData?.numberOfEmployees || undefined,
      numberOfLocations: initialData?.numberOfLocations || 1,
      previousAuditStatus: initialData?.previousAuditStatus || undefined,
      urgency: initialData?.urgency || 'standard',
      complexityFactors: initialData?.complexityFactors || {
        multipleCurrencies: false,
        inventoryHeavy: false,
        relatedPartyTransactions: false,
        internationalOperations: false,
        complexGroupStructure: false,
        subsidiaries: false,
        consolidatedFinancials: false,
        regulatedIndustry: false,
      },
    },
    mode: 'onChange',
  })

  // Auto-save to localStorage
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('calculator-draft', JSON.stringify(value))
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !initialData) {
      try {
        const saved = localStorage.getItem('calculator-draft')
        if (saved) {
          const data = JSON.parse(saved)
          form.reset(data)
        }
      } catch (error) {
        console.warn('Corrupted calculator draft data, ignoring:', error)
        // Clear corrupted data
        localStorage.removeItem('calculator-draft')
      }
    }
  }, [form, initialData])

  const handleNext = async () => {
    let isValid = false

    // Validate current step
    if (currentStep === 1) {
      isValid = await form.trigger(['companyType', 'industrySector'])
    } else if (currentStep === 2) {
      isValid = await form.trigger(['annualRevenue', 'numberOfEmployees', 'numberOfLocations'])
    } else if (currentStep === 3) {
      isValid = await form.trigger(['previousAuditStatus', 'urgency'])
    }

    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const onSubmit = (data: CalculatorFormData) => {
    onCalculate(data as CalculatorInputs)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  step <= currentStep
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-muted bg-background text-muted-foreground'
                }`}
              >
                <span className="font-semibold">{step}</span>
              </div>
              {step < TOTAL_STEPS && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className={currentStep === 1 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Company Info
          </div>
          <div className={currentStep === 2 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Financial Details
          </div>
          <div className={currentStep === 3 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Audit Details
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Company Basics */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-6 w-6 text-primary" />
                      Company Information
                    </CardTitle>
                    <CardDescription>
                      Tell us about your company structure and industry
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Company Type */}
                    <FormField
                      control={form.control}
                      name="companyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Company Type *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your company type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(COMPANY_TYPE_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            The legal structure of your business in the UAE
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Industry Sector */}
                    <FormField
                      control={form.control}
                      name="industrySector"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Industry Sector *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(INDUSTRY_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Your primary business activity or industry
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Financial Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-primary" />
                      Financial & Operational Details
                    </CardTitle>
                    <CardDescription>
                      Help us understand the size and scope of your operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Annual Revenue */}
                    <FormField
                      control={form.control}
                      name="annualRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Annual Revenue *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select revenue range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(REVENUE_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Your approximate annual revenue in AED
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Number of Employees */}
                    <FormField
                      control={form.control}
                      name="numberOfEmployees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Number of Employees *
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select employee range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(EMPLOYEE_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Total number of employees in your organization
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Number of Locations */}
                    <FormField
                      control={form.control}
                      name="numberOfLocations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Number of Business Locations *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              max={100}
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                              className="max-w-xs"
                            />
                          </FormControl>
                          <FormDescription>
                            How many physical locations or branches does your business have?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Audit Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-6 w-6 text-primary" />
                      Audit Requirements
                    </CardTitle>
                    <CardDescription>
                      Final details about your audit needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Previous Audit Status */}
                    <FormField
                      control={form.control}
                      name="previousAuditStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Previous Audit Status *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select audit status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(AUDIT_STATUS_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Has your company been audited before?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Service Urgency */}
                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Service Urgency *
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(URGENCY_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            How quickly do you need the audit completed?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Complexity Factors */}
                    <div className="space-y-4">
                      <div>
                        <FormLabel className="text-base flex items-center gap-2 mb-2">
                          <AlertCircle className="h-4 w-4" />
                          Complexity Factors
                        </FormLabel>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select all that apply to your business (affects pricing and timeline)
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {(Object.keys(COMPLEXITY_FACTOR_LABELS) as Array<keyof ComplexityFactors>).map(
                          (key) => (
                            <FormField
                              key={key}
                              control={form.control}
                              name={`complexityFactors.${key}`}
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent/50 transition-colors">
                                  <FormControl>
                                    <input
                                      type="checkbox"
                                      checked={field.value}
                                      onChange={field.onChange}
                                      className="h-4 w-4 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none flex-1">
                                    <FormLabel className="font-medium cursor-pointer">
                                      {COMPLEXITY_FACTOR_LABELS[key]}
                                    </FormLabel>
                                    <FormDescription className="text-xs">
                                      {COMPLEXITY_FACTOR_DESCRIPTIONS[key]}
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              )}
                            />
                          )
                        )}
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        The estimate you receive is approximate. For an exact quote tailored to your specific needs,
                        you'll have the option to request a detailed consultation after viewing your results.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1 || isLoading}
              className="min-w-[120px]"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            {currentStep < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={isLoading}
                className="min-w-[120px]"
              >
                Continue
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isLoading}
                className="min-w-[120px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {isLoading ? (
                  <>Calculating...</>
                ) : (
                  <>
                    Calculate Fee
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Progress indicator */}
          <div className="text-center text-sm text-muted-foreground">
            Step {currentStep} of {TOTAL_STEPS}
          </div>
        </form>
      </Form>
    </div>
  )
}
