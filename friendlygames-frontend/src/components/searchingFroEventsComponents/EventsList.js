import React from "react";
import Box from "./Box";

export default function EventsList(props){
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