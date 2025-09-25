"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Users,
  GraduationCap,
  Globe,
  Award,
  X,
} from "lucide-react"
import { useState } from "react"
import { NavbarLogo } from "../ui/resizable-navbar"

const LeadFormDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Thank you! We'll contact you soon.")
        setFormData({ name: "", email: "", phone: "" })
        setTimeout(() => {
          onClose()
          setSubmitMessage("")
        }, 2000)
      } else {
        setSubmitMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Get Free Consultation</h2>
          <p className="text-gray-400">
            Fill out the form below and our education experts will contact you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
          </div>

          {submitMessage && (
            <div
              className={`p-3 rounded-lg text-sm ${
                submitMessage.includes("Thank you")
                  ? "bg-green-900/50 text-green-300 border border-green-700"
                  : "bg-red-900/50 text-red-300 border border-red-700"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:from-gray-600 disabled:to-gray-700 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const footerSections = [
    {
      title: "Programs",
      links: [
        { name: "Study Abroad", href: "/study-abroad" },
        // { name: "English Courses", href: "/programs/english" },
        { name: "University Pathways", href: "/universities" },
        { name: "Test Preparation", href: "/exams" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Student Counseling", href: "/about-us" },
        { name: "Visa Assistance", href: "/services/visa-assistance" },
        { name: "Accommodation", href: "/about-us" },
        // { name: "Career Support", href: "/about-us" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Study Destinations", href: "/country" },
        { name: "Study in USA", href: "/country/usa" },
        { name: "Study in UK", href: "/country/uk" },
        // { name: "Success Stories", href: "/resources/stories" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/about-us" },
        // { name: "Find an Office", href: "/offices" },
        { name: "Help Center", href: "/about-us" },
        { name: "Book Consultation", href: "/about-us" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400", label: "Facebook" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400", label: "Twitter" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400", label: "Instagram" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500", label: "LinkedIn" },
    { icon: Youtube, href: "#", color: "hover:text-red-400", label: "YouTube" },
  ]

  const stats = [
    { icon: Users, number: "5000", label: "Students Helped", color: "text-amber-400" },
    { icon: GraduationCap, number: "1000+", label: "Partner Universities", color: "text-amber-400" },
    { icon: Globe, number: "50+", label: "Countries", color: "text-amber-400" },
    { icon: Award, number: "13+", label: "Years Experience", color: "text-amber-400" },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  const handleConsultationClick = () => {
    setIsDialogOpen(true)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <footer className="footer bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black text-gray-300 dark:text-gray-400 transition-colors duration-300">
        {/* Upper Footer - Stats & CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-950 border-b border-gray-700/50 dark:border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* CTA Section */}
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-100 mb-4">
                  Ready to Start Your
                  <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text ml-2">
                    Global Journey?
                  </span>
                </h2>
                <p className="text-gray-400 dark:text-gray-500 text-lg mb-6 leading-relaxed">
                  Join thousands of students who have achieved their dreams of studying abroad with our expert guidance.
                </p>
                <motion.button
                  onClick={handleConsultationClick}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700/30 dark:border-gray-800/30 backdrop-blur-sm"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl lg:text-3xl font-bold text-white dark:text-gray-100 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-4" variants={itemVariants}>
              <div className="mb-6">
                <motion.h2
                  className="text-3xl font-bold text-white dark:text-gray-100 mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <NavbarLogo/>
                  {/* <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">
                    IPD
                  </span>
                  <span className="ml-2">Education</span> */}
                </motion.h2>
                <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6 text-base">
                  Your trusted partner in international education. We help students achieve their dreams of studying
                  abroad with personalized guidance and expert support.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {/* 
                  Phone Numbers Section
                  - Each number is a clickable tel: link.
                  - Robust error handling and console logs for debugging.
                  - See docs in this module for flow and error handling.
                */}
                <motion.div
                  className="flex items-center gap-3 text-gray-200 dark:text-gray-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex  gap-2">
                    <a
                      href="tel:+918123592381"
                      className="hover:underline focus:underline text-inherit"
                      onClick={e => {
                        try {
                          console.log("[Footer] Phone number +91 81235 92381 clicked. Attempting to open dialer.");
                          // No further JS needed for tel: links, but log for debug.
                        } catch (error) {
                          console.error("[Footer] Error on phone link +91 81235 92381:", error);
                          alert("Sorry, we couldn't initiate the call. Please dial +91 81235 92381 manually.");
                        }
                      }}
                    >
                      +91 81235 92381
                    </a>
                    <a
                      href="tel:+918660096538"
                      className="hover:underline focus:underline text-inherit"
                      onClick={e => {
                        try {
                          console.log("[Footer] Phone number +91 86600 96538 clicked. Attempting to open dialer.");
                        } catch (error) {
                          console.error("[Footer] Error on phone link +91 86600 96538:", error);
                          alert("Sorry, we couldn't initiate the call. Please dial +91 86600 96538 manually.");
                        }
                      }}
                    >
                      +91 86600 96538
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-200 dark:text-gray-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <span>info@ipdeducation.in</span>
                </motion.div> 
                <motion.div
                  className="flex items-center gap-3 text-gray-200 dark:text-gray-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <span>Global Education Centers Worldwide</span>
                </motion.div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h3 className="text-white dark:text-gray-100 font-semibold mb-3 text-lg">Stay Updated</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Get the latest updates on study opportunities and education news.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 rounded-lg text-white dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div key={section.title} variants={itemVariants}>
                  <h3 className="text-white dark:text-gray-100 font-semibold mb-6 text-lg">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-gray-300 dark:text-gray-400 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700/50 dark:border-gray-800/50 bg-black/50 dark:bg-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                className="text-gray-400 dark:text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                © 2025 IPD Education. All rights reserved.
              </motion.div>

              {/* Legal Links */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <motion.a
                  href="/privacy"
                  className="text-gray-400 dark:text-gray-500 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/terms"
                  className="text-gray-400 dark:text-gray-500 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="/cookies"
                  className="text-gray-400 dark:text-gray-500 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Cookie Policy
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`w-11 h-11 rounded-xl bg-gray-800 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 ${social.color} transition-all duration-200 hover:border-amber-500/50`}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.9 + index * 0.1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300,
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </footer>

      <LeadFormDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}

export default Footer
