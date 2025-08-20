"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import CoursesSection from "@/components/study-abroad/courses-section";
import SectionsGroup from "@/components/home-page/sections-group";

export default function test() {
    const gold = "#D4AF37";

    // Framer-motion variants (compatible with latest types)
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
    };
    const itemUp = {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.02 },
    };

    return (
        <div className="relative w-full min-h-screen bg-[#070707] dark:bg-[#070707] text-white dark:text-white transition-colors duration-300 overflow-hidden">
            {/* Animated background beams */}
            {/* <BackgroundBeams className="z-0" />
            <CoursesSection gold={gold} /> */}
            <SectionsGroup/>
        </div>
    )
}