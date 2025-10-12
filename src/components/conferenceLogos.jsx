import React, { useEffect, useState } from 'react';
import iic from "../components/assests/IIClogo.jpg";
import tup from "../components/assests/TUPlogo.jpg";
import caro1 from "../components/assests/caro1.jpeg";
import caro2 from "../components/assests/caro2.jpeg";
import caro3 from "../components/assests/caro3.jpeg";
import caro4 from "../components/assests/caro4.jpeg";

const ConferenceLogos = () => {
  const carouselImages = [caro1, caro2, caro3, caro4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-purple-700 space-y-10">
      {/* Header */}
      <h2 className="text-white text-4xl font-extrabold text-center tracking-wide">
        📅 Important Dates
      </h2>

      {/* Important Dates */}
     <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-white">
  {[
    {
      label: "Full Paper Submission",
      oldDate: "15th August 2025",
      newDate: "CMT Paper Submission CLOSED",
      color: "bg-red-600"
    },
    { label: "Acceptance / Rejection", date: "15th October 2025", color: "bg-blue-600" },
    { label: "Registration", date: "25th October 2025", color: "bg-green-600" },
    { label: "Camera Ready Submission", date: "5th November 2025", color: "bg-yellow-600" },
    { label: "Conference Dates", date: "19–20th December 2025", color: "bg-pink-600" },
  ].map(({ label, oldDate, newDate, date, color }, index) => (
    <div key={index} className={`${color} rounded-xl py-6 px-4 text-center shadow-md`}>
      <h4 className="text-lg font-bold">{label}</h4>
      {oldDate && newDate ? (
        <div className="mt-2">
          <p className="line-through opacity-75 text-sm">{oldDate}</p>
          <p className="mt-1 text-lg font-semibold bg-white text-black px-3 py-1 rounded-full inline-block shadow-sm">
            {newDate}
          </p>
        </div>
      ) : (
        <p className="mt-2 text-base">{date}</p>
      )}
    </div>
  ))}
</div>


      {/* Legacy Title */}
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white tracking-wide px-4">
        <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Leg</span>acy of the 1<sup className="text-xs align-super">st</sup> International Conference ICAESD-24
      </p>

      {/* Image Carousel */}
      <div className="w-full max-w-6xl h-[20rem] sm:h-[26rem] lg:h-[30rem] overflow-hidden rounded-3xl shadow-2xl border border-gray-300">
        <img
          src={carouselImages[currentIndex]}
          alt={`carousel ${currentIndex}`}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Logos Section */}
      <div className="flex justify-center items-center space-x-10 sm:space-x-16 pt-6">
        <img
          src={iic}
          alt="IIC Logo"
          className="h-20 sm:h-28 w-auto object-contain drop-shadow-lg"
        />
        <img
          src={tup}
          alt="TUP Logo"
          className="h-20 sm:h-28 w-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default ConferenceLogos;
