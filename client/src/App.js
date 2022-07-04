import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import LogIn from "./components/LogIn";
import Map from "./pages/Map"
import {berlinDistrictsXY} from "./data/data"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/map' element={<Map berlinDistrictsXY={berlinDistrictsXY}/>} />
      </Routes>
    </div>
  );
}

export default App;
