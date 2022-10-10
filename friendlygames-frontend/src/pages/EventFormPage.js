import React, {useState, useEffect} from "react";
import Option from "../components/Option";
import { useNavigate } from "react-router-dom";
import { webAPIUrl } from "../apiUrl/WebAPIUrl";

export default function EventForm(){
    const navigate = useNavigate()
    const [userData, setUserData] = useState(null)
    const [categories, setCategories] = useState(null)
    const [token, setToken] = useState(null)
    const [eventCategory, setEventCategory] = useState(null)
    const [levelCategory, setLevelCategory] = useState(null)
    const [surfaceCategory, setSurfaceCategory] = useState(null)
    const [surroundingCategory, setSurroundingCategory] = useState(null)
    const [eventData, setEventData] = useState({
        Name: "",
        ApiUserId: "",
        StartDateTime: "",
        EndDateTime: "",
        Street: "",
        City: "",
        MaxNumberOfPlayers: "",
        PriceForEvent: 0,
        EventCategoryId: "",
        LevelCategoryId: "",
        SurfaceCategoryId: "",
        SurroundingCategoryId: ""
    })

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setUserData(JSON.parse(localStorage.getItem('user')))
        async function categories() {
        await fetch(`${webAPIUrl}/Categories`)
            .then(res => res.json())
            .then(data => setCategories(data));
        }
        categories();
    }, []);

    useEffect(() => {
        if(categories){
        setEventCategory(createOptionsFromArray(categories.value.eventCategory))
        setLevelCategory(createOptionsFromArray(categories.value.levelCategory))
        setSurfaceCategory(createOptionsFromArray(categories.value.surfaceCategory))
        setSurroundingCategory(createOptionsFromArray(categories.value.surroundingCategory))
        }
    }, [categories])

    function createOptionsFromArray(array){
        const optionsElements = array?.map(elements => {
        return (
            <Option 
                key={elements.id}
                {...elements}
            />
        )})
        return optionsElements
    }
    
    function handleChange(event){
        const {name, value} = event.target
        setEventData(prevEventData => ({
            ...prevEventData,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //set user id for event
        eventData.ApiUserId = userData.id
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Credentials': 'include'
            },
            body: JSON.stringify(eventData)
        };
        const res = await fetch(`${webAPIUrl}/Events`, requestOptions)
        const data = await res.json()
        if(data){
            console.log(data)
            navigate(`/events/${data.id}`)
        }
    }

    return (
        <div className="form-container">
            <form className="eventForm" onSubmit={handleSubmit}>
                <label for="Name">Nazwa wydarzenia</label>
                <input
                    type="text"
                    placeholder="Nazwa wydarzenia"
                    className="form--input"
                    name="Name"
                    onChange={handleChange}
                    value={eventData.Name}
                    id="Name"
                    maxLength="100"
                />
                <label for="StartDateTime">Data rozpoczęcia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="StartDateTime"
                    onChange={handleChange}
                    value={eventData.StartDateTime}
                    id="StartDateTime"
                />
                <label for="EndDateTime">Data zakończenia</label>
                <input
                    type="datetime-local"
                    className="form--input"
                    name="EndDateTime"
                    onChange={handleChange}
                    value={eventData.EndDateTime}
                    id="EndDateTime"
                />
                <label for="Street">Ulica</label>
                <input
                    type="text"
                    placeholder="Ulica"
                    className="form--input"
                    name="Street"
                    onChange={handleChange}
                    value={eventData.Street}
                    id="Street"
                    maxLength="50"
                />
                <label for="City">Miasto</label>
                <input
                    type="text"
                    placeholder="Miasto"
                    className="form--input"
                    name="City"
                    onChange={handleChange}
                    value={eventData.City}
                    id="City"
                    maxLength="50"
                />
                <label for="MaxNumberOfPlayers">Maksymalna liczba graczy</label>
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
                <button className="form--submit">Utwórz wydarzenie!</button>
            </form>
        </div>
    )
}