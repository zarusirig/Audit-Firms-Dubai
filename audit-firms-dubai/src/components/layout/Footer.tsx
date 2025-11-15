import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Logo, ParentCompanyLogo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SITE_CONFIG, SERVICES, INDUSTRIES, SOCIAL_LINKS, TRUST_BADGES } from '@/lib/constants';

/**
 * Main Footer Component
 * Features:
 * - Multi-column layout
 * - Newsletter signup
 * - Social links
 * - Trust badges
 * - Contact information
 * - Legal links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-neutral-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="mb-6 text-sm text-neutral-600 max-w-md">
              {SITE_CONFIG.description}
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">
                Stay Updated
              </h3>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="mt-2 text-xs text-neutral-500">
                Get audit insights and regulatory updates monthly
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.slice(0, 3).map((badge) => (
                <div
                  key={badge}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Industries
            </h3>
            <ul className="space-y-3">
              {INDUSTRIES.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-neutral-400" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-neutral-400" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-neutral-400" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Quick Links */}
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-neutral-600 hover:text-primary-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-neutral-600 hover:text-primary-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/guides" className="text-sm text-neutral-600 hover:text-primary-600">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-sm text-neutral-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="text-sm text-neutral-600 hover:text-primary-600">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Locations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/difc" className="text-sm text-neutral-600 hover:text-primary-600">
                  DIFC
                </Link>
              </li>
              <li>
                <Link href="/locations/business-bay" className="text-sm text-neutral-600 hover:text-primary-600">
                  Business Bay
                </Link>
              </li>
              <li>
                <Link href="/locations/dubai-marina" className="text-sm text-neutral-600 hover:text-primary-600">
                  Dubai Marina
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-neutral-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-neutral-600 hover:text-primary-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <ParentCompanyLogo />
            <p className="text-center text-sm text-neutral-600">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span>Ministry of Economy Approved</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
