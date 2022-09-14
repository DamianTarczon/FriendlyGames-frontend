import React from "react";

export default function LoginPage(){
    return (
        <div className="loginPage">
            <img src={`/images/register-photo.png`} alt="img" className="login--image" />
            <div className="login--data">
                <p>Adres e-mail:</p>
                <input type="text" className="input" placeholder="jankowalski@gmail.com" required></input>
                <p>Hasło:</p>
                <input type="password"className="input" required></input>
                <br></br>
                <br></br>
                <button type="submit" className="login--button">Zaloguj się</button>
            </div>
        </div>
    )
}