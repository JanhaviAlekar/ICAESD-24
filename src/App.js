import React from "react";
import Header from "./components/Header";
import { Venue } from "./components/venue";
import { Timeline } from "./components/timeline";
import { Tracks } from "./components/tracks";
import { Footer } from "./components/footer";
import img1 from "./components/img12.JPG"
import {NavBar} from "./components/1";
import lok from "./components/mahaLogo.png"
import { Hero } from "./components/Hero";
import AutoScrollList from "./components/list";
import { About } from "./components/about";
export default function HeroComponent() {
  return (
    <>
      <NavBar />
       <Hero/>
       <About/>
       <div className="grid grid-cols-1 md:grid-cols-8 gap-x-0 mx-2 my-2">
  <div className="m-2 h-[500px] md:col-span-2 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
    <div class="text-white mt-8  bg-[#33358c] w-2/3 hover:bg-yellow-300 py-2 text-center rounded-lg text-lg font-semibold transition  hover:text-[#33358c]">Important Dates</div>
    <AutoScrollList/>
  </div>
  <div className="m-4 md:col-span-4 bg-[#33358c] flex justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
    <Tracks/>
  </div>
  <div className="m-2 h-[500px] md:col-span-2 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
  <div class="text-white mt-8  bg-[#33358c] w-2/3 hover:bg-yellow-300 py-2 text-center rounded-lg text-lg font-semibold transition  hover:text-[#33358c]">Announcements</div>
    <AutoScrollList/>
  </div>
</div>

      <hr
      className="my-10 w-[300px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100"
    />
      <Venue></Venue>
      <Footer/>
    </>
  );
}