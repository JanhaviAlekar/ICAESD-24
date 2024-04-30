import React from 'react'
import AvatarSlider from './SliderSponsor'


function Sponsor() {
  return (
    <>
      <section className='lg:px-16 px-6 py-8'>
      <p className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 pb-6 lg:pb-4"><span className="underline underline-offset-8 decoration-4 decoration-pink-500">Pat</span>rons</p>
            <AvatarSlider />
            {/* <div className='md:hidden items-center space-x-2 text-indigo-600 font-semibold flex  '>
              <p>See More</p>
              <AiOutlineArrowRight size={12} />
            </div> */}
      </section>
    </>
  )
}

export default Sponsor;