/**
 * AI ASSISTANT PAGE (PREMIUM LOCKED)
 * 
 * AI-powered virtual assistant for lead management
 * Requires premium subscription from Vedpragya Bharat Pvt. Ltd.
 */

import { LockedFeature } from "@/components/dashboard/locked-feature"
import { IconRobot } from "@tabler/icons-react"

export default function AIAssistantPage() {
  return (
    <LockedFeature
      featureName="AI Assistant"
      featureDescription="Leverage artificial intelligence to automate lead qualification, response generation, and intelligent recommendations."
      icon={<IconRobot className="h-10 w-10 text-white" />}
      benefits={[
        "Automatic lead scoring and qualification",
        "AI-generated personalized email responses",
        "Intelligent lead routing and assignment",
        "Natural language chatbot for lead engagement",
        "Sentiment analysis on lead communications",
        "Predictive next-best-action recommendations",
        "Automated data enrichment and lead research",
        "Voice-to-text transcription for call notes"
      ]}
    />
  )
}
