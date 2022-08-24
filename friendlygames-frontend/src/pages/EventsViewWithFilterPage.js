import React from "react";
import events from "../data/events.js";
import Box from "../components/Box"
import Filter from "../components/Filter"

export default function EventsViewWithFilter(){
    const eventElements = events.map(event => (
        <Box 
        key={event.id}
        {...event}
        />
    ))

    return (
        <div className="big--container">
            <Filter />
            <div className="events--div">
                {eventElements}
            </div>
        </div>
)}