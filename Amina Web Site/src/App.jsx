import './App.css'
import { BrowserRouter , Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './LayOut/Navbar/Navbar';
import Footer from './LayOut/Footer/Footer';
import AboutRehberlik from './Pages/AboutRehberlik';
import AboutHistory from './Pages/AboutHistory';
import AboutCommitet from './Pages/AboutCommitet';
import Contact from './Pages/Contact';
import NewsCard from './Components/NewsComponents/NewsCard/NewsCard';
import NewsDetailPage from './Components/NewsComponents/NewsCard/NewsDetailPage/NewsDetailPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/rehberlik" element={<AboutRehberlik/>} /> 
          <Route path="/tariximiz" element={<AboutHistory/>} /> 
          <Route path="/icraiyye-comitesi" element={<AboutCommitet/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/detail" element={<NewsCard/>} /> 
          <Route path="/yoxla" element={<NewsDetailPage/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
