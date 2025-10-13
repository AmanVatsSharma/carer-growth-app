/**
 * System Status Component
 * 
 * Displays real-time status of critical system components:
 * - Database connection
 * - API health
 * - Website online status
 * 
 * Flow:
 * 1. Component receives status data from server
 * 2. Displays color-coded status indicators (green/red/yellow)
 * 3. Shows detailed metrics for each service
 * 4. Provides visual feedback with icons and animations
 */

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, Globe, Activity, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export type SystemStatusData = {
  database: {
    status: 'online' | 'offline' | 'degraded'
    responseTime: number
    lastCheck: Date
    message?: string
  }
  api: {
    status: 'online' | 'offline' | 'degraded'
    responseTime: number
    lastCheck: Date
    message?: string
  }
  website: {
    status: 'online' | 'offline' | 'degraded'
    uptime: number
    lastCheck: Date
    message?: string
  }
}

interface SystemStatusProps {
  data: SystemStatusData
}

export function SystemStatus({ data }: SystemStatusProps) {
  console.log('[SystemStatus] Rendering system status with data:', data)

  // Helper function to get status icon
  const getStatusIcon = (status: 'online' | 'offline' | 'degraded') => {
    switch (status) {
      case 'online':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case 'offline':
        return <XCircle className="h-5 w-5 text-red-500" />
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  // Helper function to get status indicator class
  const getStatusClass = (status: 'online' | 'offline' | 'degraded') => {
    switch (status) {
      case 'online':
        return 'online'
      case 'offline':
        return 'offline'
      case 'degraded':
        return 'warning'
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Database Status */}
      <Card className="dashboard-card tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-cyan-500" />
              <span>Database</span>
            </div>
            {getStatusIcon(data.database.status)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`status-indicator ${getStatusClass(data.database.status)}`}></span>
              <span className="text-sm capitalize">{data.database.status}</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Response: {data.database.responseTime}ms</p>
              <p>Last check: {new Date(data.database.lastCheck).toLocaleTimeString()}</p>
              {data.database.message && (
                <p className="text-yellow-500 mt-2">{data.database.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Status */}
      <Card className="dashboard-card tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-500" />
              <span>API Server</span>
            </div>
            {getStatusIcon(data.api.status)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`status-indicator ${getStatusClass(data.api.status)}`}></span>
              <span className="text-sm capitalize">{data.api.status}</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Response: {data.api.responseTime}ms</p>
              <p>Last check: {new Date(data.api.lastCheck).toLocaleTimeString()}</p>
              {data.api.message && (
                <p className="text-yellow-500 mt-2">{data.api.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Website Status */}
      <Card className="dashboard-card tech-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-green-500" />
              <span>Website</span>
            </div>
            {getStatusIcon(data.website.status)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`status-indicator ${getStatusClass(data.website.status)}`}></span>
              <span className="text-sm capitalize">{data.website.status}</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Uptime: {data.website.uptime.toFixed(2)}%</p>
              <p>Last check: {new Date(data.website.lastCheck).toLocaleTimeString()}</p>
              {data.website.message && (
                <p className="text-yellow-500 mt-2">{data.website.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * System Overview Card
 * Shows overall system health and metrics
 */
export function SystemOverview({ data }: SystemStatusProps) {
  console.log('[SystemOverview] Rendering system overview')
  
  // Calculate overall system status
  const allStatuses = [data.database.status, data.api.status, data.website.status]
  const hasOffline = allStatuses.includes('offline')
  const hasDegraded = allStatuses.includes('degraded')
  
  let overallStatus: 'online' | 'offline' | 'degraded' = 'online'
  if (hasOffline) overallStatus = 'offline'
  else if (hasDegraded) overallStatus = 'degraded'

  const servicesOnline = allStatuses.filter(s => s === 'online').length
  const totalServices = allStatuses.length

  return (
    <Card className="dashboard-card tech-border scan-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-cyan-500" />
          <span className="gradient-text">System Health</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Overall Status */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Overall Status</p>
              <div className="flex items-center gap-2">
                <span className={`status-indicator ${overallStatus === 'online' ? 'online' : overallStatus === 'offline' ? 'offline' : 'warning'}`}></span>
                <span className="text-lg font-semibold capitalize">{overallStatus}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Services Online</p>
              <p className="stat-number">{servicesOnline}/{totalServices}</p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Avg Response</p>
              <p className="text-sm font-semibold">
                {Math.round((data.database.responseTime + data.api.responseTime) / 2)}ms
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Uptime</p>
              <p className="text-sm font-semibold">{data.website.uptime.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-1">
                <span className="activity-dot"></span>
                <span className="text-xs font-semibold text-cyan-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
