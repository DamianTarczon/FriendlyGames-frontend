import React from "react";
import {Link} from "react-router-dom"

export default function Box(props) {
    
    var message="";
    if (props.placesLeft > 1){
        message=`Wolne miejsca: ${props.placesLeft}`
    } else if (props.placesLeft === 1){
        message=`Zostało ${props.placesLeft} wolne miejsce!`
    } else {
        message="Brak wolnych miejsc!"
    }

    return (
        <div className="box">
            <Link to={`/events/${props.id}`} state={props}>
            <div className="box--imgDiv">
                <img src={`../images/${props.img}`} alt="img" className="box--img"/>
            </div>
            <div className="box--data">
                <p>{props.startDate}</p>
                <p>Lokalizacja:</p>
                <p className="box--location">{props.location.street} {props.location.city}</p>
                <p className="box--placesLeft">{message}</p>
            </div>
            </Link>
        </div>
    )
}