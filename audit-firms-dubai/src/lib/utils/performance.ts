/**
 * Performance Utilities
 * Helpers for code splitting, lazy loading, and performance optimization
 */

import { lazy, ComponentType } from 'react';

/**
 * Enhanced lazy loading with retry logic
 * Retries failed chunk loads up to 3 times before failing
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries = 3
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    for (let i = 0; i < retries; i++) {
      try {
        return await componentImport();
      } catch (error) {
        if (i === retries - 1) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, i)));
      }
    }
    throw new Error('Failed to load component after retries');
  });
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
