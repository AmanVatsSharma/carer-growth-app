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
import { fallbackUniversities, fallbackCountries, fallbackExams } from "@/lib/fallback-data"

// Helper function to check database connection
async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Database connection error:", error)
    return false
  }
}

export async function getUniversities(filter: UniversityFilter = {}) {
  try {
    const isConnected = await checkDatabaseConnection()
    if (!isConnected) {
      // Return filtered fallback data
      return filterFallbackUniversities(filter)
    }

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
  } catch (error) {
    console.error("Error fetching universities:", error)
    return filterFallbackUniversities(filter)
  }
}

function filterFallbackUniversities(filter: UniversityFilter = {}) {
  let filtered = [...fallbackUniversities]
  
  const { q, country, exam, service } = filter
  
  // Search query
  if (q) {
    const searchTerm = q.toLowerCase()
    filtered = filtered.filter(u => 
      u.name.toLowerCase().includes(searchTerm) ||
      u.country.toLowerCase().includes(searchTerm) ||
      u.city?.toLowerCase().includes(searchTerm) ||
      u.shortDescription?.toLowerCase().includes(searchTerm) ||
      u.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }
  
  // Country filter
  if (country) {
    filtered = filtered.filter(u => u.country === country)
  }
  
  // Exam filter
  if (exam) {
    filtered = filtered.filter(u => u.exams?.includes(exam))
  }
  
  // Service filter
  if (service) {
    filtered = filtered.filter(u => u[service as keyof University] === true)
  }
  
  return filtered
}

export async function getUniversityBySlug(slug: string) {
  try {
    const isConnected = await checkDatabaseConnection()
    if (!isConnected) {
      return fallbackUniversities.find(u => u.slug === slug) || null
    }

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
  } catch (error) {
    console.error("Error fetching university by slug:", error)
    return fallbackUniversities.find(u => u.slug === slug) || null
  }
}

export async function getAllCountries(): Promise<string[]> {
  try {
    const isConnected = await checkDatabaseConnection()
    if (!isConnected) {
      return fallbackCountries
    }

    const universities = await prisma.university.findMany({
      select: { country: true },
      distinct: ['country'],
    })
    return universities.map((u) => u.country).sort()
  } catch (error) {
    console.error("Error fetching countries:", error)
    return fallbackCountries
  }
}

export async function getAllExams(): Promise<string[]> {
  try {
    const isConnected = await checkDatabaseConnection()
    if (!isConnected) {
      return fallbackExams
    }

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
  } catch (error) {
    console.error("Error fetching exams:", error)
    return fallbackExams
  }
}

