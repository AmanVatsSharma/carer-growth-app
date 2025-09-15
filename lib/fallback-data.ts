// Fallback data for when database is unavailable
import type { University } from "@/lib/universities-data"

export const fallbackUniversities: University[] = [
  {
    id: "fallback-1",
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    logoUrl: "/placeholder.svg?height=40&width=40&query=melbourne",
    heroImageUrl: "/placeholder.svg?height=200&width=400&query=campus",
    shortDescription: "Australia's leading research university with a strong focus on innovation and excellence.",
    description: "The University of Melbourne is Australia's leading research university, consistently ranked among the world's top universities. We offer a wide range of undergraduate and postgraduate programs across various disciplines.",
    website: "https://www.unimelb.edu.au",
    contact: {
      email: "info@unimelb.edu.au",
      phone: "+61 3 9035 5511",
      address: "Parkville, Victoria 3010, Australia"
    },
    exams: ["IELTS", "TOEFL", "PTE"],
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
    courses: ["Engineering", "Business", "Medicine", "Arts"],
    tags: ["Research", "Innovation", "Excellence"],
    tuitionFeeFrom: 35000,
    tuitionFeeTo: 45000,
    qsRanking: 33,
    intakeSeasons: ["February", "July"],
    galleryImageUrls: ["/placeholder.svg?height=300&width=400&query=campus1", "/placeholder.svg?height=300&width=400&query=campus2"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "fallback-2",
    slug: "university-of-toronto",
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    logoUrl: "/placeholder.svg?height=40&width=40&query=toronto",
    heroImageUrl: "/placeholder.svg?height=200&width=400&query=campus",
    shortDescription: "Canada's leading university with a global reputation for research and teaching excellence.",
    description: "The University of Toronto is Canada's leading university and one of the world's top research-intensive universities. We offer diverse programs and opportunities for students from around the world.",
    website: "https://www.utoronto.ca",
    contact: {
      email: "info@utoronto.ca",
      phone: "+1 416 978 2011",
      address: "Toronto, ON M5S 1A1, Canada"
    },
    exams: ["IELTS", "TOEFL", "CAEL"],
    visaSupport: true,
    accommodation: true,
    forex: false,
    counselling: true,
    applicationFeeWaiver: true,
    scholarshipsHelp: true,
    courses: ["Engineering", "Business", "Medicine", "Computer Science"],
    tags: ["Research", "Innovation", "Diversity"],
    tuitionFeeFrom: 40000,
    tuitionFeeTo: 50000,
    qsRanking: 25,
    intakeSeasons: ["September", "January"],
    galleryImageUrls: ["/placeholder.svg?height=300&width=400&query=campus1", "/placeholder.svg?height=300&width=400&query=campus2"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "fallback-3",
    slug: "imperial-college-london",
    name: "Imperial College London",
    country: "United Kingdom",
    city: "London",
    logoUrl: "/placeholder.svg?height=40&width=40&query=imperial",
    heroImageUrl: "/placeholder.svg?height=200&width=400&query=campus",
    shortDescription: "A world-class university specializing in science, engineering, medicine, and business.",
    description: "Imperial College London is a world-class university specializing in science, engineering, medicine, and business. Located in the heart of London, we offer cutting-edge research and education.",
    website: "https://www.imperial.ac.uk",
    contact: {
      email: "info@imperial.ac.uk",
      phone: "+44 20 7589 5111",
      address: "South Kensington, London SW7 2AZ, UK"
    },
    exams: ["IELTS", "TOEFL", "Cambridge English"],
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
    courses: ["Engineering", "Medicine", "Business", "Science"],
    tags: ["Science", "Engineering", "Innovation"],
    tuitionFeeFrom: 30000,
    tuitionFeeTo: 40000,
    qsRanking: 6,
    intakeSeasons: ["October"],
    galleryImageUrls: ["/placeholder.svg?height=300&width=400&query=campus1", "/placeholder.svg?height=300&width=400&query=campus2"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export const fallbackCountries = ["Australia", "Canada", "United Kingdom"]
export const fallbackExams = ["IELTS", "TOEFL", "PTE", "CAEL", "Cambridge English"]