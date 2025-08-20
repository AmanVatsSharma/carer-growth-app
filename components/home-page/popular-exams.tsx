"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Award, TrendingUp, Target } from "lucide-react"
import Image from "next/image"

const exams = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    icon: BookOpen,
    duration: "2h 45m",
    difficulty: "Intermediate",
    acceptedBy: "10,000+",
    description: "Most widely accepted English proficiency test worldwide",
    features: ["Speaking", "Listening", "Reading", "Writing"],
    color: "from-blue-500/20 to-cyan-500/20",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgScore: "6.5",
    passRate: "78%",
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    icon: Users,
    duration: "3h",
    difficulty: "Advanced",
    acceptedBy: "11,500+",
    description: "Preferred by US universities and institutions",
    features: ["Academic Focus", "Internet-based", "Integrated Tasks"],
    color: "from-green-500/20 to-emerald-500/20",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgScore: "85",
    passRate: "72%",
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examination",
    icon: Award,
    duration: "3h 45m",
    difficulty: "Advanced",
    acceptedBy: "1,200+",
    description: "Gateway to graduate school admissions",
    features: ["Quantitative", "Verbal", "Analytical Writing"],
    color: "from-purple-500/20 to-violet-500/20",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgScore: "310",
    passRate: "65%",
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    icon: Clock,
    duration: "3h 7m",
    difficulty: "Expert",
    acceptedBy: "7,000+",
    description: "Essential for MBA and business school applications",
    features: ["Data Insights", "Verbal", "Quantitative"],
    color: "from-orange-500/20 to-red-500/20",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgScore: "650",
    passRate: "58%",
  },
]

export function PopularExams() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-background to-blue-50/30 dark:from-slate-900/50 dark:via-background dark:to-blue-900/10">
      <Image
        src={'/patterns/istockphoto-1294603953-1024x1024.jpg'}
        alt="Background Image"
        // width={1920}
        // height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:hidden"
        fill
        quality={90}
      />
      <Image
        src={'/patterns/ottr-dan-D4PohKKjNlM-unsplash.jpg'}
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
          <h2 className="text-4xl md:text-5xl font-black font-montserrat bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Master Your Test Prep
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert coaching for the tests that open doors to your dream university
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="cursor-pointer"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={exam.image || "/placeholder.svg"}
                    alt={`${exam.name} test preparation`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-black font-bold">{exam.acceptedBy} Institutions</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-black">{exam.name}</div>
                    <div className="text-sm opacity-90">{exam.fullName}</div>
                  </div>
                </div>

                <CardContent className="p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exam.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exam.description}</p>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{exam.duration}</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{exam.avgScore}</div>
                        <div className="text-xs text-muted-foreground">Avg Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{exam.passRate}</div>
                        <div className="text-xs text-muted-foreground">Pass Rate</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="border-orange-500/30 text-orange-600 text-xs">
                          {exam.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exam.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="bg-muted/50 text-foreground text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-blue-600 font-medium group-hover:text-purple-600 transition-colors flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        Start Preparation
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">High Success</span>
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
