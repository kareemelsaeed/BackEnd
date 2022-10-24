import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"90.8vh"}}>
            <div className=" text-light">
                <NavLink className="text-decoration-none Naav" to="/Products"><h1>Products</h1></NavLink>
            </div>
        </div>
    )
}

export default SideBar;