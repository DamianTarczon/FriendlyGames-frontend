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
            street: "ul. Hipolitów",
            postalCode: "30-002"
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
            city: "Kraków",
            street: "ul. Hipolitów",
            postalCode: "30-002"
        },
        placesLeft: 2,
        img: "basketball-box.png",
    }
    // {
    //     id: 2,
    //     date: "19.08.2022, 20:00",
    //     location: "ul. Hipolitów, Kraków",
    //     placesLeft: 4,
    //     img: "footbal-box.png",
    //     eventCategoryId: 2
    // },
    // {
    //     id: 3,
    //     date: "18.08.2022, 20:00",
    //     location: "ul. Hipolitów, Kraków",
    //     placesLeft: 2,
    //     img: "footbal-box.png",
    //     eventCategoryId: 2
    // },
    // {
    //     id: 4,
    //     date: "20.08.2022, 20:00",
    //     location: "ul. Hipolitów, Kraków",
    //     placesLeft: 0,
    //     img: "footbal-box.png",
    //     eventCategoryId: 2
    // },
    // {
    //     id: 5,
    //     date: "25.08.2022, 20:00",
    //     location: "ul. Hipolitów, Kraków",
    //     placesLeft: 2,
    //     img: "footbal-box.png",
    //     eventCategoryId: 2
    // },
    // {
    //     id: 6,
    //     date: "25.08.2022, 20:00",
    //     location: "ul. Hipolitów, Kraków",
    //     placesLeft: 2,
    //     img: "footbal-box.png",
    //     eventCategoryId: 2
    // },
    // {
    //     id: 7,
    //     date: "27.08.2022, 20:00",
    //     location: "ul. Nowaków, Kraków",
    //     placesLeft: 3,
    //     img: "basketball-box.png",
    //     eventCategoryId: 1
    // },
    // {
    //     id: 8,
    //     date: "29.08.2022, 20:00",
    //     location: "ul. Krzyska, Tarnów",
    //     placesLeft: 3,
    //     img: "basketball-box.png",
    //     eventCategoryId: 1
    // },
    // {
    //     id: 9,
    //     date: "30.08.2022, 20:00",
    //     location: "ul. Nowy Świat, Kraków",
    //     placesLeft: 3,
    //     img: "basketball-box.png",
    //     eventCategoryId: 1
    // }
]

export default events;