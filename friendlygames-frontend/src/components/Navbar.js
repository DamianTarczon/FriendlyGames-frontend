import React, { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Navbar(){
    const [token] = useContext(UserContext)

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
                <CustomLink to="/logout">Wyloguj się</CustomLink>}
            </ul>
        </nav>
    )
}