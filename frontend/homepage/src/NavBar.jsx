import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { searchContext } from "./RoutesApp.jsx";
import logo from "../elements/DZ-Mouhami.svg";

function NavBar() {
  const [isConnexionDropdownVisible, setConnexionDropdownVisible] =
    useState(false);
  const [isAnnuaireDropdownVisible, setAnnuaireDropdownVisible] =
    useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const toggleConnexionDropdown = () => {
    setConnexionDropdownVisible(!isConnexionDropdownVisible);
    setAnnuaireDropdownVisible(false);
  };

  const toggleAnnuaireDropdown = () => {
    setAnnuaireDropdownVisible(!isAnnuaireDropdownVisible);
    setConnexionDropdownVisible(false);
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const emailAddress = "adjissifatimaamina@gmail.com";

  const [spec, setSpec] = useState("");
  let data1 = [];

  const { setSearchResults, searchResults } = useContext(searchContext);

  const handleSpeSearch = async (spec) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/searchDomains/?search=${encodeURIComponent(
          spec
        )}`
      );
      data1 = response.data;
      console.log(data1);
      setSearchResults(data1);
      navigate("/searchpage");
      return data1;
    } catch (error) {
      console.error("Error searching by city:", error);
      throw error;
    }
  };

  return (
    <div className="flex justify-between w-full h-20 fixed quicksand p-10 shadow-md items-center relative z-80 ">
      <div>
        <Link to={"/"} href="">
          <img src={logo} alt="im" />
        </Link>
      </div>
      <div className="flex z-20 gap-7 mr-72 w-max ">
        <div
          onMouseEnter={toggleAnnuaireDropdown}
          onMouseLeave={toggleAnnuaireDropdown}
          className="relative"
        >
          <a className="text-black hover:text-orange-500 cursor-pointer">
            {t("annu")}
          </a>
          {isAnnuaireDropdownVisible && (
            <div className="flex absolute top-full left-0 mt-1  z-10">
              <div className="flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2">
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  href=""
                  onClick={() => {
                    handleSpeSearch("DROIT ADMINISTRATIF");
                  }}
                >
                  DROIT ADMINISTRATIF
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 cursor-pointer hover:text-black bg-white p-2"
                  href=""
                  onClick={() => {
                    handleSpeSearch("DROIT AFFAIRES");
                  }}
                >
                  DROIT AFFAIRES
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT BANCAIRE ");
                  }}
                >
                  DROIT BANCAIRE
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT CIVIL ");
                  }}
                >
                  DROIT CIVIL
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT COMMERCIAL ");
                  }}
                >
                  DROIT COMMERCIAL
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE FUSIONS ET ACQUISITIONS ");
                  }}
                >
                  DROIT DE FUSIONS ET ACQUISITIONS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE L'ENVIRONNEMENT ");
                  }}
                >
                  DROIT DE L'ENVIRONNEMENT
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2  cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE L'IMMIGRATION ");
                  }}
                >
                  DROIT DE L'IMMIGRATION
                </div>

                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2  cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT MARITIME");
                  }}
                >
                  DROIT MARITIME
                </div>
                <a
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2  cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT PÉNAL");
                  }}
                >
                  DROIT PÉNAL
                </a>
              </div>
              <div className="flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2">
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2  cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE L'IMMOBILIER");
                  }}
                >
                  DROIT DE L'IMMOBILIER
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE LA CONSOMMATION");
                  }}
                >
                  DROIT DE LA CONSOMMATION
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE LA PRESSE");
                  }}
                >
                  DROIT DE LA PRESSE
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE LA PROPRIÉTÉ INTELLECTUELLE");
                  }}
                >
                  DROIT DE LA PROPRIÉTÉ INTELLECTUELLE
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch(" DROIT DU SPORT");
                  }}
                >
                  DROIT DU SPORT
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DU TRAVAIL");
                  }}
                >
                  DROIT DU TRAVAIL
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT INTERNATIONAL PRIVÉ");
                  }}
                >
                  DROIT INTERNATIONAL PRIVÉ
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT FAMILIAL");
                  }}
                >
                  DROIT FAMILIAL
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT ROUTIER");
                  }}
                >
                  DROIT ROUTIER
                </div>
              </div>
              <div className="flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2">
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES ASSURANCES");
                  }}
                >
                  DROIT DES ASSURANCES
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES CONTRATS");
                  }}
                >
                  DROIT DES CONTRATS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES ÉNERGIES");
                  }}
                >
                  DROIT DES ÉNERGIES
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES ENTREPRISES");
                  }}
                >
                  DROIT DES ENTREPRISES
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES ÉTRANGERS");
                  }}
                >
                  DROIT DES ÉTRANGERS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES FUSIONS ET ACQUISITIONS");
                  }}
                >
                  DROIT DES FUSIONS ET ACQUISITIONS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES INVESTISSEMENTS");
                  }}
                >
                  DROIT DES INVESTISSEMENTS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT FONCIER");
                  }}
                >
                  DROIT FONCIER
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROITS DE L'HOMME");
                  }}
                >
                  DROITS DE L'HOMME
                </div>
              </div>
              <div className="flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2">
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES PRIVATISATIONS");
                  }}
                >
                  DROIT DES PRIVATISATIONS
                </div>
                <div
                  className="text-black rounded-b-lg hover-bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES RECOUVREMENT DE CRÉANCES");
                  }}
                >
                  DROIT DES RECOUVREMENT DE CRÉANCES
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES SOCIÉTÉS");
                  }}
                >
                  DROIT DES SOCIÉTÉS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES TELECOM/TIC");
                  }}
                >
                  DROIT DES TELECOM/TIC
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DES TRANSPORTS");
                  }}
                >
                  DROIT DES TRANSPORTS
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DOUANIER");
                  }}
                >
                  DROIT DOUANIER
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT DE LA SANTÉ");
                  }}
                >
                  DROIT DE LA SANTÉ
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT JUDICIAIRE");
                  }}
                >
                  DROIT JUDICIAIRE
                </div>
                <div
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2 cursor-pointer"
                  onClick={() => {
                    handleSpeSearch("DROIT SOCIAL");
                  }}
                >
                  DROIT SOCIAL
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to={"/juridique"}
          className="text-black hover:text-orange-500"
          href=""
        >
          {t("Carte Judiciaire")}
        </Link>
        <Link to={"/"} className="text-black hover:text-orange-500" href="">
          {t("Home")}
        </Link>
        <a
          className="text-black hover:text-orange-500 cursor-pointer"
          href="mailto:dz.mohami.lawyer@gmail.com"
        >
          {t("Contact US")}
        </a>
      </div>
      <div
        className="flex flex-col absolute z-20 top-4 right-4 mt-1"
        onMouseEnter={toggleConnexionDropdown}
        onMouseLeave={toggleConnexionDropdown}
      >
        {isLoggedIn ? (
          <>
            <div className="relative">
              <button className="rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-32 h-12">
                {t("User")}
              </button>
              {isConnexionDropdownVisible && (
                <div className="flex flex-col rounded-b-lg bg-gray-200">
                  <Link
                    to={"/profile"}
                    className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black"
                    href=""
                  >
                    {t("Profile")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black"
                    href=""
                  >
                    {t("Disconnect")}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="relative">
            <button className="rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-32 h-12">
              {t("Connexion")}
            </button>
            {isConnexionDropdownVisible && (
              <div className="flex flex-col rounded-b-lg bg-gray-200">
                <Link
                  to={"/login"}
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black"
                  href=""
                >
                  {t("Login")}
                </Link>
                <Link
                  to={"/signup"}
                  className="text-black rounded-b-lg hover:bg-orange-200 hover:text-black"
                  href=""
                >
                  {t("Sign up")}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
