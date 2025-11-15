import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'primary' | 'white' | 'dark' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  href?: string;
}

/**
 * Elite Audit Dubai Logo Component
 * Supports multiple variants and sizes
 * Can be linked or static
 */
export function Logo({
  variant = 'primary',
  size = 'md',
  className,
  showTagline = false,
  href = '/',
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const variantClasses = {
    primary: 'text-primary-600',
    white: 'text-white',
    dark: 'text-neutral-900',
    mark: 'text-primary-600', // Mark variant for icon only
  };

  const taglineSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  };

  const LogoContent = () => (
    <div className={cn('flex flex-col', className)}>
      <div className={cn('font-serif font-bold tracking-tight', sizeClasses[size], variantClasses[variant])}>
        {variant === 'mark' ? (
          // Icon/Mark version - initials in a circle
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
            <span className="text-lg font-bold">EA</span>
          </div>
        ) : (
          // Full logo
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white">
              <span className="text-sm font-bold">EA</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold">Elite Audit</span>
              <span className={cn('font-normal', variant === 'primary' ? 'text-neutral-600' : 'opacity-80')}>
                Dubai
              </span>
            </div>
          </div>
        )}
      </div>
      {showTagline && variant !== 'mark' && (
        <p className={cn('mt-1 font-medium text-neutral-600', taglineSizes[size], variantClasses[variant])}>
          Dubai's Most Trusted Audit Firm
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block transition-opacity hover:opacity-80"
        aria-label="Elite Audit Dubai - Home"
      >
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

/**
 * Farahat & Co Parent Company Logo
 * Used in footer or about page
 */
export function ParentCompanyLogo({
  className,
  variant = 'primary'
}: {
  className?: string;
  variant?: 'primary' | 'white' | 'dark';
}) {
  const variantClasses = {
    primary: 'text-neutral-700',
    white: 'text-white',
    dark: 'text-neutral-900',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="text-sm">
        <p className={cn('font-semibold', variantClasses[variant])}>
          A Member of Farahat & Co
        </p>
        <p className={cn('text-xs opacity-75', variantClasses[variant])}>
          Est. 1985 • Serving 140+ Countries
        </p>
      </div>
    </div>
  );
}
