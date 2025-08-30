export type University = {
  id: string
  slug: string
  name: string
  country: string
  city?: string
  logoUrl?: string
  heroImageUrl?: string
  shortDescription?: string
  description?: string
  website?: string
  contact?: {
    email?: string
    phone?: string
    address?: string
  }
  exams?: string[] // e.g., IELTS, TOEFL, SAT, GRE
  services?: {
    visaSupport?: boolean
    accommodation?: boolean
    forex?: boolean
    counselling?: boolean
    applicationFeeWaiver?: boolean
    scholarshipsHelp?: boolean
  }
  courses?: Array<{
    name: string
    level: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate"
    duration?: string
    tuitionPerYearUSD?: number
    eligibility?: string
  }>
  tags?: string[]
}

export type UniversityFilter = {
  q?: string
  country?: string
  exam?: string
  service?: string
}

const universities: University[] = [
  {
    id: "uom",
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    logoUrl: "/universities/university-of-melbourne-logo.png",
    heroImageUrl: "/universities/unimelb-campus.png",
    shortDescription: "A global leader in research and teaching located in Melbourne, Australia.",
    website: "https://www.unimelb.edu.au",
    contact: {
      email: "admissions@unimelb.edu.au",
      phone: "+61 3 9035 5511",
      address: "Parkville VIC 3010, Australia",
    },
    exams: ["IELTS", "TOEFL", "PTE"],
    services: {
      visaSupport: true,
      accommodation: true,
      forex: true,
      counselling: true,
      applicationFeeWaiver: false,
      scholarshipsHelp: true,
    },
    courses: [
      {
        name: "Bachelor of Science",
        level: "Undergraduate",
        duration: "3 years",
        tuitionPerYearUSD: 32000,
        eligibility: "IELTS 6.5 overall, min 6.0 in each band",
      },
      {
        name: "Master of Data Science",
        level: "Postgraduate",
        duration: "2 years",
        tuitionPerYearUSD: 42000,
        eligibility: "Bachelor in related field, IELTS 6.5/6.0",
      },
    ],
    tags: ["Go8", "Research", "Australia"],
  },
  {
    id: "uoft",
    slug: "university-of-toronto",
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    logoUrl: "/universities/university-of-toronto-logo.png",
    heroImageUrl: "/universities/university-of-toronto-campus.png",
    shortDescription: "Top-ranked Canadian university with world-class programs and research.",
    website: "https://www.utoronto.ca",
    contact: {
      email: "admissions.help@utoronto.ca",
      phone: "+1 416-978-2011",
      address: "27 King’s College Cir, Toronto, ON M5S, Canada",
    },
    exams: ["IELTS", "TOEFL"],
    services: {
      visaSupport: true,
      accommodation: true,
      forex: true,
      counselling: true,
      applicationFeeWaiver: true,
      scholarshipsHelp: true,
    },
    courses: [
      {
        name: "Bachelor of Commerce",
        level: "Undergraduate",
        duration: "4 years",
        tuitionPerYearUSD: 45000,
        eligibility: "IELTS 6.5 overall or TOEFL iBT 100",
      },
      {
        name: "MSc Computer Science",
        level: "Postgraduate",
        duration: "2 years",
        tuitionPerYearUSD: 38000,
        eligibility: "Bachelor CS, IELTS 7.0/6.5",
      },
    ],
    tags: ["U15", "Canada", "Research"],
  },
  {
    id: "harvard",
    slug: "harvard-university",
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    logoUrl: "/universities/harvard-logo.png",
    heroImageUrl: "/universities/harvard-yard.png",
    shortDescription: "Ivy League institution known for academic excellence and global impact.",
    website: "https://www.harvard.edu",
    contact: {
      email: "admissions@harvard.edu",
      phone: "+1 617-495-1000",
      address: "Massachusetts Hall, Cambridge, MA 02138, USA",
    },
    exams: ["IELTS", "TOEFL", "SAT", "GRE"],
    services: {
      visaSupport: true,
      accommodation: true,
      forex: true,
      counselling: true,
      applicationFeeWaiver: false,
      scholarshipsHelp: true,
    },
    courses: [
      {
        name: "AB in Economics",
        level: "Undergraduate",
        duration: "4 years",
        tuitionPerYearUSD: 56000,
        eligibility: "Strong academic record, TOEFL/IELTS as required",
      },
      {
        name: "MS in Data Science",
        level: "Postgraduate",
        duration: "2 years",
        tuitionPerYearUSD: 52000,
        eligibility: "STEM bachelor, GRE recommended, IELTS/TOEFL",
      },
    ],
    tags: ["Ivy", "USA", "Research"],
  },
]

export async function getUniversities(filter: UniversityFilter = {}) {
  // Simulate DB filtering; replace with Prisma queries later.
  const { q, country, exam, service } = filter
  let rows = [...universities]

  if (q) {
    const needle = q.toLowerCase()
    rows = rows.filter(
      (u) =>
        u.name.toLowerCase().includes(needle) ||
        u.country.toLowerCase().includes(needle) ||
        (u.city && u.city.toLowerCase().includes(needle)) ||
        (u.tags || []).some((t) => t.toLowerCase().includes(needle)) ||
        (u.courses || []).some((c) => c.name.toLowerCase().includes(needle)),
    )
  }
  if (country) {
    rows = rows.filter((u) => u.country.toLowerCase() === country.toLowerCase())
  }
  if (exam) {
    rows = rows.filter((u) => (u.exams || []).includes(exam))
  }
  if (service) {
    rows = rows.filter((u) => Boolean((u.services as any)?.[service as keyof NonNullable<University["services"]>]))
  }

  // Sort by name for determinism
  rows.sort((a, b) => a.name.localeCompare(b.name))
  return rows
}

export async function getUniversityBySlug(slug: string) {
  return universities.find((u) => u.slug === slug) || null
}

export async function getAllCountries(): Promise<string[]> {
  return Array.from(new Set(universities.map((u) => u.country))).sort()
}

export async function getAllExams(): Promise<string[]> {
  const set = new Set<string>()
  universities.forEach((u) => (u.exams || []).forEach((e) => set.add(e)))
  return Array.from(set).sort()
}
