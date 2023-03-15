import React from "react"

export default function Joke({setup="",punchline}){
    return(
        <div>
          <h1>
            {setup}
        </h1>
        <p>{punchline}</p>  
        </div>  
    )
}