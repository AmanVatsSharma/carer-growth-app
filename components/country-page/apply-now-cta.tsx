'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ApplyNowCTAProps {
  country: Country;
}

export function ApplyNowCTA({ country }: ApplyNowCTAProps) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[ApplyNowCTA]', { country: country.name });
  }
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card/40 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Study in{' '}
            <span className="gold-gradient bg-clip-text text-transparent">
              {country.name}
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take the first step towards your international education journey. Our expert counselors are here to guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background/80 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold">Start Your Application</h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-border focus:border-gold"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-border focus:border-gold"
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-border focus:border-gold"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="border-border focus:border-gold"
                  />

                  <Select>
                    <SelectTrigger className="border-border focus:border-gold">
                      <SelectValue placeholder="Preferred Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {country.popularCourses.map((course, index) => (
                        <SelectItem key={index} value={course.name.toLowerCase()}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="border-border focus:border-gold">
                      <SelectValue placeholder="Preferred University" />
                    </SelectTrigger>
                    <SelectContent>
                      {country.universities.map((university, index) => (
                        <SelectItem key={index} value={university.name.toLowerCase()}>
                          {university.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Tell us about your academic background and goals..."
                    className="border-border focus:border-gold min-h-[100px]"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 text-lg golden-glow group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                    <Sparkles className="ml-2 h-5 w-5 group-hover:animate-spin" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <Card className="bg-background/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <span>info@ipdeducation.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>123 Education Street, Learning City</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <span>Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Free consultation with expert counselors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>End-to-end application support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Visa guidance and interview preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Scholarship assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Pre-departure orientation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency CTA */}
            <Card className="bg-gradient-to-r from-red-500/10 to-gold/10 border-red-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-red-400 mb-2">
                  Application Deadline Approaching?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Don't miss out! Get priority assistance for urgent applications.
                </p>
                <Button
                  variant="outline"
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now: +1 (555) 999-URGENT
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
