"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAllCountries } from "@/lib/country-data"
import Link from "next/link"
import { ArrowRight, Globe, GraduationCap, Users, Award } from "lucide-react"
import Image from "next/image"

export default function CountryPage() {
  const countries = getAllCountries()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={'/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg'} 
          alt="Hero Background" 
          fill 
          className="absolute inset-0 object-cover object-center opacity-30" 
          quality={100} 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <Globe className="w-16 h-16 text-gold mx-auto mb-4" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="gold-gradient bg-clip-text text-yellow-600">Global Education</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover world-class universities and unlock your potential with personalized guidance for studying
              abroad.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4 text-lg golden-glow group"
               onClick={() => window.location.href = '/country'}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Countries
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                Free Consultation
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">50,000+</div>
                <div className="text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-muted-foreground">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countries Section */}
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
              Choose Your <span className="gold-gradient bg-clip-text text-yellow-600">Destination</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore top study destinations and find the perfect match for your academic goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/country/${country.code.toLowerCase()}`}>
                  <Card className="h-full bg-background/80 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 overflow-hidden group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={country.heroImage || "/placeholder.svg"}
                        alt={`Study in ${country.name}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <span className="text-4xl">{country.flag}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{country.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{country.universities.length} Universities</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gold-gradient bg-clip-text text-yellow-600">IPD Education</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Personalized counseling from certified education experts",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Network",
                description: "Partnerships with 500+ universities worldwide",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Success Stories",
                description: "50,000+ students successfully placed abroad",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "End-to-End Support",
                description: "From application to visa to arrival support",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
