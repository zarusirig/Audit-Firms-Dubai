import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'primary' | 'white' | 'dark' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  href?: string;
}

/**
 * Audit Firms Dubai Logo Component
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
    sm: 'h-8 w-auto max-w-[120px]',
    md: 'h-16 w-auto max-w-[280px]',
    lg: 'h-20 w-auto max-w-[320px]',
    xl: 'h-24 w-auto max-w-[380px]',
  };

  const variantClasses = {
    primary: '',
    white: '',
    dark: '',
    mark: '',
  };

  const taglineSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  };

  const LogoContent = () => (
    <div className={cn('flex flex-col items-start', className)}>
      <div className={cn(sizeClasses[size], 'relative flex items-center')}>
        <OptimizedImage
          src="/images/hero/audit-firms-dubai-faraht-co.png"
          alt="Audit Firms Dubai - Elite Audit Dubai"
          width={400}
          height={96}
          className="object-contain"
          style={{ width: 'auto', height: '100%' }}
          priority
        />
      </div>
      {showTagline && (
        <p className={cn('mt-1 font-medium text-neutral-700', taglineSizes[size])}>
          Dubai's Most Trusted Audit Firm
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center transition-opacity hover:opacity-80"
        aria-label="Audit Firms Dubai - Home"
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
        <p className={cn('text-xs font-medium', variantClasses[variant])}>
          Est. 1985 • Serving 140+ Countries
        </p>
      </div>
    </div>
  );
}
