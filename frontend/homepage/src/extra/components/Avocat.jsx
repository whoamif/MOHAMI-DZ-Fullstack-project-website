import profilavocat from "../components/av.jpeg";
import React, { useContext, useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Message from "../components/btnmessage";
import CircleRating from "./CircleRating";
import Rendezvous from "./rendezvous";
import Horaire from "./horaire";
import CommentSystem from "./commentsystem";
/* import Map from "../../map"; */
import NavBar from '../../NavBar';
import Footer from "../../Footer";
import { Link, useParams } from "react-router-dom";
import { searchContext } from "../../RoutesApp";
import axios from "axios";

const Avocat = ({ lawyers }) => {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = React.useState(2);
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const selectedLawyer = lawyers?.find(
      (lawyer) => lawyer?.lawyer_id.toString() === id
    );
    setLawyer(selectedLawyer);
  }, [id, lawyers]);
  const handleAppointmentButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className=" w-screen m-auto gap-5 flex flex-col">
      <NavBar />
      <div className="flex gap-5 p-12">
        <img
          src={profilavocat}
          className="h-24 w-24 rounded-md mb-4 lg:mb-0 lg:mr-4 lg:order-1"
        />

        <div className="text-left lg:text-left lg:w-1/2 lg:order-2 sm:w-full">
          <h4 className="text-black text-3xl pb-1 font-bold">
            {lawyer?.lawyername}
          </h4>{" "}
          
          <CircleRating className="ml-0" />
          <p className="pt-5">
            Spécialité :{" "}
            <span className="text-orange-500">
              {" "}
              {lawyer?.domains}
            </span>
          </p>
        </div>

        <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:order-3">
          <Horaire className="mx-auto lg:mx-0" />
        </div>
      </div>

      <div className="border-t mt-0 mx-8 border-orange-500">
        
      </div>

      <div className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 md:space-x-4 mx-auto mt-4">
        <div className="md:order-1">
          <Message />
        </div>
        <div className="md:order-1">
          <button
            onClick={handleAppointmentButtonClick}
            className="bg-orange-500 py-2 px-8 md:px-16 rounded text-white"
          >
            Rendez-vous
          </button>
          {showForm && <Rendezvous handleClose={handleFormClose} />}
        </div>
      </div>

      <div className="w-full md:w-3/4 text-xl text-white flex flex-col mx-4 md:mx-0">
        <div className="mt-8 space-y-4 ml-0 md:ml-16">
          <h1 className="text-orange-600 text-2xl ">Contact</h1>

          <div className="flex items-center">
            <FaPhone size={20} className="text-orange-500" />
            <span className="text-black ml-2">{lawyer?.phn_number}</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope size={20} className="text-orange-500" />
            <span className="text-black ml-2">{lawyer?.email}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt size={20} className="text-orange-500" />
            <span className="text-black ml-2">{lawyer?.adr}</span>
          </div>
        </div>
        <div className="w-2/3 text-2xl">
     {/*  <Map address={lawyer?.adr} />  */}
        </div>
      </div>

      <div className="flex justify-center"></div>
      <CommentSystem />

      <Footer />
    </div>
  );
};
export default Avocat;
