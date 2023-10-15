import React from 'react'

function Hero() {
  return (
    <section id="Hero">
        <div className="container">
            <div className="left-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button type="button">Reserve a Table</button>
            </div>
            <div className="right-section">
                <figure>
                    <img src="images/restaurant_food.jpg" alt="" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero