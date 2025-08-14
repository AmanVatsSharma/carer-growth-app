import { ThreeDMarqueeSection } from "@/components/home-page/hero-section";
import Beams from "@/components/ui/beams-bg";
import { Button } from "@/components/ui/button";
import Lanyard from "@/components/ui/Lanyard/Lanyard";

export default function AboutUsPage() {
    return (
        <div className="main w-full min-h-screen flex-col items-center justify-center gap-10">
            <ThreeDMarqueeSection />
            <Lanyard/>
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700">
                    We are dedicated to helping you grow your career abroad with the best resources and support.
                </p>
            </div>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={45}
                />
                <p className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 text-white text-7xl font-semibold">
                    Radient Beams for Creative User Interfaces
                </p>
                <Button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white hover:bg-blue-600">
                    Learn More
                </Button>
            </div>
        </div>
    )
}