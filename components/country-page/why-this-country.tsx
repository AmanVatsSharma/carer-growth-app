"use client"

import { motion } from "framer-motion"
import type { Country } from "@/lib/country-data"
import { Card, CardContent } from "@/components/ui/card"

interface WhyThisCountryProps {
  country: Country
}

export function WhyThisCountry({ country }: WhyThisCountryProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="modern-gradient bg-clip-text text-transparent">{country.name}</span>?
          </h2>
          <div className="w-24 h-1 modern-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 premium-glow">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-4xl mb-4 premium-pulse"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
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
