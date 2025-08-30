import { getUniversities, getAllCountries, getAllExams } from "@/lib/universities-data"
import { SearchBar } from "@/components/universities/search-bar"
import { Filters } from "@/components/universities/filters"
import { UniversityCard } from "@/components/universities/university-card"
import { IPDSupportBanner } from "@/components/universities/ipd-support-banner"

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
  const [countries, exams] = await Promise.all([getAllCountries(), getAllExams()])
  const universities = await getUniversities({
    q: searchParams.q,
    country: searchParams.country,
    exam: searchParams.exam,
    service: searchParams.service,
  })

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <header className="mb-6 md:mb-8">
        <h1 className="text-balance text-3xl font-semibold md:text-4xl">Discover Top Universities</h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          Search and filter universities. IPD Education assists with visas, accommodation, forex at market-low charges,
          counselling, scholarships, and more.
        </p>
      </header>

      <section aria-label="Search" className="mb-6">
        <SearchBar />
      </section>

      <IPDSupportBanner />

      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
        <aside className="md:col-span-3">
          <Filters countries={countries} exams={exams} />
        </aside>
        <div className="md:col-span-9">
          <div className="mb-3 text-sm text-muted-foreground">
            {universities.length} result{universities.length === 1 ? "" : "s"}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {universities.map((u) => (
              <UniversityCard key={u.id} u={u} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
