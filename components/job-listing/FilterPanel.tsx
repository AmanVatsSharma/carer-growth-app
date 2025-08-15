'use client';
import React from "react";
import { motion } from "framer-motion";

const FilterPanel = () => (
  <motion.aside initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hidden md:block w-72 p-6 bg-white rounded-xl shadow-lg mr-8">
    <h2 className="font-semibold text-lg mb-4">Filters</h2>
    {/* Multi-select filters */}
    <div className="mb-4">
      <label className="block mb-2">Country</label>
      <select multiple className="w-full p-2 border rounded">
        <option>USA</option>
        <option>UK</option>
        <option>Canada</option>
        <option>Germany</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-2">Role</label>
      <select multiple className="w-full p-2 border rounded">
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
      </select>
    </div>
    {/* Salary slider */}
    <div className="mb-4">
      <label className="block mb-2">Salary Range</label>
      <input type="range" min="30000" max="200000" className="w-full" />
    </div>
    {/* Remote/Contract toggles */}
    <div className="flex gap-4 mb-4">
      <label className="flex items-center gap-2"><input type="checkbox" /> Remote</label>
      <label className="flex items-center gap-2"><input type="checkbox" /> Contract</label>
    </div>
  </motion.aside>
);

export default FilterPanel;
