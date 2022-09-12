import React from "react";
import {Link} from "react-router-dom"

export default function Box(props) {
    var placesLeft = props.maxNumberOfPlayers - props.registrations.length;
    var message="";
    const date = props.startDateTime.split("T")

    if (placesLeft > 1){
        message=`Wolne miejsca: ${placesLeft}`
    } else if (placesLeft === 1){
        message=`Zostało ${placesLeft} wolne miejsce!`
    } else {
        message="Brak wolnych miejsc!"
    }

    return (
        <Link to={`/events/${props.id}`} state={props.id}>
        <div className="box">  
            <div className="box--imgDiv">
                <img src={`../images/${props.eventCategory.imageForBoxWithEventInfo}`} alt="img" className="box--img"/>
            </div>
            <div className="box--data">
                <p>{date[0]} {date[1]}</p>
                <p>Lokalizacja:</p>
                <p className="box--location">{props.street} {props.city}</p>
                <p className="box--placesLeft">{message}</p>
            </div>
        </div>
        </Link>
    )
}