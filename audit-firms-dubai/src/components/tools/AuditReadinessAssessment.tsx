'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Download,
  Mail,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// Question types and categories
type QuestionCategory =
  | 'financial-records'
  | 'compliance'
  | 'documentation'
  | 'team-preparedness'

interface Question {
  id: number
  category: QuestionCategory
  question: string
  options: {
    value: number
    label: string
    description?: string
  }[]
  weight: number // Importance weight for scoring
}

// 15 Assessment Questions
const QUESTIONS: Question[] = [
  // Financial Records Organization (5 questions, 33% weight)
  {
    id: 1,
    category: 'financial-records',
    question: 'How organized are your financial records and supporting documents?',
    weight: 8,
    options: [
      {
        value: 100,
        label: 'Fully organized',
        description: 'All documents filed, indexed, and easily retrievable',
      },
      {
        value: 65,
        label: 'Mostly organized',
        description: 'Most documents available, some searching required',
      },
      {
        value: 35,
        label: 'Partially organized',
        description: 'Documents exist but difficult to locate',
      },
      { value: 0, label: 'Not organized', description: 'Records scattered or incomplete' },
    ],
  },
  {
    id: 2,
    category: 'financial-records',
    question: 'Are your accounting books up to date and reconciled?',
    weight: 10,
    options: [
      {
        value: 100,
        label: 'Fully up to date',
        description: 'Current month reconciled, all accounts balanced',
      },
      {
        value: 70,
        label: 'Recent but not current',
        description: 'Within last 3 months, minor reconciliations pending',
      },
      {
        value: 40,
        label: 'Significantly behind',
        description: '3-6 months behind, major reconciliations needed',
      },
      {
        value: 0,
        label: 'Very outdated',
        description: 'More than 6 months behind or incomplete',
      },
    ],
  },
  {
    id: 3,
    category: 'financial-records',
    question: 'Do you maintain a complete fixed assets register with depreciation schedules?',
    weight: 6,
    options: [
      { value: 100, label: 'Yes, complete and updated', description: 'Full register with current depreciation' },
      { value: 60, label: 'Yes, but needs updating', description: 'Register exists but not current' },
      { value: 20, label: 'Partial or incomplete', description: 'Some assets tracked, many missing' },
      { value: 0, label: 'No register maintained', description: 'No systematic asset tracking' },
    ],
  },
  {
    id: 4,
    category: 'financial-records',
    question: 'How frequently are bank reconciliations completed?',
    weight: 7,
    options: [
      { value: 100, label: 'Monthly', description: 'All bank accounts reconciled every month' },
      { value: 70, label: 'Quarterly', description: 'Reconciled every 3 months' },
      { value: 30, label: 'Annually', description: 'Only reconciled at year-end' },
      { value: 0, label: 'Rarely or never', description: 'No regular reconciliation process' },
    ],
  },
  {
    id: 5,
    category: 'financial-records',
    question: 'Are all revenue transactions supported by proper documentation (invoices, receipts, contracts)?',
    weight: 9,
    options: [
      {
        value: 100,
        label: 'All transactions documented',
        description: 'Complete documentation for 100% of revenue',
      },
      {
        value: 70,
        label: 'Most transactions documented',
        description: 'Minor gaps in documentation',
      },
      {
        value: 35,
        label: 'Significant gaps',
        description: 'Many transactions lack proper support',
      },
      {
        value: 0,
        label: 'Poor documentation',
        description: 'Systematic documentation issues',
      },
    ],
  },

  // Compliance Status (3 questions, 20% weight)
  {
    id: 6,
    category: 'compliance',
    question: 'Are all statutory filings and registrations current (DED, trade license, tax registrations)?',
    weight: 10,
    options: [
      { value: 100, label: 'All current and up to date', description: 'No overdue filings' },
      { value: 60, label: 'Mostly current', description: 'Minor delays in non-critical filings' },
      { value: 20, label: 'Some overdue', description: 'Several filings pending' },
      { value: 0, label: 'Significantly overdue', description: 'Major compliance gaps' },
    ],
  },
  {
    id: 7,
    category: 'compliance',
    question: 'Do you have documented internal control policies and procedures?',
    weight: 6,
    options: [
      {
        value: 100,
        label: 'Comprehensive documented policies',
        description: 'Full policy manual, regularly updated',
      },
      { value: 65, label: 'Basic policies documented', description: 'Key policies exist' },
      { value: 30, label: 'Informal or undocumented', description: 'Procedures exist but not written' },
      { value: 0, label: 'No formal policies', description: 'No documented control framework' },
    ],
  },
  {
    id: 8,
    category: 'compliance',
    question: 'Are you compliant with industry-specific regulations (VAT, RERA, DFSA, etc.)?',
    weight: 8,
    options: [
      { value: 100, label: 'Fully compliant', description: 'All regulatory requirements met' },
      { value: 70, label: 'Mostly compliant', description: 'Minor compliance improvements needed' },
      {
        value: 35,
        label: 'Partial compliance',
        description: 'Significant compliance gaps identified',
      },
      { value: 0, label: 'Non-compliant', description: 'Major regulatory issues' },
    ],
  },

  // Documentation Completeness (4 questions, 27% weight)
  {
    id: 9,
    category: 'documentation',
    question: 'Are board meeting minutes and resolutions properly documented and filed?',
    weight: 5,
    options: [
      { value: 100, label: 'All meetings documented', description: 'Complete minutes and resolutions' },
      { value: 65, label: 'Most meetings documented', description: 'Recent meetings well-documented' },
      { value: 30, label: 'Incomplete documentation', description: 'Many meetings not recorded' },
      { value: 0, label: 'No formal minutes', description: 'No systematic documentation' },
    ],
  },
  {
    id: 10,
    category: 'documentation',
    question: 'Do you maintain complete contracts and agreements (vendors, customers, employees)?',
    weight: 7,
    options: [
      { value: 100, label: 'All contracts on file', description: 'Complete contract repository' },
      { value: 70, label: 'Major contracts on file', description: 'Key contracts maintained' },
      { value: 35, label: 'Many contracts missing', description: 'Incomplete contract records' },
      { value: 0, label: 'No contract repository', description: 'Contracts not systematically filed' },
    ],
  },
  {
    id: 11,
    category: 'documentation',
    question: 'Are employee records complete (contracts, visa documents, salary registers)?',
    weight: 6,
    options: [
      { value: 100, label: 'Complete for all employees', description: 'Full HR file for everyone' },
      { value: 70, label: 'Complete for most', description: 'Minor gaps in documentation' },
      { value: 30, label: 'Incomplete for many', description: 'Significant HR documentation gaps' },
      { value: 0, label: 'Poor employee records', description: 'Systematic HR documentation issues' },
    ],
  },
  {
    id: 12,
    category: 'documentation',
    question: 'Do you have documented evidence for major transactions and decisions?',
    weight: 8,
    options: [
      {
        value: 100,
        label: 'Comprehensive documentation',
        description: 'All major items well-documented',
      },
      { value: 65, label: 'Good documentation', description: 'Most major items documented' },
      { value: 30, label: 'Limited documentation', description: 'Gaps in major transaction support' },
      { value: 0, label: 'Poor documentation trail', description: 'Insufficient audit trail' },
    ],
  },

  // Team Preparedness (3 questions, 20% weight)
  {
    id: 13,
    category: 'team-preparedness',
    question: 'Does your finance team understand the audit process and requirements?',
    weight: 7,
    options: [
      {
        value: 100,
        label: 'Highly experienced',
        description: 'Team has managed multiple audits',
      },
      { value: 65, label: 'Some experience', description: 'Team has basic audit knowledge' },
      { value: 30, label: 'Limited experience', description: 'Team needs guidance' },
      { value: 0, label: 'No audit experience', description: 'Team unfamiliar with process' },
    ],
  },
  {
    id: 14,
    category: 'team-preparedness',
    question: 'Have you allocated dedicated resources and time for the audit?',
    weight: 6,
    options: [
      {
        value: 100,
        label: 'Dedicated resources assigned',
        description: 'Team and schedule allocated',
      },
      { value: 65, label: 'Resources identified', description: 'Planning in progress' },
      { value: 30, label: 'No specific allocation', description: 'Resources not yet identified' },
      { value: 0, label: 'No planning done', description: 'Audit not scheduled or resourced' },
    ],
  },
  {
    id: 15,
    category: 'team-preparedness',
    question: 'Is management committed to addressing audit findings and implementing recommendations?',
    weight: 7,
    options: [
      {
        value: 100,
        label: 'Strong commitment',
        description: 'Management actively supports improvements',
      },
      { value: 70, label: 'Moderate commitment', description: 'Management supportive' },
      { value: 35, label: 'Limited commitment', description: 'Management engagement unclear' },
      { value: 0, label: 'No clear commitment', description: 'Management not engaged' },
    ],
  },
]

