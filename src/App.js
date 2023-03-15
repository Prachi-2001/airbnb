import React from "react"
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar';
import Card from "./components/Card";
import './index.css'
import ketie from "./images/ketie.png"
import data from "./data"
import photography from "./images/learning-photography.jpg"
// import Joke from "./components/Jokes";


function App() {
  const Cards= data.map(element => {
    return <Card 
    openSpot = {element.openSpots}
    key = {element.id}
    title = {element.title}
    description = {element.description}
    price = {element.price}
    rating = {element.stats.rating}
    reviewCount = {element.stats.reviewCount}
    img = {element.coverImg}
    country = {element.location}

    // spread object by using spraed oeprator 
    // {...element}

    />
  })


  return (
    <div>
    <Navbar/>
    <Main/>
    <section className="card--list">
      {Cards}
    </section>
    {/* <Joke
      setup = "I got my daughter a fridge for a birthday"
      punchline = "I can't wait to see her face light up when she open it."
    />
    <Joke
      // setup = "How did the hacker escapes the police?"
      punchline = "He just said shup up"
    />
    <Joke
      setup = "I have so many friends but few of them are just incredible"
      punchline = "but some are weird too!"
    /> */}
    </div>
  );
}

export default App;
