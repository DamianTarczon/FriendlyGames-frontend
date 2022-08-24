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
        startDate: "",
        endDate: "",
        location: "",
        numberOfPlayers: "",
        price: "",
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
                <input
                    type="text"
                    placeholder="Nazwa wydarzenia"
                    className="form--input"
                    name="name"
                    onChange={handleChange}
                    value={eventData.name}
                />
                <input
                    type="datetime-local"
                    className="form--input"
                    name="startDate"
                    onChange={handleChange}
                    value={eventData.startDate}
                />
                <input
                    type="datetime-local"
                    className="form--input"
                    name="endDate"
                    onChange={handleChange}
                    value={eventData.endDate}
                />
                <input
                    type="text"
                    placeholder="Miejsce"
                    className="form--input"
                    name="location"
                    onChange={handleChange}
                    value={eventData.location}
                />
                <input
                    type="number"
                    placeholder="Ilość graczy"
                    className="form--input"
                    name="numberOfPlayers"
                    onChange={handleChange}
                    value={eventData.numberOfPlayers}
                />
                <input
                    type="number"
                    step="any"
                    min="0"
                    placeholder="Cena"
                    className="form--input"
                    name="price"
                    onChange={handleChange}
                    value={eventData.price}
                />
                <select 
                    id="eventCategory"
                    className="form--input"
                    value={eventData.eventCategory}
                    onChange={handleChange}
                    name="eventCategory"
                >
                    <option value="">Rodzaj wydarzenia</option>
                    {eventCategory}
                </select>
                <select 
                    id="levelCategory"
                    className="form--input"
                    value={eventData.levelCategory}
                    onChange={handleChange}
                    name="levelCategory"
                >
                    <option value="">Poziom gry</option>
                    {levelCategory}
                </select>
                <select 
                    id="surfaceCategory"
                    className="form--input"
                    value={eventData.surfaceCategory}
                    onChange={handleChange}
                    name="surfaceCategory"
                >
                    <option value="">Nawierzchnia</option>
                    {surfaceCategory}
                </select>
                <select 
                    id="surroundingCategory"
                    className="form--input"
                    value={eventData.surroundingCategory}
                    onChange={handleChange}
                    name="surroundingCategory"
                >
                    <option value="">Otoczenie</option>
                    {surroundingCategory}
                </select>
                <button className="form--submit">Submit</button>
            </form>
        </div>
    )
}