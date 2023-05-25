import '../styles/NavBar.css'
import logo from '../assets/beautyncare.jpeg'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav className='nav-bar'>
          <Link to='/'><img src={logo} className='logo-image'/></Link>
          <ul className='tabs'>
            <li className='tab'>
              <Link to='/'>ACCUEIL</Link>
            </li>
            <li className='tab'>
              <Link to='/prestations'>PRESTATIONS</Link>
            </li>
            <li className='tab'>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li className='tab'id='reserver'>
              <a href='https://www.planity.com/beauty-and-care-92500-rueil-malmaison' target='_blank'>RESERVER</a>
            </li>
          </ul>
        </nav>
    )
  }

  export default NavBar