/**
 * HEAVY LEADS MANAGEMENT PAGE
 * 
 * Manages detailed journey form submissions with comprehensive user data
 * 
 * Features:
 * - Real-time statistics by country and study level
 * - Advanced filtering and search
 * - Status progression tracking
 * - Export and batch operations
 * - Detailed lead profiles
 * 
 * Design Pattern: Card-Based Dashboard Layout with Status Indicators
 */

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { HeavyLeadsTable } from "@/components/dashboard/heavy-leads/heavy-leads-table"
import { prisma } from "@/lib/prisma"
import { UserCheck, Globe, GraduationCap, Star } from "lucide-react"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

/**
 * Fetches heavy lead statistics with error handling
 */
async function getHeavyLeadStats() {
  console.log('[Heavy Leads Page] Fetching heavy lead statistics...')
  
  try {
    const [
      totalHeavyLeads,
      newLeadsToday,
      qualifiedLeads,
      convertedLeads
    ] = await Promise.all([
      prisma.heavyLead.count(),
      prisma.heavyLead.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.heavyLead.count({
        where: { status: 'QUALIFIED' }
      }),
      prisma.heavyLead.count({
        where: { status: 'CONVERTED' }
      })
    ])

    console.log('[Heavy Leads Page] Statistics fetched successfully:', {
      totalHeavyLeads, newLeadsToday, qualifiedLeads, convertedLeads
    })

    return { totalHeavyLeads, newLeadsToday, qualifiedLeads, convertedLeads }
    
  } catch (error) {
    console.error('[Heavy Leads Page] ERROR: Failed to fetch statistics', error)
    return { totalHeavyLeads: 0, newLeadsToday: 0, qualifiedLeads: 0, convertedLeads: 0 }
  }
}

function HeavyLeadsTableSkeleton() {
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

async function HeavyLeadsContent() {
  const stats = await getHeavyLeadStats()

  return (
    <>
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {/* Total Heavy Leads */}
        <Card className="metric-card hover:border-purple-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Heavy Leads</CardTitle>
            <UserCheck className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.totalHeavyLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time submissions
            </p>
          </CardContent>
        </Card>

        {/* Today's Leads */}
        <Card className="metric-card hover:border-cyan-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <Globe className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">+{stats.newLeadsToday}</div>
            <p className="text-xs text-muted-foreground mt-1">
              New leads today
            </p>
          </CardContent>
        </Card>

        {/* Qualified */}
        <Card className="metric-card hover:border-blue-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified</CardTitle>
            <GraduationCap className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.qualifiedLeads}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Quality prospects
            </p>
          </CardContent>
        </Card>

        {/* Converted */}
        <Card className="metric-card hover:border-green-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Converted</CardTitle>
            <Star className="h-4 w-4 text-green-500" />
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
          <CardTitle className="gradient-text">All Heavy Leads</CardTitle>
          <CardDescription>View and manage leads with complete profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<HeavyLeadsTableSkeleton />}>
            <HeavyLeadsTable />
          </Suspense>
        </CardContent>
      </Card>
    </>
  )
}

export default function HeavyLeadsPage() {
  console.log('[Heavy Leads Page] Rendering heavy leads page...')

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight gradient-text mb-2">
            Heavy Lead Management
          </h1>
          <p className="text-muted-foreground">
            Manage detailed leads from the journey form with complete information
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
          <HeavyLeadsContent />
        </Suspense>
      </div>
    </div>
  )
}
