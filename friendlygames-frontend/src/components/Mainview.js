import React from "react";

export default function MainView(){
    return (
        <div id="mainview">
            <div>
                <div className="rect-1">
                    <h2 className="rect-1-writing">Znajdź ludzi do aktywnego spędzania wolnego czasu w Twojej okolicy!</h2>
                </div>
                <div id="man-with-ball-div">
                    <img src={`/images/man_with_ball.png`} alt="img" className="man-with-ball" />
                </div>
            </div>
            <div>
                <h2 className="rect-2-writing">Czym jest friendlygames?</h2>  
            </div>
            <div className="rect-3">
                <h2 className="rect-3-writing">friendlygames zostało stworzone, aby ludzie tacy jak Ty mogli bez</h2>
                <h2 className="rect-4-writing">przeszkód znaleźć towarzyszy do wspólnej zabawy.</h2>  
                <h2 className="rect-5-writing">Sport łączy ludzi i my jak najbardziej się pod tym podpisujemy.</h2>   
                <img src={`/images/vol_players.png`} alt="img" className="vol-players" />
            </div>    
        </div>
    )
}