'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { i18n, localeNames, type Locale } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()

  const getLocalizedPath = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')

    // Construct new path with new locale
    return `/${newLocale}${pathWithoutLocale || ''}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            asChild
            className={currentLocale === locale ? 'bg-primary-50' : ''}
          >
            <Link
              href={getLocalizedPath(locale)}
              className="flex items-center gap-2 w-full"
            >
              {localeNames[locale]}
              {currentLocale === locale && (
                <span className="ml-auto text-primary-600">✓</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
