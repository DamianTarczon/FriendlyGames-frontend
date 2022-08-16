import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="app--name">friendlygames</h2>
            <div className="searching--bar">
                <button type="button" id="button--search" >Gdziekolwiek</button>
                <button type="button" id="button--search" >Dowolny tydzień</button>
                <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <p className="login">Logowanie</p>
            <p className="register">Rejestracja</p>
        </nav>
    )
}