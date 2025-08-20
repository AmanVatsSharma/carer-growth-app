"use client";
import { motion } from "motion/react";
import { WorldMap } from "../ui/world-map";

export function WorldMapSection() {
    return (
        <div className="md:flex md:px-20 py-10 md:py-20 dark:bg-black bg-white w-full gap-16">
            <div className="max-w-7xl mx-auto text-center pb-5 my-auto">
                <p className="font-bold text-xl md:text-6xl dark:text-white text-black">
                    Remote
                    <span className="text-neutral-400">
                        {"Connectivity".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 px-5">
                    Join thousands of successful students who chose us as their trusted partner. With partnerships across 50+ countries and 900+ universities, your dream education awaits.
                </p>
            </div>
            <div className="world-map-container relative w-full md:h-[600px]">
                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: 64.2008,
                                lng: -149.4937,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                            }, // Los Angeles
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },

                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />
            </div>
        </div>
    );
}
