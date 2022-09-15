import React, { useContext, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Navbar(){
    const [token] = useContext(UserContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if(token){
            console.log("ok")
            const headers = {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Credentials': 'include'
                }
            };
            async function fetchData(){
                await fetch('https://localhost:7089/api/Users/GetUser', headers)
                .then(res => res.json())
                .then(data => setUser(data))
            }
            fetchData();
            console.log(user)
        }
        console.log("not ok")
    }, [token])

    
    function CustomLink({to, children, ...props}){
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <nav className="navbar">
            <Link to="/" className="site--title">friendlygames</Link>
            <ul>
                <CustomLink to="/create-event">Utwórz wydarzenie</CustomLink>
                <CustomLink to="/events">Wydarzenia</CustomLink>
                {!token ? 
                <>
                    <CustomLink to="/login">Logowanie</CustomLink>
                    <CustomLink to="/registration">Rejestracja</CustomLink>
                </> : 
                <>
                {user && <p>Witaj!!</p>}
                <CustomLink to="/logout">Wyloguj się</CustomLink>
                </>}
            </ul>
        </nav>
    )
}