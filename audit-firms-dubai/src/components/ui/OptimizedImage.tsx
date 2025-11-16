'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * OptimizedImage Component
 * Wrapper around next/image with blur placeholder and loading states
 */

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder'> {
  showLoadingState?: boolean;
}

export function OptimizedImage({
  alt,
  className,
  showLoadingState = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {showLoadingState && isLoading && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-500">
          <span className="text-sm">Image failed to load</span>
        </div>
      ) : (
        <Image
          alt={alt}
          className={cn(
            'duration-700 ease-in-out',
            isLoading ? 'scale-105 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0',
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          {...props}
        />
      )}
    </div>
  );
}
