import React from 'react';
import newImg1 from './new.gif';

const RegsiterDetails = () => {
  return (
    <div className="flex justify-center bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="w-full max-w-5xl space-y-10">

        {/* Header */}
        <div className="bg-purple-700 text-white rounded-2xl p-6 shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug mb-3">
            <span className="underline underline-offset-8 decoration-4 decoration-white">ICAIISD</span> 2025 Paper Template
          </h1>
          <ul className="list-disc pl-6 text-lg font-medium">
            <li>
              <a
                className="text-[#000080] font-semibold flex items-center hover:underline"
                href="https://docs.google.com/document/d/1dq6NiwC2vTW_LgWzEIh98HpubL6kF5xntbyz2nofjq8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICAIISD 2025 Paper Template Download from here
                <img className="h-4 ml-2" src={newImg1} alt="New" />
              </a>

              {/* Download Button */}
              <a
                href="https://docs.google.com/document/d/1dq6NiwC2vTW_LgWzEIh98HpubL6kF5xntbyz2nofjq8/export?format=docx"
                download
                className="mt-2 inline-block bg-[#000080] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0000cc] transition"
              >
                📥 Download Word File
              </a>
            </li>

          </ul>
        </div>

        {/* Registration Info */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            <span className="underline underline-offset-8 decoration-4 decoration-purple-700">Reg</span>istration:
          </h2>

          <p className="mb-4 text-base">No papers received after the last date will be accepted.</p>

          <p className="mb-4 text-base">
            Original contributions based on research and developments are solicited. Papers must be 4–8 pages long.
            Accepted and presented papers will be published in Conference Proceedings (Scopus/Web of Science etc.).
            ICAIISD-2025 invites academicians, researchers, and industry professionals to submit original, high-quality research.
          </p>

          <p className="mb-4 text-base">
            Authors must agree that if the paper is accepted, at least one author will register and present at the conference,
            completing the two-step process below:
          </p>

          {/* Step 1 */}
          <div className="bg-purple-50 border-l-4 border-purple-700 p-4 rounded-md mb-6">
            <p className="font-semibold text-purple-800 mb-2">Step 1: Fee Submission</p>
            <p className="text-base mb-2"><span className='text-blue-400 underline'>Link</span> Coming Soon</p>
            {/* <p className="text-base mb-2">Pay the registration fee (online only) to:</p>
            <ul className="list-disc pl-6 text-base space-y-1">
              <li>Account Name: Principal Government College of Engineering, Amravati</li>
              <li>Account No.: 30775554748</li>
              <li>IFSC Code: SBIN0012011</li>
              <li>Bank Name: State Bank of India, Gadge Nagar Branch Amravati</li>
            </ul> */}
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-purple-700 rounded-md overflow-hidden">
              <thead className="bg-purple-700 text-white text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Fee</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800 divide-y divide-purple-200">
                <tr><td className="px-6 py-4">UG/PG/Ph.D. Students</td><td className="px-6 py-4">Rs 6000.00</td></tr>
                <tr><td className="px-6 py-4">Academician/Faculty</td><td className="px-6 py-4">Rs 8500.00</td></tr>
                <tr><td className="px-6 py-4">Industry Person</td><td className="px-6 py-4">Rs 10000.00</td></tr>
                <tr><td className="px-6 py-4">Delegate from Abroad</td><td className="px-6 py-4">USD 200</td></tr>
                <tr><td className="px-6 py-4">Attendee</td><td className="px-6 py-4">Rs 3000.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step 2 & Notice */}
        <div className="bg-purple-100 text-gray-900 rounded-2xl p-6 shadow-md">
          {/* <p className="mb-4 text-base">
            For international candidates: Contact <strong>Dr. S.A. Lohi</strong>.
          </p> */}

          <p className="mb-4 text-base">
            <strong className="text-purple-800">Step 2: Fill Registration Form</strong><br />
            After payment, authors must complete the Conference/Attendee Registration Form.
          </p>
          <p className="text-base mb-2"><span className='text-blue-400 underline'>Link</span> Coming Soon</p>
          {/* <p className="text-red-700 font-semibold text-sm mt-6">
            * Registration fees once paid will not be refunded under any circumstances.
          </p> */}
        </div>

        {/* Step 3  */}
        <div className="bg-purple-100 text-gray-900 rounded-2xl p-6 shadow-md">
          <p className="mb-4 text-base"><strong className="text-purple-800">Step 3: Camera Ready Submission</strong></p>
          <p className="text-base mb-2"><span className='text-blue-400 underline'>Link</span> Coming Soon</p>
          {/* <p className="text-red-700 font-semibold text-sm mt-6">
            * Registration fees once paid will not be refunded under any circumstances.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default RegsiterDetails;
