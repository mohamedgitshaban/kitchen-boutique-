import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from "./Pages/Home.js";
 import Contact from './Pages/Contact';
import Appointment from "./Pages/Appointment.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services';
import Events from './Pages/Events';
import Products from './Pages/Products';
import AboutUs from './Pages/Aboutus.js';
import TopNav from './Components/TopNav.js';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
    <TopNav/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Event" element={<Events/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/Contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
