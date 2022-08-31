import React, {useState} from "react";
import categoriesData from "../data/categoriesData";
import Option from "../components/Option";

export default function EventForm(){

    function createOptionsFromArray(array){
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

    const eventCategory = createOptionsFromArray(categoriesData[0].eventCategory)
    const levelCategory = createOptionsFromArray(categoriesData[0].levelCategory)
    const surfaceCategory = createOptionsFromArray(categoriesData[0].surfaceCategory)
    const surroundingCategory = createOptionsFromArray(categoriesData[0].surroundingCategory)

    const [eventData, setEventData] = useState({
        name: "",
        startDateTime: "",
        endDateTime: "",
        street: "",
        city: "",
        maxNumberOfPlayers: "",
        priceForEvent: "",
        eventCategory: "",
        levelCategory: "",
        surfaceCategory: "",
        surroundingCategory: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setEventData(prevEventData => ({
            ...prevEventData,
            [name]: value
        }))
    }

    return (
        <div className="form-container">
            <form className="eventForm">
                <label for="name">Nazwa wydarzenia</label>
                <input
                    type="text"
                    placeholder="Nazwa wydarzenia"
                    className="form--input"
                    name="name"
                    onChange={handleChange}
                    value={eventData.name}
                    id="name"
                />
                <label for="startDateTime">Data rozpoczęcia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="startDateTime"
                    onChange={handleChange}
                    value={eventData.startDateTime}
                    id="startDateTime"
                />
                <label for="endDateTime">Data zakończenia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="endDateTime"
                    onChange={handleChange}
                    value={eventData.endDateTime}
                    id="endDateTime"
                />
                <label for="street">Ulica</label>
                <input
                    type="text"
                    placeholder="Ulica"
                    className="form--input"
                    name="street"
                    onChange={handleChange}
                    value={eventData.street}
                    id="street"
                />
                <label for="city">Miasto</label>
                <input
                    type="text"
                    placeholder="Miasto"
                    className="form--input"
                    name="city"
                    onChange={handleChange}
                    value={eventData.city}
                    id="city"
                />
                <label for="maxNumberOfPlayers">Maksymalna liczba graczy</label>
                <input
                    type="number"
                    placeholder="Ilość graczy"
                    className="form--input"
                    name="maxNumberOfPlayers"
                    onChange={handleChange}
                    value={eventData.maxNumberOfPlayers}
                    id="maxNumberOfPlayers"
                />
                <label for="priceForEvent">Cena całkowita</label>
                <input
                    type="number"
                    step="any"
                    min="0"
                    placeholder="Cena"
                    className="form--input"
                    name="priceForEvent"
                    onChange={handleChange}
                    value={eventData.priceForEvent}
                    id="priceForEvent"
                />
                <div className="form--selectDiv">
                    <select 
                        id="eventCategory"
                        className="form--event"
                        value={eventData.eventCategory}
                        onChange={handleChange}
                        name="eventCategory"
                    >
                        <option value="">Rodzaj wydarzenia</option>
                        {eventCategory}
                    </select>
                    <select 
                        id="levelCategory"
                        className="form--lvl"
                        value={eventData.levelCategory}
                        onChange={handleChange}
                        name="levelCategory"
                    >
                        <option value="">Poziom gry</option>
                        {levelCategory}
                    </select>
                    <select 
                        id="surfaceCategory"
                        className="form--surface"
                        value={eventData.surfaceCategory}
                        onChange={handleChange}
                        name="surfaceCategory"
                    >
                        <option value="">Nawierzchnia</option>
                        {surfaceCategory}
                    </select>
                    <select 
                        id="surroundingCategory"
                        className="form--surrounding"
                        value={eventData.surroundingCategory}
                        onChange={handleChange}
                        name="surroundingCategory"
                    >
                        <option value="">Otoczenie</option>
                        {surroundingCategory}
                    </select>
                </div>
                <button className="form--submit">Utwórz wydarzenie!</button>
            </form>
        </div>
    )
}