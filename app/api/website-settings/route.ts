import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Get the first (and only) website settings record
    let settings = await prisma.websiteSettings.findFirst()
    
    // If no settings exist, create default ones
    if (!settings) {
      settings = await prisma.websiteSettings.create({
        data: {
          announcementTitle: "Welcome to IPD Education",
          announcementContent: "Your gateway to international education and career opportunities",
          announcementActive: true,
          marqueeUniversities: [
            { src: "/logo-01.webp", alt: "University of Melbourne", darkSrc: "/logo-01_dark.webp" },
            { src: "/logo-02.webp", alt: "University of Toronto", darkSrc: "/logo-02_dark.webp" },
            { src: "/logo-03.webp", alt: "University of Sydney", darkSrc: "/logo-03_dark.webp" },
            { src: "/logo-04.webp", alt: "University of British Columbia", darkSrc: "/logo-04_dark.webp" },
          ],
          siteTitle: "IPD Education",
          siteDescription: "Your gateway to international education and career opportunities",
          contactEmail: "info@ipdeducation.com",
          contactPhone: "+1-555-0123",
        }
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error("Error fetching website settings:", error)
    return NextResponse.json({ error: "Failed to fetch website settings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Check if settings already exist
    const existingSettings = await prisma.websiteSettings.findFirst()
    
    let settings
    if (existingSettings) {
      // Update existing settings
      settings = await prisma.websiteSettings.update({
        where: { id: existingSettings.id },
        data: {
          announcementTitle: body.announcementTitle,
          announcementContent: body.announcementContent,
          announcementActive: body.announcementActive,
          marqueeUniversities: body.marqueeUniversities,
          siteTitle: body.siteTitle,
          siteDescription: body.siteDescription,
          contactEmail: body.contactEmail,
          contactPhone: body.contactPhone,
          facebookUrl: body.facebookUrl,
          twitterUrl: body.twitterUrl,
          instagramUrl: body.instagramUrl,
          linkedinUrl: body.linkedinUrl,
          metaTitle: body.metaTitle,
          metaDescription: body.metaDescription,
          metaKeywords: body.metaKeywords,
        }
      })
    } else {
      // Create new settings
      settings = await prisma.websiteSettings.create({
        data: {
          announcementTitle: body.announcementTitle,
          announcementContent: body.announcementContent,
          announcementActive: body.announcementActive,
          marqueeUniversities: body.marqueeUniversities,
          siteTitle: body.siteTitle,
          siteDescription: body.siteDescription,
          contactEmail: body.contactEmail,
          contactPhone: body.contactPhone,
          facebookUrl: body.facebookUrl,
          twitterUrl: body.twitterUrl,
          instagramUrl: body.instagramUrl,
          linkedinUrl: body.linkedinUrl,
          metaTitle: body.metaTitle,
          metaDescription: body.metaDescription,
          metaKeywords: body.metaKeywords,
        }
      })
    }

    return NextResponse.json({
      message: "Website settings updated successfully",
      settings
    }, { status: 200 })
  } catch (error) {
    console.error("Error updating website settings:", error)
    return NextResponse.json({ error: "Failed to update website settings" }, { status: 500 })
  }
}