import profilavocat from '../components/imh.jpeg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Message from '../components/btnmessage';
import CircleRating from './CircleRating';
import Rendezvous from './rendezvous';
import React, { useState } from 'react';
import Horaire from './horaire';
import CommentSystem from './commentsystem';

const Avocat = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAppointmentButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8 sm:my-16 lg:my-32 flex flex-col bg-white p-4">

  <div className="flex flex-col lg:flex-row items-center lg:items-start text-white lg:h-1/4 p-4">

    {/* Image */}
    <img
      src={profilavocat}
      alt="Example Image"
      className="h-24 w-24 rounded-md mb-4 lg:mb-0 lg:mr-4 lg:order-1"
    />

    {/* Text Content */}
    <div className='text-left lg:text-left lg:w-1/2 lg:order-2 sm:w-full'>
      <h4 className='text-black text-3xl pb-1 font-bold'>Siham Ait baziz</h4>
      <CircleRating className='ml-0' />
      <p className='pt-1 text-xl text-black text-left md:text-le'>
        Spécialité : <span className='text-orange-500'>avocat droit de la famille </span>
      </p>
    </div>

    {/* Horaire Button */}
    <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:order-3">
      <Horaire className="mx-auto lg:mx-0" />
    </div>

  </div>

      
<div className="border-t mt-0 mx-8 border-orange-500"></div>




<div className='flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 md:space-x-4 mx-auto mt-4'>
  <div className='md:order-1'>
    <Message />
  </div>
  <div className='md:order-1'>
    <button onClick={handleAppointmentButtonClick} className='bg-orange-500 py-2 px-8 md:px-16 rounded text-white'>
      Rendez-vous
    </button>
    {showForm && <Rendezvous handleClose={handleFormClose} />}
  </div>
</div>


<div className='w-full md:w-3/4 text-xl text-white flex flex-col mx-4 md:mx-0'>

  <div className='ml-0 md:ml-16'>
    <h1 className='mt-4 text-orange-600 text-2xl'>Expérience professionnelle:</h1> 
    <div className='mt-4 text-black'>
      - Avocate principale, Cabinet Juridique Zouari, Alger (depuis 2012)
      <br/>
      - Juriste, Ministère de la Justice, Algérie (2006-2012)
      <br/>
      - Stagiaire en droit, Tribunal de première instance, Alger (2005-2006)
    </div>
  </div>

  <div className='ml-0 md:ml-16'>
    <h1 className='mt-4 text-orange-600 text-2xl'>Éducation:</h1> 
    <div className='mt-4 text-black'>
      - Doctorat en droit (Droit de la famille), Université d'Alger, 2005
      <br/>
      - Maîtrise en droit, Université d'Alger, 2003
    </div>
  </div>

  <div className='ml-0 md:ml-16'>
    <h1 className='mt-4 text-orange-600 text-2xl b'>Spécialités:</h1> 
    <div className='mt-4 text-black'>
      - Droit de la famille
      <br/>
      - Droit des successions
      <br/>
      - Médiation familiale
    </div>
  </div>



    
    <div className="mt-8 space-y-4 ml-0 md:ml-16">
        <h1 className='text-orange-600 text-2xl'>Contact</h1>

        <div className="flex items-center">
            <FaPhone size={20} className="text-orange-500" />
            <span className="text-black ml-2">+1 123 456 7890</span>
        </div>
        <div className="flex items-center">
            <FaEnvelope size={20} className="text-orange-500" />
            <span className="text-black ml-2">example@example.com</span>
        </div>
        <div className="flex items-center">
            <FaMapMarkerAlt size={20} className="text-orange-500" />
            <span className="text-black ml-2">123 Main St, Cityville</span>
        </div>
      
    </div>
</div>



<div className="flex justify-center"> 
        
  
      </div>
      <CommentSystem/>




</div>

    );
};
export default Avocat;

