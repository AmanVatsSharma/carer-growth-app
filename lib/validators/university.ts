import { z } from "zod"

export const universitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Name must be at least 3 characters long."),
  slug: z.string().min(3, "Slug must be at least 3 characters long."),
  country: z.string().min(2, "Country is required."),
  city: z.string().optional(),
  shortDescription: z.string().optional(),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  // Add validation for all other fields from your Prisma schema
  // For simplicity, we're keeping this brief.
  visaSupport: z.boolean().default(false),
  accommodation: z.boolean().default(false),
  forex: z.boolean().default(false),
  counselling: z.boolean().default(false),
  applicationFeeWaiver: z.boolean().default(false),
  scholarshipsHelp: z.boolean().default(false),
})

export type UniversityFormData = z.infer<typeof universitySchema>