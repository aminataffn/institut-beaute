import '../styles/AboutUs.css'
import timeToRelax from '../assets/time_to_relax.png'

function AboutUs() {
    return (
      <div className='about-us'>
        <h2 className='about-us-title'>À PROPOS DE NOUS</h2>
        <p className='about-us-subtitle'>Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sed., Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.,Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel seda.</p>
        <img src={timeToRelax} className='time-to-relax-img' />
      </div>
    )
  }

  export default AboutUs