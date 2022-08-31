import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="app--name"><Link to="/">friendlygames</Link></h2>
            <div className="searching--bar">
                <button type="button" className="button--where" >Gdziekolwiek</button>
                <button type="button" className="button--when" >Kiedy</button>
                <button className="loop">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <p className="events--link"><Link to="/create-event">Utwórz wydarzenie</Link></p>
            <p className="events--link"><Link to="/events">Wydarzenia</Link></p>
            <p className="login">Logowanie</p>
            <p className="register"><Link to="/registration">Rejestracja</Link></p>
        </nav>
    )
}