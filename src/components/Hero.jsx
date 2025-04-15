import { Link } from "react-router-dom";
import img1 from "./assests/clgRed.jpg";
import newImg from "./new.gif";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={img1} alt="Background" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-24 pb-12">
        <h1 className="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4">
          Government College of Engineering, Amravati
        </h1>
        <h5 className="lg:text-3xl my-2 font-semibold text-xl">Present's</h5>
        <h3 className="lg:text-6xl text-3xl font-bold lg:font-extrabold tracking-wide">ICAIISD 2025</h3>
        <p className="text-xl font-semibold mt-7">
          2<sup>nd</sup> International Conference on Artificial Intelligence (AI) Innovations for Societal Development
        </p>
        <p className="text-xl font-semibold mt-3">Government College of Engineering, Amravati</p>
        <p className="text-xl font-semibold mb-10">Date:&nbsp;&nbsp;19 & 20 December,&nbsp;&nbsp;2025</p>

        {/* Important Dates Section */}
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white rounded-xl overflow-hidden text-center text-sm font-medium">
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
      </div>
    </div>
  );
};
