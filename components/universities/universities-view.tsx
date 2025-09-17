// components/universities/universities-view.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { SearchBar } from "@/components/universities/search-bar"
import { Filters } from "@/components/universities/filters"
import { UniversityCard } from "@/components/universities/university-card"
import { IPDSupportBanner } from "@/components/universities/ipd-support-banner"
import type { University, Country, Exam } from "@/lib/universities-data" // Adjust with your actual types

// Define reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

interface UniversitiesViewProps {
  countries: Country[]
  exams: Exam[]
  universities: University[]
}

export function UniversitiesView({ countries, exams, universities }: UniversitiesViewProps) {
  return (
    <motion.main
      className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header variants={itemVariants} className="mb-6 md:mb-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Discover Your Future University
        </h1>
        <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
          Explore top institutions worldwide. IPD Education provides complete support for your journey abroad.
        </p>
      </motion.header>

      <motion.section variants={itemVariants} aria-label="Search" className="mb-6">
        <SearchBar />
      </motion.section>

      <motion.div variants={itemVariants}>
        <IPDSupportBanner />
      </motion.div>

      <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
        <motion.aside variants={itemVariants} className="md:col-span-3">
          <Filters countries={countries} exams={exams} />
        </motion.aside>

        <div className="md:col-span-9">
          <motion.div variants={itemVariants} className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-muted-foreground">
              Showing <span className="font-semibold text-primary">{universities.length}</span> result
              {universities.length === 1 ? "" : "s"}
            </h2>
          </motion.div>

          {/* AnimatePresence handles the exit/enter animations when search results change */}
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {universities.map((u) => (
                <UniversityCard key={u.id} u={u} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  )
}