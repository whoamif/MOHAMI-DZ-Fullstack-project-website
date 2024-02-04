import React, { useState } from 'react';

const Message = () => {
  const [isAdmissionVisible, setAdmissionVisibility] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleAdmissionClick = () => {
    setAdmissionVisibility(!isAdmissionVisible);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAdmitClick = () => {
    
    setTextInput('');
  };

  const handleCloseClick = () => {
    setAdmissionVisibility(false);
  };

  return (
    <div>
      <button
        className="bg-white border-1 border-orange-500  text-orange-500 py-2 px-20 rounded focus:outline-none"
        onClick={handleAdmissionClick}
      >
        Message
      </button>

      {isAdmissionVisible && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md">
          <div className="bg-white p-4 rounded">
            <textarea
              className="w-full h-40 p-2 border rounded"
              placeholder="Écrivez votre texte ici..."
              value={textInput}
              onChange={handleTextChange}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 bg-orange-500 text-white py-2 px-4 rounded focus:outline-none"
                onClick={handleAdmitClick}
              >
                Envoyer
              </button>
              <button
                className="bg-white-500 border-orange-500 border-1 text-black py-2 px-4 rounded focus:outline-none"
                onClick={handleCloseClick}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
