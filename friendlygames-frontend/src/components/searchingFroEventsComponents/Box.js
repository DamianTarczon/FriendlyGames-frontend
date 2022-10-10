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
        <Link to={`/events/${props.id}`}>
        <div className="box">  
            <div className="box--imgDiv">
                <img src={`../images/${props.eventCategory.imageForBoxWithEventInfo}`} alt="img" className="box--img"/>
            </div>
            <div className="box--data">
                <div className="box--title"><h3>{props.name}</h3></div>
                <p className="box--date">{date[0]}, {date[1].slice(0,5)}</p>
                <p className="box--location">{props.street}, {props.city}</p>
                <div className="box--placesWithPrice">
                <p className="box--placesLeft">{message}</p>
                <p className="box--price">{props.priceForEvent} zł</p>
                </div>
            </div>
        </div>
        </Link>
    )
}