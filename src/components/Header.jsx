
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header>
      <Link to="/"><img src="/images/logo-h-yw.png" alt="Little Lemon" /></Link>
      <Nav />
    </header>
  )
}

export default Header