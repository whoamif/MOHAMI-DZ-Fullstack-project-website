import React from 'react'

function Footer() {
  return (
    <div className=' flex flex-col  bg-custom-bg-color w-screen h-72'>
      <div className='flex justify-between pl-4 '>
      <div className='flex flex-col w-1/3	 gap-6 items-start ml-5 p-12'>
      <img src="./elements/DZ-Mouhami.svg" alt="" />
      <p className='font-light text-white'>Your Trusted Advocates for Justice and Expertise</p>
      </div>
      <div className='text-white flex flex-col h-64 items-start pr-20  pt-4 '>
            <p className='font-bold '>Contact us</p>
            <label className='font-light pb-1'htmlFor="">email-adresse</label>
            <input className='rounded text-black p-1 w-72' type="email" />
            <label className='font-light h-32 pb-1' htmlFor="">message</label>
            <textarea className='rounded text-black p-1 w-72'name="" id="" cols="30" rows="30"></textarea>
            <button className=' bg-blue-500 hover:bg-red-500 text-white font-light rounded  w-24 h-10 place-items-center mt-2 '>
              Submit
            </button>
            <form action=""></form>
            
        </div>
      </div>
      <div className='pt-2 '> 
      <p className='text-white'>© Dz-Mouhami. All Rights Reserved 2024</p>
      </div>
    </div>
    
  )
}

export default Footer