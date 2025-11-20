# Audit Firms Dubai - Next.js Website

A premium, SEO-optimized website for Dubai's leading audit firm, built with Next.js 16+ and modern web technologies.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Recent Updates](#-recent-updates)
- [Configuration](#-configuration)
- [Development Guide](#-development-guide)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

## 🚀 Project Overview

This is a rank-and-rent SEO website targeting audit services in Dubai, UAE. The project aims to achieve:
- **Traffic Goal**: 10,000+ organic visitors/month by month 6
- **Revenue Target**: $8,000/month rental income by month 18
- **Ranking Goal**: Top 3 for 50+ high-commercial-value keywords

### Key Features

- ✅ **Bilingual Support**: English and Arabic (RTL support)
- ✅ **SEO Optimized**: Schema markup, dynamic sitemaps, optimized meta tags
- ✅ **Performance**: Image optimization, code splitting, lazy loading
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Lead Generation**: Contact forms, calculators, quote requests
- ✅ **Conversion Optimization**: Exit intent popups, sticky CTAs, trust bars

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router with Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (Custom @theme inline configuration)
- **Fonts**: Local Google Fonts (Inter, Playfair Display, IBM Plex Mono)
- **UI Components**: Radix UI Primitives + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Internationalization**: Custom i18n solution (EN/AR)
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 22.x or higher
- **npm**: 10.x or higher
- **Git**: Latest version

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd audit-firms-dubai

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration (see Configuration section)

# Run development server
npm run dev
```

The development server will start at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📁 Project Structure

```
audit-firms-dubai/
├── src/
│   ├── app/                  # Next.js app directory (App Router)
│   │   ├── [locale]/         # Internationalized routes (en, ar)
│   │   │   ├── about/        # About page
│   │   │   ├── services/     # Service pages (external-audit, internal-audit, etc.)
│   │   │   ├── industries/   # Industry-specific pages
│   │   │   ├── locations/    # Location-specific pages
│   │   │   ├── free-zones/   # Free zones pages
│   │   │   ├── glossary/     # Glossary page
│   │   │   ├── resources/    # Resources (guides, blog)
│   │   │   ├── tools/        # Interactive tools
│   │   │   ├── team/         # Team member pages
│   │   │   └── ...           # Other pages (contact, pricing, etc.)
│   │   ├── api/              # API routes
│   │   │   ├── contact/      # Contact form submission
│   │   │   ├── quote/        # Quote request submission
│   │   │   └── newsletter/   # Newsletter subscription
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles with Tailwind v4
│   │   └── fonts.ts          # Font loading configuration
│   ├── components/
│   │   ├── ui/               # shadcn/ui components (200+ components)
│   │   ├── seo/              # SEO components and JSON-LD schemas
│   │   ├── layout/           # Navigation, Footer, LanguageSwitcher
│   │   ├── sections/         # Page sections (home, services, etc.)
│   │   ├── forms/            # Contact forms, quote forms
│   │   ├── brand/            # Logo component
│   │   ├── calculator/       # Audit fee calculator
│   │   ├── conversion/       # Conversion optimization components
│   │   └── ...               # Other component categories
│   ├── lib/
│   │   ├── constants/        # Site-wide constants and navigation
│   │   ├── content/          # Content data (services, guides, blog posts)
│   │   ├── data/             # Static data (team, clients, etc.)
│   │   ├── email/            # Email templates and utilities
│   │   ├── i18n/             # Internationalization (EN/AR dictionaries)
│   │   └── utils.ts          # Utility functions
│   ├── middleware.ts         # Next.js middleware (i18n, redirects)
│   └── types/                # TypeScript type definitions
├── public/
│   ├── images/
│   │   ├── hero/             # Hero images (including logo)
│   │   ├── services/         # Service landing page images
│   │   ├── team/             # Team member photos
│   │   └── clients/          # Client logos
│   └── ...                   # Other static assets
├── scripts/                  # Utility scripts
│   ├── generate-images.ts    # AI image generation for services
│   └── ...                   # Other utility scripts
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
└── README.md                 # This file
```

## 📝 Recent Updates

### 🔧 Font Configuration Fix (Latest - November 2025)

**Status**: ✅ Complete

- **Issue**: Build failing due to Google Fonts network dependency during build process
- **Root Cause**: Next.js attempting to fetch fonts from Google Fonts API without internet connection
- **Solution**:
  - Downloaded Google Fonts locally (Inter, Playfair Display, IBM Plex Mono)
  - Updated `src/app/fonts.ts` to use `next/font/local` instead of `next/font/google`
  - Font files stored in `/public/fonts/` directory
  - Removed `adjustFontFallback` option (not supported with local fonts)
- **Files Changed**:
  - `src/app/fonts.ts` - Switched to local font loading
  - Added `/public/fonts/` directory with font files
  - Fixed TypeScript errors in `src/lib/content/entity-attribute-value.ts`
- **Result**: Build now works without internet connection, eliminating external dependencies

### 🎨 Logo Integration (Latest - November 2024)

**Status**: ✅ Complete

- **Logo File**: `/public/images/hero/audit-firms-dubai-faraht-co.png`
- **Format**: PNG with transparency (1024×1024px)
- **Implementation**: 
  - Logo component updated to use Next.js Image component
  - Size: 96px height (h-24) for navigation, responsive scaling
  - Used in Navigation bar and Footer
- **Component**: `src/components/brand/Logo.tsx`
- **Note**: Logo is optimized for performance and maintains aspect ratio

### 💬 Chatbot Integration (Latest - November 2024)

**Status**: ✅ Complete

- **Provider**: NewOaks.ai ChatPilot
- **Implementation**: 
  - Removed old LiveChatWidget component
  - Added ChatPilot script in `src/app/[locale]/layout.tsx`
  - Configuration: `chatbotId: "950504931c274fe18d462ac867415204"`
  - Domain: `https://www.newoaks.ai`
  - Mode: Chat mode only
- **Location**: Scripts added in `<head>` section of layout
- **Files Changed**:
  - `src/app/[locale]/layout.tsx` - Added chatbot scripts
  - `src/components/conversion/ConversionOptimization.tsx` - Removed LiveChatWidget
  - Deleted `src/components/conversion/LiveChatWidget.tsx`

### 🎯 Navigation Enhancement

- Added "Free Zones" and "Glossary" as top-level navigation items
- Bilingual support (English/Arabic) for all navigation items
- Updated Navigation and Footer components

### 🎨 AI-Generated Professional Imagery

- Hero images for home, about, and all service pages
- Generated using Fal AI Flux Pro v1.1
- Optimized with Next.js Image component

### ✅ TypeScript Type Safety

- Complete type safety across all components
- Proper Dictionary interface for i18n
- Type-safe API routes

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Keys (if needed)
FAL_KEY=your_fal_ai_key_here

# Email Configuration (if using email service)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password

# Site Configuration (if needed)
NEXT_PUBLIC_SITE_URL=https://www.auditfirmsdubai.ae
```

### Next.js Configuration

- Security headers configured in `next.config.ts`
- Image optimization enabled
- Redirects and rewrites configured
- Internationalization routing enabled

### Tailwind CSS Configuration

- Brand colors, typography, and design tokens defined in `src/app/globals.css`
- Uses Tailwind v4's `@theme inline` configuration
- Custom utilities and responsive breakpoints configured

### Brand Identity

**Colors**:
- Primary Blue: `#0066FF`
- Secondary Gold: `#FFC233`
- Neutral grayscale palette

**Typography**:
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## 💻 Development Guide

### Adding a New Page

1. Create a new directory in `src/app/[locale]/`
2. Add `page.tsx` with metadata and content
3. Update navigation in `src/lib/constants/index.ts`
4. Add translations to `src/lib/i18n/dictionaries/en.json` and `ar.json`

### Adding a New Component

1. Create component in appropriate `src/components/` subdirectory
2. Use TypeScript with proper types
3. Follow existing component patterns
4. Ensure accessibility (aria-labels, keyboard navigation)

### Internationalization

- All content should support both English and Arabic
- Use `getDictionary(locale)` to get translations
- Add new translations to both `en.json` and `ar.json`
- Test RTL layout for Arabic content

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing design patterns
- Ensure responsive design (mobile-first)
- Maintain brand consistency

### Code Quality

- TypeScript strict mode enabled
- ESLint configured
- Follow existing code patterns
- Write semantic HTML
- Ensure accessibility compliance

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch
4. Preview deployments for pull requests

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables in Production

Ensure all required environment variables are set in your deployment platform:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- Any API keys needed for functionality

## 🐛 Troubleshooting

### Logo Not Displaying

- **Check**: Logo file exists at `/public/images/hero/audit-firms-dubai-faraht-co.png`
- **Verify**: File is PNG format with transparency
- **Solution**: Ensure file is in correct location and Next.js Image component is configured properly

### Chatbot Not Appearing

- **Check**: Scripts are added in `src/app/[locale]/layout.tsx`
- **Verify**: Chatbot ID and domain are correct
- **Solution**: Check browser console for errors, verify script loading

### Build Errors

- **TypeScript Errors**: Run `npm run type-check` to identify issues
- **Missing Dependencies**: Run `npm install`
- **Environment Variables**: Ensure `.env.local` is configured
- **Font Loading Errors**: Fonts are now loaded locally from `/public/fonts/` - no internet required

### Font Configuration Issues

- **Check**: Font files exist in `/public/fonts/` directory
- **Verify**: `src/app/fonts.ts` uses `localFont` instead of Google Fonts
- **Solution**: All fonts are pre-downloaded and loaded locally - no external dependencies

### Internationalization Issues

- **Check**: Locale is valid (`en` or `ar`)
- **Verify**: Translations exist in both dictionary files
- **Solution**: Add missing translations to `en.json` and `ar.json`

### Performance Issues

- **Images**: Ensure using Next.js Image component
- **Bundle Size**: Check for unnecessary imports
- **Lazy Loading**: Verify components are lazy-loaded where appropriate

## 📊 SEO Strategy

### Primary Keywords

- audit firms in uae (150 SV, KD 49)
- audit firm in dubai (150 SV, KD 54)
- best audit firm in dubai (100 SV, KD 52)

### Content Strategy

- 100+ pages (services, locations, industries, free zones, guides, glossary)
- Pillar content (5,000+ words)
- Blog articles
- Interactive tools
- FAQ pages

## 📈 Performance Targets

- **Lighthouse Score**: 95+ (mobile), 98+ (desktop)
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

## 🔒 Security

- Security headers (HSTS, CSP, X-Frame-Options)
- Input validation with Zod
- Environment variable protection
- TypeScript strict mode

## 👥 Company Background

- **Parent Company**: Farahat & Co (Est. 1985)
- **Experience**: 37 years in audit services
- **Clients Served**: 28,058+
- **Countries**: 140+
- **Awards**: 112+

## 📚 Additional Documentation

Project documentation is located in the parent directory:
- [Detailed Execution Timeline](../DETAILED_EXECUTION_TIMELINE.md) - Complete 12-week plan
- [Brand Guidelines](../brand-guidelines.md) - Visual identity
- [Content Strategy](../content/content-style-guide.md) - Writing standards
- [SEO Framework](../strategy/semantic-seo-framework.md) - SEO methodology
- [Fixes & Standards](./fixes.md) - Development rules and troubleshooting

## 🤝 Support & Contact

For technical support or questions:
1. Check this README and troubleshooting section
2. Review project documentation in parent directory
3. Check `fixes.md` for common issues and solutions

## 📄 License

Proprietary - All rights reserved

---

**Version**: 1.1.0
**Last Updated**: November 2025
**Status**: ✅ Production Ready
**Next Developer**: See "Recent Updates" section for latest changes and "Development Guide" for workflow
