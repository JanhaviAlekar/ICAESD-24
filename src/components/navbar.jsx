import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import locofy from "./assests/diamond.png";
import icalogo from "./assests/icalogo.png";
import mahalogo from "./assests/mahaLogo.png";
import logo1 from "./assests/logo.png";
import { useRef } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");

    // Scroll after a short delay to ensure page has navigated
    setTimeout(() => {
      const element = document.getElementById("submission-guideline");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // adjust delay as needed
  };
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(false);
      setShowDropdown(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutDropdownItems = [
    { label: "About", path: "/about" },
    { label: "CFP", path: "/cfp" },
    { label: "Presentation Guidelines", path: "/presentation-guide" },
    { label: "Important Dates", path: "/dates" },
    { label: "Conference Tracks", path: "/tracks" },
    {
      label: "CMT ACKNOWLEDGMENT",
      path: "https://icaiisd25.gcoea.ac.in/acknowledgement/",
      external: true,
    },
    { label: "Publishing and Indexing", path: "/publishing" },
  ];

  return (
    <div className="w-full z-50 p-0">
      {/* Top Strip with Visitor Counter and Maha Logo */}
      <div className="relative">
        {/* Top Strip with Visitor Counter and Maha Logo */}
        <div className="w-full flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-900 via-purple-700 to-blue-900 text-white text-sm">
          {/* Visitor Count */}
          <a href="" target="_blank" title="Web Counter">
            Visitor's Count
            <img
              src="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=p&num=5&uid=bjh"
              title="Web Counter"
              alt="1249"
            />
          </a>

          {/* Center Maha Logo */}
          <div className="flex-1 flex justify-center">
            <img src={mahalogo} alt="Maha Logo" className="w-[85px] h-[65px]" />
          </div>

          {/* Invisible Spacer */}
          <div className="w-[85px] h-[65px] opacity-0"></div>
        </div>

        {/* Mobile Toggle - Absolutely Positioned to Right Corner */}
        <div className="absolute top-6 right-4 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`${
          scrolled
            ? "fixed top-0 left-0 w-full z-40 bg-white shadow-md"
            : "relative"
        } text-[#000080] transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-2 lg:px-10 flex-wrap lg:flex-nowrap">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center">
            <img src={locofy} className="w-[76px] h-[74px] mr-2" alt="Logo" />
            <img src={icalogo} className="w-[180px] h-[80px] mr-2" alt="Logo" />
          </Link>

          {/* Menu Items */}
          <div
            className={`w-full lg:flex lg:items-center lg:justify-between ${
              isOpen ? "block mt-4" : "hidden lg:block"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-base font-medium lg:ml-16">
              <NavItem to="/" label="Home" />

              {/* About Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="mt-2 lg:mt-0 flex items-center"
                >
                  About
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 10 6" fill="none">
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
                  <ul className="absolute z-30 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-60 p-1">
                    {aboutDropdownItems.map((item) =>
                      item.external ? (
                        <li key={item.label}>
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-[#33358c] hover:bg-gray-100"
                            onClick={() => setShowDropdown(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ) : (
                        <li key={item.label}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-[#33358c] hover:bg-gray-100"
                            onClick={() => setShowDropdown(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              <NavItem to="/author-guide" label="Guideline" />
              <NavItem to="/accommodation" label="Accommodation" />
              <NavItem to="/advisory" label="Advisory Board" />
              <NavItem to="/committees" label="Committees" />
              <NavItem to="/gallery" label="Gallery" />
              <NavItem to="/contact" label="Contact" />
              <button onClick={handleClick} className="text-left">
                Submit Paper
              </button>

              <NavItem to="/register" label="Registration" />
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex items-center justify-center gap-2 bg-white border-b border-gray-200 lg:flex py-2">
            <img src={logo1} alt="Logo Right" className="w-[77px] h-[70px]" />
          </div>
        </div>
      </nav>
    </div>
  );
};

// ✅ Reusable NavItem Component
const NavItem = ({ to, label }) => (
  <Link to={to} className="mt-2 lg:mt-0 group relative">
    {label}
    <div className="bg-purple-900 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
  </Link>
);
