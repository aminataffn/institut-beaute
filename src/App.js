import React from 'react';
import './App.css'
import logo from './assets/beautyncare.jpeg'
import timeToRelax from './assets/time_to_relax.png'
import instagram from './assets/instagram.png'
import insta1 from './assets/insta-1.jpeg'
import insta2 from './assets/insta-2.jpeg'
import insta3 from './assets/insta-3.jpeg'
import insta4 from './assets/insta-4.jpeg'
import decouvrir1 from './assets/1.png'
import decouvrir2 from './assets/2.png'
import decouvrir3 from './assets/3.png'
import decouvrir4 from './assets/4.png'




function Banner() {
  return (
    <div className='banner'>
      <p className='banner-text'>Bienvenue dans votre institut Beauty & Care </p>
      <p className='banner-text'>INSTAGRAM | AVIS</p>
    </div>
  )
}

function NavBar() {
  return (
    <nav className='nav-bar'>
        <a href=''><img src={logo} className='loogo'/></a>
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

function AboutUs() {
  return (
    <div className='about-us'>
      <h2 className='about-us-title'>À PROPOS DE NOUS</h2>
      <p className='about-us-subtitle'>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sed., Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.,Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.</p>
      <img src={timeToRelax} className='time-to-relax-img' />
    </div>
  )
}

function Decouvrir() {
  return (
    <div className='decouvrir'>
      <div className='bloc-1'>
        <div className='bloc-1-side' id='decouvrir-image1'>
        </div>
        <div className='bloc-1-side'>
          <div className='bloc-1-right-line'>
            <div className='decouvrir-text'>
              <h4>ESTETIQUES</h4>
              <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.</p>
              <button className='decouvrir-button'>Découvrir</button>
            </div>
            <div id='decouvrir-image2'>
            </div>
          </div>
          <div className='bloc-1-right-line'>
            <div id='decouvrir-image3'>
            </div>
            <div className='decouvrir-text'>
              <h4>SOINS DES CHEVEUX</h4>
              <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.</p>
              <button className='decouvrir-button'>Découvrir</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bloc-2'>
        <div className='bloc-2-left' id='decouvrir-image4'>
        </div>
        <div className='bloc-2-left decouvrir-text'>
          <h4>SOINS DU CORPS</h4>
          <p>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.</p>
          <button className='decouvrir-button'>Découvrir</button>
        </div>
        <div className='bloc-2-right' id='decouvrir-image5'>
        </div>
      </div>

    </div>
  )
}

function FollowUs() {
  return(
    <div className='follow-us'>
      <p className='follow-us-title'>SUIVEZ-NOUS SUR </p>
      <img src={instagram} className='instagram' />
      <ul className='follow-us-gallery'>
        <li className='follow-us-photo'><img src={insta1}  /></li>
        <li className='follow-us-photo'><img src={insta2} /></li>
        <li className='follow-us-photo'><img src={insta3} /></li>
        <li className='follow-us-photo'><img src={insta4} /></li>
      </ul>
      <p className='follow-us-alt'>@BEAUTYNCARE92</p>
    </div>
  )
}

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.547071138133!2d2.164928255419922!3d48.879435099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405b926723c47533%3A0x1b742494da5a3566!2sBeauty%20%26%20Care!5e0!3m2!1sfr!2sfr!4v1683217769900!5m2!1sfr!2sfr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='contact-infos'>
        <div className='info'>
          <h3>ADRESSE</h3>
            <ul>
              <li>10 Boulevard du Maréchal Joffre,</li>
              <li>92500 Rueil-Malmaison</li>
            </ul>
        </div>
        <div className='info'>
          <h3>HORAIRE</h3>
          <ul>
            <li>LUNDI : Fermé</li>
            <li>MARDI : 11h-20h</li>
            <li>MERCREDI : 11h-20h</li>
            <li>JEUDI : 11h-20h</li>
            <li>VENDREDI : 11h-20h</li>
            <li>SAMEDI : 11h-20h</li>
            <li>DIMANCHE : 11h-20h</li>
          </ul>
        </div>
        <div className='info'>
          <h3>CONTACT</h3>
          <ul>
            <li>TELEPHONE : 09 86 32 94 95</li>
            <li>INSTAGRAM : beautyncare92</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>


      <div className='logo'>
        <p className='up-logo'>BEAUTY & CARE</p>
        <p className='sub-logo'>INSTITUT BEAUTE ET BIEN-ETRE </p>
      </div>

      <div className='footer-nav'>
        <ul>
          <li>Accueil</li>
          <li>Prestations</li>
          <li>Contact</li>
          <li>RESERVER</li>
        </ul>
      </div>

      <div className='copyright'>
        <p>2023 © Beauty&Care</p> 
      </div>

    </div>
  )
}


function App() {
  return (
    <div>
      <Banner />
      <Header />
      <AboutUs />
      <Decouvrir />
      <FollowUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App