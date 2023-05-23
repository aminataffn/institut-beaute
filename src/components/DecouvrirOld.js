import '../styles/DecouvrirOld.css'
import decouvrir1 from '../assets/1.png'
import decouvrir2 from '../assets/2.png'
import decouvrir3 from '../assets/3.png'
import decouvrir4 from '../assets/4.png'

function DecouvrirOld() {
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

  export default DecouvrirOld