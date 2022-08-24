import React from "react"

export default function Box(props) {
    return (
        <div className="box">
            <div className="box--imgDiv">
                <img src={`../images/${props.img}`} alt="img" className="box--img"/>
            </div>
            <div className="box--data">
                <p>{props.date}</p>
                <p>Lokalizacja:</p>
                <p>{props.location}</p>
                <p>Zostały {props.placesLeft} miejsca!</p>
            </div>
        </div>
    )
}