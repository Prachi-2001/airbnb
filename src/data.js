import Photography from "./images/learning-photography.jpg"
import MountainBike from "./images/mountain-bike.jpg"
import Ketie from "./images/ketie.png"
import Home from "./images/home.jpg"
import Home2 from "./images/home2.jpg"
import Home3 from "./images/home3.jpg"

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: `${Ketie}`,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: `${Photography}`,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: `${MountainBike}`,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
    ,
    {
        id: 4,
        title: "2BHK Flat on Rent",
        description: "Fully Furnished 2 Bhk flat in kothrud book this best deal",
        price: 13,
        coverImg: `${Home2}`,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Pune",
        openSpots: 3,
    }
    ,
    {
        id: 5,
        title: "3BHK Home on",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: `${Home3}`,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },
    {
        id: 1,
        title: "1BHK Flat on Rent",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: `${Home}`,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Mumbai",
        openSpots: 0,
    },
    {
        id: 1,
        title: "2BHK Flat on Rent",
        description: "Fully Furnished 2 Bhk flat in kothrud book this best deal",
        price: 13,
        coverImg: `${Home3}`,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Pune",
        openSpots: 5,
    }
]