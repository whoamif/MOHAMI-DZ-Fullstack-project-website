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
      
      className=' place-items-center flex min-w-screen'
     
    >
      <SwiperSlide>
        <div className='border-2 w-60 max-h-50  flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami.png" alt="" />
          <p className='text-black font-bold'>BENBATTOUCHE FOUAD TAREK</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 max-h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami2.jpg" alt="" />
          <p className='text-black font-bold'>ME SAMIR SAYAH</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 max-h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami3.jpeg" alt="" />
          <p className='text-black font-bold'>MAÎTRE KOUCEILA ZERGUINE</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
}

export default LawyerSlides;
