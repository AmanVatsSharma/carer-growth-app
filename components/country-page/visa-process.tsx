'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

interface VisaProcessProps {
  country: Country;
}

export function VisaProcess({ country }: VisaProcessProps) {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visa Process{' '}
            <span className="gold-gradient bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your step-by-step guide to obtaining a student visa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600" />

            {country.visaProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-6 w-4 h-4 bg-gold rounded-full border-4 border-background golden-glow"
                />

                {/* Step Number */}
                <div className="absolute left-2 top-0 w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="ml-20">
                  <Card className="bg-background/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gold">
                          {step.step}
                        </h3>
                        <Badge className="bg-gold/20 text-gold border-gold/30">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Arrow for non-last items */}
                {index < country.visaProcess.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute left-7 -bottom-4 text-gold"
                  >
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-green-500/10 to-gold/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-green-500">
                    Visa Approved!
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Once approved, you're ready to begin your educational journey in {country.name}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
