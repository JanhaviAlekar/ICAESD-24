import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  Satellite,
  TreePine,
  ShieldCheck,
  School,
} from "lucide-react";

const tracks = [
  "AI in Healthcare and Human Development",
  "AI in Education",
  "AI in Agriculture",
  "AI in Rural Development",
  "AI in Remote Sensing and Weather Forecasting",
  "AI Driven Signal and Image Processing",
  "AI in AR/VR",
  "AI for Internet-of-Things (AI-IoT)",
  "AI Powered Chip Design",
  "AI in Communications",
  "AI in Smart and Sustainable Cities",
  "AI in Robotics and Mechatronics",
  "AI in Information Security",
  "AI in Architecture and Building Planning",
  "AI for Empowerment of Persons with Disabilities",
  "AI for Social Media",
  "AI in FinTech",
  "AI in Renewable Energy"
];


const icons = [
  Brain,
  Brain,
  Lightbulb,
  Satellite,
  Lightbulb,
  TreePine,
  Brain,
  Lightbulb,
  TreePine,
  TreePine,
  Lightbulb,
  ShieldCheck,
  School,
];

const Tracks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-50 py-12 px-4 md:px-8 lg:px-20"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
          Confe
        </span>
        rence Tracks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tracks.map((track, idx) => {
          const Icon = icons[idx] || Lightbulb;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex items-start gap-4"
            >
              <div className="p-3 bg-blue-100 text-blue-700 rounded-full">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                {track}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Tracks;
