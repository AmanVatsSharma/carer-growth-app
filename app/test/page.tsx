"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon123 } from "@tabler/icons-react";
import { Briefcase, GraduationCap, Icon, Lightbulb } from "lucide-react";
import { ModeToggle } from "@/components/theme/mode-toggle";

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
        <div className="relative w-full min-h-screen bg-[#070707] dark:bg-[#070707] text-white dark:text-white transition-colors duration-300">
            <section className="w-full flex flex-col items-center">
                {/* HERO */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-2xl px-6 text-center mt-8 sm:mt-28"
                >
                    <motion.h1
                        variants={itemUp}
                        whileHover={{ letterSpacing: "0.12em" }}
                        className="font-[PlayfairDisplay] text-[36px] sm:text-[56px] md:text-[64px] leading-[0.98] sm:leading-[0.95] tracking-tight"
                        style={{ color: gold }}
                    >
                        EXCELLENCE IN
                        <br />
                        EDUCATION
                    </motion.h1>

                    <motion.p
                        variants={itemUp}
                        className="text-[15px] sm:text-[18px] text-[#e6e6e6] dark:text-[#e6e6e6] mt-4 max-w-lg mx-auto"
                    >
                        Empowering students to achieve academic and career success.
                    </motion.p>

                    <motion.button
                        variants={itemUp}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 mx-auto px-6 py-2 rounded text-black font-medium text-sm"
                        style={{ background: gold }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                {/* COURSES TITLE */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-2xl px-6 mt-12"
                >
                    <motion.h2 variants={itemUp} className="text-center text-[18px] font-semibold" style={{ color: gold }}>
                        OUR COURSES
                    </motion.h2>
                    <motion.p variants={itemUp} className="text-center text-[14px] text-[#dcdcdc] dark:text-[#dcdcdc] mt-2">
                        Explore a variety of courses designed to help you excel in your studies and career.
                    </motion.p>
                </motion.div>

                {/* CARD ROW - responsive grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-4xl px-4 mt-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={itemUp}
                        whileHover="hover"
                        className="border border-[rgba(212,175,55,0.9)] rounded-md p-5 bg-transparent min-h-[170px] flex flex-col items-center transition-colors duration-300"
                    >
                        <GraduationCap className="w-8 h-8 mb-2" color={gold} />
                        <h3 className="text-[14px] font-semibold text-[rgba(212,175,55,0.95)] text-center">
                            Undergraduate Programs
                        </h3>
                        <p className="text-[12px] text-[#dddddd] dark:text-[#dddddd] text-center mt-2">
                            Explore our undergraduate courses designed to provide a solid foundation of knowledge
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={itemUp}
                        whileHover="hover"
                        className="border border-[rgba(212,175,55,0.9)] rounded-md p-5 bg-transparent min-h-[170px] flex flex-col items-center transition-colors duration-300"
                    >
                        <Briefcase className="w-8 h-8 mb-2" color={gold} />
                        <h3 className="text-[9px] font-semibold text-[rgba(212,175,55,0.95)] text-center">
                            Graduate Programs
                        </h3>
                        <p className="text-[12px] text-[#dddddd] dark:text-[#dddddd] text-center mt-2">
                            Discover our graduate courses aimed at advancing your expertise
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={itemUp}
                        whileHover="hover"
                        className="border border-[rgba(212,175,55,0.9)] rounded-md p-5 bg-transparent min-h-[170px] flex flex-col items-center transition-colors duration-300"
                    >
                        <Lightbulb className="w-8 h-8 mb-2" color={gold} />
                        <h3 className="text-[14px] font-semibold text-[rgba(212,175,55,0.95)] text-center">
                            Professional Development
                        </h3>
                        <p className="text-[12px] text-[#dddddd] dark:text-[#dddddd] text-center mt-2">
                            Enhance your skills with our professional development courses
                        </p>
                    </motion.div>
                </motion.div>

                {/* VIEW ALL button */}
                <motion.div className="w-full max-w-2xl px-6 mt-8 mb-12 text-center">
                    <motion.button
                        variants={itemUp}
                        whileTap={{ scale: 0.98 }}
                        className="mx-auto px-5 py-2 rounded text-black font-medium text-sm"
                        style={{ background: gold }}
                    >
                        View All Courses
                    </motion.button>
                </motion.div>
            </section>
        </div>
    )
}