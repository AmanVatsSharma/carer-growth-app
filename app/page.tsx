'use client';
import FeaturesSection01 from "@/components/features-section-1";
import FeaturesSection02 from "@/components/features-section-2";
import FeaturesSection03 from "@/components/features-section-3";
import { HeroVariation1, HeroVariation2 } from "@/components/home-page/cta-hero";
import FuturisticCta from "@/components/home-page/futuristic-cta";
import BrandsLoveUs from "@/components/home-page/logo-cloud-marquee";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Beams from "@/components/ui/beams-bg";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-[#181c24] dark:via-[#232a36] dark:to-[#1a202c]">
      <div className="main-video w-full overflow-hidden">
        <ReactPlayer
          src="https://www.formeeexpress.com/video/LandingPageVideo.mp4"
          loop
          playing
          muted
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700">
        {/* Top-left gold beams */}
        <div className="absolute top-0 left-0 w-full sm:w-1/2 h-1/2 pointer-events-none z-0">
          <Beams
            beamWidth={2}
            beamHeight={18}
            beamNumber={8}
            lightColor="#FFD700"
            speed={9}
            noiseIntensity={1.2}
            scale={0.18}
            rotation={-35}
          />
        </div>
        {/* Bottom-right gold beams */}
        <div className="absolute bottom-0 right-0 w-full sm:w-1/2 h-1/2 pointer-events-none z-0">
          <Beams
            beamWidth={2}
            beamHeight={18}
            beamNumber={8}
            lightColor="#FFEA70"
            speed={9}
            noiseIntensity={1.2}
            scale={0.18}
            rotation={35}
          />
        </div>
        {/* Gold sparkle overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', left: 0, top: 0 }}>
            <defs>
              <radialGradient id="goldSparkle" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
              </radialGradient>
            </defs>
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 100 + '%'} cy={Math.random() * 100 + '%'} r={Math.random() * 2 + 1} fill="url(#goldSparkle)" opacity="0.7" />
            ))}
          </svg>
        </div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
        {/* CTA Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-2 sm:px-4 w-full">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-4 sm:mb-6 animate-fade-in tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">Unlock Your Global Career & Study Dreams</span>
          </h1>
          <p className="text-white text-base sm:text-lg md:text-2xl font-semibold mb-6 sm:mb-8 max-w-md sm:max-w-2xl animate-fade-in delay-100 drop-shadow-lg leading-snug">
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-400 bg-clip-text text-transparent">Discover golden opportunities to work and study abroad. Let us guide you to a brighter future with expert support and world-class resources.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-200 w-full sm:w-auto">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-200 border-2 border-yellow-300 w-full sm:w-auto">
              Explore Careers Abroad
            </Button>
            <Button className="bg-white text-yellow-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold shadow-xl border-2 border-yellow-500 hover:bg-yellow-50 hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
              Study Abroad Now
            </Button>
          </div>
        </div>
      </div>

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

      <div className="relative w-full h-screen bg-black">
        {/* 1. The beams component will render as the dynamic background */}
        <Beams
          beamWidth={1.5}
          beamHeight={25}
          beamNumber={20}
          lightColor="#FFD700" // Golden color for the beams
          speed={12}
          noiseIntensity={0.8}
          scale={0.15}
          rotation={0}
        />

        {/* Top Gradient */}
        <div className="absolute top-0  w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

        {/* 2. The new CTA component renders on top */}
        {/* <FuturisticCta /> */}
      </div>


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

      <BrandsLoveUs />
      <FeaturesSection03 />
      <FeaturesSection02 />
      <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
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
      </div>
      <FeaturesSection01 />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};
