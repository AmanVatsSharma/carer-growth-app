'use client';
import React from "react";
import { motion } from "framer-motion";

const HeroSearchBar = () => (
  <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-4">Find Your Dream Job Abroad</h1>
    <p className="mb-6 text-lg">Search thousands of jobs worldwide. Filter by country, role, salary, and more.</p>
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
      <input type="text" placeholder="Search jobs..." className="flex-1 px-4 py-3 rounded-lg text-black" />
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap">
        <span className="bg-white/20 px-3 py-1 rounded-full">Country</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">Role</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">Salary</span>
        <span className="bg-white/20 px-3 py-1 rounded-full">Experience</span>
      </div>
    </div>
  </motion.section>
);

export default HeroSearchBar;
