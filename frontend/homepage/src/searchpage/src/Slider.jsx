import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

import "./index.css";
import { searchContext } from "../../RoutesApp";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageRange = 5;
  const pages = [];

  const handleClick = (page) => {
    onPageChange(page);
  };

  const generatePages = () => {
    if (totalPages <= pageRange) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const midPoint = Math.ceil(pageRange / 2);
      const startPage = Math.max(1, currentPage - midPoint + 1);
      const endPage = Math.min(totalPages, startPage + pageRange - 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }
  };

  generatePages();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => handleClick(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page, index) => (
        <span
          key={index}
          onClick={() => handleClick(page)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentPage === page ? "#D4AD6B" : "inherit",
            textDecoration: currentPage === page ? "underline" : "none",
          }}
        >
          {page}
        </span>
      ))}
      <button
        onClick={() => handleClick(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

function Slider() {
  const { setSearchResults, searchResults, lawyers, setLawyers } = useContext(searchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalSearchResults = searchResults?.length;

  useEffect(() => {
    setSearchResults(lawyers);
  }, [lawyers]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-lightBrown px-5 phone:max-tablet:pl-2 py-6">
        <div className="mb-4 mt-3 flex w-full justify-between">
          {/* Add SearchBar component and handleSearch function */}
        </div>
        {totalSearchResults === 0 ? (
          <div className="flex justify-center">
            No compatible results found
          </div>
        ) : (
          <>
            <LawyerList
              lawyers={searchResults}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <PaginationComponent
              currentPage={currentPage}
              totalPages={Math.ceil(totalSearchResults / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

const LawyerList = ({ lawyers, currentPage, itemsPerPage }) => {
  const indexOfLastLawyer = currentPage * itemsPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - itemsPerPage;
  const currentLawyers = lawyers?.slice(indexOfFirstLawyer, indexOfLastLawyer);

  return (
    <div className="flex flex-col items-center gap-8 px-6 py-3">
      {currentLawyers?.map((lawyer, index) => (
        <LawyerCard key={index} lawyer={lawyer} />
      ))}
    </div>
  );
};

const LawyerCard = ({ lawyer }) => {
  const [value] = useState(2);

  const truncatedBio = lawyer?.bio.slice(0, 450);
  const truncatedDom = lawyer?.domains.slice(0, 50);

  return (
    <div className="bg-gray-100 w-[80%] flex place-items-center border-3 border-black pb-12 pl-5 pr-5 h-62">
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
        <button className="px-6 min-w-max rounded-sm bg-orange-500 w-full text-white w-44 h-12 hover:bg-orange-200 mt-24 hover:border-0">
          See the profile
        </button>
      </Link>
    </div>
  );
};

export default Slider;
