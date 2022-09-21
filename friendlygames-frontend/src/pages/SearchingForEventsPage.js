import React, {useState, useEffect } from "react";
import SearchingCard from "../components/SearchingCard";
import EventsWithFilterPage from "../components/EventsWithFilterPage.js";
import Filter from "../components/Filter";


export default function Searchbar(){
    //initializing first and last index of pictures that will be displayed on the screen
    const [firstIndexOfCardToShow, setFirstIndexOfCardToShow] = useState(0)
    const [lastIndexOfCardToShow, setLastIndexOfCardToShow] = useState(7)

    const [categoryId, setCategoryId] = useState({})

    const [eventsData, setEventsData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    //state with data for filter component
    const [filterData, setFilterData] = useState(
        {
            levelIds: new Set(),
            surfaceIds: new Set(),
            surroundingIds: new Set(),
            isFree: false,
            isPaid: false
        }
    )

    function addIdsAsString(array){
        var string = ""
        array.forEach(element => {
            string += `${element},`
        });
        return string
    }

    //function that is fetching data from database with filter requests
    function filterSubmit(event){
        event.preventDefault()
        var levelIdsString = `levelIds=${addIdsAsString(filterData.levelIds).slice(0,-1)}`
        var surfaceIdsString = `surfaceIds=${addIdsAsString(filterData.surfaceIds).slice(0,-1)}`
        var surroundingIdsString = `surroundingIds=${addIdsAsString(filterData.surroundingIds).slice(0,-1)}`
        var string = `https://localhost:7089/api/Events?categoryId=${categoryId}
        &${levelIdsString}
        &${surfaceIdsString}
        &${surroundingIdsString}
        &isFree=${filterData.isFree}
        &isPaid=${filterData.isPaid}`

    }

    //state for data for searchbar
    const [eventCategoryData, setEventCategoryData] = useState({})
    const [isEventCategoryDataLoaded, setIsEventCategoryDataLoaded] = useState(false)

    //state for data for searchbar with categoryIds
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
    
    //monitorowanie zmiany
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

    //fetchowanie danych o eventach i kategoriach
    useEffect(() => {
        async function fetchData() {
            await fetch("https://localhost:7089/api/Events")
                .then(res => res.json())
                .then(data => setEventsData(data))
                setIsLoaded(true);
        }

        async function getEventCategoryData() {
            await fetch("https://localhost:7089/api/Categories/eventCategory")
                .then(res => res.json())
                .then(data => setEventCategoryData(data))
                setIsEventCategoryDataLoaded(true);
        }

        getEventCategoryData();
        fetchData();
    }, []);

    //fetchowanie danych o eventach z odpowiednim category id
    function handleClick(id){
        setCategoryId(id)
        async function fetchData() {
        await fetch(`https://localhost:7089/api/Events?categoryId=${id}`)
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
                { eventsData.length !== 0 ? (isLoaded && <EventsWithFilterPage
                    eventElements={eventsData}
                />) : <div className="event--notFound">Nie znaleziono wydarzeń dla wybranych parametrów :(</div>}
            </div>
        </div>
    )
}