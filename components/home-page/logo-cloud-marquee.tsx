"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeUniversity {
  src: string;
  alt: string;
  darkSrc: string;
}

        const brands = [
  { 
    src: "/universities/university-of-melbourne-logo.png", 
    alt: "University of Melbourne", 
    darkSrc: "/universities/university-of-melbourne-logo.png",
    url: "https://www.unimelb.edu.au",
    name: "University of Melbourne"
  },
  { 
    src: "/universities/university-of-toronto-logo.png", 
    alt: "University of Toronto", 
    darkSrc: "/universities/university-of-toronto-logo.png",
    url: "https://www.utoronto.ca",
    name: "University of Toronto"
  },
  { 
    src: "/universities/harvard-logo.png", 
    alt: "Harvard University", 
    darkSrc: "/universities/harvard-logo.png",
    url: "https://www.harvard.edu",
    name: "Harvard University"
  },
  { 
    src: "/logo-02.webp", 
    alt: "Stanford University", 
    darkSrc: "/logo-02_dark.webp",
    url: "https://www.stanford.edu",
    name: "Stanford University"
  },
  { 
    src: "/logo-03.webp", 
    alt: "MIT", 
    darkSrc: "/logo-03_dark.webp",
    url: "https://www.mit.edu",
    name: "Massachusetts Institute of Technology"
  },
  { 
    src: "/logo-04.webp", 
    alt: "Oxford University", 
    darkSrc: "/logo-04_dark.webp",
    url: "https://www.ox.ac.uk",
    name: "University of Oxford"
  },
  { 
    src: "/logo-01.webp", 
    alt: "Cambridge University", 
    darkSrc: "/logo-01_dark.webp",
    url: "https://www.cam.ac.uk",
    name: "University of Cambridge"
  },
];

export default function BrandsLoveUs() {
  const [brands, setBrands] = useState<MarqueeUniversity[]>(defaultBrands);

  useEffect(() => {
    const fetchMarqueeUniversities = async () => {
      try {
        const response = await fetch("/api/website-settings");
        if (response.ok) {
          const data = await response.json();
          if (data.marqueeUniversities && data.marqueeUniversities.length > 0) {
            setBrands(data.marqueeUniversities);
          }
        }
      } catch (error) {
        console.error("Error fetching marquee universities:", error);
        // Keep default brands if fetch fails
      }
    };

    fetchMarqueeUniversities();
  }, []);
  return (
    <section className="relative py-16 bg-white dark:bg-black ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Partner Universities
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-3 px-16">
          We have partnerships with world-renowned universities across the globe. Click on any university logo to visit their official website and explore programs.
        </p>

        <div className="mt-20 relative mx-2 md:mx-5">
          {/* Overlays above the marquees - responsive width for mobile */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-30 dark:from-black dark:via-black/80 dark:to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-30 dark:from-black dark:via-black/80 dark:to-transparent" />
          <Marquee speed={35} gradient={false}>
            {brands.map((brand: { src: string; alt: string; darkSrc?: string; url: string; name: string }, i: number) => (
              <div key={i} className="mx-2 md:mx-10 flex items-center">
                <a 
                  href={brand.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110 hover:opacity-80"
                  title={`Visit ${brand.name}`}
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-12 md:h-16 block dark:hidden transition-all duration-300 group-hover:brightness-110"
                  />
                  {brand.darkSrc && (
                    <img
                      src={brand.darkSrc}
                      alt={brand.alt}
                      className="h-12 md:h-16 hidden dark:block transition-all duration-300 group-hover:brightness-110"
                    />
                  )}
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee speed={35} gradient={false} direction="right" className="mt-5 md:mt-20">
            {brands.map((brand: { src: string; alt: string; darkSrc?: string; url: string; name: string }, i: number) => (
              <div key={i} className="mx-2 md:mx-10 flex items-center">
                <a 
                  href={brand.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110 hover:opacity-80"
                  title={`Visit ${brand.name}`}
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-12 md:h-16 block dark:hidden transition-all duration-300 group-hover:brightness-110"
                  />
                  {brand.darkSrc && (
                    <img
                      src={brand.darkSrc}
                      alt={brand.alt}
                      className="h-12 md:h-16 hidden dark:block transition-all duration-300 group-hover:brightness-110"
                    />
                  )}
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
