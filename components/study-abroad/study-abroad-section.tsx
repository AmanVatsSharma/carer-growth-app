"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, FileText, Plane, Users, Star, ArrowRight, Globe, Award, Clock } from "lucide-react"

const journeySteps = [
  {
    title: "Expert Counseling",
    description:
      "Personalized guidance from certified education consultants to match your aspirations with the perfect course and destination.",
    icon: GraduationCap,
    color: "from-primary/20 to-primary/5",
    delay: 0.1,
  },
  {
    title: "Test Preparation",
    description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT with proven strategies and practice materials.",
    icon: BookOpen,
    color: "from-secondary/20 to-secondary/5",
    delay: 0.2,
  },
  {
    title: "Application Support",
    description:
      "End-to-end application assistance for top universities worldwide with document preparation and submission.",
    icon: FileText,
    color: "from-chart-1/20 to-chart-1/5",
    delay: 0.3,
  },
  {
    title: "Visa Assistance",
    description: "Complete visa support with documentation, interview preparation, and application tracking.",
    icon: Users,
    color: "from-chart-3/20 to-chart-3/5",
    delay: 0.4,
  },
  {
    title: "Pre-Departure",
    description: "Comprehensive briefings, travel assistance, and orientation to ensure a smooth transition abroad.",
    icon: Plane,
    color: "from-accent/20 to-accent/5",
    delay: 0.5,
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    country: "Singapore",
    university: "University of Melbourne",
    course: "Master's in Data Science",
    rating: 5,
    text: "IPD made my dream of studying in Australia a reality. Their counselors were incredibly supportive throughout the entire process.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Raj Patel",
    country: "India",
    university: "University of Toronto",
    course: "MBA",
    rating: 5,
    text: "The visa assistance was exceptional. I got my student visa approved on the first attempt thanks to their expert guidance.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Maria Santos",
    country: "Philippines",
    university: "University of Edinburgh",
    course: "Master's in International Relations",
    rating: 5,
    text: "From test prep to departure, IPD was with me every step. Now I'm living my dream in Scotland!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const stats = [
  { number: "50+", label: "Years of Experience", icon: Clock },
  { number: "800+", label: "Partner Universities", icon: Globe },
  { number: "1M+", label: "Students Placed", icon: GraduationCap },
  { number: "30+", label: "Countries", icon: Award },
]

export default function StudyAbroadSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Your Journey to Global Education
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6">
              How We Make Dreams Reality
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial consultation to your first day abroad, we provide comprehensive support at every step of your
              international education journey.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} whileHover={{ scale: 1.05 }} className="text-center">
              <Card className="p-6 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
                className="relative group"
              >
                <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: step.delay + 0.5, duration: 0.3 }}
                      className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center"
                    >
                      <ArrowRight className="w-3 h-3 text-secondary-foreground" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories from Around the World
            </h3>
            <p className="text-muted-foreground text-lg">
              Hear from students who achieved their dreams with IPD Education
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-lg text-foreground mb-4 italic">"{testimonials[currentTestimonial].text}"</p>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentTestimonial].course} • {testimonials[currentTestimonial].university}
                        </p>
                        <p className="text-xs text-muted-foreground">From {testimonials[currentTestimonial].country}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have achieved their international education dreams with IPD Education.
                Your future starts with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  Book Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
