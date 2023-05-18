import '../styles/NavBar.css'
import logo from '../assets/beautyncare.jpeg'

function NavBar() {
    return (
      <nav className='nav-bar'>
          <a href=''><img src={logo} className='logo-image'/></a>
          <ul className='tabs'>
            <li className='tab'>
              <a href="#">ACCUEIL</a>
            </li>
            <li className='tab'>
              <a href="#">PRESTATIONS</a>
            </li>
            <li className='tab'>
              <a href="#">CONTACT</a>
            </li>
            <li className='tab'id='reserver'>
              <a href="#">RESERVER</a>
            </li>
          </ul>
        </nav>
    )
  }

  export default NavBar