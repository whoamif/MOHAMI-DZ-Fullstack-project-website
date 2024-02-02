import React, { useContext, useState } from 'react';
import Slider from './Slider';
import NavBar from "../../NavBar.jsx";
import { useTranslation } from "react-i18next"; 
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer.jsx";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { searchContext } from '../../RoutesApp.jsx';

function Search() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  let data1 = [];
  let data2 = [];
  let data3 = [];
  const { setSearchResults, searchResults } = useContext(searchContext)

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

  const handleCitySearch = async (city) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/searchAdr/?search=${encodeURIComponent(
          city
        )}`
      );
      data2 = response.data;
      console.log(data2);
      return data2;
    } catch (error) {
      console.error("Error searching by city:", error);
      throw error; 
    }
  };

  const handleInter = async () => {
    try {
      await handleNameSearch();
      await handleCitySearch(city);

      data3 = data1.filter((item1) =>
        data2.some((item2) => item1.lawyer_id === item2.lawyer_id)
      );
      console.log(data3);
      setSearchResults(data3)
      navigate("/searchpage")
    } catch (error) {
      console.error("Error during intersection:", error);
    }
  };

  
  

  return (
    <>
      <div className='flex flex-col w-screen min-h-screen'>
        <NavBar></NavBar>
        <div className='bg-cover bg-center w-screen min-h-96' style={{ backgroundImage: `url('./elements/bgimg.svg')`, height: '100%' }}>
          <div className='text-black w-2/5 mt-20 ml-16 flex flex-col gap-5'>
            <p className='text-3xl'>{t("legalExcellence")}</p>
            <p className='text-2xl font-thin'>{t("trustedAdvocates")}</p>
          </div>
          <div className='flex gap-2 place-items-baseline ml-10 mt-20'>
            <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
              <FontAwesomeIcon className='text-orange-500' icon={faMagnifyingGlass} />
              <input
                className='ml-2 w-80 h-full bg-transparent outline-none'
                type="text"
                placeholder='Search for your lawyer'
                value={name}
                onChange={(e) => setName(e.target.value)}
                
              />
            </div>
            <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
              <FontAwesomeIcon className='text-orange-500' icon={faLocationDot} />
              <input
                className='ml-2 w-80 h-full bg-transparent outline-none'
                type="text"
                placeholder='Search for location'
                value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button
              className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 w-44 hover:border-0 h-10 place-items-center'
              onClick={() => {
                handleInter();
              }}
              onKeyDown={() => {
                handleInter();}}
            >
              Search
            </button>
          </div>
        </div>
        <div className='h-24'></div>
        <div>
          <Slider></Slider>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Search;
