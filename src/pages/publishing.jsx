import React from "react";
import { motion } from "framer-motion";



const Publishing = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 space-y-10 bg-gray-50">
      {/* About the Conference Section */}
      <section className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
              Pub
            </span>
            lishing & Indexing
          </h2>
        </div>
        <div className="text-md lg:text-lg font-light text-justify text-gray-700 space-y-4 lg:mx-10 sm:mx-2">
          <p>
The paper publication in the Scopus Indexed Journal is subjected to the review and acceptance by the publisher. 
          </p>
          <p>
GCoEA/ICAIISD 2025 Team in no ways be responsible for the article publication and its article publishing fee (if applicable) in the Scopus Indexed Journal.          </p>
          <p>
            After the paper is presented in the conference, only the accepted and presented papers will be forwarded to the publication journal for further process.            </p>
          <p>
All communications regarding publication in the Scopus Indexed Journal will be made ONLY by the Journal Publication and NOT by the GCoEA/ICAIISD 2025.
          </p>
        </div>
      </section>
<section>
        <div>
          <h2 >
              CMT ACKNOWLEDGMENT
          </h2>
        </div>
        <div>
          <p>
       "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
       </p>
    </div>
      </section>
      
    </div>
  );
};

export default Publishing;
