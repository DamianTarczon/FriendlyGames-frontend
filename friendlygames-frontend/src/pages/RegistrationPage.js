import React from "react";

export default function RegistrationPage(){
    return (
        <div className="registrationPage">
            <img src={`/images/register-photo.png`} alt="img" className="registration--image" />
            <div className="registration--data">
                <p>Twój nick:</p>
                <input type="text" className="input"></input>
                <p>Adres e-mail:</p>
                <input type="text" className="input" placeholder="jankowalski@gmail.com"></input>
                <p>Hasło:</p>
                <input type="password"className="input"></input>
                <br></br>
                <br></br>
                <button type="submit" className="registration--button">Załóż konto</button>
            </div>
        </div>
    )
}