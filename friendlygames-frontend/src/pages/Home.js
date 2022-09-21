import React from "react";

export default function MainView(){
    return (
        <div id="mainview" className="home">
            <div className="rect1">
                <h2 className="rect1--text">Znajdź ludzi do aktywnego spędzania wolnego czasu w Twojej okolicy już dziś!!</h2>
                <img src={`/images/man_with_ball.png`} alt="img" className="rect1--img" />
            </div>
            <div className="rect2--div">
                <h2 className="rect2--text">Czym jest friendlygames?</h2>  
            </div>
            <div className="rect3">
                <h2 className="rect3--text">Przeprowadziłeś/aś się do nowego miasta i chcesz aktywnie spędzić wolny czas oraz przy okazji poznać nowych ludzi?</h2>  
                <img src={`/images/przeprowadzka.png`} alt="img" className="rect2--img" />
            </div>
            <div className="rect4">
                <img src={`/images/football_watch.png`} alt="img" className="rect4--img" />
                <h2 className="rect4--text">A może chciałbyś wyjść porgać w piłkę, ale Twoi koledzy wolą siedzieć w domu przed telewizorem i oglądać mecz?</h2>
            </div> 
            <div className="rect5">
                <h2 className="rect5--text1">Jeśli tak, to ta apka jest właśnie dla Ciebie!!!!</h2>
                <h2 className="rect5--text2"><strong>friendlygames</strong> zostało stworzone, aby ludzie tacy jak Ty mogli bez przeszkód znaleźć towarzyszy do wspólnej zabawy. Sport łączy ludzi i my jak najbardziej się pod tym podpisujemy.</h2>
            </div>
        </div>
    )
}