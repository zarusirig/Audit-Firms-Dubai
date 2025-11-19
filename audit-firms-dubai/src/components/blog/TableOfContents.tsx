'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { List } from 'lucide-react'

type Heading = {
  level: number
  text: string
  id: string
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function MobileTableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-3 text-blue-900">
          <List className="h-5 w-5 text-blue-600" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-3">
          {headings.map((heading, idx) => (
            <a
              key={idx}
              href={`#${heading.id}`}
              className={`block text-sm font-medium transition-colors hover:text-blue-700 ${
                heading.level === 3 ? 'pl-6 text-gray-600' : 'text-gray-800 font-semibold'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}

export function DesktopTableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null

  return (
    <div className="hidden lg:block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
        Table of Contents
      </h3>
      <nav className="space-y-3 max-h-[60vh] overflow-y-auto pr-3 custom-scrollbar">
        {headings.map((heading, idx) => (
          <a
            key={idx}
            href={`#${heading.id}`}
            className={`block text-sm font-medium transition-all duration-200 hover:text-blue-600 hover:translate-x-1 ${
              heading.level === 3
                ? 'pl-4 text-gray-600 border-l-2 border-gray-200 hover:border-blue-300'
                : 'text-gray-800 hover:text-blue-700'
            }`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}

