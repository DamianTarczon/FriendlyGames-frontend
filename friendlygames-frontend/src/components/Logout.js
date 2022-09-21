import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function LoginPage(){
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear();
        navigate('/')
    }, [])
}