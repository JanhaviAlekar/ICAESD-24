import React from "react";

const ImportantDates = () => {
  const dates = [
    { title: "Full Paper Submission", date: "15th August 2025" },
    { title: "Acceptance/Rejection Notification", date: "30th September 2025" },
    { title: "Registration", date: "15th October 2025" },
    { title: "Final Paper/Camera Ready Submission", date: "30th October 2025" },
    { title: "Conference Date", date: "19-20th December 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-5 px-4 md:px-10">
      {/* Space for Top Navbar */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#E30022] mb-6 border-b-2 border-[#E30022] pb-2">
          Important Dates
        </h1>
        <ul className="space-y-4">
          {dates.map(({ title, date }, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
            >
              <span className="text-lg font-medium text-[#33358c]">
                {title}
              </span>
              <span className="text-base font-semibold text-gray-800">
                {date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantDates;
