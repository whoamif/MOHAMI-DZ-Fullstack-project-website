import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link  } from 'react-router-dom'; 
import { Rating } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { searchContext } from '../../RoutesApp';

function Slider() {
  const [value, setValue] = React.useState(2);
  const { setSearchResults, searchResults } = useContext(searchContext);


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
      {searchResults.map((lawyer, index) => (
        <SwiperSlide key={index}>
            <div className='w-full bg-gray-100 flex place-items-center border-3 border-black pb-12 pl-5 pr-5  h-62'>
              <img className='w-24 h-24' src={lawyer?.profile_pic} alt="Lawyer Profile" />
              <div className='p-10 h-64 w-full text-left flex flex-col gap-4'>
                <div className='flex w-72 gap-5'>
                  <p className='text-black font-bold'>{lawyer?.lawyername}</p>
                  <Rating name="read-only" value={value} readOnly />
                </div>
                <div className='flex text-orange-500 gap-2'>{lawyer?.domains}</div>
                <p className='text-black font-thin'>{lawyer?.bio}</p>
              </div>
              <button className='rounded-sm bg-orange-500 w-full text-white w-44 h-12 hover:bg-orange-200 mt-24 hover:border-0'>
                <Link to={`/avocat/${lawyer?.lawyer_id}`}>see the profile</Link>
              </button>
            </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
