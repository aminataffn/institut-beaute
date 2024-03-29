import '../styles/App.css'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Decouvrir from '../components/Decouvrir'
import FollowUs from '../components/FollowUs'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Decouvrir />
      <FollowUs />
      <Contact />
    </div>
  );
}

export default HomePage