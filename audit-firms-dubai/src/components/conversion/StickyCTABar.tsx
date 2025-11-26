'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

/**
 * Sticky CTA Bar
 * Appears at top of screen after user scrolls down
 * Features:
 * - Scroll-triggered visibility
 * - Dismissible
 * - Urgency messaging
 * - Mobile responsive
 * - Remembers dismissal state
 */

interface StickyCTABarProps {
  /** Scroll threshold in pixels (default: 500) */
  scrollThreshold?: number;
  /** Main message */
  message?: string;
  /** Urgency message */
  urgencyMessage?: string;
  /** CTA text */
  ctaText?: string;
  /** CTA link */
  ctaLink?: string;
  /** Show timer/countdown */
  showTimer?: boolean;
}

export function StickyCTABar({
  scrollThreshold = 500,
  message = '🎯 Limited Time: Get 20% off all audit services',
  urgencyMessage = 'Offer ends in 48 hours',
  ctaText = 'Claim Offer',
  ctaLink = '/contact',
  showTimer = true,
}: StickyCTABarProps = {}) {
  const [show, setShow] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59,
  });

  // Handle scroll visibility
  useEffect(() => {
    // Check if user previously dismissed
    const dismissed = sessionStorage.getItem('ctaBarDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShow(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  // Countdown timer (visual only, not real-time)
  useEffect(() => {
    if (!showTimer) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showTimer]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('ctaBarDismissed', 'true');
  };

  if (isDismissed || !show) return null;

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-40',
        'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white',
        'shadow-lg border-b border-primary-800',
        'transform transition-transform duration-300',
        show ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3">
          {/* Left: Message */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-sm md:text-base font-semibold">
              {message}
            </span>
            {showTimer && (
              <>
                <span className="hidden lg:block text-sm text-white/90">|</span>
                <div className="hidden lg:flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-semibold">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </>
            )}
            {urgencyMessage && !showTimer && (
              <>
                <span className="hidden md:block text-sm text-white/90">|</span>
                <span className="hidden md:block text-sm text-white/90">
                  {urgencyMessage}
                </span>
              </>
            )}
          </div>

          {/* Right: CTA & Close */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="whitespace-nowrap font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Timer */}
        {showTimer && (
          <div className="lg:hidden pb-2 flex items-center justify-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            <span className="font-mono font-semibold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs text-white/90 ml-2">left</span>
          </div>
        )}
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-400 to-transparent opacity-60" />
    </div>
  );
}
