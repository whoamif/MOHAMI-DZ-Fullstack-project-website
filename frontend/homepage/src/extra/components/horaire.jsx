import React, { useState } from 'react';

const Horaire = () => {
  const [showHoraires, setShowHoraires] = useState(false);

  const handleHorairesClick = () => {
    setShowHoraires(!showHoraires);
  };

  const handleCloseClick = () => {
    setShowHoraires(false);
  };

  return (
    <div className='p-4 flex flex-col bg-white relative'>

      <div className="mt-0 border-orange-500"></div>

      <div className='flex flex-l space-x-4 relative'>
        <div>
          <button
            onClick={handleHorairesClick}
            className={`bg-orange-500 py-2 px-16 ml-64 rounded text-white ${
              showHoraires ? 'z-10' : '' 
            }`}
          >
            Horaires dispo
          </button>

          {showHoraires && (
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md z-20">
              <div className="border-1 border-orange-500 bg-white p-8 rounded-md text-black">
                <h2 className="text-2xl font-bold mb-4">Horaires disponibles</h2>
                <p>Dimanche-Mardi : 08:30am-11:30am</p>
                <p>Mercredi-Jeudi: 01:00pm-04:00pm </p>
                <button
                  onClick={handleCloseClick}
                  className='bg-orange-500 py-2 px-4 rounded text-white mt-4'
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Horaire;

