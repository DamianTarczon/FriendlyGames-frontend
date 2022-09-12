import React, {useState, useEffect} from "react";
import categoriesData from "../data/categoriesData";
import Option from "../components/Option";
import { Link } from "react-router-dom";

export default function EventForm(){

    function createOptionsFromArray(array){
        if(isLoaded){
            const optionsElements = array?.map(elements => {
            return (
                <Option 
                    key={elements.id}
                    {...elements}
                />
            )
        })
        return optionsElements
        }
    }

    const [categories, setCategories] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function categories() {
        await fetch("https://localhost:7089/api/Categories")
            .then(res => res.json())
            .then(data => setCategories(data));
        }
        categories();
        setIsLoaded(true)
    }, []);
    
    const eventCategory = createOptionsFromArray(categories.eventCategory)
    const levelCategory = createOptionsFromArray(categories.levelCategory)
    const surfaceCategory = createOptionsFromArray(categories.surfaceCategory)
    const surroundingCategory = createOptionsFromArray(categories.surroundingCategory)
    
    const [eventData, setEventData] = useState({
        Name: "",
        CreatorId: 1,
        StartDateTime: "",
        EndDateTime: "",
        Street: "",
        City: "",
        MaxNumberOfPlayers: "",
        PriceForEvent: "",
        EventCategoryId: "",
        LevelCategoryId: "",
        SurfaceCategoryId: "",
        SurroundingCategoryId: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setEventData(prevEventData => ({
            ...prevEventData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        };
        fetch('https://localhost:7089/api/Events', requestOptions)
    }

    return (
        <div className="form-container">
            <form className="eventForm" onSubmit={handleSubmit}>
                <label for="name">Nazwa wydarzenia</label>
                <input
                    type="text"
                    placeholder="Nazwa wydarzenia"
                    className="form--input"
                    name="Name"
                    onChange={handleChange}
                    value={eventData.Name}
                    id="Name"
                />
                <label for="startDateTime">Data rozpoczęcia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="StartDateTime"
                    onChange={handleChange}
                    value={eventData.StartDateTime}
                    id="StartDateTime"
                />
                <label for="endDateTime">Data zakończenia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="EndDateTime"
                    onChange={handleChange}
                    value={eventData.EndDateTime}
                    id="EndDateTime"
                />
                <label for="street">Ulica</label>
                <input
                    type="text"
                    placeholder="Ulica"
                    className="form--input"
                    name="Street"
                    onChange={handleChange}
                    value={eventData.Street}
                    id="Street"
                />
                <label for="city">Miasto</label>
                <input
                    type="text"
                    placeholder="Miasto"
                    className="form--input"
                    name="City"
                    onChange={handleChange}
                    value={eventData.City}
                    id="City"
                />
                <label for="maxNumberOfPlayers">Maksymalna liczba graczy</label>
                <input
                    type="number"
                    placeholder="Ilość graczy"
                    className="form--input"
                    name="MaxNumberOfPlayers"
                    onChange={handleChange}
                    value={eventData.MaxNumberOfPlayers}
                    id="MaxNumberOfPlayers"
                />
                <label for="PriceForEvent">Cena</label>
                <input
                    type="number"
                    step="any"
                    min="0"
                    placeholder="Cena"
                    className="form--input"
                    name="PriceForEvent"
                    onChange={handleChange}
                    value={eventData.PriceForEvent}
                    id="PriceForEvent"
                />
                <div className="form--selectDiv">
                    <select 
                        id="EventCategoryId"
                        className="form--event"
                        value={eventData.EventCategoryId}
                        onChange={handleChange}
                        name="EventCategoryId"
                    >
                        <option value="">Rodzaj wydarzenia</option>
                        {eventCategory}
                    </select>
                    <select 
                        id="LevelCategoryId"
                        className="form--lvl"
                        value={eventData.LevelCategoryId}
                        onChange={handleChange}
                        name="LevelCategoryId"
                    >
                        <option value="">Poziom gry</option>
                        {levelCategory}
                    </select>
                    <select 
                        id="SurfaceCategoryId"
                        className="form--surface"
                        value={eventData.SurfaceCategoryId}
                        onChange={handleChange}
                        name="SurfaceCategoryId"
                    >
                        <option value="">Nawierzchnia</option>
                        {surfaceCategory}
                    </select>
                    <select 
                        id="SurroundingCategoryId"
                        className="form--surrounding"
                        value={eventData.SurroundingCategoryId}
                        onChange={handleChange}
                        name="SurroundingCategoryId"
                    >
                        <option value="">Otoczenie</option>
                        {surroundingCategory}
                    </select>
                </div>
                <button className="form--submit"><Link to="/events">Utwórz wydarzenie!</Link></button>
            </form>
        </div>
    )
}