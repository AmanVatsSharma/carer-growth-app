// Backend-friendly alias for contact email usage
// Prefer importing from here in server code to avoid client-only constraints

import { getContactEmail } from "./contact"

export const CONTACT_EMAIL = getContactEmail()


