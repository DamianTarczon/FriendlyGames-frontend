import React from "react";
import events from "../data/events.js";
import Box from "./Box"

export default function EventsViewWithFilter(){
    const eventElements = events.map(event => (
        <Box 
        key={event.id}
        {...event}
        />
    ))

    return (
        <div className="big--container">
            <div className="filter--div">
                <div className="filter--header">
                    <h4>Filtruj według następujących kryteriów:</h4>
                </div>
                <div className="filter--gameLvl">
                    <h4>Poziom</h4>
                    <p>wysoki</p>
                    <p>średni</p>
                    <p>rekreacyjny</p>
                </div>
                <div className="filter--surface">
                    <h4>Nawierzchnia</h4>
                    <p>trawa</p>
                    <p>sztuczna</p>
                    <p>hala</p>
                    <p>piasek</p>
                </div>
                <div className="filter--numberOfPlayers">
                    <h4>Ilość osób</h4>
                    <p>2-4</p>
                    <p>5-7</p>
                    <p>8-10</p>
                    <p>11+</p>
                </div>
                <div className="filter--price">
                    <h4>Cena</h4>
                    <p>bezpłatne</p>
                    <p>płatne</p>
                </div>
            </div>
            <div className="events--div">
                {eventElements}
            </div>
        </div>
)}