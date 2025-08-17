import { ThreeDMarqueeSection } from "@/components/home-page/hero-section";
import BrandsLoveUs from "@/components/home-page/logo-cloud-marquee";
import HeroSection from "@/components/study-abroad/hero-section";
import HowItWorksSection from "@/components/study-abroad/how-it-works-section";

export default function StudyAbroadPage() {
    return (
        <div className="main w-full min-h-screen flex-col items-center justify-center">
            {/* hello this is the study abroad page. */}
            <ThreeDMarqueeSection />
            <HeroSection />
            <HowItWorksSection />
            <BrandsLoveUs />
        </div>
    )
}