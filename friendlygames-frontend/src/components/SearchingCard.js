import React from "react";

export default function Searchbar(props){
    return (
        <div className="card--container" onClick={props.handleClick}>
            <img src={`/images/${props.img}`} alt="img" className="card--image"  />
            <p className="card--title">{props.title}</p>
        </div>
    )
}