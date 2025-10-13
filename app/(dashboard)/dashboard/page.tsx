/**
 * FUTURISTIC ADMIN DASHBOARD
 * 
 * Advanced dashboard with real-time system monitoring and analytics
 * 
 * Features:
 * - System health monitoring (DB, API, Website status)
 * - Real-time statistics and metrics
 * - Recent activity feeds
 * - Modern futuristic UI with tech aesthetics
 * - Comprehensive error handling and logging
 * 
 * Flow:
 * 1. Fetch system status and statistics in parallel
 * 2. Display system health indicators
 * 3. Show key metrics in modern cards
 * 4. Display recent activity feeds
 * 5. All with robust error handling
 */

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { prisma } from "@/lib/prisma"
import { Users, UserCheck, GraduationCap, TrendingUp, Clock, BarChart3, Zap } from "lucide-react"
import { SystemStatus, SystemOverview } from "@/components/dashboard/system-status"
import { getSystemStatus } from "./actions"

// Force dynamic rendering to avoid build-time DB queries
export const dynamic = 'force-dynamic'

/**
 * Fetches dashboard statistics with error handling
 * @returns Dashboard stats object with all metrics
 */
async function getStats() {
  console.log('[Dashboard] Fetching dashboard statistics...')
  
  try {
    // Fetch all stats in parallel for performance
    const [
      totalLeads,
      totalHeavyLeads,
      totalUniversities,
      newLeadsThisWeek,
      newLeadsToday,
    ] = await Promise.all([
      prisma.lead.count(),
      prisma.heavyLead.count(),
      prisma.university.count(),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
    ])

    console.log('[Dashboard] Statistics fetched:', {
      totalLeads,
      totalHeavyLeads,
      totalUniversities,
      newLeadsThisWeek,
      newLeadsToday
    })

    // Fetch recent leads
    const recentLeads = await prisma.lead.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    })

    const recentHeavyLeads = await prisma.heavyLead.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    })

    console.log(`[Dashboard] Fetched ${recentLeads.length} recent leads and ${recentHeavyLeads.length} recent heavy leads`)

    return {
      totalLeads,
      totalHeavyLeads,
      totalUniversities,
      newLeadsThisWeek,
      newLeadsToday,
      recentLeads,
      recentHeavyLeads,
    }
  } catch (error) {
    console.error("[Dashboard] ERROR: Failed to fetch statistics", error)
    console.error('[Dashboard] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
    })
    
    // Return zero values on error to prevent page crash
    return {
      totalLeads: 0,
      totalHeavyLeads: 0,
      totalUniversities: 0,
      newLeadsThisWeek: 0,
      newLeadsToday: 0,
      recentLeads: [],
      recentHeavyLeads: [],
    }
  }
}

/**
 * Loading skeleton for stats
 */
function StatsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  )
}

/**
 * Main dashboard statistics component
 */
async function DashboardStats() {
  console.log('[DashboardStats] Rendering dashboard statistics...')
  
  // Fetch system status and stats in parallel
  const [systemStatus, stats] = await Promise.all([
    getSystemStatus(),
    getStats()
  ])

  console.log('[DashboardStats] All data fetched successfully')

  return (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <SystemOverview data={systemStatus} />
        
        {/* Quick Stats Card */}
        <Card className="dashboard-card tech-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <span className="gradient-text">Quick Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Today's Leads</span>
                <span className="stat-number text-xl">+{stats.newLeadsToday}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">This Week</span>
                <span className="text-lg font-bold text-cyan-400">+{stats.newLeadsThisWeek}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-sm font-semibold text-green-500">
                  {stats.totalLeads > 0 ? ((stats.totalHeavyLeads / stats.totalLeads) * 100).toFixed(1) : 0}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-cyan-500" />
          <span>System Status</span>
        </h2>
        <SystemStatus data={systemStatus} />
      </div>

      {/* Main Metrics Grid */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Core Metrics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Leads Card */}
          <Card className="metric-card hover:border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="stat-number">{stats.totalLeads}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Quick contact submissions
              </p>
            </CardContent>
          </Card>

          {/* Heavy Leads Card */}
          <Card className="metric-card hover:border-blue-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heavy Leads</CardTitle>
              <UserCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="stat-number">{stats.totalHeavyLeads}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Detailed journey forms
              </p>
            </CardContent>
          </Card>

          {/* Universities Card */}
          <Card className="metric-card hover:border-purple-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Universities</CardTitle>
              <GraduationCap className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="stat-number">{stats.totalUniversities}</div>
              <p className="text-xs text-muted-foreground mt-1">
                In database
              </p>
            </CardContent>
          </Card>

          {/* Weekly Growth Card */}
          <Card className="metric-card hover:border-green-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="stat-number">+{stats.newLeadsThisWeek}</div>
              <p className="text-xs text-muted-foreground mt-1">
                New leads (7 days)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity Feeds */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-cyan-500" />
          <span>Recent Activity</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Recent Quick Leads */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="gradient-text">Recent Quick Leads</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentLeads.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">No leads yet</p>
                    <p className="text-xs text-muted-foreground mt-1">New leads will appear here</p>
                  </div>
                ) : (
                  stats.recentLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="activity-dot"></div>
                        <div>
                          <p className="font-medium text-sm">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.phone}</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Heavy Leads */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="gradient-text">Recent Heavy Leads</CardTitle>
              <CardDescription>Latest journey form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentHeavyLeads.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">No heavy leads yet</p>
                    <p className="text-xs text-muted-foreground mt-1">Detailed forms will appear here</p>
                  </div>
                ) : (
                  stats.recentHeavyLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="activity-dot"></div>
                        <div>
                          <p className="font-medium text-sm">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {lead.preferredCountry} - {lead.studyLevel}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

/**
 * Main Dashboard Page Component
 */
export default function DashboardPage() {
  console.log('[DashboardPage] Rendering dashboard page...')
  
  return (
    <div className="min-h-screen tech-grid">
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight gradient-text mb-2">
            Advanced Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time system monitoring and analytics
          </p>
        </div>

        {/* Dashboard Content with Loading State */}
        <Suspense fallback={<StatsSkeleton />}>
          <DashboardStats />
        </Suspense>
      </div>
    </div>
  )
}
