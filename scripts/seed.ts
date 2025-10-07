import { PrismaClient } from "../prisma/generated"

const prisma = new PrismaClient()

const sampleUniversities = [
  {
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    logoUrl: "/universities/university-of-melbourne-logo.png",
    heroImageUrl: "/universities/unimelb-campus.png",
    shortDescription: "A global leader in research and teaching located in Melbourne, Australia.",
    description: "The University of Melbourne is consistently ranked among the leading universities in the world, with international rankings of world universities placing it as number 1 in Australia and number 33 in the world (Times Higher Education World University Rankings 2023).",
    website: "https://www.unimelb.edu.au",
    contact: {
      email: "admissions@unimelb.edu.au",
      phone: "+61 3 9035 5511",
      address: "Parkville VIC 3010, Australia",
    },
    exams: ["IELTS", "TOEFL", "PTE"],
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
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
    slug: "university-of-toronto",
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    logoUrl: "/universities/university-of-toronto-logo.png",
    heroImageUrl: "/universities/university-of-toronto-campus.png",
    shortDescription: "Top-ranked Canadian university with world-class programs and research.",
    description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in Upper Canada.",
    website: "https://www.utoronto.ca",
    contact: {
      email: "admissions.help@utoronto.ca",
      phone: "+1 416-978-2011",
      address: "27 King's College Cir, Toronto, ON M5S, Canada",
    },
    exams: ["IELTS", "TOEFL"],
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: true,
    scholarshipsHelp: true,
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
    slug: "harvard-university",
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    logoUrl: "/universities/harvard-logo.png",
    heroImageUrl: "/universities/harvard-yard.png",
    shortDescription: "Ivy League institution known for academic excellence and global impact.",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, Harvard is the oldest institution of higher education in the United States and among the most prestigious in the world.",
    website: "https://www.harvard.edu",
    contact: {
      email: "admissions@harvard.edu",
      phone: "+1 617-495-1000",
      address: "Massachusetts Hall, Cambridge, MA 02138, USA",
    },
    exams: ["IELTS", "TOEFL", "SAT", "GRE"],
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
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

async function main() {
  console.log("🌱 Starting database seed...")

  // Clear existing data
  console.log("🧹 Clearing existing universities...")
  await prisma.university.deleteMany()

  // Seed universities
  console.log("🏫 Seeding universities...")
  for (const uni of sampleUniversities) {
    await prisma.university.create({
      data: uni,
    })
    console.log(`✅ Created: ${uni.name}`)
  }

  console.log("✨ Database seeding complete!")
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
