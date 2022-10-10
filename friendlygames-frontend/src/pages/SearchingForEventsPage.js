import React, {useState, useEffect } from "react";
import SearchingCard from "../components/searchingFroEventsComponents/SearchingCard";
import EventsList from "../components/searchingFroEventsComponents/EventsList.js";
import Filter from "../components/searchingFroEventsComponents/Filter";
import { webAPIUrl } from "../apiUrl/WebAPIUrl";

export default function Searchbar(){
    const [firstIndexOfCardToShow, setFirstIndexOfCardToShow] = useState(0)
    const [lastIndexOfCardToShow, setLastIndexOfCardToShow] = useState(7)

    const [categoryId, setCategoryId] = useState(null)

    const [eventsData, setEventsData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const [filterData, setFilterData] = useState(
        {
            levelIds: new Set(),
            surfaceIds: new Set(),
            surroundingIds: new Set(),
            payable: ""
        }
    )

    function addIdsAsString(array){
        var string = ""
        array.forEach(element => {
            string += `${element},`
        });
        return string
    }

    function filterSubmit(event){
        event.preventDefault()
        let levelIdsString = (filterData.levelIds.size !== 0) ? `levelCategoryIds=${addIdsAsString(filterData.levelIds).slice(0,-1)}` : ""
        let surfaceIdsString = (filterData.surfaceIds.size !== 0) ? `surfaceCategoryIds=${addIdsAsString(filterData.surfaceIds).slice(0,-1)}` : ""
        let surroundingIdsString = (filterData.surroundingIds.size !== 0) ? `surroundingCategoryIds=${addIdsAsString(filterData.surroundingIds).slice(0,-1)}` : ""
        let categoryIdString = (categoryId !== null) ? `categoryId=${categoryId}` : ""
        let payableString = (filterData.payable !== "") ? `payable=${filterData.payable}` : ""

        let stringTable = [categoryIdString, levelIdsString, surfaceIdsString, surroundingIdsString, payableString]
        let string = stringTable.filter(it => it !== "").join("&")

        async function fetchData() {
            await fetch(`${webAPIUrl}/Events?${string}`)
                .then(res => res.json())
                .then(data => setEventsData(data))
            }
        fetchData();   
    }

    const [eventCategoryData, setEventCategoryData] = useState({})
    const [isEventCategoryDataLoaded, setIsEventCategoryDataLoaded] = useState(false)

    const cards = getDataForSearchbar(firstIndexOfCardToShow, lastIndexOfCardToShow)
    const [cardsData, setCardsData] = useState(cards)

    function getDataForSearchbar(firstIndex, lastIndex){
        if(isEventCategoryDataLoaded){
            const searchbarElements = eventCategoryData.slice(firstIndex,lastIndex).map(item => {
                return (
                    <SearchingCard 
                    key={item.id} 
                    img={item.imageForSearchBar} 
                    title={item.name} 
                    handleClick={() => handleClick(item.id)} 
                    />
                )
            })
        return searchbarElements
        }
    }
    
    useEffect(() => {
        var newCards = getDataForSearchbar(firstIndexOfCardToShow, lastIndexOfCardToShow)
        setCardsData(newCards)
    }, [firstIndexOfCardToShow, lastIndexOfCardToShow, isEventCategoryDataLoaded])

    function next(){
        if (lastIndexOfCardToShow !== eventCategoryData.length){
            setFirstIndexOfCardToShow(prevNumber => prevNumber+1)
            setLastIndexOfCardToShow(prevNumber => prevNumber+1)
        }
    }

    function previous(){
        if (firstIndexOfCardToShow > 0){
            setFirstIndexOfCardToShow(prevNumber => prevNumber-1)
            setLastIndexOfCardToShow(prevNumber => prevNumber-1)
        }
    }

    useEffect(() => {
        async function fetchData() {
            await fetch(`${webAPIUrl}/Events`)
                .then(res => res.json())
                .then(data => setEventsData(data))
                setIsLoaded(true);
        }

        async function getEventCategoryData() {
            await fetch(`${webAPIUrl}/Categories/eventCategory`)
                .then(res => res.json())
                .then(data => setEventCategoryData(data))
                setIsEventCategoryDataLoaded(true);
        }

        getEventCategoryData();
        fetchData();
    }, []);

    function handleClick(id){
        setCategoryId(id)
        async function fetchData() {
        await fetch(`${webAPIUrl}/Events?categoryId=${id}`)
            .then(res => res.json())
            .then(data => setEventsData(data))
            setIsLoaded(true);
        }
        fetchData();    
    }

    return (
        <div>
            <div className="searchbar">
                <button type="button" className="left--arrow" onClick={previous}><img src="/images/left.png" className="left--arrow--img" alt="img"/></button>
                <div className="searchingCard">
                    {cardsData}
                </div>
                <button type="button" className="right--arrow" onClick={next}><img src="/images/right.png" className="right--arrow--img" alt="img"/></button>
            </div>
            <div className="big--container">
                <Filter value={{formData: filterData, setFormData: setFilterData}} onSubmit={filterSubmit} />
                { eventsData.length !== 0 ? (isLoaded && <EventsList
                    eventElements={eventsData}
                />) : <div className="event--notFound">Nie znaleziono wydarzeń dla wybranych parametrów :(</div>}
            </div>
        </div>
    )
}