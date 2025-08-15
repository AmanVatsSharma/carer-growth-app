"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";

export function LampHero({
    Title = "Build Careers the right way",
    Subtitle = "A modern approach to your Careers  & Study Abroad."
}) {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                {Title} <br />
                <p className="text-lg md:text-2xl md:mt-20 text-gray-600 dark:text-gray-300 mt-2 opacity-70">
                    {Subtitle}
                </p>
            </motion.h1>
            <div className="mt-8 flex justify-center">
                <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-700 to-slate-500 text-white font-bold shadow-xl border-2 border-white rounded-full px-10 py-6 text-lg animate-pulse hover:scale-105 hover:bg-cyan-700 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 font-bold"
                    onClick={() => window.open('tel:+1234567890')}
                >
                    Book a Call & Consult
                </Button>
            </div>
        </LampContainer>
    );
}
