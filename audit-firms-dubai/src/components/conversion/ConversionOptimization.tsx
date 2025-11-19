'use client';

import React from 'react';
import { ExitIntentPopup } from './ExitIntentPopup';
import { StickyCTABar } from './StickyCTABar';
import { FloatingTrustBar } from './FloatingTrustBar';

/**
 * Conversion Optimization Wrapper
 * Combines all conversion optimization components
 *
 * Features:
 * - Exit Intent Popup
 * - Sticky CTA Bar
 * - Floating Trust Bar (Social Proof)
 *
 * Usage:
 * Add this component to your layout to enable all conversion features
 */

interface ConversionOptimizationProps {
  /** Enable/disable exit intent popup */
  enableExitIntent?: boolean;
  /** Enable/disable sticky CTA bar */
  enableStickyCTA?: boolean;
  /** Enable/disable floating trust bar */
  enableTrustBar?: boolean;
  /** Custom configuration */
  config?: {
    exitIntent?: {
      leadMagnetTitle?: string;
      downloadUrl?: string;
    };
    stickyCTA?: {
      message?: string;
      ctaText?: string;
      ctaLink?: string;
    };
  };
}

export function ConversionOptimization({
  enableExitIntent = true,
  enableStickyCTA = true,
  enableTrustBar = true,
  config,
}: ConversionOptimizationProps = {}) {
  return (
    <>

      {/* Exit Intent Popup - Shows when user tries to leave */}
      {enableExitIntent && (
        <ExitIntentPopup
          leadMagnetTitle={config?.exitIntent?.leadMagnetTitle}
          downloadUrl={config?.exitIntent?.downloadUrl}
        />
      )}

      {/* Sticky CTA Bar - Top of screen on scroll */}
      {enableStickyCTA && (
        <StickyCTABar
          message={config?.stickyCTA?.message}
          ctaText={config?.stickyCTA?.ctaText}
          ctaLink={config?.stickyCTA?.ctaLink}
        />
      )}

      {/* Floating Trust Bar - Bottom left social proof */}
      {enableTrustBar && <FloatingTrustBar />}
    </>
  );
}

/**
 * Minimal Conversion Optimization
 * For pages where you want less aggressive conversion tactics
 */
export function MinimalConversionOptimization() {
  return (
    <>
      <FloatingTrustBar />
    </>
  );
}
