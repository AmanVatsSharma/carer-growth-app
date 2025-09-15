// app/dashboard/universities/page.tsx
import { prisma } from "@/lib/prisma"
import { UniversityDataTable } from "@/components/admin/universities/university-data-table"
import { columns } from "@/components/admin/universities/columns"
import { DatabaseWarning } from "@/components/ui/database-warning"
import { fallbackUniversities } from "@/lib/fallback-data"

// Force dynamic rendering to avoid build-time database calls
export const dynamic = 'force-dynamic'

export default async function AdminUniversitiesPage() {
  // Check database connection
  let isDatabaseConnected = true
  let universities: any[] = []
  
  try {
    universities = await prisma.university.findMany({
      orderBy: { name: 'asc' },
    })
  } catch (error) {
    isDatabaseConnected = false
    console.error("Database connection error:", error)
    universities = fallbackUniversities
  }

  // JSON fields are already parsed by Prisma for PostgreSQL
  const parsedUniversities = universities.map(university => ({
    ...university,
    contact: university.contact || null,
    exams: university.exams || [],
    courses: university.courses || [],
    tags: university.tags || [],
    intakeSeasons: university.intakeSeasons || [],
    galleryImageUrls: university.galleryImageUrls || [],
  }))

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Universities</h1>
      {!isDatabaseConnected && <DatabaseWarning />}
      <UniversityDataTable columns={columns} data={parsedUniversities} />
    </div>
  )
}