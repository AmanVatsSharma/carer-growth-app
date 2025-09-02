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

  try {
    if (id) {
      // Update existing university
      await prisma.university.update({
        where: { id },
        data: universityData,
      })
    } else {
      // Create new university
      await prisma.university.create({
        data: universityData,
      })
    }

    revalidatePath("/admin/universities") // Refresh the admin page
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