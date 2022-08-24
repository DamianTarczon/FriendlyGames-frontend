import React from "react"

export default function Option(props) {
    return (
        <option value={props.id}>{props.name}</option>
    )
}