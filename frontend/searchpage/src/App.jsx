// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import Albums from './Albums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [name, setName] = useState('user name');
  const [profilePicture, setProfilePicture] = useState('./elements/default.svg');
  const [password, setPassword] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  const closeSettings = () => {
    setIsSettingsVisible(false);
  };

  const saveSettings = () => {
    // Implement logic to save settings (update name, profile picture, and password)
    // For now, we'll just log the changes
    console.log('Name:', name);
    console.log('Profile Picture:', profilePicture);
    console.log('Password:', password);

    // Close the settings modal
    closeSettings();
  };

  return (
    <>
      <div className='flex flex-col w-screen gap-12 min-h-screen bg-custom-bg-color overflow-x-hidden'>
        <Navbar isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} closeSearch={closeSearch} />
        <div className='flex flex-col w-screen justify-center p-4'>
          <div className='w-10/12 h-96 shadow-2xl items-start flex mt-24 hover:shadow-lg p-12 bg-gray-700 rounded-lg'>
            <img className='w-1/5' src={profilePicture} alt='' />
            <div className='flex flex-col text-white text-left gap-12 ml-12 mt-16'>
              <div className='font-bold text-2xl'>
                <p>{name}</p>
              </div>
              <div className='font-thin text-lg'>
                <span>4</span> Albums
              </div>
              <div className='font-thin text-lg'>
                <span>4</span> Songs
              </div>
            </div>
            <FontAwesomeIcon
              className='text-white text-2xl mt-12 ml-96 cursor-pointer'
              icon={faGear}
              onClick={toggleSettings}
            />
          </div>
        </div>
        {isSettingsVisible && (
          <div className='modal-overlay'>
            <div className='settings-modal'>
              <div className='flex flex-col w-96 h-96 place-items-center p-4 bg-gray-700 rounded-lg'>
                <input
                  type='text'
                  placeholder='New Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input-field'
                />
                <input
                  type='text'
                  placeholder='New Profile Picture URL'
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  className='input-field'
                />
                <input
                  type='password'
                  placeholder='New Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='input-field'
                />
                <button onClick={saveSettings} className='save-button'>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <Albums></Albums>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
/* hiiiii guys i hope u doing well juste to push something in github i love the green squares  */