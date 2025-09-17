// app/universities/page.tsx

import { getUniversities, getAllCountries, getAllExams } from "@/lib/universities-data"
import { UniversitiesView } from "@/components/universities/universities-view"

export const metadata = {
  title: "Universities | IPD Education",
  description:
    "Explore universities worldwide. Filter by country, exams, and services. Get visa, accommodation, forex, and counselling support from IPD Education.",
}

export default async function UniversitiesPage({
  searchParams,
}: {
  searchParams: { q?: string; country?: string; exam?: string; service?: string }
}) {
  // Data fetching remains on the server for speed and SEO
  const [countries, exams, universities] = await Promise.all([
    getAllCountries(),
    getAllExams(),
    getUniversities({
      q: searchParams.q,
      country: searchParams.country,
      exam: searchParams.exam,
      service: searchParams.service,
    }),
  ])

  // Pass the server-fetched data as props to the client component
  return <UniversitiesView countries={countries} exams={exams} universities={universities} />
}