import React from 'react';
import newImg from './new.gif'
const ManuscriptReviewProcess = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl py-6">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Aut</span>hor Guidelines</p>
                    <ul className="list-disc  ml-6 mb-6 lg:mb-8 leading-relaxed">
                        <li className='py-2'>
                            <a className='text-[#000080] cursor-pointer font-semibold flex items-center' href="https://docs.google.com/document/d/1dq6NiwC2vTW_LgWzEIh98HpubL6kF5xntbyz2nofjq8/edit?usp=sharing">
                                ICAIISD 2025 Paper Template Download from here
                                <img className="h-4 ml-2" src={newImg} alt="Submit Icon" />
                            </a>
                        </li>
                    </ul>
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission Of Paper</p>
                    <ul className="list-disc  ml-6 leading-relaxed ">
                        <li className='py-2 font-[600]'>The  conference  welcomes  paper  submission  from  researchers ,  practitioners ,  academicians  and  students .<br /><span className='text-[#000080] cursor-pointer font-semibold'>  </span>  </li>
                        {/* <li className='py-2 font-[400]'>All the accepted and presented papers will be published in UGC CARE JOURNAL (Indian Journal of Technical Education) subject to quality and policy check by the publisher. All rights for presentation & publication of paper are reserved by ICAIISD 2025 and its decision regarding papers will be final</li> */}
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="max-w-6xl p-6">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission Guidelines:</p>
                    <ul className="list-disc ml-6 space-y-4 text-lg text-gray-700 leading-relaxed">
        <li>Use the Full Paper Template IEEE Two Column Format. Number of Pages Must be 06 only.</li>
        <li>Papers must be original work and have been not published/submitted elsewhere.</li>
        <li>Plagiarism/Similarity index of the paper must be 10% or less.</li>
        <li>Plagiarism level above 10% will attract immediate rejection of the paper.</li>
        <li>Indicate the most relevant theme during the paper submission.</li>
        <li>Ensure all tables, figures and images have captions and are referenced in the text properly.</li>
        <li>If  Paper/Research work is funded by any institution or agency, include acknowledgement.</li>
        <li>Submit the paper in PDF format for review. CRC version must be in both Word and PDF formats.</li>
        <li>Ensure proper grammar, clarity and coherence in English language of the paper.</li>
        <li>
          Upload the full paper through the official conference submission portal:<br />
          <a 
            href="https://" 
            className="text-[#000080] font-semibold hover:underline hover:text-blue-900 transition"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Conference Submission Portal
          </a>
        </li>
      </ul>
                </div>
            </div>
            <div className="">
                <div className="max-w-6xl p-6">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Man</span>uscript Review/Paper Acceptance Process</p>
                    <ul className="list-disc ml-6 leading-relaxed">
                        <li class='py-2 font-[400]'>Initial screening will be done to check compatibility with the conference theme & track.</li>
                        <li class='py-2 font-[400]'>Papers submitted in IEEE Two column format only will be considered for further processing.</li>
                        <li class='py-2 font-[400]'>Papers received in proper format will be checked for Plagiarism to confirm originality of the submitted work. Manuscript with less than permissible plagiarism will be accepted for further processing else will be sent back to the author for revision.</li>
                        <li class='py-2 font-[400]'>All the manuscripts with permitted plagiarism will be sent for technical and quality review. Double review process is applicable for all papers. Reviewer's comments will be communicated to the respective authors. Manuscripts recommended for revision by the reviewers will be reverted to the respective author with a notification for re-submission within a week's time from the date of notification.</li>
                        <li class='py-2 font-[400]'>Manuscript approved by the reviewers will be considered for final presentation and publication process.</li>
                        <li class='py-2 font-[400]'>The acceptance of the manuscript for presentation in the conference will be notified to the author by the respective Co-chairs.</li>
                    </ul>
                    <p className='py-2 font-[400]'>"Authors must read the guidelines carefully and use the appropriate article template."</p>
                </div>
            </div>
        </>
    );
}

export default ManuscriptReviewProcess;
