import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema, type BreadcrumbItem as BreadcrumbSchemaItem } from './schemas/BreadcrumbSchema';

/**
 * Breadcrumbs Component with Schema Markup
 * Provides navigation and SEO benefits
 */

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: 'en' | 'ar';
}

export function Breadcrumbs({ items, locale = 'en' }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditfirmsdubai.ae';
  
  // Add home to the beginning
  const fullItems: BreadcrumbItem[] = [
    { label: 'Home', href: `/${locale}` },
    ...items,
  ];

  // Prepare schema items
  const schemaItems: BreadcrumbSchemaItem[] = fullItems.map((item) => ({
    name: item.label,
    url: `${siteUrl}${item.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-neutral-600">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isFirst && (
                  <Home className="w-4 h-4" aria-hidden="true" />
                )}
                
                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className="hover:text-primary-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </>
                ) : (
                  <span className="text-neutral-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
