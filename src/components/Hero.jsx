import { Link } from "react-router-dom";
import img1 from "./assests/clgRed.webp";
import newImg from "./new.gif";
import scoup from "./assests/scopusindex.gif";

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
        <div className="relative flex justify-center items-center w-full mt-2 mb-4">
  <h3 className="lg:text-6xl text-3xl font-bold lg:font-extrabold tracking-wide text-center">
    ICAIISD 2025
  </h3>
  <img
    src={scoup}
    alt="Scopus Indexed"
    className="absolute right-0 lg:right-16 w-[80px] h-[80px] lg:w-[180px] lg:h-[180px]"
  />
</div>
        <p className="lg:text-2xl text-xl font-semibold mt-7 p-2 text-yellow-400 ">
          2<sup>nd</sup> International Conference on Artificial Intelligence (AI) Innovations for Societal Development
        </p>
        <p className="text-xl font-semibold mb-10">Date:&nbsp;&nbsp;19 & 20 December,&nbsp;&nbsp;2025</p>
  

        {/* Important Dates Section */}
      </div>
    </div>
  );
};
