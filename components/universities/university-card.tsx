// components/universities/university-card.tsx
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { University } from "@/lib/universities-data" // Ensure this type includes the new fields
import { MapPin, DollarSign, Award } from "lucide-react"

export function UniversityCard({ u }: { u: University }) {
  const tuitionRange =
    u.tuitionFeeFrom && u.tuitionFeeTo
      ? `$${(u.tuitionFeeFrom / 1000).toFixed(0)}k - $${(u.tuitionFeeTo / 1000).toFixed(0)}k / year`
      : "Tuition not specified"

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/10">
      <div className="relative">
        <img
          src={u.heroImageUrl || "/placeholder.svg?height=200&width=400&query=campus"}
          alt={`${u.name} campus`}
          className="h-40 w-full object-cover"
        />
        <div className="absolute bottom-2 right-2 flex items-center rounded-full bg-background/80 p-1 backdrop-blur-sm">
          <img
            src={u.logoUrl || "/placeholder.svg?height=40&width=40&query=logo"}
            alt={`${u.name} logo`}
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">{u.name}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>
              {u.city ? `${u.city}, ` : ""}
              {u.country}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{u.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {u.qsRanking && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Award className="h-3 w-3" /> QS #{u.qsRanking}
              </Badge>
            )}
            <Badge variant="outline" className="flex items-center gap-1">
              <DollarSign className="h-3 w-3" /> {tuitionRange}
            </Badge>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between pt-4 border-t">
          <Link href={`/universities/${u.slug}`} passHref>
             <Button variant="link" className="p-0 h-auto">View Details</Button>
          </Link>
          <Link href={`/universities/${u.slug}#contact`} passHref>
            <Button size="sm">Enquire Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}