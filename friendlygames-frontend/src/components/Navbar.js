import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){

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
            {/* <div className="searching--bar">
                <button type="button" className="button--where" >Gdziekolwiek</button>
                <button type="button" className="button--when" >Kiedy</button>
                <button className="loop">
                    <i className="fa fa-search"></i>
                </button>
            </div> */}
            <ul>
                <CustomLink to="/create-event">Utwórz wydarzenie</CustomLink>
                <CustomLink to="/events">Wydarzenia</CustomLink>
                <CustomLink to="/login">Logowanie</CustomLink>
                <CustomLink to="/registration">Rejestracja</CustomLink>
            </ul>
        </nav>
    )
}