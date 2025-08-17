'use client'
import { motion } from "framer-motion";

const steps = [
  {
    title: "Counseling",
    description: "Personalized guidance to help you choose the right course and country.",
    icon: "🧑‍🎓",
  },
  {
    title: "Exam Prep",
    description: "Expert coaching for IELTS, TOEFL, GRE, and more.",
    icon: "📚",
  },
  {
    title: "Applications",
    description: "Streamlined application process for top universities.",
    icon: "📝",
  },
  {
    title: "Visa",
    description: "Comprehensive support for your student visa application.",
    icon: "🛂",
  },
  {
    title: "Departure",
    description: "Pre-departure briefings and travel assistance.",
    icon: "✈️",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-muted dark:from-background dark:to-muted rounded-3xl shadow-xl max-w-5xl mx-auto mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-primary dark:text-primary"
      >
        How It Works
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-card dark:bg-card/80 rounded-2xl p-6 shadow-lg w-full md:w-1/5 min-w-[180px] max-w-xs mx-auto"
          >
            <span className="text-4xl mb-4 drop-shadow-lg">{step.icon}</span>
            <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground text-center">
              {step.description}
            </p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                <span className="text-2xl text-primary">→</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
