import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./assests/clgRed.jpg";
import newImg from "./new.gif";
import scoup from "./assests/scopusindex.gif";

export const Hero = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-19T00:00:00");
    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={img1} alt="Background" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-2 pt-2 pb-10">
        <h1 className="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4">
          Government College of Engineering, Amravati
        </h1>
        <h5 className="lg:text-3xl my-2 font-semibold text-xl">Present's</h5>
        <div className="relative flex justify-center items-center w-full  mb-4 pb-14">
          <h3 className="mt-2 lg:text-6xl text-3xl font-bold lg:font-extrabold tracking-wide text-center">
            ICAIISD 2025
          </h3>
          <img
            src={scoup}
            alt="Scopus Indexed"
            className="absolute right-0 lg:right-16 w-[80px] h-[80px] lg:w-[180px] lg:h-[180px]"
          />
        </div>

        <p className="lg:text-3 text-2xl font-bold mt-7 text-yellow-300 pb-2" >
          2<sup>nd</sup> International Conference on Artificial Intelligence (AI) Innovations for Societal Development
        </p>
        <p className="text-xl font-semibold mb-6">Date:&nbsp;&nbsp;19 & 20 December,&nbsp;&nbsp;2025</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 text-center bg-black bg-opacity-30 p-6 rounded-xl shadow-lg mt-4">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-bold text-yellow-300">
                {Object.values(timeLeft)[idx]}
              </span>
              <span className="uppercase text-sm lg:text-base text-gray-200 tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-200 italic">Live countdown to the conference!</p>
      </div>
    </div>
  );
};
