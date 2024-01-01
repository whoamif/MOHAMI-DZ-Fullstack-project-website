import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
function LawyerSlides() {
  
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mb-16 p-10 place-items-center flex'
     
    >
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/bgimg.svg" alt="" />
          <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
          <p className='text-black font-thin'>computer science student and game developer ...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/bgimg.svg" alt="" />
          <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
          <p className='text-black font-thin'>computer science student and game developer ...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/bgimg.svg" alt="" />
          <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
          <p className='text-black font-thin'>computer science student and game developer ...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/bgimg.svg" alt="" />
          <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
          <p className='text-black font-thin'>computer science student and game developer ...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/bgimg.svg" alt="" />
          <p className='text-black font-bold'>ADJISSI FATIMA AMINA</p>
          <p className='text-black font-thin'>computer science student and game developer ...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default LawyerSlides;
