"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Globe } from "lucide-react"
import { FeaturedCountries } from "./featured-countries"
import { PopularExams } from "./popular-exams"
import { ScholarshipOpportunities } from "./scholarship-opportunities"
import { StickyCTA } from "./sticky-cta"
import Image from "next/image"
import JourneyModal from "../journey-modal/journey-modal"

export default function SectionsGroup() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <Image
          src={'/patterns/anton-sobotyak-K_PfDu_z45M-unsplash.jpg'}
          alt="Background Image"
          // width={1920}
          // height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          fill
          quality={90}
        />
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Students studying abroad at international university"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-purple-900/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Trusted by 5000+ Students</span>
              <Star className="w-6 h-6 text-yellow-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black font-montserrat mb-6 leading-tight">
              Your Gateway to
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent block">
                World-Class Education
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Expert guidance for studying abroad • Scholarship assistance • Test preparation • Visa support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <JourneyModal className="p-0">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold group"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </JourneyModal>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-bold group bg-transparent"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-black text-blue-400 mb-2">5000+</div>
                <div className="text-sm opacity-80 flex flex-col md:flex items-center justify-center gap-3 md:gap-1">
                  <Users className="w-8 h-8" />
                  Students Placed
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-black text-purple-400 mb-2">25+</div>
                <div className="text-sm opacity-80 flex flex-col md:flex items-center justify-center gap-3 md:gap-1">
                  <Globe className="w-8 h-8" />
                  Countries Network
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-black text-yellow-400 mb-2">98%</div>
                <div className="text-sm opacity-80 flex flex-col md:flex items-center justify-center gap-3 md:gap-1">
                  <Star className="w-8 h-8" />
                  Success Rate Acheived
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedCountries />
      <PopularExams />
      <ScholarshipOpportunities />
      <StickyCTA />
    </main>
  )
}
