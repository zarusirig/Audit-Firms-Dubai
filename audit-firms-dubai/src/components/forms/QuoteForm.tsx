'use client'

/**
 * Multi-Step Quote Request Form
 * Comprehensive 4-step form for detailed quote requests
 */

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Building2,
  User,
  FileText,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

import {
  quoteFormSchema,
  type QuoteFormData,
} from './validation'
import {
  SERVICE_LABELS,
  COMPANY_SIZE_LABELS,
  URGENCY_LABELS,
  CONTACT_METHOD_LABELS,
  type ServiceType,
} from './types'

const TOTAL_STEPS = 4

const INDUSTRIES = [
  'Real Estate & Property',
  'Trading & Distribution',
  'Manufacturing',
  'Financial Services',
  'Healthcare & Medical',
  'Hospitality & Tourism',
  'Technology & Software',
  'Construction & Engineering',
  'Retail & E-commerce',
  'Education & Training',
  'Professional Services',
  'Other',
]

export function QuoteForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      services: [],
      otherServiceDetails: '',
      companyName: '',
      industry: '',
      companySize: undefined,
      annualRevenue: '',
      website: '',
      contactName: '',
      jobTitle: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      urgency: 'flexible',
      currentAuditor: '',
      specificRequirements: '',
      budget: '',
      timeline: '',
      agreeToTerms: false,
      marketingConsent: false,
    },
    mode: 'onChange',
  })

  // Auto-save to localStorage
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('quote-form-draft', JSON.stringify(value))
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('quote-form-draft')
        if (saved) {
          const data = JSON.parse(saved)
          form.reset(data)
        }
      } catch (error) {
        console.warn('Corrupted quote form draft data, ignoring:', error)
        // Clear corrupted data
        localStorage.removeItem('quote-form-draft')
      }
    }
  }, [form])

  const handleNext = async () => {
    let isValid = false

    if (currentStep === 1) {
      isValid = await form.trigger(['services', 'otherServiceDetails'])
    } else if (currentStep === 2) {
      isValid = await form.trigger([
        'companyName',
        'industry',
        'companySize',
        'annualRevenue',
        'website',
      ])
    } else if (currentStep === 3) {
      isValid = await form.trigger([
        'contactName',
        'jobTitle',
        'email',
        'phone',
        'preferredContact',
        'urgency',
      ])
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

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed')
      }

      // Clear localStorage
      localStorage.removeItem('quote-form-draft')

      // Redirect to thank you page
      router.push(`/thank-you?type=quote&id=${result.submissionId}`)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit quote request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = form.watch('services')
  const hasOtherService = services?.includes('other')

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  step <= currentStep
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-muted bg-background text-muted-foreground'
                }`}
              >
                {step < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="font-semibold">{step}</span>
                )}
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
        <div className="grid grid-cols-4 gap-4 text-center text-sm">
          <div className={currentStep === 1 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Services
          </div>
          <div className={currentStep === 2 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Company
          </div>
          <div className={currentStep === 3 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Contact
          </div>
          <div className={currentStep === 4 ? 'font-semibold text-primary' : 'text-muted-foreground'}>
            Details
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
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
                      <Briefcase className="h-6 w-6 text-primary" />
                      Select Services
                    </CardTitle>
                    <CardDescription>
                      Choose the services you're interested in (select multiple if needed)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {(Object.entries(SERVICE_LABELS) as [ServiceType, string][]).map(
                              ([value, label]) => (
                                <FormField
                                  key={value}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent/50 transition-colors">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(value)}
                                          onCheckedChange={(checked: boolean) => {
                                            return checked
                                              ? field.onChange([...field.value, value])
                                              : field.onChange(
                                                  field.value?.filter((val) => val !== value)
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-medium cursor-pointer flex-1">
                                        {label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              )
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {hasOtherService && (
                      <FormField
                        control={form.control}
                        name="otherServiceDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Please specify other services</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the services you need..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Company Information */}
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
                      <Building2 className="h-6 w-6 text-primary" />
                      Company Information
                    </CardTitle>
                    <CardDescription>
                      Tell us about your business
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corporation LLC" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {INDUSTRIES.map((industry) => (
                                  <SelectItem key={industry} value={industry}>
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Size *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.entries(COMPANY_SIZE_LABELS).map(([value, label]) => (
                                  <SelectItem key={value} value={value}>
                                    {label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="annualRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Revenue (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. AED 50M" {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Approximate annual revenue
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
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
                      <User className="h-6 w-6 text-primary" />
                      Contact Information
                    </CardTitle>
                    <CardDescription>
                      How should we reach you?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="CFO" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+971 50 123 4567"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Method *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.entries(CONTACT_METHOD_LABELS).map(([value, label]) => (
                                  <SelectItem key={value} value={value}>
                                    {label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="urgency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timeline *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Additional Details */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-primary" />
                      Additional Information
                    </CardTitle>
                    <CardDescription>
                      Help us understand your requirements better (all optional)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="currentAuditor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Auditor (if any)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Name of current audit firm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specificRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specific Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about any specific audit requirements, concerns, or areas of focus..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            e.g. IFRS compliance, group consolidation, regulatory requirements
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. AED 20,000 - 30,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Start Date</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. January 2025" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="cursor-pointer">
                                I agree to the{' '}
                                <a
                                  href="/terms"
                                  target="_blank"
                                  className="text-primary underline"
                                >
                                  Terms & Conditions
                                </a>{' '}
                                and{' '}
                                <a
                                  href="/privacy-policy"
                                  target="_blank"
                                  className="text-primary underline"
                                >
                                  Privacy Policy
                                </a>{' '}
                                *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="marketingConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="cursor-pointer font-normal">
                                I'd like to receive updates about audit industry news and Farahat
                                & Co services
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
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
              disabled={currentStep === 1 || isSubmitting}
              className="min-w-[120px]"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            {currentStep < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                Continue
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[120px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Step {currentStep} of {TOTAL_STEPS}
          </div>
        </form>
      </Form>
    </div>
  )
}
