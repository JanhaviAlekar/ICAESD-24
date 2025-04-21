import React from 'react';

function SponsorCard({ img, name, detail }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full max-w-xs md:max-w-[230px] h-[320px] px-6 py-6 border border-blue-800">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full border-2 border-blue-800 mb-4 transition-transform duration-300 hover:rotate-1 "
      />
      <div className="text-center">
        <h2 className="text font-semibold text-[#000080]">{name}</h2>
        <p className="text-red-500 text-sm mt-2 font-dark bold">
          {detail}
        </p>
      </div>
    </div>
  );
}

export default SponsorCard;
