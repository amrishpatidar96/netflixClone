import React, { useState } from "react";

import { NavLink} from 'react-router-dom'

function SubHeader(props) {
  const [isGenreClicked, setisGenreClicked] = useState(false);

  return (
    <div
      className="sticky py-2 px-6 flex bg-netflixBlack items-center z-50"
      style={{ marginTop: "60px" }}
      onClick={function () {
        setisGenreClicked(false);
      }}
    >
      <div className="font-medium text-netflixWhite text-lg">{props.title}</div>
      <div className="bg-netflixBlack text-netflixWhite ml-6">
        <div
          className="relative border-netflixWhite border p-1 w-32"
          onClick={function (e) {
              e.stopPropagation();
            setisGenreClicked(true);
          }}
        >
          Genres
          <span className="absolute right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="absolute bg-netflixBlack text-netflixWhite">
          <ul className="outline-none grid grid-cols-3">
            {isGenreClicked &&
              props.genres &&
              props.genres.map((genre) => {
                return (
                  <li
                    key={genre.id}    
                  >
                    <NavLink 
                    onClick={props.genereChangeHandler.bind(this,genre.id)}
                    to={"/genre/"+genre.id}>{genre.name}</NavLink>
                    
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
