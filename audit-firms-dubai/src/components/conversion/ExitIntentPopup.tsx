'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

/**
 * Exit Intent Popup
 * Triggers when user is about to leave the page
 * Features:
 * - Mouse leave detection
 * - Lead magnet offer (Free audit checklist)
 * - Email capture
 * - One-time show per session (can be modified)
 * - Mobile and desktop support
 */

interface ExitIntentPopupProps {
  /** Show delay in milliseconds (default: 3000) */
  delay?: number;
  /** Lead magnet title */
  leadMagnetTitle?: string;
  /** Lead magnet description */
  leadMagnetDescription?: string;
  /** Download URL for the lead magnet */
  downloadUrl?: string;
}

export function ExitIntentPopup({
  delay = 3000,
  leadMagnetTitle = '2025 UAE Audit Compliance Checklist',
  leadMagnetDescription = 'Get our FREE comprehensive checklist used by 500+ Dubai businesses to ensure perfect audit compliance.',
  downloadUrl = '/downloads/audit-compliance-checklist.pdf',
}: ExitIntentPopupProps = {}) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) return;

    // Enable popup after delay
    const timer = setTimeout(() => {
      setCanShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!canShow) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop when mouse leaves from top
      if (e.clientY <= 0 && window.innerWidth >= 768) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Mobile: Trigger on scroll up rapidly (back gesture)
    let lastScrollTop = 0;
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop - 50 && scrollTop < 200) {
          setShow(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
        lastScrollTop = scrollTop;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [canShow]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // Submit to newsletter/lead API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'exit-intent-popup',
          leadMagnet: leadMagnetTitle,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);

        // Trigger download
        setTimeout(() => {
          window.open(downloadUrl, '_blank');
          setTimeout(() => {
            setShow(false);
          }, 3000);
        }, 1000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Exit intent submission error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div
        className={cn(
          'bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 relative',
          'animate-in zoom-in-95 slide-in-from-bottom-4 duration-300',
          'shadow-2xl'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-full hover:bg-neutral-100"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            {/* Emoji */}
            <div className="text-6xl mb-4 text-center animate-in zoom-in duration-500">
              👋
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-neutral-900">
              Wait! Don't Leave Empty-Handed
            </h2>

            {/* Description */}
            <p className="text-neutral-600 mb-6 text-center leading-relaxed">
              {leadMagnetDescription}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-6">
              {[
                'Complete audit preparation checklist',
                'Document requirements list',
                'Common compliance pitfalls to avoid',
                'Timeline planning template',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-12"
                required
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                className="w-full h-12 text-base bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Send Me The Checklist
                  </>
                )}
              </Button>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-center text-neutral-500 mt-4">
              🔒 No spam. Unsubscribe anytime. Your data is protected.
            </p>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-medium">
                  Join 2,500+ subscribers
                </span>
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8 animate-in zoom-in duration-500">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-neutral-900">
              Check Your Email!
            </h3>
            <p className="text-neutral-600 mb-2">
              We've sent the audit checklist to:
            </p>
            <p className="font-semibold text-primary-700 mb-6">{email}</p>
            <p className="text-sm text-neutral-500">
              The download will start automatically...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
