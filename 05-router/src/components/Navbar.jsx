import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to={'/'}>Home Page</Link>
        <Link to={'/pagina1'}>Pagina1</Link>
        <Link to={'/pagina2'}>Pagina2</Link>
        <Link to={'/pagina3'}>Pagina3</Link>
    </nav>
  )
}

export default Navbar