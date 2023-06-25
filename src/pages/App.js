import '../styles/App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import PrestationsPage from './PrestationsPage';
import ContactPage from './ContactPage';
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/prestations' element={<PrestationsPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App