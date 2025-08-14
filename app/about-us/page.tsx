import { ThreeDMarqueeSection } from "@/components/home-page/hero-section";
import Beams from "@/components/ui/beams-bg";
import { Button } from "@/components/ui/button";
// import Lanyard from "@/components/ui/Lanyard/Lanyard";

export default function AboutUsPage() {
    return (
        <div className="main w-full min-h-screen flex-col items-center justify-center gap-10">
            <ThreeDMarqueeSection />
            {/* <Lanyard /> */}
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700">
                    We are dedicated to helping you grow your career abroad with the best resources and support.
                </p>
            </div>
        </div>
    )
}