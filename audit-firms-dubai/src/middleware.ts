import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './lib/i18n/config'

function getLocale(request: NextRequest): string {
  // Check if locale is in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameLocale) return pathnameLocale

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const browserLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()

    if (i18n.locales.includes(browserLocale as any)) {
      return browserLocale
    }
  }

  // Default to English
  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // Handle trailing slashes
    if (pathname !== '/' && pathname.endsWith('/')) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.slice(0, -1)
      return NextResponse.redirect(url, 301)
    }

    // Handle www to non-www redirect
    if (request.nextUrl.hostname.startsWith('www.')) {
      const url = request.nextUrl.clone()
      url.hostname = url.hostname.replace('www.', '')
      return NextResponse.redirect(url, 301)
    }

    // Force lowercase URLs
    if (pathname !== pathname.toLowerCase()) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.toLowerCase()
      return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
  }

  // Redirect to locale-prefixed pathname
  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!api|_next/static|_next/image|favicon.ico|og-image.jpg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
