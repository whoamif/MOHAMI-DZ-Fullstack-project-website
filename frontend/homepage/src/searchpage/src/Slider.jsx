import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "./index.css";
import { searchContext } from "../../RoutesApp";

function Slider() {
  SwiperCore.use([Navigation, Pagination]);

  const { setSearchResults, searchResults } = useContext(searchContext);
  const [value, setValue] = useState(2);

  // Function to chunk the array into groups of size n
  const chunkArray = (arr, n) => {
    return Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
      arr.slice(i * n, i * n + n)
    );
  };

  // Chunk searchResults into groups of 10
  const chunkedResults = chunkArray(searchResults, 10);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mb-16 ml-12 place-items-center flex"
    >
      {chunkedResults.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chunk.map((lawyer, idx) => {
              const truncatedBio = lawyer?.bio.slice(0, 50);
              const truncatedDom = lawyer?.domains.slice(0, 50);
              return (
                <div
                  key={idx}
                  className="bg-gray-100 flex place-items-center border-3 border-black pb-12 pl-5 pr-5 h-62"
                >
                  <img
                    className="w-24 h-24"
                    src={lawyer?.profile_pic}
                    alt="Lawyer Profile"
                  />
                  <div className="p-10 h-64 w-full text-left flex flex-col gap-4">
                    <div className="flex w-72 gap-5">
                      <p className="text-black font-bold">
                        {lawyer?.lawyername}
                      </p>
                      <Rating name="read-only" value={value} readOnly />
                    </div>
                    <div className="flex text-orange-500 gap-2">
                      {truncatedDom}
                      {lawyer?.domains.length > 50 && " ···"}
                    </div>
                    <p className="text-black font-thin">
                      {truncatedBio}
                      {lawyer?.bio.length > 50 && " ···"}
                    </p>
                  </div>
                  <Link to={`/avocat/${lawyer?.lawyer_id}`}>
                    {" "}
                    <button className="px-6 min-w-max rounded-sm bg-orange-500 w-full text-white w-44 h-12 hover:bg-orange-200 mt-24 hover:border-0">
                      see the profile
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
