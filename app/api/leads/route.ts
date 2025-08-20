import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone } = body

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        contacted: false,
        status: "NEW",
      },
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}
