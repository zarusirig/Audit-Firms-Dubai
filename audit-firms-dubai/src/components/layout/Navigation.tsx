'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import type { NavigationItem } from '@/types';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/types';

/**
 * Main Navigation Component
 * Features:
 * - Sticky header with scroll effect
 * - Desktop mega menu
 * - Mobile drawer menu
 * - Active state indicators
 * - CTA buttons
 * - Language switcher
 * - i18n support
 */
export function Navigation({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-shadow',
        isScrolled && 'shadow-sm'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {MAIN_NAVIGATION.map((item) => (
              <NavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
            </a>
            <LanguageSwitcher currentLocale={locale} />
            <Button asChild>
              <Link href={`/${locale}/contact`}>{dict.common.getQuote}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileNav
                pathname={pathname}
                locale={locale}
                dict={dict}
                onClose={() => setMobileMenuOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

/**
 * Desktop Navigation Item
 * Handles dropdown menus
 */
function NavItem({ item, pathname }: { item: NavigationItem; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (item.children && item.children.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={cn(
            'flex items-center gap-1 text-sm font-medium transition-colors',
            isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
          )}
        >
          {item.label}
          <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full pt-2">
            <div className="min-w-[240px] rounded-lg border bg-white p-2 shadow-lg">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block rounded-md px-4 py-2 text-sm transition-colors',
                    pathname === child.href
                      ? 'bg-primary-50 text-primary-600 font-medium'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'text-sm font-medium transition-colors',
        isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
      )}
    >
      {item.label}
    </Link>
  );
}

/**
 * Mobile Navigation
 * Drawer menu for mobile devices
 */
function MobileNav({
  pathname,
  locale,
  dict,
  onClose,
}: {
  pathname: string
  locale: Locale
  dict: Dictionary
  onClose: () => void
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b pb-4">
        <Logo size="md" />
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-1">
          {MAIN_NAVIGATION.map((item) => (
            <div key={item.href}>
              {item.children && item.children.length > 0 ? (
                <div>
                  <button
                    onClick={() => setOpenSection(openSection === item.href ? null : item.href)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
                      pathname.startsWith(item.href)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openSection === item.href && 'rotate-180'
                      )}
                    />
                  </button>
                  {openSection === item.href && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            'block rounded-lg px-4 py-2 text-sm transition-colors',
                            pathname === child.href
                              ? 'bg-primary-50 text-primary-600 font-medium'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile CTA */}
      <div className="border-t pt-4 space-y-3">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex items-center gap-3 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-100"
        >
          <Phone className="h-5 w-5" />
          {SITE_CONFIG.phone}
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <Button asChild className="flex-1">
            <Link href={`/${locale}/contact`} onClick={onClose}>
              {dict.common.getQuote}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
