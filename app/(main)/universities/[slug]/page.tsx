// app/universities/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { getUniversityBySlug } from "@/lib/universities-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, DollarSign, MapPin, Globe, Clock, CheckCircle } from "lucide-react"


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

  const keyInfo = [
    { icon: Award, label: "QS Ranking", value: uni.qsRanking ? `#${uni.qsRanking}` : "N/A" },
    { icon: DollarSign, label: "Avg. Tuition", value: uni.tuitionFeeFrom ? `$${(uni.tuitionFeeFrom / 1000).toFixed(0)}k - $${(uni.tuitionFeeTo / 1000).toFixed(0)}k` : "N/A" },
    { icon: Clock, label: "Intakes", value: uni.intakeSeasons?.join(", ") || "Varies" },
    { icon: MapPin, label: "Location", value: `${uni.city}, ${uni.country}` },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10">
      {/* --- HERO SECTION --- */}
      <header className="relative mb-8 overflow-hidden rounded-lg border">
        <img
          src={uni.heroImageUrl || "/placeholder.svg?height=400&width=1200&query=university"}
          alt={`${uni.name} campus`}
          className="h-64 w-full object-cover md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={uni.logoUrl || "/placeholder.svg?height=80&width=80&query=logo"}
                        alt={`${uni.name} logo`}
                        className="h-16 w-16 md:h-20 md:w-20 rounded-lg border-2 border-background"
                    />
                    <div>
                        <h1 className="text-balance text-3xl font-bold md:text-4xl">{uni.name}</h1>
                        <p className="text-sm text-muted-foreground">{uni.country}</p>
                    </div>
                </div>
                 <div className="flex flex-wrap items-center gap-2">
                    {(uni.exams || []).slice(0,4).map((e) => <Badge key={e} variant="secondary">{e}</Badge>)}
                </div>
            </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* --- LEFT (MAIN CONTENT) --- */}
        <div className="md:col-span-8">
            <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="campus">Campus Life</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>About {uni.name}</CardTitle></CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-muted-foreground">
                            <p>{uni.description || "This prestigious university offers world-class education with cutting-edge research facilities, diverse academic programs, and a vibrant international community. Our comprehensive support services help international students succeed in their academic journey."}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Accepted Exams</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {(uni.exams || []).map((e) => <Badge key={e} variant="secondary">{e}</Badge>)}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="courses">
                    <Card>
                        <CardHeader><CardTitle>Programs Offered</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {/* Assuming uni.courses is now an array of Course objects */}
                            {(uni.courses || []).map((c) => (
                                <div key={c.id} className="rounded-md border p-4">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                            <div className="font-medium">{c.name}</div>
                                            <div className="text-xs text-muted-foreground">{c.level} • {c.duration}</div>
                                        </div>
                                        {c.tuitionPerYearUSD && <Badge>~${c.tuitionPerYearUSD.toLocaleString()}/yr</Badge>}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                 <TabsContent value="campus">
                    <Card>
                        <CardHeader><CardTitle>Gallery</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                           {(uni.galleryImageUrls || []).map((url, idx) => (
                                <img key={idx} src={url} alt={`${uni.name} campus view ${idx+1}`} className="rounded-lg aspect-video object-cover"/>
                           ))}
                           {(!uni.galleryImageUrls || uni.galleryImageUrls.length === 0) && <p className="text-sm text-muted-foreground col-span-full">No campus images available yet.</p>}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

        {/* --- RIGHT (SIDEBAR) --- */}
        <aside className="md:col-span-4 space-y-6">
             <Card>
                <CardHeader><CardTitle>Key Information</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                    {keyInfo.map(item => (
                        <div key={item.label} className="flex items-center text-sm">
                            <item.icon className="h-4 w-4 mr-3 text-muted-foreground" />
                            <span className="font-medium">{item.label}:</span>
                            <span className="ml-auto text-muted-foreground">{item.value}</span>
                        </div>
                    ))}
                    {uni.website && (
                         <div className="flex items-center text-sm">
                            <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                            <span className="font-medium">Website:</span>
                            <a href={uni.website} target="_blank" rel="noreferrer" className="ml-auto text-primary hover:underline truncate">Visit Website</a>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card className="sticky top-24" id="contact">
                <CardHeader><CardTitle>IPD Education Support</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground mb-4">Get end-to-end support for your application to {uni.name}.</p>
                    <Feature label="Visa Guidance" ok={!!uni.visaSupport} />
                    <Feature label="Accommodation Help" ok={!!uni.accommodation} />
                    <Feature label="Scholarships" ok={!!uni.scholarshipsHelp} />
                    <Button className="w-full mt-4">Enquire Now</Button>
                </CardContent>
            </Card>
        </aside>
      </div>
    </main>
  )
}

function Feature({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <CheckCircle className={`h-4 w-4 ${ok ? "text-green-500" : "text-muted-foreground/50"}`} />
      <span>{label}</span>
    </div>
  )
}
