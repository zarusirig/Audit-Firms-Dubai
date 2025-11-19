import Link from 'next/link';
import { FileQuestion, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Custom 404 Not Found Page
 * SEO-optimized with helpful navigation
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FileQuestion className="w-24 h-24 mx-auto text-primary-700 mb-4" />
          <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-neutral-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/en">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/en/contact">
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link
              href="/en/services/external-audit"
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">External Audit</h4>
              <p className="text-sm text-neutral-600">Ministry-approved external audit services</p>
            </Link>
            <Link
              href="/en/services/internal-audit"
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">Internal Audit</h4>
              <p className="text-sm text-neutral-600">Risk assessment and internal controls</p>
            </Link>
            <Link
              href="/en/calculator"
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">Audit Fee Calculator</h4>
              <p className="text-sm text-neutral-600">Get an instant estimate for your audit</p>
            </Link>
            <Link
              href="/en/about"
              className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <h4 className="font-semibold text-primary-900 mb-1">About Us</h4>
              <p className="text-sm text-neutral-600">37 years of auditing excellence</p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-secondary-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Immediate Help?</h3>
          <p className="text-neutral-700 mb-4">
            Our team is ready to assist you with your audit needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+97142500251"
              className="text-lg font-semibold text-primary-700 hover:text-primary-900"
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
