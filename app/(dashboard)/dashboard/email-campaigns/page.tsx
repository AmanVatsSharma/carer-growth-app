/**
 * EMAIL CAMPAIGNS PAGE (PREMIUM LOCKED)
 * 
 * Automated email marketing and drip campaigns
 * Requires premium subscription from Vedpragya Bharat Pvt. Ltd.
 */

import { LockedFeature } from "@/components/dashboard/locked-feature"
import { IconMail } from "@tabler/icons-react"

export default function EmailCampaignsPage() {
  return (
    <LockedFeature
      featureName="Email Campaigns"
      featureDescription="Create, automate, and track powerful email marketing campaigns to nurture leads and boost conversions."
      icon={<IconMail className="h-10 w-10 text-white" />}
      benefits={[
        "Drag-and-drop email template builder",
        "Automated drip campaign sequences",
        "Personalized email content with dynamic fields",
        "A/B testing for subject lines and content",
        "Advanced segmentation and targeting",
        "Real-time open rates and click tracking",
        "Automated follow-ups based on user behavior",
        "Integration with popular email service providers"
      ]}
    />
  )
}
