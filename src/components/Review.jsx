
import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Review({name, img, rating, quote}) {
  return (
    <div className="reviews_card">
        <figure>
            <img src={img} alt={name} />
        </figure>
        <div className="reviews_content">
            <div className="ratings">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <h3>{name}</h3>
        </div>
        <p>
            {quote}
        </p>
    </div>
  )
}

export default Review