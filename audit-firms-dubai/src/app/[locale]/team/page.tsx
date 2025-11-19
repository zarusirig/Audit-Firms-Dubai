import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import {
  getAllTeamMembers,
  getTeamMembersByRole,
  getFeaturedTeamMembers,
  type TeamMember,
} from '@/lib/content/team'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Award,
  Globe,
  TrendingUp,
  Briefcase,
  Mail,
  Linkedin,
  CheckCircle2,
} from 'lucide-react'

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
    title: 'Our Team - Expert Auditors & Tax Consultants | Farahat & Co',
    description:
      'Meet the expert team at Farahat & Co - Ministry-approved auditors, tax consultants, and advisory professionals with 37 years of experience serving 28,000+ UAE businesses.',
    keywords: [
      'audit team dubai',
      'certified auditors uae',
      'tax consultants dubai',
      'audit professionals',
      'farahat team',
      'ministry approved auditors',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/team`,
      languages: {
        en: `${SITE_CONFIG.url}/en/team`,
        ar: `${SITE_CONFIG.url}/ar/team`,
      },
    },
  }
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Team', href: `/${locale}/team` },
  ]

  const partners = getTeamMembersByRole('partner')
  const directors = getTeamMembersByRole('director')
  const managers = getTeamMembersByRole('manager')
  const seniors = getTeamMembersByRole('senior')
  const specialists = getTeamMembersByRole('specialist')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 px-4 py-20 text-white md:py-24">
        {/* Background Pattern & Blobs */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/50 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Users className="h-4 w-4 text-secondary-400" />
              22 Expert Professionals
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Meet Our <span className="text-secondary-400">Expert Team</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-100 md:text-xl leading-relaxed">
              Our team of Ministry-approved auditors, tax consultants, and advisory
              professionals brings together decades of combined experience across all major
              industries in the UAE. We are committed to delivering exceptional service and
              building long-term relationships with our clients.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-3 flex justify-center">
                  <Award className="h-8 w-8 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mb-1 text-2xl font-bold text-white">37+</div>
                <div className="text-sm font-medium text-primary-200">Years Experience</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-3 flex justify-center">
                  <Users className="h-8 w-8 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mb-1 text-2xl font-bold text-white">28,000+</div>
                <div className="text-sm font-medium text-primary-200">Clients Served</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-3 flex justify-center">
                  <Briefcase className="h-8 w-8 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mb-1 text-2xl font-bold text-white">15+</div>
                <div className="text-sm font-medium text-primary-200">Industries</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-3 flex justify-center">
                  <Globe className="h-8 w-8 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mb-1 text-2xl font-bold text-white">12+</div>
                <div className="text-sm font-medium text-primary-200">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Partners */}
      {partners.length > 0 && (
        <section className="border-b border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600">
                Our partners bring strategic vision and decades of expertise to every
                engagement
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {partners.map((member) => (
                <TeamMemberCard key={member.id} member={member} featured locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Directors */}
      {directors.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">
                Directors
              </h2>
              <p className="text-lg text-gray-600">
                Experienced leaders managing complex engagements across industries
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {directors.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Managers & Specialists */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Managers & Specialists
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals delivering quality service across all practice areas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...managers, ...specialists].map((member) => (
              <TeamMemberCard key={member.id} member={member} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Team */}
      {seniors.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">
                Senior Team
              </h2>
              <p className="text-lg text-gray-600">
                Skilled professionals supporting our audit and advisory engagements
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {seniors.map((member) => (
                <TeamMemberCard key={member.id} member={member} compact locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Work With Our Expert Team
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Our team is ready to help you with audit, tax, and advisory services tailored
              to your business needs. Contact us to discuss how we can support your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/services`}>Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TeamMemberCard({
  member,
  featured = false,
  compact = false,
  locale,
}: {
  member: TeamMember
  featured?: boolean
  compact?: boolean
  locale: string
}) {
  if (compact) {
    return (
      <Link
        href={`/${locale}/team/${member.id}`}
        className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm font-bold">View Profile →</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="mb-1 font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{member.name}</h3>
          <p className="mb-3 text-sm font-medium text-primary-600">{member.title}</p>
          <div className="mb-3 flex flex-wrap gap-1">
            {member.specializations.slice(0, 2).map((spec) => (
              <Badge key={spec} variant="secondary" className="text-[10px] bg-gray-100 text-gray-600 border-transparent font-normal">
                {spec}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-gray-500 font-medium">{member.experience}</p>
        </div>
      </Link>
    )
  }

  return (
    <div
      className={`group overflow-hidden rounded-xl border ${
        featured ? 'border-primary-100 bg-white shadow-md' : 'border-gray-200 bg-white'
      } transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <Image
          src={member.image}
          alt={member.name}
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm border border-white/20">
            Partner
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-1 text-xl font-serif font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{member.name}</h3>
        <p className="mb-4 text-sm font-bold text-secondary-600 uppercase tracking-wide">{member.title}</p>

        <p className="mb-5 line-clamp-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>

        <div className="mb-5 space-y-2 bg-gray-50 p-3 rounded-lg">
          <div className="text-xs text-gray-600 flex items-center gap-2">
            <Briefcase className="h-3 w-3 text-primary-500" />
            <span className="font-semibold text-gray-900">Experience:</span> {member.experience}
          </div>
          {member.qualifications.length > 0 && (
            <div className="text-xs text-gray-600 flex items-start gap-2">
              <Award className="h-3 w-3 text-primary-500 mt-0.5" />
              <span>
                <span className="font-semibold text-gray-900">Qualifications:</span>{' '}
                {member.qualifications.join(', ')}
              </span>
            </div>
          )}
        </div>

        <div className="mb-6 flex flex-wrap gap-1.5">
          {member.specializations.slice(0, 3).map((spec) => (
            <Badge key={spec} variant="outline" className="text-xs font-normal text-gray-600 border-gray-200 bg-white">
              {spec}
            </Badge>
          ))}
        </div>

        <Button className="w-full group-hover:bg-primary-700 transition-colors" asChild>
          <Link href={`/${locale}/team/${member.id}`}>
            View Full Profile
          </Link>
        </Button>
      </div>
    </div>
  )
}
