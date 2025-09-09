//components/universities/ipd-support-banner.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function IPDSupportBanner() {
  const items = [
    { label: "Visa Guidance", key: "visa" },
    { label: "Accommodation Support", key: "accommodation" },
    { label: "Forex at Lowest Charges", key: "forex" },
    { label: "Application Counselling", key: "counselling" },
    { label: "Scholarships Help", key: "scholarships" },
    { label: "Many Services Free", key: "free" },
  ]
  return (
    <Card className="bg-muted">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">IPD Education Support:</span>
          {items.map((i) => (
            <Badge key={i.key} className="bg-accent text-accent-foreground">
              {i.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
