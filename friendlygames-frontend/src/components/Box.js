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

    const date = props.startDateTime.split("T")

    return (
        <div className="box">
            <Link to={`/events/${props.id}`} state={props.id}>
            <div className="box--imgDiv">
                <img src={`../images/${props.imageForEvent}`} alt="img" className="box--img"/>
            </div>
            <div className="box--data">
                <p>{date[0]} {date[1]}</p>
                <p>Lokalizacja:</p>
                <p className="box--location">{props.location.street} {props.location.city}</p>
                <p className="box--placesLeft">{message}</p>
            </div>
            </Link>
        </div>
    )
}