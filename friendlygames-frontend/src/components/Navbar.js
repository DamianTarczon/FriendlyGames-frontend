import React from "react";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="app--name">friendlygames</h2>
            <div className="searching--bar">
                <button type="button" className="button--where" >Gdziekolwiek</button>
                <button type="button" className="button--when" >Kiedy</button>
                <button className="loop">
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <p className="login">Logowanie</p>
            <p className="register">Rejestracja</p>
        </nav>
    )
}