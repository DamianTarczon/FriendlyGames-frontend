import React, { useContext, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Navbar(){
    const [userData, setUserData] = useState(null)
    const {user} = useContext(UserContext)

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('user')))
    },[user])
    
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
                {userData && <CustomLink to="/create-event">Utwórz wydarzenie</CustomLink>}
                <CustomLink to="/events">Wydarzenia</CustomLink>
                {!userData ? 
                <>
                    <CustomLink to="/login">Logowanie</CustomLink>
                    <CustomLink to="/registration">Rejestracja</CustomLink>
                </> : 
                <>
                <CustomLink to="/logout">Wyloguj się</CustomLink>
                <span>Witaj {userData.firstName}</span>
                </>}
            </ul>
        </nav>
    )
}