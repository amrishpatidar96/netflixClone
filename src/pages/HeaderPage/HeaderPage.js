import { Fragment } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import Navpage from '../Navpage'

import NavToolTip from '../NavToolTip';



const HeaderPage = (props) => {

  return (<div className='z-20 py-4 px-6 w-full bg-netflixBlack text-netflixWhite flex items-center fixed top-0'>
          
          <NavLink
                to="/browse"
                className="text-netflixRed font-bold text-xl mr-4"
              >
                NETFLIX
          </NavLink>
          <Navpage />

          <NavToolTip/>
          
        
    </div >
      )
    }

export default HeaderPage;