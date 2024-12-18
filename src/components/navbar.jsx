import React, { useState, useEffect } from "react";
import locofy from "./assests/diamond.jpeg";
import mahalogo from "./assests/mahaLogo.png";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Close the navbar when navigating to another page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(false); // Close the dropdown when the window is resized
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#FEFFFE] text-[#000080]  shadow-md ">
      <div className="flex items-center justify-between lg:justify-between   flex-wrap p-2 pb-0 mx-0 lg:mr-4">
        <Link to="/">
          <div className="flex items-center justify-center flex-shrink-0 mr-4 md:mr-14 ">
            <img src={locofy} className="w-[74px] h-[74px]  mr-4" alt="Logo" />
            <p className=" font-bold text-xl lg:text-3xl tracking-wide">
              ICAESD'24
            </p>
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
            }`}
        >
          <div className="text-md font-medium lg:flex-wrap ">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200  mr-4 group"
            >
              Home
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            <button
              id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
              className=" hover:rounded-lg text-md  text-center inline-flex items-center text-[#33358c]-200 group relative mr-4"
              type="button"
            >
              About
              <svg
                className="w-2.5 h-2.5 ms-1 mr-4 group-hover:text-[#33358c] pl-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
              <div className="absolute bottom-0 left-0 bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </button>
            {
              isMobile && (
                <ul
                  class="py-2 text-sm text-[#33358c] "
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="/about"
                      class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cfp"
                      class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                    >
                      CFP
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Important Dates
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Submission Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-2 py-2hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Conference Tracks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Publishing and Indexing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Special Session
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Important Links
                    </a>
                  </li>
                </ul>
              )
            }

            <div
              id="dropdownHover"
              class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
            >
              <ul
                class="py-2 text-sm text-[#33358c] "
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    to="/about"
                    class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cfp"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    CFP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/presentation-guide"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Presentation Guidelines
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Important Dates
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Submission Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Conference Tracks
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Publishing and Indexing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Special Session
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Important Links
                  </a>
                </li>
              </ul>
            </div>

            <Link
              to="/author-guide"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Guideline
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>

            <Link
              to="/accommodation"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Accommodation
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>


            <Link
              to="/committees"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Committees
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Contact
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            <Link
              to="/register"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Submit Paper
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            {/* {
              isMainPage ? 
              <a
                href="#venue"
                className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4"
              >
                Venue
              </a>
              :
                <Link
                to='/#venue'
                className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4"
              >
                Venue
              </Link>
              

            } */}



          </div>
          <div className="flex">
            <img src={mahalogo} className="w-[64px] h-[64px] " alt="Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};
