import React, { useState } from 'react';

function NavBar() {
  const [isConnexionDropdownVisible, setConnexionDropdownVisible] = useState(false);
  const [isAnnuaireDropdownVisible, setAnnuaireDropdownVisible] = useState(false);

  const toggleConnexionDropdown = () => {
    setConnexionDropdownVisible(!isConnexionDropdownVisible);
  };

  const toggleAnnuaireDropdown = () => {
    setAnnuaireDropdownVisible(!isAnnuaireDropdownVisible);
  };

  return (
    <div className='flex justify-between w-full h-20 fixed quicksand p-10 shadow-md items-center relative'>
      <div>
        <img src="./elements/DZ-Mouhami.svg" alt="" />
      </div>
      <div className='flex gap-7 mr-72'>
        <div
          className='relative'
          onMouseEnter={toggleAnnuaireDropdown}
          onMouseLeave={toggleAnnuaireDropdown}
        >
          <a className='text-black hover:text-orange-500' href="">
            Annuaire
          </a>
          {isAnnuaireDropdownVisible && (
            <div className='flex absolute top-full left-0 mt-1 '>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT ADMINISTRATIF
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT AFFAIRES
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT BANCAIRE
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT CIVIL
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT COMMERCIAL
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE FUSIONS ET ACQUISITIONS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE L'ENVIRONNEMENT
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
               DROIT DE L'IMMIGRATION
              </a>
              
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">DROIT MARITIME</a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">DROIT PÉNAL</a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE L'IMMOBILIER
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE LA CONSOMMATION
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE LA PRESSE
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE LA PROPRIÉTÉ INTELLECTUELLE
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DU SPORT
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DU TRAVAIL
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT INTERNATIONAL PRIVÉ
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT FAMILIAL
              </a>
              
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT ROUTIER
              </a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES ASSURANCES
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES CONTRATS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES ÉNERGIES
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES ENTREPRISES
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES ÉTRANGERS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES FUSIONS ET ACQUISITIONS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES INVESTISSEMENTS
              </a>
            <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROIT FONCIER</a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROITS DE L'HOMME</a>
            </div>
            <div className='flex flex-col  rounded-b-lg bg-gray-200 text-left p-2 gap-2'>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES PRIVATISATIONS              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES RECOUVREMENT DE CRÉANCES
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES SOCIÉTÉS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES TELECOM/TIC
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DES TRANSPORTS
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DOUANIER
              </a>
              <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2' href="">
              DROIT DE LA SANTÉ
              </a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">DROIT JUDICIAIRE</a>
              <a  className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black bg-white p-2'href="">  DROIT SOCIAL
</a>

            </div>
            </div>
          )}
        </div>
        <a className='text-black hover:text-orange-500' href="">
          Carte Judiciaire
        </a>
        <a className='text-black hover:text-orange-500' href="">
          Services
        </a>
        <a className='text-black hover:text-orange-500' href="">
          Contact US
        </a>
      </div>
      <div
        className='flex flex-col absolute top-4 right-4 mt-1'
        onMouseEnter={toggleConnexionDropdown}
        onMouseLeave={toggleConnexionDropdown}
      >
        <button
          className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0'
        >
          Connexion
        </button>
        {isConnexionDropdownVisible && (
          <div className='flex flex-col rounded-b-lg bg-gray-200'>
            <a className='text-black  rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
              Login
            </a>
            <a className='text-black rounded-b-lg hover:bg-orange-200 hover:text-black' href="">
              Sign up
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
