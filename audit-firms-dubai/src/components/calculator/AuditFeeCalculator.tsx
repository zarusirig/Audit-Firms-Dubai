'use client'

/**
 * Main Audit Fee Calculator Component
 * Orchestrates form, calculation, and results display
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CalculatorForm } from './CalculatorForm'
import { PriceDisplay } from './PriceDisplay'
import { calculateAuditFee, generateShareParams, parseShareParams } from './CalculatorLogic'
import type { CalculatorInputs, CalculatorResult, SavedCalculation } from './types'

interface AuditFeeCalculatorProps {
  /** Initial data from URL params for sharing */
  initialData?: Partial<CalculatorInputs>
}

export function AuditFeeCalculator({ initialData }: AuditFeeCalculatorProps) {
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [lastInputs, setLastInputs] = useState<CalculatorInputs | null>(null)

  // Handle calculation
  const handleCalculate = async (inputs: CalculatorInputs) => {
    setIsCalculating(true)

    // Simulate calculation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    try {
      const calculationResult = calculateAuditFee(inputs)
      setResult(calculationResult)
      setLastInputs(inputs)

      // Save to localStorage
      saveCalculation(inputs, calculationResult)

      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('calculator-results')
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } catch (error) {
      console.error('Calculation error:', error)
      // Handle error (show toast/alert)
    } finally {
      setIsCalculating(false)
    }
  }

  // Save calculation to localStorage
  const saveCalculation = (inputs: CalculatorInputs, result: CalculatorResult) => {
    try {
      const calculation: SavedCalculation = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        inputs,
        result,
        shareUrl: generateShareUrl(inputs),
      }

      const saved = JSON.parse(localStorage.getItem('calculator-history') || '[]')
      const updated = [calculation, ...saved].slice(0, 10) // Keep last 10
      localStorage.setItem('calculator-history', JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to save calculation:', error)
    }
  }

  // Generate shareable URL
  const generateShareUrl = (inputs: CalculatorInputs): string => {
    if (typeof window === 'undefined') return ''

    const params = generateShareParams(inputs)
    const baseUrl = window.location.origin + window.location.pathname
    return `${baseUrl}?${params.toString()}`
  }

  // Handle share
  const handleShare = async () => {
    if (!lastInputs) return

    const shareUrl = generateShareUrl(lastInputs)

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Audit Fee Estimate - Farahat & Co',
          text: `My audit fee estimate: ${result?.priceRange.min} - ${result?.priceRange.max} AED`,
          url: shareUrl,
        })
      } catch (error) {
        // Fallback to copy to clipboard
        copyToClipboard(shareUrl)
      }
    } else {
      copyToClipboard(shareUrl)
    }
  }

  // Copy to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // Show success toast (implement toast notification)
      alert('Link copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  // Handle download PDF (placeholder for now)
  const handleDownload = () => {
    // TODO: Implement PDF generation
    alert('PDF download feature coming soon! For now, you can print this page (Ctrl/Cmd + P)')
    window.print()
  }

  // Handle request quote
  const handleRequestQuote = () => {
    // Scroll to contact form or open modal
    const contactSection = document.getElementById('request-quote-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Reset calculator
  const handleReset = () => {
    setResult(null)
    setLastInputs(null)
    localStorage.removeItem('calculator-draft')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Calculate Your Audit Fee</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get an instant estimate of your audit costs in just 3 simple steps. Our calculator
                considers all relevant factors to provide you with an accurate price range.
              </p>
            </div>

            <CalculatorForm
              onCalculate={handleCalculate}
              initialData={initialData}
              isLoading={isCalculating}
            />
          </motion.div>
        ) : (
          <motion.div
            key="results"
            id="calculator-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Results</h2>
              <Button onClick={handleReset} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Start Over
              </Button>
            </div>

            <PriceDisplay
              result={result}
              onRequestQuote={handleRequestQuote}
              onShare={handleShare}
              onDownload={handleDownload}
            />

            {/* Recalculate Button */}
            <div className="mt-8 text-center">
              <Button onClick={handleReset} variant="outline" size="lg">
                <RotateCcw className="h-4 w-4 mr-2" />
                Calculate Again
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
