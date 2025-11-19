# Audit Firms Dubai - Quick Reference Guide

## At a Glance

- **Project**: Audit Firms Dubai (rank-and-rent SEO site)
- **Framework**: Next.js 16.0.3 with TypeScript
- **Status**: Foundation Phase Complete (v0.1.0)
- **Pages**: 22 main pages (7 core + 6 services + 6 locations + 5 industries)
- **Components**: 84 total (7 home sections, 3 layout, 70+ UI)
- **Languages**: English (en) + Arabic (ar) with RTL support
- **Goal**: 10,000+ monthly visitors, $8,000/month revenue by month 18

---

## Key Files & Locations

| Purpose | File Path |
|---------|-----------|
| Site Constants | `/audit-firms-dubai/src/lib/constants/index.ts` |
| Brand Data | `/audit-firms-dubai/src/lib/constants/brand.ts` |
| Navigation | `/audit-firms-dubai/src/components/layout/Navigation.tsx` |
| Footer | `/audit-firms-dubai/src/components/layout/Footer.tsx` |
| Home Page | `/audit-firms-dubai/src/app/[locale]/page.tsx` |
| i18n Config | `/audit-firms-dubai/src/lib/i18n/config.ts` |
| TypeScript Types | `/audit-firms-dubai/src/types/index.ts` |
| Global Styles | `/audit-firms-dubai/src/app/globals.css` |

---

## Navigation Structure

```
Header
├── Services (6)
├── Industries (5)
├── Locations
├── Resources (Guides, Tools, Blog, FAQ)
├── About
├── Contact (CTA)
├── Phone Icon
├── Language Switcher
└── Get Quote Button (CTA)

Footer
├── Company Info + Newsletter
├── Services Links
├── Industries Links
├── Contact Info + Social
├── Quick Links (Company, Resources, Locations, Legal)
└── Certifications Bar
```

---

## Pages by Category

### Core (7)
- / (Home)
- /about
- /faq
- /calculator
- /tools
- /contact (implied)
- /thank-you

### Services (6)
- /services/external-audit ✅
- /services/internal-audit ✅
- /services/due-diligence ✅
- /services/forensic-audit ✅
- /services/rera-audit ✅
- /services/vat-audit (need to build)

### Locations (6)
- /locations (hub)
- /locations/difc
- /locations/business-bay
- /locations/dubai-marina
- /locations/jlt
- /locations/downtown-dubai

### Industries (5 of 8)
- /industries/real-estate ✅
- /industries/trading ✅
- /industries/manufacturing ✅
- /industries/financial-services ✅
- /industries/healthcare ✅
- /industries/hospitality (planned)
- /industries/technology (planned)
- /industries/ecommerce (planned)

### API Routes (4)
- /api/newsletter
- /api/calculate-fee
- /api/contact
- /api/quote

---

## Services Offered (6)

| Service | Key Features |
|---------|------------|
| **External Audit** | Ministry Approved, IFRS Compliant, 7-Day Delivery |
| **Internal Audit** | Risk-Based, Process Improvement, Fraud Prevention |
| **Due Diligence** | M&A Support, Investment Analysis, Risk Identification |
| **Forensic Audit** | Fraud Detection, Legal Support, Expert Witness |
| **RERA Audit** | RERA Compliance, Escrow Accounts, Real Estate Focus |
| **VAT Audit** | FTA Approved, Tax Planning, Compliance Review |

---

## Company Profile

- **Name**: Audit Firms Dubai
- **Parent**: Farahat & Co (Est. 1985)
- **Experience**: 37 years
- **Clients**: 28,058+
- **Countries**: 140+
- **Awards**: 112+
- **Team**: 150+ professionals (95% CPA/CA certified)
- **Satisfaction**: 98%

---

## Home Page Sections (7)

1. **HeroSection** - Hero banner with headline + CTA
2. **StatisticsSection** - Company metrics display
3. **ServicesGrid** - 6 services in grid layout
4. **WhyChooseUs** - 8 key differentiators
5. **TestimonialsSection** - Client reviews carousel
6. **FAQSection** - 8 common questions
7. **CTASection** - Final call-to-action

---

## Component Structure

### Layout (3)
- Navigation.tsx (sticky header + mega menu + mobile drawer)
- Footer.tsx (multi-column footer)
- LanguageSwitcher.tsx (EN/AR toggle)

### Home Sections (7)
- HeroSection, StatisticsSection, ServicesGrid
- WhyChooseUs, TestimonialsSection, FAQSection, CTASection

### Feature Components
- Forms (Contact, Quote, Newsletter)
- Calculator (audit fee estimator)
- FAQ (accordion)
- Services, Industries, Locations (detail pages)
- Testimonials, Brand components

### UI Components (shadcn/ui + Radix)
- 84 reusable components
- Button, Card, Dialog, Accordion, Tabs, Forms, etc.

### SEO Components
- OrganizationSchema, LocalBusinessSchema
- Service, FAQ, Article schemas

