'use client';
import React from "react";
import { motion } from "framer-motion";

const jobs = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Job Title ${i + 1}`,
  company: `Company ${i + 1}`,
  location: "London, UK",
  salary: `$${(50000 + i * 5000).toLocaleString()}`,
}));

const JobResults = () => (
  <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {jobs.map(job => (
      <motion.div key={job.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{job.title}</h3>
          <div className="flex gap-2">
            <button className="text-blue-600">Save</button>
            <button className="text-blue-600">Share</button>
            <button className="bg-blue-600 text-white px-2 py-1 rounded">Quick Apply</button>
          </div>
        </div>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-500">{job.location}</p>
        <p className="text-blue-600 font-semibold">{job.salary}</p>
      </motion.div>
    ))}
  </motion.div>
);

export default JobResults;
