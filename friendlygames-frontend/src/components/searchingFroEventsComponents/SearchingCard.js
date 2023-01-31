import React from "react";

export default function Searchbar(props){
    return (
        <div id={props.id} 
            className="card--container" 
            // onClick={props.handleClick}
        >
            <img id={props.id} src={`/images/${props.img}`} alt="img" className="card--image"  />
            <p id={props.id} className="card--title">{props.title}</p>
        </div>
    )
}