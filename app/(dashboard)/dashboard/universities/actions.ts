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

  // Convert JSON fields to strings for SQLite compatibility
  const processedData = {
    ...universityData,
    contact: universityData.contact ? JSON.stringify(universityData.contact) : null,
    exams: universityData.exams ? JSON.stringify(universityData.exams) : null,
    courses: universityData.courses ? JSON.stringify(universityData.courses) : null,
    tags: universityData.tags ? JSON.stringify(universityData.tags) : null,
    intakeSeasons: universityData.intakeSeasons ? JSON.stringify(universityData.intakeSeasons) : null,
    galleryImageUrls: universityData.galleryImageUrls ? JSON.stringify(universityData.galleryImageUrls) : null,
  }

  try {
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
    console.error(error)
    return { success: false, error: "An unexpected error occurred." }
  }
}

export async function deleteUniversity(id: string) {
  try {
    await prisma.university.delete({
      where: { id },
    })
    revalidatePath("/admin/universities")
    revalidatePath("/universities")
  } catch (error) {
    console.error(error)
    // Handle specific errors like record not found if necessary
  }
}