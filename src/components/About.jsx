import React from 'react'

function About() {
  return (
    <section id="About">
        <div className="container">
            <div className="left-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Welcome to Little Lemon, where culinary excellence meets warm hospitality. Nestled in the heart of our vibrant city, we are passionate about delivering a remarkable dining experience. Our journey began with a simple yet profound vision: to craft dishes that celebrate both tradition and innovation. At Little Lemon, we take pride in sourcing the finest ingredients and infusing them with creativity to offer a menu that tantalizes your taste buds and ignites your culinary curiosity. With a commitment to outstanding service, a welcoming atmosphere, and a dedication to creating memorable moments, we invite you to savor the flavors and ambiance that make Little Lemon a special place for every occasion. Thank you for joining us on this gastronomic adventure.
                </p>
            </div>
            <div className="right-section">
                <figure>
                    <img src="images/mario_adrian-a.jpg" alt="Mario & Adrian" />
                </figure>
                <figure>
                    <img src="images/mario_adrian-b.jpg" alt="Mario & Adrian" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default About