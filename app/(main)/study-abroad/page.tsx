import { ThreeDMarqueeSection } from "@/components/home-page/hero-section";
import BrandsLoveUs from "@/components/home-page/logo-cloud-marquee";
import CoursesSection from "@/components/study-abroad/courses-section";
import HeroSection from "@/components/study-abroad/hero-section";
import StudyAbroadSection from "@/components/study-abroad/study-abroad-section";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function StudyAbroadPage() {
    return (
        <div className="main w-full min-h-screen flex-col items-center justify-center">
            {/* hello this is the study abroad page. */}
            <div className="relative w-full min-h-screen bg-[#070707] dark:bg-[#070707] text-white dark:text-white transition-colors duration-300 overflow-hidden">
                {/* Animated background beams */}
                <BackgroundBeams className="z-0" />
                <CoursesSection/>
            </div>

            <HeroSection />
            {/* <ThreeDMarqueeSection /> */}
            <StudyAbroadSection />
            <BrandsLoveUs />
        </div>
    )
}

