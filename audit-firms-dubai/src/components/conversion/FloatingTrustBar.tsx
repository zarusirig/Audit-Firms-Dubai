'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Floating Trust Bar (Social Proof Notification)
 * Shows recent conversion notifications
 * Features:
 * - Auto-show after delay
 * - Randomized client notifications
 * - Dismissible
 * - Mobile responsive
 * - Timed auto-hide
 */

interface Notification {
  id: string;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    name: 'Ahmed',
    location: 'Dubai Marina',
    action: 'requested external audit services',
    timeAgo: '2 minutes ago',
  },
  {
    id: '2',
    name: 'Sarah',
    location: 'Business Bay',
    action: 'downloaded the audit guide',
    timeAgo: '5 minutes ago',
  },
  {
    id: '3',
    name: 'Mohammed',
    location: 'DIFC',
    action: 'booked a consultation',
    timeAgo: '8 minutes ago',
  },
  {
    id: '4',
    name: 'Fatima',
    location: 'JLT',
    action: 'requested a quote',
    timeAgo: '12 minutes ago',
  },
  {
    id: '5',
    name: 'Omar',
    location: 'Downtown Dubai',
    action: 'started their audit process',
    timeAgo: '15 minutes ago',
  },
  {
    id: '6',
    name: 'Layla',
    location: 'Dubai Silicon Oasis',
    action: 'requested VAT audit services',
    timeAgo: '18 minutes ago',
  },
  {
    id: '7',
    name: 'Khalid',
    location: 'Dubai Media City',
    action: 'scheduled an audit',
    timeAgo: '22 minutes ago',
  },
  {
    id: '8',
    name: 'Maryam',
    location: 'Palm Jumeirah',
    action: 'requested internal audit',
    timeAgo: '25 minutes ago',
  },
];

interface FloatingTrustBarProps {
  /** Initial delay before first notification (ms) */
  initialDelay?: number;
  /** Time between notifications (ms) */
  interval?: number;
  /** How long each notification shows (ms) */
  displayDuration?: number;
  /** Custom notifications */
  notifications?: Notification[];
}

export function FloatingTrustBar({
  initialDelay = 5000,
  interval = 15000,
  displayDuration = 8000,
  notifications = SAMPLE_NOTIFICATIONS,
}: FloatingTrustBarProps = {}) {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);

  useEffect(() => {
    // Check if permanently dismissed
    const dismissed = sessionStorage.getItem('trustBarDismissed');
    if (dismissed) {
      setIsPermanentlyDismissed(true);
      return;
    }

    // Show first notification after initial delay
    const initialTimer = setTimeout(() => {
      showRandomNotification();
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, [initialDelay]);

  useEffect(() => {
    if (isPermanentlyDismissed || !currentNotification) return;

    // Auto-hide after display duration
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, displayDuration);

    // Show next notification after interval
    const nextTimer = setTimeout(() => {
      showRandomNotification();
    }, displayDuration + interval);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [currentNotification, displayDuration, interval, isPermanentlyDismissed]);

  const showRandomNotification = () => {
    if (isPermanentlyDismissed) return;

    const randomIndex = Math.floor(Math.random() * notifications.length);
    setCurrentNotification(notifications[randomIndex]);
    setVisible(true);
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  const handlePermanentDismiss = () => {
    setVisible(false);
    setIsPermanentlyDismissed(true);
    sessionStorage.setItem('trustBarDismissed', 'true');
  };

  if (!visible || !currentNotification || isPermanentlyDismissed) return null;

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-40',
        'bg-white rounded-lg shadow-2xl border border-neutral-200',
        'transform transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-success" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-neutral-900 mb-0.5">
              {currentNotification.name} from {currentNotification.location}
            </div>
            <div className="text-sm text-neutral-600 mb-1">
              {currentNotification.action}
            </div>
            <div className="text-xs text-neutral-500 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              {currentNotification.timeAgo}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            onDoubleClick={handlePermanentDismiss}
            className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 transition-colors p-1 hover:bg-neutral-100 rounded"
            aria-label="Dismiss notification (double-click to hide permanently)"
            title="Click to dismiss, double-click to stop all notifications"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Social Proof Footer */}
        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <Users className="w-3.5 h-3.5" />
            <span>12 people viewed this page today</span>
          </div>
          <div className="text-xs text-neutral-500">
            Real-time activity
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-success/20 via-success to-success/20 rounded-b-lg" />
    </div>
  );
}
