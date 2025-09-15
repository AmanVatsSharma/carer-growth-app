// components/ui/database-warning.tsx
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function DatabaseWarning() {
  return (
    <Alert className="mb-6 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
      <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
      <AlertDescription className="text-orange-800 dark:text-orange-200">
        <strong>Database Connection Issue:</strong> Unable to connect to the database server. 
        Showing sample data for demonstration purposes. Please check your database connection.
      </AlertDescription>
    </Alert>
  )
}