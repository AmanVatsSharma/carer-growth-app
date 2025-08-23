"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { COUNTRIES, INTAKE_TIMELINES, STUDY_LEVELS, EDUCATION_LEVELS, PASSPORT_STATUS } from "@/lib/types"
import type { LeadFormData } from "@/lib/types"
import confetti from "canvas-confetti"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const TOTAL_STEPS = 7

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [formData, setFormData] = useState<Partial<LeadFormData>>({})

  const progress = (currentStep / TOTAL_STEPS) * 100

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/heavyleads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        setIsComplete(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setCurrentStep(1)
    setFormData({})
    setIsComplete(false)
    onClose()
  }

  const updateFormData = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.preferredCountry
      case 2:
        return !!formData.intakeTimeline
      case 3:
        return !!formData.studyLevel
      case 4:
        return !!formData.currentEducation
      case 5:
        return !!formData.passportStatus
      case 6:
        return !!formData.currentCity
      case 7:
        return !!formData.name
      default:
        return false
    }
  }

  if (isComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md mx-4 rounded-xl">
          <div className="text-center py-6 sm:py-8">
            <div className="mb-6">
              <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Perfect!</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                We are creating your profile and will reach out to you shortly with personalized guidance for your study
                abroad journey.
              </p>
            </div>
            <Button onClick={handleClose} className="w-full min-h-[48px] touch-manipulation">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] mx-4 rounded-xl overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-4">
          <DialogTitle className="text-center text-lg sm:text-xl">Start Your Journey</DialogTitle>
          <div className="mt-4">
            <Progress value={progress} className="w-full h-2" />
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
              Step {currentStep} of {TOTAL_STEPS}
            </p>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-2 sm:py-6 px-1">
          {/* Step 1: Country Selection */}
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Which country do you want to study in?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Select your preferred destination</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {COUNTRIES.map((country) => (
                  <Button
                    key={country.code}
                    variant={formData.preferredCountry === country.name ? "default" : "outline"}
                    className="h-auto p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 min-h-[72px] sm:min-h-[80px] touch-manipulation"
                    onClick={() => updateFormData("preferredCountry", country.name)}
                  >
                    <span className="text-xl sm:text-2xl">{country.flag}</span>
                    <span className="text-xs sm:text-sm font-medium text-center leading-tight">{country.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Intake Timeline */}
          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">When are you planning to start?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Select your preferred intake</p>
              </div>
              <RadioGroup
                value={formData.intakeTimeline}
                onValueChange={(value) => updateFormData("intakeTimeline", value)}
                className="space-y-2 sm:space-y-3"
              >
                {INTAKE_TIMELINES.map((timeline) => (
                  <div
                    key={timeline}
                    className="flex items-center space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 min-h-[56px] touch-manipulation"
                  >
                    <RadioGroupItem value={timeline} id={timeline} className="flex-shrink-0" />
                    <Label htmlFor={timeline} className="flex-1 cursor-pointer text-sm sm:text-base">
                      {timeline}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Study Level */}
          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">What do you want to pursue?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Select your study level</p>
              </div>
              <RadioGroup
                value={formData.studyLevel}
                onValueChange={(value) => updateFormData("studyLevel", value)}
                className="space-y-2 sm:space-y-3"
              >
                {STUDY_LEVELS.map((level) => (
                  <div
                    key={level}
                    className="flex items-center space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 min-h-[56px] touch-manipulation"
                  >
                    <RadioGroupItem value={level} id={level} className="flex-shrink-0" />
                    <Label htmlFor={level} className="flex-1 cursor-pointer text-sm sm:text-base">
                      {level}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Current Education */}
          {currentStep === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">What is your current education level?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Tell us about your academic background</p>
              </div>
              <RadioGroup
                value={formData.currentEducation}
                onValueChange={(value) => updateFormData("currentEducation", value)}
                className="space-y-2 sm:space-y-3"
              >
                {EDUCATION_LEVELS.map((level) => (
                  <div
                    key={level}
                    className="flex items-center space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 min-h-[56px] touch-manipulation"
                  >
                    <RadioGroupItem value={level} id={level} className="flex-shrink-0" />
                    <Label htmlFor={level} className="flex-1 cursor-pointer text-sm sm:text-base">
                      {level}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Passport Status */}
          {currentStep === 5 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">What is your passport status?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">This helps us plan your visa timeline</p>
              </div>
              <RadioGroup
                value={formData.passportStatus}
                onValueChange={(value) => updateFormData("passportStatus", value)}
                className="space-y-2 sm:space-y-3"
              >
                {PASSPORT_STATUS.map((status) => (
                  <div
                    key={status}
                    className="flex items-center space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 min-h-[56px] touch-manipulation"
                  >
                    <RadioGroupItem value={status} id={status} className="flex-shrink-0" />
                    <Label htmlFor={status} className="flex-1 cursor-pointer text-sm sm:text-base">
                      {status}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 6: Current City */}
          {currentStep === 6 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">What is your current city?</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  This helps us connect you with local resources
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentCity" className="text-sm sm:text-base">
                    Current City
                  </Label>
                  <Input
                    id="currentCity"
                    value={formData.currentCity || ""}
                    onChange={(e) => updateFormData("currentCity", e.target.value)}
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    className="mt-2 min-h-[48px] text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Personal Details */}
          {currentStep === 7 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Tell us about yourself</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We need these details to create your profile
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Your full name"
                    className="mt-2 min-h-[48px] text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-2 min-h-[48px] text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone || ""}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="+91 9876543210"
                    className="mt-2 min-h-[48px] text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="aboutYourself" className="text-sm sm:text-base">
                    Tell us about yourself (Optional)
                  </Label>
                  <Textarea
                    id="aboutYourself"
                    value={formData.aboutYourself || ""}
                    onChange={(e) => updateFormData("aboutYourself", e.target.value)}
                    placeholder="Share your goals, interests, or any specific requirements..."
                    className="mt-2 min-h-[96px] text-base resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex justify-between pt-4 sm:pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 bg-transparent min-h-[48px] touch-manipulation"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Back</span>
          </Button>

          {currentStep === TOTAL_STEPS ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="flex items-center gap-2 min-h-[48px] touch-manipulation"
            >
              {isSubmitting ? "Submitting..." : "Complete"}
              <Sparkles className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 min-h-[48px] touch-manipulation"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
