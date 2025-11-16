'use client'

/**
 * Price Display Component
 * Beautiful presentation of audit fee calculation results
 */

import { motion } from 'framer-motion'
import {
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Share2,
  Mail,
  Phone,
  TrendingUp,
  PieChart,
  Info,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import type { CalculatorResult } from './types'
import { formatCurrency } from './CalculatorLogic'

interface PriceDisplayProps {
  result: CalculatorResult
  onRequestQuote?: () => void
  onShare?: () => void
  onDownload?: () => void
}

export function PriceDisplay({ result, onRequestQuote, onShare, onDownload }: PriceDisplayProps) {
  const { priceRange, breakdown, timelineEstimate, whatsIncluded, confidenceLevel, recommendations } =
    result

  // Confidence level badge styling
  const confidenceBadge = {
    estimate: { variant: 'secondary' as const, label: 'Estimate Range', icon: Info },
    accurate: { variant: 'default' as const, label: 'Accurate Estimate', icon: TrendingUp },
    exact: { variant: 'default' as const, label: 'Precise Quote', icon: CheckCircle2 },
  }

  const confidence = confidenceBadge[confidenceLevel]

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Price Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2 border-primary shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-2">
              <Badge variant={confidence.variant} className="text-sm px-4 py-1">
                <confidence.icon className="h-3 w-3 mr-1" />
                {confidence.label}
              </Badge>
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold">Your Audit Fee Estimate</CardTitle>
            <CardDescription className="text-base mt-2">
              Based on the information you provided
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Price Range */}
            <div className="text-center py-8 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-8 w-8 text-primary" />
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Total estimated fee including VAT
              </p>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-center gap-4 py-4 border-y">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">{timelineEstimate.weeks} weeks</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <p className="text-sm text-muted-foreground max-w-md">
                {timelineEstimate.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid sm:grid-cols-3 gap-3">
              <Button
                onClick={onRequestQuote}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                size="lg"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get Exact Quote
              </Button>
              <Button onClick={onShare} variant="outline" size="lg">
                <Share2 className="h-4 w-4 mr-2" />
                Share Results
              </Button>
              <Button onClick={onDownload} variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Price Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Detailed Price Breakdown
            </CardTitle>
            <CardDescription>How we calculated your audit fee</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Base Audit Fee</span>
              <span className="font-semibold">{formatCurrency(breakdown.basePrice)}</span>
            </div>

            {breakdown.locationFees > 0 && (
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Multi-Location Fee</span>
                <span className="font-semibold">{formatCurrency(breakdown.locationFees)}</span>
              </div>
            )}

            {breakdown.firstTimeAuditFee > 0 && (
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">First-Time Audit Premium</span>
                <span className="font-semibold">{formatCurrency(breakdown.firstTimeAuditFee)}</span>
              </div>
            )}

            {breakdown.complexityFees > 0 && (
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Complexity Adjustments</span>
                <span className="font-semibold">{formatCurrency(breakdown.complexityFees)}</span>
              </div>
            )}

            {breakdown.urgencyFee > 0 && (
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Express Service Fee</span>
                <span className="font-semibold">{formatCurrency(breakdown.urgencyFee)}</span>
              </div>
            )}

            <Separator className="my-2" />

            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Subtotal (before VAT)</span>
              <span className="font-semibold">{formatCurrency(breakdown.subtotal)}</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">VAT (5%)</span>
              <span className="font-semibold">{formatCurrency(breakdown.vatAmount)}</span>
            </div>

            <Separator className="my-2" />

            <div className="flex justify-between items-center py-3 bg-primary/5 px-4 rounded-lg">
              <span className="font-bold text-lg">Total Estimate</span>
              <span className="font-bold text-xl text-primary">
                {formatCurrency(breakdown.totalEstimate)}
              </span>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              * Industry multiplier: {(breakdown.industryMultiplier * 100).toFixed(0)}%
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* What's Included */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              What's Included
            </CardTitle>
            <CardDescription>
              Your comprehensive audit package includes the following services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatsIncluded.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important Recommendations</AlertTitle>
            <AlertDescription className="mt-2">
              <ul className="space-y-2 list-disc list-inside">
                {recommendations.map((rec, index) => (
                  <li key={index} className="text-sm">
                    {rec}
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* FAQ About Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this price final?</AccordionTrigger>
                <AccordionContent>
                  This is an estimated price range based on the information you provided. The final price
                  may vary depending on factors discovered during our initial assessment. Request an exact
                  quote for a firm fixed price.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What payment terms do you offer?</AccordionTrigger>
                <AccordionContent>
                  We typically offer flexible payment terms: 50% upon engagement, 25% at fieldwork
                  completion, and 25% upon delivery of the final audit report. Custom payment plans are
                  available for larger engagements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How long is this quote valid?</AccordionTrigger>
                <AccordionContent>
                  This estimate is valid for 30 days from today. Prices may change based on regulatory
                  updates or changes to your company's circumstances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I reduce the cost?</AccordionTrigger>
                <AccordionContent>
                  Yes! Costs can be reduced by: (1) Providing well-organized financial records, (2) Having
                  strong internal controls, (3) Booking during off-peak periods, and (4) Opting for
                  standard vs. express service. Contact us for cost optimization advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What's the next step?</AccordionTrigger>
                <AccordionContent>
                  Click "Get Exact Quote" to request a detailed proposal. Our audit specialists will review
                  your requirements and provide a customized quote within 24 hours, along with a proposed
                  engagement timeline.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground">
                Speak with our audit specialists today for a personalized consultation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="min-w-[160px]">
                <a href="tel:+97142500251">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={onRequestQuote} className="min-w-[160px]">
                <Mail className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
