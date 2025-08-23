import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import type { LeadFormData } from "@/lib/types"

export async function POST(request: NextRequest) {
  try {
    const data: LeadFormData = await request.json()

    const lead = await prisma.heavyLead.create({
      data: {
        name: data.name,
        email: data.email || null,
        phone: data.phone || null,
        currentCity: data.currentCity,
        aboutYourself: data.aboutYourself || null,
        preferredCountry: data.preferredCountry,
        intakeTimeline: data.intakeTimeline,
        studyLevel: data.studyLevel,
        currentEducation: data.currentEducation,
        passportStatus: data.passportStatus,
        status: "NEW",
      },
    })

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const leads = await prisma.heavyLead.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}
