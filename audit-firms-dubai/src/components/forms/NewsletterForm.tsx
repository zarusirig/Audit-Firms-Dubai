'use client'

/**
 * Newsletter Signup Form
 * Simple, elegant newsletter subscription form
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Send, Check, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { newsletterSchema, type NewsletterFormData } from './validation'

interface NewsletterFormProps {
  variant?: 'inline' | 'footer' | 'sidebar'
  placeholder?: string
  buttonText?: string
  className?: string
}

export function NewsletterForm({
  variant = 'inline',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  className,
}: NewsletterFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      firstName: '',
    },
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus('submitting')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Subscription failed')
      }

      setStatus('success')
      form.reset()

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setStatus('error')

      // Reset error after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 text-green-600 ${className}`}>
        <Check className="h-5 w-5" />
        <span className="text-sm font-medium">Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div
          className={
            variant === 'inline'
              ? 'flex gap-2'
              : variant === 'footer'
              ? 'flex flex-col sm:flex-row gap-2'
              : 'space-y-2'
          }
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder={placeholder}
                      {...field}
                      disabled={status === 'submitting'}
                      className="pl-10"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="shrink-0"
            variant={variant === 'footer' ? 'secondary' : 'default'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {buttonText}
              </>
            )}
          </Button>
        </div>

        {status === 'error' && (
          <p className="text-sm text-destructive mt-2">
            Failed to subscribe. Please try again.
          </p>
        )}
      </form>
    </Form>
  )
}
