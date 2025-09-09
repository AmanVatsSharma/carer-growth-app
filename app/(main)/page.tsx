'use client';
import FeaturesSection01 from "@/components/features-section-1";
import FeaturesSection02 from "@/components/features-section-2";
import FeaturesSection03 from "@/components/features-section-3";
import { HeroVariation1, HeroVariation2 } from "@/components/home-page/cta-hero";
import FuturisticCta from "@/components/home-page/futuristic-cta";
import { ThreeDMarqueeSection } from "@/components/home-page/hero-section";
import BrandsLoveUs from "@/components/home-page/logo-cloud-marquee";
import CtaSectionSimple from "@/components/home-page/simple-cta";
import ValuePropSection from "@/components/home-page/value-prop-section";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Beams from "@/components/ui/beams-bg";
import { Button } from "@/components/ui/button";
import { LampHero } from "@/components/home-page/lamp-hero";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { StickyScrollReveal } from "@/components/home-page/sticky-scroll-reveal";
import ScrollStackSection from "@/components/home-page/scroll-stack";
import { WorldMapSection } from "@/components/home-page/world-map-section";
import SectionsGroup from "@/components/home-page/sections-group";
import GoldenCta from "@/components/home-page/golden-cta-section";
import FAQSection from "@/components/home-page/faq-section";
import Video from "@/components/ui/Video";

export default function Home() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-[#181c24] dark:via-[#232a36] dark:to-[#1a202c]">
      {/* <div className="main-video w-full overflow-hidden h-50vh">
        <ReactPlayer
          src="https://firebasestorage.googleapis.com/v0/b/theaweshop.appspot.com/o/IPD-Education%2Foutput.mp4?alt=media&token=d14f69bc-4def-48df-9fa6-aa52802bdc76"
          loop
          playing
          muted
          width={"100%"}
          height={"100%"}
          
        />
      </div> */}

      <div className="main-video w-full h-[30vh] md:h-[70vh] overflow-hidden">
        <Video
          src="https://firebasestorage.googleapis.com/v0/b/theaweshop.appspot.com/o/IPD-Education%2Foutput.mp4?alt=media&token=d14f69bc-4def-48df-9fa6-aa52802bdc76"
          poster="/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg"
        />
      </div>

      <CtaSectionSimple
        gridIntensity="opacity-90"
      />

      <WorldMapSection />

      {/* <LampHero /> */}

      <ValuePropSection />

      {/* <ScrollStackSection /> */}

      {/* <StickyScrollReveal /> */}

      {/* <GoldenCta /> */}

      {/* <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <Beams
          beamWidth={1.5}
          beamHeight={25}
          beamNumber={20}
          lightColor="#FFD700"
          speed={12}
          noiseIntensity={0.8}
          scale={0.15}
          rotation={0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up tracking-tighter leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
              Your Future Awaits
            </span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl animate-fade-in-up delay-200 drop-shadow-lg leading-relaxed">
            Step into a world of opportunity. We specialize in crafting international careers and educational journeys tailored to your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400 w-full sm:w-auto">
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-yellow-400 w-full sm:w-auto">
              Begin Your Journey
            </Button>
            <Button variant="outline" className="text-white border-white/50 bg-transparent px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
        </div>
      </div> */}

      {/* <div className="relative w-full h-screen bg-black"> */}
      {/* 1. The beams component will render as the dynamic background */}
      {/* <Beams
          beamWidth={1.5}
          beamHeight={25}
          beamNumber={20}
          lightColor="#FFffff" // Golden color for the beams
          speed={12}
          noiseIntensity={0.8}
          scale={0.15}
          rotation={0}
        /> */}

      {/* Top Gradient */}
      {/* <div className="absolute top-0  w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div> */}

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}

      {/* 2. The new CTA component renders on top */}
      {/* <FuturisticCta /> */}
      {/* </div> */}

      <span className=" h-10 bg-grey-800 w-full" />
      <ThreeDMarqueeSection />

      {/* <div className="relative w-full h-screen bg-black"> */}
      {/* The beams will render as the background */}
      {/* <Beams
          beamWidth={1.5}
          beamHeight={25}
          beamNumber={20}
          lightColor="#FFD700"
          speed={12}
          noiseIntensity={0.8}
          scale={0.15}
          rotation={0}
        /> */}

      {/* Place your chosen hero variation here. It will appear over the beams. */}
      {/* <HeroVariation1 /> */}
      {/* <HeroVariation2 /> */}
      {/* <HeroVariation3 /> */}
      {/* </div> */}

      <SectionsGroup />
      <BrandsLoveUs />
      <FAQSection />
      {/* <FeaturesSection03 />
      <FeaturesSection02 /> */}
      {/* <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]"> */}
      {/* <MacbookScroll
          title={
            <span>
              Get out of Your Screen and Call Us Now. <br /> No kidding.
            </span>
          }
          badge={
            <a href="https://peerlist.io/manuarora">
              <Badge className="h-10 w-10 -rotate-12 transform" />
            </a>
          }
          src={`https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1668670929290.jpg-org`}
          showGradient={false}
        /> */}
      {/* </div> */}
      {/* <FeaturesSection01 /> */}
      {/* <DummyContent /> */}
    </div>
  );
}
