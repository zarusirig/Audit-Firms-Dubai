// API Types for Dubai Audit Firm
// Type-safe interfaces for API request/response bodies

import { QuoteFormData, ContactFormData } from '@/components/forms/types';

// Base request interface with spam protection fields
export interface BaseApiRequest {
  // Honeypot fields (should be empty)
  website?: string;
  url?: string;
  honeypot?: string;

  // Timestamp for submission speed detection
  timestamp?: string;
}

// Extended quote request with form data
export interface QuoteApiRequest extends BaseApiRequest, QuoteFormData {}

// Extended contact request with form data
export interface ContactApiRequest extends BaseApiRequest, ContactFormData {}

// Spam detection result
export interface SpamDetectionResult {
  isSpam: boolean;
  reason?: string;
}

// Rate limiting info
export interface RateLimitResult {
  allowed: boolean;
  remainingRequests?: number;
  resetTime?: number;
}

// API response structure
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  submissionId?: string;
}