// Calculate total weight for percentage calculations
const TOTAL_WEIGHT = QUESTIONS.reduce((sum, q) => sum + q.weight, 0)

// Category information for results display
const CATEGORY_INFO: Record<
  QuestionCategory,
  { label: string; icon: typeof FileText; weight: number }
> = {
  'financial-records': {
    label: 'Financial Record Organization',
    icon: FileText,
    weight: 33,
  },
  compliance: {
    label: 'Compliance Status',
    icon: CheckCircle2,
    weight: 20,
  },
  documentation: {
    label: 'Documentation Completeness',
    icon: FileText,
    weight: 27,
  },
  'team-preparedness': {
    label: 'Team Preparedness',
    icon: CheckCircle2,
    weight: 20,
  },
}

interface Answers {
  [key: number]: number
}

export function AuditReadinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalQuestions = QUESTIONS.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100
  const isAnswered = answers[QUESTIONS[currentQuestion].id] !== undefined

  const handleAnswer = (value: number) => {
    setAnswers({
      ...answers,
      [QUESTIONS[currentQuestion].id]: value,
    })
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = () => {
    setShowResults(true)
  }

  // Calculate overall score (0-100)
  const calculateScore = (): number => {
    let weightedSum = 0
    QUESTIONS.forEach((question) => {
      const answer = answers[question.id]
      if (answer !== undefined) {
        weightedSum += (answer / 100) * question.weight
      }
    })
    return Math.round((weightedSum / TOTAL_WEIGHT) * 100)
  }

  // Calculate category scores
  const calculateCategoryScores = (): Record<QuestionCategory, number> => {
    const categoryScores: Record<QuestionCategory, number> = {
      'financial-records': 0,
      compliance: 0,
      documentation: 0,
      'team-preparedness': 0,
    }

    const categoryWeights: Record<QuestionCategory, number> = {
      'financial-records': 0,
      compliance: 0,
      documentation: 0,
      'team-preparedness': 0,
    }

    QUESTIONS.forEach((question) => {
      const answer = answers[question.id]
      if (answer !== undefined) {
        categoryScores[question.category] += (answer / 100) * question.weight
        categoryWeights[question.category] += question.weight
      }
    })

    // Convert to percentage
    Object.keys(categoryScores).forEach((cat) => {
      const category = cat as QuestionCategory
      if (categoryWeights[category] > 0) {
        categoryScores[category] = Math.round(
          (categoryScores[category] / categoryWeights[category]) * 100
        )
      }
    })

    return categoryScores
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, send email with detailed report
    console.log('Sending detailed report to:', email)
    console.log('Score:', calculateScore())
    console.log('Category scores:', calculateCategoryScores())

    setIsSubmitting(false)
    setShowEmailForm(false)
    alert('Thank you! Your detailed audit readiness report has been sent to ' + email)
  }

  const score = showResults ? calculateScore() : 0
  const categoryScores = showResults ? calculateCategoryScores() : {}

  // Determine risk level and messaging
  const getRiskLevel = (score: number) => {
    if (score >= 71) {
      return {
        level: 'Low Risk',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircle2,
        message: 'Your company is well-prepared for an external audit!',
        description:
          'You have strong financial records, good compliance practices, and adequate documentation. Minor improvements may still be beneficial, but you should have a smooth audit process.',
      }
    } else if (score >= 41) {
      return {
        level: 'Medium Risk',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        icon: AlertTriangle,
        message: 'Your company needs some improvements before the audit.',
        description:
          'While you have basic systems in place, there are several areas that need attention. We recommend addressing the gaps identified in your category scores before the audit begins to avoid delays and additional costs.',
      }
    } else {
      return {
        level: 'High Risk',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: AlertCircle,
        message: 'Immediate preparation is needed before the audit.',
        description:
          'Your current state presents significant audit risks. We strongly recommend engaging with our team for comprehensive audit preparation support. Without proper preparation, you may face substantial delays, increased costs, and potential audit qualifications.',
      }
    }
  }

  const riskLevel = showResults ? getRiskLevel(score) : null

  if (showResults && riskLevel) {
    const RiskIcon = riskLevel.icon

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-4xl"
      >
        {/* Overall Score Card */}
        <Card className={`mb-8 border-2 ${riskLevel.borderColor}`}>
          <CardHeader className={riskLevel.bgColor}>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold">
                  Your Audit Readiness Score
                </CardTitle>
                <CardDescription className="mt-2 text-lg">
                  Based on 15-question comprehensive assessment
                </CardDescription>
              </div>
              <div className="text-center">
                <div className={`text-6xl font-bold ${riskLevel.color}`}>{score}</div>
                <div className="text-sm text-gray-600">out of 100</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <RiskIcon className={`h-8 w-8 ${riskLevel.color}`} />
              <div className="flex-1">
                <Badge className={`mb-2 ${riskLevel.color} ${riskLevel.bgColor}`}>
                  {riskLevel.level}
                </Badge>
                <h3 className="mb-2 text-xl font-bold">{riskLevel.message}</h3>
                <p className="text-gray-600">{riskLevel.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>
              Your performance across the four key audit readiness dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(categoryScores).map(([category, categoryScore]) => {
                const cat = category as QuestionCategory
                const CategoryIcon = CATEGORY_INFO[cat].icon
                const catRisk = getRiskLevel(categoryScore as number)

                return (
                  <div key={category}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CategoryIcon className="h-5 w-5 text-gray-600" />
                        <span className="font-medium">{CATEGORY_INFO[cat].label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-lg font-bold ${catRisk.color}`}>
                          {categoryScore as number}%
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {CATEGORY_INFO[cat].weight}% of total
                        </Badge>
                      </div>
                    </div>
                    <Progress value={categoryScore as number} className="h-2" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recommended Next Steps</CardTitle>
            <CardDescription>Based on your score, we recommend:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {score < 71 && (
                <>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Schedule a consultation</strong> with our audit team to review your
                      specific gaps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Download our audit preparation checklist</strong> to systematically
                      address each area
                    </span>
                  </li>
                </>
              )}
              {score < 41 && (
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-1 h-5 w-5 text-blue-600" />
                  <span>
                    <strong>Consider pre-audit advisory services</strong> to build missing systems
                    before the audit
                  </span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 h-5 w-5 text-blue-600" />
                <span>
                  <strong>Get a detailed PDF report</strong> with specific recommendations for each
                  category
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Email Form / CTA */}
        {!showEmailForm ? (
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">Get Your Detailed Report</h3>
                  <p className="text-gray-700">
                    Receive a comprehensive PDF report with specific recommendations, action items,
                    and timeline for each category.
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={() => setShowEmailForm(true)}
                  className="gap-2 whitespace-nowrap"
                >
                  <Download className="h-5 w-5" />
                  Download Free Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-600" />
                Get Your Detailed Report
              </CardTitle>
              <CardDescription>
                Enter your email to receive the comprehensive audit readiness report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" disabled={isSubmitting} className="flex-1">
                    {isSubmitting ? 'Sending...' : 'Send My Report'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowEmailForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
                <p className="text-xs text-gray-600">
                  We respect your privacy. Your email will only be used to send the report and
                  occasional audit insights. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Retake Assessment */}
        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => {
              setShowResults(false)
              setCurrentQuestion(0)
              setAnswers({})
              setShowEmailForm(false)
            }}
          >
            Retake Assessment
          </Button>
        </div>
      </motion.div>
    )
  }

  // Question Display
  const question = QUESTIONS[currentQuestion]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-3xl"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="outline" className="capitalize">
                  {CATEGORY_INFO[question.category].label}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[question.id]?.toString()}
                onValueChange={(value) => handleAnswer(parseInt(value))}
              >
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 rounded-lg border-2 p-4 transition-all ${
                        answers[question.id] === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer font-normal"
                      >
                        <div className="font-medium">{option.label}</div>
                        {option.description && (
                          <div className="mt-1 text-sm text-gray-600">{option.description}</div>
                        )}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button onClick={handleNext} disabled={!isAnswered} className="gap-2">
              {currentQuestion === totalQuestions - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Progress Summary */}
      <div className="mt-8 rounded-lg bg-gray-50 p-4">
        <div className="text-center text-sm text-gray-600">
          <strong>{Object.keys(answers).length}</strong> of <strong>{totalQuestions}</strong>{' '}
          questions answered
        </div>
      </div>
    </motion.div>
  )
}
