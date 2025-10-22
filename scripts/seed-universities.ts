import { PrismaClient } from "@/prisma/generated"

const prisma = new PrismaClient()


async function main() {
  console.log("🌱 [seed-universities] Starting seed...")
  try {
    console.log("🧹 [seed-universities] Clearing existing universities...")
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
      // Additional fields for enhanced university information
      qsRanking: 33,
      tuitionFeeFrom: 30000,
      tuitionFeeTo: 45000,
      intakeSeasons: ["Fall", "Spring"],
      galleryImageUrls: [
        "/universities/unimelb-campus-1.png",
        "/universities/unimelb-campus-2.png",
        "/universities/unimelb-campus-3.png"
      ],
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
      // Additional fields for enhanced university information
      qsRanking: 21,
      tuitionFeeFrom: 35000,
      tuitionFeeTo: 50000,
      intakeSeasons: ["Fall", "Winter"],
      galleryImageUrls: [
        "/universities/utoronto-campus-1.png",
        "/universities/utoronto-campus-2.png",
        "/universities/utoronto-campus-3.png",
        "/universities/utoronto-campus-4.png"
      ],
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
      // Additional fields for enhanced university information
      qsRanking: 5,
      tuitionFeeFrom: 50000,
      tuitionFeeTo: 60000,
      intakeSeasons: ["Fall"],
      galleryImageUrls: [
        "/universities/harvard-yard-1.png",
        "/universities/harvard-yard-2.png",
        "/universities/harvard-campus-1.png",
        "/universities/harvard-campus-2.png",
        "/universities/harvard-campus-3.png"
      ],
    },
    {
      slug: "alug",
      name: "Alug University",
      country: "United Kingdom",
      city: "London",
      logoUrl: "/universities/alug-logo.png",
      heroImageUrl: "/universities/alug-campus.png",
      shortDescription: "A prestigious UK university offering world-class education in the heart of London.",
      website: "https://www.alug.edu.uk",
      contact: {
        email: "admissions@alug.edu.uk",
        phone: "+44 20 7123 4567",
        address: "123 University Street, London SW1A 1AA, UK",
      },
      exams: ["IELTS", "TOEFL", "PTE"],
      visaSupport: true,
      accommodation: true,
      forex: true,
      counselling: true,
      applicationFeeWaiver: true,
      scholarshipsHelp: true,
      courses: [
        {
          name: "Bachelor of Business Administration",
          level: "Undergraduate",
          duration: "3 years",
          tuitionPerYearUSD: 28000,
          eligibility: "IELTS 6.5 overall, min 6.0 in each band",
        },
        {
          name: "Master of International Relations",
          level: "Postgraduate",
          duration: "1 year",
          tuitionPerYearUSD: 35000,
          eligibility: "Bachelor degree, IELTS 7.0 overall",
        },
      ],
      tags: ["UK", "London", "Business", "International"],
      // Additional fields for enhanced university information
      qsRanking: 150,
      tuitionFeeFrom: 25000,
      tuitionFeeTo: 40000,
      intakeSeasons: ["Fall", "Spring", "Summer"],
      galleryImageUrls: [
        "/universities/alug-campus-1.png",
        "/universities/alug-campus-2.png",
        "/universities/alug-campus-3.png"
      ],
    },
  ]

    console.log("🏫 [seed-universities] Inserting universities...")
    for (const uni of universities) {
      const created = await prisma.university.create({ data: uni })
      console.log(`✅ [seed-universities] Created: ${created.name}`)
    }

    console.log("✨ [seed-universities] Universities seeded successfully!")
  } catch (e) {
    console.error("❌ [seed-universities] Error while seeding:", e)
    throw e
  }
}

main()
  .catch((e) => {
    console.error("❌ [seed-universities] Fatal:", e)
    process.exit(1)
  })
  .finally(async () => {
    console.log("🔌 [seed-universities] Disconnecting Prisma...")
    await prisma.$disconnect()
  })
