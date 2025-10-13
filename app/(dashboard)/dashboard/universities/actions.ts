/**
 * UNIVERSITY MANAGEMENT SERVER ACTIONS
 * 
 * Server-side actions for CRUD operations on universities
 * Includes robust error handling and validation
 * 
 * Flow for Create/Update:
 * 1. Validate input data against schema
 * 2. Perform database operation
 * 3. Revalidate cache for affected pages
 * 4. Return success/error response
 * 
 * All operations include comprehensive logging for debugging
 */

"use server"

import { revalidatePath } from "next/cache"
import { universitySchema } from "@/lib/validators/university"
import { prisma } from "@/lib/prisma"

/**
 * Creates a new university or updates an existing one
 * @param data - University data to create/update
 * @returns Success/error response object
 */
export async function createOrUpdateUniversity(data: unknown) {
  console.log('[createOrUpdateUniversity] Starting university create/update operation')
  console.log('[createOrUpdateUniversity] Received data:', data)
  
  // Validate input data against schema
  const result = universitySchema.safeParse(data)

  if (!result.success) {
    console.error('[createOrUpdateUniversity] Validation failed:', result.error.flatten().fieldErrors)
    return { success: false, error: result.error.flatten().fieldErrors }
  }
  
  const { id, ...universityData } = result.data
  console.log('[createOrUpdateUniversity] Validation successful. Operation:', id ? 'UPDATE' : 'CREATE')

  try {
    if (id) {
      // Update existing university
      console.log(`[createOrUpdateUniversity] Updating university with ID: ${id}`)
      await prisma.university.update({
        where: { id },
        data: universityData,
      })
      console.log(`[createOrUpdateUniversity] Successfully updated university: ${universityData.name}`)
    } else {
      // Create new university
      console.log('[createOrUpdateUniversity] Creating new university')
      const newUniversity = await prisma.university.create({
        data: universityData,
      })
      console.log(`[createOrUpdateUniversity] Successfully created university: ${newUniversity.name} (ID: ${newUniversity.id})`)
    }

    // Revalidate cache for affected pages
    console.log('[createOrUpdateUniversity] Revalidating cache paths...')
    revalidatePath("/dashboard/universities") // Refresh the dashboard page
    revalidatePath("/admin/universities")     // Refresh the admin page
    revalidatePath("/universities")           // Refresh the public page
    
    console.log('[createOrUpdateUniversity] Operation completed successfully')
    return { success: true }
    
  } catch (error) {
    console.error('[createOrUpdateUniversity] CRITICAL ERROR: Database operation failed', error)
    console.error('[createOrUpdateUniversity] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: error instanceof Error ? error.constructor.name : typeof error,
      universityId: id,
      universityName: universityData.name
    })
    
    return { 
      success: false, 
      error: `Database error: ${error instanceof Error ? error.message : 'An unexpected error occurred.'}` 
    }
  }
}

/**
 * Deletes a university from the database
 * @param id - University ID to delete
 * @returns Success/error response
 */
export async function deleteUniversity(id: string) {
  console.log(`[deleteUniversity] Starting delete operation for university ID: ${id}`)
  
  try {
    // Attempt to delete the university
    await prisma.university.delete({
      where: { id },
    })
    
    console.log(`[deleteUniversity] Successfully deleted university with ID: ${id}`)
    
    // Revalidate cache for affected pages
    console.log('[deleteUniversity] Revalidating cache paths...')
    revalidatePath("/dashboard/universities")
    revalidatePath("/admin/universities")
    revalidatePath("/universities")
    
    console.log('[deleteUniversity] Delete operation completed successfully')
    return { success: true }
    
  } catch (error) {
    console.error(`[deleteUniversity] CRITICAL ERROR: Failed to delete university ${id}`, error)
    console.error('[deleteUniversity] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: error instanceof Error ? error.constructor.name : typeof error,
      universityId: id
    })
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to delete university' 
    }
  }
}