import React from 'react'
import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Testimonials() {

  const customerReviews = [
      {
          "id": 1,
          "name": "James Smith",
          "img": "images/man-1.jpg",
          "rating": 5,
          "quote": "Little Lemon is the place to go for a top-notch dining experience. The food was exquisite, and the presentation was impressive."
      },
      {
          "id": 2,
          "name": "Sarah Johnson",
          "img": "images/woman-1.jpg",
          "rating": 4,
          "quote": "The Little Lemon Restaurant is a hidden gem! I had the most delightful dining experience here. The food was impeccable, and the service was outstanding."
      },
      {
          "id": 3,
          "name": "David Rodriguez",
          "img": "images/man-2.jpg",
          "rating": 4.5,
          "quote": "Little Lemon's menu is a refreshing twist on classic dishes. I thoroughly enjoyed my meal, and the ambiance is perfect for a cozy dinner."
      },
      {
          "id": 4,
          "name": "Emily O'neill",
          "img": "images/woman-2.jpg",
          "rating": 5,
          "quote": "Little Lemon offers a unique culinary journey. I was pleasantly surprised by the fusion of flavors in their dishes."
      }
  ]

  return (
    <section id="Testimonials">
        <div className="container">
            <h1>Testimonials</h1>
            <div className="reviews">
              {
                customerReviews.map((review) => (
                  <div key={review.id} className="reviews_card">
                    <figure>
                      <img src={review.img} alt={review.name} />
                    </figure>
                    <div className="reviews_content">
                      <div className="ratings">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                      </div>
                      <h3>{review.name}</h3>
                    </div>
                    <p>
                      {review.quote}
                    </p>
                  </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Testimonials