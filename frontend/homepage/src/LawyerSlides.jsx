import React from 'react';
import "./App.css";
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

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
      
      className='m-auto w-5/6 flex '
     
    >
      <SwiperSlide>
        <div className='border-2  p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami.png" alt="" />
          <p className='text-black font-bold'>BENBATTOUCHE FOUAD TAREK</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <Link to={'/avocat/172'}>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-44' href="">see the profile</button>
          </Link>        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami2.jpg" alt="" />
          <p className='text-black font-bold'>ME SAMIR SAYAH</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <Link to={'/avocat/494'}>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-44'>see the profile</button>
          </Link>
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className='border-2 p-4 flex flex-col gap-4 hover:shadow-2xl'>
          <img className=' ' src="./elements/mohami3.jpeg" alt="" />
          <p className='text-black font-bold'>MAÎTRE KOUCEILA ZERGUINE</p>
          <p className='text-black font-thin'>Droit administratif, Droit bancaire, Droit civil, Droit commercial...</p>
          <Link to={'/avocat/375'}>
          <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-44'>see the profile</button>
          </Link>        </div>
      </SwiperSlide>
      
      
    </Swiper>
  );
}

export default LawyerSlides;
