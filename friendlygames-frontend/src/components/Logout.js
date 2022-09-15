import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function LoginPage(){
    const [token, setToken] = useContext(UserContext)

    const navigate = useNavigate()
    useEffect(() => {
        setToken(null)
        localStorage.clear();
        navigate('/')
    }, [])
}