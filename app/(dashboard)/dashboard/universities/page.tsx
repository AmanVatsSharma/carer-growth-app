// app/dashboard/universities/page.tsx
/**
 * University Management Page
 * 
 * This page displays all universities in the database with full CRUD capabilities.
 * Includes robust error handling and loading states.
 * 
 * Flow:
 * 1. Server component fetches universities from database
 * 2. Error handling catches any DB connection issues
 * 3. Data is passed to client component for display
 * 4. User can add/edit/delete universities via modal forms
 */

import { getUniversities } from "@/lib/universities-data"
import { UniversityDataTable } from "@/components/admin/universities/university-data-table"
import { columns } from "@/components/admin/universities/columns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Database } from "lucide-react"

// Force dynamic rendering to avoid build-time DB queries
export const dynamic = 'force-dynamic'

export default async function AdminUniversitiesPage() {
  console.log('[Universities Page] Starting to load universities page...')
  
  try {
    // Attempt to fetch universities with courses from database
    console.log('[Universities Page] Fetching universities from database...')
    const universities = await getUniversities({ includeCourses: true })
    
    console.log(`[Universities Page] Successfully fetched ${universities.length} universities`)
    console.log('[Universities Page] Sample data:', universities.slice(0, 2))

    return (
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Manage Universities
          </h1>
          <p className="text-muted-foreground">
            Add, edit, or remove universities from your database
          </p>
        </div>

        {/* Success State - Show Data Table */}
        <div className="dashboard-card">
          <UniversityDataTable columns={columns} data={universities} />
        </div>
      </div>
    )
  } catch (error) {
    // Robust error handling - catch any database or runtime errors
    console.error('[Universities Page] ERROR: Failed to load universities', error)
    console.error('[Universities Page] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: error instanceof Error ? error.constructor.name : typeof error
    })

    // Error State - Display user-friendly error message
    return (
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Manage Universities
          </h1>
          <p className="text-muted-foreground">
            Add, edit, or remove universities from your database
          </p>
        </div>

        {/* Error Display Card */}
        <Card className="border-red-500/50 bg-red-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              Database Connection Error
            </CardTitle>
            <CardDescription>
              Unable to load universities from the database
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Error Details:</strong>
              </p>
              <pre className="bg-black/50 p-4 rounded-md text-xs overflow-auto">
                {error instanceof Error ? error.message : 'An unknown error occurred'}
              </pre>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Possible Solutions:</strong>
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Check if the database is running and accessible</li>
                <li>Verify DATABASE_URL environment variable is set correctly</li>
                <li>Ensure Prisma migrations are up to date</li>
                <li>Check server logs for more detailed error information</li>
                <li>Try refreshing the page</li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
              <Database className="h-4 w-4" />
              <span>Contact your system administrator if the problem persists</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}