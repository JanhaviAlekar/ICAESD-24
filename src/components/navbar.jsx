import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import locofy from "./assests/diamond.jpeg";
import mahalogo from "./assests/mahaLogo.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(false);
      setShowDropdown(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutDropdownItems = [
    { label: "About", path: "/about" },
    { label: "CFP", path: "/cfp" },
    { label: "Presentation Guidelines", path: "/presentation-guide" },
    { label: "Important Dates", path: "/dates" },
    { label: "Submission Guidelines", path: "/" },
    { label: "Conference Tracks", path: "/" },
    { label: "Publishing and Indexing", path: "/" },
    { label: "Special Session", path: "/" },
    { label: "Important Links", path: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FEFFFE] text-[#000080] shadow-md">
      
<div className="flex items-center justify-between px-4 py-2 lg:px-10 flex-wrap lg:flex-nowrap flex space-x-4">
  
{/* Logo + Title */}
        <Link to="/" className="flex items-center">
          <img src={locofy} className="w-[64px] h-[64px] mr-2" alt="Logo" />
          <p className="font-bold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
            ICAIISD'25
          </p>
        </Link>
        
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6 4L14 12M14 4L6 12"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Main Menu */}
        <div
  className={`w-full lg:flex lg:items-center lg:justify-between ${
    isOpen ? "block mt-4" : "hidden lg:block"
  }`}
>
  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-base font-medium lg:ml-16">
    <Link to="/" className="mt-2 lg:mt-0 group relative">
      Home
      <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
    </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => !isMobile && setShowDropdown(true)}
              onMouseLeave={() => !isMobile && setShowDropdown(false)}
            >
              <button
                type="button"
                onClick={() => isMobile && setShowDropdown(!showDropdown)}
                className="mt-2 lg:mt-0 flex items-center group"
              >
                About
                <svg
                  className="w-3 h-3 ml-1"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {showDropdown && (
                <ul className="absolute z-30 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-60 p-2 lg:block">
                  {aboutDropdownItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 text-sm text-[#33358c] hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/author-guide" className="mt-2 lg:mt-0 group relative">
              Guideline
              <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/accommodation" className="mt-2 lg:mt-0 group relative">
              Accommodation
              <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/committees" className="mt-2 lg:mt-0 group relative">
              Committees
              <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/contact" className="mt-2 lg:mt-0 group relative">
              Contact
              <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/register" className="mt-2 lg:mt-0 group relative">
              Submit Paper
              <div className="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Maha Logo */}
          <div className="flex justify-center mt-4 lg:mt-0">
            <img src={mahalogo} className="w-[56px] h-[56px]" alt="Maha Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};
