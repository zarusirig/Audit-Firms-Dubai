/**
 * Font Configuration using next/font
 * Optimized font loading with proper subsetting and display settings
 * Using local fonts to avoid network dependency during build
 */

import localFont from 'next/font/local';

// Primary body font - Inter (local)
export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter/inter-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/inter-500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/inter-600.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
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
});

// Heading font - Playfair Display (local)
export const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/playfair-display/playfair-display-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playfair-display/playfair-display-500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playfair-display/playfair-display-600.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playfair-display/playfair-display-700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

// Monospace font for numbers and code - IBM Plex Mono (local)
export const ibmPlexMono = localFont({
  src: [
    {
      path: '../../public/fonts/ibm-plex-mono/ibm-plex-mono-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-mono/ibm-plex-mono-500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ibm-plex-mono/ibm-plex-mono-600.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  preload: false, // Not critical for LCP
  fallback: ['Monaco', 'Courier New', 'monospace'],
});

// Combined font variables for easy application
export const fontVariables = `${inter.variable} ${playfair.variable} ${ibmPlexMono.variable}`;
