"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background py-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src="/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif"
            alt="International education campus"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-card/80 to-background/90" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,204,22,0.1),transparent_70%)]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center space-y-8" variants={staggerContainer} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-accent text-accent-foreground border-accent px-4 py-2 text-sm font-medium">
                🌍 Global Education Excellence
              </Badge>
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight" variants={fadeInUp}>
              About IPD Education
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Empowering dreams, building futures. We are your trusted partner in the journey to world-class
              international education.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
              <div className="relative mb-6">
                <img
                  src="/universities/unimelb-campus.png"
                  alt="IPD Education office"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
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
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
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
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/universities/university-of-toronto-campus.png"
                alt="IPD Education services"
                className="w-full h-64 md:h-80 object-cover"
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
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
              {
                icon: GraduationCap,
                title: "University & Course Selection",
                description: "Guidance on choosing globally recognized institutions",
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
              {
                icon: CheckCircle,
                title: "Application & Documentation Support",
                description: "Streamlined process to maximize admissions success",
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
              {
                icon: Award,
                title: "Scholarship & Financial Guidance",
                description: "Helping students access funding opportunities",
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
              {
                icon: Shield,
                title: "Visa Counselling & Interview Preparation",
                description: "Ensuring hassle-free approvals",
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
              {
                icon: Globe,
                title: "Pre-Departure & Post-Arrival Support",
                description: "From travel guidance to settling abroad",
                image: "/landing-page/premium_photo-1683749805319-2c481ae54bc1.avif",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden"
                  {...scaleOnHover}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
          <img
            src="/universities/harvard-yard.png"
            alt="Alumni network"
            className="w-full h-full object-cover opacity-20"
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
                image: "/portraits/premium_photo-1661434380261-ca9305950dd3.avif",
              },
              {
                name: "Visa & Documentation Specialists",
                role: "Application Support Team",
                image: "/portraits/premium_photo-1661434380261-ca9305950dd3.avif",
              },
              {
                name: "Student Success Coordinators",
                role: "Support & Follow-up Team",
                image: "/portraits/premium_photo-1661434380261-ca9305950dd3.avif",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
