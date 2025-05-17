import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import locofy from "./assests/diamond.jpeg";
import mahalogo from "./assests/mahaLogo.png";
import logo1 from "./assests/logo1.jpg";

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
    { label: "Publishing and Indexing", path: "/publishing" },
  ];

  return (
    <div className="w-full z-50 p-0">
      {/* Top Strip with Visitor Counter and Maha Logo */}
      <div className="w-full flex justify-between items-center px-4 py-2 relative bg-gradient-to-r from-purple-900 via-purple-700 to-blue-900 text-white text-sm">
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

      {/* Main Navigation Bar */}
      <nav className={`${scrolled ? "fixed top-0 left-0 w-full z-40 bg-white shadow-md" : "relative"} text-[#000080] transition-all duration-300`}>
        <div className="flex items-center justify-between px-4 py-2 lg:px-10 flex-wrap lg:flex-nowrap">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center">
            <img src={locofy} className="w-[64px] h-[64px] mr-2" alt="Logo" />
            <p className="font-bold text-2xl sm:text-3xl md:text-3xl text-purple-950">ICAIISD2025</p>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 4L14 12M14 4L6 12" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div className={`w-full lg:flex lg:items-center lg:justify-between ${isOpen ? "block mt-4" : "hidden lg:block"}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-base font-medium lg:ml-16">
              <NavItem to="/" label="Home" />
              
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
                  <ul className="absolute z-30 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-60 p-1 lg:block">
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

              <NavItem to="/author-guide" label="Guideline" />
              <NavItem to="/accommodation" label="Accommodation" />
              <NavItem to="/advisory" label="Advisory Board" />
              <NavItem to="/committees" label="Committees" />
              <NavItem to="/gallery" label="Gallery" />
              <NavItem to="/contact" label="Contact" />
<button onClick={handleClick}>
      Submit Paper
    </button>
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
