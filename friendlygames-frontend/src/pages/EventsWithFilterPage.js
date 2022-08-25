import React from "react";
import Filter from "../components/Filter"

export default function EventsViewWithFilter(props){
    return (
        <div className="big--container">
            <Filter />
            <div className="events--div">
                {props.eventElements.length > 0 ? props.eventElements : 
                <h2 
                    className="event--notFoundAnnouncement"
                >Nie znaleźliśmy pasujących wydarzeń.</h2>}
            </div>
        </div>
)}