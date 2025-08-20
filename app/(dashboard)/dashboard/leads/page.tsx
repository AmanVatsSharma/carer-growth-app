import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { LeadsTable } from "@/components/dashboard/leads/leads-table"

function LeadsTableSkeleton() {
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

export default function AdminLeadsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Lead Management</h1>
        <p className="text-muted-foreground mt-2">Manage and track all leads received from your website</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
          <CardDescription>View, manage, and track the status of all incoming leads</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<LeadsTableSkeleton />}>
            <LeadsTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
