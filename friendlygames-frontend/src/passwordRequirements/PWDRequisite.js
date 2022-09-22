import React from "react";

export default function PWDRequisite({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag
}
)
{
    console.log(capsLetterFlag)
    return (
        <div id="message">
            <h3>Hasło musi zawierać:</h3>
            <p class={capsLetterFlag}><b>Dużą</b> literę</p>
            <p class={numberFlag}><b>Numer</b></p>
            <p class={specialCharFlag}>Znak <b>specjalny</b></p>
            <p class={pwdLengthFlag}>Przynajmniej <b>8 znaków</b></p>
        </div>
    )
}