import { prisma } from "@/lib/prisma"
import type { University as PrismaUniversity } from "@/prisma/generated"

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
    const baseSelect: any = {
      id: true,
      slug: true,
      name: true,
      country: true,
      city: true,
      logoUrl: true,
      heroImageUrl: true,
      shortDescription: true,
      description: true,
      website: true,
      contact: true,
      visaSupport: true,
      accommodation: true,
      forex: true,
      counselling: true,
      applicationFeeWaiver: true,
      scholarshipsHelp: true,
      // intentionally exclude exams/tags which may be mis-typed in DB
      createdAt: true,
      updatedAt: true,
    }

    const selectWithCourses = { ...baseSelect, courses: true }
    const selectWithoutCourses = { ...baseSelect }

    let universities: any[] = []
    try {
      universities = await prisma.university.findMany({
        where,
        orderBy: { name: 'asc' },
        select: includeCourses ? selectWithCourses : selectWithoutCourses,
      })
    } catch (firstErr) {
      console.error('[getUniversities] First query failed, retrying without courses selection...', firstErr)
      universities = await prisma.university.findMany({
        where,
        orderBy: { name: 'asc' },
        select: selectWithoutCourses,
      })
    }

    console.log(`[getUniversities] Successfully fetched ${universities.length} universities`)

    // Shape logging for first record (defensive diagnostics)
    if (universities.length > 0) {
      const u0: any = universities[0]
      console.log('[getUniversities] Shape of first row fields:', {
        examsIsArray: Array.isArray((u0 as any).exams),
        tagsIsArray: Array.isArray((u0 as any).tags),
        coursesIsArray: Array.isArray((u0 as any).courses),
        coursesType: u0?.courses == null ? 'nullish' : typeof u0.courses,
      })
    }

    // Parse courses from JSON field to typed Course objects
    const parsedUniversities = universities.map((u: any) => {
      try {
        let parsedCourses: Course[] | undefined = undefined
        if (includeCourses) {
          const rawCourses: any = (u as any).courses
          if (Array.isArray(rawCourses)) {
            parsedCourses = rawCourses.map((c) => c as Course)
          } else if (rawCourses && typeof rawCourses === 'object') {
            // If DB stored a single JSON array in a JSON column
            if (Array.isArray(rawCourses as any)) {
              parsedCourses = (rawCourses as any[]).map((c) => c as Course)
            } else {
              parsedCourses = []
            }
          } else {
            parsedCourses = []
          }
        }
        return { ...u, courses: parsedCourses }
      } catch (parseError) {
        console.error(`[getUniversities] Error parsing courses for university ${u.name}:`, parseError)
        return { ...u, courses: includeCourses ? [] : undefined }
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
  try {
    const universities: any[] = await prisma.university.findMany({
      select: { exams: true },
    })
    const examSet = new Set<string>()
    universities.forEach((u: any) => {
      const examsVal: any = (u as any).exams
      if (Array.isArray(examsVal)) {
        examsVal.forEach((e) => examSet.add(String(e)))
      } else if (examsVal != null) {
        console.warn('[getAllExams] Non-array exams value encountered, skipping:', examsVal)
      }
    })
    return Array.from(examSet).sort()
  } catch (err) {
    console.error('[getAllExams] Prisma selection failed, falling back to raw query...', err)
    try {
      const rows = await (prisma as any).$queryRawUnsafe(
        'SELECT exams FROM "universities"'
      )
      const examSet = new Set<string>()
      for (const row of rows) {
        const v = (row as any).exams
        if (Array.isArray(v)) {
          v.forEach((e: any) => examSet.add(String(e)))
        } else if (v && typeof v === 'object' && Array.isArray(v as any)) {
          ;(v as any[]).forEach((e: any) => examSet.add(String(e)))
        } else if (typeof v === 'string') {
          try {
            const parsed = JSON.parse(v)
            if (Array.isArray(parsed)) parsed.forEach((e: any) => examSet.add(String(e)))
          } catch {}
        }
      }
      return Array.from(examSet).sort()
    } catch (rawErr) {
      console.error('[getAllExams] Raw fallback failed:', rawErr)
      return []
    }
  }
}
