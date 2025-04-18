import { Venue } from "../components/venue";
import { Guidelines } from "../components/Guidelines";
import { Hero } from "../components/Hero";
import { About } from "../components/about";
import { Timeline } from "../components/timeline";
import Sponsor from "../components/Sponsors/Sponsor";
import patrons from "../components/assests/patrons/patrons"
import notableSpeakers from "../components/assests/notable speakers/notableSpeakers"
import organizingC from "../components/assests/organizing/organizing"
import newImg from '../components/new.gif'
import { Link } from "react-router-dom";
import scrs from "../components/scrsLogo.jpg"
import { NewAbout } from "../components/newAbout";
import ConferenceLogos from "../components/conferenceLogos";

const Body = () => {
  return (
    <>
      <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
        {/* <img src={diamond} className="w-[64px] h-[64px] mr-4" alt="Logo" /> */}
      </div>
      <Hero />
      <ConferenceLogos />
      {/* <div className="flex justify-center items-center lg:mx-24 mx-6 mt-2">
        <div class="relative flex overflow-x-hidden">
          <div class="flex py-4 animate-marquee whitespace-nowrap">
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Conference Registration is Closed for Accepted Paper
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Conference Registration is Closed for Accepted Paper
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Conference Registration is Closed for Accepted Paper
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                ICAIISD 2025 Paper Template Download from here
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Full submission paper process started
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                ICAIISD 2025 Paper Template Download from here
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1-qmewNLL77cZXswhenHLs_lb5GnZXjVbxIZzzlMkAsc/edit?usp=sharing">
                Check out the Copyright Form
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Full submission paper process started
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1-qmewNLL77cZXswhenHLs_lb5GnZXjVbxIZzzlMkAsc/edit?usp=sharing">
                Check out the Copyright Form
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
          </div>
          <div class="flex py-4 animate-marquee whitespace-nowrap">
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                ICAIISD 2025 Paper Template Download from here
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Full submission paper process started
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                ICAIISD 2025 Paper Template Download from here
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </span>
            <span class="text-sm mx-4 flex items-center">
              <a class="text-[#000080] font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                Full submission paper process started
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" /> "     "
              </a>
            </span>
          </div>
        </div>
      </div>
      <NewAbout /> */}
      <About />
      {/* <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-0 mx-2 my-10 ">
        <div className="m-2 h-[500px] lg:col-span-3 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-8  bg-[#33358c] w-2/3 py-2 text-center rounded-lg text-lg font-semibold transition  ">
            Important Dates
          </div>
          <Timeline />
        </div>
        <div className="m-4 lg:col-span-3 w-90%  bg-[#33358c] flex justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <Guidelines />
        </div>
        <div className="m-2 h-[500px] lg:col-span-2 flex flex-col mt-8 items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-3  bg-[#33358c] w-2/3  py-2 text-center rounded-lg text-lg font-semibold transition  ">
            Announcements
          </div>
          <ul class=" ml-6 mt-4 leading-relaxed">
            <li class='py-2 font-bold'>
              Presentation Guidelines for Presenting Authors  <Link
                to="/presentation-guide"
                class="px-4 py-2 font-bold text-[#33358c] hover:text-[#33358c] hover:bg-gray-200"
              >
                Check here
              </Link>

            </li>
            <li class='py-2 font-bold'>
              Presentation Schedule- Theme Wise- ICAIISD 2025  <Link
                to="/presentationSchedule"
                class="px-4 py-2 font-bold text-[#33358c] hover:text-[#33358c] hover:bg-gray-200"
              >
                Check here
              </Link>
              <a class="px-4 py-2 font-bold text-[#33358c]" href="https://drive.google.com/file/d/1Ws-6bbqTCuZjjeaRiJtYbSy_YhUj9e60/view" >or Download</a>
            </li>
            <li class='py-2 font-bold'>
              Conference Registration is Closed for Accepted Paper
              <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
            </li>
            <li class='py-2 font-semibold flex items-center'>Full submission paper process started <img class="h-4 ml-2" src={newImg} alt="Submit Icon" /></li>
            <li class='py-2 font-[400]'>
              <a class=" font-semibold flex items-center" href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                ICAIISD 2025 Paper Template Download from here
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </li>
            <li class='py-2 font-[400]'>
              <a class=" font-semibold flex items-center" href="https://docs.google.com/document/d/1-qmewNLL77cZXswhenHLs_lb5GnZXjVbxIZzzlMkAsc/edit?usp=sharing">
                Copyright Form
                <img class="h-4 ml-2" src={newImg} alt="Submit Icon" />
              </a>
            </li>
            <li class='py-2 font-semibold flex items-center'><Link to="./author-guide">Check Out the guidelines</Link></li>
          </ul>
        </div>
      </div> */}
      <p className="lg:px-16 px-6 py-8 text-3xl  font-bold mb-4 lg:mx-10 sm:mx-2 pb-6 lg:pb-4 tracking-wide"><span className="tracking-wide underline underline-offset-8 decoration-4 decoration-[#E30022]">Kno</span>wledge Partner</p>
      <div className="mx-auto flex flex-col sm:flex-row gap-2 justify-center items-center">

        <img src={scrs} alt="Knowledge Partner here" className="h-20 w-24 sm:h-36 sm:w-40" />
      </div>
      <div className="mx-auto" id="imp">
        {/* <Sponsor users={patrons} word="Patrons" />
        <Sponsor users={notableSpeakers} word="International Advisory Board" /> */}
        <Sponsor users={organizingC} word="Organizing Committee" />
      </div>
      {/* <hr className="my-10 w-[300px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" /> */}

      <Venue></Venue>
    </>
  );
};

export default Body;
