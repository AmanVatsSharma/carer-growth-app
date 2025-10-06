import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AnnouncementsTable } from "@/components/dashboard/announcements/announcements-table"

function AnnouncementsTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    </div>
  )
}

export default function AnnouncementsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Announcements Management</h1>
        <p className="text-muted-foreground mt-2">Create and manage announcements for your website</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Announcements</CardTitle>
          <CardDescription>Add, edit, or remove announcements that appear on your site</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<AnnouncementsTableSkeleton />}>
            <AnnouncementsTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
