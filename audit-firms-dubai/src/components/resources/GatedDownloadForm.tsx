'use client'

/**
 * Gated Download Form
 * Email capture form before downloading resources (lead magnet)
 */

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Download, Loader2, CheckCircle2, Mail, Briefcase, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const gatedDownloadSchema = z.object({
  email: z.string().regex(EMAIL_REGEX, 'Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().max(200).optional(),
  jobTitle: z.string().max(100).optional(),
  marketingConsent: z.boolean(),
})

type GatedDownloadFormData = z.infer<typeof gatedDownloadSchema>

interface GatedDownloadFormProps {
  resourceId: string
  resourceTitle: string
  resourceFormat: string
  onDownloadReady: (downloadUrl: string) => void
  className?: string
}

export default function GatedDownloadForm({
  resourceId,
  resourceTitle,
  resourceFormat,
  onDownloadReady,
  className = '',
}: GatedDownloadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<GatedDownloadFormData>({
    resolver: zodResolver(gatedDownloadSchema),
    defaultValues: {
      marketingConsent: false,
    },
  })

  const marketingConsent = watch('marketingConsent')

  const onSubmit = async (data: GatedDownloadFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId,
          ...data,
          timestamp: new Date().toISOString(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to process download')
      }

      setIsSuccess(true)

      // Trigger download after short delay
      setTimeout(() => {
        onDownloadReady(result.downloadUrl)
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`rounded-lg border-2 border-green-200 bg-green-50 p-8 text-center ${className}`}>
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-600" />
        <h3 className="mb-2 text-xl font-bold text-green-900">Download Ready!</h3>
        <p className="mb-4 text-green-700">
          Your download will start automatically. Check your email for a copy of the download link.
        </p>
        <p className="text-sm text-green-600">
          Thank you for downloading <strong>{resourceTitle}</strong>
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-6 text-center">
        <Download className="mx-auto mb-3 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-bold text-gray-900">Download {resourceTitle}</h3>
        <p className="text-sm text-gray-600">
          Enter your details below to download this {resourceFormat.toUpperCase()} resource
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <Label htmlFor="email" className="mb-2 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@company.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Name */}
        <div>
          <Label htmlFor="name" className="mb-2 flex items-center gap-2">
            <User className="h-4 w-4" />
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Company (Optional) */}
        <div>
          <Label htmlFor="company" className="mb-2 flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Company Name (Optional)
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Your Company LLC"
            {...register('company')}
          />
        </div>

        {/* Job Title (Optional) */}
        <div>
          <Label htmlFor="jobTitle" className="mb-2">
            Job Title (Optional)
          </Label>
          <Input
            id="jobTitle"
            type="text"
            placeholder="Financial Controller"
            {...register('jobTitle')}
          />
        </div>

        {/* Marketing Consent */}
        <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4">
          <Checkbox
            id="marketingConsent"
            checked={marketingConsent}
            onCheckedChange={(checked: boolean) => setValue('marketingConsent', checked)}
          />
          <div className="flex-1">
            <Label
              htmlFor="marketingConsent"
              className="cursor-pointer text-sm font-normal leading-relaxed text-gray-700"
            >
              Send me helpful audit, compliance, and tax updates from Farahat & Co. You can
              unsubscribe at any time.
            </Label>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </>
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-center text-xs text-gray-500">
          We respect your privacy. Your information will never be shared with third parties.
          <br />
          See our{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
