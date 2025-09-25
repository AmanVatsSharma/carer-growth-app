"use client"

import { motion } from "framer-motion"
import type { Country } from "@/lib/country-data"
import { Card, CardContent } from "@/components/ui/card"

interface WhyThisCountryProps {
  country: Country
}

export function WhyThisCountry({ country }: WhyThisCountryProps) {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[WhyThisCountry]", { country: country.name, benefits: country.benefits?.length })
  }
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card/40 to-background overflow-hidden">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl" style={{ background: "oklch(0.75 0.22 280 / 0.25)" }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.8 0.18 200 / 0.25)" }} />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="modern-gradient bg-clip-text text-transparent text-foreground md:text-transparent">{country.name}</span>?
          </h2>
          <div className="w-24 h-1 modern-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {country.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-background/70 backdrop-blur-md border-border/70 hover:border-foreground/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-5xl mb-6 premium-pulse"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3
                    className="text-2xl font-bold mb-3 transition-colors duration-300"
                    style={{
                      color: "oklch(0.65 0.25 260)",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
