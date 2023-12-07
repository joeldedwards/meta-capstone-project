import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  const [isShow, setShow] = useState(false);

  const toggleClass = () => {
    setShow(!isShow);
  }

  return (
    <>
      <nav>
        <ul className={isShow ? 'show' : ''}>
          <button type="button" onClick={toggleClass}><FontAwesomeIcon icon={faXmark} /></button>
          <li>
            <Link to="/" onClick={toggleClass}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleClass}>About</Link>
          </li>
          <li>
            <Link to="/reserve" onClick={toggleClass}>Reservations</Link>
          </li>
          <li>
            <Link to="/order" onClick={toggleClass}>Order Online</Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleClass}>Login</Link>
          </li>
        </ul>
        <button type="button" onClick={toggleClass}><FontAwesomeIcon icon={faBars} /></button>
      </nav>
    </>
  )
}

export default Nav