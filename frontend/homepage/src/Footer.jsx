import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='flex flex-col bg-custom-bg-color w-screen h-80 mb-0 pb-0'>
      <div className='flex  pl-4'>
        <div className='flex flex-col w-1/3 gap-6 items-start ml-5 p-12'>
          <img src="./elements/mouhamilogo.svg" alt="" />
          <p className='font-light text-white'>Your Trusted Advocates for Justice and Expertise</p>
        </div>
        <div className='flex text-white text-2xl gap-12  mt-28 ml-96 ' >
          <FontAwesomeIcon  className='cursor-pointer hover:text-orange-500'icon={faFacebookF} />
          <FontAwesomeIcon  className='cursor-pointer hover:text-orange-500' icon={faInstagram} />
          <FontAwesomeIcon className='cursor-pointer hover:text-orange-500' icon={faTwitter} />
        </div>
        <div className='flex text-white text-2xl gap-12  mt-44  ' >

        <p className='cursor-pointer hover:text-red-500'>arabe</p>
        <p className='cursor-pointer hover:text-red-500'>english</p>
        </div>
      </div>
      <div className='flex pt-2 mb-4 place-content-center mt-12'>
        <p className='text-white'>© Dz-Mouhami. All Rights Reserved 2024</p>
      </div>
    </div>
  );
}

export default Footer;
