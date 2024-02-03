import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Navigation, Pagination } from 'swiper/modules';
import "./index.css";
import { searchContext } from "../../RoutesApp";

function Slider() {
  const { searchResults } = useContext(searchContext);
  const [value, setValue] = useState(2);

  const chunkArray = (arr, n) => {
    return Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
      arr.slice(i * n, i * n + n)
    );
  };

  const chunkedResults = chunkArray(searchResults, 1); // For phone size, show one lawyer per slide

  return (
    <Swiper
      spaceBetween={20} // Reduce space between slides for better display on small screens
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="swiper-container"
    >
      {chunkedResults.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chunk.map((lawyer, idx) => {
              const truncatedBio = lawyer?.bio.slice(0, 50);
              const truncatedDom = lawyer?.domains.slice(0, 50);
              return (
                <div
                  key={idx}
                  className="bg-gray-100 border-3 border-black p-4 md:p-6 lg:p-8"
                >
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-black font-bold">{lawyer?.lawyername}</p>
                    <Rating name="read-only" value={value} readOnly />
                  </div>
                  <img
                    className="w-full h-40 md:h-48 lg:h-52 object-cover rounded-md"
                    src={lawyer?.profile_pic}
                    alt="Lawyer Profile"
                  />
                  <div className="flex text-orange-500 gap-2">
                    {truncatedDom}
                    {lawyer?.domains.length > 50 && " ···"}
                  </div>
                  <p className="text-black font-thin mt-2 md:mt-0">
                    {truncatedBio}
                    {lawyer?.bio.length > 50 && " ···"}
                  </p>
                  <Link to={`/avocat/${lawyer?.lawyer_id}`}>
                    <button className="px-4 py-2 mt-4 rounded-sm bg-orange-500 text-white hover:bg-orange-200">
                      See Profile
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
