import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function NavBar() {
  const { t } = useTranslation(); // Using the t function for translations
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isConnexionDropdownVisible, setConnexionDropdownVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login')
  };

  const toggleConnexionDropdown = () => {
    setConnexionDropdownVisible(!isConnexionDropdownVisible);
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className='flex justify-between w-full h-20 fixed quicksand p-10 shadow-md items-center relative'>
      <div>
        <Link to={'/'} href="">
          <img src="./elements/DZ-Mouhami.svg" alt="" />
        </Link>
      </div>
      <div className='flex gap-7 mr-72'>
        <Link to={'/juridique'} className='text-black hover:text-orange-500' href="">
          {t("Carte Judiciaire")}
        </Link>
        <a className='text-black hover:text-orange-500' href="">
          {t("Home")}
        </a>
        <a className='text-black hover:text-orange-500' href="">
          {t("Contact US")}
        </a>
      </div>
      <div
        className='flex flex-col absolute z-20 top-4 right-4 mt-1'
        onMouseEnter={toggleConnexionDropdown}
        onMouseLeave={toggleConnexionDropdown}
      >
        {isLoggedIn ? (
          <>
            <div className='relative'>
              <button
                className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-32 h-12'
              >
                {t("User")}
              </button>
              {isConnexionDropdownVisible && (
                <div className='flex flex-col rounded-b-lg bg-gray-200'>
                  <Link to={'/profile'} className='text-black  rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
                    {t("Profile")}
                  </Link>
                  <button onClick={handleLogout} className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
                    {t("Disconnect")}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className='relative'>
            <button
              className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 w-32 h-12'
            >
              {t("Connexion")}
            </button>
            {isConnexionDropdownVisible && (
              <div className='flex flex-col rounded-b-lg bg-gray-200'>
                <Link to={'/login'} className='text-black  rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
                  {t("Login")}
                </Link>
                <Link to={'/signup'} className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
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
