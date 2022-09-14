import React, { useState } from "react";

export default function RegistrationPage(){
    const [registerData, setRegisterData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        roles: ["User"]
    })

    function handleChange(event) {
        setRegisterData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const userData = {
            method: 'OPTIONS',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        };
        fetch('https://localhost:7089/api/Users/register', userData)
    }

    return (
        <div className="registrationPage">
            <div className="registration--imageDiv">
                <img src={`/images/register-photo.png`} alt="img" className="registration--image" />
            </div>
            <div className="registration--data">
                <form onSubmit={handleSubmit}>
                    <p>Email:</p>
                    <input 
                    type="text" 
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email"
                    value={registerData.email}
                    className="registration--email"
                    />
                    <p>Imię:</p>
                    <input 
                    type="text" 
                    placeholder="Jan"
                    onChange={handleChange}
                    name="firstName"
                    value={registerData.firstName}
                    className="registration--firstName"
                    />
                    <p>Nazwisko:</p>
                    <input 
                    type="text" 
                    placeholder="Kowalski"
                    onChange={handleChange}
                    name="lastName"
                    value={registerData.lastName}
                    className="registration--lastName"
                    />
                    <p>Hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="password"
                    value={registerData.password}
                    className="registration--password"
                    />
                    <button className="registration--button">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}