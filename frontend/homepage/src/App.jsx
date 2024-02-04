import "./App.css";
import { useContext, useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LawyerSlides from "./LawyerSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { searchContext } from "./RoutesApp";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const App = () => {
  const cities = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouïra",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arréridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
    "Timimoun",
    "Bordj Badji Mokhtar",
    "Ouled Djellal",
    "Béni Abbès",
    "Ain Salah",
    "Ain Guezzam",
    "Touggourt",
    "Djanet",
    "El M'Ghair",
    "El Menia",
  ];

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  let data1 = [];
  let data2 = [];
  let data3 = [];
  const { setSearchResults, searchResults } = useContext(searchContext);

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
      setSearchResults(data3);
      navigate("/searchpage");
    } catch (error) {
      console.error("Error during intersection:", error);
    }
  };

  function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  const cityInputRef = useRef(null);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <div></div>
      <div
        className="bg-cover bg-center w-screen min-h-96 z-10"
        style={{
          backgroundImage: `url('./elements/bgimg.svg')`,
          height: "100%",
        }}
      >
        <div className="text-black w-2/5 mt-20 ml-16 flex flex-col gap-5">
          <p className="text-3xl">{t("legalExcellence")}</p>
          <p className="text-2xl font-thin">{t("trustedAdvocates")}</p>
        </div>
        <div className="flex gap-2 place-items-baseline ml-10 mt-20">
          <div className="rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg">
            <FontAwesomeIcon
              className="text-orange-500"
              icon={faMagnifyingGlass}
            />
            <input
              className="ml-2 w-80 h-full bg-transparent outline-none"
              type="text"
              placeholder={t("searchForLawyer")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg">
            <FontAwesomeIcon className="text-orange-500" icon={faLocationDot} />
            <input
              ref={cityInputRef}
              className="ml-2 w-80 h-full bg-transparent outline-none"
              type="text"
              placeholder={t("searchForLocation")}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            className="rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 w-32 place-items-center"
            onClick={() => {
              handleInter();
            }}
            onKeyDown={() => {
              handleInter();
            }}
          >
            {t("search")}
          </button>
        </div>
      </div>

      <div className="w-screen min-h-96 mt-32 flex flex-col gap-20 ">
        <p className="text-4xl text-black drop-shadow-2xl">
          {t("preferredAvocat")}
        </p>
        <div className="flex justify-center items-center w-4/5 m-auto">
          <LawyerSlides />
        </div>
        <p className="ml-70 font-bold text-black text-3xl text-left pl-16">
          {t("searchByCity")}
        </p>
        <div className="flex place-self-start p-10 m-auto">
          {chunkArray(cities, 10).map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2"
            >
              {group.map((city, index) => (
                <div
                  key={index}
                  className="text-black hover:underline hover:text-black font-thin cursor-pointer"
                  onClick={async () => {
                    setCity(city); // Set the city in the state
                    cityInputRef.current.focus(); // Focus on the city input field
                    document.documentElement.scrollIntoView({ behavior: "smooth" });

                  }}
                >
                  {index + 1 + groupIndex * 10}. {t(city)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
