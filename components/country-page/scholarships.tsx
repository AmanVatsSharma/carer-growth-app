'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, Users, Building, ArrowRight } from 'lucide-react';

interface ScholarshipsProps {
  country: Country;
}

export function Scholarships({ country }: ScholarshipsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gold-gradient bg-clip-text text-transparent">
              Scholarships
            </span>{' '}
            Available
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Financial support to make your dreams affordable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {country.scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 overflow-hidden relative">
                {/* Golden accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gold/20 text-gold border-gold/30">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {scholarship.amount}
                    </Badge>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center"
                    >
                      <Building className="w-5 h-5 text-gold" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                    {scholarship.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-gold" />
                      <span>{scholarship.eligibility}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Building className="w-4 h-4 mr-2 text-gold" />
                      <span>{scholarship.provider}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gold/30 text-gold hover:bg-gold hover:text-black group/btn"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gold/5 border-gold/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gold mb-3">
                Need Help Finding Scholarships?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our expert counselors can help you identify and apply for scholarships that match your profile.
              </p>
              <Button className="bg-gold text-black hover:bg-gold-accent">
                Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
