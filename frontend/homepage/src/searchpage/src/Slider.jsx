import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { searchContext } from "../../RoutesApp";

function Slider() {
  const { setSearchResults, searchResults } = useContext(searchContext);
  const [value, setValue] = useState(2);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className="mb-16 ml-12 place-items-center flex"
    >
      {searchResults.map((lawyer, index) => {
        const truncatedBio = lawyer?.bio.slice(0, 50);
        const truncatedDom = lawyer?.domains.slice(0, 50);
        return (
          <SwiperSlide key={index}>
            <div className=" w-2/3 bg-gray-100 flex place-items-center border-3 border-black pb-12 pl-5 pr-5  h-62">
              <img
                className="w-24 h-24"
                src={lawyer?.profile_pic}
                alt="Lawyer Profile"
              />
              <div className="p-10 h-64 w-full text-left flex flex-col gap-4">
                <div className="flex w-72 gap-5">
                  <p className="text-black font-bold">{lawyer?.lawyername}</p>
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
                <button className=" px-6 min-w-max rounded-sm bg-orange-500 w-full text-white w-44 h-12 hover:bg-orange-200 mt-24 hover:border-0">
                  see the profile
                </button>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
