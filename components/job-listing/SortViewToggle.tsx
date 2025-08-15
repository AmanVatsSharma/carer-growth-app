'use client';
import React from "react";
import { motion } from "framer-motion";

const SortViewToggle = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center justify-between mb-6">
    <div className="flex gap-2">
      <select className="p-2 rounded border">
        <option>Newest</option>
        <option>Salary</option>
        <option>Relevance</option>
      </select>
    </div>
    <div className="flex gap-2">
      <button className="px-3 py-1 rounded bg-blue-600 text-white">Grid</button>
      <button className="px-3 py-1 rounded bg-gray-200">List</button>
    </div>
  </motion.div>
);

export default SortViewToggle;
