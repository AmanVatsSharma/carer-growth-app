import { prisma } from "@/lib/prisma"
import { PrismaClient } from "@prisma/client"


async function main() {
  // Clear old data (optional, comment if you don’t want to wipe)
  await prisma.university.deleteMany()

  // Hardcoded seed data
  const universities = [
    {
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
      website: "https://www.utoronto.ca",
      contact: {
        email: "admissions.help@utoronto.ca",
        phone: "+1 416-978-2011",
        address: "27 King’s College Cir, Toronto, ON M5S, Canada",
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

  // Insert universities
  for (const uni of universities) {
    await prisma.university.create({ data: uni })
  }

  console.log("✅ Universities seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
