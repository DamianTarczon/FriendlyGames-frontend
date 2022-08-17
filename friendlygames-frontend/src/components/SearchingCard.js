import React from "react";

export default function Searchbar(props){
    console.log(props)
    return (
        <div>
            <img src={`/images/${props.img}`} alt="img" className="card--image" />
            <p>{props.title}</p>
        </div>
    )
}