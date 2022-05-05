
import {React} from 'react';
import { NavLink, Outlet } from "react-router-dom";
import {classNames} from '../../common';

function NavPage(props){
    const navigation = [
        { name: 'Home', to: '/browse'},
        { name: 'Tv Shows', to: '/genre/83' },
        { name: 'Movies', to: '/genre/34399' },
        { name: 'New & Popular', to: '/latest'},
        { name: 'My List', to: '/my-list' }
      ];
   
        
            
        return ( 
            <div  onMouseLeave={props.useAs === 'col'? props.onMouseLeave : ()=>{}}   className={(props.useAs === "col") ? classNames("flex flex-col bg-netflixBlack md:hidden",props.className) : "hidden md:flex items-center gap-x-1"}>
              {
              
              props.useAs === "col" && <div className='absolute w-5 h-5 transform rotate-45 bg-netflixWhite bg-opacity-75 -z-10 -top-3 -z-10'></div>
              
              
            }
            {
              navigation.map((navitem,i)=>{
                return (
                  <NavLink
                  to={navitem.to}
                  className={({isActive})=>{
                    return isActive ? "p-2 text-sm font-bold" : "p-2 text-sm font-light hover:opacity-75"
                  }}
                  key={i}
                  
                >
                  {navitem.name}
              </NavLink>
                )
              })
            }
            </div>
        ) ;
    
}

export default NavPage;