import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const navigate = useNavigate()
    const [userDataFromApi, setUserDataFromApi] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [error, setError] = useState("")
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    function getUserData(array, type){
        array.forEach(element => {
            if(element.type === type){
                console.log(element.value)
                return element.value
            }
        });
    }


    useEffect(() => {
        if(userDataFromApi){
            var userEmail = ""
            userDataFromApi.forEach(element => {
                if(element.type === "userEmail"){
                    console.log(element.value)
                    userEmail = element.value
                }
            });
            const userData = {
                // email: `${getUserData(userDataFromApi, "userEmail")}`,
                email: userEmail,
                id: `${getUserData(userDataFromApi, "id")}`,
                firstName: `${getUserData(userDataFromApi, "firstName")}`,
                lastName: `${getUserData(userDataFromApi, "lastName")}`
            }
            console.log(userData)
        }
        console.log('ok')
        
    }, [userDataFromApi])


    useEffect(() => {
        const headers = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Credentials': 'include'
            }
        };
        async function fetchData() {
            await fetch('https://localhost:7089/api/Users/GetUser', headers)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setUserDataFromApi(data))
            //zapisać dane o userze w useState i stamtad useEffectem zapisac dane w localStorage !!!!!!!!!!!!!
        }
        fetchData()
    }, [token])


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
        setError("")
        //login and get token
        const userData = {
            method: 'OPTIONS',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        };
        await fetch('https://localhost:7089/api/Users/login', userData)
        .then(res => {
            if(res.status === 401){
                throw Error("Zły adres emial lub hasło")
            }
            return res.json()})
        .then(data => localStorage.setItem('token', data.token))
        .catch(err => {
            if(err.message === "Failed to fetch"){
                return setError("Błąd serwera. Spróbuj później.")
            }
            setError(err.message)
        })
        //set token state 
        setToken(localStorage.getItem('token'))
    }

    return (
        <div className="loginPage">
            <div className="login--imageDiv">
                <img src={`/images/register-photo.png`} alt="img" className="login--image" />
            </div>
            <div className="login--data">
                {error && <h2 className="error--message">{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <p className="login--label">Adres e-mail:</p>
                    <input 
                    type="email"
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email" 
                    value={loginData.email}
                    className="login--email"
                    required
                    />
                    <p className="login--label">Hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="password"
                    value={loginData.password}
                    className="login--password"
                    required
                    />
                    <br/>
                    <br/>
                    <button className="login--button">Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}