"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AdvancedBanner } from "@/components/advanced-banner/AdvancedBanner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  Heart,
  Shield,
  Star,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

// Centralized image mapping for easy swaps and documentation
// Uses a mix of external curated images (Unsplash) and local fallbacks
const IMAGE_SRC = {
  hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
  whoWeAre: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  missionDecor: "https://images.unsplash.com/photo-1581092580691-3007b4d69ce8?auto=format&fit=crop&w=256&q=60",
  visionDecor: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=256&q=60",
  servicesBanner: "/pictures/marcin-nowak-iXqTqC-f6jI-unsplash.jpg",
  alumniBg: "/pictures/sebastian-latorre-rrLyNHc9_Xc-unsplash.jpg",
  services: {
    career: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    selection: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    docs: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    scholarship: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=1200&q=80",
    visa: "https://images.unsplash.com/photo-1560520653-9e0e4c89e8da?auto=format&fit=crop&w=1200&q=80",
    travel: "https://images.unsplash.com/photo-1502920917128-1aa500764ca4?auto=format&fit=crop&w=1200&q=80",
  },
  team: {
    a: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    b: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    c: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
  },
} as const

export default function AboutPage() {
  // Dev-only diagnostics for quick verification and future debugging
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[AboutPage] image map", IMAGE_SRC)
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AdvancedBanner
        id="about-hero"
        layout="centered"
        theme="light"
        badge={{ text: "🌍 Global Education Excellence" }}
        eyebrow="About IPD Education"
        title={<span>Empowering Dreams, Building Futures</span>}
        description={
          <>
            We are your trusted partner in the journey to world-class international education.
          </>
        }
        media={{ type: "image", src: IMAGE_SRC.hero }}
        primaryCta={{ label: "Start Your Journey" }}
        secondaryCta={{ label: "Explore Services", href: "/app/(main)/services" }}
        decoration={{ showRadials: true, showNoise: true }}
        minHeight="60vh"
      />

      {/* Who We Are Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Who We Are</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                IPD Education (International Progressive Degrees Education Pvt. Ltd.) is a trusted study-abroad
                consulting company based in Bengaluru, India. We are dedicated to helping students achieve their dream
                of pursuing higher education in world-class institutions across the globe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a commitment to excellence, transparency, and personalized support, we guide students at every
                stage of their international education journey.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative mb-6 h-64">
                {/* Who we are image (office/action shot) */}
                <Image
                  src={IMAGE_SRC.whoWeAre}
                  alt="IPD Education team and workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Founded on Excellence</h3>
                      <p className="text-muted-foreground">Trusted by thousands of students</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Students Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">50+</div>
                      <div className="text-sm text-muted-foreground">Partner Universities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-20 px-4 bg-card/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  {/* Decorative mission iconography */}
                  <Image src={IMAGE_SRC.missionDecor} alt="Mission" fill sizes="128px" className="object-cover" />
                </div>
                <CardContent className="space-y-6 p-0 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower students with global education opportunities by providing end-to-end support, expert
                    guidance, and access to world-renowned universities. We aim to build a future where every student
                    can achieve success beyond borders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  {/* Decorative vision iconography */}
                  <Image src={IMAGE_SRC.visionDecor} alt="Vision" fill sizes="128px" className="object-cover" />
                </div>
                <CardContent className="space-y-6 p-0 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Eye className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as a leading global education consultancy, trusted for our integrity,
                    professionalism, and ability to connect students with life-changing international opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Do</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive study-abroad solutions tailored to your unique journey
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80">
              {/* Services banner (global city/aspiration) */}
              <Image
                src={IMAGE_SRC.servicesBanner}
                alt="IPD Education services"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Comprehensive Education Services</h3>
                <p className="text-white/90 text-lg">From career counseling to post-arrival support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Career Counselling & Profile Assessment",
                description: "Identifying the best-fit course and country for each student",
                image: IMAGE_SRC.services.career,
              },
              {
                icon: GraduationCap,
                title: "University & Course Selection",
                description: "Guidance on choosing globally recognized institutions",
                image: IMAGE_SRC.services.selection,
              },
              {
                icon: CheckCircle,
                title: "Application & Documentation Support",
                description: "Streamlined process to maximize admissions success",
                image: IMAGE_SRC.services.docs,
              },
              {
                icon: Award,
                title: "Scholarship & Financial Guidance",
                description: "Helping students access funding opportunities",
                image: IMAGE_SRC.services.scholarship,
              },
              {
                icon: Shield,
                title: "Visa Counselling & Interview Preparation",
                description: "Ensuring hassle-free approvals",
                image: IMAGE_SRC.services.visa,
              },
              {
                icon: Globe,
                title: "Pre-Departure & Post-Arrival Support",
                description: "From travel guidance to settling abroad",
                image: IMAGE_SRC.services.travel,
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden"
                  {...scaleOnHover}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* Service image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover sm:object-center object-[50%_35%] group-hover:scale-110 transition-transform duration-300"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                  <CardContent className="space-y-4 p-6">
                    <div className="p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-balance">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-4 bg-card/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "Honest, transparent, and reliable guidance",
              },
              {
                icon: Award,
                title: "Professionalism",
                description: "A highly skilled team dedicated to student success",
              },
              {
                icon: Heart,
                title: "Student-Centric Approach",
                description: "Personalized solutions for every student's unique goals",
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Committed to delivering quality in everything we do",
              },
              {
                icon: Globe,
                title: "Global Outlook",
                description: "Building pathways that connect India to the world",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full p-6 text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group"
                  {...scaleOnHover}
                >
                  <CardContent className="space-y-4 p-0">
                    <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Why Choose IPD Education?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </motion.div>

          <motion.div
            className="grid gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Experienced and certified counsellors with expertise in international education",
              "Partnerships with top universities and colleges worldwide",
              "Strong focus on career-oriented guidance, not just admissions",
              "Proven track record of successful student placements",
              "Ongoing support even after students begin their studies abroad",
            ].map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <div className="p-2 bg-primary/20 rounded-full flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg">{reason}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Alumni Network */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          {/* Alumni background */}
          <Image
            src={IMAGE_SRC.alumniBg}
            alt="Alumni network"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card/60 to-accent/20" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Our Alumni Network</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
            </motion.div>

            <motion.p className="text-xl text-muted-foreground leading-relaxed" variants={fadeInUp}>
              Our students are our pride. Through the IPD Alumni Network, we bring together achievers who are excelling
              in their careers worldwide. This network inspires, guides, and supports the next generation of students
              who dream of studying abroad.
            </motion.p>

            <motion.div className="flex justify-center space-x-8 pt-8" variants={fadeInUp}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Alumni</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Meet Our Expert Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Senior Education Counselors",
                role: "Expert Guidance Team",
                image: IMAGE_SRC.team.a,
              },
              {
                name: "Visa & Documentation Specialists",
                role: "Application Support Team",
                image: IMAGE_SRC.team.b,
              },
              {
                name: "Student Success Coordinators",
                role: "Support & Follow-up Team",
                image: IMAGE_SRC.team.c,
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    {/* Team portrait */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover sm:object-center object-top group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Contact Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-xl text-muted-foreground">Ready to start your international education journey?</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Head Office</h3>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto">
                    <Phone className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91 81235 92381</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Website</h3>
                  <p className="text-muted-foreground">www.ipdeducation.in</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
