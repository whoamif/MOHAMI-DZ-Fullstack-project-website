import './App.css'
import Footer from '../../Footer.jsx';
import photo from './headerpic.svg'
import { useTranslation } from "react-i18next"; 

import pic from './jur.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faLocationDot } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../NavBar';

function App() {
  
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-col w-screen min-h-screen'>
      <NavBar />

      <div className='bg-cover bg-center w-screen min-h-96 ' style={{ backgroundImage:photo , height: '100%'}}>
          <div className='text-black w-2/5	mt-20 ml-16 flex flex-col gap-5'>
          <p className=' text-3xl	'>{t("legalExcellence")}</p>
          
          <p
          className='text-2xl font-thin'>
           {t("trustedAdvocates")}
                
              </p>
          
          
          </div>
          <div className='flex gap-2 place-items-baseline ml-10 mt-20'>
      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg' >
      <FontAwesomeIcon className='text-orange-500' icon={faMagnifyingGlass} />
      <input
        className='ml-2 w-80 h-full bg-transparent outline-none'
        type="text"
        placeholder={t("searchForLawyer")}
      />
      </div>
     
      

      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
        <FontAwesomeIcon className='text-orange-500' icon={faLocationDot} />
        <input
          className='ml-2 w-80 h-full bg-transparent outline-none'
          type="text"
          placeholder={t("searchForLocation")}
        />
      </div>

      <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 place-items-center w-36'>
        
        {t("search")}
      </button>
    </div>
        </div>
        <div className='pl-60  pr-60 flex m-auto'> 
          <img src={pic} alt="" />
        </div>
        <div className='text-left text-black p-10'>
          <p>
          {t("a")}. <br />
          {t("b")}.
 <br />
<p className='text-orange-500'>{t("c")}</p>
<p className='text-orange-500'>{t("d")}</p>
{t("e")} <br />
<p className='text-orange-500'>{t("f")}</p>
{t("g")}<br />
{t("h")}
<p className='text-orange-500'>TRIBUNAL</p>
{t("i")}
 <p className='text-orange-500'>TRIBUNAL MILITAIRE  </p>

 {t("j")}

site officiel du ministère de la justice algérien <br />
 <a href="https://www.mjustice.dz/html/">https://www.mjustice.dz/html/  </a> <br />
<a href="http://legiglobe.rf2d.org/algerie/2016/09/27/">http://legiglobe.rf2d.org/algerie/2016/09/27/</a> <br />
<a href="https://www.lexadin.nl/wlg/courts/nofr/oeur/lxctalg.htm">https://www.lexadin.nl/wlg/courts/nofr/oeur/lxctalg.htm</a>  <br />
<a href="http://www.nyulawglobal.org/globalex/Algeria.html#_Supreme_Court
"> http://www.nyulawglobal.org/globalex/Algeria.html#_Supreme_Court
</a> <br />
          </p>
        </div>
        <Footer></Footer>
       </div>
    </>
  )
}

export default App