---

## Lead Generation Tools

1. **Contact Form** - Full inquiry form → /api/contact
2. **Quote Request** - Service-specific quotes → /api/quote
3. **Fee Calculator** - Instant estimates → /api/calculate-fee
4. **Newsletter** - Email collection → /api/newsletter
5. **Phone CTA** - Direct calls (always visible)

---

## i18n Setup

- **Languages**: English (en), Arabic (ar)
- **Default**: English
- **Routing**: Dynamic `[locale]` parameter
- **Layout**: RTL support for Arabic
- **URLs**: `/{locale}/route`

Example:
- `/en/services/external-audit`
- `/ar/services/external-audit`

---

## SEO Implementation

### Features
- Schema markup (Organization, LocalBusiness, Service, FAQ, Article)
- Dynamic sitemap
- Open Graph tags
- Hreflang tags for bilingual content
- Canonical URLs
- Image optimization (AVIF/WebP)

### Keywords (Primary 10)
- audit firms in uae
- audit firm in dubai
- best audit firm in dubai
- external audit dubai
- internal audit uae
- statutory audit uae
- audit services dubai
- rera audit dubai
- vat audit dubai
- auditors in dubai

### 12-Month Targets
- 50+ top 3 rankings
- 10,000+ monthly visitors
- DR 50+
- 500+ referring domains
- 150+ leads/month
- $8,000/month revenue

---

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router + Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI**: Radix UI + shadcn/ui (84 components)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **SEO**: next-seo + custom schemas
- **i18n**: Custom middleware solution
- **Package Manager**: npm

---

## Development Status

### Completed
✅ Next.js 16 setup  
✅ Navigation & Footer  
✅ Home page (7 sections)  
✅ 5/6 service pages  
✅ 6 location pages  
✅ 5/8 industry pages  
✅ About, FAQ, Calculator pages  
✅ English + Arabic support  
✅ Schema markup & SEO  
✅ Form components  

### In Progress
⏳ VAT Audit service page  
⏳ 3 industry pages (Hospitality, Tech, E-commerce)  
⏳ Team & Careers pages  
⏳ Blog infrastructure  

### Planned
📋 100+ content pages  
📋 Legal pages (Privacy, Terms, Cookies)  
📋 Resource guides  
📋 Link building campaign  
📋 Performance optimization  

---

## Documentation Files

| File | Purpose |
|------|---------|
| `project-master.md` | Project overview, timeline, budget, KPIs |
| `DETAILED_EXECUTION_TIMELINE.md` | 12-week implementation plan |
| `brand-guidelines.md` | Brand identity, colors, typography |
| `bonus-topical-map.md` | SEO content strategy |
| `WEBSITE_STRUCTURE_ANALYSIS.md` | **Comprehensive structure overview** |
| `SITE_STRUCTURE_VISUAL.txt` | **Visual site architecture diagram** |

---

## Performance Targets

- **Lighthouse**: 95+ (mobile), 98+ (desktop)
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

---

## Project Timeline (12 Weeks)

**Phase 1** (Weeks 1-4): Foundation - Core pages, schema, local SEO
**Phase 2** (Weeks 5-16): Content Velocity - 100+ pages, services, blog
**Phase 3** (Weeks 8-20): Authority Building - Link building, citations
**Phase 4** (Weeks 16-24): Optimization - CRO, content refresh, technical

---

## Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## File Structure Overview

```
audit-firms-dubai/src/
├── app/[locale]/
│   ├── page.tsx              (Home)
│   ├── layout.tsx            (Root layout)
│   ├── services/*            (6 services)
│   ├── locations/*           (6 locations)
│   ├── industries/*          (5-8 industries)
│   ├── about, faq, calculator, tools
│   └── api/                  (4 API routes)
├── components/
│   ├── layout/               (Navigation, Footer)
│   ├── sections/home/        (7 home sections)
│   ├── services/             (Service components)
│   ├── industries/           (Industry components)
│   ├── locations/            (Location components)
│   ├── forms/                (Form components)
│   ├── calculator/           (Calculator tool)
│   ├── seo/schemas/          (Schema markup)
│   └── ui/                   (84 shadcn/ui components)
├── lib/
│   ├── constants/            (Site & brand data)
│   ├── i18n/                 (i18n setup)
│   └── utils/                (Helper functions)
└── types/                    (TypeScript definitions)
```

---

## Quick Links

- **Detailed Analysis**: See `WEBSITE_STRUCTURE_ANALYSIS.md`
- **Visual Diagram**: See `SITE_STRUCTURE_VISUAL.txt`
- **Brand Guidelines**: See `/brand-guidelines.md`
- **SEO Strategy**: See `/bonus-topical-map.md`
- **Timeline**: See `/DETAILED_EXECUTION_TIMELINE.md`

---

*Last Updated: November 16, 2025*
*Project Version: 0.1.0 (Development)*
