import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

//================================================================================
// Icons - Helper components to keep the main component clean
//================================================================================

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M9.5 2.5l1 1l-1 1l-1-1zM14.5 2.5l1 1l-1 1l-1-1zM9.5 20.5l1 1l-1 1l-1-1zM14.5 20.5l1 1l-1 1l-1-1zM2.5 9.5l1 1l-1 1l-1-1zM20.5 9.5l1 1l-1 1l-1-1zM2.5 14.5l1 1l-1 1l-1-1zM20.5 14.5l1 1l-1 1l-1-1z" />
        <path d="M12 5v14" />
        <path d="M5 12h14" />
    </svg>
);


//================================================================================
// Main CTA Component
// This component recreates the design from your screenshot.
//================================================================================
export const FuturisticCta = () => {
    return (
        <div className="relative w-full h-screen font-sans text-white p-6 md:p-8 flex flex-col">
            {/* Header / Navbar */}
            <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-20">
                <nav className="w-full flex items-center justify-between px-6 py-3 bg-black/20 border border-neutral-700/80 rounded-full backdrop-blur-md">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-neutral-200">
                        <LogoIcon className="w-6 h-6" />
                        <span className="font-semibold text-lg">Formee</span>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-neutral-300 hover:text-white transition-colors">Home</a>
                        <a href="/study-abroad" className="text-neutral-300 hover:text-white transition-colors">Study Abroad</a>
                        <a href="/about-us" className="text-neutral-300 hover:text-white transition-colors">About Us</a>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center">
                {/* Tag */}
                <div className="mb-6 flex items-center gap-2 px-3 py-1 bg-black/20 border border-neutral-700/80 rounded-full backdrop-blur-md">
                    <SparklesIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-neutral-300">Your Future, Redefined</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md pb-4 max-w-4xl">
                    Golden Opportunities for Global Careers
                </h1>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                    <Button className="bg-white text-black font-bold px-6 py-3 rounded-md hover:bg-neutral-200 transition-colors duration-300 shadow-lg">
                        Get Started
                    </Button>
                    <Button variant="outline" className="text-white border-neutral-600 font-bold px-6 py-3 rounded-md hover:bg-neutral-800/50 hover:border-neutral-400 transition-colors duration-300 shadow-lg">
                        Learn More
                    </Button>
                </div>
            </main>

            {/* Footer Toggle */}
            <footer className="absolute bottom-6 right-8 z-20">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-400">Demo Content</span>
                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-700 cursor-pointer"></label>
                    </div>
                    <style>{`
                        .toggle-checkbox:checked { right: 0; border-color: #4A4A4A; }
                        .toggle-checkbox:checked + .toggle-label { background-color: #4A4A4A; }
                    `}</style>
                </div>
            </footer>
        </div>
    );
};

export default FuturisticCta;
