'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trophy } from 'lucide-react';

interface TopUniversitiesProps {
  country: Country;
}

export function TopUniversities({ country }: TopUniversitiesProps) {
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
            Top Universities in{' '}
            <span className="gold-gradient bg-clip-text text-transparent">
              {country.name}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Study at world-renowned institutions that shape global leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center golden-glow"
                    >
                      <img
                        src={university.logo || "/placeholder.svg"}
                        alt={`${university.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-center mb-4 group-hover:text-gold transition-colors">
                    {university.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold hover:text-black">
                        <Trophy className="w-3 h-3 mr-1" />
                        {university.ranking}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {university.location}
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full origin-left"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
