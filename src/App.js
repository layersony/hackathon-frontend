import './App.css';
import { Routes, Route} from "react-router-dom"

// components
import Hackathon from './Components/Hackathon';
import Navigationbar from './Components/Navbar';
import HackathonDetail from './Components/HackathonDetail';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/hackathon/:id" element={<HackathonDetail />} />
        <Route exact path='/' element={<Hackathon />} />
      </Routes>
    </>
  )
}

export default App;
