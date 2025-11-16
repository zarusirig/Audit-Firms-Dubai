'use client'

import { useState } from 'react'
import { ChevronRight, List } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TOCItem {
  id: string
  title: string
  subsections?: { id: string; title: string }[]
}

interface GuideTOCProps {
  items: TOCItem[]
}

export function GuideTOC({ items }: GuideTOCProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Card className="sticky top-24 mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <List className="h-5 w-5" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {items.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  scrollToSection(item.id)
                  setExpandedSection(expandedSection === item.id ? null : item.id)
                }}
                className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <span className="font-medium text-gray-700 group-hover:text-primary-600">
                  {item.title}
                </span>
                {item.subsections && (
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 transition-transform ${
                      expandedSection === item.id ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>

              {item.subsections && expandedSection === item.id && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subsections.map((subsection) => (
                    <button
                      key={subsection.id}
                      onClick={() => scrollToSection(subsection.id)}
                      className="block w-full text-left py-1.5 px-3 rounded text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
