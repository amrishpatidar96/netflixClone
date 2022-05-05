import HeaderPage from "../HeaderPage";

import { NavLink, Outlet ,useNavigate} from "react-router-dom";
import React, { useState ,Fragment, useEffect} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




const DashboardPage = () => {

    //return (<>DashboardPage</>)
    let navigate = useNavigate();
    useEffect(()=>{
        navigate("/latest")
    },[])

    return (
        <Fragment>
            <div >
            <HeaderPage />
            
            <Outlet/>
            </div>
      
        </Fragment>
    );
}

export default DashboardPage;