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
          Government College of Engineering, Amravati (GCOEA) is one of the oldest engineering institutes in the state of Maharashtra, India, located in Amravati .It was established in 1964 by the Government of Maharashtra, along with three other Government institutes at Pune, Aurangabad, and Karad. It was initially affiliated to Nagpur University and later on shifted to Amravati University now Sant Gadge Baba Amravati University SGBAU) in 1982. The Institute started with three basic disciplines Civil, Mechanical and Electrical Engineering initially. Subsequently new degree programs in Electronic & Telecommunication, Computer Science & Engineering, Instrumentation Engineering and Information Technology were added as per the demand, need and requirements of the country.
          </p>
          <p>
          The institute started part time Post Graduate course in Electrical Power System in 1986 and later added four P.G. Courses in Thermal Power Engineering, Environmental, Geotechnical, and Electronics Systems and Communication. The institute now offers seven full time PG programs in Electrical Power Systems, Structures, Thermal Power Engineering., Environmental Engineering., Advanced Electronics, Computer Engineering and Geotechnical Engineering.
          </p>
          <p>
          Besides imparting Engineering education in all major Disciplines, it is also a recognized research center for Ph.D. Programs in Civil, Mechanical, Electrical, Electronics and Computer Engineering for Amravati University. The total student strength is around 1,700.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
