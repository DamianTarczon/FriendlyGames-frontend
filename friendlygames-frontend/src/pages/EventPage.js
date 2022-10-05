import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useJsApiLoader } from "@react-google-maps/api"
import Map from "../components/Map.js";
import { webAPIUrl } from "../apiUrl/WebAPIUrl"

export default function EventPage(){
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    const eventId = useLocation().state
    const [userData, setUserData] = useState(null)
    const [token, setToken] = useState(null)
    const [data, setData] = useState({})
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [isUserRegistered, setIsUserRegistered] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setUserData(JSON.parse(localStorage.getItem('user')))
        async function fetchData() {
        await fetch(`${webAPIUrl}/Events/${eventId}`)
            .then(res => res.json())
            .then(data => setData(data))
            setIsDataLoaded(true)
        }
        fetchData();
    }, []);

    useEffect(() => {
        if(data.registrations){
            data.registrations.forEach(element => {
                if(element.apiUserId === userData.id){
                    setIsUserRegistered(false)
                }
            });
        }
        else {
            setIsUserRegistered(true)
        }
    }, [data])


    async function handleClick(){
        const headers = {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Credentials': 'include'
            }
        };
        await fetch(`${webAPIUrl}/Events/${data.id}`, headers)
        navigate("/events")
    }

    async function handleJoin(){
        const registartionData = {
            EventId: data.id,
            ApiUserId: userData.id
        }
        const headers = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Credentials': 'include'
            },
            body: JSON.stringify(registartionData)
        };
        await fetch(`${webAPIUrl}/Registration`, headers)
        window.location.reload(false);
    }

    
    
    return (
        <>
        {isDataLoaded ?
        <div className="eventPage">
            <div className="eventPage--div">
                {data && userData && (data.apiUserId === userData.id ? <i className="fa fa-trash" onClick={handleClick}></i> : null)}
                {data && userData && (data.apiUserId !== userData.id) && isUserRegistered ? <button className="event--joinButton" onClick={handleJoin}>Dołącz</button> : null}
                <h1 className="event--header">{data.name}</h1>
                <div className="event--info">
                    <h5 className="event--h5">Wydarzenie</h5>
                    <h3 className="event--h3">{data.eventCategory.name}</h3>
                    <h5 className="event--h5">Data rozpoczęcia / Data zakończenia</h5>
                    <h3 className="event--h3">{data.startDateTime.split("T").join(", ")} / {data.endDateTime.split("T").join(", ")}</h3>
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