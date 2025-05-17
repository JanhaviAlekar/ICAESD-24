import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Satellite, ShieldCheck, TreePine, School } from 'lucide-react';

const tracks = [
  "AI in Medical Diagnosis, Medical Imaging and Building Assistive Medical Devices",
  "Research areas for AI in Healthcare and Human Development",
  "AI for Social Development",
  "AI in Remote Sensing and Weather Forecasting",
  "AI Driven signal/Image Processing",
  "Artificial Intelligence of things (AIoT)",
  "AI powered Chip Design",
  "AI & ML in Telecommunication",
  "Use of AI in Smart and Sustainable Cities",
  "AI in Agricultural and Rural Development",
  "AI and IoT: Future Ahead",
  "AI in Network and Information Security",
  "AI in Education System"
];

const icons = [
  Brain, Brain, Lightbulb, Satellite, Lightbulb, TreePine, Brain,
  Lightbulb, TreePine, TreePine, Lightbulb, ShieldCheck, School
];

export const About = () => {
  return (
    <>
    <div className="px-4 md:px-8 lg:px-16 py-6 ">
  <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200">
    <div className="flex flex-col pb-0 lg:pb-4 mb-4">
      <p className="text-3xl font-bold mb-4 tracking-wide text-center text-gray-800">
        <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Abo</span>ut the Conference
      </p>
      <p className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2 text-justify text-gray-700">
        Welcome to ICAIISD 2025 - the 2<sup>nd</sup> International Conference on Artificial Intelligence (AI) Innovations for Societal Development.
        Our goal is to provide a platform for researchers, industry professionals, and students to share innovations and research findings.
        Scheduled for <strong>December 19-20, 2025</strong>, this conference aims to foster collaboration and knowledge exchange in Engineering and Technology.
        <p>Join us as we explore sustainable development solutions and shape the future together.</p>
      </p>
    </div>
  </div>
</div>

<div className="px-4 md:px-8 lg:px-16 py-6 bg-purple-700">
  <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200">
    <div className="flex flex-col pb-0 lg:pb-4 mb-4">
      <p className="text-3xl font-bold mb-4 tracking-wide text-center text-gray-800">
        <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Abo</span>ut   GCoEA
      </p>
      <p className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2 text-justify text-gray-700">
      Government College of Engineering, Amravati (GCOEA) is one of the oldest engineering institutes in the state of Maharashtra, India, located in Amravati .It was established in 1964 by the Government of Maharashtra, along with three other Government institutes at Pune, Aurangabad, and Karad. It was initially affiliated to Nagpur University and later on shifted to Amravati University now Sant Gadge Baba Amravati University SGBAU) in 1982. The Institute started with three basic disciplines Civil, Mechanical and Electrical Engineering initially. Subsequently new degree programs in Electronic & Telecommunication, Computer Science & Engineering, Instrumentation Engineering and Information Technology were added as per the demand, need and requirements of the country.
      </p>
    </div>
  </div>
</div>

      {/* Tracks Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-10 px-6 lg:px-20"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
          <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Confe</span>rence Tracks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tracks.map((track, idx) => {
            const Icon = icons[idx] || Lightbulb;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-start space-x-4"
              >
                <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-800">{track}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};