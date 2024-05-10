import './App.css'
import { BrowserRouter , Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './LayOut/Navbar/Navbar';
import Footer from './LayOut/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/about" element={<AboutUs/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
