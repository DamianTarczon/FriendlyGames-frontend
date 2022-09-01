import React from "react";
import Box from "../components/Box";

export default function EventsViewWithFilter(props){
    const eventBoxes = props.eventElements.map(event => (
        <Box 
        key={event.id}
        {...event}
        />
    ))

    return (
        <div className="events--div">
            {eventBoxes}
        </div>
)}