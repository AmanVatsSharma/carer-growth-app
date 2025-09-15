// app/dashboard/universities/page.tsx
import { prisma } from "@/lib/prisma"
import { UniversityDataTable } from "@/components/admin/universities/university-data-table"
import { columns } from "@/components/admin/universities/columns"

export default async function AdminUniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: { name: 'asc' },
  })

  // Parse JSON fields for display
  const parsedUniversities = universities.map(university => ({
    ...university,
    contact: university.contact ? JSON.parse(university.contact) : null,
    exams: university.exams ? JSON.parse(university.exams) : [],
    courses: university.courses ? JSON.parse(university.courses) : [],
    tags: university.tags ? JSON.parse(university.tags) : [],
    intakeSeasons: university.intakeSeasons ? JSON.parse(university.intakeSeasons) : [],
    galleryImageUrls: university.galleryImageUrls ? JSON.parse(university.galleryImageUrls) : [],
  }))

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Universities</h1>
      <UniversityDataTable columns={columns} data={parsedUniversities} />
    </div>
  )
}