import { Metadata } from 'next'
import { CASE_STUDIES } from '@/lib/content/case-studies'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import Link from 'next/link'

const caseStudy = CASE_STUDIES['rera-audit-success']

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    keywords: caseStudy.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/case-studies/${caseStudy.slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/case-studies/${caseStudy.slug}`,
        ar: `${SITE_CONFIG.url}/ar/case-studies/${caseStudy.slug}`,
      },
    },
  }
}

export default async function RERACaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Case Studies', href: `/${locale}/case-studies` },
    { label: caseStudy.title, href: `/${locale}/case-studies/${caseStudy.slug}` },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">{caseStudy.industry}</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">{caseStudy.service}</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">{caseStudy.duration}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.heroTitle}</h1>
            <p className="text-2xl text-blue-200 mb-6">{caseStudy.heroSubtitle}</p>
            <p className="text-lg text-slate-300">{caseStudy.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-slate-600 mb-1">Industry</div>
                <div className="font-bold text-xl">{caseStudy.industry}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-slate-600 mb-1">Location</div>
                <div className="font-bold text-xl">{caseStudy.location}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-slate-600 mb-1">Project Size</div>
                <div className="font-bold text-xl">{caseStudy.companySize}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-slate-600 mb-1">Timeline</div>
                <div className="font-bold text-xl">{caseStudy.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Situation</h2>
            <div className="space-y-4 text-lg text-slate-700">
              {caseStudy.situation.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-4 text-red-700">{challenge.title}</h3>
                  <p className="text-slate-700">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            <div className="space-y-4 text-lg text-slate-700 mb-12">
              {caseStudy.solution.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8">Our Approach</h3>
            <div className="space-y-6">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Results Achieved</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-sm text-slate-600 mb-2">{result.metric}</div>
                  <div className="text-4xl font-bold text-green-600 mb-3">{result.value}</div>
                  <p className="text-slate-700">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {caseStudy.testimonial && (
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">"</div>
              <blockquote className="text-2xl mb-8 italic">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="font-bold text-xl">{caseStudy.testimonial.author}</div>
              <div className="text-slate-400">{caseStudy.testimonial.position}</div>
              <div className="text-slate-500">{caseStudy.testimonial.company}</div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Takeaways</h2>
            <ul className="space-y-4">
              {caseStudy.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 text-2xl mr-4">✓</span>
                  <span className="text-lg text-slate-700 pt-1">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need RERA Audit & Compliance Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our specialized real estate audit team ensures full RERA compliance and protects your development from penalties.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              Schedule Consultation
            </Link>
            <Link href={`/${locale}/services/rera-audit`} className="px-8 py-4 border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              RERA Audit Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
