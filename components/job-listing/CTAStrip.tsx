'use client';
import React from "react";
import { motion } from "framer-motion";

const CTAStrip = () => (
  <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full py-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white flex flex-col items-center rounded-xl mt-12">
    <h2 className="text-2xl font-bold mb-2">Ready to take the next step?</h2>
    <p className="mb-4">Create your profile and get matched with top jobs abroad.</p>
    <button className="px-6 py-3 rounded bg-white text-blue-700 font-semibold shadow">Get Started</button>
  </motion.div>
);

export default CTAStrip;
