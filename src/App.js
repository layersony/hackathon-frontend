import './App.css';
import { Routes, Route} from "react-router-dom"

// components
import Home from './Components/Home';
import Navigationbar from './Components/Navbar';
import HackathonDetail from './Components/HackathonDetail';
import CreateUser from './Components/CreateUser';
import CreateEvent from './Components/CreateEvent';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/hackathon/book/:id" element={<CreateEvent />} />
        <Route path="/register/user" element={<CreateUser />} />
        <Route path="/hackathon/:id" element={<HackathonDetail />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
