"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Star,
  Users,
  Trophy,
  BookOpen,
  Target,
  Clock,
  Award,
  ArrowRight,
  Play,
  Calendar,
  MessageCircle,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  HeadphonesIcon,
  Video,
  FileText,
  BarChart3,
  Rocket,
  GraduationCap,
  Brain,
  Medal,
  BookMarked,
  PenTool,
  Mic,
  Eye,
  Headphones,
  Smartphone,
  Verified,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

const examTypes = [
  {
    name: "IELTS",
    description: "International English Language Testing System",
    icon: "🇬🇧",
    fullName: "International English Language Testing System",
    duration: "2 hours 45 minutes",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    scoreRange: "0-9 bands",
    validFor: "2 years",
    acceptedBy: "10,000+ organizations worldwide",
    testFormat: "Paper-based & Computer-based",
    difficulty: "Intermediate to Advanced",
  },
  {
    name: "TOEFL",
    description: "Test of English as a Foreign Language",
    icon: "🇺🇸",
    fullName: "Test of English as a Foreign Language",
    duration: "3 hours",
    sections: ["Reading", "Listening", "Speaking", "Writing"],
    scoreRange: "0-120 points",
    validFor: "2 years",
    acceptedBy: "11,500+ universities",
    testFormat: "Internet-based (iBT)",
    difficulty: "Intermediate to Advanced",
  },
  {
    name: "GRE",
    description: "Graduate Record Examinations",
    icon: "🎓",
    fullName: "Graduate Record Examinations",
    duration: "3 hours 45 minutes",
    sections: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
    scoreRange: "130-170 per section",
    validFor: "5 years",
    acceptedBy: "1,200+ business schools",
    testFormat: "Computer-based",
    difficulty: "Advanced",
  },
  {
    name: "GMAT",
    description: "Graduate Management Admission Test",
    icon: "💼",
    fullName: "Graduate Management Admission Test",
    duration: "3 hours 7 minutes",
    sections: ["Analytical Writing", "Integrated Reasoning", "Quantitative", "Verbal"],
    scoreRange: "200-800 points",
    validFor: "5 years",
    acceptedBy: "7,000+ programs worldwide",
    testFormat: "Computer-adaptive",
    difficulty: "Advanced",
  },
  {
    name: "SAT",
    description: "Scholastic Assessment Test",
    icon: "📚",
    fullName: "Scholastic Assessment Test",
    duration: "3 hours",
    sections: ["Evidence-Based Reading", "Writing & Language", "Math"],
    scoreRange: "400-1600 points",
    validFor: "5 years",
    acceptedBy: "4,000+ colleges",
    testFormat: "Paper & Digital",
    difficulty: "High School to College Level",
  },
  {
    name: "PTE",
    description: "Pearson Test of English",
    icon: "🌐",
    fullName: "Pearson Test of English Academic",
    duration: "3 hours",
    sections: ["Speaking & Writing", "Reading", "Listening"],
    scoreRange: "10-90 points",
    validFor: "2 years",
    acceptedBy: "3,000+ institutions",
    testFormat: "Computer-based",
    difficulty: "Intermediate to Advanced",
  },
]

const stats = [
  { number: "25,000+", label: "Students Trained", icon: Users, description: "Successful candidates across all exams" },
  { number: "98%", label: "Success Rate", icon: Trophy, description: "Students achieving target scores" },
  { number: "8.7+", label: "Average Score", icon: Star, description: "Across IELTS & TOEFL exams" },
  {
    number: "150+",
    label: "Expert Trainers",
    icon: Award,
    description: "Certified professionals with 10+ years experience",
  },
  { number: "50+", label: "Countries", icon: Globe, description: "Students from around the world" },
  { number: "24/7", label: "Support", icon: HeadphonesIcon, description: "Round-the-clock assistance" },
]

