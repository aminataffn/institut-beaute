import '../styles/FollowUs.css'
import instagram from '../assets/instagram.png'
import insta1 from '../assets/insta-1.jpeg'
import insta2 from '../assets/insta-2.jpeg'
import insta3 from '../assets/insta-3.jpeg'
import insta4 from '../assets/insta-4.jpeg'

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

  export default FollowUs