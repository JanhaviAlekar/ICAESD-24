import { Venue } from "../components/venue";
import { Guidelines } from "../components/Guidelines";
import { Hero } from "../components/Hero";
import AutoScrollList from "../components/list";
import { About } from "../components/about";
import { Timeline } from "../components/timeline";
import Sponsor from "../components/Sponsors/Sponsor";
import patrons from "../components/assests/patrons/patrons"
import notableSpeakers from "../components/assests/notable speakers/notableSpeakers"
import organizingC from "../components/assests/organizing/organizing"

const Body = () => {
  return (
    <>
      <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
        {/* <img src={diamond} className="w-[64px] h-[64px] mr-4" alt="Logo" /> */}
      </div>
      <Hero  />
      <About />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-0 mx-2 my-10 ">
        <div className="m-2 h-[500px] lg:col-span-3 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-8  bg-[#33358c] w-2/3 hover:bg-yellow-300 py-2 text-center rounded-lg text-lg font-semibold transition  hover:text-[#33358c]">
            Important Dates
          </div>
          <Timeline />
        </div>
        <div className="m-4 lg:col-span-3 w-90%  bg-[#33358c] flex justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <Guidelines />
        </div>
        <div className="m-2 h-[500px] lg:col-span-2 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-3  bg-[#33358c] w-2/3 hover:bg-yellow-300 py-2 text-center rounded-lg text-lg font-semibold transition  hover:text-[#33358c]">
            Announcements
          </div>
          <AutoScrollList />
        </div>
      </div>
      <div className="mx-auto">
        <Sponsor users={patrons} word="Patrons"/>
        <Sponsor users={notableSpeakers} word="Notable speakers" />
        <Sponsor users={organizingC} word="Organizing Committee"/>
      </div>
      <hr className="my-10 w-[300px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" />

      <Venue></Venue>
    </>
  );
};

export default Body;