const features = [
  {
    title: "AI-Powered Personalized Study Plans",
    description:
      "Advanced algorithms create customized preparation roadmaps based on your current level, target score, and learning pace. Get real-time adjustments as you progress.",
    icon: Brain,
    benefits: ["Adaptive learning paths", "Progress tracking", "Smart recommendations", "Performance analytics"],
  },
  {
    title: "World-Class Expert Instructors",
    description:
      "Learn from certified trainers with 15+ years of experience, including former IELTS/TOEFL examiners who know exactly what examiners look for.",
    icon: GraduationCap,
    benefits: ["Former examiners", "15+ years experience", "Proven track record", "Personalized feedback"],
  },
  {
    title: "Unlimited Mock Tests & Practice",
    description:
      "Access to 500+ practice tests with real exam conditions, detailed performance analytics, and instant feedback to identify and improve weak areas.",
    icon: Target,
    benefits: ["500+ practice tests", "Real exam simulation", "Instant feedback", "Weakness analysis"],
  },
  {
    title: "Flexible Learning Options",
    description:
      "Choose from live classes, recorded sessions, one-on-one tutoring, or self-paced learning. Study anytime, anywhere with our mobile app.",
    icon: Smartphone,
    benefits: ["Live & recorded classes", "Mobile app access", "One-on-one tutoring", "Self-paced learning"],
  },
  {
    title: "Comprehensive Study Materials",
    description:
      "Access premium study guides, video lessons, interactive exercises, and exclusive content created by our expert team.",
    icon: BookMarked,
    benefits: ["Premium study guides", "Video lessons", "Interactive exercises", "Exclusive content"],
  },
  {
    title: "Score Guarantee Program",
    description:
      "We're so confident in our methods that we guarantee score improvement or your money back. Join our risk-free program today.",
    icon: Shield,
    benefits: ["Money-back guarantee", "Score improvement promise", "Risk-free enrollment", "Success assurance"],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    score: "IELTS 8.5",
    previousScore: "6.5",
    text: "The personalized approach and expert guidance helped me achieve my dream score in just 2 months! The mock tests were incredibly realistic.",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇨🇦 Canada",
    university: "University of Toronto",
    improvement: "+2.0 bands",
  },
  {
    name: "Michael Chen",
    score: "TOEFL 118",
    previousScore: "95",
    text: "Excellent teaching methodology and comprehensive study materials. The speaking practice sessions were game-changers for me.",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇺🇸 USA",
    university: "Stanford University",
    improvement: "+23 points",
  },
  {
    name: "Priya Sharma",
    score: "GRE 330",
    previousScore: "310",
    text: "The mock tests were exactly like the real exam. The quantitative section strategies helped me score perfect 170. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇬🇧 UK",
    university: "Oxford University",
    improvement: "+20 points",
  },
  {
    name: "Ahmed Al-Rashid",
    score: "GMAT 750",
    previousScore: "650",
    text: "The integrated reasoning section was my weakness, but their targeted approach helped me master it. Now I'm at Wharton!",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇺🇸 USA",
    university: "Wharton Business School",
    improvement: "+100 points",
  },
  {
    name: "Emma Rodriguez",
    score: "SAT 1580",
    previousScore: "1350",
    text: "From 1350 to 1580! The math strategies and reading comprehension techniques were incredibly effective.",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇺🇸 USA",
    university: "Harvard University",
    improvement: "+230 points",
  },
  {
    name: "James Wilson",
    score: "PTE 89",
    previousScore: "72",
    text: "The computer-based practice environment was perfect preparation. Achieved my target score on the first attempt!",
    image: "/placeholder.svg?height=80&width=80",
    country: "🇦🇺 Australia",
    university: "University of Melbourne",
    improvement: "+17 points",
  },
]

const studyResources = [
  {
    title: "Interactive Video Lessons",
    description: "1000+ HD video lessons covering every topic",
    icon: Video,
    count: "1000+",
  },
  {
    title: "Practice Questions Bank",
    description: "50,000+ questions with detailed explanations",
    icon: FileText,
    count: "50,000+",
  },
  {
    title: "Mock Test Series",
    description: "500+ full-length practice tests",
    icon: BarChart3,
    count: "500+",
  },
  {
    title: "Study Guides & eBooks",
    description: "Comprehensive guides for all exam sections",
    icon: BookOpen,
    count: "200+",
  },
  {
    title: "Mobile Learning App",
    description: "Study on-the-go with offline access",
    icon: Smartphone,
    count: "24/7",
  },
  {
    title: "Live Doubt Sessions",
    description: "Weekly live sessions with expert instructors",
    icon: MessageCircle,
    count: "Weekly",
  },
]

