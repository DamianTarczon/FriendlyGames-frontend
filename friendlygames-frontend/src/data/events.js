const events = [
    {
        id: 1,
        name: "Wieczorna gierka",
        startDate: "18.08.2022, 20:00",
        endDate: "18.08.2022, 21:00",
        eventCategory: {
            id: 2,
            name: "Piłka nożna"
        },
        levelCategory: {
            id: 1,
            name: "Rekreacyjny"
        },
        surfaceCategory: {
            id: 1,
            name: "Trawa"
        },
        surroundingCategory: {
            id: 2,
            name: "Na zewnątrz"
        },
        playersNeeded: 10,
        price: 9.99,
        location: {
            city: "Kraków",
            street: "Grzegórzecka 24",
            postalCode: "31-531"
        },
        placesLeft: 1,
        img: "footbal-box.png",
    },
    {
        id: 2,
        name: "3 vs 3",
        startDate: "20.08.2022, 16:00",
        endDate: "20.08.2022, 18:00",
        eventCategory: {
            id: 1,
            name: "Koszykówka"
        },
        levelCategory: {
            id: 2,
            name: "Średniozaawansowany"
        },
        surfaceCategory: {
            id: 6,
            name: "Syntetyczna"
        },
        surroundingCategory: {
            id: 2,
            name: "Na zewnątrz"
        },
        playersNeeded: 6,
        price: "Za darmo",
        location: {
            city: "Tarnów",
            street: "Piłsudskiego 24",
            postalCode: "33-100"
        },
        placesLeft: 2,
        img: "basketball-box.png",
    }
]

export default events;