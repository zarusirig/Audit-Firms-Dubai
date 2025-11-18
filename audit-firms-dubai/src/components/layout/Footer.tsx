'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Logo, ParentCompanyLogo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SITE_CONFIG, SERVICES, INDUSTRIES, SOCIAL_LINKS, TRUST_BADGES } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/types';

/**
 * Main Footer Component
 * Features:
 * - Multi-column layout
 * - Newsletter signup
 * - Social links
 * - Trust badges
 * - Contact information
 * - Legal links
 * - i18n support
 */
export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-neutral-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="mb-6 text-sm text-neutral-600 max-w-md w-full text-center">
              {dict.footer.tagline}
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">
                {dict.footer.stayUpdated}
              </h3>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder={dict.footer.newsletterPlaceholder}
                  className="flex-1"
                  required
                />
                <Button type="submit">{dict.footer.subscribe}</Button>
              </form>
              <p className="mt-2 text-xs text-neutral-500">
                {dict.footer.newsletterDesc}
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
              {dict.footer.services}
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => {
                const serviceName = (dict.services as any)[
                  service.slug === 'external-audit' ? 'externalAudit' :
                  service.slug === 'internal-audit' ? 'internalAudit' :
                  service.slug === 'due-diligence' ? 'dueDiligence' :
                  service.slug === 'forensic-audit' ? 'forensicAudit' :
                  service.slug === 'rera-audit' ? 'reraAudit' :
                  service.slug === 'vat-audit' ? 'vatAudit' : ''
                ] || service.name;

                return (
                  <li key={service.slug}>
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      {serviceName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              {dict.footer.industries}
            </h3>
            <ul className="space-y-3">
              {INDUSTRIES.slice(0, 6).map((industry) => {
                const industryName = (dict.industries as any)[
                  industry.slug === 'real-estate' ? 'realEstate' :
                  industry.slug === 'trading' ? 'trading' :
                  industry.slug === 'manufacturing' ? 'manufacturing' :
                  industry.slug === 'financial-services' ? 'financialServices' :
                  industry.slug === 'healthcare' ? 'healthcare' :
                  industry.slug === 'hospitality' ? 'hospitality' : ''
                ] || industry.name;

                return (
                  <li key={industry.slug}>
                    <Link
                      href={`/${locale}/industries/${industry.slug}`}
                      className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      {industryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              {dict.footer.contactUs}
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
              {dict.footer.company}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/team`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.ourTeam}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.careers}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {dict.footer.resources}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/resources/guides`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.guides}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/blog`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tools`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.tools}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.faq}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {dict.footer.locations}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/locations/difc`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.difc}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/locations/business-bay`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.businessBay}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/locations/dubai-marina`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.dubaiMarina}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cookies`} className="text-sm text-neutral-600 hover:text-primary-600">
                  {dict.footer.cookiePolicy}
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
              © {currentYear} {SITE_CONFIG.name}. {dict.footer.allRightsReserved}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span>{dict.footer.ministryApproved}</span>
              <span>•</span>
              <span>{dict.footer.isoCertified}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
