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
      { tags: { path: '$', string_contains: q } },
    ]
  }

  // Filters
  if (country) where.country = country
  if (exam) where.exams = { path: '$', string_contains: exam }
  if (service) {
    where[service] = true
  }

  const universities = await prisma.university.findMany({
    where,
    orderBy: { name: 'asc' },
  })

  // JSON fields are already parsed by Prisma for PostgreSQL
  return universities.map(university => ({
    ...university,
    contact: university.contact || null,
    exams: university.exams || [],
    courses: university.courses || [],
    tags: university.tags || [],
    intakeSeasons: university.intakeSeasons || [],
    galleryImageUrls: university.galleryImageUrls || [],
  }))
}

export async function getUniversityBySlug(slug: string) {
  const university = await prisma.university.findUnique({
    where: { slug },
  })
  
  if (!university) return null
  
  // JSON fields are already parsed by Prisma for PostgreSQL
  return {
    ...university,
    contact: university.contact || null,
    exams: university.exams || [],
    courses: university.courses || [],
    tags: university.tags || [],
    intakeSeasons: university.intakeSeasons || [],
    galleryImageUrls: university.galleryImageUrls || [],
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
    if (u.exams && Array.isArray(u.exams)) {
      u.exams.forEach((e: string) => set.add(e))
    }
  })
  return Array.from(set).sort()
}

