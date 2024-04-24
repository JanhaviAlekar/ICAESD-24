import React, { useState } from 'react';
import locofy from "./diamond.jpeg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#FAFAFA] text-[#33358c] shadow-md">
      <div className="flex items-center justify-evenly   flex-wrap p-2">
        <div className="flex items-center justify-center flex-shrink-0 mr-14 ">
          <img src={locofy} className="w-[64px] h-[64px] mr-4" alt="Logo" />
          <p className='tetx-white font-bold text-3xl'>ICARTET'24</p>
        </div>
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
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-md font-semibold lg:flex-wrap text-[#33358c]">
     
 <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-[#33358c]  hover:bg-gray-200  hover:rounded-lg   text-md  py-2.5 text-center inline-flex items-center  text-[#33358c]-200 " type="button">About
  <svg class="w-2.5 h-2.5 ms-1 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown" class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  ">
    <ul class="py-2 text-sm text-[#33358c] " aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2  :hover:text-[#33358c] hover:bg-gray-200">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2hover:text-[#33358c] hover:bg-gray-200">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200">Sign out</a>
      </li>
    </ul>
</div>

<a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
                Publication
              </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
             Agenda
            </a>

            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
              Committees
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
              Contact
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
              Register
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
              Venue
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4">
              Participation Policy
            </a>
            
          </div>
      
        </div>
        <div className='flex flex-wrap'>
        <img src={locofy} className="w-[64px] h-[64px] mr-4" alt="Logo" />
        </div>
      </div>
      
    </nav>
  );
};
