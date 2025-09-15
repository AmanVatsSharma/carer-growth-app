import { PrismaClient } from "@/prisma/generated"

const prisma = new PrismaClient()

const universities = [
  {
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    logoUrl: "/universities/university-of-melbourne-logo.png",
    heroImageUrl: "/universities/unimelb-campus.png",
    shortDescription: "A global leader in research and teaching located in Melbourne, Australia.",
    description: "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria. The university is ranked among the top universities in Australia and the world.",
    website: "https://www.unimelb.edu.au",
    contact: JSON.stringify({
      email: "admissions@unimelb.edu.au",
      phone: "+61 3 9035 5511",
      address: "Parkville VIC 3010, Australia",
    }),
    exams: JSON.stringify(["IELTS", "TOEFL", "PTE"]),
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
    courses: JSON.stringify([
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
    ]),
    tags: JSON.stringify(["Go8", "Research", "Australia"]),
    tuitionFeeFrom: 32000,
    tuitionFeeTo: 45000,
    qsRanking: 33,
    intakeSeasons: JSON.stringify(["February", "July"]),
    galleryImageUrls: JSON.stringify(["/universities/unimelb-campus.png"]),
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
    contact: JSON.stringify({
      email: "admissions.help@utoronto.ca",
      phone: "+1 416-978-2011",
      address: "27 King's College Cir, Toronto, ON M5S, Canada",
    }),
    exams: JSON.stringify(["IELTS", "TOEFL"]),
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: true,
    scholarshipsHelp: true,
    courses: JSON.stringify([
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
    ]),
    tags: JSON.stringify(["U15", "Canada", "Research"]),
    tuitionFeeFrom: 38000,
    tuitionFeeTo: 50000,
    qsRanking: 21,
    intakeSeasons: JSON.stringify(["September", "January"]),
    galleryImageUrls: JSON.stringify(["/universities/university-of-toronto-campus.png"]),
  },
  {
    slug: "harvard-university",
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    logoUrl: "/universities/harvard-logo.png",
    heroImageUrl: "/universities/harvard-yard.png",
    shortDescription: "Ivy League institution known for academic excellence and global impact.",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the United States' oldest institution of higher learning.",
    website: "https://www.harvard.edu",
    contact: JSON.stringify({
      email: "admissions@harvard.edu",
      phone: "+1 617-495-1000",
      address: "Massachusetts Hall, Cambridge, MA 02138, USA",
    }),
    exams: JSON.stringify(["IELTS", "TOEFL", "SAT", "GRE"]),
    visaSupport: true,
    accommodation: true,
    forex: true,
    counselling: true,
    applicationFeeWaiver: false,
    scholarshipsHelp: true,
    courses: JSON.stringify([
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
    ]),
    tags: JSON.stringify(["Ivy", "USA", "Research"]),
    tuitionFeeFrom: 52000,
    tuitionFeeTo: 60000,
    qsRanking: 5,
    intakeSeasons: JSON.stringify(["September"]),
    galleryImageUrls: JSON.stringify(["/universities/harvard-yard.png"]),
  },
]

async function main() {
  console.log("Seeding universities...")
  
  for (const university of universities) {
    await prisma.university.upsert({
      where: { slug: university.slug },
      update: university,
      create: university,
    })
  }
  
  console.log("Universities seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })