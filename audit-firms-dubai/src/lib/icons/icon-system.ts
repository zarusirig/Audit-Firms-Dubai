/**
 * Icon System Configuration
 * Centralized icon management for Audit Firms Dubai
 *
 * Brand Guidelines:
 * - Style: Outline/stroke icons
 * - Corner radius: Slightly rounded
 * - Line weight: Medium (2px stroke)
 * - Library: lucide-react
 * - Icon density: Simple & minimal
 *
 * Selection Criteria (4-Question Framework):
 * 1. Does this match our brand tone? (Professional, established, trustworthy)
 * 2. Is it instantly clear at 16-24px?
 * 3. Does it feel like professional services?
 * 4. Is it consistent with our existing icons?
 *
 * All icons must score 4-5/5 on:
 * - Brand fit
 * - Clarity
 * - Professionalism
 * - Consistency
 */

import {
  // Navigation & UI
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home,

  // Actions
  Phone,
  Mail,
  Send,
  Calendar,
  Clock,
  Download,

  // Services (Audit-specific)
  FileCheck,
  Shield,
  Search,
  Scale,
  Building2,
  ReceiptText,

  // Trust Indicators
  BadgeCheck,
  Award,
  Globe,
  Users,
  Star,
  Languages,

  // Professional Tools
  Calculator,
  FileText,
  ClipboardList,
  Briefcase,

  // UI Elements & Status
  CheckCircle2,
  Info,
  AlertCircle,
  Loader2,
  HelpCircle,

  // Social Media
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  MessageSquare,

  // Location
  MapPin,
  Navigation as NavigationIcon,

  // Additional Professional Icons
  TrendingUp,
  Target,
  Lightbulb,
  BookOpen,
  FileSearch,

  type LucideIcon,
} from 'lucide-react';

/**
 * Icon System Map
 * Organized by usage context for easy reference
 */
export const ICON_SYSTEM = {
  // ========================================
  // NAVIGATION
  // ========================================
  nav: {
    menu: Menu,
    close: X,
    dropdown: ChevronDown,
    breadcrumb: ChevronRight,
    home: Home,
    next: ArrowRight,
  },

  // ========================================
  // CORE SERVICES
  // Professional audit services icons
  // ========================================
  services: {
    // External Audit - Statutory compliance
    externalAudit: FileCheck,

    // Internal Audit - Risk assessment & controls
    internalAudit: Shield,

    // Due Diligence - M&A and investment analysis
    dueDiligence: Search,

    // Forensic Audit - Investigation & legal support
    // ✅ Changed from AlertTriangle to Scale (justice/legal)
    forensicAudit: Scale,

    // RERA Audit - Real estate compliance
    // ✅ Changed from Building to Building2 (more detailed)
    reraAudit: Building2,

    // VAT Audit - Tax compliance
    // ✅ Changed from Receipt to ReceiptText (more professional)
    vatAudit: ReceiptText,
  },

  // ========================================
  // TRUST & CREDIBILITY
  // Why Choose Us / USP icons
  // ========================================
  trust: {
    // Ministry approved status
    approved: BadgeCheck,

    // 37 years experience
    experience: Award,

    // 140 countries reach
    international: Globe,

    // 150+ team members
    team: Users,

    // 98% client satisfaction
    satisfaction: Star,

    // 7-day delivery
    // ✅ Changed from Zap to Clock (professional speed)
    fastTurnaround: Clock,

    // Transparent pricing
    // ✅ Changed from DollarSign to FileText (transparency)
    transparentPricing: FileText,

    // Bilingual service
    bilingual: Languages,
  },

  // ========================================
  // CALL-TO-ACTION
  // User action icons
  // ========================================
  cta: {
    call: Phone,
    email: Mail,
    send: Send,
    calculate: Calculator,
    schedule: Calendar,
    whatsapp: MessageCircle,
    chat: MessageSquare,
    download: Download,
  },

  // ========================================
  // CONTACT INFORMATION
  // Footer and contact page icons
  // ========================================
  contact: {
    phone: Phone,
    email: Mail,
    location: MapPin,
    directions: NavigationIcon,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
  },

  // ========================================
  // STATUS & FEEDBACK
  // UI state indicators
  // ========================================
  status: {
    success: CheckCircle2,
    loading: Loader2,
    error: AlertCircle,
    info: Info,
    help: HelpCircle,
  },

  // ========================================
  // PROFESSIONAL TOOLS
  // Business & analysis icons
  // ========================================
  tools: {
    calculator: Calculator,
    document: FileText,
    checklist: ClipboardList,
    briefcase: Briefcase,
    search: FileSearch,
    insights: Lightbulb,
    growth: TrendingUp,
    target: Target,
    knowledge: BookOpen,
  },
} as const;

