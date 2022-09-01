import React, {useState, useEffect} from "react";
import SearchingCard from "../components/SearchingCard";
import data from "../data/data.js";
import EventsWithFilterPage from "../components/EventsWithFilterPage.js";
import Filter from "../components/Filter";

export default function Searchbar(){
    //initializing first and last index of pictures that will be displayed on the screen
    const [firstIndexOfCardToShow, setFirstIndexOfCardToShow] = useState(0)
    const [lastIndexOfCardToShow, setLastIndexOfCardToShow] = useState(7)

    const cards = getDataForSearchbar(firstIndexOfCardToShow, lastIndexOfCardToShow)

    const [cardsData, setCardsData] = useState(cards)

    function getDataForSearchbar(firstIndex, lastIndex){
        return data.slice(firstIndex,lastIndex).map(item => {
            return (
                <SearchingCard 
                key={item.id} 
                img={item.img} 
                title={item.title} 
                handleClick={() => handleClick(item.id)} 
                />
            )
        })
    }
    
    //monitorowanie zmiany
    useEffect(() => {
        var newCards = getDataForSearchbar(firstIndexOfCardToShow, lastIndexOfCardToShow)
        setCardsData(newCards)
    }, [firstIndexOfCardToShow, lastIndexOfCardToShow])

    function next(){
        if (lastIndexOfCardToShow !== data.length){
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

    const [sampleData, setSampleData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        async function fetchData() {
        await fetch("https://localhost:7089/api/Events")
            .then(res => res.json())
            .then(testData => setSampleData(testData))
            setIsLoaded(true);
        }
        fetchData();
    }, []);
    
    //zapytać jak przesłać query do backendu!!!!
    function handleClick(id){
        async function fetchData() {
        await fetch(`https://localhost:7089/api/Events?id=${id}`)
            .then(res => res.json())
            .then(data => setSampleData(data))
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
                <Filter />
                {isLoaded && <EventsWithFilterPage
                    eventElements={sampleData}
                />}
            </div>
        </div>
    )
}