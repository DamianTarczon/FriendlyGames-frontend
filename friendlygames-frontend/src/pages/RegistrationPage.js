import React, { useState } from "react";
import PWDRequisite from "../passwordRequirements/PWDRequisite";

export default function RegistrationPage(){
    const [error, setError] = useState("")
    const [registerData, setRegisterData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
        roles: ["User"]
    })
    const [pwdRequisite, setPwdRequisite] = useState(false)
    const [checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false
    })

    function handleChange(event) {
        setRegisterData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleOnFocus(){
        setPwdRequisite(true)
    }

    function handleOnBlur() {
        setPwdRequisite(false)
    }

    function handleKeyUp(event){
        const { value } = event.target
        const capsLetterCheck = /[A-Z]/.test(value)
        const numberCheck = /[0-9]/.test(value)
        const pwdLengthCheck = value.length >= 8
        const specialCharCheck = /[!@#$%^&*]/.test(value)
        console.log(capsLetterCheck)
        setChecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(registerData.password !== registerData.passwordConfirm){
            return setError("Hasła muszą być takie same")
        }
        setError("")
        
        const userData = {
            method: 'OPTIONS',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        };
        fetch('https://localhost:7089/api/Users/register', userData)
    }

    return (
        <div className="registrationPage">
            <div className="registration--imageDiv">
                <img src={`/images/register-photo.png`} alt="img" className="registration--image" />
            </div>
            <div className="registration--data">
                <h1>Zarejestruj się i dołącz do naszej społeczności!</h1>
                {error && <h2 className="error--message">{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <p className="register--label">Imię:</p>
                    <input 
                    type="text" 
                    placeholder="Jan"
                    onChange={handleChange}
                    name="firstName"
                    value={registerData.firstName}
                    className="registration--firstName"
                    required
                    />
                    <p className="register--label">Nazwisko:</p>
                    <input 
                    type="text" 
                    placeholder="Kowalski"
                    onChange={handleChange}
                    name="lastName"
                    value={registerData.lastName}
                    className="registration--lastName"
                    required
                    />
                    <p className="register--label">Email:</p>
                    <input 
                    type="email" 
                    placeholder="user@example.com"
                    onChange={handleChange}
                    name="email"
                    value={registerData.email}
                    className="registration--email"
                    required
                    />
                    <p className="register--label">Hasło:</p>
                    {pwdRequisite && 
                    <PWDRequisite 
                        capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"} 
                        numberFlag={checks.numberCheck ? "valid" : "invalid"}
                        pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                        specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
                    />}
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onKeyUp={handleKeyUp}
                    name="password"
                    value={registerData.password}
                    className="registration--password"
                    pattern="(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}"
                    title="Musi zawierać przynajmniej jedną dużą literę, jeden znak specjalny, jeden numer i przynajmniej 8 znaków"
                    required
                    />
                    <p className="register--label">Potwierdź hasło:</p>
                    <input 
                    type="password" 
                    placeholder="*******"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={registerData.passwordConfirm}
                    className="registration--password"
                    required
                    />
                    <br/>
                    <br/>
                    <button className="registration--button">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}