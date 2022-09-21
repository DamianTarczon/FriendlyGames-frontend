import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function LoginPage(){
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()
    useEffect(() => {
        setUser(null)
        localStorage.clear();
        navigate('/')
    }, [])
}