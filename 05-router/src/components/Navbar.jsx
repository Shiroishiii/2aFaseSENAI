import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to={'/'} className='link-style'>Home Page</Link>
        <Link to={'/pagina1'} className='link-style'>Pagina1</Link>
        <Link to={'/pagina2'} className='link-style'>Pagina2</Link>
        <Link to={'/pagina3'} className='link-style'>Pagina3</Link>
        <Link to={'/produtos'} className='link-style'>Produtos</Link>
    </nav>
  )
}

export default Navbar