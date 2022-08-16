import React from "react";

export default function Navbar(){
    return (
        <nav>
            <h2>friendlygames</h2>
            <div className="searching-bar">
                <button type="button" className="button-where" >Gdziekolwiek</button>
                <button type="button" className="button-when" >Kiedy</button>
                <button type="submit" className="button-submit" >Submit</button>
            </div>
            <p>Logowanie</p>
            <p>Rejestracja</p>
        </nav>
    )
}