import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4 py-8">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl max-w-xl w-full p-8 text-center border border-blue-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo Placeholder */}
        <div className="mb-6">
          
        </div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-gray-600 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We’re working hard behind the scenes to bring you something truly remarkable.
        </motion.p>

        {/* Additional Info */}
        <motion.p
          className="text-sm text-blue-800 font-medium bg-blue-50 rounded-lg py-3 px-4 border border-blue-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Paper acceptance through the <span className="font-semibold">Conference Management System</span> will be starting soon.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
