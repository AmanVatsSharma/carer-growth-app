import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { src: "/logo-01.webp", alt: "Asteroid Kit Light", darkSrc: "/logo-01_dark.webp" },
  { src: "/logo-02.webp", alt: "Aceternity UI Light", darkSrc: "/logo-02_dark.webp" },
  { src: "/logo-03.webp", alt: "Gamity", darkSrc: "/logo-03_dark.webp" },
  { src: "/logo-04.webp", alt: "Host IT Light", darkSrc: "/logo-04_dark.webp" },
  { src: "/logo-01.webp", alt: "Asteroid Kit Light", darkSrc: "/logo-01_dark.webp" },
];



export default function BrandsLoveUs() {
  return (
    <section className="relative py-16 bg-white dark:bg-black ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Top Universities You Love
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-3 px-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum cupiditate optio quas unde facilis!
        </p>

        <div className="mt-20 relative mx-2 md:mx-5">
          {/* Overlays above the marquees - responsive width for mobile */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-30 dark:from-black dark:via-black/80 dark:to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-30 dark:from-black dark:via-black/80 dark:to-transparent" />
          <Marquee speed={35} gradient={false}>
            {brands.map((brand: { src: string; alt: string; darkSrc?: string }, i: number) => (
              <div key={i} className="mx-2 md:mx-10 flex items-center">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-12 md:h-16 block dark:hidden"
                />
                {brand.darkSrc && (
                  <img
                    src={brand.darkSrc}
                    alt={brand.alt}
                    className="h-12 md:h-16 hidden dark:block"
                  />
                )}
              </div>
            ))}
          </Marquee>
          <Marquee speed={35} gradient={false} direction="right" className="mt-5 md:mt-20">
            {brands.map((brand: { src: string; alt: string; darkSrc?: string }, i: number) => (
              <div key={i} className="mx-2 md:mx-10 flex items-center">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-12 md:h-16 block dark:hidden"
                />
                {brand.darkSrc && (
                  <img
                    src={brand.darkSrc}
                    alt={brand.alt}
                    className="h-12 md:h-16 hidden dark:block"
                  />
                )}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
