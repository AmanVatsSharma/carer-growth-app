//app/universites/action.ts
"use server"

import { revalidatePath } from "next/cache"
import { universitySchema } from "@/lib/validators/university"
import { prisma } from "@/lib/prisma"


export async function createOrUpdateUniversity(data: unknown) {
  const result = universitySchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors }
  }
  
  const { id, ...universityData } = result.data

  // For PostgreSQL, JSON fields are handled directly (no string conversion needed)
  const processedData = {
    ...universityData,
    contact: universityData.contact || null,
    exams: universityData.exams || null,
    courses: universityData.courses || null,
    tags: universityData.tags || null,
    intakeSeasons: universityData.intakeSeasons || null,
    galleryImageUrls: universityData.galleryImageUrls || null,
  }

  try {
    // Check database connection first
    await prisma.$queryRaw`SELECT 1`
    
    if (id) {
      // Update existing university
      await prisma.university.update({
        where: { id },
        data: processedData,
      })
    } else {
      // Create new university
      await prisma.university.create({
        data: processedData,
      })
    }

    revalidatePath("/dashboard/universities") // Refresh the admin page
    revalidatePath("/universities")      // Refresh the public page
    return { success: true }
  } catch (error) {
    console.error("Database error:", error)
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      return { success: false, error: "Database server is currently unavailable. Please try again later." }
    }
    return { success: false, error: "An unexpected error occurred." }
  }
}

export async function deleteUniversity(id: string) {
  try {
    // Check database connection first
    await prisma.$queryRaw`SELECT 1`
    
    await prisma.university.delete({
      where: { id },
    })
    revalidatePath("/dashboard/universities")
    revalidatePath("/universities")
  } catch (error) {
    console.error("Database error:", error)
    if (error instanceof Error && error.message.includes("Can't reach database server")) {
      throw new Error("Database server is currently unavailable. Please try again later.")
    }
    // Handle specific errors like record not found if necessary
    throw error
  }
}