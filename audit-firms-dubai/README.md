# Audit Firms Dubai - Next.js Website

A premium, SEO-optimized website for Dubai's leading audit firm, built with Next.js 16+ and modern web technologies.

## 🚀 Project Overview

This is a rank-and-rent SEO website targeting audit services in Dubai, UAE. The project aims to achieve:
- **Traffic Goal**: 10,000+ organic visitors/month by month 6
- **Revenue Target**: $8,000/month rental income by month 18
- **Ranking Goal**: Top 3 for 50+ high-commercial-value keywords

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router with Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (Custom @theme inline configuration)
- **UI Components**: Radix UI Primitives + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: next-seo
- **Forms**: React Hook Form + Zod
- **AI Image Generation**: Fal AI (Flux Pro v1.1)
- **Package Manager**: npm

## 📁 Project Structure

```
audit-firms-dubai/
├── src/
│   ├── app/                  # Next.js app directory (App Router)
│   │   ├── [locale]/         # Internationalized routes
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
│   │   ├── faq/              # FAQ components
│   │   ├── glossary/         # Glossary components
│   │   ├── industries/       # Industry-specific components
│   │   ├── locations/        # Location-specific components
│   │   ├── resources/        # Resources components
│   │   ├── services/         # Service-specific components
│   │   ├── tools/            # Interactive tools
│   │   └── conversion/       # Conversion optimization components
│   ├── lib/
│   │   ├── constants/        # Site-wide constants and navigation
│   │   ├── content/          # Content data (services, guides, blog posts)
│   │   ├── data/             # Static data (team, clients, etc.)
│   │   ├── email/            # Email templates and utilities
│   │   ├── i18n/             # Internationalization (EN/AR dictionaries)
│   │   ├── icons/            # Custom SVG icons
│   │   ├── resources/        # Resource utilities
│   │   ├── utils.ts          # Utility functions
│   │   └── utils/            # Additional utilities
│   ├── middleware.ts         # Next.js middleware (i18n, redirects)
│   └── types/                # TypeScript type definitions
├── scripts/                  # Utility scripts
│   ├── generate-images.ts    # AI image generation for services
│   ├── generate-home-image.ts # Home page hero image
│   └── generate-about-image.ts # About page hero image
├── public/
│   ├── images/
│   │   ├── hero/             # AI-generated hero images
│   │   ├── services/         # Service landing page images
│   │   ├── team/             # Team member photos
│   │   └── clients/          # Client logos and testimonials
│   └── fonts/                # Custom font files
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
└── README.md                 # This file
```

## 🎨 Brand Identity

### Colors
- **Primary Blue**: #0066FF (Professional authority)
- **Secondary Gold**: #FFC233 (Trust and prestige)
- **Neutral**: Grayscale palette for balance
- **Semantic**: Success, Warning, Error colors

### Typography
- **Headings**: Playfair Display (serif, professional)
- **Body**: Inter (sans-serif, readable)
- **Mono**: UI Monospace (code/technical)

## 🚀 Getting Started

### Prerequisites
- Node.js 22.x
- npm 10.x

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration

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
```

### AI Image Generation Scripts

Custom scripts for generating professional imagery using Fal AI:

```bash
# Generate service landing page images
npx tsx scripts/generate-images.ts

