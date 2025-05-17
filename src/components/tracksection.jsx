import React from 'react';
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

function TracksSection() {
  return (
    <section className="py-12 px-4 bg-blue-700">
      <div className="max-w-7xl mx-auto text-center bg-blue-700">
        <h2 className="text-3xl font-bold text-white dark:text-white mb-8">AI Conference Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => {
            const Icon = icons[idx] || Lightbulb;
            return (
              <div
                key={idx}
                className="bg-purple-600 rounded-xl p-5 flex items-start space-x-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 text-left">{track}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
