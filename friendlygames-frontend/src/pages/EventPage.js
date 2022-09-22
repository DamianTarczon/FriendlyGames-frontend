import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useJsApiLoader } from "@react-google-maps/api"
import Map from "../components/Map.js";

export default function EventPage(){
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    const eventId = useLocation().state

    const [data, setData] = useState({})
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(() => {
        async function fetchData() {
        await fetch(`https://localhost:7089/api/Events/${eventId}`)
            .then(res => res.json())
            .then(testData => setData(testData))
            setIsDataLoaded(true);
        }
        fetchData();
    }, []);
    
    return (
        <>
        {isDataLoaded ?
        <div className="eventPage">
            <div className="eventPage--div">
                <h1 className="event--header">{data.name}</h1>
                <div className="event--info">
                    <h5 className="event--h5">Wydarzenie</h5>
                    <h3 className="event--h3">{data.eventCategory.name}</h3>
                    <h5 className="event--h5">Data rozpoczęcia / Data zakończenia</h5>
                    <h3 className="event--h3">{data.startDateTime.split("T").join(" ")} / {data.endDateTime.split("T").join(" ")}</h3>
                    <h5 className="event--h5">Poziom trudności</h5>
                    <h3 className="event--h3">{data.levelCategory.name}</h3>
                    <h5 className="event--h5">Nawierzchnia</h5>
                    <h3 className="event--h3">{data.surfaceCategory.name}</h3>
                    <h5 className="event--h5">Otoczenie</h5>
                    <h3 className="event--h3">{data.surroundingCategory.name}</h3>
                    <h5 className="event--h5">Liczba zapisanych graczy / Maksymalna liczba graczy</h5>
                    <h3 className="event--h3">{data.registrations.length} / {data.maxNumberOfPlayers}</h3>
                    <h5 className="event--h5">Cena</h5>
                    <h3 className="event--h3">{data.priceForEvent} zł</h3>
                    {/* <h5 className="event--h5">Dodatkowe informacje</h5>
                    <h3 className="event--h3">{data.description}</h3> */}
                </div>
                <div className="event--mapInfo">
                    <h3>{data.street} {data.city}</h3>
                    <div className="event--map">
                        {isLoaded && <Map location={data} />}
                    </div>
                </div>
            </div>
        </div> : <div className="event--Announcement">Loading data...</div>}
        </>
    )
}