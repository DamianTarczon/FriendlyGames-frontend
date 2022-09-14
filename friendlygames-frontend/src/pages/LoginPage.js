import React, { useState } from "react";

export default function LoginPage(){
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        setLoginData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const userData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        };
        fetch('https://localhost:7089/api/Users/login', userData)
    }

    return (
        <div className="loginPage">
            <img src={`/images/register-photo.png`} alt="img" className="login--image" />
            <div className="login--data">
                <form onSubmit={handleSubmit}>
                    <p>Adres e-mail:</p>
                    <input 
                    type="text"
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email" 
                    value={userData.email}
                    className="input" 
                    />
                    <p>Hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="password"
                    value={userData.password}
                    className="input"
                    />
                    <button className="login--button">Zaloguj się</button> 
                </form>
            </div>
        </div>
    )
}