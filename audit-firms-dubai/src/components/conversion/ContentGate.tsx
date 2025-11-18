'use client';

import React, { useState } from 'react';
import { Lock, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

/**
 * Content Gate
 * Gates premium content behind email capture
 * Features:
 * - Soft gate (shows preview)
 * - Hard gate (requires unlock)
 * - Blurred preview
 * - Email capture
 * - Unlock state management
 */

interface ContentGateProps {
  /** Content to gate */
  children: React.ReactNode;
  /** Gate type: soft (preview) or hard (no preview) */
  gateType?: 'soft' | 'hard';
  /** Number of characters to preview (soft gate only) */
  previewLength?: number;
  /** Content title */
  title?: string;
  /** Gate message */
  message?: string;
  /** Lead magnet offer */
  leadMagnet?: string;
  /** Callback when unlocked */
  onUnlock?: (email: string) => void;
  /** Pre-unlocked state */
  isUnlocked?: boolean;
}

export function ContentGate({
  children,
  gateType = 'soft',
  previewLength = 500,
  title = 'Continue Reading',
  message = 'Get instant access to this complete guide plus our audit checklist',
  leadMagnet = 'Free Audit Checklist included',
  onUnlock,
  isUnlocked: initialUnlocked = false,
}: ContentGateProps) {
  const [unlocked, setUnlocked] = useState(initialUnlocked);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Submit to newsletter/lead API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'content-gate',
          contentTitle: title,
        }),
      });

      if (response.ok) {
        setUnlocked(true);
        if (onUnlock) {
          onUnlock(email);
        }
        // Store unlock state in session
        sessionStorage.setItem(`content-unlocked-${title}`, 'true');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Content gate submission error:', err);
      setError('Failed to unlock content. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check session storage for unlock state
  React.useEffect(() => {
    const wasUnlocked = sessionStorage.getItem(`content-unlocked-${title}`);
    if (wasUnlocked) {
      setUnlocked(true);
    }
  }, [title]);

  if (unlocked) {
    return <>{children}</>;
  }

  // Hard gate - no preview
  if (gateType === 'hard') {
    return (
      <div className="relative my-12">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
          {/* Lock Icon */}
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
            {title}
          </h3>

          {/* Message */}
          <p className="text-neutral-600 mb-6 text-lg">
            {message}
          </p>

          {/* Benefits */}
          <div className="mb-8 space-y-3">
            {[
              'Complete guide content',
              'Downloadable checklist',
              'Expert insights and tips',
              'Industry best practices',
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleUnlock} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-12 text-center"
              disabled={isSubmitting}
              required
            />
            {error && (
              <p className="text-sm text-error">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Unlocking...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Unlock Full Content
                </>
              )}
            </Button>
          </form>

          {/* Privacy */}
          <p className="text-xs text-neutral-500 mt-4">
            🔒 No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  // Soft gate - with preview
  const contentString = typeof children === 'string' ? children : '';
  const preview = contentString.slice(0, previewLength);

  return (
    <div className="relative my-8">
      {/* Blurred Preview */}
      <div className="relative">
        <div className="opacity-50 blur-sm pointer-events-none select-none">
          {preview}...
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-8">
          {/* Gate Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 md:p-8 max-w-lg w-full mx-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Icon */}
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-primary-600" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-neutral-900">
              {title}
            </h3>

            {/* Message */}
            <p className="text-neutral-600 mb-6 text-center text-sm md:text-base">
              {message}
            </p>

            {/* Lead Magnet Badge */}
            {leadMagnet && (
              <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-success bg-success/10 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                {leadMagnet}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleUnlock} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11"
                disabled={isSubmitting}
                required
              />
              {error && (
                <p className="text-sm text-error text-center">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full h-11"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Unlocking...'
                ) : (
                  <>
                    Unlock Content
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-center gap-3 text-xs text-neutral-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 border-2 border-white"
                  />
                ))}
              </div>
              <span>Join 2,500+ subscribers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden full content for SEO */}
      <div className="sr-only">{children}</div>
    </div>
  );
}
