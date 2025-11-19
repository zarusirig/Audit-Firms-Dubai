'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Shield, Award, CheckCircle, Clock } from 'lucide-react';
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
      {/* Urgency CTA Bar */}
      <div className="bg-primary-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="text-sm font-semibold mb-1">Need Help with Your Audit?</div>
              <div className="text-xs opacity-90">Free consultation • 7-day delivery • Ministry approved</div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-secondary-500 text-primary-900 px-4 py-2 rounded-md font-semibold text-sm hover:bg-secondary-600 transition-colors text-center"
              >
                Call Now: {SITE_CONFIG.phone}
              </a>
              <Link
                href={`/${locale}/calculator`}
                className="border border-white text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-white hover:text-primary-900 transition-colors text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-4" />

            {/* Trust Indicators */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Shield className="h-4 w-4 text-primary-600" />
                <span>Ministry Approved</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Award className="h-4 w-4 text-secondary-600" />
                <span>37 Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>7-Day Delivery</span>
              </div>
            </div>

            <p className="mb-6 text-sm text-neutral-600 max-w-md w-full text-center">
              {dict.footer.tagline}
            </p>

            {/* Enhanced Newsletter Signup */}
            <div className="mb-6 rounded-xl bg-white p-6 border border-primary-100 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary-50 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative">
                <h3 className="mb-2 text-sm font-bold text-primary-900">
                  Get Free Audit Preparation Guide
                </h3>
                <p className="mb-4 text-xs text-neutral-600 leading-relaxed">
                  Download our complete checklist for successful audits in UAE. Join 5,000+ subscribers.
                </p>
                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder={dict.footer.newsletterPlaceholder}
                      className="flex-1 h-10 text-sm bg-neutral-50 border-neutral-200 focus:bg-white transition-colors"
                      required
                    />
                    <Button type="submit" className="h-10 bg-primary-600 hover:bg-primary-700 transition-all hover:scale-105 active:scale-95">
                      Get Guide
                    </Button>
                  </div>
                </form>
                <div className="mt-3 flex items-center gap-2 text-[10px] text-neutral-400">
                  <Shield className="h-3 w-3" />
                  <span>Your data is secure. Unsubscribe anytime.</span>
                </div>
              </div>
            </div>

            {/* Enhanced Trust Badges */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                Licensed & Accredited
              </div>
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.slice(0, 4).map((badge) => (
                  <div
                    key={badge}
                    className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
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
                      className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600"
                    >
                      <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
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
                      className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600"
                    >
                      <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
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
              Contact Us Today
            </h3>

            {/* Emergency Contact CTA */}
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3">
              <div className="text-xs font-semibold text-red-800 mb-1">Emergency Audit Help</div>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-lg font-bold text-red-800 hover:text-red-900 transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
              <div className="text-xs text-red-600 mt-1">Available 24/7 • No appointment needed</div>
            </div>

            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-neutral-400 mt-0.5" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-neutral-400 mt-0.5" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-4 p-3 bg-neutral-50 rounded-md">
              <div className="text-xs font-semibold text-neutral-900 mb-1">Business Hours</div>
              <div className="text-xs text-neutral-600">
                Sunday - Thursday<br />
                9 AM - 6 PM GST
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-neutral-900 mb-2 uppercase tracking-wide">
                Follow Us
              </div>
              <div className="flex gap-3">
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
                <Link href={`/${locale}/about`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/team`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.ourTeam}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
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
                <Link href={`/${locale}/free-zones`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Free Zones
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/glossary`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  Glossary
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/guides`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.guides}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/blog`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tools`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.tools}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
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
                <Link href={`/${locale}/locations/difc`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.difc}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/locations/business-bay`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.businessBay}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/locations/dubai-marina`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
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
                <Link href={`/${locale}/privacy`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cookies`} className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-primary-600">
                  <span className="w-0 h-[1px] bg-primary-600 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  {dict.footer.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Metrics Bar */}
      <div className="bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-primary-700">28,000+</div>
              <div className="text-xs text-neutral-600">Clients Served</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary-700">140+</div>
              <div className="text-xs text-neutral-600">Countries</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary-700">37</div>
              <div className="text-xs text-neutral-600">Years Experience</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary-700">98%</div>
              <div className="text-xs text-neutral-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <ParentCompanyLogo />
              <div className="text-xs text-neutral-500">
                Established 1985
              </div>
            </div>
            <p className="text-center text-sm text-neutral-600">
              © {currentYear} {SITE_CONFIG.name}. {dict.footer.allRightsReserved}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                {dict.footer.ministryApproved}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award className="h-3 w-3 text-blue-600" />
                {dict.footer.isoCertified}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
