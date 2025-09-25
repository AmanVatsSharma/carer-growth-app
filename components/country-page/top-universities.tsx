"use client"

import { motion } from "framer-motion"
import type { Country } from "@/lib/country-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy } from "lucide-react"
import Image from "next/image"

interface TopUniversitiesProps {
  country: Country
}

export function TopUniversities({ country }: TopUniversitiesProps) {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[TopUniversities]", { country: country.name, count: country.universities?.length })
  }
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top Universities in <span className="modern-gradient bg-clip-text text-transparent text-foreground md:text-transparent">{country.name}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Study at world-renowned institutions that shape global leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 premium-glow overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center premium-pulse ring-1 ring-border/60 bg-background/60 backdrop-blur-sm"
                      style={{
                        background: `oklch(0.65 0.25 260 / 0.1)`,
                        border: `2px solid oklch(0.65 0.25 260 / 0.3)`,
                      }}
                    >
                      <div className="relative w-14 h-14">
                        <Image
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <h3
                    className="text-xl font-bold text-center mb-2 transition-colors duration-300"
                    style={{
                      color: "oklch(0.65 0.25 260)",
                    }}
                  >
                    {university.name}
                  </h3>
                  <div className="text-center text-sm text-muted-foreground mb-4">{country.name}</div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Badge
                        className="text-white border-0 hover:scale-105 transition-all duration-300"
                        style={{
                          background: "oklch(0.65 0.25 260 / 0.2)",
                          color: "oklch(0.65 0.25 260)",
                          borderColor: "oklch(0.65 0.25 260 / 0.3)",
                        }}
                      >
                        <Trophy className="w-3 h-3 mr-1" />
                        {university.ranking}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {university.location}
                    </div>
                  </div>

                  {/* Explore CTA */}
                  <div className="mt-6 text-center">
                    <button
                      className="px-4 py-2 text-sm rounded-full border border-border hover:border-foreground/60 transition-colors"
                      aria-label={`Explore ${university.name}`}
                    >
                      Explore
                    </button>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 h-1 modern-gradient rounded-full origin-left"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
