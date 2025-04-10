import { Link } from "react-router-dom";
import newImg from "../components/new.gif"
export const NewAbout = () => {
    return (
        <>
            <div className="flex justify-center item-center flex-col pb-0 lg:pb-4 mb-4 lg:my-6   lg:px-16 px-6">
                <p className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">New</span>Announcement</p>
                <p className=" text-md lg:text-lg font-[400] lg:mx-10 sm:mx-2">
                    Accepted, Registered and Presented Paper will be published in January 2025 and July 2025 Volume of IJTE Journal
                </p>
                <span>
                    <p className=" text-md lg:text-lg font-[400] lg:mx-10 sm:mx-2">
                        Presentation Guidelines for Presenting Authors  <Link
                            to="/presentation-guide"
                            class="px-4 py-2 font-bold text-[#33358c] hover:text-[#33358c] hover:bg-gray-200"
                        >
                            Check here
                        </Link>

                    </p>
                    <p className="text-md lg:text-lg font-[400] lg:mx-10 sm:mx-2 flex items-center">
                        Presentation Schedule- Theme Wise- ICAIISD 2025
                        <Link
                            to="/presentationSchedule"
                            className="px-4 py-2 font-bold text-[#33358c] hover:text-[#33358c] hover:bg-gray-200"
                        >
                            Check here
                        </Link>
                        <a
                            className="px-4 py-2 font-bold text-[#33358c]"
                            href="https://drive.google.com/file/d/1-Ii8qkYQf6FPOhkQkKPClK0QMywIFfzb/view?usp=sharing"
                        >
                            or Download
                        </a>
                        <img className="h-4 ml-2 inline" src={newImg} alt="Submit Icon" />
                    </p>

                </span>
            </div>
        </>
    );
}