import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <header>
        <Link to={"/"}>Vanlife</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Vans"}>Vans</Link>
       </header>
    )
    
}