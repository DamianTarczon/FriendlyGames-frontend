import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import  Geocode  from "react-geocode"


export default function Map(props){
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    const [place, setPlace] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        Geocode.fromAddress(`${props.location.street}, ${props.location.city}`).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setPlace({lat, lng})
                setIsLoaded(true)
            },
            (error) => {
                console.error(error);
            }
        )
    }, [])
    
    return (
        <>
        {isLoaded ? <GoogleMap 
            zoom={15}
            center={place}
            mapContainerClassName="map--container"
            options={{
                streetViewControl: false,
                mapTypeControl: false }}
            >
            <MarkerF position={place} />
        </GoogleMap> : <div>Loading...</div>}
        </>
    )
}