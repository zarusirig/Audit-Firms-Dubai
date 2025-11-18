'use client';

import React from 'react';
import { Clock, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Urgency Triggers
 * Components to create urgency and scarcity
 * Features:
 * - Deadline warnings
 * - Limited slots indicators
 * - Social proof counters
 * - Price increase warnings
 */

interface DeadlineWarningProps {
  deadline: string;
  daysLeft: number;
  className?: string;
}

export function DeadlineWarning({
  deadline,
  daysLeft,
  className,
}: DeadlineWarningProps) {
  return (
    <div
      className={cn(
        'bg-warning/10 border border-warning rounded-lg p-4',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-warning-dark shrink-0" />
        <div className="flex-1">
          <div className="font-semibold text-warning-dark">
            Deadline Approaching
          </div>
          <div className="text-sm text-neutral-700">
            {deadline} audit deadline in{' '}
            <span className="font-semibold text-warning-dark">
              {daysLeft} days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LimitedSlotsProps {
  slotsRemaining: number;
  period?: string;
  className?: string;
}

export function LimitedSlots({
  slotsRemaining,
  period = 'this month',
  className,
}: LimitedSlotsProps) {
  const isUrgent = slotsRemaining <= 3;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg',
        isUrgent
          ? 'bg-error/10 text-error border border-error/20'
          : 'bg-warning/10 text-warning-dark border border-warning/20',
        className
      )}
    >
      <AlertTriangle className="w-4 h-4" />
      <span>
        Only {slotsRemaining} audit slot{slotsRemaining !== 1 ? 's' : ''}{' '}
        remaining {period}
      </span>
    </div>
  );
}

interface SocialProofCounterProps {
  count: number;
  action: string;
  timeframe?: string;
  className?: string;
}

export function SocialProofCounter({
  count,
  action,
  timeframe = 'in the last 24 hours',
  className,
}: SocialProofCounterProps) {
  return (
    <div
      className={cn(
        'bg-success/10 text-success-dark rounded-lg px-3 py-2 text-sm inline-flex items-center gap-2',
        className
      )}
    >
      <TrendingUp className="w-4 h-4" />
      <span className="font-medium">
        🔥 {count} businesses {action} {timeframe}
      </span>
    </div>
  );
}

interface PriceIncreaseWarningProps {
  increasePercentage: number;
  effectiveDate: string;
  className?: string;
}

export function PriceIncreaseWarning({
  increasePercentage,
  effectiveDate,
  className,
}: PriceIncreaseWarningProps) {
  return (
    <div className={cn('bg-neutral-100 rounded-lg p-4 border-l-4 border-warning', className)}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-warning-dark shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-neutral-900 mb-1">
            Price Increase Notice
          </div>
          <div className="text-sm text-neutral-600">
            Prices will increase by{' '}
            <span className="font-semibold text-warning-dark">
              {increasePercentage}%
            </span>{' '}
            after{' '}
            <span className="font-semibold">{effectiveDate}</span>
          </div>
          <div className="text-xs text-neutral-500 mt-1">
            Lock in current rates by booking now
          </div>
        </div>
      </div>
    </div>
  );
}

interface ViewerCountProps {
  count: number;
  timeframe?: string;
  className?: string;
}

export function ViewerCount({
  count,
  timeframe = 'today',
  className,
}: ViewerCountProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-sm text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-200',
        className
      )}
    >
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
        <Users className="w-3.5 h-3.5" />
      </div>
      <span>
        <span className="font-semibold text-neutral-900">{count}</span> people
        viewing {timeframe}
      </span>
    </div>
  );
}

interface CountdownTimerProps {
  endDate: Date;
  label?: string;
  className?: string;
}

export function CountdownTimer({
  endDate,
  label = 'Offer ends in',
  className,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <div className="text-sm font-medium text-neutral-600">{label}</div>
      <div className="flex items-center gap-2">
        {timeLeft.days > 0 && (
          <TimeUnit value={timeLeft.days} label="Days" />
        )}
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-primary-600 text-white rounded-lg px-3 py-2 min-w-[60px]">
      <div className="text-2xl font-bold font-mono">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs uppercase tracking-wide opacity-80">{label}</div>
    </div>
  );
}

function TimeSeparator() {
  return (
    <div className="text-2xl font-bold text-neutral-400 animate-pulse">:</div>
  );
}

// Composite component with all triggers
interface UrgencyBannerProps {
  type: 'deadline' | 'slots' | 'social' | 'price' | 'countdown';
  deadline?: string;
  daysLeft?: number;
  slotsRemaining?: number;
  count?: number;
  action?: string;
  increasePercentage?: number;
  effectiveDate?: string;
  endDate?: Date;
  className?: string;
}

export function UrgencyBanner({
  type,
  deadline,
  daysLeft,
  slotsRemaining,
  count,
  action,
  increasePercentage,
  effectiveDate,
  endDate,
  className,
}: UrgencyBannerProps) {
  switch (type) {
    case 'deadline':
      return (
        <DeadlineWarning
          deadline={deadline || 'March 31st'}
          daysLeft={daysLeft || 47}
          className={className}
        />
      );
    case 'slots':
      return (
        <LimitedSlots
          slotsRemaining={slotsRemaining || 3}
          className={className}
        />
      );
    case 'social':
      return (
        <SocialProofCounter
          count={count || 12}
          action={action || 'booked audits'}
          className={className}
        />
      );
    case 'price':
      return (
        <PriceIncreaseWarning
          increasePercentage={increasePercentage || 20}
          effectiveDate={effectiveDate || 'January 31st'}
          className={className}
        />
      );
    case 'countdown':
      return (
        <CountdownTimer
          endDate={endDate || new Date(Date.now() + 48 * 60 * 60 * 1000)}
          className={className}
        />
      );
    default:
      return null;
  }
}