/**
 * Icon Size & Weight Presets
 * Consistent sizing across all breakpoints
 */
export const ICON_PROPS = {
  // Small - Mobile menu items, inline text
  small: {
    size: 16,
    strokeWidth: 2,
    className: 'h-4 w-4',
  },

  // Default - Most UI elements
  default: {
    size: 24,
    strokeWidth: 2,
    className: 'h-6 w-6',
  },

  // Large - Service cards, feature sections
  large: {
    size: 32,
    strokeWidth: 1.5,
    className: 'h-8 w-8',
  },

  // Navigation - Header links
  navigation: {
    size: 20,
    strokeWidth: 2,
    className: 'h-5 w-5',
  },

  // Hero - Main CTA buttons
  hero: {
    size: 24,
    strokeWidth: 2,
    className: 'h-6 w-6',
  },
} as const;

/**
 * Icon Color Classes
 * Brand-aligned color variants
 */
export const ICON_COLORS = {
  primary: 'text-primary-700',
  secondary: 'text-secondary-500',
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600',
  neutral: 'text-neutral-600',
  muted: 'text-neutral-400',
} as const;

/**
 * Icon Usage Guidelines
 * Best practices for icon selection and implementation
 */
export const ICON_GUIDELINES = {
  // When to use icons
  usage: {
    navigation: 'Always pair with text labels for accessibility',
    services: 'Use consistent metaphors (document=audit, shield=protection)',
    cta: 'Icons should reinforce action (phone=call, calendar=schedule)',
    status: 'Color + icon for clear feedback (green check, red alert)',
  },

  // Accessibility requirements
  accessibility: {
    ariaLabel: 'Always include aria-label for icon-only buttons',
    contrast: 'Ensure 4.5:1 contrast ratio minimum (WCAG AA)',
    size: 'Minimum 16px for clickable icons',
    hover: 'Provide visual feedback on interactive icons',
  },

  // Performance
  performance: {
    import: 'Import only needed icons (tree-shaking)',
    lazy: 'Consider lazy loading for icon-heavy pages',
    caching: 'Icons are automatically cached by browser',
  },
} as const;

/**
 * Icon Change Log
 * Track icon updates for consistency
 */
export const ICON_CHANGELOG = [
  {
    date: '2024-11-16',
    version: '1.0.0',
    changes: [
      'Initial icon system creation',
      'Replaced Zap with Clock for Fast Turnaround (brand fit improvement)',
      'Replaced DollarSign with FileText for Fixed Pricing (professionalism)',
      'Replaced AlertTriangle with Scale for Forensic Audit (better metaphor)',
      'Replaced Building with Building2 for RERA Audit (more detailed)',
      'Replaced Receipt with ReceiptText for VAT Audit (professional feel)',
    ],
    rationale: 'Elevate from "very good" to "world-class" by ensuring every icon reinforces core brand values: Professional, Trustworthy, Established, Excellent.',
  },
] as const;

/**
 * Helper function to get icon by service ID
 */
export function getServiceIcon(serviceId: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    'external-audit': ICON_SYSTEM.services.externalAudit,
    'internal-audit': ICON_SYSTEM.services.internalAudit,
    'due-diligence': ICON_SYSTEM.services.dueDiligence,
    'forensic-audit': ICON_SYSTEM.services.forensicAudit,
    'rera-audit': ICON_SYSTEM.services.reraAudit,
    'vat-audit': ICON_SYSTEM.services.vatAudit,
  };

  return iconMap[serviceId] || FileText;
}

/**
 * Helper function to get icon props by size
 */
export function getIconProps(size: keyof typeof ICON_PROPS = 'default') {
  return ICON_PROPS[size];
}

/**
 * Type exports for TypeScript support
 */
export type IconSize = keyof typeof ICON_PROPS;
export type IconColor = keyof typeof ICON_COLORS;
export type ServiceIconKey = keyof typeof ICON_SYSTEM.services;
export type TrustIconKey = keyof typeof ICON_SYSTEM.trust;

/**
 * Example Usage:
 *
 * import { ICON_SYSTEM, getIconProps } from '@/lib/icons/icon-system';
 *
 * const ServiceIcon = ICON_SYSTEM.services.externalAudit;
 * const props = getIconProps('large');
 *
 * <ServiceIcon {...props} className={ICON_COLORS.primary} />
 */