const examSkills = [
  {
    skill: "Listening",
    icon: Headphones,
    techniques: ["Note-taking strategies", "Accent recognition", "Question prediction", "Time management"],
  },
  {
    skill: "Reading",
    icon: Eye,
    techniques: ["Skimming & scanning", "Vocabulary building", "Passage analysis", "Question types mastery"],
  },
  {
    skill: "Writing",
    icon: PenTool,
    techniques: ["Essay structure", "Grammar perfection", "Vocabulary enhancement", "Time optimization"],
  },
  {
    skill: "Speaking",
    icon: Mic,
    techniques: ["Fluency development", "Pronunciation training", "Confidence building", "Mock interviews"],
  },
]

const pricingPlans = [
  {
    name: "Foundation",
    price: "$299",
    duration: "3 months",
    features: [
      "50+ Practice tests",
      "Basic study materials",
      "Email support",
      "Mobile app access",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$599",
    duration: "6 months",
    features: [
      "200+ Practice tests",
      "Premium study materials",
      "Live doubt sessions",
      "One-on-one mentoring",
      "Score guarantee",
      "Mobile app access",
      "24/7 chat support",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$999",
    duration: "12 months",
    features: [
      "500+ Practice tests",
      "All study materials",
      "Unlimited live sessions",
      "Personal exam coach",
      "Score guarantee",
      "Priority support",
      "Exam booking assistance",
      "Post-exam counseling",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "How long does it take to prepare for these exams?",
    answer:
      "Preparation time varies based on your current level and target score. Typically, students need 2-6 months of dedicated preparation with our structured program. Our AI-powered assessment helps determine your optimal study timeline.",
  },
  {
    question: "Do you provide study materials and what's included?",
    answer:
      "Yes, we provide comprehensive study materials including 200+ eBooks, 1000+ video lessons, 50,000+ practice questions, 500+ mock tests, and exclusive content created by our expert instructors. All materials are updated regularly to reflect current exam patterns.",
  },
  {
    question: "What is your success rate and score guarantee?",
    answer:
      "We maintain a 98% success rate with students achieving their target scores. We offer a score improvement guarantee - if you don't improve your score after completing our program, we provide additional coaching at no extra cost or offer a full refund.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee if you're not completely satisfied with our program. Additionally, our score guarantee ensures you achieve your target score or get continued support until you do.",
  },
  {
    question: "Do you offer one-on-one coaching?",
    answer:
      "Yes, our Premium and Elite plans include personalized one-on-one coaching sessions with expert instructors. These sessions are tailored to your specific needs and weak areas identified through our diagnostic tests.",
  },
  {
    question: "Is the course content updated regularly?",
    answer:
      "Our content is updated monthly to reflect the latest exam patterns, question types, and scoring criteria. Our team of former examiners ensures all materials align with current exam standards.",
  },
  {
    question: "Can I access the course on mobile devices?",
    answer:
      "Yes, our mobile app is available for iOS and Android devices. You can access all course materials, take practice tests, watch video lessons, and track your progress on any device, even offline.",
  },
  {
    question: "What support do you provide during the course?",
    answer:
      "We provide 24/7 chat support, weekly live doubt-clearing sessions, email support, and access to our community forum. Premium and Elite members also get priority support and dedicated mentors.",
  },
]

const locations = [
  { city: "New York", country: "USA", students: "5,000+", flag: "🇺🇸" },
  { city: "London", country: "UK", students: "3,500+", flag: "🇬🇧" },
  { city: "Toronto", country: "Canada", students: "2,800+", flag: "🇨🇦" },
  { city: "Sydney", country: "Australia", students: "2,200+", flag: "🇦🇺" },
  { city: "Mumbai", country: "India", students: "4,500+", flag: "🇮🇳" },
  { city: "Dubai", country: "UAE", students: "1,800+", flag: "🇦🇪" },
]

export default function ExamPrepLanding() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 pt-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=1600')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/30" />

        <div className="relative container mx-auto px-4 py-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 text-base font-semibold shadow-lg">
                <Trophy className="mr-2 h-5 w-5" />🎯 98% Success Rate • 25,000+ Students Trained
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight"
            >
              Master Any Exam
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl">Achieve Your Dreams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Join 25,000+ successful students who conquered IELTS, TOEFL, GRE, GMAT, SAT & PTE with our
              <span className="text-primary font-semibold"> AI-powered preparation system</span> and
              <span className="text-accent font-semibold"> expert guidance</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Demo Class
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-xl border-2 hover:bg-accent/10 bg-transparent backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Success Stories
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>Score Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span>Expert Instructors</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-card via-muted/30 to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Trusted by Students Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">Our numbers speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4 text-primary-foreground group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="h-10 w-10" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground/80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Types Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Target className="mr-2 h-4 w-4" />
              Complete Exam Coverage
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Master Any International Exam
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive preparation for all major international exams with proven strategies, expert guidance, and
              cutting-edge technology to ensure your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examTypes.map((exam, index) => (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-muted/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative text-center pb-6">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {exam.icon}
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {exam.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base mb-4">{exam.fullName}</CardDescription>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{exam.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Score Range:</span>
                        <span className="font-medium">{exam.scoreRange}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Valid For:</span>
                        <span className="font-medium">{exam.validFor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Accepted By:</span>
                        <span className="font-medium">{exam.acceptedBy}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative pt-0">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Test Sections:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exam.sections.map((section) => (
                          <Badge key={section} variant="secondary" className="text-xs">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{exam.testFormat}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <span className="font-medium">{exam.difficulty}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary hover:to-accent hover:text-primary-foreground border border-primary/20 hover:border-transparent transition-all duration-300 group-hover:shadow-lg">
                      Start {exam.name} Preparation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/20">
              <Zap className="mr-2 h-4 w-4" />
              Skill Mastery
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Master Every Skill
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive training for all four essential language skills with proven techniques and strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-card">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {skill.skill}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skill.techniques.map((technique, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Rocket className="mr-2 h-4 w-4" />
              Advanced Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Why 25,000+ Students Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience the difference with our cutting-edge technology, proven methodology, and personalized approach
              that guarantees your exam success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-background overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                      {feature.description}
                    </CardDescription>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Resources Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/20">
              <BookOpen className="mr-2 h-4 w-4" />
              Study Resources
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive library of study materials, practice tests, and learning resources designed by
              experts to maximize your exam performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-card">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="h-10 w-10" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{resource.count}</div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Users className="mr-2 h-4 w-4" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Real Students, Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Hear from our students who achieved their dream scores and transformed their futures with our proven
              methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-background overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative text-center pb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-accent/20 group-hover:border-accent/50 transition-colors"
                    />
                    <CardTitle className="text-xl font-bold text-foreground mb-2">{testimonial.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                        {testimonial.score}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {testimonial.improvement}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{testimonial.country}</div>
                    <div className="text-sm font-medium text-primary">{testimonial.university}</div>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-muted-foreground text-center italic leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Previous Score: {testimonial.previousScore}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Medal className="mr-2 h-4 w-4" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Choose Your Success Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Flexible pricing options designed to fit your needs and budget. All plans include our score guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-background overflow-hidden ${
                    plan.popular ? "border-2 border-primary shadow-lg scale-105" : "border-2 hover:border-primary/50"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.duration} access</div>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg"
                          : "bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary hover:to-accent hover:text-primary-foreground border border-primary/20 hover:border-transparent"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/20">
              <Globe className="mr-2 h-4 w-4" />
              Global Reach
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Students Worldwide Trust Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our students have successfully gained admission to top universities across 50+ countries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="text-center border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card to-background">
                  <CardHeader className="pb-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {location.flag}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {location.city}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{location.country}</CardDescription>
                    <div className="text-primary font-semibold text-sm mt-2">{location.students} students</div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-8 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 text-base font-semibold shadow-lg">
              <Rocket className="mr-2 h-5 w-5" />
              Limited Time Offer - 50% Off First Month
            </Badge>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Ready to Achieve Your Dream Score?
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Join 25,000+ successful students and start your journey to exam success today. Book your free demo class
              and experience our proven methodology that guarantees results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Demo Class
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl border-2 hover:bg-accent/10 bg-transparent backdrop-blur-sm"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Chat with Expert
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Free Demo Class</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>Score Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Verified className="h-5 w-5 text-green-500" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <MessageCircle className="mr-2 h-4 w-4" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions about our exam preparation programs and services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-2 border-border hover:border-accent/50 rounded-xl px-8 py-2 bg-card transition-all duration-300 hover:shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
