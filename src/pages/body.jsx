import { Venue } from "../components/venue";
import { Guidelines } from "../components/Guidelines";
import { Hero } from "../components/Hero";
import { About } from "../components/about";
import { Timeline } from "../components/timeline";
import Sponsor from "../components/Sponsors/Sponsor";
import patrons from "../components/assests/patrons/patrons";
import notableSpeakers from "../components/assests/notable speakers/notableSpeakers";
import organizingC from "../components/assests/organizing/organizing";
import newImg from "../components/new.gif";
import { Link } from "react-router-dom";
import scrs from "../components/scrsLogo.jpg";
import amc from "../components/amc.jpg";
import tatam from "../components/tatam.png";
import tcs from "../components/tcs.jpeg";
import ijit from "../components/ijit.jpeg";
import springer from "../components/springer.png";
import ConferenceLogos from "../components/conferenceLogos";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Body = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToSubmission) {
      const element = document.getElementById("submission-guideline");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div className="mt-[1px] px-4 pt-0 bg-white flex items-center justify-center">
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
      <div className="px-4 md:px-8 lg:px-16 py-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Technology Partner Card */}
          <div className="bg-purple-700 flex-1 rounded-2xl p-6 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl text-white font-bold mb-6 tracking-wide">
              <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                Tec
              </span>
              hnology Partner
            </p>
            <div className="flex justify-center items-center">
              <img
                src={amc}
                alt="Technology Partner Logo"
                className="h-20 w-24 sm:h-36 sm:w-40"
              />
            </div>
          </div>
          {/* Knowledge Partner Card */}
          <div className="bg-purple-700 flex-1 rounded-2xl p-6 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl text-white font-bold mb-6 tracking-wide">
              <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                Kno
              </span>
              wledge Partner
            </p>
            <div className="flex justify-center items-center">
              <img
                src={scrs}
                alt="Knowledge Partner Logo"
                className="h-20 w-24 sm:h-36 sm:w-40"
              />
              <img
                src={tatam}
                alt="Knowledge Partner Logo"
                className="h-20 w-24 sm:h-36 sm:w-40"
              />
              <img
                src={tcs}
                alt="Knowledge Partner Logo"
                className="h-20 w-24 sm:h-36 sm:w-40"
              />
            </div>
          </div>

          <div className="bg-purple-700 flex-1 rounded-2xl p-6 text-center shadow-lg">
            <p className="text-2xl sm:text-3xl text-white font-bold mb-6 tracking-wide">
              <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                Pub
              </span>
              lication Partner
            </p>
            <div className="flex justify-center items-center">
              <img
                src={ijit}
                alt="Technology Partner Logo"
                className="h-20 w-50 sm:h-36 sm:w-85"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="submission-guideline">
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl w-full space-y-12 py-10">
            {/* Author Guidelines */}
            <section>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                  Aut
                </span>
                hor Guidelines
              </h2>
              <ul className="list-disc ml-6 space-y-4 text-lg leading-relaxed">
                <li>
                  <a
                    className="text-[#000080] font-semibold inline-flex items-center hover:underline hover:text-blue-900 transition"
                    href="https://docs.google.com/document/d/1dq6NiwC2vTW_LgWzEIh98HpubL6kF5xntbyz2nofjq8/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ICAIISD 2025 Paper Template Download from here
                    <img
                      className="h-4 w-4 ml-2"
                      src={newImg}
                      alt="Download Icon"
                    />
                  </a>
                </li>
              </ul>
            </section>

            {/* Submission of Paper */}
            <section>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                  Sub
                </span>
                mission of Paper
              </h2>
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                The conference welcomes paper submission from researchers,
                practitioners, academicians and student through Microsoft
              </p>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIISD2025%2FSubmission%2FManage"
                className="text-[#000080] text-lg underline font-semibold  hover:text-blue-900 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                CMT submission link
              </a>
              <p className="text-lg text-align-justify   font-medium leading-relaxed text-gray-800">
                {" "}
                All the accepted and presented papers will be published in
                (Scopus Indexed Springer Nature) International Journal of
                Information Technology ISSN: 2511-2104 subject to the acceptance
                of paper by the Journal. All the rights for presentation of the
                paper are reserved by ICAIISD 2025 Team. For journal
                publication, the Journal Editorial Board reserves the right of
                rejecting any paper or all the papers, at any stage of its
                consideration, without assigning any reason. The decision of the
                Journal Editor-in-Chief shall be final and binding on all.
                <p>
                  Note:
                  <ul className="list-disc ml-6 space-y-4 text-lg text-justify font-medium text-gray-800">
                    <li>
                      GCoEA/ICAIISD 2025 Team in no ways be responsible for the
                      article publication and its article publishing fee (if
                      applicable) in the Scopus Indexed Journal.
                    </li>
                    <li>
                      All communications regarding submission, acceptance and
                      publication of paper in the Scopus Indexed Journal will be
                      made ONLY by the Journal Publication and NOT by the
                      GCoEA/ICAIISD 2025.
                    </li>
                  </ul>
                </p>
              </p>
            </section>

            {/* Submission Guidelines */}
            <section>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
                  Sub
                </span>
                mission Guidelines
              </h2>
              <ul className="list-disc ml-6 space-y-4 text-lg font-medium leading-relaxed text-gray-800 leading-relaxed ">
                <li>
                  Use the Full Paper Template IEEE Two Column Format. Number of
                  Pages Must be 06 only.
                </li>
                <li>
                  Papers must be original work and have been not
                  published/submitted elsewhere.
                </li>
                <li>
                  Plagiarism/Similarity index of the paper must be 10% or less.
                </li>
                <li>
                  Plagiarism level above 10% will attract immediate rejection of
                  the paper.
                </li>
                <li>
                  Indicate the most relevant theme during the paper submission.
                </li>
                <li>
                  Ensure all tables, figures and images have captions and are
                  referenced in the text properly.
                </li>
                <li>
                  If Paper/Research work is funded by any institution or agency,
                  include acknowledgement.
                </li>
                <li>
                  Submit the paper in PDF format for review. CRC version must be
                  in both Word and PDF formats.
                </li>
                <li>
                  Ensure proper grammar, clarity and coherence in English
                  language of the paper.
                </li>
                <li>
                  Upload the full paper through the official conference
                  submission portal:
                  <br />
                  <a
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIISD2025%2FSubmission%2FManage"
                    className="text-[#000080] underline font-semibold hover:underline hover:text-blue-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CMT submission link
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <div className="mx-auto" id="imp">
        {/* <Sponsor users={patrons} word="Patrons" />
          <Sponsor users={notableSpeakers} word="International Advisory Board" /> */}
        <Sponsor users={organizingC} word="" />
      </div>
      {/* <hr className="my-10 w-[300px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" /> */}

      <Venue></Venue>
    </>
  );
};

export default Body;
