// Centralized contact email resolution for UI and backend usage.
// - Prefers env var NEXT_PUBLIC_CONTACT_EMAIL
// - Falls back to admissions@ipdeducation.in
// - Basic validation and debug logging for operability

export const DEFAULT_CONTACT_EMAIL = "admissions@ipdeducation.in"

export function getContactEmail(): string {
  try {
    const raw = process.env.NEXT_PUBLIC_CONTACT_EMAIL
    const value = (raw && raw.trim()) || DEFAULT_CONTACT_EMAIL
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.warn("[ContactEmail] Invalid email; falling back to default", { raw })
      return DEFAULT_CONTACT_EMAIL
    }

    // eslint-disable-next-line no-console
    console.debug("[ContactEmail] Using contact email", { source: raw ? "env" : "default", value })
    return value
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[ContactEmail] Unexpected error; using default", error)
    return DEFAULT_CONTACT_EMAIL
  }
}

export function getMailtoHref(): string {
  return `mailto:${getContactEmail()}`
}


