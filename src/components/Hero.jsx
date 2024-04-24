import img1 from "./clg.jpg"
import diamond from "./diamond.jpeg"
export const Hero = () => {
    return (
        <div class="relative mt-20 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="flex lg:flex-row justify-center items-center bg-black ">
          <img src={diamond} className="absolute z-10 w-[64px] h-[64px] top-14"></img>
        </div>
  <div class="absolute inset-0">
    <img src={img1} alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-60"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center m-2 lg:m-0">
    <h1 class="lg:text-6xl text-3xl font-bold lg:font-extrabold leading-tight mb-4">Government college of engineering present's</h1>
    <h3 className="lg:text-6xl text-3xl font-bold lg:font-extrabold">ICARTET 2024</h3>
    <p class="text-xl font-semibold text-gray-300 mt-3">Government College Of engineering,Amravati</p>
    <p class="text-xl font-semibold text-gray-300  mb-6">Date: 20,21 December,2024</p>
    <a href="#" class="text-white bg-[#33358c]  hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition  hover:text-[#33358c]">Submit your Paper</a>
  </div>
</div>

    );
}