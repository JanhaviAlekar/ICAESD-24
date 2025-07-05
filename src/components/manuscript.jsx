import React from 'react';
import newImg from './new.gif';

const ManuscriptReviewProcess = () => {
    return (
        <>
            <div className="my-24 px-4 lg:px-36">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Author Guidelines */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 tracking-wide leading-snug">
                            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Aut</span>hor Guidelines
                        </h2>
                        <ul className="list-disc ml-6 space-y-3 text-lg text-gray-800">
                            <li>
                                <a
                                    className="text-[#000080] font-semibold flex items-center hover:underline"
                                    href="https://docs.google.com/document/d/1dq6NiwC2vTW_LgWzEIh98HpubL6kF5xntbyz2nofjq8/edit?usp=sharing"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    ICAIISD 2025 Paper Template Download from here
                                    <img className="h-4 ml-2" src={newImg} alt="New" />
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Submission of Paper */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 tracking-wide leading-snug">
                            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission Of Paper
                        </h2>
                        <div className="space-y-4 text-lg text-justify font-medium text-gray-800">
                            <p>The conference welcomes paper submission from researchers, practitioners, academicians and student through Microsoft</p>
                            <a
                                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIISD2025%2FSubmission%2FManage"
                                className="text-[#000080] font-semibold underline hover:text-blue-900 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CMT submission link
                            </a>
                            <p>
                                All the accepted and presented papers will be published in (Scopus Indexed Springer Nature) International Journal of Information Technology ISSN: 2511-2104 subject to the acceptance of paper by the Journal. All the rights for presentation of the paper are reserved by ICAIISD 2025 Team. For journal publication, the Journal Editorial Board reserves the right of rejecting any paper or all the papers, at any stage of its consideration, without assigning any reason. The decision of the Journal Editor-in-Chief shall be final and binding on all.
                            </p>
                        </div>
                    </section>

                    {/* Submission Guidelines */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 tracking-wide leading-snug">
                            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Sub</span>mission Guidelines:
                        </h2>
                        <ul className="list-disc ml-6 space-y-4 text-lg text-justify font-medium text-gray-800">
                            <li>Use the Full Paper Template IEEE Two Column Format. Number of Pages Must be 06 only.</li>
                            <li>Papers must be original work and have been not published/submitted elsewhere.</li>
                            <li>Plagiarism/Similarity index of the paper must be 10% or less.</li>
                            <li>Plagiarism level above 10% will attract immediate rejection of the paper.</li>
                            <li>Indicate the most relevant theme during the paper submission.</li>
                            <li>Ensure all tables, figures and images have captions and are referenced in the text properly.</li>
                            <li>If Paper/Research work is funded by any institution or agency, include acknowledgement.</li>
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
                    </section>

                    {/* Review Process */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 tracking-wide leading-snug">
                            <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Man</span>uscript Review/Paper Acceptance Process
                        </h2>
                        <ul className="list-disc ml-6 space-y-3 text-lg text-justify font-medium text-gray-800">
                            <li>Initial screening will be done to check compatibility with the conference theme & track.</li>
                            <li>Papers submitted in IEEE Two column format only will be considered for further processing.</li>
                            <li>Papers received in proper format will be checked for Plagiarism to confirm originality of the submitted work. Manuscript with less than permissible plagiarism will be accepted for further processing else will be sent back to the author for revision.</li>
                            <li>All the manuscripts with permitted plagiarism will be sent for technical and quality review. Double review process is applicable for all papers. Reviewer's comments will be communicated to the respective authors. Manuscripts recommended for revision by the reviewers will be reverted to the respective author with a notification for re-submission within a week's time from the date of notification.</li>
                            <li>Manuscript approved by the reviewers will be considered for final presentation and publication process.</li>
                            <li>The acceptance of the manuscript for presentation in the conference will be notified to the author by the respective Co-chairs.</li>
                        </ul>
                        <p className="mt-4 text-lg font-medium text-gray-800">"Authors must read the guidelines carefully and use the appropriate article template."</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ManuscriptReviewProcess;
