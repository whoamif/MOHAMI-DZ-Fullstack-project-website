import NavBar from './NavBar'
import './App.css'
import Slider  from './Slider';
import Footer from './Footer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';




function App() {

  return (
    <>
      <div className='flex flex-col w-screen min-h-screen'>
        <NavBar></NavBar>

        <div className='bg-cover bg-center w-screen min-h-96 ' style={{ backgroundImage: `url('./elements/bgimg.svg')`, height: '100%' }}>
          <div className='text-black w-2/5	mt-20 ml-16 flex flex-col gap-5'>
            <p className=' text-3xl	'>Navigating Legal Excellence in Algeria</p>

            <p
              className='text-2xl font-thin'>
              Your Trusted Advocates for Justice and Expertise

            </p>


          </div>
          <div className='flex gap-2 place-items-baseline ml-10 mt-20'>
            <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg' >
              <FontAwesomeIcon className='text-orange-500' icon={faMagnifyingGlass} />
              <input
                className='ml-2 w-80 h-full bg-transparent outline-none'
                type="text"
                placeholder='Search for your lawyer'
              />
            </div>



            <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
              <FontAwesomeIcon className='text-orange-500' icon={faLocationDot} />
              <input
                className='ml-2 w-80 h-full bg-transparent outline-none'
                type="text"
                placeholder='Search for location'
              />
            </div>

            <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 place-items-center'>
              Search
            </button>
          </div>
        </div>

        <div className='text-black text-3xl text-left p-12 font-bold '>
          <span>Your search for " <span>Fatima</span> " near to " <span>alger</span> "</span>
        </div>

        <div>
          <Slider></Slider>
        </div>
          <Footer></Footer>
      </div>

    </>
  )
}

export default App
