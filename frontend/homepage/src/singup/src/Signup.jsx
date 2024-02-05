import './App.css';
import Footer from './Footer';
import pic from "../elements/bgright.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"; 

function Signup() {
  const { t } = useTranslation(); 

  return (
    <>
      <div className='flex flex-col w-screen m-auto h-screen font-quicksand'>
        <div className='flex h-4/5'>
          <div className='flex flex-col gap-8 bg-white-500 w-1/2 pt-32 mb-12 items-start pl-12'>
            <img src="./elements/DZ-Mouhami.svg" alt="" />

            <p className='font-bold text-3xl'>{t("why do you want to join us ?")}</p> {/* Use translated text */}
            <p className='font-thin text-2xl'>{t("we provide here the best experiences")}</p>

            <div className='bg-orange-300 rounded-sm w-72 h-16 text-white p-2 mt-16 hover:bg-orange-500 cursor-pointer ml-16'>
              <Link to="/singuplawyer" className='text-white'>{t("i am here to be a lawyer")}</Link>
              <p>{t("work with people is my passion")}</p>
            </div>
            <div className='bg-orange-300 rounded-sm w-72 h-16 text-white p-4 hover:bg-orange-500 cursor-pointer ml-16'>
              <Link to="/singupuser" className='text-white'>{t("i am searching for lawyer")}</Link>
            </div>
          </div>
          <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url(${pic})`, height: '100%' }}></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
