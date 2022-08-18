import React from "react";
import SearchingCard from "./SearchingCard";
import data from "../data.js";

export default function Searchbar(){

    const [firstIndexOfCardToShow, setFirstIndexOfCardToShow] = React.useState(0)
    const [lastIndexOfCardToShow, setLastIndexOfCardToShow] = React.useState(7)

    function getData(firstIndex, lastIndex){
        return data.slice(firstIndex,lastIndex).map(item => {
            return (
                <SearchingCard key={item.id} img={item.img} title={item.title} />
            )
        })
    }
    
    const cards = getData(firstIndexOfCardToShow, lastIndexOfCardToShow)
    //monitorowanie zmiany
    React.useEffect(() => {
        var newCards = getData(firstIndexOfCardToShow, lastIndexOfCardToShow)
        setCardsData(newCards)
    }, [firstIndexOfCardToShow, lastIndexOfCardToShow])

    const [cardsData, setCardsData] = React.useState(cards)

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

    return (
        <div className="searchbar">
            <button type="button" className="left--arrow" onClick={previous}><img src="/images/left.png" className="left--arrow--img" alt="img"/></button>
            <div className="searchingCard">
                {cardsData}
            </div>
            <button type="button" className="right--arrow" onClick={next}><img src="/images/right.png" className="right--arrow--img" alt="img"/></button>
        </div>
    )
}