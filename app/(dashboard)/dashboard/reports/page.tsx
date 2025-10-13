/**
 * REPORTS PAGE (PREMIUM LOCKED)
 * 
 * Custom report builder and scheduled reporting
 * Requires premium subscription from Vedpragya Bharat Pvt. Ltd.
 */

import { LockedFeature } from "@/components/dashboard/locked-feature"
import { IconFileAnalytics } from "@tabler/icons-react"

export default function ReportsPage() {
  return (
    <LockedFeature
      featureName="Custom Reports"
      featureDescription="Build custom reports with advanced metrics, schedule automated delivery, and share insights with your team."
      icon={<IconFileAnalytics className="h-10 w-10 text-white" />}
      benefits={[
        "Custom report builder with 50+ metrics",
        "Scheduled email delivery (daily, weekly, monthly)",
        "White-label PDF reports with your branding",
        "Interactive dashboards for stakeholders",
        "Multi-user access with role-based permissions",
        "Export to Excel, CSV, PDF, and Google Sheets",
        "Historical data comparison and trend analysis",
        "Automated KPI alerts and notifications"
      ]}
    />
  )
}