# Generate home and about page images
npx tsx scripts/generate-home-image.ts
npx tsx scripts/generate-about-image.ts
```

**Requirements**: Set `FAL_KEY` environment variable with your Fal AI API key

## 🔧 Recent Fixes & Improvements

### 🐛 **Bug Fixes & Stability Improvements**
- **Objective**: Resolve runtime errors and missing asset issues to ensure a stable user experience
- **Fixes Implemented**:
  - **Metadata Crash Fix**: Added safety check for locale validation in `src/app/[locale]/page.tsx` to prevent `TypeError` on invalid locales.
  - **Client Component Event Handlers**: Extracted interactive Table of Contents logic into a dedicated Client Component (`src/components/blog/TableOfContents.tsx`) to resolve Server Component event handler errors.
  - **Missing Assets**: Restored missing hero and service images to `public/images/` to fix 404 errors on landing pages.
- **Impact**: Eliminated application crashes, resolved console errors, and ensured all visual assets load correctly.

### 🎯 **Navigation Enhancement - Free Zones & Glossary** (Latest)
- **Objective**: Improve site navigation and user experience by adding key content sections
- **Implementation**:
  - Added "Free Zones" and "Glossary" as top-level navigation items
  - Updated main navigation menu with new links
  - Added links to footer resources section
  - Implemented bilingual support (English/Arabic) for new navigation items
- **Technical Details**:
  - Updated `MAIN_NAVIGATION` constant with new entries
  - Added translations to English and Arabic dictionary files
  - Modified Navigation component `getLabel` functions for desktop and mobile
  - Updated Footer component to include new resource links
  - Added TypeScript interface updates for navigation dictionary
- **Impact**: Enhanced site structure, better content discoverability, improved user navigation experience

### 🎨 **AI-Generated Professional Imagery**
- **Objective**: Enhance trust and credibility with professional, Dubai-contextual images
- **Technology**: Fal AI Flux Pro v1.1 for photorealistic 8K images
- **Coverage**:
  - **Home Page**: Futuristic Dubai skyline with digital network connections
  - **About Page**: Professional team photograph symbolizing 37 years of excellence
  - **6 Service Pages**: Context-aware hero images for each audit service:
    - External Audit: Modern boardroom with Burj Khalifa view
    - Internal Audit: Close-up financial analysis on tablet
    - VAT Audit: Professional desk with UAE tax documents
    - RERA Audit: Real estate blueprints and financial reports
    - Due Diligence: M&A handshake silhouette
    - Forensic Audit: Digital investigation abstract theme
- **Technical Implementation**:
  - Added hero image support to ServiceHero component
  - Enhanced ServicePageContent interface with optional heroImage property
  - Updated all service pages with dynamic background images
  - Integrated Next.js Image component for optimal performance
- **Impact**: Significantly improved visual appeal, professional credibility, and user engagement

### ✅ **Build Optimization & SSR Fixes**
- **Issue**: TypeScript compilation errors and SSR prerendering conflicts
- **Solutions**:
  - Added missing `keyTakeaways` property to CaseStudy interface
  - Added missing `relatedGuides` and `relatedServices` to Guide interface
  - Fixed dict prop passing to home page components
  - Resolved blog post SSR issues by switching to dynamic rendering
  - Added getDictionary import to clients page
- **Impact**: Successful production builds, eliminated TypeScript errors, optimized rendering

### ✅ **TypeScript Type Safety Overhaul**
- **Issue**: Multiple 'any' types throughout codebase causing type safety issues
- **Solution**:
  - Created comprehensive `/lib/i18n/types.ts` with proper Dictionary interface
  - Updated Footer.tsx and Navigation.tsx to use typed Dictionary instead of 'any'
  - Fixed API route spam detection with proper `QuoteApiRequest` and `ContactApiRequest` interfaces
  - Improved utility functions with better generic constraints (`unknown[]` instead of `any[]`)
- **Impact**: Complete type safety across components, API routes, and utilities

### ✅ **Next.js Image Optimization**
- **Issue**: Regular `<img>` tags not optimized for performance
- **Solution**:
  - Replaced 2 `<img>` tags with Next.js `<Image>` components
  - TeamGrid.tsx: Added fill + object-cover for responsive team photos
  - CertificationsShowcase.tsx: Added explicit width/height + object-contain for logos
- **Impact**: Automatic image optimization, lazy loading, and better Core Web Vitals

### ✅ **Accessibility Audit & Improvements**
- **Issue**: Missing aria-labels on icon-only interactive elements
- **Solution**: Added `aria-label="LinkedIn profile"` to icon-only LinkedIn buttons
- **Impact**: WCAG 2.1 AA compliance improvements, better screen reader support

### ✅ **Tailwind CSS v4 Max-Width Fix**
- **Issue**: `max-w-2xl` was compiling to 48px instead of 672px due to missing max-width definitions
- **Solution**: Added complete max-width scale to `@theme inline` configuration in `globals.css`
- **Impact**: Proper text wrapping and layout consistency across all pages

### ✅ **Site-wide Text Centering**
- **Issue**: Description paragraphs had inconsistent alignment and poor readability
- **Solution**: Added `text-center`, `max-w-2xl`, `w-full`, and `mx-auto` classes to all description paragraphs
- **Locations Updated**:
  - Calculator page (hero, sections, factors)
  - Home sections (hero, services, testimonials, FAQ, why choose us)
- **Impact**: Improved visual hierarchy, better readability, professional appearance

## 🎯 Key Features

### SEO Optimized
- Schema markup (Organization, LocalBusiness, Service, FAQ, Article)
- Dynamic sitemap.xml generation
- Optimized meta tags and Open Graph
- Automatic canonical URLs
- Hreflang support for bilingual content (EN/AR)

### Performance
- Image optimization (AVIF/WebP)
- Code splitting and lazy loading
- Optimized font loading
- Security headers (HSTS, CSP, X-Frame-Options)
- Static page generation + ISR

### Accessibility
- WCAG 2.1 AA compliant (target)
- Keyboard navigation
- Screen reader optimized
- Focus indicators
- Semantic HTML

### Lead Generation
- Multi-step contact forms
- Audit fee calculator
- Quote request system
- Email notifications
- CRM integration ready

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

## 🔧 Configuration

### Environment Variables

See `.env.local.example` for all available environment variables.

### Next.js Configuration

Security headers, image optimization, and redirects are configured in `next.config.ts`.

### Tailwind Configuration

Brand colors, typography, design tokens, and custom max-width scale are defined in `src/app/globals.css` using Tailwind v4's `@theme inline` configuration for optimal performance and custom utility generation.

## 📈 Performance Targets

- **Lighthouse Score**: 95+ (mobile), 98+ (desktop)
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

## 🔒 Security

- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- Input validation with Zod
- Rate limiting on API routes (planned)
- Environment variable protection
- TypeScript strict mode

## 📝 Development Workflow

1. Create feature branch
2. Develop with TypeScript strict mode
3. Write semantic, accessible HTML
4. Test on multiple browsers/devices
5. Run linting and type checking
6. Commit and push changes

## 🌐 Deployment

Optimized for deployment on Vercel:
- Automatic HTTPS
- Global CDN
- Edge Functions
- Analytics
- Preview deployments

## 📚 Documentation

Project documentation is located in the parent directory:
- [Detailed Execution Timeline](../DETAILED_EXECUTION_TIMELINE.md) - Complete 12-week plan
- [Brand Guidelines](../brand-guidelines.md) - Visual identity
- [Content Strategy](../content/content-style-guide.md) - Writing standards
- [SEO Framework](../strategy/semantic-seo-framework.md) - SEO methodology

### 🚨 **Critical Development Guidelines**
- **[Fixes & Standards](./fixes.md)** - **REQUIRED READING** - All fixes applied, development rules, and troubleshooting guide

## 👥 Company Background

- **Parent Company**: Farahat & Co (Est. 1985)
- **Experience**: 37 years in audit services
- **Clients Served**: 28,058+
- **Countries**: 140+
- **Awards**: 112+

## 📄 License

Proprietary - All rights reserved

## 🤝 Support

For technical support or questions, refer to project documentation in the parent directory.

---

**Created**: November 15, 2024
**Version**: 0.4.2 (Stability Fixes)
**Status**: 🛡️ Stability Improved - Critical bugs fixed, Assets restored, Navigation Complete, Production Ready
**Last Updated**: November 19, 2025
**Next Steps**: Generate images for blog posts and downloadable guides, implement rate limiting, deploy to production
