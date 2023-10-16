import React from 'react'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer>
      <div className="container">
        <figure>
          <img src="images/logo-v-yw.png" alt="Little Lemon" />
        </figure>
        <div className="footer-1">
          <h3>Pages</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <ul>
            <li>
              Silk Road, Barbican, London E2Y, UK
            </li>
            <li>
              +33-555-654321
            </li>
            <li>
              info@littlelemon.com
            </li>
          </ul>
        </div>
        <div className="footer-3">
          <h3>Socials</h3>
          <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} title="Facebook" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} title="Twitter" />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} title="Instagram" />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} title="YouTube" />
              </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright &copy; 2023 Little Lemon
        </div>
      </div>
    </footer>
  )
}

export default Footer