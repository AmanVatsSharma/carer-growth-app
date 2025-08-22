"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "What services does IDP Education provide?",
    answer:
      "IDP Education offers comprehensive study abroad services including university selection, application assistance, visa guidance, test preparation (IELTS, TOEFL, PTE), scholarship guidance, and pre-departure support to help students achieve their international education goals.",
  },
  {
    question: "Which countries can I study in through IDP Education?",
    answer:
      "We facilitate admissions to top universities in Australia, Canada, UK, USA, New Zealand, and Ireland. Our extensive network includes partnerships with over 800+ institutions across these destinations, ensuring you find the perfect match for your academic aspirations.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application timeline varies by destination and program. Generally, it takes 2-4 months for application processing, plus additional time for visa processing. We recommend starting your journey 8-12 months before your intended intake to ensure smooth processing.",
  },
  {
    question: "Do you provide scholarship assistance?",
    answer:
      "Yes! We help identify and apply for various scholarships including merit-based, need-based, and destination-specific scholarships. Our counselors guide you through scholarship applications and help maximize your funding opportunities.",
  },
  {
    question: "What is the cost of your consultation services?",
    answer:
      "Our initial consultation is completely free! We offer transparent pricing for our premium services, and many of our core services are provided at no cost as we receive commissions from partner universities upon successful enrollment.",
  },
  {
    question: "Can you help with visa applications?",
    answer:
      "Our visa experts provide comprehensive support including document preparation, application filing, interview preparation, and guidance throughout the visa process. We have high success rates across all major study destinations.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about studying abroad with IDP Education
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDownIcon className="w-6 h-6 text-amber-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-slate-700/30">
                      <p className="text-slate-300 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">Still have questions? We're here to help!</p>
          <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold px-8 py-3 rounded-full hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  )
}
