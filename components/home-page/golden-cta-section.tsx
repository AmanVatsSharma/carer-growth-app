import Beams from "../ui/beams-bg";
import { Button } from "../ui/button";

export default function GoldenCta() {
    return (
        <>
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
        </>
    )
}