import { z } from "zod"

const courseSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Course name is required"),
  level: z.enum(["Undergraduate", "Postgraduate", "Diploma", "Certificate"]),
  duration: z.string().optional(),
  tuitionPerYearUSD: z.number().optional(),
  eligibility: z.string().optional(),
})

export const universitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Name must be at least 3 characters long."),
  slug: z.string().min(3, "Slug must be at least 3 characters long."),
  country: z.string().min(2, "Country is required."),
  city: z.string().optional().default(""),
  logoUrl: z.string().optional().default(""),
  heroImageUrl: z.string().optional().default(""),
  shortDescription: z.string().optional().default(""),
  description: z.string().optional().default(""),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  contact: z.any().optional().default({}),
  exams: z.array(z.string()).default([]),
  visaSupport: z.boolean().default(false),
  accommodation: z.boolean().default(false),
  forex: z.boolean().default(false),
  counselling: z.boolean().default(false),
  applicationFeeWaiver: z.boolean().default(false),
  scholarshipsHelp: z.boolean().default(false),
  courses: z.array(courseSchema).default([]),
  tags: z.array(z.string()).default([]),
  // Additional fields for enhanced university information
  qsRanking: z.number().int().positive("QS Ranking must be a positive integer.").optional(),
  tuitionFeeFrom: z.number().int().min(0, "Tuition fee must be non-negative.").optional(),
  tuitionFeeTo: z.number().int().min(0, "Tuition fee must be non-negative.").optional(),
  intakeSeasons: z.array(z.string()).default([]),
  galleryImageUrls: z.array(z.string()).default([]),
})

export type UniversityFormData = z.infer<typeof universitySchema>