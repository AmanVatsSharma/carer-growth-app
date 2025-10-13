/**
 * CRM INTEGRATION PAGE (PREMIUM LOCKED)
 * 
 * Seamless integration with popular CRM platforms
 * Requires premium subscription from Vedpragya Bharat Pvt. Ltd.
 */

import { LockedFeature } from "@/components/dashboard/locked-feature"
import { IconPlugConnected } from "@tabler/icons-react"

export default function CRMIntegrationPage() {
  return (
    <LockedFeature
      featureName="CRM Integration"
      featureDescription="Connect your favorite CRM platform for seamless two-way data synchronization and workflow automation."
      icon={<IconPlugConnected className="h-10 w-10 text-white" />}
      benefits={[
        "Integration with Salesforce, HubSpot, Zoho, and more",
        "Real-time bidirectional data sync",
        "Automatic lead creation and updates",
        "Custom field mapping and data transformation",
        "Webhook support for instant notifications",
        "API access for custom integrations",
        "Zapier and Make.com integration",
        "Dedicated integration support and onboarding"
      ]}
    />
  )
}
