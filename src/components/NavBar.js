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
              <a href="https://www.planity.com/beauty-and-care-92500-rueil-malmaison" target='_blank'>RESERVER</a>
            </li>
          </ul>
        </nav>
    )
  }

  export default NavBar