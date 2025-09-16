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
          heroTitle: "Your Future Awaits",
          heroSubtitle: "Unlock Your Global Career & Study Dreams",
          heroDescription: "Step into a world of opportunity. We specialize in crafting international careers and educational journeys tailored to your ambitions.",
          heroVideoUrl: "https://firebasestorage.googleapis.com/v0/b/theaweshop.appspot.com/o/IPD-Education%2Foutput.mp4?alt=media&token=d14f69bc-4def-48df-9fa6-aa52802bdc76",
          heroVideoPoster: "/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg",
          ctaTitle: "Find Your Dream Career Abroad Today.",
          ctaDescription: "Empowering Students to achieve academic and career success.",
          ctaButtonText: "Book a call",
          valuePropTitle: "Your Seamless Path to Studying Abroad.",
          valuePropDescription: "Applying to international institutions can be complex. We simplify every step, providing clarity and support so you can focus on your future.",
          sectionsGroupTitle: "Discover Your Path to Global Success",
          sectionsGroupDescription: "Explore endless opportunities for international education and career growth.",
          faqTitle: "Frequently Asked Questions",
          faqDescription: "Get answers to common questions about studying abroad.",
          faqItems: [
            { question: "How do I start my study abroad journey?", answer: "Begin by exploring our country guides and university listings to find the perfect match for your academic goals." },
            { question: "What documents do I need?", answer: "Typically, you'll need academic transcripts, language test scores, passport, and visa documents. We'll guide you through the complete process." },
            { question: "How long does the application process take?", answer: "The timeline varies by country and institution, but generally takes 3-6 months from application to enrollment." }
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
          heroTitle: body.heroTitle,
          heroSubtitle: body.heroSubtitle,
          heroDescription: body.heroDescription,
          heroVideoUrl: body.heroVideoUrl,
          heroVideoPoster: body.heroVideoPoster,
          ctaTitle: body.ctaTitle,
          ctaDescription: body.ctaDescription,
          ctaButtonText: body.ctaButtonText,
          valuePropTitle: body.valuePropTitle,
          valuePropDescription: body.valuePropDescription,
          sectionsGroupTitle: body.sectionsGroupTitle,
          sectionsGroupDescription: body.sectionsGroupDescription,
          faqTitle: body.faqTitle,
          faqDescription: body.faqDescription,
          faqItems: body.faqItems,
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
          heroTitle: body.heroTitle,
          heroSubtitle: body.heroSubtitle,
          heroDescription: body.heroDescription,
          heroVideoUrl: body.heroVideoUrl,
          heroVideoPoster: body.heroVideoPoster,
          ctaTitle: body.ctaTitle,
          ctaDescription: body.ctaDescription,
          ctaButtonText: body.ctaButtonText,
          valuePropTitle: body.valuePropTitle,
          valuePropDescription: body.valuePropDescription,
          sectionsGroupTitle: body.sectionsGroupTitle,
          sectionsGroupDescription: body.sectionsGroupDescription,
          faqTitle: body.faqTitle,
          faqDescription: body.faqDescription,
          faqItems: body.faqItems,
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