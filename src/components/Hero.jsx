import img1 from "./assests/clg.jpg"
export const Hero = () => {
    return (
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src={img1} alt="Background" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-40"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center m-2 lg:m-0">
    <h1 class="lg:text-6xl text-3xl font-bold lg:font-[800] leading-tight mb-4">Government College of Engineering</h1>
    <h5 className="lg:text-3xl my-2 font-bold text-xl">Present's</h5>
    <h3 className="lg:text-6xl text-3xl font-bold lg:font-extrabold">ICAESD 2024</h3>
    <p class="text-xl font-semibold text-gray-300 mt-3">Government College of Engineering, Amravati</p>
    <p class="text-xl font-semibold text-gray-300  mb-6">Date:&nbsp;&nbsp;20 & 21 December,&nbsp;&nbsp;2024</p>
    <a href="www.google.com" class="text-white bg-[#33358c]  hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition  hover:text-[#33358c]">Submit your Paper</a>
  </div>
</div>

    );
}