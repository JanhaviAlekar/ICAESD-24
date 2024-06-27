import React from 'react';
import { Link } from 'react-router-dom';
import newImg from "./assests/QR.jpeg"
import newImg1 from "./new.gif"

const RegsiterDetails = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl p-6 leading-7">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">ICA</span>ESD 2024 Paper Template</p>
                    <ul className="list-disc  ml-6 mb-6 lg:mb-8 leading-relaxed">
                        <li className='py-2'>
                            <a className='text-[#000080] cursor-pointer font-semibold flex items-center' href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                                ICAESD 2024 Paper Template Download from here
                                <img className="h-4 ml-2" src={newImg1} alt="Submit Icon" />
                            </a>
                        </li>
                    </ul>
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Reg</span>istration:</p>
                    <p className="mb-4">No papers received after the last date will be accepted.</p>
                    <p className="mb-4">
                        Original contributions based on the results of research and developments are solicited. Prospective authors are requested to submit their papers minimum four pages and maximum 8 pages. All the accepted and presented papers will be published in Conference Proceedings (Scopus/web of science/UGC Care etc.). ICAESD-2024 invites academicians, researchers, industry professionals for submitting their original, previously unpublished, and high-quality research papers.
                    </p>
                    <p className="mb-4">
                        The authors must agree that if the paper is accepted for oral/poster presentation, at least one of the authors will register for the conference and present the paper at the conference by completing the two-step registration process as mentioned:
                    </p>
                    <p className="mb-4">
                        <strong>Step 1: (Fee Submission)</strong><br />
                        Authors/Attendees are requested to pay the Registration Fee (via online payment mode only) to the following Bank Account:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Account name – Principal Government College of Engineering, Amravati</li>
                        <li>Account No.: 30775554748</li>
                        <li>IFSC Code: SBIN0012011</li>
                        <li>Bank Name: State Bank of India, Gadge Nagar Branch Amravati</li>
                        <br />
                        <br />
                        <table class="w-3/4 text-sm text-left rtl:text-right font-medium ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200  ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Category</th>
                                    <th scope="col" class="px-6 py-3">Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd:bg-white  even:bg-gray-50 even:dark:bg-gray-800 border-b border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">UG/PG/Ph.D. Students</th>
                                    <td class="px-6 py-4">Rs 3000.00</td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-50  border-b border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">Academician/ Faculty</th>
                                    <td class="px-6 py-4">Rs 4500.00</td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-50  border-b border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">Industry Person</th>
                                    <td class="px-6 py-4">Rs 6000.00</td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-50  border-b border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">Delegate from Abroad</th>
                                    <td class="px-6 py-4">USD 54</td>
                                </tr>
                                <tr class="odd:bg-white  even:bg-gray-50  border-b border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">Attendee</th>
                                    <td class="px-6 py-4">Rs 1500.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                    <p className="mb-4">
                        For International candidates: Contact Dr. S.A. Lohi.
                    </p>
                    <p className="mb-4">
                        <strong>Step 2 (Fill Registration Form):</strong><br />
                        After making payment, authors are required to fill the Conference/Attendee Registration Form.<br />

                    </p>
                    <Link to="https://easychair.org/conferences/?conf=icaesd2024" class="text-white bg-[#E30022]  transition-transform transform-gpu hover:-translate-y-2 hover:shadow-lg py-2 my-4 px-4 rounded-full text-lg font-semibold ">Submit your Paper</Link>
                    <img src={newImg} alt="qr" className='mt-6 h-[300px]'></img>
                    <p className="mb-4  mt-4">
                        <b> Upload the full paper through the Conference submission Platform: Easy-Chair
                            <br />(https://easychair.org/conferences/?conf=icaesd2024)</b>
                    </p>
                    <p className="mb-4 text-red-500 mt-4">
                        <b> Registration fees once paid will not be refunded under any circumstances.</b>
                    </p>
                </div>

            </div>

        </>
    );
}

export default RegsiterDetails;
