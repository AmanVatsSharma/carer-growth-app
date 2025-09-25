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
  // Dev-only diagnostics for quick verification and future debugging
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[CountryPage] rendering', {
      country: country.name,
      universities: country.universities?.map(u => u.name),
      heroImage: country.heroImage,
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background via-card/30 to-background"
    >
      <HeroBanner country={country} />
      <div className="section-divider" />
      <WhyThisCountry country={country} />
      <div className="section-divider" />
      <TopUniversities country={country} />
      <div className="section-divider-strong" />
      <PopularCourses country={country} />
      <div className="section-divider" />
      <VisaProcess country={country} />
      <div className="section-divider" />
      <Scholarships country={country} />
      <div className="section-divider-strong" />
      <SuccessStories country={country} />
      <div className="section-divider" />
      <ApplyNowCTA country={country} />
    </motion.div>
  );
}
