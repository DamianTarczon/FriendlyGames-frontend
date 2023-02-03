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
            const searchbarElements = eventCategoryData.map(item => {
                return (
                    <SearchingCard 
                    key={item.id}
                    id={item.id}
                    img={item.imageForSearchBar} 
                    title={item.name} 
                    // handleClick={() => handleClick(item.id)} 
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
        if(!id) return;
        setCategoryId(id)
        async function fetchData() {
        await fetch(`${webAPIUrl}/Events?categoryId=${id}`)
            .then(res => res.json())
            .then(data => setEventsData(data))
            setIsLoaded(true);
        }
        fetchData();    
    }

    const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);


  function handlePointerDown(e){
    setIsMouseDown(true);
    // setStartX(e.pageX - e.currentTarget.offsetLeft);
    // setScrollLeft(e.currentTarget.offsetLeft);
    setStartX(e.clientX);
    e.target.setPointerCapture(e.pointerId);
  }

  function handlePointerUp(e){
    if(startX - e.clientX < 5 && startX - e.clientX > -5){
        handleClick(e.target.id);
      }
    setIsMouseDown(false);
    setPrevPercentage(nextPercentage);
    e.target.releasePointerCapture(e.pointerId);
  }


  function handlePointerMove(e){
    if(!isMouseDown) return;
    e.preventDefault();
    // const x = e.pageX - e.currentTarget.offsetLeft;
    // const walk = (x - startX); //scroll-fast
    // e.currentTarget.scrollLeft = scrollLeft - walk;
    const mouseDelta = startX - e.clientX;
    const maxDelta = e.currentTarget.offsetWidth / 2;


    // console.log("child", e.currentTarget.offsetWidth);
    // console.log((e.currentTarget.parentNode.offsetWidth/e.currentTarget.offsetWidth) * -100)

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    setNextPercentage(Math.max(Math.min(nextPercentageUnconstrained, 0), -100 + (e.currentTarget.parentNode.offsetWidth * 100) / e.currentTarget.offsetWidth));

    e.currentTarget.style.transform = `translate(${nextPercentage}%, 0%)`;
  }

    return (
        <div>
            <div className="searchbar">
                <img src="/images/left.png" className="left--arrow--img" alt="img"/>
                <div className="searchingCard">
                    <div className="category--cards--container" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerMove={handlePointerMove}>
                        {cardsData}
                    </div>
                </div>
                <img src="/images/right.png" className="right--arrow--img" alt="img"/>
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