import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { status, assignedTo, notes } = body

    const updateData: any = {}
    if (status) updateData.status = status
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo
    if (notes !== undefined) updateData.notes = notes

    const lead = await prisma.heavyLead.update({
      where: { id: params.id },
      data: updateData,
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error("Error updating heavy lead:", error)
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.heavyLead.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting heavy lead:", error)
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 })
  }
}
