import React, { useContext, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import { UserContext } from "./UserContext";

export default function Navbar(){
    const [token, setToken] = useState(null)
    // const token = localStorage.getItem('token')
    // const [user, setUser] = useState(null)
    // const [isUser, setIsUser] = useState(false)
    // const [userName, setUserName] = useState(null)

    // function getUserData(array){
    //     array.forEach(element => {
    //         if(element.type === "firstName"){
    //             setUserName(element.value)
    //         }
    //     });
    // }

    // useEffect(() => {
    //     if(isUser){
    //         getUserData(user)
    //     }
    // }, [user])

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    },[])

    console.log(token)
    
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
                <CustomLink to="/logout">Wyloguj się</CustomLink>
                {/* {isUser && <p>Witaj {userName}</p>} */}
                </>}
            </ul>
        </nav>
    )
}