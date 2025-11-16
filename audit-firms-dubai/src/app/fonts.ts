/**
 * Font Configuration using next/font
 * Optimized font loading with proper subsetting and display settings
 */

import { Inter, Playfair_Display, IBM_Plex_Mono } from 'next/font/google';

// Primary body font - Inter
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

// Heading font - Playfair Display (professional, established)
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
});

// Monospace font for numbers and code - IBM Plex Mono
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
  preload: false, // Not critical for LCP
  fallback: ['Monaco', 'Courier New', 'monospace'],
  adjustFontFallback: true,
});

// Combined font variables for easy application
export const fontVariables = `${inter.variable} ${playfair.variable} ${ibmPlexMono.variable}`;
