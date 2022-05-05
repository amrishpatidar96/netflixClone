import { useState } from 'react';
import Navpage from '../Navpage'

function NavToolTip(){
   const [isBrowseClicked,setIsBrowseClicked]= useState(false) ;
    return (
      <div className="relative left-6 bg-netflixBlack text-netflixWhite block md:hidden" >
        <div
          className="relative w-20"
          onMouseEnter={() => setIsBrowseClicked(!isBrowseClicked)}
          
        >
          <span className="">Browse </span>
          <svg
            className="h-6 w-6 absolute top-0 right-0 inline "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isBrowseClicked && (
          <Navpage
            useAs="col"
            className="absolute w-64 bg-netflixBlack text-netflixWhite gap-2 top-12 -right-24 flex border-t-4  items-center md:hidden"
            onMouseLeave = {(e) => { e.preventDefault(); setIsBrowseClicked(!isBrowseClicked)}}
          />
        )}
      </div>
    );

}

export default NavToolTip ;