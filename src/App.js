import React from "react";
import img1 from "./diamond.jpeg"
import { NavBar } from "./components/Navbar";
import Header from "./components/Header";

export default function HeroComponent() {
  return (
    <>
      <Header />
      <NavBar />
      <div className='bg-white h-full w-full bg-cover bg-center p-20'>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 text-4xl font-bold text-center">
            Hero section with background image
          </h1>
          <p className="text-lg text-center text-white">
            This isLorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <img src={img1} alt="Diamond Jubilee" className="mt-4 w-[400px]" />
          <div className="mt-4">
            <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}