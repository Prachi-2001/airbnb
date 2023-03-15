import React from "react"
import star from "../images/star.png"

export default function Card(props){
    let badgeText
    if(props.openSpot===0){
        badgeText="SOLD OUT";
    }else if(props.country=="Online"){
        badgeText="ONLINE"
    }

    return (
        
        <div className="card">
            {/* adding conditional rendering */}

            {badgeText && <div className="sold--out">{badgeText}</div>}
            <img src={props.img} className="card--image"/>
            <div className="card--stat">
                <img src={star} className="card--star"/>
                <span>
                    {props.rating} ({props.reviewCount}) . {props.country}
                </span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / Person</p>
        </div>
    )
}
