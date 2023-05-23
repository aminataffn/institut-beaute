import '../styles/FollowUs.css'
import instagram from '../assets/instagram.png'
import insta1 from '../assets/insta-1.jpeg'
import insta2 from '../assets/insta-2.jpeg'
import insta3 from '../assets/insta-3.jpeg'
import insta4 from '../assets/insta-4.jpeg'

const photos = [
  { src: insta1 },
  { src: insta2 },
  { src: insta3 },
  { src: insta4 }
];


function FollowUs() {
    return(
      <div className='follow-us'>
        <p className='follow-us-title'>SUIVEZ-NOUS SUR </p>
        <img src={instagram} className='instagram' />

        <ul className='follow-us-gallery'>
          {photos.map((photo, index) => (
          <li className='follow-us-photo' key={index}>
            <img src={photo.src} alt={`Instagram photo ${index + 1}`} />
          </li>
          ))}
        </ul>
        
        <p className='follow-us-alt'>@BEAUTYNCARE92</p>
      </div>
    )
  }

  export default FollowUs