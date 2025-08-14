import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

// A helper component for the glowing effect, can be used in any variation
const Glow = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[100px] animate-pulse" />
);

// A helper for icons
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);


//================================================================================
// Variation 1: The Minimalist Futurist
// Inspired directly by your example. Clean, direct, and professional.
//================================================================================
export const HeroVariation1 = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md pb-4">
                    Unlock Your Global Future
                </h1>
                <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl">
                    We provide expert guidance for international careers and education, turning your ambitions into achievements.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                    <Button className="bg-white text-black font-bold px-6 py-3 rounded-md hover:bg-neutral-200 transition-colors duration-300 shadow-lg">
                        Get Started
                    </Button>
                    <Button variant="outline" className="text-white border-neutral-600 font-bold px-6 py-3 rounded-md hover:bg-neutral-800/50 hover:border-neutral-400 transition-colors duration-300 shadow-lg">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};


//================================================================================
// Variation 2: The Golden Visionary
// This version uses the golden color more boldly for a high-impact, premium feel.
//================================================================================
export const HeroVariation2 = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
            {/* Optional subtle glow behind the content */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse z-0" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xl pb-4">
                    Craft Your Legacy
                </h1>
                <p className="mt-4 text-lg md:text-xl text-neutral-200 max-w-3xl leading-relaxed">
                    From prestigious universities to thriving international careers, we are the architects of your global journey. Discover a world of golden opportunities.
                </p>
                <div className="mt-12 flex items-center gap-4">
                    <Button className="group bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl shadow-yellow-500/20">
                        Begin Your Journey
                        <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};


//================================================================================
// Variation 3: The Innovator's Showcase
// A modern, slightly asymmetrical layout that highlights a key benefit.
//================================================================================
export const HeroVariation3 = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Left Side: Main CTA */}
                <div className="flex flex-col text-center md:text-left items-center md:items-start">
                    <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md pb-4">
                        Your Ambition, Amplified.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-300 max-w-lg">
                        Navigate the complexities of studying and working abroad with a trusted partner by your side.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                         <Button className="bg-white text-black font-bold px-8 py-3 rounded-md hover:bg-neutral-200 transition-colors duration-300 shadow-lg">
                            Explore Services
                        </Button>
                        <Button variant="outline" className="text-white border-neutral-600 font-bold px-8 py-3 rounded-md hover:bg-neutral-800/50 hover:border-neutral-400 transition-colors duration-300 shadow-lg">
                            Contact Us
                        </Button>
                    </div>
                </div>

                {/* Right Side: Feature Highlight */}
                <div className="hidden md:flex flex-col items-center justify-center p-8 border border-neutral-800 bg-black/30 rounded-lg backdrop-blur-sm">
                     <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                     </div>
                     <h3 className="text-xl font-bold text-white">Personalized Roadmaps</h3>
                     <p className="text-neutral-400 mt-2 text-center">
                        Tailored strategies that align with your unique career and academic goals for guaranteed success.
                     </p>
                </div>
            </div>
        </section>
    );
};
