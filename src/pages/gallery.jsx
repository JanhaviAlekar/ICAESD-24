import React from "react";
import { motion } from "framer-motion";
import gallery1 from "../components/assests/gallery1.jpg";
import gallery2 from "../components/assests/gallery2.jpeg";
import gallery3 from "../components/assests/gallery3.jpeg";
import banner from "../components/assests/banner.mp4";
const galleryImages = [
    gallery1,
    gallery2,
    gallery3
];

const Gallery = () => {
  return (
    <div className="relative bg-purple-700 px-4 py-8">
<div className="mb-10 max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
       
        <iframe width="100%" height="350" src="https://www.youtube.com/embed/DPBFi8kcIww?si=zhfMafpKji6SH9H6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
      </div>
      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          College Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
