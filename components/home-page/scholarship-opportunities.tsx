"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, Globe, Star, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

const scholarships = [
  {
    title: "Merit-Based Scholarships",
    amount: "Up to $50,000",
    icon: Star,
    description: "Awarded for academic excellence and outstanding achievements",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Need-Based Financial Aid",
    amount: "Up to $30,000",
    icon: DollarSign,
    description: "Support for students with demonstrated financial need",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Country-Specific Grants",
    amount: "Up to $25,000",
    icon: Globe,
    description: "Special funding opportunities based on your destination country",
    image:
      "https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function ScholarshipOpportunities() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50/30 dark:from-blue-900/10 dark:via-background dark:to-purple-900/10">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black font-montserrat bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Scholarship Success Stories
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse delay-500" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've helped students secure over $10 million in scholarships. Your success story starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Scholarship Cards */}
          <div className="space-y-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 8 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                        <img
                          src={scholarship.image || "/placeholder.svg"}
                          alt={scholarship.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold font-montserrat group-hover:text-blue-600 transition-colors">
                            {scholarship.title}
                          </h3>
                          <Badge variant="outline" className="border-purple-600/30 text-purple-600 font-bold">
                            {scholarship.amount}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{scholarship.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Main CTA with Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scholarship success stories"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-2xl font-black">$10M+ Secured</div>
                <div className="text-sm opacity-90">In scholarships for our students</div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-500/10 via-card/50 to-purple-500/10 backdrop-blur-sm border-blue-500/20 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <GraduationCap className="w-16 h-16 text-blue-500/20" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-montserrat mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Find Your Perfect Scholarship
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our expert counselors have helped students secure over{" "}
                    <span className="text-blue-600 font-bold">$10 million</span> in scholarships. Let us help you find
                    funding opportunities that match your profile and aspirations.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Personalized scholarship matching</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Application guidance and support</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Essay writing assistance</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold group"
                  >
                    Discover Your Scholarships
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-black font-montserrat text-blue-600 mb-2">$10M+</div>
            <div className="text-muted-foreground">Scholarships Secured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black font-montserrat text-purple-600 mb-2">5,000+</div>
            <div className="text-muted-foreground">Students Helped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black font-montserrat text-green-600 mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black font-montserrat text-orange-600 mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
