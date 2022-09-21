import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function LoginPage(){
    
    const navigate = useNavigate()
    const [userDataFromApi, setUserDataFromApi] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [error, setError] = useState("")
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const {setUser} = useContext(UserContext)

    // function getUserData(array, type){
    //     array.forEach(element => {
    //         if(element.type === type){
    //             console.log(element.value)
    //             return element.value
    //         }
    //     });
    // }


    useEffect(() => {
        if(userDataFromApi){
            var userEmail = ""
            userDataFromApi.forEach(element => {
                if(element.type === "userEmail"){
                    userEmail = element.value
                }
            });

            var userId = ""
            userDataFromApi.forEach(element => {
                if(element.type === "id"){
                    userId = element.value
                }
            });

            var userFirstName = ""
            userDataFromApi.forEach(element => {
                if(element.type === "firstName"){
                    userFirstName = element.value
                }
            });

            var userLastName = ""
            userDataFromApi.forEach(element => {
                if(element.type === "lastName"){
                    userLastName = element.value
                }
            });
            const userData = {
                email: userEmail,
                id: userId,
                firstName: userFirstName,
                lastName: userLastName
            }
            localStorage.setItem('user', JSON.stringify(userData))
            setUser(userData)
            navigate("/events")
        }   
    }, [userDataFromApi])


    useEffect(() => {
        console.log(token)
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