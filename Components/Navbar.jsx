import React from "react";
import { Link , NavLink} from "react-router-dom";

export default function Navbar() {
    return(
        <header>
        <NavLink className={({isActive})=> isActive ? "active-link" : ""} to={"/"}>Vanlife</NavLink>
        <NavLink className={({isActive})=> isActive ? "active-link" : ""} to={"/About"}>About</NavLink>
        <NavLink className={({isActive})=> isActive ? "active-link" : ""} to={"/Vans"}>Vans</NavLink>
       </header>
    )
    
}


