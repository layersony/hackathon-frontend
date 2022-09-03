import './App.css';
import { Routes, Route} from "react-router-dom"

// components
import Hackathon from './Components/Hackathon';
import Navigationbar from './Components/Navbar';
import HackathonDetail from './Components/HackathonDetail';
import CreateUser from './Components/CreateUser';
import CreateEvent from './Components/CreateEvent';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/hackathon/book/:id" element={<CreateEvent />} />
        <Route path="/register/user" element={<CreateUser />} />
        <Route path="/hackathon/:id" element={<HackathonDetail />} />
        <Route exact path='/' element={<Hackathon />} />
      </Routes>
    </>
  )
}

export default App;
