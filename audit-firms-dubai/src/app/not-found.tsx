'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileQuestion, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Custom 404 Not Found Page
 * SEO-optimized with helpful navigation
 */

export default function NotFound() {
  const pathname = usePathname();
  const isAr = pathname?.startsWith('/ar');
  const locale = isAr ? 'ar' : 'en';

  const content = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: "Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.",
      home: 'Go Home',
      contact: 'Contact Us',
      popular: 'Popular Pages',
      services: {
        external: 'External Audit',
        internal: 'Internal Audit',
        calculator: 'Audit Fee Calculator',
        about: 'About Us'
      },
      descriptions: {
        external: 'Ministry-approved external audit services',
        internal: 'Risk assessment and internal controls',
        calculator: 'Get an instant estimate for your audit',
        about: '37 years of auditing excellence'
      },
      help: {
        title: 'Need Immediate Help?',
        desc: 'Our team is ready to assist you with your audit needs'
      }
    },
    ar: {
      title: '404',
      subtitle: 'الصفحة غير موجودة',
      description: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد يكون تم نقل الصفحة أو حذفها.',
      home: 'الرئيسية',
      contact: 'اتصل بنا',
      popular: 'الصفحات الشائعة',
      services: {
        external: 'تدقيق خارجي',
        internal: 'تدقيق داخلي',
        calculator: 'حاسبة رسوم التدقيق',
        about: 'من نحن'
      },
      descriptions: {
        external: 'خدمات تدقيق خارجية معتمدة من الوزارة',
        internal: 'تقييم المخاطر والضوابط الداخلية',
        calculator: 'احصل على تقدير فوري للتدقيق',
        about: '37 عاماً من التميز في التدقيق'
      },
      help: {
        title: 'هل تحتاج إلى مساعدة فورية؟',
        desc: 'فريقنا جاهز لمساعدتك في احتياجات التدقيق الخاصة بك'
      }
    }
  };

  const t = isAr ? content.ar : content.en;
  const dir = isAr ? 'rtl' : 'ltr';

  return (
    <div className="min-h-screen flex items-center justify-center px-4" dir={dir}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FileQuestion className="w-24 h-24 mx-auto text-primary-700 mb-4" />
          <h1 className="text-6xl font-bold text-primary-900 mb-4">{t.title}</h1>
          <h2 className="text-3xl font-semibold text-neutral-800 mb-4">
            {t.subtitle}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href={`/${locale}`}>
              <Home className={`w-4 h-4 ${isAr ? 'ml-2' : 'mr-2'}`} />
              {t.home}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={`/${locale}/contact`}>
              {t.contact}
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">{t.popular}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left" dir={dir}>
            <Link
              href={`/${locale}/services/external-audit`}
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">{t.services.external}</h4>
              <p className="text-sm text-neutral-600">{t.descriptions.external}</p>
            </Link>
            <Link
              href={`/${locale}/services/internal-audit`}
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">{t.services.internal}</h4>
              <p className="text-sm text-neutral-600">{t.descriptions.internal}</p>
            </Link>
            <Link
              href={`/${locale}/calculator`}
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">{t.services.calculator}</h4>
              <p className="text-sm text-neutral-600">{t.descriptions.calculator}</p>
            </Link>
            <Link
              href={`/${locale}/about`}
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">{t.services.about}</h4>
              <p className="text-sm text-neutral-600">{t.descriptions.about}</p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-secondary-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{t.help.title}</h3>
          <p className="text-neutral-700 mb-4">
            {t.help.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+97142500251"
              className="text-lg font-semibold text-primary-700 hover:text-primary-900"
              dir="ltr"
            >
              📞 +971 42 500 251
            </a>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <a
              href="mailto:info@auditfirmsdubai.ae"
              className="text-lg font-semibold text-primary-700 hover:text-primary-900"
            >
              ✉️ info@auditfirmsdubai.ae
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
