import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { serverLoaders } from '@/lib/content-loaders'
import type { TeamMember } from '@/types/content'
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

  const allMembers = await serverLoaders.getAllTeamMembers()
  const partners = allMembers.filter(m => m.role === 'partner')
  const directors = allMembers.filter(m => m.role === 'director')
  const managers = allMembers.filter(m => m.role === 'manager')
  const seniors = allMembers.filter(m => m.role === 'senior')
  const specialists = allMembers.filter(m => m.role === 'specialist')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Users className="mr-1 h-3 w-3" />
              22 Expert Professionals
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Meet Our Expert Team
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Our team of Ministry-approved auditors, tax consultants, and advisory
              professionals brings together decades of combined experience across all major
              industries in the UAE. We are committed to delivering exceptional service and
              building long-term relationships with our clients.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">37+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">28,000+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">12+</div>
                <div className="text-sm text-gray-600">Languages</div>
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
        className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md"
      >
        <div className="aspect-square overflow-hidden bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-1 font-bold text-gray-900">{member.name}</h3>
          <p className="mb-3 text-sm text-primary">{member.title}</p>
          <div className="mb-3 flex flex-wrap gap-1">
            {member.specializations.slice(0, 2).map((spec) => (
              <Badge key={spec} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-gray-500">{member.experience}</p>
        </div>
      </Link>
    )
  }

  return (
    <div
      className={`group overflow-hidden rounded-lg border ${
        featured ? 'border-primary/30 shadow-lg' : 'border-gray-200'
      } bg-white transition-all hover:shadow-xl`}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="mb-3 text-sm font-medium text-primary">{member.title}</p>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">{member.bio}</p>

        <div className="mb-4 space-y-2">
          <div className="text-xs text-gray-500">
            <span className="font-semibold">Experience:</span> {member.experience}
          </div>
          {member.qualifications.length > 0 && (
            <div className="text-xs text-gray-500">
              <span className="font-semibold">Qualifications:</span>{' '}
              {member.qualifications.join(', ')}
            </div>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-1">
          {member.specializations.slice(0, 3).map((spec) => (
            <Badge key={spec} variant="secondary" className="text-xs">
              {spec}
            </Badge>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/${locale}/team/${member.id}`}>
            View Profile
          </Link>
        </Button>
      </div>
    </div>
  )
}
