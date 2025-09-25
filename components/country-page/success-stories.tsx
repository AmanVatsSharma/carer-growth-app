'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Star, GraduationCap, Building } from 'lucide-react';
import Image from 'next/image';

interface SuccessStoriesProps {
  country: Country;
}

export function SuccessStories({ country }: SuccessStoriesProps) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[SuccessStories]', { country: country.name, count: country.successStories?.length });
  }
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
            Student{' '}
            <span className="gold-gradient bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from students who achieved their dreams in {country.name}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {country.successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-gold/50" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "{story.story}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 text-black" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="font-bold text-lg group-hover:text-gold transition-colors">
                        {story.name}
                      </h4>
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="w-fit text-xs border-gold/30 text-gold">
                          <GraduationCap className="w-3 h-3 mr-1" />
                          {story.course}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="w-3 h-3 mr-1 text-gold" />
                          {story.university}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-gold/10 to-gold/5 border-gold/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gold mb-4">
                Your Success Story Starts Here
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful students who chose {country.name} for their education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-gold/20 text-gold border-gold/30 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  98% Success Rate
                </Badge>
                <Badge className="bg-gold/20 text-gold border-gold/30 px-4 py-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  10,000+ Students Placed
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
