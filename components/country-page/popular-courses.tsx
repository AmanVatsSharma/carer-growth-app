"use client"

import { motion } from "framer-motion"
import type { Country } from "@/lib/country-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, BookOpen, ArrowRight } from "lucide-react"

interface PopularCoursesProps {
  country: Country
}

export function PopularCourses({ country }: PopularCoursesProps) {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[PopularCourses]", { country: country.name, courses: country.popularCourses?.length })
  }
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card/40 to-background overflow-hidden">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.75_0.22_280/.5),transparent_30%),radial-gradient(circle_at_70%_80%,oklch(0.8_0.18_200/.5),transparent_30%)]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular <span className="modern-gradient bg-clip-text text-transparent text-foreground md:text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most sought-after programs that lead to successful careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.popularCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-background/70 backdrop-blur-md border-border/70 hover:border-foreground/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className="text-white border-0"
                      style={{
                        background: "oklch(0.65 0.25 260 / 0.2)",
                        color: "oklch(0.65 0.25 260)",
                      }}
                    >
                      {course.category}
                    </Badge>
                    <BookOpen className="w-5 h-5" style={{ color: "oklch(0.65 0.25 260)" }} />
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: "oklch(0.65 0.25 260)" }}
                  >
                    {course.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Clock className="w-4 h-4 mr-2" style={{ color: "oklch(0.65 0.25 260)" }} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <DollarSign className="w-4 h-4 mr-2" style={{ color: "oklch(0.65 0.25 260)" }} />
                      <span>{course.tuition}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:scale-105 transition-all duration-300 group/btn"
                    style={{
                      borderColor: "oklch(0.65 0.25 260 / 0.3)",
                      color: "oklch(0.65 0.25 260)",
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 h-1 modern-gradient rounded-full origin-left"
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
