import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function LawyerSlides() {
  const handleNameSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/search/?search=${encodeURIComponent(name)}`
      );
      data1 = response.data;
      console.log(data1);

      return data1;
    } catch (error) {
      console.error("Error searching by name:", error);
      throw error; 
    }
  };
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      
      className=' place-items-center flex min-w-screen'
     
    >
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-6 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami.png" alt="" />
          <p className='text-black font-bold'>BENBATTOUCHE FOUAD TAREK</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'></button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami2.jpg" alt="" />
          <p className='text-black font-bold'>ME SAMIR SAYAH</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'>see the profile</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 w-60 h-50 p-4 flex flex-col gap-4 hover:shadow-2xl'>
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
