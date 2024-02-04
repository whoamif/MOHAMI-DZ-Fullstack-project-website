import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const { t, i18n } = useTranslation(); 
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col bg-custom-bg-color w-screen h-80 mb-0 pb-0">
      <div className="flex pl-4">
        <div className="flex flex-col w-1/3 gap-6 items-start ml-5 p-12">
          <img src="./elements/mouhamilogo.svg" alt="" />
          <p className="font-light text-white">
            {t("Your")} 
          </p>
        </div>
        <div className="flex text-white text-2xl gap-12 mt-28 ml-96 ">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-500"
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-500"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-500"
            icon={faTwitter}
          />
        </div>
        <div className="flex text-white text-2xl gap-12 mt-44  ">
          <p
            className="cursor-pointer hover:text-red-500"
            onClick={toggleLanguage}
          >
            {t("arabic")}
          </p>
          <p
            className="cursor-pointer hover:text-red-500"
            onClick={toggleLanguage}
          >
            {t("frensh")}
          </p>
        </div>
      </div>
      <div className="flex pt-2 mb-4 place-content-center mt-12">
        <p className="text-white">© Dz-Mouhami. {t("All Rights Reserved")} 2024</p>
      </div>
    </div>
  );
}

export default Footer;
