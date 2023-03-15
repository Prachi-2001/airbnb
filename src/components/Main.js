import React from "react"
import grid from "../images/grid.png"

export default function Main(){
    return(
        <main>
            <div >
                <img className="grid--logo" src={grid} />
            </div>
           <h1>Online Experiences</h1>
           <p>Join unique interactions activities led by one-of-a-kind hosts-all without leaving home.</p> 
        </main>
    )
}