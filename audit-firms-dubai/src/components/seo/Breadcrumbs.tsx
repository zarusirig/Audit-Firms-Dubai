'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema, type BreadcrumbItem } from './schemas/BreadcrumbSchema'
import { cn } from '@/lib/utils'

interface BreadcrumbsProps {
  locale: string
  customItems?: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumbs Component
 * - Automatically generates breadcrumbs from pathname
 * - Includes structured data markup
 * - Customizable via customItems prop
 * - RTL support for Arabic
 */
export function Breadcrumbs({ locale, customItems, className }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname if not provided
  const items: BreadcrumbItem[] = customItems || generateBreadcrumbItems(pathname, locale)

  if (items.length === 0) return null

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center gap-2 text-sm', className)}
      >
        <ol className="flex items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index === 0 && (
                  <Home className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                )}

                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight
                      className="h-4 w-4 text-neutral-400"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <span className="font-medium text-neutral-900" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

/**
 * Generate breadcrumb items from pathname
 */
function generateBreadcrumbItems(pathname: string, locale: string): BreadcrumbItem[] {
  // Remove locale prefix and split path
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
  const segments = pathWithoutLocale.split('/').filter(Boolean)

  // Start with home
  const items: BreadcrumbItem[] = [
    {
      name: 'Home',
      href: `/${locale}`,
    },
  ]

  // Build breadcrumb items from path segments
  let currentPath = `/${locale}`

  segments.forEach((segment) => {
    currentPath += `/${segment}`

    // Format segment name (replace hyphens with spaces, capitalize)
    const name = formatSegmentName(segment)

    items.push({
      name,
      href: currentPath,
    })
  })

  return items
}

/**
 * Format URL segment into readable name
 */
function formatSegmentName(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
