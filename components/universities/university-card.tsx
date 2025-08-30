import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { University } from "@/lib/universities-data"

export function UniversityCard({ u }: { u: University }) {
  return (
    <Card className="overflow-hidden bg-card">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={u.logoUrl || "/placeholder.svg?height=64&width=64&query=university%20logo"}
            alt={`${u.name} logo`}
            className="h-10 w-10 rounded"
          />
          <div>
            <CardTitle className="text-lg">{u.name}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {u.city ? `${u.city}, ` : ""}
              {u.country}
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-wrap gap-2">
          {(u.exams || []).slice(0, 3).map((e) => (
            <Badge key={e} variant="secondary">
              {e}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {u.shortDescription && <p className="text-sm text-muted-foreground">{u.shortDescription}</p>}
        <div className="flex flex-wrap gap-2">
          {(u.courses || []).slice(0, 3).map((c, idx) => (
            <Badge key={idx} className="bg-secondary text-secondary-foreground">
              {c.level}: {c.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link href={`/universities/${u.slug}`} className="text-primary hover:underline">
            View details
          </Link>
          <Link href={`/universities/${u.slug}#contact`}>
            <Button size="sm">Contact us</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
