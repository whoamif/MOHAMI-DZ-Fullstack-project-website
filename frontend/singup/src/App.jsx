import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'

function App() {
  

  return (
    <>
      <div className='flex flex-col  w-screen m-auto h-screen font-quicksand'>
        <div className='flex h-4/5'>
        <div className='flex flex-col gap-8 bg-white-500 w-1/2 pt-20 items-start pl-12'>
            <img src="./elements/DZ-Mouhami.svg" alt="" />

            <p className='font-bold text-3xl	'>why do you want to join us ?</p>
            <p className='font-thin text-2xl	'>we provide here the best experiences</p>

            <div className='bg-orange-300 rounded-sm w-72 h-16 text-white p-2 mt-16 hover:bg-orange-500 cursor-pointer ml-16'>
              <p className='text-white'>i am here to be a lawyer</p>
              <p>work with people is my passion</p>
            </div>
            <div className='bg-orange-300 rounded-sm w-72 h-16 text-white p-4 hover:bg-orange-500 cursor-pointer ml-16'>
              <p className=''>i am searching for lawyer</p>
            </div>

        </div>
        <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url('./elements/bgright.svg')`, height: '100%' }}>
        </div>
        </div>
        
       <Footer></Footer>
        
      </div> 

      
    </>
  )
}

export default App
