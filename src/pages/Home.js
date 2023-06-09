import '../styles/App.css'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Decouvrir from '../components/Decouvrir'
import FollowUs from '../components/FollowUs'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <FollowUs />
      <Contact />
    </div>
  );
}

export default Home