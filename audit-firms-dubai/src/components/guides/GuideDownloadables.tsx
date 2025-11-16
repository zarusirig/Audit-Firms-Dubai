import { Download, FileText, Sheet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Downloadable {
  title: string
  description: string
  format: string
}

interface GuideDownloadablesProps {
  downloadables: Downloadable[]
}

export function GuideDownloadables({ downloadables }: GuideDownloadablesProps) {
  const getIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'excel':
        return Sheet
      case 'pdf':
      default:
        return FileText
    }
  }

  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Downloadable Resources
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {downloadables.map((download, index) => {
          const Icon = getIcon(download.format)
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-lg">{download.title}</CardTitle>
                <CardDescription>{download.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download {download.format}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
