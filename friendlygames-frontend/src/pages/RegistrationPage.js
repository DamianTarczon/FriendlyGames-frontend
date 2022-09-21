import React, { useState } from "react";

export default function RegistrationPage(){
    const [registerData, setRegisterData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
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

        if(registerData.password !== registerData.passwordConfirm){
            return setError("Hasła muszą być takie same")
        }
        setError("")
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
                <h1>Zarejestruj się i dołącz do naszej społeczności!</h1>
                <form onSubmit={handleSubmit}>
                    <p className="register--label">Imię:</p>
                    <input 
                    type="text" 
                    placeholder="Jan"
                    onChange={handleChange}
                    name="firstName"
                    value={registerData.firstName}
                    className="registration--firstName"
                    />
                    <p className="register--label">Nazwisko:</p>
                    <input 
                    type="text" 
                    placeholder="Kowalski"
                    onChange={handleChange}
                    name="lastName"
                    value={registerData.lastName}
                    className="registration--lastName"
                    />
                    <p className="register--label">Email:</p>
                    <input 
                    type="text" 
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email"
                    value={registerData.email}
                    className="registration--email"
                    />
                    <p className="register--label">Hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="password"
                    value={registerData.password}
                    className="registration--password"
                    />
                    <p className="register--label">Potwierdź hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={registerData.passwordConfirm}
                    className="registration--password"
                    />
                    <br/>
                    <br/>
                    <button className="registration--button">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}