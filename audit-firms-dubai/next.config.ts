import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better error handling
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          }
        ]
      },
      // Cache static assets
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Redirect configuration
  async redirects() {
    return [
      // Redirect root to default locale
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      // Redirect old paths (add as needed)
      {
        source: '/services',
        destination: '/en/services/external-audit',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/en/about',
        permanent: true,
      },

      // ============================================================
      // 404 FIX REDIRECTS - Phase 1
      // ============================================================

      // CRITICAL PAGE REDIRECTS (wrong paths - permanent)
      { source: '/en/quote', destination: '/en/contact', permanent: true },
      { source: '/ar/quote', destination: '/ar/contact', permanent: true },
      { source: '/en/privacy-policy', destination: '/en/privacy', permanent: true },
      { source: '/ar/privacy-policy', destination: '/ar/privacy', permanent: true },
      { source: '/en/careers', destination: '/en/contact', permanent: false },
      { source: '/ar/careers', destination: '/ar/contact', permanent: false },
      { source: '/en/resources/faq', destination: '/en/resources/blog', permanent: false },
      { source: '/ar/resources/faq', destination: '/ar/resources/blog', permanent: false },

      // GUIDE PDF REDIRECTS (redirect to web pages)
      { source: '/en/guides/:slug.pdf', destination: '/en/resources/guides/:slug', permanent: false },
      { source: '/ar/guides/:slug.pdf', destination: '/ar/resources/guides/:slug', permanent: false },

      // COMPLIANCE SERVICE REDIRECTS (to compliance hub)
      { source: '/en/services/compliance/ministry-requirements', destination: '/en/compliance/ministry-requirements', permanent: true },
      { source: '/ar/services/compliance/ministry-requirements', destination: '/ar/compliance/ministry-requirements', permanent: true },
      { source: '/en/services/compliance/uae-federal-laws', destination: '/en/compliance/uae-federal-laws', permanent: true },
      { source: '/ar/services/compliance/uae-federal-laws', destination: '/ar/compliance/uae-federal-laws', permanent: true },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/external-audit
      // ============================================================
      { source: '/en/services/accounting', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/accounting', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/accounting-services', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/accounting-services', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/accounting-advisory', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/accounting-advisory', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/advisory', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/advisory', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/banking-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/banking-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/blockchain-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/blockchain-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/compliance-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/compliance-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/construction-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/construction-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/crypto-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/crypto-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/cryptocurrency-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/cryptocurrency-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/difc-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/difc-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/dmcc-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/dmcc-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/dubai-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/dubai-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/ecommerce-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/ecommerce-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/education-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/education-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/escrow-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/escrow-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/fintech-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/fintech-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/free-zone-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/free-zone-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/fund-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/fund-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/healthcare-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/healthcare-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/hospitality-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/hospitality-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/ifrs-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/ifrs-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/insurance-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/insurance-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/inventory-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/inventory-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/it-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/it-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/jafza-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/jafza-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/management-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/management-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/manufacturing-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/manufacturing-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/ngo-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/ngo-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/non-profit-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/non-profit-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/nonprofit-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/nonprofit-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/oil-gas-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/oil-gas-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/operational-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/operational-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/performance-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/performance-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/pro-services', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/pro-services', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/professional-services-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/professional-services-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/project-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/project-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/real-estate-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/real-estate-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/real-estate', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/real-estate', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/retail-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/retail-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/saas-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/saas-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/sme-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/sme-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/startup-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/startup-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/statutory-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/statutory-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/sustainability-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/sustainability-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/technology-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/technology-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/trading-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/trading-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/financial-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/financial-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/financial-services-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/financial-services-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/family-business-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/family-business-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/franchise-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/franchise-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/government-contractor-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/government-contractor-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/holding-company-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/holding-company-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/import-export-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/import-export-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/industry-audits', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/industry-audits', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/investment-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/investment-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/joint-venture-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/joint-venture-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/logistics-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/logistics-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/revenue-audit', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/revenue-audit', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/actuarial-services', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/actuarial-services', destination: '/ar/services/external-audit', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/tax-consultation
      // ============================================================
      { source: '/en/services/corporate-tax', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/corporate-tax', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/customs-advisory', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/customs-advisory', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/customs-compliance', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/customs-compliance', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/international-tax', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/international-tax', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/tax-advisory', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/tax-advisory', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/tax-compliance', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/tax-compliance', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/tax-consulting', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/tax-consulting', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/tax-planning', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/tax-planning', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/transfer-pricing', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/transfer-pricing', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/vat-compliance', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/vat-compliance', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/vat-services', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/vat-services', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/services/zakat', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/services/zakat', destination: '/ar/services/tax-consultation', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/vat-audit
      // ============================================================
      { source: '/en/services/excise-tax', destination: '/en/services/vat-audit', permanent: false },
      { source: '/ar/services/excise-tax', destination: '/ar/services/vat-audit', permanent: false },
      { source: '/en/services/fta-compliance', destination: '/en/services/vat-audit', permanent: false },
      { source: '/ar/services/fta-compliance', destination: '/ar/services/vat-audit', permanent: false },
      { source: '/en/services/tax-audit', destination: '/en/services/vat-audit', permanent: false },
      { source: '/ar/services/tax-audit', destination: '/ar/services/vat-audit', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/internal-audit
      // ============================================================
      { source: '/en/services/governance-audit', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/governance-audit', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/risk-advisory', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/risk-advisory', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/risk-management', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/risk-management', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/governance', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/governance', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/governance-advisory', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/governance-advisory', destination: '/ar/services/internal-audit', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/forensic-audit
      // ============================================================
      { source: '/en/services/fraud-investigation', destination: '/en/services/forensic-audit', permanent: false },
      { source: '/ar/services/fraud-investigation', destination: '/ar/services/forensic-audit', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/due-diligence
      // ============================================================
      { source: '/en/services/merger-due-diligence', destination: '/en/services/due-diligence', permanent: false },
      { source: '/ar/services/merger-due-diligence', destination: '/ar/services/due-diligence', permanent: false },
      { source: '/en/services/transaction-advisory', destination: '/en/services/due-diligence', permanent: false },
      { source: '/ar/services/transaction-advisory', destination: '/ar/services/due-diligence', permanent: false },
      { source: '/en/services/ma-advisory', destination: '/en/services/due-diligence', permanent: false },
      { source: '/ar/services/ma-advisory', destination: '/ar/services/due-diligence', permanent: false },
      { source: '/en/services/restructuring-advisory', destination: '/en/services/due-diligence', permanent: false },
      { source: '/ar/services/restructuring-advisory', destination: '/ar/services/due-diligence', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/business-valuation
      // ============================================================
      { source: '/en/services/valuation', destination: '/en/services/business-valuation', permanent: false },
      { source: '/ar/services/valuation', destination: '/ar/services/business-valuation', permanent: false },
      { source: '/en/services/valuation-services', destination: '/en/services/business-valuation', permanent: false },
      { source: '/ar/services/valuation-services', destination: '/ar/services/business-valuation', permanent: false },
      { source: '/en/services/investment-advisory', destination: '/en/services/business-valuation', permanent: false },
      { source: '/ar/services/investment-advisory', destination: '/ar/services/business-valuation', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/ifrs-implementation
      // ============================================================
      { source: '/en/services/financial-reporting', destination: '/en/services/ifrs-implementation', permanent: false },
      { source: '/ar/services/financial-reporting', destination: '/ar/services/ifrs-implementation', permanent: false },
      { source: '/en/services/ifrs', destination: '/en/services/ifrs-implementation', permanent: false },
      { source: '/ar/services/ifrs', destination: '/ar/services/ifrs-implementation', permanent: false },
      { source: '/en/services/ifrs-advisory', destination: '/en/services/ifrs-implementation', permanent: false },
      { source: '/ar/services/ifrs-advisory', destination: '/ar/services/ifrs-implementation', permanent: false },
      { source: '/en/services/revenue-recognition', destination: '/en/services/ifrs-implementation', permanent: false },
      { source: '/ar/services/revenue-recognition', destination: '/ar/services/ifrs-implementation', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/cfo-services
      // ============================================================
      { source: '/en/services/bookkeeping', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/bookkeeping', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/cfo', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/cfo', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/cost-accounting', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/cost-accounting', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/financial-management', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/financial-management', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/financial-planning', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/financial-planning', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/interim-cfo', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/interim-cfo', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/management-accounting', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/management-accounting', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/partnership-accounting', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/partnership-accounting', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/payroll', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/payroll', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/project-accounting', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/project-accounting', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/revenue-accounting', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/revenue-accounting', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/revenue-cycle', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/revenue-cycle', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/financial-modeling', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/financial-modeling', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/services/fb-cost-control', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/fb-cost-control', destination: '/ar/services/cfo-services', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Map to /services/rera-audit
      // ============================================================
      { source: '/en/services/rera-compliance', destination: '/en/services/rera-audit', permanent: false },
      { source: '/ar/services/rera-compliance', destination: '/ar/services/rera-audit', permanent: false },

      // ============================================================
      // SERVICE REDIRECTS - Other specialized services
      // ============================================================
      { source: '/en/services/consultation', destination: '/en/contact', permanent: false },
      { source: '/ar/services/consultation', destination: '/ar/contact', permanent: false },
      { source: '/en/services/compliance', destination: '/en/compliance/ministry-requirements', permanent: false },
      { source: '/ar/services/compliance', destination: '/ar/compliance/ministry-requirements', permanent: false },

      // ESG services - map to external audit for now
      { source: '/en/services/esg', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/esg', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/esg-assurance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/esg-assurance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/esg-reporting', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/esg-reporting', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/esg-advisory', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/esg-advisory', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/sustainability-assurance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/sustainability-assurance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/carbon-accounting', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/carbon-accounting', destination: '/ar/services/external-audit', permanent: false },

      // Corporate governance - map to internal audit
      { source: '/en/services/corporate-governance', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/corporate-governance', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/corporate-secretarial', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/corporate-secretarial', destination: '/ar/services/internal-audit', permanent: false },

      // Compliance services
      { source: '/en/services/aml-compliance', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/aml-compliance', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/economic-substance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/economic-substance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/esr-compliance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/esr-compliance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/tourism-compliance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/tourism-compliance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/hr-compliance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/hr-compliance', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/khda-adek-compliance', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/khda-adek-compliance', destination: '/ar/services/external-audit', permanent: false },

      // Business setup and formation
      { source: '/en/services/business-setup', destination: '/en/contact', permanent: false },
      { source: '/ar/services/business-setup', destination: '/ar/contact', permanent: false },
      { source: '/en/services/company-formation', destination: '/en/contact', permanent: false },
      { source: '/ar/services/company-formation', destination: '/ar/contact', permanent: false },
      { source: '/en/services/opc-formation', destination: '/en/contact', permanent: false },
      { source: '/ar/services/opc-formation', destination: '/ar/contact', permanent: false },
      { source: '/en/services/licensing', destination: '/en/contact', permanent: false },
      { source: '/ar/services/licensing', destination: '/ar/contact', permanent: false },
      { source: '/en/services/license-renewal', destination: '/en/contact', permanent: false },
      { source: '/ar/services/license-renewal', destination: '/ar/contact', permanent: false },
      { source: '/en/services/visa-services', destination: '/en/contact', permanent: false },
      { source: '/ar/services/visa-services', destination: '/ar/contact', permanent: false },
      { source: '/en/services/dha-doh-licensing', destination: '/en/contact', permanent: false },
      { source: '/ar/services/dha-doh-licensing', destination: '/ar/contact', permanent: false },

      // Free zone services
      { source: '/en/services/free-zone-services', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/free-zone-services', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/free-zone-consulting', destination: '/en/contact', permanent: false },
      { source: '/ar/services/free-zone-consulting', destination: '/ar/contact', permanent: false },
      { source: '/en/services/dafza-setup', destination: '/en/free-zones/dafza', permanent: false },
      { source: '/ar/services/dafza-setup', destination: '/ar/free-zones/dafza', permanent: false },
      { source: '/en/services/dmcc-setup', destination: '/en/contact', permanent: false },
      { source: '/ar/services/dmcc-setup', destination: '/ar/contact', permanent: false },
      { source: '/en/services/dubai-south-setup', destination: '/en/contact', permanent: false },
      { source: '/ar/services/dubai-south-setup', destination: '/ar/contact', permanent: false },
      { source: '/en/services/jafza-setup', destination: '/en/contact', permanent: false },
      { source: '/ar/services/jafza-setup', destination: '/ar/contact', permanent: false },
      { source: '/en/services/science-park-setup', destination: '/en/contact', permanent: false },
      { source: '/ar/services/science-park-setup', destination: '/ar/contact', permanent: false },

      // Other services
      { source: '/en/services/cybersecurity', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/cybersecurity', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/iso-27001', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/services/iso-27001', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/services/ipo-readiness', destination: '/en/services/due-diligence', permanent: false },
      { source: '/ar/services/ipo-readiness', destination: '/ar/services/due-diligence', permanent: false },
      { source: '/en/services/emiratization', destination: '/en/contact', permanent: false },
      { source: '/ar/services/emiratization', destination: '/ar/contact', permanent: false },
      { source: '/en/services/icv-certification', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/icv-certification', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/nav-verification', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/services/nav-verification', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/services/inventory-management', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/services/inventory-management', destination: '/ar/services/cfo-services', permanent: false },

      // ============================================================
      // TOOL PAGE REDIRECTS
      // ============================================================
      { source: '/en/tools/audit-calculator', destination: '/en/tools/audit-cost-comparison', permanent: false },
      { source: '/ar/tools/audit-calculator', destination: '/ar/tools/audit-cost-comparison', permanent: false },
      { source: '/en/tools/audit-cost-calculator', destination: '/en/tools/audit-cost-comparison', permanent: false },
      { source: '/ar/tools/audit-cost-calculator', destination: '/ar/tools/audit-cost-comparison', permanent: false },
      { source: '/en/tools/vat-calculator', destination: '/en/contact', permanent: false },
      { source: '/ar/tools/vat-calculator', destination: '/ar/contact', permanent: false },
      { source: '/en/tools/tax-calculator', destination: '/en/contact', permanent: false },
      { source: '/ar/tools/tax-calculator', destination: '/ar/contact', permanent: false },
      { source: '/en/tools/tax-deadline-calculator', destination: '/en/contact', permanent: false },
      { source: '/ar/tools/tax-deadline-calculator', destination: '/ar/contact', permanent: false },
      { source: '/en/tools/rera-calculator', destination: '/en/services/rera-audit', permanent: false },
      { source: '/ar/tools/rera-calculator', destination: '/ar/services/rera-audit', permanent: false },

      // Tool guide pages - redirect to contact or relevant service
      { source: '/en/tools/internal-audit-framework', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/tools/internal-audit-framework', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/tools/real-estate-compliance', destination: '/en/services/rera-audit', permanent: false },
      { source: '/ar/tools/real-estate-compliance', destination: '/ar/services/rera-audit', permanent: false },
      { source: '/en/tools/q1-2025-regulatory-update', destination: '/en/resources/blog', permanent: false },
      { source: '/ar/tools/q1-2025-regulatory-update', destination: '/ar/resources/blog', permanent: false },
      { source: '/en/tools/uae-corporate-governance', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/tools/uae-corporate-governance', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/tools/data-protection-guide', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/tools/data-protection-guide', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/tools/rera-audit-guide', destination: '/en/services/rera-audit', permanent: false },
      { source: '/ar/tools/rera-audit-guide', destination: '/ar/services/rera-audit', permanent: false },
      { source: '/en/tools/financial-statement-template', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/tools/financial-statement-template', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/tools/external-audit-checklist', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/tools/external-audit-checklist', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/tools/esg-reporting-guide', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/tools/esg-reporting-guide', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/tools/aml-compliance-checklist', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/tools/aml-compliance-checklist', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/tools/corporate-tax-readiness', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/tools/corporate-tax-readiness', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/tools/internal-controls-guide', destination: '/en/services/internal-audit', permanent: false },
      { source: '/ar/tools/internal-controls-guide', destination: '/ar/services/internal-audit', permanent: false },
      { source: '/en/tools/cash-flow-forecast', destination: '/en/services/cfo-services', permanent: false },
      { source: '/ar/tools/cash-flow-forecast', destination: '/ar/services/cfo-services', permanent: false },
      { source: '/en/tools/transfer-pricing-documentation', destination: '/en/services/tax-consultation', permanent: false },
      { source: '/ar/tools/transfer-pricing-documentation', destination: '/ar/services/tax-consultation', permanent: false },
      { source: '/en/tools/fintech-regulatory-guide', destination: '/en/services/external-audit', permanent: false },
      { source: '/ar/tools/fintech-regulatory-guide', destination: '/ar/services/external-audit', permanent: false },
      { source: '/en/tools/vat-compliance-template', destination: '/en/services/vat-audit', permanent: false },
      { source: '/ar/tools/vat-compliance-template', destination: '/ar/services/vat-audit', permanent: false },
      { source: '/en/tools/registration-checklist', destination: '/en/contact', permanent: false },
      { source: '/ar/tools/registration-checklist', destination: '/ar/contact', permanent: false },
    ];
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors (not recommended for production)
    ignoreBuildErrors: false,
  },

  // Output configuration
  output: 'standalone', // For Docker deployments

  // Power optimization
  poweredByHeader: false, // Remove X-Powered-By header
};

export default nextConfig;
