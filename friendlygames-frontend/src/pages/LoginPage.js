import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext.js"

export default function LoginPage(){
    const navigate = useNavigate()
    const [token, setToken] = useContext(UserContext)
    

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

    async function handleSubmit(event) {
        event.preventDefault()
        const userData = {
            method: 'OPTIONS',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        };
        await fetch('https://localhost:7089/api/Users/login', userData)
        .then(res => res.json())
        .then(data => setToken(data.token))
        .then(localStorage.setItem('token', token))
        .then(navigate("/events"))
    }

    return (
        <div className="loginPage">
            <div className="login--imageDiv">
                <img src={`/images/register-photo.png`} alt="img" className="login--image" />
            </div>
            <div className="login--data">
                <form onSubmit={handleSubmit}>
                    <p className="login--label">Adres e-mail:</p>
                    <input 
                    type="text"
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email" 
                    value={loginData.email}
                    className="login--email" 
                    />
                    <p className="login--label">Hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="password"
                    value={loginData.password}
                    className="login--password"
                    />
                    <br/>
                    <br/>
                    <button className="login--button">Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}