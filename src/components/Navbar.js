import React from "react"
import airbnb from "../images/Airbnb-01.png"

export default function Navbar(){
    return(
        <nav>
            <img className="airbnb-logo" src={airbnb} width="140px" height="100px"/>
        </nav>
    )
}