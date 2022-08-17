import React from "react";
import SearchingCard from "./SearchingCard";
import data from "../data.js";

export default function Searchbar(){
    const cards = data.map(item => {
        return (
            <SearchingCard key={item.id} img={item.img} title={item.title} />
        )
    })

    return (
        <div className="searchbar">
            <button type="button" className="left--arrow"><img src="/images/left.png" className="left--arrow--img" alt="img"/></button>
            <div className="searchingCard">
                {cards}
            </div>
            <button type="button" className="right--arrow">Arrow</button>
        </div>
    )
}