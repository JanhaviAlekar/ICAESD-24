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
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="flex flex-col items-center justify-center my-10 px-4 space-y-8">
             <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white rounded-xl overflow-hidden text-center text-sm font-medium p-2">
          <div className="bg-red-800 py-4 px-2">
            <h4 className="text-base font-semibold">Full Paper Submission</h4>
            <p className="mt-1">15th August 2025</p>
          </div>
          <div className="bg-blue-800 py-4 px-2">
            <h4 className="text-base font-semibold">Acceptance / Rejection</h4>
            <p className="mt-1">30th September 2025</p>
          </div>
          <div className="bg-green-800 py-4 px-2">
            <h4 className="text-base font-semibold">Registration</h4>
            <p className="mt-1">15th October 2025</p>
          </div>
          <div className="bg-yellow-800 py-4 px-2">
            <h4 className="text-base font-semibold">Camera Ready Submission</h4>
            <p className="mt-1">30th October 2025</p>
          </div>
          <div className="bg-pink-800 py-4 px-2">
            <h4 className="text-base font-semibold">Conference Dates</h4>
            <p className="mt-1">19–20th December 2025</p>
          </div>
        </div>
                <p className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide">
                    <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Leg</span>acy of  1<sup className="text-xs align-super">st</sup> International Conference ICAESD-24
                </p>
            {/* Large Carousel on Top */}
            <div className="w-full max-w-6xl h-[26rem] sm:h-[30rem] overflow-hidden rounded-3xl shadow-2xl border border-gray-300">
                <img
                    src={carouselImages[currentIndex]}
                    alt={`carousel ${currentIndex}`}
                    className="w-full h-full object-cover transition duration-500 ease-in-out"
                />
            </div>

            {/* Logos Below Carousel */}
            <div className="flex justify-center items-center space-x-12">
                <img
                    src={iic}
                    alt="Left Logo"
                    className="h-24 w-28 sm:h-32 sm:w-36 object-contain"
                />
                <img
                    src={tup}
                    alt="Right Logo"
                    className="h-24 w-28 sm:h-32 sm:w-36 object-contain"
                />
            </div>
        </div>
    );
};

export default ConferenceLogos;
