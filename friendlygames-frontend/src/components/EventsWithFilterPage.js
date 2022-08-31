import React from "react";
import Filter from "./Filter";
import Box from "../components/Box";

export default function EventsViewWithFilter(props){
    const eventBoxes = props.eventElements.map(event => (
        <Box 
        key={event.id}
        {...event}
        />
    ))

    return (
        <div className="big--container">
            <Filter />
            <div className="events--div">
                {eventBoxes}
            </div>
        </div>
)}