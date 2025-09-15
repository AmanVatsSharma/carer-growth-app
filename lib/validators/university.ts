import { z } from "zod"

export const universitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Name must be at least 3 characters long."),
  slug: z.string().min(3, "Slug must be at least 3 characters long."),
  country: z.string().min(2, "Country is required."),
  city: z.string().optional(),
  logoUrl: z.string().optional(),
  heroImageUrl: z.string().optional(),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  contact: z.object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
  exams: z.array(z.string()).default([]),
  visaSupport: z.boolean().default(false),
  accommodation: z.boolean().default(false),
  forex: z.boolean().default(false),
  counselling: z.boolean().default(false),
  applicationFeeWaiver: z.boolean().default(false),
  scholarshipsHelp: z.boolean().default(false),
  courses: z.array(z.object({
    name: z.string(),
    level: z.enum(["Undergraduate", "Postgraduate", "Diploma", "Certificate"]),
    duration: z.string().optional(),
    tuitionPerYearUSD: z.number().optional(),
    eligibility: z.string().optional(),
  })).default([]),
  tags: z.array(z.string()).default([]),
  tuitionFeeFrom: z.number().optional(),
  tuitionFeeTo: z.number().optional(),
  qsRanking: z.number().optional(),
  intakeSeasons: z.array(z.string()).default([]),
  galleryImageUrls: z.array(z.string()).default([]),
})

export type UniversityFormData = z.infer<typeof universitySchema>