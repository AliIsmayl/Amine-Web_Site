import './App.css'
import { BrowserRouter , Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './LayOut/Navbar/Navbar';
import Footer from './LayOut/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import AboutRehberlik from './Pages/AboutRehberlik';
import AboutHistory from './Pages/AboutHistory';
import AboutCommitet from './Pages/AboutCommitet';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/about" element={<AboutUs/>} /> 
          <Route path="/rehberlik" element={<AboutRehberlik/>} /> 
          <Route path="/tariximiz" element={<AboutHistory/>} /> 
          <Route path="/icraiyye-comitesi" element={<AboutCommitet/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
