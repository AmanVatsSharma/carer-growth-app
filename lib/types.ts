export interface LeadFormData {
  // Personal Information
  name: string
  email?: string
  phone?: string
  currentCity: string
  aboutYourself?: string

  // Study Preferences
  preferredCountry: string
  intakeTimeline: string
  studyLevel: string
  currentEducation: string
  passportStatus: string
}

export interface Country {
  code: string
  name: string
  flag: string
}

export const COUNTRIES: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
]

export const INTAKE_TIMELINES = ["Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026", "Not decided yet"]

export const STUDY_LEVELS = ["Bachelors", "Masters", "PhD", "MBA", "Diploma/Certificate", "Other", "Not decided yet"]

export const EDUCATION_LEVELS = ["High School", "Graduate", "Post Graduate", "Working Professional", "Other"]

export const PASSPORT_STATUS = ["Have valid passport", "Passport expired", "Applied for passport", "No passport yet"]
