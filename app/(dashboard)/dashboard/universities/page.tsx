import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getUniversities } from "@/lib/universities-data" // We will modify this function later
import { UniversityTable } from "@/components/admin/universities/university-table"
import { columns } from "@/components/admin/universities/columns"

export default async function AdminUniversitiesPage() {
  const universities = await getUniversities() // Fetches all universities

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Universities</h1>
          <p className="text-muted-foreground">Add, edit, or remove university listings.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add University
        </Button>
      </div>
      <UniversityTable columns={columns} data={universities} />
    </div>
  )
}