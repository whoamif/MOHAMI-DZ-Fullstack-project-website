import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mb-16 p-10 place-items-center flex'
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index}>
          <div className='w-2/3 min-h-screen text-left p-4 flex flex-col gap-24 shadow-2xl' key={index}>
            {Array.from({ length: 5 }).map((_, innerIndex) => (
              <div key={innerIndex} className='w-full bg-gray-100 flex place-items-center border-3 border-black p-10 h-44'>
                <img className='w-44 h-full' src="./elements/bgimg.svg" alt="" />
                <div className='p-10 h-44 w-full text-left flex flex-col gap-4'>
                  <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
                  <p className='text-black font-thin'>computer science student and game developer ...</p>
                </div>
                <button className='rounded-sm bg-orange-500 w-full text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
