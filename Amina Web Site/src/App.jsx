import './App.css'
import { BrowserRouter , Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './LayOut/Navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
