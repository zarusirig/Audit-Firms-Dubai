import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { SITE_CONFIG } from '@/lib/constants'
import { serverLoaders } from '@/lib/content-loaders'
import type { TeamMember } from '@/types/content'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Mail,
  Linkedin,
  Award,
  Briefcase,
  Globe,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react'

export async function generateStaticParams() {
  const teamMembers = await serverLoaders.getAllTeamMembers()
  const params: { locale: string; slug: string }[] = []

  i18n.locales.forEach((locale) => {
    teamMembers.forEach((member) => {
      params.push({
        locale,
        slug: member.id,
      })
    })
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const slug = resolvedParams.slug

  const member = await serverLoaders.getTeamMemberById(slug)

  if (!member) {
    return {
      title: 'Team Member Not Found',
    }
  }

  return {
    title: `${member.name} - ${member.title} | Farahat & Co`,
    description: member.bio,
    keywords: [
      member.name,
      member.title,
      ...member.specializations,
      'audit professional dubai',
      'tax consultant uae',
      'farahat team',
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/${locale}/team/${slug}`,
      languages: {
        en: `${SITE_CONFIG.url}/en/team/${slug}`,
        ar: `${SITE_CONFIG.url}/ar/team/${slug}`,
      },
    },
    openGraph: {
      title: `${member.name} - ${member.title}`,
      description: member.bio,
      images: [
        {
          url: member.image,
          width: 600,
          height: 600,
          alt: member.name,
        },
      ],
    },
  }
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const slug = resolvedParams.slug

  const member = await serverLoaders.getTeamMemberById(slug)

  if (!member) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'Team', href: `/${locale}/team` },
    { label: member.name, href: `/${locale}/team/${slug}` },
  ]

  // Get related team members from same department
  const relatedMembers = serverLoaders.getAllTeamMembers()
    .filter((m) => m.department === member.department && m.id !== member.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Profile Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/${locale}/team`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Profile Image & Quick Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="mb-2 text-2xl font-bold text-gray-900">
                      {member.name}
                    </h1>
                    <p className="mb-4 text-lg font-medium text-primary">
                      {member.title}
                    </p>

                    <div className="space-y-3 border-t border-gray-200 pt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="mr-2 h-4 w-4 text-gray-400" />
                        <span className="font-semibold">Experience:</span>
                        <span className="ml-2">{member.experience}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="mr-2 h-4 w-4 text-gray-400" />
                        <span className="font-semibold">Languages:</span>
                        <span className="ml-2">{member.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="mr-2 h-4 w-4 text-gray-400" />
                        <span className="font-semibold">Department:</span>
                        <span className="ml-2 capitalize">{member.department}</span>
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="mt-6 space-y-3">
                      <Button className="w-full" asChild>
                        <Link href={`/${locale}/contact`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Get in Touch
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Biography */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">About</h2>
                <p className="text-lg leading-relaxed text-gray-700">{member.bio}</p>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Areas of Expertise
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {member.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications & Credentials */}
              {member.qualifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Qualifications & Credentials
                  </h2>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <ul className="space-y-3">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-gray-700">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Professional Background */}
              <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Professional Background
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-600">
                      Role Level
                    </div>
                    <div className="text-base text-gray-900 capitalize">
                      {member.role}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600">
                      Department
                    </div>
                    <div className="text-base text-gray-900 capitalize">
                      {member.department}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600">
                      Years of Experience
                    </div>
                    <div className="text-base text-gray-900">{member.experience}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600">
                      Languages
                    </div>
                    <div className="text-base text-gray-900">
                      {member.languages.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Team Members */}
      {relatedMembers.length > 0 && (
        <section className="border-t border-gray-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                Other {member.department.charAt(0).toUpperCase() + member.department.slice(1)} Professionals
              </h2>
              <p className="text-gray-600">
                Meet other members of our {member.department} team
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedMembers.map((relatedMember) => (
                <Link
                  key={relatedMember.id}
                  href={`/${locale}/team/${relatedMember.id}`}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={relatedMember.image}
                      alt={relatedMember.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-bold text-gray-900">
                      {relatedMember.name}
                    </h3>
                    <p className="mb-3 text-sm text-primary">
                      {relatedMember.title}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {relatedMember.specializations.slice(0, 2).map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href={`/${locale}/team`}>View All Team Members</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Work With {member.name.split(' ')[0]}
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get in touch to discuss how our expert team can support your business
              with professional audit, tax, and advisory services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/services`}>View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
