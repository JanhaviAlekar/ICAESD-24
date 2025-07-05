import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import AvatarCard from './SponsorCard';

function SliderSponsor({ users }) {
  const patrons = users.slice(0, 4);
  const committee = users.slice(4);

  return (
    <div className="w-full px-4 md:px-8 bg-purple-100 p-6 "> 
      {/* Mobile View - Swiper */}
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'
        >
          {users.map((user, idx) => (
            <SwiperSlide key={user.name}>
              <AvatarCard img={user.img} name={user.name} detail={user.detail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:block">
      <p className="text-2xl font-bold mb-4 tracking-wide text-center text-gray-800">
    <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Pat</span>rons
  </p>         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-10">
          {patrons.map((user) => (
            <AvatarCard
              key={user.name}
              img={user.img}
              name={user.name}
              detail={user.detail}
            />
          ))}
        </div>

  <p className="text-2xl font-bold mb-4 tracking-wide text-center text-gray-800">
    <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Org</span>anizing Committee
  </p>        
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {committee.map((user) => (
            <AvatarCard
              key={user.name}
              img={user.img}
              name={user.name}
              detail={user.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderSponsor;
