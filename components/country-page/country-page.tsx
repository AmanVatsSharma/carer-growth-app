'use client';

import { motion } from 'framer-motion';
import { Country } from '@/lib/country-data';
import { HeroBanner } from './hero-banner';
import { TopUniversities } from './top-universities';
import { WhyThisCountry } from './why-this-country';
import { PopularCourses } from './popular-courses';
import { Scholarships } from './scholarships';
import { VisaProcess } from './visa-process';
import { SuccessStories } from './success-stories';
import { ApplyNowCTA } from './apply-now-cta';

interface CountryPageProps {
  country: Country;
}

export function CountryPage({ country }: CountryPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <HeroBanner country={country} />
      <WhyThisCountry country={country} />
      <TopUniversities country={country} />
      <PopularCourses country={country} />
      <VisaProcess country={country} />
      <Scholarships country={country} />
      <SuccessStories country={country} />
      <ApplyNowCTA country={country} />
    </motion.div>
  );
}
