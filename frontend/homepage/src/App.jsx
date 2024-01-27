import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import LawyerSlides from './LawyerSlides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (

    <div className='flex flex-col w-screen min-h-screen  '>

      <NavBar />

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
      <div className='w-screen min-h-96 mt-32 flex flex-col gap-20 '>
        <p className='text-4xl text-black drop-shadow-2xl'> See our must preferred Avocat </p>
        <div className='flex justify-center items-center w-4/5  m-auto'>
          <LawyerSlides />
        </div>
        <p className='ml-70 font-bold text-black text-3xl text-left pl-16'>Search directly by city : </p>
        <div className=' flex place-self-start p-10'>

          <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 1. Adrar</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 2. Chlef</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 3. Laghouat</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 4. Oum El Bouaghi</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 5. Batna</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 6. Béjaïa</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 7. Biskra</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 8. Béchar</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 9. Blida</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 10. Bouïra</a>
          </div>
          <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 11. Tamanrasset</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 12. Tébessa</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 13. Tlemcen</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 14. Tiaret</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 15. Tizi Ouzou</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 16. Algiers</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 17. Djelfa</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 18. Jijel</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 19. Sétif</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 20. Saïda</a>
          </div>
          <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 21	.Skikda</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 22	.Sidi Bel Abbès</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 23.	Annaba</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 24	.Guelma</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 25	.Constantine</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 26	.Médéa</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 27	.Mostaganem</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 28	.M'Sila</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 29	.Mascara</a>
            <a className='text-black hover:underline hover:text-black font-thin' href="">30	.Ouargla</a>
          </div>
          <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 31	.Oran</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 32	.El Bayadh</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 33	.Illizi</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 34	Bordj Bou Arréridj</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 35	Boumerdès</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 36	El Tarf</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 37	Tindouf</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 38	Tissemsilt</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 39	El Oued</a>
            <a className='text-black hover:underline hover:text-black font-thin' href="">40	Khenchela</a>
          </div>
          <div className='flex flex-col text-black text-xl p-4 place-self-start text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 41	Souk Ahras</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 42	Tipaza</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 43	Mila</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 44	Aïn Defla</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 45	Naâma</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 46	Aïn Témouchent</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 47	Ghardaïa</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 48	Relizane</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 49	Timimoun</a>
            <a className='text-black hover:underline hover:text-black font-thin' href="">50	Bordj Badji Mokhtar</a>
          </div>
          <div className='flex flex-col text-black text-xl p-4 place-self-start  text-left gap-2'>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 51	Ouled Djellal	</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 52	Béni Abbès</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 53	Ain Salah</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 54	Ain Guezzam</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 55	Touggourt</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 56	Djanet</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 57	El M'Ghair</a>
            <a className='text-black hover:underline hover:text-black font-thin' href=""> 58	El Menia</a>
          </div>

        </div>

      </div>


      <Footer />
    </div>

  )
}

export default App
