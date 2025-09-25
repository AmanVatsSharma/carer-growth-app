"use client"

import { motion } from "framer-motion"
import type { Country } from "@/lib/country-data"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import JourneyModal from "../journey-modal/journey-modal"
import Image from "next/image"

interface HeroBannerProps {
  country: Country
}

export function HeroBanner({ country }: HeroBannerProps) {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[HeroBanner]", { country: country.name, heroImage: country.heroImage })
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={country.heroImage || "/placeholder.svg"}
          alt={`Study in ${country.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-black/40 to-transparent" />
        {/* Decorative blurred shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: "oklch(0.65 0.25 260)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: "oklch(0.8 0.18 200)" }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full premium-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `oklch(${0.65 + Math.random() * 0.2} 0.25 ${260 + Math.random() * 40})`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Flag and Country Name */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-6xl">{country.flag}</span>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-[oklch(0.65_0.25_260)] to-transparent" />
            <h1 className="text-2xl font-bold text-white" style={{ color: "oklch(0.65 0.25 260)" }}>
              {country.name}
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Study in <span className="modern-gradient bg-clip-text text-transparent text-white/90 md:text-transparent">{country.name}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {country.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <JourneyModal>

              <Button
                size="lg"
                className="modern-gradient text-white font-bold px-8 py-4 text-lg premium-glow group hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </JourneyModal>
            <Button
              variant="outline"
              size="lg"
              className="border-2 px-8 py-4 text-lg bg-transparent glass-effect hover:scale-105 transition-all duration-300"
              style={{
                borderColor: "oklch(0.65 0.25 260)",
                color: "oklch(0.65 0.25 260)",
              }}
            >
              Explore Universities
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "oklch(0.65 0.25 260)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: "oklch(0.65 0.25 260)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
