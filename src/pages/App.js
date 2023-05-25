import '../styles/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Prestations from './Prestations';
import Contact from './Contact';
import Banner from '../components/Banner'
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/prestations' element={<Prestations />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App