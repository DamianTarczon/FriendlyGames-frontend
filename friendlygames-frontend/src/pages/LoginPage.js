import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import { webAPIUrl } from "../apiUrl/WebAPIUrl";

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

    useEffect(() => {
        if(userDataFromApi){
            const userData = {
                    email: userDataFromApi.email,
                    id: userDataFromApi.id,
                    firstName: userDataFromApi.firstName,
                    lastName: userDataFromApi.lastName
                }

            localStorage.setItem('user', JSON.stringify(userData))
            setUser(userData)
            navigate("/events")
        }   
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
            await fetch(`${webAPIUrl}/Users/GetUser`, headers)
            .then(res => res.json())
            .then(data => setUserDataFromApi(data))
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

        try {
            const res = await fetch(`${webAPIUrl}/Users/login`, userData)
            const data = await res.json()
            if(res.status === 401){
                throw Error(data)
            }
            localStorage.setItem('token', data.token)
            setToken(localStorage.getItem('token'))
        }
        catch(err){
            if(err.message === "Failed to fetch"){
                return setError("Błąd serwera. Spróbuj później.")
            }
            setError(err.message)
        }      
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