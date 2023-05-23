import '../styles/AboutUs.css'
import timeToRelax from '../assets/time_to_relax.png'

function AboutUs() {
    return (
      <div className='about-us'>
        <h2 className='about-us-title'>À PROPOS DE NOUS</h2>
        <p className='about-us-subtitle'>Bienvenue chez Beauty & Care, un superbe salon de beauté et de bien-être situé dans le centre de Rueil-Malmaison, à quelques pas de la mairie. Pousser les portes du salon, c'est découvrir un salon très joliment décoré et apaisant dans lequel on se sent bien ! C'est une équipe au petits soins qui prend soin de ses clients et qui propose des prestations de qualité : épilation, beauté des ongles, soins de cheveux, hammam, sauna, rien n'est oublié pour passer un superbe moment de beauté et de bien-être.</p>
        <img src={timeToRelax} className='time-to-relax-img' />
      </div>
    )
  }

  export default AboutUs