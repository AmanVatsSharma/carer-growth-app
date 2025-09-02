"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, GraduationCap } from "lucide-react"
import Image from "next/image"

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "4,000+",
    programs: "Top MBA & Engineering",
    description: "Home to world's leading universities like Harvard, MIT, and Stanford",
    image:
      "/pictures/nik-shuliahin-L4JWn8HHJ30-unsplash.jpg",
    students: "1.1M",
    topUni: "Harvard University",
    link: "/country/usa"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    programs: "Research Excellence",
    description: "Historic academic tradition with Oxford, Cambridge, and Imperial College",
    image:
      "/pictures/marcin-nowak-iXqTqC-f6jI-unsplash.jpg",
    students: "5000+",
    topUni: "University of Oxford",
    link: "/country/uk"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "200+",
    programs: "Immigration Friendly",
    description: "Quality education with work opportunities and pathway to PR",
    image:
      "/pictures/conor-samuel-Onadzzr1yBU-unsplash.jpg",
    students: "800K",
    topUni: "University of Toronto",
    link: "/country/canada"
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    universities: "400+",
    programs: "Engineering & Tech",
    description: "Tuition-free public universities with world-class engineering programs",
    image:
      "/pictures/maheshkumar-painam-HF-lFqdOMF8-unsplash.jpg",
    students: "400K",
    topUni: "TU Munich",
    link: "/country/germany"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "40+",
    programs: "Research & Innovation",
    description: "High quality of life with excellent research opportunities",
    image:
      "/pictures/caleb-JmuyB_LibRo-unsplash.jpg",
    students: "700K",
    topUni: "University of Melbourne",
    link: "/country/australia"
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "8+",
    programs: "Adventure & Learning",
    description: "Safe and welcoming environment with stunning natural beauty",
    image:
      "/pictures/dan-freeman-hIKVSVKH7No-unsplash.jpg",
    students: "50K",
    topUni: "University of Auckland",
    link: "/country/new-zealand"
  },
]

export function FeaturedCountries() {
  return (
    <section className=" relative py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Image
        src={'/patterns/anton-sobotyak-K_PfDu_z45M-unsplash.jpg'}
        alt="Background Image"
        // width={1920}
        // height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:hidden"
        fill
        quality={90}
      />
      <Image
        src={'/patterns/adrien-brunat-OJRNWoGWbLA-unsplash.jpg'}
        alt="Background Image"
        // width={1920}
        // height={1080}
        className="absolute inset-0 h-full object-cover opacity-30 hidden sm:flex w-screen"
        fill
        quality={90}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Top Study Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover world-class education opportunities across the globe with our expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
                onClick={() => window.location.href = country.link}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={`${country.name} university campus`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={800}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-3xl">{country.flag}</span>
                    <Badge className="bg-white/90 text-black font-bold">{country.universities} Universities</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">Top University</div>
                    <div className="font-bold">{country.topUni}</div>
                  </div>
                </div>

                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-montserrat mb-2 group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{country.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <div>
                          <div className="text-sm font-bold">{country.students}</div>
                          <div className="text-xs text-muted-foreground">Int'l Students</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        <div>
                          <div className="text-sm font-bold">{country.programs}</div>
                          <div className="text-xs text-muted-foreground">Specialization</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-purple-600/30 text-purple-600">
                        {country.programs}
                      </Badge>
                      <div className="text-sm text-blue-600 font-medium group-hover:text-purple-600 transition-colors flex items-center gap-1">
                        Explore Programs
                        <MapPin className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
