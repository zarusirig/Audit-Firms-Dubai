'use client'

/**
 * Quick Contact Form
 * Compact form for sidebar or inline use - perfect for quick lead capture
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { quickContactSchema, type QuickContactFormData } from './validation'
import { SERVICE_LABELS } from './types'

interface QuickContactFormProps {
  variant?: 'default' | 'compact' | 'inline'
  showTitle?: boolean
  showDescription?: boolean
  onSuccess?: (data: QuickContactFormData) => void
  className?: string
}

export function QuickContactForm({
  variant = 'default',
  showTitle = true,
  showDescription = true,
  onSuccess,
  className,
}: QuickContactFormProps) {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const form = useForm<QuickContactFormData>({
    resolver: zodResolver(quickContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: undefined,
      message: '',
    },
  })

  const onSubmit = async (data: QuickContactFormData) => {
    setSubmissionStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'quick-contact',
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed')
      }

      setSubmissionStatus('success')
      form.reset()

      // Call success callback
      onSuccess?.(data)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmissionStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      )

      // Reset error after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const isCompact = variant === 'compact'
  const isInline = variant === 'inline'

  if (submissionStatus === 'success') {
    return (
      <Card className={className}>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground max-w-md">
            We've received your message. Our team will contact you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      {(showTitle || showDescription) && (
        <CardHeader className={isCompact ? 'pb-4' : undefined}>
          {showTitle && (
            <CardTitle className={isCompact ? 'text-lg' : 'text-xl'}>
              Get in Touch
            </CardTitle>
          )}
          {showDescription && (
            <CardDescription>
              Fill out the form and we'll get back to you within 24 hours
            </CardDescription>
          )}
        </CardHeader>
      )}

      <CardContent>
        {submissionStatus === 'error' && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      {...field}
                      disabled={submissionStatus === 'submitting'}
                      className="focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
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
                      disabled={submissionStatus === 'submitting'}
                      className="focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
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
                      disabled={submissionStatus === 'submitting'}
                      className="focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Selection */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interested In *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={submissionStatus === 'submitting'}
                  >
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all duration-200">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(SERVICE_LABELS).map(([value, label]) => (
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

            {/* Message Field (Optional) */}
            {!isCompact && (
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        rows={isInline ? 2 : 3}
                        {...field}
                        disabled={submissionStatus === 'submitting'}
                        className="focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all duration-200 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              disabled={submissionStatus === 'submitting'}
              size={isCompact ? 'default' : 'lg'}
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our{' '}
              <a href={`/${locale}/privacy`} className="underline hover:text-primary">
                Privacy Policy
              </a>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
