import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { contacted, status } = body

    const updateData: any = {}
    if (typeof contacted === "boolean") {
      updateData.contacted = contacted
    }
    if (status) {
      updateData.status = status
    }

    const lead = await prisma.lead.update({
      where: { id: params.id },
      data: updateData,
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error("Error updating lead:", error)
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.lead.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting lead:", error)
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 })
  }
}
