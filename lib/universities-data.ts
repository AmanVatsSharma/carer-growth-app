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

export async function getUniversities(filter: UniversityFilter = {}): Promise<University[]> {
  const { q, country, exam, service, includeCourses } = filter
  
  // Build where clause
  const where: any = {}
  
  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { country: { contains: q, mode: 'insensitive' } },
      { city: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
    ]
  }
  
  if (country) {
    where.country = country
  }
  
  if (exam) {
    where.exams = { has: exam }
  }
  
  if (service) {
    where[service] = true
  }

  const universities = await prisma.university.findMany({
    where,
    orderBy: { name: 'asc' },
  })

  // Parse courses from JSON
  return universities.map(u => ({
    ...u,
    courses: includeCourses ? (u.courses as any[]).map(c => c as Course) : undefined
  }))
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
