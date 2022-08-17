import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="app--name">friendlygames</h2>
            <div className="searching--bar">
                <button type="button" className="button--where" >Gdziekolwiek</button>
                <button type="button" className="button--when" >Kiedy</button>
            </div>
            <button className="loop">
                <span className="circle-loop"></span>
                <span className="circle-line"></span>
             </button>
            <p className="login">Logowanie</p>
            <p className="register">Rejestracja</p>
        </nav>
    )
}