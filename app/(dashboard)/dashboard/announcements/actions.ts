"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const announcementSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, "Title must be at least 3 characters long."),
  content: z.string().min(10, "Content must be at least 10 characters long."),
})

export async function createOrUpdateAnnouncement(data: unknown) {
  const result = announcementSchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors }
  }
  
  const { id, ...announcementData } = result.data

  try {
    if (id) {
      // Update existing announcement
      await prisma.announcement.update({
        where: { id },
        data: announcementData,
      })
    } else {
      // Create new announcement
      await prisma.announcement.create({
        data: announcementData,
      })
    }

    revalidatePath("/dashboard/announcements")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "An unexpected error occurred." }
  }
}

export async function deleteAnnouncement(id: string) {
  try {
    await prisma.announcement.delete({
      where: { id },
    })
    revalidatePath("/dashboard/announcements")
    revalidatePath("/")
  } catch (error) {
    console.error(error)
  }
}
