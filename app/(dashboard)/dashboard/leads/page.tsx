/**
 * LEADS MANAGEMENT PAGE
 * 
 * Manages quick contact form submissions with modern futuristic UI
 * 
 * Features:
 * - Real-time lead statistics
 * - Interactive data table
 * - Status management
 * - Quick filters and search
 * - Export capabilities
 * 
 * Design Pattern: Card-Based Dashboard Layout with Status Indicators
 */

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { LeadsTable } from "@/components/dashboard/leads/leads-table"
import { prisma } from "@/lib/prisma"
import { Users, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

/**
 * Fetches lead statistics with error handling
 */
async function getLeadStats() {
  console.log('[Leads Page] Fetching lead statistics...')
  
  try {
    const [
      totalLeads,
      newLeadsToday,
      contactedLeads,
      convertedLeads
    ] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.lead.count({
        where: { contacted: true }
      }),
      prisma.lead.count({
        where: { status: 'CONVERTED' }
      })
    ])

    console.log('[Leads Page] Statistics fetched successfully:', {
      totalLeads, newLeadsToday, contactedLeads, convertedLeads
    })

    return { totalLeads, newLeadsToday, contactedLeads, convertedLeads }
    
  } catch (error) {
    console.error('[Leads Page] ERROR: Failed to fetch statistics', error)
    return { totalLeads: 0, newLeadsToday: 0, contactedLeads: 0, convertedLeads: 0 }
  }
}

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

async function LeadsContent() {
  const stats = await getLeadStats()

  return (
    <>
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {/* Total Leads */}
        <Card className="metric-card hover:border-cyan-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.totalLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time submissions
            </p>
          </CardContent>
        </Card>

        {/* Today's Leads */}
        <Card className="metric-card hover:border-blue-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">+{stats.newLeadsToday}</div>
            <p className="text-xs text-muted-foreground mt-1">
              New leads today
            </p>
          </CardContent>
        </Card>

        {/* Contacted */}
        <Card className="metric-card hover:border-purple-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contacted</CardTitle>
            <Clock className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.contactedLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Reached out
            </p>
          </CardContent>
        </Card>

        {/* Converted */}
        <Card className="metric-card hover:border-green-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Converted</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.convertedLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Successfully converted
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Data Table */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="gradient-text">All Leads</CardTitle>
          <CardDescription>View, manage, and track the status of all incoming leads</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<LeadsTableSkeleton />}>
            <LeadsTable />
          </Suspense>
        </CardContent>
      </Card>
    </>
  )
}

export default function AdminLeadsPage() {
  console.log('[Leads Page] Rendering leads page...')

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight gradient-text mb-2">
            Lead Management
          </h1>
          <p className="text-muted-foreground">
            Manage and track all leads received from your website
          </p>
        </div>

        {/* Content with Loading State */}
        <Suspense fallback={
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
            <Skeleton className="h-96 w-full" />
          </div>
        }>
          <LeadsContent />
        </Suspense>
      </div>
    </div>
  )
}
