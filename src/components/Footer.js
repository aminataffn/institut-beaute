import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <div className='footer'>
  
  
        <div className='logo'>
          <p className='up-logo'>BEAUTY & CARE</p>
          <p className='sub-logo'>INSTITUT BEAUTE ET BIEN-ETRE </p>
        </div>
  
        <div className='footer-nav'>
          <ul>
            <li><Link to='/'>ACCUEIL</Link></li>
            <li><Link to='/prestations'>PRESTATIONS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><a href='https://www.planity.com/beauty-and-care-92500-rueil-malmaison' target='_blank'>RESERVER</a></li>
          </ul>
        </div>
  
        <div className='copyright'>
          <p>2023 © Beauty&Care</p> 
        </div>
  
      </div>
    )
  }

  export default Footer