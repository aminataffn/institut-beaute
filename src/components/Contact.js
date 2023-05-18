import '../styles/Contact.css'

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

  export default Contact