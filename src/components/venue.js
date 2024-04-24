import svgDate from "./date.svg"
export const Venue = () => {
    return (
        <>
 <div className="lg:px-24 px-4  mb-10 py-6 bg-[#33358c] flex flex-col md:flex-row md:justify-evenly md:items-center">
    <div className="mb-6 lg:mb-0">
    <div className="mb-4">
        <p className="font-bold text-3xl text-center text-[#fff] mb-4">Venue</p>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8842484462803!2d77.75418667525456!3d20.957163080674388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3464a9a39cf%3A0x41ba68e6a59d67ab!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713796273367!5m2!1sen!2sin"
        className=" lg:w-[450px] h-[400px]  w-[280px] mx-auto "
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy={"no-referrer-when-downgrade"}
    ></iframe>
    </div>
    <div className="flex items-center justify-center flex-col">
    <div className="mb-4 text-white">
        <p className="font-semibold text-2xl text-center  mb-4">Government College of Engineering </p>
        <p className="text-md text-center px-4">Do in occaecat officia incididunt est est proident. Culpa cillum id dolore non do anim eiusmod cupidatat incididunt ex minim duis. Nostrud aute irure ea et duis aliqua pariatur incididunt sit.</p>
        
    </div>
    <div>
    <a href="https://www.google.com/maps/place/Government+College+of+Engineering/@20.9571631,77.7567616,15z/data=!4m2!3m1!1s0x0:0x41ba68e6a59d67ab?sa=X&ved=1t:2428&ictx=111" class="text-[#33358c] bg-white  hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Directions</a>

    </div>

{/* <ol class="relative border-s border-gray-200  ml-8">                  
    <li class="mb-10 ms-6  ">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
     <img src={svgDate} className="bg-white "/>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>

    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
     <img src={svgDate} className="bg-white "/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
        <img src={svgDate} className="bg-white "/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
    </li>
    <li class="ms-6 mb-10">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
        <img src={svgDate} className="bg-white "/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
    </li>
    <li class="ms-6 ">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
        <img src={svgDate} className="bg-white "/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
    </li>
</ol> */}


    </div>
    
</div>
        </>
    );
}