/**
 * ANALYTICS PAGE (PREMIUM LOCKED)
 * 
 * Advanced analytics and insights dashboard
 * Requires premium subscription from Vedpragya Bharat Pvt. Ltd.
 */

import { LockedFeature } from "@/components/dashboard/locked-feature"
import { IconChartBar } from "@tabler/icons-react"

export default function AnalyticsPage() {
  return (
    <LockedFeature
      featureName="Advanced Analytics"
      featureDescription="Gain deep insights into your lead conversion pipeline, user behavior, and business performance with powerful analytics tools."
      icon={<IconChartBar className="h-10 w-10 text-white" />}
      benefits={[
        "Real-time conversion tracking and funnel analysis",
        "Interactive charts and visualizations",
        "Lead source attribution and ROI tracking",
        "Custom date ranges and comparison tools",
        "Predictive analytics powered by machine learning",
        "Exportable reports in multiple formats (PDF, Excel, CSV)",
        "Email performance metrics and campaign analytics",
        "Geographic distribution and demographic insights"
      ]}
    />
  )
}
