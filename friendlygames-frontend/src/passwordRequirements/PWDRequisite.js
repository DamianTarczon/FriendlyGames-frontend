import React from "react";

export default function PWDRequisite({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag
})
{
    return (
        <div className="message">
            <p className={capsLetterFlag}><b>Duża</b> litera</p>
            <p className={numberFlag}><b>Numer</b></p>
            <p className={specialCharFlag}>Znak <b>specjalny</b></p>
            <p className={pwdLengthFlag}>Przynajmniej <b>8 znaków</b></p>
        </div>
    )
}