// app/dashboard/universities/page.tsx
import { prisma } from "@/lib/prisma"
import { UniversityDataTable } from "@/components/admin/universities/university-data-table"
import { columns } from "@/components/admin/universities/columns"

// Force dynamic rendering to avoid build-time database calls
export const dynamic = 'force-dynamic'

export default async function AdminUniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: { name: 'asc' },
  })

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
      <UniversityDataTable columns={columns} data={parsedUniversities} />
    </div>
  )
}