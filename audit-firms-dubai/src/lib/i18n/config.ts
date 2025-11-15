// i18n Configuration for Dubai Audit Firm
// Supports English (default) and Arabic

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ar'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
}

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
}
