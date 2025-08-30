import Link from "next/link"
import { notFound } from "next/navigation"
import { getUniversityBySlug } from "@/lib/universities-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type PageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  const uni = await getUniversityBySlug(params.slug)
  if (!uni) return {}
  return {
    title: `${uni.name} | IPD Education`,
    description:
      uni.shortDescription || `Learn more about ${uni.name}. Courses, exams, eligibility, and IPD Education support.`,
  }
}

export default async function UniversityDetailPage({ params }: PageProps) {
  const uni = await getUniversityBySlug(params.slug)
  if (!uni) return notFound()

  const services = uni.services || {}

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/universities" className="hover:underline">
          Universities
        </Link>{" "}
        / <span className="text-foreground">{uni.name}</span>
      </nav>

      <header className="overflow-hidden rounded-lg border">
        <div className="relative">
          <img
            src={uni.heroImageUrl || "/placeholder.svg?height=400&width=1200&query=university%20campus"}
            alt={`${uni.name} campus`}
            className="h-56 w-full object-cover md:h-72"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-center gap-3">
            <img
              src={uni.logoUrl || "/placeholder.svg?height=64&width=64&query=university%20logo"}
              alt={`${uni.name} logo`}
              className="h-12 w-12 rounded"
            />
            <div>
              <h1 className="text-balance text-2xl font-semibold md:text-3xl">{uni.name}</h1>
              <p className="text-sm text-muted-foreground">
                {uni.city ? `${uni.city}, ` : ""}
                {uni.country}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {(uni.exams || []).map((e) => (
              <Badge key={e} variant="secondary">
                {e}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-pretty text-muted-foreground">
              <p>
                {uni.description ||
                  uni.shortDescription ||
                  "A leading institution offering diverse programs and world-class research opportunities."}
              </p>
              {uni.website && (
                <p className="mt-3">
                  Website:{" "}
                  <a className="text-primary hover:underline" href={uni.website} target="_blank" rel="noreferrer">
                    {uni.website}
                  </a>
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(uni.courses || []).map((c, idx) => (
                <div key={idx} className="rounded-md border p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {c.level}
                        {c.duration ? ` • ${c.duration}` : ""}
                      </div>
                    </div>
                    {c.tuitionPerYearUSD ? (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Tuition ~ ${c.tuitionPerYearUSD.toLocaleString()}/yr
                      </Badge>
                    ) : null}
                  </div>
                  {c.eligibility && <p className="mt-2 text-sm text-muted-foreground">Eligibility: {c.eligibility}</p>}
                </div>
              ))}
              {(!uni.courses || uni.courses.length === 0) && (
                <p className="text-sm text-muted-foreground">Course details coming soon.</p>
              )}
            </CardContent>
          </Card>

          <Card id="exams">
            <CardHeader>
              <CardTitle>Accepted Exams</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {(uni.exams || []).map((e) => (
                <Badge key={e} variant="secondary">
                  {e}
                </Badge>
              ))}
              {(!uni.exams || uni.exams.length === 0) && (
                <p className="text-sm text-muted-foreground">Exam information coming soon.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Eligibility & Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Eligibility varies by program. Typical requirements include English proficiency (IELTS/TOEFL) and
                relevant academic background.
              </p>
              <p>Our counsellors will evaluate your profile and guide you to the best-fit programs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IPD Education Services</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-2 text-sm">
              <Feature label="Visa Guidance" ok={!!services.visaSupport} />
              <Feature label="Accommodation Support" ok={!!services.accommodation} />
              <Feature label="Forex at Lowest Charges" ok={!!services.forex} />
              <Feature label="Application Counselling" ok={!!services.counselling} />
              <Feature label="Application Fee Waiver" ok={!!services.applicationFeeWaiver} />
              <Feature label="Scholarships Help" ok={!!services.scholarshipsHelp} />
              <p className="text-muted-foreground">And many more services for free. Just contact us.</p>
            </CardContent>
          </Card>

          <Card id="contact">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>Speak to an IPD Education expert for application, visa, and accommodation support.</p>
              <div className="rounded-md border p-3">
                <p>
                  <span className="font-medium">University:</span> {uni.name}
                </p>
                {uni.contact?.email && (
                  <p>
                    <span className="font-medium">Email:</span> {uni.contact.email}
                  </p>
                )}
                {uni.contact?.phone && (
                  <p>
                    <span className="font-medium">Phone:</span> {uni.contact.phone}
                  </p>
                )}
                {uni.contact?.address && (
                  <p className="text-pretty">
                    <span className="font-medium">Address:</span> {uni.contact.address}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Enquire Now</Button>
                <Link href="/universities">
                  <Button variant="secondary">Back to list</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </main>
  )
}

function Feature({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <span>{label}</span>
      <span className={ok ? "text-accent" : "text-muted-foreground"}>{ok ? "Included" : "On request"}</span>
    </div>
  )
}
