// app/universities/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { getUniversityBySlug } from "@/lib/universities-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, DollarSign, MapPin, Globe, Clock, CheckCircle, GraduationCap } from "lucide-react"

// Force dynamic rendering to avoid build-time DB queries
export const dynamic = 'force-dynamic'

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
      {/* --- ENHANCED HERO SECTION --- */}
      <header className="relative mb-12 overflow-hidden rounded-2xl border shadow-2xl">
        <div className="relative h-80 md:h-96">
          <img
            src={uni.heroImageUrl || "/placeholder.svg?height=400&width=1200&query=university"}
            alt={`${uni.name} campus`}
            className="h-full w-full object-cover"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        
        {/* Hero content with enhanced styling */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={uni.logoUrl || "/placeholder.svg?height=80&width=80&query=logo"}
                  alt={`${uni.name} logo`}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-xl border-4 border-white/20 shadow-xl backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              <div className="space-y-2">
                <h1 className="text-balance text-4xl font-bold md:text-5xl text-white drop-shadow-lg">
                  {uni.name}
                </h1>
                <div className="flex items-center gap-3">
                  <p className="text-lg text-white/90 font-medium">{uni.country}</p>
                  {uni.city && (
                    <>
                      <span className="text-white/60">•</span>
                      <p className="text-white/80">{uni.city}</p>
                    </>
                  )}
                </div>
                {uni.qsRanking && (
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-white/90 font-semibold">QS World Ranking #{uni.qsRanking}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Enhanced exam badges */}
            <div className="flex flex-wrap items-center gap-2">
              {(uni.exams || []).slice(0, 4).map((exam) => (
                <Badge 
                  key={exam} 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  {exam}
                </Badge>
              ))}
              {(uni.exams || []).length > 4 && (
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  +{(uni.exams || []).length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* --- LEFT (MAIN CONTENT) --- */}
        <div className="md:col-span-8">
            <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
                    <TabsTrigger 
                      value="about" 
                      className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger 
                      value="courses" 
                      className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                    >
                      Courses
                    </TabsTrigger>
                    <TabsTrigger 
                      value="campus" 
                      className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                    >
                      Campus Life
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-8">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            About {uni.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                          <p className="text-lg">{uni.description || "Detailed description coming soon."}</p>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl font-semibold">Accepted Exams</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-3">
                            {(uni.exams || []).map((exam) => (
                              <Badge 
                                key={exam} 
                                variant="secondary" 
                                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
                              >
                                {exam}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="courses" className="space-y-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="pb-6">
                          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Programs Offered
                          </CardTitle>
                          <p className="text-muted-foreground">Explore the academic programs available at {uni.name}</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {(uni.courses || []).length === 0 ? (
                              <div className="text-center py-12">
                                <GraduationCap className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                                <p className="text-muted-foreground">Course information will be available soon.</p>
                              </div>
                            ) : (
                              (uni.courses || []).map((course: any, index) => (
                                <div 
                                  key={course.id || index} 
                                  className="group rounded-xl border bg-gradient-to-r from-background to-muted/10 p-6 hover:shadow-md transition-all duration-300 hover:border-primary/20"
                                >
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-2">
                                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {course.name}
                                      </h3>
                                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <Badge variant="outline" className="font-medium">
                                          {course.level}
                                        </Badge>
                                        {course.duration && (
                                          <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {course.duration}
                                          </span>
                                        )}
                                      </div>
                                      {course.eligibility && (
                                        <p className="text-sm text-muted-foreground mt-2">
                                          <strong>Eligibility:</strong> {course.eligibility}
                                        </p>
                                      )}
                                    </div>
                                    {course.tuitionPerYearUSD && (
                                      <div className="text-right">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-lg font-semibold">
                                          ${course.tuitionPerYearUSD.toLocaleString()}/year
                                        </Badge>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                 <TabsContent value="campus" className="space-y-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader className="pb-6">
                          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Campus Gallery
                          </CardTitle>
                          <p className="text-muted-foreground">Explore the beautiful campus of {uni.name}</p>
                        </CardHeader>
                        <CardContent>
                          {(uni.galleryImageUrls || []).length === 0 ? (
                            <div className="text-center py-12">
                              <div className="h-24 w-24 mx-auto bg-muted/20 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="h-12 w-12 text-muted-foreground/50" />
                              </div>
                              <p className="text-muted-foreground">Campus images will be available soon.</p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {(uni.galleryImageUrls || []).map((url, idx) => (
                                <div 
                                  key={idx} 
                                  className="group relative overflow-hidden rounded-xl aspect-video bg-muted"
                                >
                                  <img 
                                    src={url} 
                                    alt={`${uni.name} campus view ${idx+1}`} 
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                      e.currentTarget.src = "/placeholder.svg?height=300&width=400&query=campus"
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm font-medium">Campus View {idx + 1}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

        {/* --- RIGHT (SIDEBAR) --- */}
        <aside className="md:col-span-4 space-y-8">
             <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Key Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {keyInfo.map(item => (
                        <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <item.icon className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium text-sm">{item.label}</span>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">{item.value}</span>
                        </div>
                    ))}
                    {uni.website && (
                         <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Globe className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium text-sm">Website</span>
                            </div>
                            <a 
                              href={uni.website} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-sm text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
                            >
                              Visit Site
                            </a>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card className="sticky top-24 border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10" id="contact">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    IPD Education Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Get comprehensive end-to-end support for your application to {uni.name}. 
                      Our expert team will guide you through every step of the process.
                    </p>
                    
                    <div className="space-y-3">
                      <Feature label="Visa Guidance" ok={!!uni.visaSupport} />
                      <Feature label="Accommodation Help" ok={!!uni.accommodation} />
                      <Feature label="Forex Services" ok={!!uni.forex} />
                      <Feature label="Counselling" ok={!!uni.counselling} />
                      <Feature label="Application Fee Waiver" ok={!!uni.applicationFeeWaiver} />
                      <Feature label="Scholarships Help" ok={!!uni.scholarshipsHelp} />
                    </div>
                    
                    <Button className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Enquire Now
                    </Button>
                </CardContent>
            </Card>
        </aside>
      </div>
    </main>
  )
}

function Feature({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
      <CheckCircle className={`h-5 w-5 ${ok ? "text-green-500" : "text-muted-foreground/50"}`} />
      <span className={`text-sm font-medium ${ok ? "text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
      {ok && (
        <Badge variant="secondary" className="ml-auto text-xs bg-green-100 text-green-700 border-green-200">
          Available
        </Badge>
      )}
    </div>
  )
}
