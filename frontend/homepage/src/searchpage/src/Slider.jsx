import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { useState } from 'react';
import {  Rating } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mb-16 p-16 place-items-center flex'
    >
    
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index}>
          <div className='w-2/3 min-h-screen text-left p-4 flex flex-col gap-8 shadow-2xl' key={index}>
            {Array.from({ length: 5 }).map((_, innerIndex) => (
              <div key={innerIndex} className='w-full bg-gray-100 flex place-items-center border-3 border-black pb-12 pl-5 pr-5  h-62'>
                <img className='w-52 h-72 ' src="./elements/bgimg.svg" alt="" />
                <div className='p-10 h-64 w-full text-left flex flex-col gap-4'>
                  <div className='flex w-72 gap-5'>
                  <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
                  <Rating name="read-only" value={value} readOnly />

                  </div>
                  
                  <div className='flex text-orange-500 gap-2'><p>Business</p> <p>Lawyer</p></div>
                  
                  <p className='text-black font-thin'>computer science student and game developer ...</p>
                </div>
                <button className='rounded-sm bg-orange-500 w-full text-white w-44 hover:bg-orange-200 mt-24 hover:border-0'>see the profile</button>
              </div>
            ))}
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
}

export default Slider;
