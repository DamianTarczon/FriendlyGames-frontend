import React from "react";

export default function RegistrationPage(){
    return (
        <div className="eventPage">
            <div className="eventPage--div">
                <h1 className="event--header">Nazwa wydarzenia</h1>
                <div className="event--info">
                    <h3>Kategoria wydarzenia</h3>
                    <h3>Data rozpoczęcia/Data zakończenia</h3>
                    <h3>Poziom gry</h3>
                    <h3>Nawierzchnia</h3>
                    <h3>Otoczenie</h3>
                    <h3>Liczba zapisanych/Liczba potrzebnych graczy</h3>
                    <h3>Cena</h3>
                </div>
                <div className="event--mapInfo">
                    <h3>Lokalizacja</h3>
                    <div className="event--map">
                        Mapa
                    </div>
                </div>
            </div>
        </div>
    )
}