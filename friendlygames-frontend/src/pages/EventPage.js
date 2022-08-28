import React from "react";
import { useLocation } from "react-router-dom"

export default function EventPage(){
    const event = useLocation().state

    return (
        <div className="eventPage">
            <div className="eventPage--div">
                <h1 className="event--header">{event.name}</h1>
                <div className="event--info">
                    <h3>{event.eventCategory.name}</h3>
                    <h3>{event.startDate}/{event.endDate}</h3>
                    <h3>{event.levelCategory.name}</h3>
                    <h3>{event.surfaceCategory.name}</h3>
                    <h3>{event.surroundingCategory.name}</h3>
                    <h3>{event.playersNeeded}</h3>
                    <h3>{event.price}</h3>
                </div>
                <div className="event--mapInfo">
                    <h3>{event.location.street}, {event.location.postalCode} {event.location.city}</h3>
                    <div className="event--map">
                        Mapa
                    </div>
                </div>
            </div>
        </div>
    )
}