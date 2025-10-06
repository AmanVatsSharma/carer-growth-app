// app/dashboard/universities/page.tsx
import { getUniversities } from "@/lib/universities-data"
import { UniversityDataTable } from "@/components/admin/universities/university-data-table"
import { columns } from "@/components/admin/universities/columns"

// Force dynamic rendering to avoid build-time DB queries
export const dynamic = 'force-dynamic'

export default async function AdminUniversitiesPage() {
  const universities = await getUniversities({ includeCourses: true }) // Fetch with courses

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Universities</h1>
      <UniversityDataTable columns={columns} data={universities} />
    </div>
  )
}