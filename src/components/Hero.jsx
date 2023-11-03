import { useNavigate } from 'react-router-dom'

function Hero() {

    const navigate = useNavigate();

    const reserveBtn = () => {
        navigate('/reserve');
    }

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
                <button type="button" onClick={reserveBtn}>Reserve a Table</button>
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