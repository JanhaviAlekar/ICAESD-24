import React from "react";
import { motion } from "framer-motion";

import {
  Lightbulb,
  Brain,
  Satellite,
  ShieldCheck,
  TreePine,
  School,
} from "lucide-react";

const About = () => {
  
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 space-y-10 bg-gray-50">
      {/* About the Conference Section */}
      <section className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
              Abo
            </span>
            ut the Conference
          </h2>
        </div>
        <div className="text-md lg:text-lg font-light text-justify text-gray-700 space-y-4 lg:mx-10 sm:mx-2">
          <p>
            Welcome to <strong>ICAIISD 2025</strong> - the 2<sup>nd</sup>{" "}
            International Conference on Artificial Intelligence (AI) Innovations
            for Societal Development.Our goal is to provide a platform for researchers, industry
            professionals, and students to share innovations and research
            findings. Scheduled for{" "}
            <strong>December 19–20, 2025</strong>, this conference aims to
            foster collaboration and knowledge exchange in Engineering and
            Technology.
          </p>
          <p>
            Join us as we explore sustainable development solutions and shape
            the future together.
          </p>
        </div>
      </section>

      {/* About GCoEA Section */}
      <section className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
              Abo
            </span>
            ut GCoEA
          </h2>
        </div>
        <div className="text-md lg:text-lg font-light text-justify text-gray-700 space-y-4 lg:mx-10 sm:mx-2">
          <p>
Government College of Engineering, Amravati (GCoEA) is one of the oldest engineering institutes in the state of Maharashtra, India, located in Amravati. It was established in 1964 by the Government of Maharashtra.The institute was granted Autonomy by UGC in 2005-06. The institute is a recipient of TEQIP-I and TEQIP-II grant by World Bank Project.
The Institute started with three basic disciplines Civil, Mechanical and Electrical Engineering initially. Subsequently new degree programs in Electronics & Telecommunication, Computer Science & Engineering, Instrumentation Engineering and Information Technology were added as per the demand, need and requirements of the country.
The institute now offers eight full time PG programs in Electrical Power Systems, Structural Engineering, Thermal Engineering, Environmental Engineering, Computer Science & Engineering, Geotechnical Engineering, Production Engineering and Electronics System & Communication.
It also has recognized research centers for Ph.D. Programs in Civil, Mechanical, Electrical, Electronics, Computer Engineering, Information Technology, Chemistry and Physics for Snat Gadge Baba Amravati University.          </p>
          
        </div>
      </section>
    </div>
  );
};

export default About;
