import React from 'react';
import { Link } from 'react-router-dom';

const RegsiterDetails = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl p-6 leading-7">
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
                    </ul>
                    <p className="mb-4">
                        For International candidates: Contact Dr. S.A. Lohi.
                    </p>
                    <p className="mb-4">
                        <strong>Step 2 (Fill Registration Form):</strong><br />
                        After making payment, authors are required to fill the Conference/Attendee Registration Form.<br/>

                    </p>  <Link to="/register" class="text-white bg-[#E30022]  transition-transform transform-gpu hover:-translate-y-2 hover:shadow-lg py-2 my-4 px-4 rounded-full text-lg font-semibold ">Submit your Paper</Link>
                    <p className="mb-4 text-red-500 mt-4">
                       <b> Registration fees once paid will not be refunded under any circumstances.</b>
                    </p>
                </div>

            </div>

        </>
    );
}

export default RegsiterDetails;
