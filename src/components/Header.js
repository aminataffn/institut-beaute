import '../styles/Header.css'
import NavBar from './NavBar'

function Header() {
    return (
      <header className='header'>
        <NavBar />
        <div className='time-to-relax'>
          <h1 className='title'>L'INSTITUT BEAUTÉ ET BIEN-ÊTRE</h1>
          <p className='subtitle'>Et quoniam apud eos ut in capite mundi morborum acerbi.</p>
          <button className='button'>RESERVATION</button>
        </div>
      </header>
    );
  }

  export default Header