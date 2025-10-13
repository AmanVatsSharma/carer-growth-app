/**
 * ANNOUNCEMENTS MANAGEMENT PAGE
 * 
 * Manages website announcements with modern futuristic UI
 * 
 * Features:
 * - Create, edit, and delete announcements
 * - Real-time statistics
 * - Status indicators
 * - Scheduling capabilities
 * - Rich text editor
 * 
 * Design Pattern: Card-Based Dashboard Layout with Status Indicators
 */

import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AnnouncementsTable } from "@/components/dashboard/announcements/announcements-table"
import { prisma } from "@/lib/prisma"
import { Megaphone, FileText, Clock, TrendingUp } from "lucide-react"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

/**
 * Fetches announcement statistics with error handling
 */
async function getAnnouncementStats() {
  console.log('[Announcements Page] Fetching announcement statistics...')
  
  try {
    const [
      totalAnnouncements,
      newAnnouncementsToday,
      recentAnnouncements,
      thisWeekAnnouncements
    ] = await Promise.all([
      prisma.announcement.count(),
      prisma.announcement.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.announcement.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
      }),
      prisma.announcement.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      })
    ])

    console.log('[Announcements Page] Statistics fetched successfully:', {
      totalAnnouncements, newAnnouncementsToday, recentAnnouncements, thisWeekAnnouncements
    })

    return { totalAnnouncements, newAnnouncementsToday, recentAnnouncements, thisWeekAnnouncements }
    
  } catch (error) {
    console.error('[Announcements Page] ERROR: Failed to fetch statistics', error)
    return { totalAnnouncements: 0, newAnnouncementsToday: 0, recentAnnouncements: 0, thisWeekAnnouncements: 0 }
  }
}

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

async function AnnouncementsContent() {
  const stats = await getAnnouncementStats()

  return (
    <>
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {/* Total Announcements */}
        <Card className="metric-card hover:border-yellow-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.totalAnnouncements}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time announcements
            </p>
          </CardContent>
        </Card>

        {/* Today */}
        <Card className="metric-card hover:border-cyan-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <FileText className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">+{stats.newAnnouncementsToday}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Created today
            </p>
          </CardContent>
        </Card>

        {/* Recent */}
        <Card className="metric-card hover:border-blue-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last 24 Hours</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">{stats.recentAnnouncements}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Recent activity
            </p>
          </CardContent>
        </Card>

        {/* This Week */}
        <Card className="metric-card hover:border-green-500/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="stat-number">+{stats.thisWeekAnnouncements}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Weekly total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Data Table */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="gradient-text">All Announcements</CardTitle>
          <CardDescription>Add, edit, or remove announcements that appear on your site</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<AnnouncementsTableSkeleton />}>
            <AnnouncementsTable />
          </Suspense>
        </CardContent>
      </Card>
    </>
  )
}

export default function AnnouncementsPage() {
  console.log('[Announcements Page] Rendering announcements page...')

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight gradient-text mb-2">
            Announcements Management
          </h1>
          <p className="text-muted-foreground">
            Create and manage announcements for your website
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
          <AnnouncementsContent />
        </Suspense>
      </div>
    </div>
  )
}
