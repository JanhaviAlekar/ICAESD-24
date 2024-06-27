import React from 'react';
import newImg from './new.gif'
const ManuscriptReviewProcess = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl p-6">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">ICA</span>ESD 2024 Paper Template</p>
                    <ul className="list-disc  ml-6 mb-6 lg:mb-8 leading-relaxed">
                        <li className='py-2'>
                            <a className='text-[#000080] cursor-pointer font-semibold flex items-center' href="https://docs.google.com/document/d/1FqbPM4Ud88WSJW7vWN5WM7bpcKL7CI3i/edit?usp=sharing&ouid=110172478495944119850&rtpof=true&sd=true">
                                ICAESD 2024 Paper Template Download from here
                                <img className="h-4 ml-2" src={newImg} alt="Submit Icon" />
                            </a>
                        </li>
                    </ul>
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission of Paper</p>
                    <ul className="list-disc  ml-6 leading-relaxed ">
                        <li className='py-2 font-[400]'>The conference welcomes paper submission from researchers, practitioners, academicians and students through Easy Chair conference management system - <br /><span className='text-[#000080] cursor-pointer font-semibold'>   (https://easychair.org/conferences/?conf=icaesd2024). </span>  </li>
                        <li className='py-2 font-[400]'>All the accepted and presented papers will be published in UGC CARE JOURNAL (Indian Journal of Technical Education) subject to quality and policy check by the publisher. All rights for presentation & publication of paper are reserved by ICAESD 2024 and its decision regarding papers will be final</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-6xl p-6">
                    <p className="text-3xl font-bold mb-4 tracking-wide leading-normal"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission Process:</p>
                    <ul className="list-disc  ml-6 leading-relaxed ">
                        <li class='py-2 font-[400]'>Kindly use the Full Paper Template IEEE <b>(Two Column Format)</b> provided on the website for formatting the paper. <br />Full papers should have minimum 4 pages and maximum 6 pages.</li>
                        <li class='py-2 font-[400]'>The paper should be original and should not have been published or submitted for review in any journal or conferences.</li>
                        <li class='py-2 font-[400]'>Plagiarism of any type, if detected, will lead to rejection of the manuscript. No request will be entertained for plagiarism related queries.</li>
                        <li class='py-2 font-[400]'>Only two papers per author are permitted for submission.</li>
                        <li class='py-2 font-[400]'>Please mention the most relevant theme of the manuscript as per the themes mentioned in the EasyChair submission process.</li>
                        <li class='py-2 font-[400]'>Tables, figures, and images should have appropriate captions and be of good visual quality. Each of these items must be cited inline in the main text of the manuscript. References should be provided and properly cited in the paper.</li>
                        <li class='py-2 font-[400]'>If the research included in the manuscript is funded or supported by any institution, agency, or organization etc, please indicate the same under the "Acknowledgement” section of the manuscript at the end of the paper.</li>
                        <li class='py-2 font-[400]'>The paper must be submitted in PDF format only for the review process. Camera Ready Copy will have to be submitted in both Word and PDF formats.</li>
                        <li class='py-2 font-[400]'>Before submitting the manuscript, please ensure that the language used (English) is clear, concise, coherent, and grammatically correct.</li>
                        <li class='py-2 font-[400]'>Upload the full paper only through the Conference submission Platform: EasyChair<br />
                            <span class='text-[#000080] cursor-pointer font-semibold'><a href="https://easychair.org/conferences/?conf=icaesd2024" >(https://easychair.org/conferences/?conf=icaesd2024)</a></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
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
