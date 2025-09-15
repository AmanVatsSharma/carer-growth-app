// Import the Prisma-generated University type
import { University as PrismaUniversity } from "@/prisma/generated"

// Use the Prisma type as our main University type
export type University = PrismaUniversity

export type UniversityFilter = {
  q?: string
  country?: string
  exam?: string
  service?: string
}

import { prisma } from "@/lib/prisma"

export async function getUniversities(filter: UniversityFilter = {}) {
  const { q, country, exam, service } = filter
  const where: any = {}
  
  // Search query
  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { country: { contains: q, mode: 'insensitive' } },
      { city: { contains: q, mode: 'insensitive' } },
      { shortDescription: { contains: q, mode: 'insensitive' } },
      { tags: { contains: q } },
    ]
  }

  // Filters
  if (country) where.country = country
  if (exam) where.exams = { contains: exam }
  if (service) {
    where[service] = true
  }

  const universities = await prisma.university.findMany({
    where,
    orderBy: { name: 'asc' },
  })

  // Parse JSON fields for SQLite compatibility
  return universities.map(university => ({
    ...university,
    contact: university.contact ? JSON.parse(university.contact) : null,
    exams: university.exams ? JSON.parse(university.exams) : [],
    courses: university.courses ? JSON.parse(university.courses) : [],
    tags: university.tags ? JSON.parse(university.tags) : [],
    intakeSeasons: university.intakeSeasons ? JSON.parse(university.intakeSeasons) : [],
    galleryImageUrls: university.galleryImageUrls ? JSON.parse(university.galleryImageUrls) : [],
  }))
}

export async function getUniversityBySlug(slug: string) {
  const university = await prisma.university.findUnique({
    where: { slug },
  })
  
  if (!university) return null
  
  // Parse JSON fields for SQLite compatibility
  return {
    ...university,
    contact: university.contact ? JSON.parse(university.contact) : null,
    exams: university.exams ? JSON.parse(university.exams) : [],
    courses: university.courses ? JSON.parse(university.courses) : [],
    tags: university.tags ? JSON.parse(university.tags) : [],
    intakeSeasons: university.intakeSeasons ? JSON.parse(university.intakeSeasons) : [],
    galleryImageUrls: university.galleryImageUrls ? JSON.parse(university.galleryImageUrls) : [],
  }
}

export async function getAllCountries(): Promise<string[]> {
  const universities = await prisma.university.findMany({
    select: { country: true },
    distinct: ['country'],
  })
  return universities.map((u) => u.country).sort()
}

export async function getAllExams(): Promise<string[]> {
  const universities = await prisma.university.findMany({
    select: { exams: true },
  })
  const set = new Set<string>()
  universities.forEach((u) => {
    if (u.exams) {
      const exams = JSON.parse(u.exams)
      exams.forEach((e: string) => set.add(e))
    }
  })
  return Array.from(set).sort()
}

