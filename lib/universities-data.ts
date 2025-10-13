import { prisma } from "@/lib/prisma"
import type { University as PrismaUniversity } from "@prisma/client"

export type Course = {
  id?: string
  name: string
  level: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate"
  duration?: string
  tuitionPerYearUSD?: number
  eligibility?: string
}

export type UniversityWithCourses = PrismaUniversity & {
  courses?: Course[]
}

export type University = UniversityWithCourses
export type Country = string
export type Exam = string

export type UniversityFilter = {
  q?: string
  country?: string
  exam?: string
  service?: string
  includeCourses?: boolean
}

/**
 * Fetches universities from database with optional filters
 * 
 * @param filter - Optional filters for searching universities
 * @returns Promise<University[]> - Array of universities with parsed courses
 * @throws Error if database connection fails
 * 
 * Flow:
 * 1. Build dynamic where clause based on filters
 * 2. Query database using Prisma
 * 3. Parse JSON courses field into typed Course objects
 * 4. Return formatted university data
 */
export async function getUniversities(filter: UniversityFilter = {}): Promise<University[]> {
  console.log('[getUniversities] Starting fetch with filters:', filter)
  
  try {
    const { q, country, exam, service, includeCourses } = filter
    
    // Build where clause dynamically based on provided filters
    const where: any = {}
    
    if (q) {
      console.log('[getUniversities] Adding search query:', q)
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { country: { contains: q, mode: 'insensitive' } },
        { city: { contains: q, mode: 'insensitive' } },
        { description: { contains: q, mode: 'insensitive' } },
      ]
    }
    
    if (country) {
      console.log('[getUniversities] Filtering by country:', country)
      where.country = country
    }
    
    if (exam) {
      console.log('[getUniversities] Filtering by exam:', exam)
      where.exams = { has: exam }
    }
    
    if (service) {
      console.log('[getUniversities] Filtering by service:', service)
      where[service] = true
    }

    console.log('[getUniversities] Executing database query...')
    const universities = await prisma.university.findMany({
      where,
      orderBy: { name: 'asc' },
    })

    console.log(`[getUniversities] Successfully fetched ${universities.length} universities`)

    // Parse courses from JSON field to typed Course objects
    const parsedUniversities = universities.map(u => {
      try {
        return {
          ...u,
          courses: includeCourses ? (u.courses as any[]).map(c => c as Course) : undefined
        }
      } catch (parseError) {
        console.error(`[getUniversities] Error parsing courses for university ${u.name}:`, parseError)
        // Return university with empty courses array on parse error
        return {
          ...u,
          courses: includeCourses ? [] : undefined
        }
      }
    })

    console.log('[getUniversities] Successfully parsed all university data')
    return parsedUniversities
    
  } catch (error) {
    console.error('[getUniversities] CRITICAL ERROR: Failed to fetch universities from database', error)
    console.error('[getUniversities] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: error instanceof Error ? error.constructor.name : typeof error,
      filter: filter
    })
    
    // Re-throw error to be handled by calling component
    throw new Error(`Failed to fetch universities: ${error instanceof Error ? error.message : 'Unknown database error'}`)
  }
}

export async function getUniversityBySlug(slug: string): Promise<University | null> {
  const university = await prisma.university.findUnique({
    where: { slug },
  })
  
  if (!university) return null
  
  return {
    ...university,
    courses: (university.courses as any[]).map(c => c as Course)
  }
}

export async function getAllCountries(): Promise<string[]> {
  const universities = await prisma.university.findMany({
    select: { country: true },
    distinct: ['country'],
    orderBy: { country: 'asc' },
  })
  return universities.map((u) => u.country)
}

export async function getAllExams(): Promise<string[]> {
  const universities = await prisma.university.findMany({
    select: { exams: true },
  })
  const examSet = new Set<string>()
  universities.forEach((u) => u.exams.forEach((e) => examSet.add(e)))
  return Array.from(examSet).sort()
}
