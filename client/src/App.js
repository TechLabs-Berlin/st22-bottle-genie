import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Homepage />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
